export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "garantia",
    question: "¿Qué cubre la garantía de 12 meses?",
    answer:
      "Nuestra garantía escrita de 12 meses cubre el funcionamiento interno del calibre, precisión del movimiento y hermeticidad de fábrica. Cada pieza se entrega con certificado timbrado de garantía y tarjeta de registro."
  },
  {
    id: "autenticidad",
    question: "¿Cómo garantizan que los relojes son 100% originales?",
    answer:
      "Cada reloj pasa por una rigurosa inspección técnica de 24 puntos antes de ingresar a nuestro salón: verificación de número de serie con registros del fabricante, análisis microscópico de esfera/agujas y comprobación en cronocomparador suizo."
  },
  {
    id: "envios",
    question: "¿Cómo funcionan las entregas y envíos en Costa Rica?",
    answer:
      "Ofrecemos entrega personalizada y asegurada sin costo adicional en todo el Gran Área Metropolitana (GAM). Para el resto del país, realizamos envíos asegurados mediante mensajería privada de alta seguridad con código de seguimiento en tiempo real."
  },
  {
    id: "pagos",
    question: "¿Cuáles son los métodos de pago aceptados?",
    answer:
      "Aceptamos transferencias bancarias directas (IBAN en colones y dólares), SINPE Móvil para montos habilitados por su entidad bancaria, y tarjetas de crédito o débito con opción de tasa cero o minicuotas en nuestra boutique en Barrio Escalante."
  },
  {
    id: "apartados",
    question: "¿Cuentan con sistema de apartado o reserva de piezas?",
    answer:
      "Sí. Puede reservar cualquier pieza exclusiva con una seña del 30% del valor total, con un plazo de hasta 60 días para completar el saldo antes del retiro o entrega."
  },
  {
    id: "servicio-tecnico",
    question: "¿Ofrecen mantenimiento y servicio técnico posterior?",
    answer:
      "Contamos con taller especializado en Barrio Escalante para ajustes de brazalete, cambios de correa, pruebas de estanqueidad, lubricación y revisiones preventivas periódicas realizadas por relojeros calificados."
  }
];
