/**
 * Exchange rate: EUR to USD
 * Using approximate rate of 1 EUR = 1.10 USD
 */
const EUR_TO_USD_RATE = 1.161616161616162

/**
 * Converts a EUR price string to USD
 * @param eurPrice - Price string in format "€99" or "€99.99"
 * @returns Price string in format "$109" or "$108.90"
 */
export function convertEurToUsd(eurPrice: string): string {
  // Extract the numeric value from the EUR string
  const numericValue = parseFloat(eurPrice.replace('€', '').replace(',', '.'))

  if (isNaN(numericValue)) {
    return eurPrice // Return original if parsing fails
  }

  // Convert to USD and round to 2 decimal places
  const usdValue = numericValue * EUR_TO_USD_RATE
  const roundedUsd = Math.round(usdValue)

  // Format as USD
  return `$${roundedUsd}`
}

/**
 * Formats a price string based on whether user is in Europe
 * @param eurPrice - Price string in EUR format "€99"
 * @param isEurope - Whether user is in Europe
 * @returns Formatted price string in EUR or USD
 */
export function formatPrice(eurPrice: string, isEurope: boolean): string {
  if (isEurope) {
    return eurPrice
  }
  return convertEurToUsd(eurPrice)
}
