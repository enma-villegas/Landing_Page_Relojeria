export interface BusinessHours {
  days: string;
  hours: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  eyebrow: string;
  description: string;
  url: string;
  ogImage: string;
  locale: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  instagram: string;
  instagramHandle: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    countryCode: string;
    postalCode: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
  };
  schedule: BusinessHours[];
  seo: {
    titleTemplate: string;
    defaultTitle: string;
    defaultDescription: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Cronos Relojería",
  tagline: "El tiempo se mide en detalles",
  eyebrow: "Relojería boutique · San José",
  description:
    "Especialistas en relojes 100% originales en Costa Rica. Piezas automáticas, de lujo, clásicas y deportivas con verificación de autenticidad y garantía escrita de 12 meses.",
  url: "https://landing-page-relojeria.pages.dev",
  ogImage: "/og-image.jpg",
  locale: "es_CR",
  phone: "+50688887777",
  phoneDisplay: "+506 8888-7777",
  whatsapp: "50688887777",
  whatsappDisplay: "8888-7777",
  instagram: "https://instagram.com/cronoscr",
  instagramHandle: "@cronoscr",
  address: {
    street: "Avenida 9, Calle 33",
    neighborhood: "Barrio Escalante",
    city: "San José",
    state: "San José",
    country: "Costa Rica",
    countryCode: "CR",
    postalCode: "10101",
    googleMapsUrl: "https://maps.google.com/?q=Barrio+Escalante+San+Jose+Costa+Rica",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9882987747875!2d-84.0658428241285!3d9.934958074151246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3656113b28b%3A0xe549bcf2e259b34b!2sBarrio%20Escalante%2C%20San%20Jos%C3%A9!5e0!3m2!1ses!2scr!4v1710000000000!5m2!1ses!2scr"
  },
  schedule: [
    { days: "Lunes a Viernes", hours: "10:00 – 19:00" },
    { days: "Sábados", hours: "10:00 – 16:00" },
    { days: "Domingos", hours: "Cerrado" }
  ],
  seo: {
    titleTemplate: "%s | Cronos Relojería",
    defaultTitle: "Cronos Relojería | Relojes Originales y Boutique en San José",
    defaultDescription:
      "Descubra piezas de alta relojería originales en San José, Costa Rica. Garantía oficial de 12 meses, verificación de autenticidad y atención personalizada en Barrio Escalante."
  }
};
