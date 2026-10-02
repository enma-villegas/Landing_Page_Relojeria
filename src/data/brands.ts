export interface Brand {
  id: string;
  name: string;
  origin: string;
  specialty: string;
}

export const brands: Brand[] = [
  {
    id: "valtere",
    name: "Valtère",
    origin: "Ginebra",
    specialty: "Cronografía de precisión y manufactura tradicional"
  },
  {
    id: "hartmann-sohne",
    name: "Hartmann & Söhne",
    origin: "Glashütte",
    specialty: "Ingeniería sajona y reguladores mecánicos"
  },
  {
    id: "montclair",
    name: "Montclair",
    origin: "Le Locle",
    specialty: "Alta relojería en metales preciosos y grandes complicaciones"
  },
  {
    id: "aurelius",
    name: "Aurelius",
    origin: "Neuchâtel",
    specialty: "Calibres de alta frecuencia y acabados a mano"
  },
  {
    id: "kessler",
    name: "Kessler",
    origin: "Schaffhausen",
    specialty: "Relojes herramienta de buceo y resistencia extrema"
  },
  {
    id: "norrland",
    name: "Norrland",
    origin: "Estocolmo",
    specialty: "Cronógrafos de expedición y materiales técnicos avanzados"
  }
];
