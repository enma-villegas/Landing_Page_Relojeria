import type { ImageMetadata } from "astro";
import watch01 from "../assets/watches/watch-01.jpg";
import watch02 from "../assets/watches/watch-02.jpg";
import watch03 from "../assets/watches/watch-03.jpg";
import watch04 from "../assets/watches/watch-04.jpg";
import watch05 from "../assets/watches/watch-05.jpg";
import watch06 from "../assets/watches/watch-06.jpg";
import watch07 from "../assets/watches/watch-07.jpg";
import watch08 from "../assets/watches/watch-08.jpg";

export type WatchCategory = "Automático" | "Lujo" | "Deportivo" | "Clásico";

export interface Watch {
  id: string;
  brand: string;
  model: string;
  category: WatchCategory;
  movement: string;
  caseMaterial: string;
  diameterMm: number;
  priceCRC: number;
  image: ImageMetadata;
  imageAlt: string;
  badge?: "Nuevo" | "Última unidad";
  description: string;
}

export const watches: Watch[] = [
  {
    id: "valtere-chronomaster",
    brand: "Valtère",
    model: "Chronomaster Heritage",
    category: "Automático",
    movement: "Calibre V-82 Automático (42h reserva)",
    caseMaterial: "Acero inoxidable 316L",
    diameterMm: 41,
    priceCRC: 1250000,
    image: watch01,
    imageAlt: "Reloj automático Valtère Chronomaster Heritage con esfera antracita y caja de acero",
    badge: "Nuevo",
    description: "Diseño cronógrafo con complicaciones suizas de precisión y cristal de zafiro antireflectivo."
  },
  {
    id: "hartmann-regulator",
    brand: "Hartmann & Söhne",
    model: "Regulator Meister",
    category: "Automático",
    movement: "Manufactura automática HS-100",
    caseMaterial: "Acero cepillado y bisel pulido",
    diameterMm: 40,
    priceCRC: 1680000,
    image: watch02,
    imageAlt: "Reloj Hartmann & Söhne Regulator Meister con movimiento automático y correa de cuero",
    description: "Distribución clásica regulador con lectura descentrada de horas y minutos independientes."
  },
  {
    id: "montclair-tourbillon",
    brand: "Montclair",
    model: "Souverain Rose Gold",
    category: "Lujo",
    movement: "Mecánico de cuerda manual ultra-delgado",
    caseMaterial: "Oro rosa de 18K y zafiro frontal y posterior",
    diameterMm: 39,
    priceCRC: 4800000,
    image: watch03,
    imageAlt: "Reloj de alta gama Montclair Souverain en caja de oro rosa de 18 quilates",
    badge: "Última unidad",
    description: "La cumbre de la elegancia atemporal. Fondo visto con acabado Côtes de Genève artesanal."
  },
  {
    id: "aurelius-imperator",
    brand: "Aurelius",
    model: "Imperator Platinum",
    category: "Lujo",
    movement: "Automático Alta Frecuencia 36.000 vph",
    caseMaterial: "Platino 950 con índices en oro blanco",
    diameterMm: 42,
    priceCRC: 3950000,
    image: watch04,
    imageAlt: "Reloj de lujo Aurelius Imperator Platinum con esfera plateada guilloché",
    description: "Presencia sobria y majestuosa con esfera guilloché trabajada a mano y reserva de 70 horas."
  },
  {
    id: "kessler-abyss",
    brand: "Kessler",
    model: "Abyss Diver 300M",
    category: "Deportivo",
    movement: "Calibre K-Pro Resistencia extrema",
    caseMaterial: "Titanio Grado 5 con bisel cerámico",
    diameterMm: 43,
    priceCRC: 890000,
    image: watch05,
    imageAlt: "Reloj deportivo de buceo Kessler Abyss Diver 300M en titanio con bisel cerámico negro",
    badge: "Nuevo",
    description: "Construcción hermética a 300 metros, válvula de escape de helio y legibilidad nocturna Super-LumiNova."
  },
  {
    id: "norrland-nordic-chrono",
    brand: "Norrland",
    model: "Nordic Expedition Chrono",
    category: "Deportivo",
    movement: "Cronógrafo Mecánico de precisión",
    caseMaterial: "Acero DLC negro mate antirayaduras",
    diameterMm: 42,
    priceCRC: 740000,
    image: watch06,
    imageAlt: "Reloj deportivo Norrland Nordic Expedition Chrono con acabado táctico negro mate",
    description: "Diseñado para resistir condiciones hostiles con pulsadores ergonómicos y correa de caucho FKM."
  },
  {
    id: "valtere-elegance",
    brand: "Valtère",
    model: "Tradition Slimline",
    category: "Clásico",
    movement: "Movimiento mecánico suizo de 2.4mm",
    caseMaterial: "Acero inoxidable pulido a espejo",
    diameterMm: 38,
    priceCRC: 520000,
    image: watch07,
    imageAlt: "Reloj de vestir clásico Valtère Tradition Slimline con perfil ultra delgado",
    description: "Perfil minimalista refinado concebido para acompañar trajes de etiqueta con máxima discreción."
  },
  {
    id: "hartmann-classique",
    brand: "Hartmann & Söhne",
    model: "Classique Roman Numerals",
    category: "Clásico",
    movement: "Automático HS-50 Calibre clásico",
    caseMaterial: "Acero pulido con fondo atornillado",
    diameterMm: 39,
    priceCRC: 650000,
    image: watch08,
    imageAlt: "Reloj clásico Hartmann & Söhne Classique con esfera esmaltada y números romanos",
    badge: "Última unidad",
    description: "Esfera esmaltada de porcelana blanca con agujas azuladas al fuego y correa de piel de becerro."
  }
];
