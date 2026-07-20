import type { FaqItem } from '@/lib/faq-global';

/**
 * Spanische Fassung der globalen Startseiten-FAQ. Gleiche Anzahl und
 * Reihenfolge wie `GLOBAL_FAQ` — sonst passt das FAQ-JSON-LD nicht mehr.
 *
 * Deutsche Rechts- und Sozialversicherungsbegriffe bleiben bei der ersten
 * Nennung in Klammern stehen, weil es dafür keine spanische Entsprechung gibt.
 * Bewusst ohne Markdown-Sternchen: Die Strings werden als reiner Text
 * ausgegeben (auch ins JSON-LD), Sternchen wären dort sichtbar.
 */
export const GLOBAL_FAQ_ES: readonly FaqItem[] = [
  {
    question: '¿Qué distingue a Heilpraxis Frommholz de otros servicios de cuidados?',
    answer:
      'Trabajamos exclusivamente en régimen privado — no facturamos al seguro público de dependencia (Pflegekasse). Eso nos permite ofrecer una atención personalizada, uno a uno, en bloques reales de horas, en lugar de rondas de quince minutos. Nuestro equipo es reducido y estable, de modo que las clientas y los clientes ven siempre las mismas caras de confianza. Su titular, Simeon Frommholz, es un Heilpraktiker (profesional sanitario autorizado conforme a la legislación alemana) — lo que significa que determinados servicios también pueden facturarse como servicios de Heilpraktiker.',
  },
  {
    question: '¿Facturan ustedes al seguro público de dependencia?',
    answer:
      'No. Somos un servicio de cuidados puramente privado. Puede destinar la asignación por dependencia (Pflegegeld) que ya perciba a cubrir parte de nuestra factura — esa es una decisión enteramente suya. No facturamos directamente al Pflegekasse por prestaciones en especie (Sachleistungen).',
  },
  {
    question: '¿Con qué rapidez pueden comenzar?',
    answer:
      'Para solicitudes urgentes (acompañamiento junto a la cama, cuidado nocturno) a menudo el mismo día, o en un plazo de 24 a 48 horas. Para compromisos de mayor duración (atención las veinticuatro horas, transición hasta una plaza en residencia) solemos necesitar un preaviso de cinco a diez días.',
  },
  {
    question: '¿Qué zonas de la ciudad atienden?',
    answer:
      'Nuestras zonas principales son Charlottenburg-Wilmersdorf, Steglitz-Zehlendorf y Mitte — pero, con nuestra sede en Moabit (Stephanstraße 46), trabajamos en todo Berlin.',
  },
  {
    question: '¿Cuánto cuesta la atención uno a uno con ustedes?',
    answer:
      'No indicamos tarifas fijas, porque las situaciones difieren enormemente — el nivel de necesidad, la cualificación requerida, la hora del día y el entorno intervienen todos en el cálculo. En una primera consulta gratuita escuchamos primero y, a continuación, le presentamos una propuesta por escrito con un precio en firme. Usted decide con tranquilidad.',
  },
  {
    question: '¿Quiénes son las personas que trabajan con ustedes?',
    answer:
      'Enfermeras y enfermeros diplomados, auxiliares de enfermería cualificados, pedagogas y pedagogos sociales y profesionales de acompañamiento con muchos años de experiencia. Todo nuestro equipo está contratado directamente por nosotros con cotización íntegra a la seguridad social, habla alemán como lengua materna (o al menos en nivel C1) y ha presentado un certificado ampliado de antecedentes penales.',
  },
  {
    question: '¿Ofrecen también atención las veinticuatro horas?',
    answer:
      'Sí — pero como un modelo legal de turnos rotativos, con cuatro a seis personas en un equipo estable, y no en forma de una única persona que vive las veinticuatro horas del día en la casa. Eso hace que nuestra atención resulte algo más costosa que las ofertas del mercado gris, pero es jurídicamente impecable y plenamente conforme con la legislación laboral.',
  },
  {
    question: '¿Cómo se organiza la primera conversación?',
    answer:
      'Gratuita, sin compromiso y de unos 60 a 90 minutos. En su domicilio o por teléfono, según prefiera. Escuchamos primero y, a continuación, le presentamos una propuesta por escrito con un precio concreto. Usted decide con tranquilidad.',
  },
];
