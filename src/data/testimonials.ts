export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  city: string;
  country: string;
  watchPurchased: string;
  quote: string;
  isVerified: boolean;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "andres-mora",
    name: "Andrés Mora C.",
    initials: "AM",
    city: "Escazú",
    country: "Costa Rica",
    watchPurchased: "Valtère Chronomaster Heritage",
    quote:
      "La transparencia en la verificación del número de serie y la entrega personal en su salón de Barrio Escalante me dieron total tranquilidad. Una atención impecable.",
    isVerified: true,
    date: "Febrero 2025"
  },
  {
    id: "rodrigo-valverde",
    name: "Rodrigo Valverde G.",
    initials: "RV",
    city: "Curridabat",
    country: "Costa Rica",
    watchPurchased: "Hartmann & Söhne Regulator Meister",
    quote:
      "Llevaba meses buscando una pieza regulador auténtica sin tener que importar a ciegas. El reloj vino impecable, con certificado timbrado y prueba en cronocomparador.",
    isVerified: true,
    date: "Enero 2025"
  },
  {
    id: "gabriel-solis",
    name: "Gabriel Solís T.",
    initials: "GS",
    city: "Santa Ana",
    country: "Costa Rica",
    watchPurchased: "Kessler Abyss Diver 300M",
    quote:
      "Excelente servicio por WhatsApp, respondieron todas mis consultas técnicas en minutos y la entrega en el GAM fue el mismo día de la confirmación. 100% recomendado.",
    isVerified: true,
    date: "Noviembre 2024"
  }
];
