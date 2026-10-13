/**
 * Client-side LocalStorage utility for managing coupon activation records,
 * 24-hour countdown timers, and 2-day cooldown cycles.
 *
 * Lifecycle:
 * 1. Active: Valid for 24 hours with live countdown timer and discount.
 * 2. Blocked: Once 24 hours expire, blocked for 2 days (48 hours) with
 *    "Keine Plätze mehr verfügbar..." marquee & error message.
 * 3. Free again: After 2 days, automatically unblocked so the coupon can
 *    be used again for another 24 hours.
 */

export interface CouponActivationRecord {
  code: string
  discountText: string
  activatedAt: number
  expiresAt: number
  cooldownUntil: number
  isExpired?: boolean
  discount?: any
}

const STORAGE_PREFIX = 'typus_coupon_activation_'
const EXPIRED_PREFIX = 'typus_coupon_expired_'
const ACTIVE_COUPON_KEY = 'typus_active_coupon_code'

export const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000 // 24 hours (86,400,000 ms)
export const TWO_DAYS_COOLDOWN_MS = 2 * 24 * 60 * 60 * 1000 // 2 days (172,800,000 ms)

export const EXPIRED_COUPON_MESSAGE_DE =
  'Keine Plätze mehr verfügbar. Versuchen Sie es in einigen Tagen noch einmal. Gelegentlich werden Plätze vorübergehend frei.'

export const EXPIRED_COUPON_MESSAGE_EN =
  'No spots available anymore. Please try again in a few days. Occasionally spots become temporarily available.'

/**
 * Normalizes a coupon code to uppercase trimmed string.
 */
export function normalizeCouponCode(code?: string | null): string {
  return (code || '').trim().toUpperCase()
}

/**
 * Returns the storage key for a specific coupon code.
 */
export function getCouponStorageKey(normalizedCode: string): string {
  return `${STORAGE_PREFIX}${normalizedCode}`
}

/**
 * Returns the expired storage key for a specific coupon code.
 */
export function getCouponExpiredKey(normalizedCode: string): string {
  return `${EXPIRED_PREFIX}${normalizedCode}`
}

/**
 * Reads any stored record for the given code without filtering.
 */
export function getCouponRecord(code?: string | null): CouponActivationRecord | null {
  if (typeof window === 'undefined' || !window.localStorage) {
    return null
  }

  const normalized = normalizeCouponCode(code)
  if (!normalized) return null

  const key = getCouponStorageKey(normalized)
  const raw = window.localStorage.getItem(key)
  if (!raw) return null

  try {
    return JSON.parse(raw) as CouponActivationRecord
  } catch {
    return null
  }
}

/**
 * Checks whether a coupon code is currently in the 2-day blocked cooldown window.
 *
 * Rules:
 * - If currently within the active 24h window: returns FALSE (it's active).
 * - If past 24h window but within the 2-day cooldown (now < cooldownUntil): returns TRUE (blocked).
 * - If 2 days have elapsed since expiration (now >= cooldownUntil): returns FALSE (free to use again!).
 */
export function isCouponBlocked(code?: string | null): boolean {
  if (typeof window === 'undefined' || !window.localStorage) {
    return false
  }

  const normalized = normalizeCouponCode(code)
  if (!normalized) return false

  const record = getCouponRecord(normalized)
  if (!record) return false

  const now = Date.now()

  // 1. If still within the active 24-hour window
  if (now < record.expiresAt && !record.isExpired) {
    return false
  }

  // 2. Determine cooldown end (2 days from expiration)
  const cooldownUntil = record.cooldownUntil || (record.expiresAt + TWO_DAYS_COOLDOWN_MS)

  // 3. If within the 2-day cooldown period:
  if (now < cooldownUntil) {
    return true
  }

  // 4. After 2 days: cooldown has ended! Coupon is free to use again.
  // Clean up expired markers so it can be re-applied cleanly.
  window.localStorage.removeItem(getCouponExpiredKey(normalized))
  window.localStorage.removeItem(getCouponStorageKey(normalized))
  if (getActiveCouponCode() === normalized) {
    window.localStorage.removeItem(ACTIVE_COUPON_KEY)
  }

  return false
}

/**
 * Alias for isCouponBlocked for backwards-compatibility.
 */
export function isCouponExpired(code?: string | null): boolean {
  return isCouponBlocked(code)
}

/**
 * Marks a coupon as expired and sets its 2-day cooldown window.
 */
export function markCouponAsExpired(code: string): void {
  if (typeof window === 'undefined' || !window.localStorage) {
    return
  }

  const normalized = normalizeCouponCode(code)
  if (!normalized) return

  const now = Date.now()
  const key = getCouponStorageKey(normalized)
  const raw = window.localStorage.getItem(key)

  if (raw) {
    try {
      const data = JSON.parse(raw) as CouponActivationRecord
      data.isExpired = true
      data.expiresAt = Math.min(data.expiresAt, now)
      // 2 days cooldown from the expiration moment
      if (!data.cooldownUntil || data.cooldownUntil <= now) {
        data.cooldownUntil = now + TWO_DAYS_COOLDOWN_MS
      }
      window.localStorage.setItem(key, JSON.stringify(data))
    } catch {}
  } else {
    // Save minimal expired record with 2-day cooldown
    const record: CouponActivationRecord = {
      code: normalized,
      discountText: '',
      activatedAt: now - TWENTY_FOUR_HOURS_MS,
      expiresAt: now,
      cooldownUntil: now + TWO_DAYS_COOLDOWN_MS,
      isExpired: true,
    }
    window.localStorage.setItem(key, JSON.stringify(record))
  }

  // Set explicit expired marker
  window.localStorage.setItem(getCouponExpiredKey(normalized), 'true')

  // Clear active pointer if it matches
  if (getActiveCouponCode() === normalized) {
    window.localStorage.removeItem(ACTIVE_COUPON_KEY)
  }
}

/**
 * Safely retrieves an existing ACTIVE, unexpired coupon activation record from localStorage.
 * Automatically marks as expired and returns null if the 24-hour window has ended.
 */
export function getCouponActivation(code?: string | null): CouponActivationRecord | null {
  if (typeof window === 'undefined' || !window.localStorage) {
    return null
  }

  const normalized = normalizeCouponCode(code)
  if (!normalized) return null

  // If in the 2-day block, return null
  if (isCouponBlocked(normalized)) {
    return null
  }

  const record = getCouponRecord(normalized)
  if (!record) return null

  const now = Date.now()

  // Validate timestamps
  if (
    typeof record.activatedAt !== 'number' ||
    typeof record.expiresAt !== 'number' ||
    isNaN(record.activatedAt) ||
    isNaN(record.expiresAt)
  ) {
    return null
  }

  // Check 24-hour expiration
  if (record.expiresAt <= now || record.isExpired) {
    markCouponAsExpired(normalized)
    return null
  }

  return {
    code: normalized,
    discountText: record.discountText || '50% RABATT',
    activatedAt: record.activatedAt,
    expiresAt: record.expiresAt,
    cooldownUntil: record.cooldownUntil || (record.expiresAt + TWO_DAYS_COOLDOWN_MS),
    isExpired: false,
    discount: record.discount,
  }
}

/**
 * Saves a coupon activation into localStorage.
 * - If currently in the 2-day cooldown block, refuses to activate.
 * - If currently in an active 24-hour window, reuses the original expiry.
 * - If free/new (or 2-day cooldown has passed), starts a fresh 24-hour period.
 */
export function saveCouponActivation(
  code: string,
  discountText: string = '50% RABATT',
  discount?: any
): CouponActivationRecord {
  const normalized = normalizeCouponCode(code)
  const now = Date.now()

  // If currently blocked during the 2-day window, refuse re-activation
  if (isCouponBlocked(normalized)) {
    const existing = getCouponRecord(normalized)
    return {
      code: normalized,
      discountText: discountText || existing?.discountText || '50% RABATT',
      activatedAt: existing?.activatedAt || now - TWENTY_FOUR_HOURS_MS,
      expiresAt: existing?.expiresAt || now,
      cooldownUntil: existing?.cooldownUntil || now + TWO_DAYS_COOLDOWN_MS,
      isExpired: true,
      discount: discount !== undefined ? discount : existing?.discount,
    }
  }

  // Check if an existing valid activation already exists (within 24h window)
  const existing = getCouponActivation(normalized)

  let activatedAt: number
  let expiresAt: number
  let cooldownUntil: number

  if (existing && existing.expiresAt > now && !existing.isExpired) {
    // Reuse original timestamps during valid window
    activatedAt = existing.activatedAt
    expiresAt = existing.expiresAt
    cooldownUntil = existing.cooldownUntil || (expiresAt + TWO_DAYS_COOLDOWN_MS)
  } else {
    // Fresh cycle: 24 hours active + 2 days cooldown!
    activatedAt = now
    expiresAt = now + TWENTY_FOUR_HOURS_MS
    cooldownUntil = expiresAt + TWO_DAYS_COOLDOWN_MS
  }

  const record: CouponActivationRecord = {
    code: normalized,
    discountText: discountText || existing?.discountText || '50% RABATT',
    activatedAt,
    expiresAt,
    cooldownUntil,
    isExpired: false,
    discount: discount !== undefined ? discount : existing?.discount,
  }

  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.setItem(getCouponStorageKey(normalized), JSON.stringify(record))
    window.localStorage.setItem(ACTIVE_COUPON_KEY, normalized)
    // Clear any previous expired marker
    window.localStorage.removeItem(getCouponExpiredKey(normalized))
  }

  return record
}

/**
 * Returns the currently active coupon code from localStorage.
 */
export function getActiveCouponCode(): string | null {
  if (typeof window === 'undefined' || !window.localStorage) {
    return null
  }
  const code = window.localStorage.getItem(ACTIVE_COUPON_KEY)
  return code ? normalizeCouponCode(code) : null
}

/**
 * Sets the active coupon pointer in localStorage.
 */
export function setActiveCouponCode(code: string): void {
  if (typeof window === 'undefined' || !window.localStorage) {
    return
  }
  window.localStorage.setItem(ACTIVE_COUPON_KEY, normalizeCouponCode(code))
}

/**
 * Retrieves the currently active, unexpired coupon record.
 * If the active pointer points to an expired/blocked coupon, it clears it and returns null.
 */
export function getActiveCoupon(): CouponActivationRecord | null {
  if (typeof window === 'undefined' || !window.localStorage) {
    return null
  }

  const activeCode = getActiveCouponCode()
  if (activeCode) {
    if (isCouponBlocked(activeCode)) {
      markCouponAsExpired(activeCode)
      return null
    }
    const record = getCouponActivation(activeCode)
    if (record) {
      return record
    }
    window.localStorage.removeItem(ACTIVE_COUPON_KEY)
  }

  // Scan localStorage for any other valid unexpired coupon activation
  try {
    let latestValidRecord: CouponActivationRecord | null = null

    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i)
      if (key && key.startsWith(STORAGE_PREFIX)) {
        const rawCode = key.slice(STORAGE_PREFIX.length)
        if (!isCouponBlocked(rawCode)) {
          const record = getCouponActivation(rawCode)
          if (record) {
            if (!latestValidRecord || record.activatedAt > latestValidRecord.activatedAt) {
              latestValidRecord = record
            }
          }
        }
      }
    }

    if (latestValidRecord) {
      setActiveCouponCode(latestValidRecord.code)
      return latestValidRecord
    }
  } catch {
    // Ignore scan errors
  }

  return null
}

/**
 * Returns remaining seconds of the 2-day cooldown if coupon is currently blocked.
 */
export function getCouponRemainingCooldown(code?: string | null): number {
  const record = getCouponRecord(code)
  if (!record) return 0
  const now = Date.now()
  const cooldownUntil = record.cooldownUntil || (record.expiresAt + TWO_DAYS_COOLDOWN_MS)
  return Math.max(0, Math.floor((cooldownUntil - now) / 1000))
}

/**
 * Removes an activation record for a specific coupon (for testing or full reset).
 */
export function removeCouponActivation(code: string): void {
  if (typeof window === 'undefined' || !window.localStorage) {
    return
  }
  const normalized = normalizeCouponCode(code)
  window.localStorage.removeItem(getCouponStorageKey(normalized))
  window.localStorage.removeItem(getCouponExpiredKey(normalized))
  if (getActiveCouponCode() === normalized) {
    window.localStorage.removeItem(ACTIVE_COUPON_KEY)
  }
}
