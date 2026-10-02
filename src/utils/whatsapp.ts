import { siteConfig } from "../data/site";

/**
 * Builds a typed WhatsApp URL with encoded message.
 */
export function buildWhatsappUrl(mensaje?: string): string {
  const defaultText = "Hola Cronos Relojería, me gustaría recibir más información sobre sus piezas disponibles.";
  const text = mensaje?.trim() ? mensaje.trim() : defaultText;
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds a personalized WhatsApp consultation message for a specific watch piece.
 */
export function buildWatchInquiryMessage(brand: string, model: string): string {
  return `Hola Cronos Relojería, me interesa consultar por la pieza ${brand} ${model}. ¿Sigue disponible?`;
}

/**
 * Builds a direct WhatsApp click-to-chat URL for a specific watch.
 */
export function buildWatchWhatsappUrl(brand: string, model: string): string {
  return buildWhatsappUrl(buildWatchInquiryMessage(brand, model));
}
