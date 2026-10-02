/**
 * Formats a numeric price into Costa Rican Colones (CRC) without decimals.
 * Output example: ₡1.250.000
 */
export function formatPrice(valor: number): string {
  return new Intl.NumberFormat("es-CR", {
    style: "currency",
    currency: "CRC",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  }).format(valor);
}
