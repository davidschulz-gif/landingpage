/**
 * Client-side LocalStorage utility for managing coupon activation records
 * and 24-hour countdown timers.
 */

export interface CouponActivationRecord {
  code: string
  discountText: string
  activatedAt: number
  expiresAt: number
  discount?: any   
}

const STORAGE_PREFIX = 'typus_coupon_activation_'  
const ACTIVE_COUPON_KEY = 'typus_active_coupon_code'  
export const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000 // 24 hours in milliseconds (86,400,000 ms)   

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
 * Safely retrieves an existing coupon activation record from localStorage.
 * Automatically removes and returns null if the record is expired or malformed.
 */
export function getCouponActivation(code?: string | null): CouponActivationRecord | null {
  if (typeof window === 'undefined' || !window.localStorage) {
    return null
  }

  const normalized = normalizeCouponCode(code)
  if (!normalized) return null

  const key = getCouponStorageKey(normalized)
  const raw = window.localStorage.getItem(key)
  if (!raw) return null

  try {
    const data = JSON.parse(raw) as CouponActivationRecord
    if (!data || typeof data !== 'object') {
      window.localStorage.removeItem(key)
      return null
    }

    const { activatedAt, expiresAt } = data
    const now = Date.now()

    // Validate timestamps
    if (
      typeof activatedAt !== 'number' ||
      typeof expiresAt !== 'number' ||
      isNaN(activatedAt) ||
      isNaN(expiresAt)
    ) {
      window.localStorage.removeItem(key)
      return null
    }

    // Check expiration
    if (expiresAt <= now) {
      // Expired: remove the record and clear active coupon if it matches
      window.localStorage.removeItem(key)
      if (getActiveCouponCode() === normalized) {
        window.localStorage.removeItem(ACTIVE_COUPON_KEY)
      }
      return null
    }

    return {
      code: normalized,
      discountText: data.discountText || '50% RABATT',
      activatedAt,
      expiresAt,
      discount: data.discount,
    }
  } catch {
    window.localStorage.removeItem(key)
    return null
  }
}

/**
 * Saves a coupon activation into localStorage.
 * If the coupon is already actively running a 24-hour window, reuse the original expiration timestamp.
 * If activating for the first time (or after expiration), starts a fresh 24-hour timer.
 */
export function saveCouponActivation(
  code: string,
  discountText: string = '50% RABATT',
  discount?: any
): CouponActivationRecord {
  const normalized = normalizeCouponCode(code)
  const now = Date.now()

  // Check if an existing valid activation already exists
  const existing = getCouponActivation(normalized)

  let activatedAt: number
  let expiresAt: number

  if (existing && existing.expiresAt > now) {
    // Reuse original timestamps! Never reset expiration on re-activation during valid window
    activatedAt = existing.activatedAt
    expiresAt = existing.expiresAt
  } else {
    // Start fresh 24-hour period
    activatedAt = now
    expiresAt = now + TWENTY_FOUR_HOURS_MS
  }

  const record: CouponActivationRecord = {
    code: normalized,
    discountText: discountText || existing?.discountText || '50% RABATT',
    activatedAt,
    expiresAt,
    discount: discount !== undefined ? discount : existing?.discount,
  }

  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.setItem(getCouponStorageKey(normalized), JSON.stringify(record))
    window.localStorage.setItem(ACTIVE_COUPON_KEY, normalized)
  }

  return record
}

/**
 * Returns the currently active coupon code.
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
 * If the active pointer points to an expired coupon, it clears it and looks for
 * any other valid unexpired coupon record in localStorage.
 */
export function getActiveCoupon(): CouponActivationRecord | null {
  if (typeof window === 'undefined' || !window.localStorage) {
    return null
  }

  const activeCode = getActiveCouponCode()
  if (activeCode) {
    const record = getCouponActivation(activeCode)
    if (record) {
      return record
    }
    // Expired or missing: remove active pointer
    window.localStorage.removeItem(ACTIVE_COUPON_KEY)
  }

  // Scan localStorage for any other valid unexpired coupon activation
  try {
    let latestValidRecord: CouponActivationRecord | null = null

    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i)
      if (key && key.startsWith(STORAGE_PREFIX)) {
        const rawCode = key.slice(STORAGE_PREFIX.length)
        const record = getCouponActivation(rawCode)
        if (record) {
          if (!latestValidRecord || record.activatedAt > latestValidRecord.activatedAt) {
            latestValidRecord = record
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
 * Removes an activation record for a specific coupon.
 */
export function removeCouponActivation(code: string): void {
  if (typeof window === 'undefined' || !window.localStorage) {
    return
  }
  const normalized = normalizeCouponCode(code)
  window.localStorage.removeItem(getCouponStorageKey(normalized))
  if (getActiveCouponCode() === normalized) {
    window.localStorage.removeItem(ACTIVE_COUPON_KEY)
  }
}
