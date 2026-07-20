import type { Overlay } from '../types';
import type { SeoThema } from '@/lib/themen';

/**
 * Versiones en español, indexadas por el slug alemán. Lo que aquí falte
 * seguirá apareciendo en alemán en `/es`.
 *
 * Las cifras de importes, porcentajes, parágrafos (§) y plazos se toman
 * EXACTAMENTE del alemán. El español, como el alemán, usa el punto como
 * separador de millares y la coma como separador decimal, de modo que
 * «1.612 €» y «12,5–26,9» se mantienen sin cambios. En una guía sobre
 * derechos a prestaciones, un importe mal entendido sería el peor error
 * posible; las cifras deben seguir siendo cotejables con la resolución del
 * seguro de dependencia.
 */
export const THEMEN_ES: Overlay<SeoThema> = {
  // === Thema 1: Pflegegrad beantragen ==========================================
  'pflegegrad-beantragen': {
    slug: 'pflegegrad-beantragen',
    title: 'Solicitar un grado de dependencia',
    short: 'Paso a paso, desde la solicitud hasta la resolución.',
    metaTitle: 'Solicitar grado de dependencia 2026 – guía Berlín',
    metaDescription:
      'Solicitar el grado de dependencia (Pflegegrad) en Berlín: pasos, plazos, evaluación del MDK. Guía práctica con más de 15 años de asesoramiento.',
    h1: 'Solicitar un grado de dependencia — los pasos en detalle',
    primaryKeyword: 'solicitar grado de dependencia',
    detail: {
      intro: [
        'Un grado de dependencia (Pflegegrad) abre la puerta a prestaciones que hacen los cuidados más asequibles: la asignación por dependencia (Pflegegeld), las prestaciones en especie (Sachleistungen), el cuidado de relevo (Verhinderungspflege), el importe de descarga (Entlastungsbetrag) y la adaptación de la vivienda. Sin embargo, antes de que estas prestaciones se abonen, hay que presentar la solicitud y que se determine el grado de dependencia. Le explicamos cómo se hace y a qué hay que prestar atención.',
      ],
      sections: [
        {
          heading: 'Paso 1: presentar la solicitud ante el seguro de dependencia (Pflegekasse)',
          paragraphs: [
            'La solicitud se dirige al seguro de dependencia (Pflegekasse), el organismo vinculado a su seguro de enfermedad. Basta con una sola línea, sin formulario: „Hiermit beantrage ich Leistungen nach dem Pflegeversicherungsgesetz." (Por la presente solicito prestaciones conforme a la ley del seguro de dependencia.)',
            'Importante: la solicitud cuenta con efecto retroactivo a la fecha de presentación. Las prestaciones se abonan desde ese día en cuanto llega la resolución. Por eso conviene enviar la solicitud cuanto antes, aunque todavía no se disponga de toda la documentación.',
          ],
        },
        {
          heading: 'Paso 2: cita de evaluación del MDK',
          paragraphs: [
            'En un plazo de 4-6 semanas, el servicio médico de evaluación (Medizinischer Dienst — MD, en Berlín: MD Nord) se pone en contacto y concierta una visita a domicilio. La evaluación dura 1-2 horas.',
            'Qué se valora: la autonomía en 6 ámbitos (movilidad; capacidades cognitivas y comunicativas; comportamiento y problemas psíquicos; autocuidado; manejo de las exigencias de la enfermedad; organización de la vida cotidiana).',
            'Qué conviene preparar: un diario de cuidados (Pflegetagebuch) de al menos 1 semana, una lista de todos los medicamentos, todos los informes médicos de los últimos 2 años y un resumen de las ayudas técnicas.',
          ],
        },
        {
          heading: 'Paso 3: la resolución y, en su caso, el recurso',
          paragraphs: [
            'La resolución debe llegar en un plazo de 5 semanas desde la presentación de la solicitud, un plazo legal conforme al § 18 SGB XI. Si no se respeta el plazo, usted tiene derecho a 70 € por cada semana de retraso comenzada.',
            'Si el grado de dependencia resulta demasiado bajo: dispone de 4 semanas para presentar recurso (Widerspruch) desde la recepción de la resolución. El recurso puede presentarse sin formulario, pero debería incluir una motivación y nuevos justificantes.',
          ],
        },
        {
          heading: 'Los grados de dependencia de un vistazo (a fecha de 2026)',
          paragraphs: [
            'Grado de dependencia 1 (12,5–26,9 puntos): sin asignación por dependencia, sin presupuesto para prestaciones en especie; solo el importe de descarga y prestaciones aisladas.',
            'Grado de dependencia 2 (27–47,4 puntos): 332 € de asignación por dependencia y 761 € en prestaciones en especie al mes.',
            'Grado de dependencia 3 (47,5–69,9 puntos): 573 € de asignación por dependencia y 1.432 € en prestaciones en especie.',
            'Grado de dependencia 4 (70–89,9 puntos): 765 € de asignación por dependencia y 1.778 € en prestaciones en especie.',
            'Grado de dependencia 5 (a partir de 90 puntos): 947 € de asignación por dependencia y 2.200 € en prestaciones en especie.',
            'A esto se suman, en cada caso, 125 € de importe de descarga y hasta 1.612 € anuales de cuidado de relevo.',
          ],
        },
      ],
      faq: [
        {
          question: '¿Con qué rapidez se concede el grado de dependencia?',
          answer:
            'Legalmente, 5 semanas desde la fecha de la solicitud. En Berlín, actualmente, a menudo 6-8 semanas. Las prestaciones se abonan con efecto retroactivo a la fecha de la solicitud.',
        },
        {
          question: '¿Puedo solicitar un grado de dependencia con efecto retroactivo?',
          answer:
            'Sí, la solicitud surte efecto desde el día de su presentación. Así, si la presenta hoy y la resolución llega en 6 semanas, recibirá el pago atrasado de la prestación correspondiente a esas 6 semanas.',
        },
        {
          question: '¿Qué ocurre si el grado de dependencia es demasiado bajo?',
          answer:
            'Puede presentar recurso (Widerspruch) en un plazo de 4 semanas. Motivado, preferiblemente con un nuevo diario de cuidados y certificados médicos. Le ayudamos con los recursos.',
        },
        {
          question: '¿Necesito ya un informe médico para la solicitud?',
          answer:
            'No. Pero el evaluador querrá ver los informes de los últimos 2 años. Téngalos preparados antes de la cita del MDK.',
        },
        {
          question: '¿Quién ayuda con la solicitud?',
          answer:
            'Ofrecemos un asesoramiento en materia de cuidados que hace exactamente eso: redactar la solicitud, preparar la cita del MDK y motivar el recurso.',
        },
      ],
      cta: { text: 'Solicitar asesoramiento', href: '/leistungen/pflegeberatung-berlin' },
      relatedLinks: [
        { label: 'Preparar la evaluación del MDK', href: '/themen/mdk-begutachtung' },
        { label: 'Aprovechar el cuidado de relevo', href: '/themen/verhinderungspflege' },
        { label: 'El presupuesto de descarga', href: '/themen/entlastungsbudget' },
      ],
    },
  },

  // === Thema 2: Verhinderungspflege ============================================
  verhinderungspflege: {
    slug: 'verhinderungspflege',
    title: 'Cuidado de relevo (Verhinderungspflege)',
    short: 'Hasta 1.612 € al año: así aprovecha usted el derecho.',
    metaTitle: 'Cuidado de relevo 2026 – hasta 1.612 € al año',
    metaDescription:
      'Cuidado de relevo (Verhinderungspflege) según el § 39 SGB XI: requisitos, cuantía, solicitud. Le explicamos cómo aprovechar al máximo el derecho.',
    h1: 'Cuidado de relevo — hasta 1.612 € al año, a menudo sin usar',
    primaryKeyword: 'cuidado de relevo',
    detail: {
      intro: [
        'El cuidado de relevo (Verhinderungspflege) es una de las prestaciones más importantes del seguro obligatorio de dependencia y, a la vez, una de las que con más frecuencia quedan sin utilizar. Le explicamos qué es, quién tiene derecho a él y cómo emplearlo con sentido.',
      ],
      sections: [
        {
          heading: '¿Qué es el cuidado de relevo?',
          paragraphs: [
            'El cuidado de relevo según el § 39 SGB XI es un derecho que interviene cuando la persona que habitualmente cuida no está disponible, ya sea por vacaciones, enfermedad, descanso u otros motivos. Se asumen hasta 1.612 € por año natural para una persona cuidadora sustituta.',
          ],
        },
        {
          heading: '¿Quién tiene derecho?',
          paragraphs: ['Requisitos:'],
          list: [
            'Grado de dependencia (Pflegegrad) 2-5 (el grado 1 no basta).',
            'Los cuidados los prestan familiares o personas cuidadoras voluntarias.',
            'La persona cuidadora ha atendido a la persona dependiente durante al menos 6 meses (el llamado „Vorpflegezeit", periodo previo de cuidados); este obstáculo desaparece desde 2025, el periodo previo ya no se exige.',
          ],
        },
        {
          heading: 'Lo que recomendamos especialmente',
          stronglist: [
            {
              label: 'Utilizarlo por horas en lugar de en bloques',
              text: 'Los 1.612 € pueden repartirse en muchas unidades pequeñas; por ejemplo: 3 horas por semana durante 50 semanas suman 150 horas al año.',
            },
            {
              label: 'Utilizable también tras el alta hospitalaria',
              text: 'Si la persona cuidadora se ve desbordada por el alta hospitalaria de su familiar, el cuidado de relevo puede servir de descarga de forma transitoria.',
            },
            {
              label: 'Combinable con el cuidado de corta duración (Kurzzeitpflege)',
              text: 'Hasta el 50 % del derecho no utilizado de cuidado de corta duración (hasta 806 € adicionales) puede transferirse al cuidado de relevo. Con ello serían teóricamente posibles hasta 2.418 €.',
            },
          ],
        },
        {
          heading: 'Así se solicita el cuidado de relevo',
          paragraphs: ['Solicitud sin formulario ante el seguro de dependencia (Pflegekasse):'],
          list: [
            '¿Quién presta los cuidados habitualmente?',
            '¿Por qué se necesita una sustitución?',
            '¿Quién asume la sustitución?',
            '¿Qué costes se generan?',
          ],
          trailingParagraphs: [
            'Los justificantes (la factura de la persona cuidadora sustituta) se presentan a posteriori. El seguro de dependencia le reembolsa los costes directamente a usted, no a la persona cuidadora sustituta.',
          ],
        },
        {
          heading: 'Cuidado de relevo prestado por familiares cercanos',
          paragraphs: [
            'Conviene saberlo: si son familiares cercanos (padres, hijos, hermanos, cónyuge) quienes asumen el cuidado de relevo, no se abona el importe completo, sino una tarifa claramente reducida (la cuantía de la asignación por dependencia (Pflegegeld) del grado correspondiente, de forma proporcional).',
            'Si el cuidado sustituto lo presta un proveedor externo (como nosotros), se aplica el importe completo.',
          ],
        },
      ],
      faq: [
        {
          question: '¿A cuánto asciende el cuidado de relevo en 2026?',
          answer:
            'Hasta 1.612 € por año natural. Combinado con un cuidado de corta duración no utilizado, hasta 2.418 €.',
        },
        {
          question: '¿La sustitución tiene que ser profesional?',
          answer:
            'No. También pueden facturarse como „sustitución" vecinos, amigos o usted mismo; en el caso de familiares cercanos, no obstante, solo a la tarifa de la asignación por dependencia.',
        },
        {
          question: '¿Puedo facturar las guardias de acompañamiento a través del cuidado de relevo?',
          answer:
            'Sí, es incluso una de las aplicaciones más frecuentes. Nosotros le emitimos la factura y usted la presenta ante el seguro de dependencia.',
        },
        {
          question: '¿Caduca el derecho si no lo utilizo?',
          answer:
            'Sí, al final del año natural. Merece la pena planificarlo ya en verano en lugar de esperar.',
        },
        {
          question: '¿Es válido también con el grado de dependencia 1?',
          answer: 'No. El grado de dependencia 1 no da derecho al cuidado de relevo.',
        },
      ],
      cta: { text: 'Solicitar asesoramiento', href: '/leistungen/pflegeberatung-berlin' },
      relatedLinks: [
        { label: 'Solicitar un grado de dependencia', href: '/themen/pflegegrad-beantragen' },
        { label: 'El presupuesto de descarga', href: '/themen/entlastungsbudget' },
        {
          label: 'Guardias de acompañamiento en Berlín',
          href: '/leistungen/sitzwachen-berlin',
          note: 'a menudo facturadas como cuidado de relevo',
        },
      ],
    },
  },

  // === Thema 3: Entlastungsbudget ==============================================
  entlastungsbudget: {
    slug: 'entlastungsbudget',
    title: 'El presupuesto de descarga',
    short: '125 € al mes: a menudo sin usar, pero un derecho.',
    metaTitle: 'Importe de descarga – usar bien los 125 € al mes',
    metaDescription:
      'Importe de descarga (Entlastungsbetrag) según el § 45b SGB XI: 125 € al mes para atención. Le explicamos para qué usarlo y cómo funciona la facturación.',
    h1: 'El presupuesto de descarga — 125 € al mes, a menudo sin usar',
    primaryKeyword: 'importe de descarga',
    detail: {
      intro: [
        '125 € al mes. Al año, eso supone 1.500 €. Este dinero le corresponde en cuanto existe un grado de dependencia (Pflegegrad) de 1 en adelante, y en la mayoría de las familias queda sin utilizar. Le explicamos qué puede hacer con él y cómo funciona la facturación.',
      ],
      sections: [
        {
          heading: '¿Qué es el importe de descarga?',
          paragraphs: [
            'El importe de descarga (Entlastungsbetrag) según el § 45b SGB XI es una prestación con finalidad determinada, destinada a „prestaciones de descarga". Se refiere a servicios que alivian a la persona cuidadora y estimulan a la persona dependiente.',
            'Cuantía: 125 € al mes a partir del grado de dependencia 1.',
          ],
        },
        {
          heading: '¿Para qué puedo usar el dinero?',
          paragraphs: [
            'No para todo. Solo son reembolsables las prestaciones de proveedores reconocidos conforme al § 45a SGB XI, es decir, no cualquier ayuda.',
          ],
          stronglist: [
            {
              label: 'Se usa habitualmente para',
              text: 'atención por horas a cargo de servicios de atención certificados, centro de día (a menudo combinado de forma proporcional), cuidado de corta duración (Kurzzeitpflege, hasta un 50 % transferible), ayuda doméstica a cargo de servicios reconocidos y ofertas de apoyo en la vida cotidiana (acompañantes para demencia, auxiliares para el día a día).',
            },
            {
              label: 'No reembolsable',
              text: 'ayudas privadas sin estatus de proveedor reconocido, personal de cuidados clásico (eso se tramita a través de la asignación por dependencia (Pflegegeld) o las prestaciones en especie (Sachleistungen)) y costes de residencia u hospital.',
            },
          ],
        },
        {
          heading: 'Cómo se desarrolla la facturación',
          paragraphs: [
            'Usted paga primero, el proveedor emite una factura, usted presenta la factura ante el seguro de dependencia (Pflegekasse) y este le reembolsa los costes, hasta 125 € al mes.',
            'Importante: los importes no consumidos pueden utilizarse posteriormente hasta el 30 de junio del año siguiente. Así, quien de enero a diciembre no gaste 125 € al mes puede utilizar el resto hasta el 30.06. Después, el resto caduca.',
          ],
        },
        {
          heading: 'Cómo podemos ayudarle',
          paragraphs: [
            'No operamos como proveedor reconocido conforme al § 45a SGB XI (ese sería otro modelo de negocio). Pero le asesoramos sobre qué proveedores reconocidos de Berlín son buenos y sobre cómo combinar de forma óptima sus 125 €.',
          ],
        },
      ],
      faq: [
        {
          question: '¿Corresponde el importe de descarga también con el grado de dependencia 1?',
          answer:
            'Sí. El grado de dependencia 1 depende incluso de él: con el grado 1 no existen otras prestaciones económicas.',
        },
        {
          question: '¿Puedo utilizar el dinero simplemente en efectivo?',
          answer:
            'No. Usted paga al proveedor, que emite una factura; el seguro de dependencia le reembolsa el importe.',
        },
        {
          question: '¿Qué ocurre si no necesito los 125 € cada mes?',
          answer:
            'El resto se acumula y puede utilizarse hasta el 30 de junio del año siguiente.',
        },
        {
          question: '¿Pueden ofrecer ustedes esta prestación?',
          answer:
            'No somos un proveedor reconocido conforme al § 45a, pero le ayudamos a encontrar uno adecuado.',
        },
      ],
      cta: { text: 'Solicitar asesoramiento', href: '/leistungen/pflegeberatung-berlin' },
      relatedLinks: [
        { label: 'Cuidado de relevo', href: '/themen/verhinderungspflege' },
        { label: 'Solicitar un grado de dependencia', href: '/themen/pflegegrad-beantragen' },
      ],
    },
  },

  // === Thema 4: MDK-Begutachtung ===============================================
  'mdk-begutachtung': {
    slug: 'mdk-begutachtung',
    title: 'La evaluación del MDK',
    short: 'Lo que importa en la cita con el servicio médico de evaluación (Medizinischer Dienst).',
    metaTitle: 'Preparar la evaluación del MDK – consejos prácticos',
    metaDescription:
      'Antes de la evaluación del MDK: qué es importante, qué debería documentar y qué errores evitar. Con lista de comprobación.',
    h1: 'Preparar la evaluación del MDK — lo que de verdad importa',
    primaryKeyword: 'evaluación MDK',
    detail: {
      intro: [
        'La evaluación por el servicio médico de evaluación (Medizinischer Dienst — MD, antes MDK) decide qué grado de dependencia (Pflegegrad) recibe usted. Y, con ello, si percibe 332 € o 947 € mensuales de asignación por dependencia (Pflegegeld), y a qué otras prestaciones tiene derecho.',
        'Una buena preparación puede marcar la diferencia entre uno y dos grados de dependencia. Le explicamos lo que importa.',
      ],
      sections: [
        {
          heading: 'Qué ocurre en la cita',
          paragraphs: [
            'La persona evaluadora acude a su domicilio. La cita dura 1-2 horas. Se valora la autonomía en seis módulos:',
          ],
          list: [
            'Movilidad (10 % de ponderación): levantarse, caminar, subir escaleras.',
            'Capacidades cognitivas y comunicativas (15 % o 7,5 %): reconocer, orientarse, comunicarse.',
            'Comportamiento y problemas psíquicos (junto con el 2: 15 %): agresividad, miedos, delirios.',
            'Autocuidado (40 %): higiene corporal, comer, vestirse.',
            'Afrontamiento y manejo autónomo de las exigencias derivadas de la enfermedad y la terapia (20 %): medicamentos, cambios de vendaje.',
            'Organización de la vida cotidiana y de los contactos sociales (15 %): planificación, ocupación, contactos sociales.',
          ],
          trailingParagraphs: [
            'Por cada módulo se determina una puntuación; todos los módulos juntos dan una puntuación total que se asigna a un grado de dependencia.',
          ],
        },
        {
          heading: 'Cuatro errores frecuentes en la evaluación',
          stronglist: [
            {
              label: 'Error 1: mostrarse pudoroso',
              text: 'Muchas personas dependientes restan importancia a sus carencias ante desconocidos, por orgullo, por cortesía. El evaluador lo anota, y eso conduce a un grado de dependencia demasiado bajo. Diga con sinceridad lo que ya no funciona.',
            },
            {
              label: 'Error 2: los familiares asumen las respuestas',
              text: 'El evaluador debe poder valorar a la persona en sí misma. Si usted, como familiar, interviene constantemente, eso se valora como una buena capacidad de comunicación.',
            },
            {
              label: 'Error 3: no preparar documentación',
              text: 'Un diario de cuidados (Pflegetagebuch) de al menos una semana muestra de forma concreta dónde está la necesidad. Informes médicos, partes del médico, lista de medicamentos: todo a mano sobre la mesa.',
            },
            {
              label: 'Error 4: fijar la cita en un buen día',
              text: 'Muchas personas con demencia están más orientadas por la mañana que por la tarde. Si concierta la cita por la mañana, es posible que el evaluador vea al cliente en su mejor momento y subestime la necesidad.',
            },
          ],
        },
        {
          heading: 'Lista de comprobación para la cita del MDK',
          list: [
            'Diario de cuidados de 1-2 semanas (qué se hace, cuándo, durante cuánto tiempo).',
            'Lista de todos los medicamentos (nombre, dosis, frecuencia).',
            'Todos los partes médicos e informes actuales.',
            'Resumen de las ayudas técnicas (andador, cama, productos para la incontinencia).',
            'Lista de todas las ayudas de cuidado que ya se prestan.',
            'Carné de discapacidad grave (Schwerbehindertenausweis), si se dispone de él.',
            'Tarjeta del seguro y solicitud del grado de dependencia.',
          ],
          paragraphs: [
            'Si es posible: tener a alguien presente que tome notas, no que responda.',
          ],
        },
        {
          heading: 'Si tiene dudas',
          paragraphs: [
            'Ofrecemos acompañamiento en las citas del MDK. Un miembro de nuestro equipo participa en la cita, formula preguntas fundamentadas, aporta observaciones y protege frente a una infravaloración. Las condiciones las hablamos en la primera consulta.',
          ],
        },
      ],
      faq: [
        {
          question: '¿Puede haber alguien presente en la cita del MDK?',
          answer:
            'Sí. Es incluso recomendable, tanto un familiar como un acompañamiento externo como el nuestro.',
        },
        {
          question: '¿Qué ocurre si no estoy de acuerdo con la resolución?',
          answer: 'Puede presentar recurso (Widerspruch) sin formulario en un plazo de 4 semanas.',
        },
        {
          question: '¿Con qué frecuencia puede reevaluarse el grado de dependencia?',
          answer:
            'En caso de empeoramiento, en cualquier momento. Como revisión rutinaria, por lo general cada 1-2 años.',
        },
        {
          question: '¿Quién decide al final sobre el grado de dependencia?',
          answer:
            'El seguro de dependencia (Pflegekasse), sobre la base del dictamen del MDK. En teoría puede apartarse de él, pero rara vez lo hace.',
        },
        {
          question: '¿Cuánto cuesta la preparación?',
          answer:
            'La primera consulta es gratuita. El asesoramiento más profundo y el acompañamiento al MDK los calculamos según la dedicación y el contexto; el orden de magnitud correspondiente lo conocerá directamente en la primera consulta.',
        },
      ],
      cta: { text: 'Solicitar asesoramiento', href: '/leistungen/pflegeberatung-berlin' },
      relatedLinks: [
        { label: 'Solicitar un grado de dependencia', href: '/themen/pflegegrad-beantragen' },
        { label: 'Asesoramiento en Berlín', href: '/leistungen/pflegeberatung-berlin' },
      ],
    },
  },

  // === Thema 5: Demenz-Begleitung ==============================================
  'demenz-begleitung': {
    slug: 'demenz-begleitung',
    title: 'Acompañamiento en la demencia',
    short: 'Lo que la demencia realmente necesita — y lo que no ayuda.',
    metaTitle: 'Acompañamiento en la demencia Berlín – ayuda',
    metaDescription:
      'Entender y acompañar la demencia: consejos concretos para el día a día con personas con demencia. Asesoramiento y acompañamiento en Berlín.',
    h1: 'Acompañamiento en la demencia — qué ayuda de verdad y qué no',
    primaryKeyword: 'acompañamiento demencia Berlín',
    detail: {
      intro: [
        'La demencia no cambia solo a la persona enferma, cambia también a todos los que la acompañan. Compartimos la experiencia de más de 15 años de acompañamiento en la demencia en Berlín: qué ayuda. Qué no ayuda. Qué debería saber.',
      ],
      sections: [
        {
          heading: 'La demencia no es una sola enfermedad',
          paragraphs: [
            'Bajo el término „demencia" se agrupan más de 50 enfermedades distintas. Las más frecuentes:',
          ],
          stronglist: [
            {
              label: 'Demencia de Alzheimer (aprox. 60–70 % de todos los casos)',
              text: 'de avance lento, a menudo empieza por la memoria a corto plazo.',
            },
            {
              label: 'Demencia vascular (aprox. 15–20 %)',
              text: 'por trastornos de la circulación, a menudo con empeoramiento escalonado.',
            },
            {
              label: 'Demencia por cuerpos de Lewy (aprox. 5–10 %)',
              text: 'cuadro mixto de demencia y párkinson, a menudo con alucinaciones.',
            },
            {
              label: 'Demencia frontotemporal (aprox. 5 %)',
              text: 'a menudo con un cambio de carácter como primer síntoma, y enfermos más bien jóvenes.',
            },
            {
              label: 'Demencias secundarias',
              text: 'formas mixtas, consecuencia de otras enfermedades.',
            },
          ],
          trailingParagraphs: [
            'La distinción es importante, porque el curso y el cuadro de síntomas difieren notablemente.',
          ],
        },
        {
          heading: 'Cuatro fases, cuatro necesidades',
          stronglist: [
            {
              label: 'Fase 1: demencia leve',
              text: 'Olvida, busca las palabras, siente vergüenza. Necesita apoyo discreto en un segundo plano, el mantenimiento de las rutinas y un trato respetuoso con el conocimiento perdido. En esta fase todavía es posible mucho en solitario.',
            },
            {
              label: 'Fase 2: demencia moderada',
              text: 'Graves problemas de orientación, posible cambio de carácter, se necesita ayuda con el autocuidado. Necesita acompañamiento por horas o de media jornada, una estructura diaria clara y repetición paciente.',
            },
            {
              label: 'Fase 3: demencia grave',
              text: 'Pérdida del habla, dependencia total, a menudo incontinencia. Necesita atención las veinticuatro horas o una plaza en una residencia, estimulación sensorial (contacto, música, aromas) y un entorno que calme.',
            },
            {
              label: 'Fase 4: fase final',
              text: 'Encamamiento, trastornos de la deglución, proceso de morir. Necesita acompañamiento paliativo, acompañamiento al final de la vida y control paliativo de los síntomas.',
            },
          ],
        },
        {
          heading: 'Lo que de verdad ayuda',
          stronglist: [
            {
              label: 'Las rutinas',
              text: 'La demencia devora lo nuevo. Pero respeta lo antiguo. Un horario fijo — desayuno a las 8, paseo a las 10, comida a las 12, siesta a las 14, café a las 15:30 — protege frente a la confusión y la agresividad.',
            },
            {
              label: 'Lo sensorial',
              text: 'Cuando las palabras y la comprensión se desvanecen, quedan los sentidos. Música de la juventud. Aroma de lavanda. Una manta áspera. Un té caliente que se pueda oler.',
            },
            {
              label: 'El contacto físico',
              text: 'Una mano sobre otra mano. Rodear el hombro. La demencia aísla; el contacto une, incluso sin palabras.',
            },
            {
              label: 'Validación en lugar de corrección',
              text: '„Ahora voy a ver a mi madre", dice una mujer de 88 años. Incorrecto: „Tu madre lleva 30 años muerta." Correcto: „Su madre es importante para usted. Hábleme de ella."',
            },
          ],
        },
        {
          heading: 'Lo que no ayuda',
          stronglist: [
            {
              label: 'La razón',
              text: 'La demencia no razona. Quien recurre a la lógica se frustra a sí mismo y a la persona enferma.',
            },
            {
              label: 'La confrontación',
              text: '„Acabas de comer hace un momento." No ayuda: la persona con demencia realmente ya no lo recuerda.',
            },
            {
              label: 'Demasiados estímulos',
              text: 'Televisión + radio + conversación + teléfono: eso desborda y provoca inquietud. Reduzca los ruidos de fondo.',
            },
            {
              label: 'La sobrecarga de los familiares',
              text: '„Yo puedo con esto sola" es la frase más peligrosa de los familiares cuidadores. Busque apoyo antes de estar agotado, no después.',
            },
          ],
        },
      ],
      faq: [
        {
          question: '¿A partir de cuándo requiere tratamiento la demencia?',
          answer:
            'En cuanto cambian la vida cotidiana o la seguridad. Un diagnóstico precoz puede ayudar a influir favorablemente en el curso y a crear estructuras a tiempo.',
        },
        {
          question: '¿Pueden las personas con demencia seguir viviendo solas?',
          answer:
            'En la fase 1, a menudo sí, con apoyo. En la fase 2, solo con una estructura diaria clara y acompañamiento por horas. En la fase 3, por lo general ya no.',
        },
        {
          question: '¿Cuánto cuesta un acompañamiento en la demencia por horas?',
          answer:
            'Las tarifas por hora dependen de la cualificación empleada; a ello se añaden los recargos conforme al § 3b EStG (25 % de noche, 50 % los domingos y festivos). El cálculo concreto se hace en la primera consulta gratuita.',
        },
        {
          question: '¿Asume el seguro de dependencia (Pflegekasse) los costes?',
          answer:
            'No directamente: facturamos como prestación de pago privado. No obstante, la asignación por dependencia (Pflegegeld) y el importe de descarga (Entlastungsbetrag) pueden emplearse de forma proporcional.',
        },
      ],
      cta: { text: 'Solicitar asesoramiento', href: '/leistungen/pflegeberatung-berlin' },
      relatedLinks: [
        {
          label: 'Acompañamiento en la clínica en Berlín',
          href: '/leistungen/klinik-begleitung-berlin',
          note: 'para pacientes con demencia en el hospital',
        },
        { label: 'Atención las veinticuatro horas', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Guardias nocturnas en Berlín', href: '/leistungen/nachtwachen-berlin' },
        { label: 'Guardias de acompañamiento en Berlín', href: '/leistungen/sitzwachen-berlin' },
      ],
    },
  },

  // === Thema 6: Palliativ zu Hause =============================================
  'palliativ-zuhause': {
    slug: 'palliativ-zuhause',
    title: 'Cuidados paliativos en casa',
    short: 'Lo que hace falta para que morir en casa sea posible.',
    metaTitle: 'Cuidados paliativos en casa en Berlín – guía',
    metaDescription:
      'Cuidados paliativos (Palliativversorgung) en casa en Berlín: SAPV, AAPV, servicios de hospicio, acompañamiento propio. Le explicamos las estructuras y opciones.',
    h1: 'Cuidados paliativos en casa — qué hace falta para que salga bien',
    primaryKeyword: 'cuidados paliativos en casa',
    detail: {
      intro: [
        'La mayoría de las personas quiere morir en casa. Muy pocas lo consiguen. La diferencia no está en el deseo, está en la organización. Le explicamos qué hace falta para que los cuidados paliativos (Palliativversorgung) en casa puedan funcionar.',
      ],
      sections: [
        {
          heading: 'Tres pilares de los cuidados paliativos domiciliarios — más un cuarto',
          stronglist: [
            {
              label: 'Pilar 1: AAPV (cuidados paliativos ambulatorios generales)',
              text: 'Médico de cabecera + servicio de cuidados ambulatorio con experiencia paliativa. El caso estándar. Funciona cuando la sintomatología es moderada.',
            },
            {
              label: 'Pilar 2: SAPV (cuidados paliativos ambulatorios especializados)',
              text: 'Un equipo paliativo de médicas y personal de enfermería especializados en cuidados paliativos acude al domicilio, está localizable 24/7 y asume el control complejo de los síntomas. Requisito: prescripción por una clínica o un médico especialista. Los costes los asume el seguro de enfermedad.',
            },
            {
              label: 'Pilar 3: acompañamiento de hospicio',
              text: 'Servicios de hospicio voluntarios acuden a la vivienda, apoyan a los familiares y están presentes, sin ser algo médico. Gratuito.',
            },
            {
              label: 'Pilar 4: acompañamiento 1:1 de pago privado (lo que nosotros prestamos)',
              text: 'Cuando la familia no puede estar presente de forma continua, cuando las guardias de acompañamiento voluntarias no bastan, cuando se necesita una presencia adicional fiable, lo asumimos nosotros.',
            },
          ],
        },
        {
          heading: '¿Quién dirige todo esto?',
          paragraphs: [
            'La responsabilidad de los cuidados paliativos recae, en principio, en el médico de cabecera. En el caso del SAPV, coordina el equipo de SAPV. En la práctica, gran parte la organizan los familiares; aquí colaboramos a menudo, porque en esta fase las familias están desbordadas.',
          ],
        },
        {
          heading: 'Lo que las familias deberían saber',
          stronglist: [
            {
              label: 'Dejar morir no es una negligencia',
              text: 'Cuando la etapa de la vida llega a su fin, no hay que agotar todas las opciones médicas. Unas instrucciones previas (Patientenverfügung) protegen frente a que se continúen terapias que ya nadie quiere.',
            },
            {
              label: 'La ausencia de dolor es posible',
              text: 'Un buen tratamiento paliativo del dolor consigue, en casi todos los casos, que el sufrimiento sea controlable. Si tiene la sensación de que no está controlado: recurra a otro médico, active el SAPV.',
            },
            {
              label: 'La última respiración puede durar mucho',
              text: 'En el proceso activo de morir, la respiración se vuelve a menudo irregular, a veces durante horas o días. Eso inquieta a los familiares, pero por lo general no es sufrimiento para la persona que muere. Un acompañamiento experimentado puede aportar aquí mucha calma.',
            },
            {
              label: 'No hay nada que decir',
              text: 'En las últimas horas nadie necesita una gran conversación. Basta con estar presente. Basta con sostener la mano.',
            },
          ],
        },
        {
          heading: 'Lo que podemos aportar en concreto',
          list: [
            'Guardias nocturnas, para que la familia pueda dormir.',
            'Acompañamiento de fin de semana, para que los familiares tengan un respiro.',
            'Atención las veinticuatro horas en los últimos 2-5 días, cuando el proceso de morir ha comenzado.',
            'Acompañamiento tras el fallecimiento, hasta que llegan el servicio funerario y el médico.',
          ],
        },
      ],
      faq: [
        {
          question: '¿Quién decide si se prescribe el SAPV?',
          answer:
            'La prescripción procede del médico de cabecera, de una clínica o de un médico especialista. El requisito es una situación de cuidados paliativos compleja.',
        },
        {
          question: '¿Se puede recibir cuidados paliativos en casa también sin SAPV?',
          answer:
            'Sí, con AAPV (médico de cabecera + servicio de cuidados) y servicios de hospicio complementarios. Intervenimos a menudo allí donde eso no basta.',
        },
        {
          question: '¿Con qué rapidez es posible un acompañamiento al final de la vida?',
          answer: 'Con 24 horas de antelación, de forma fiable; en urgencias, a menudo el mismo día.',
        },
        {
          question: '¿Cubre algún seguro nuestro acompañamiento?',
          answer:
            'Por lo general, no. Algunos seguros privados de enfermedad reembolsan una parte; con gusto le entregamos una factura apta para su presentación.',
        },
      ],
      cta: { text: 'Solicitar una primera consulta', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Guardias de acompañamiento en residencia (Hospiz)', href: '/leistungen/hospiz-sitzwachen' },
        { label: 'Guardias nocturnas en Berlín', href: '/leistungen/nachtwachen-berlin' },
        { label: 'Atención las veinticuatro horas', href: '/leistungen/24-stunden-betreuung' },
      ],
    },
  },

  // === Thema 7: Krankenhaus-Begleitung =========================================
  'krankenhaus-begleitung': {
    slug: 'krankenhaus-begleitung',
    title: 'Acompañamiento hospitalario',
    short: 'Cuando alguien está más seguro en casa que solo en el hospital.',
    metaTitle: 'Acompañamiento hospitalario Berlín – guardia y apoyo',
    metaDescription:
      'Acompañamiento en el hospital: presencia 1:1, guardia junto a la cama, traducción. Para demencia, confusión, riesgo de caídas, fase final.',
    h1: 'Acompañamiento hospitalario en Berlín — cuando estar solo en la cama no basta',
    primaryKeyword: 'acompañamiento hospitalario Berlín',
    detail: {
      intro: [
        'Una estancia hospitalaria ya resulta agotadora para las personas sanas. Para las personas confusas, angustiadas o gravemente enfermas puede ser traumática. Voces desconocidas, ruidos extraños, personal que cambia sin cesar, largas horas de espera.',
        'Un acompañamiento 1:1 en el hospital marca la diferencia. Acudimos al hospital, nos quedamos, estamos ahí.',
        'Esta página explica el tema de fondo. Quien desee reservar directamente un acompañamiento privado en la clínica en Berlín encontrará la página de servicio concreta más abajo, en los enlaces.',
      ],
      sections: [
        {
          heading: 'Quién necesita acompañamiento hospitalario',
          stronglist: [
            {
              label: 'Pacientes con demencia',
              text: 'En el hospital, las personas con demencia se descompensan a menudo de forma grave: entorno desconocido, ausencia de rutinas, estímulos constantes. Un acompañamiento de confianza calma, transmite seguridad y conoce las rutinas de casa.',
            },
            {
              label: 'Pacientes con confusión posoperatoria (riesgo de delirio)',
              text: 'Sobre todo las personas mayores, tras grandes operaciones, desarrollan a menudo un delirio en las primeras 24-72 horas. Un acompañamiento atento y de confianza reduce claramente su frecuencia.',
            },
            {
              label: 'Pacientes moribundos',
              text: 'En muchas plantas no es posible una presencia 1:1, aunque se desee. Nosotros la asumimos.',
            },
            {
              label: 'Pacientes con barreras idiomáticas',
              text: 'Cuando alguien habla alemán solo de forma limitada, una persona acompañante de confianza y con competencia lingüística vale a menudo su peso en oro: traduce durante el pase de visita y media entre el paciente y el equipo.',
            },
            {
              label: 'Pacientes atemorizados',
              text: 'Especialmente en estancias prolongadas, diagnósticos graves y exploraciones frecuentes.',
            },
          ],
        },
        {
          heading: 'Cómo se organiza',
          stronglist: [
            {
              label: 'Coordinación con la planta',
              text: 'Antes de la primera intervención, contactamos con la dirección de enfermería de la planta. Por lo general se recaba el consentimiento por escrito del paciente o de su representante legal.',
            },
            {
              label: 'Los turnos',
              text: 'Modelos habituales: turnos de 8 horas (día, tarde, noche), turnos de 12 horas (día/noche) o fases concretas (p. ej., las primeras 48 horas tras la operación, las últimas 24-72 horas antes de un traslado).',
            },
          ],
        },
        {
          heading: 'Lo que hace nuestro personal (y lo que no)',
          list: [
            'Presencia atenta, observación del estado.',
            'Calmar en caso de inquietud, reorientar en caso de confusión.',
            'Ayuda con las comidas, ofrecer de beber.',
            'Acompañamiento al baño (si hay movilidad).',
            'Informar al personal de enfermería de la planta de lo que se necesita.',
            'Informar a la familia.',
            'En pacientes con demencia: activación dentro de lo posible.',
          ],
          paragraphs: [
            'Lo que no hacemos: cura de heridas, administración de medicamentos, procedimientos de cuidado invasivos; de eso se encarga el personal de enfermería de la planta.',
          ],
        },
        {
          heading: 'Lo que cuesta',
          paragraphs: [
            'El acompañamiento hospitalario por horas se calcula según la cualificación, la hora del día y el día de la semana. Un acompañamiento continuo durante varios días (p. ej., las primeras 48 horas tras la operación, los últimos días antes de un traslado) se reúne en una suma total. Los recargos conforme al § 3b EStG (noche 25 %, domingo/festivo 50 %) se indican de forma transparente.',
            'En la primera consulta aclaramos el contexto y la duración y le indicamos una cifra concreta para el acompañamiento previsto.',
          ],
        },
        {
          heading: 'Cuestiones de seguro',
          paragraphs: [
            'En algunos seguros privados de enfermedad, los costes de una persona acompañante son reembolsables en su totalidad o en parte; con gusto le entregamos una factura apta para su presentación. En el seguro público de enfermedad, por lo general no existe derecho a ello.',
          ],
        },
      ],
      faq: [
        {
          question: '¿Permiten las clínicas de Berlín guardias de acompañamiento externas?',
          answer:
            'Sí, por lo general con el consentimiento de la dirección de enfermería de la planta. Nosotros nos ocupamos del registro.',
        },
        {
          question: '¿Con qué rapidez pueden acudir a una planta?',
          answer:
            'Con una antelación de 24 horas, de forma fiable. En casos de urgencias, a menudo el mismo día.',
        },
        {
          question: '¿Puedo reservar un acompañamiento antes de una operación programada?',
          answer:
            'Muy recomendable: así podemos estar disponibles desde el primer despertar.',
        },
        {
          question: '¿Paga el seguro de enfermedad?',
          answer:
            'Con los seguros públicos, normalmente no. Con algunos seguros privados, reembolsable en parte.',
        },
      ],
      cta: { text: 'Solicitar una primera consulta', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Acompañamiento en la clínica en Berlín (servicio)',
          href: '/leistungen/klinik-begleitung-berlin',
          note: 'el acompañamiento premium reservable',
        },
        { label: 'Guardias de acompañamiento en Berlín', href: '/leistungen/sitzwachen-berlin' },
        { label: 'Guardias nocturnas en Berlín', href: '/leistungen/nachtwachen-berlin' },
        { label: 'Acompañamiento en la demencia', href: '/themen/demenz-begleitung' },
      ],
    },
  },

  // === Thema 8: Wohnungsauflösung im Pflegefall ================================
  'wohnungsaufloesung-pflegefall': {
    slug: 'wohnungsaufloesung-pflegefall',
    title: 'Disolución de la vivienda en caso de dependencia',
    short: 'Cuando hay que vaciar la vivienda — con dignidad.',
    metaTitle: 'Vaciar la vivienda por dependencia en Berlín',
    metaDescription:
      'Vaciar la vivienda cuando llegan los cuidados: qué es importante, qué se conserva, qué hay que organizar. Con recomendaciones para Berlín.',
    h1: 'Disolución de la vivienda en caso de dependencia — con dignidad, con un plan',
    primaryKeyword: 'vaciado de vivienda dependencia',
    detail: {
      intro: [
        'Cuando hay que renunciar a la vivienda porque los cuidados se trasladan a una residencia o a una nueva forma de vivienda, nunca es solo una tarea logística. Es el final de una etapa de la vida, a menudo también el final de una identidad. Eso merece más atención que la mera cuestión de quién se lleva los muebles.',
      ],
      sections: [
        {
          heading: 'Cuándo procede vaciar una vivienda',
          list: [
            'Traslado a una residencia: cambio permanente a un centro de internamiento.',
            'Mudanza con la familia: cuando los cuidados en casa ya no son posibles en solitario.',
            'Mudanza a una vivienda adaptada a la edad: p. ej., vivienda con servicios, vivienda tutelada.',
            'Tras el fallecimiento: las herederas y los herederos deben vaciar la vivienda.',
          ],
        },
        {
          heading: 'Qué hay que organizar',
          stronglist: [
            {
              label: 'Logística',
              text: 'Clasificar los muebles (conservar, regalar, vender, desechar), empresa de retirada de enseres, limpieza final de la vivienda, entrega de llaves.',
            },
            {
              label: 'Contratos',
              text: 'Rescindir el contrato de alquiler, dar de baja luz/gas/agua, dar de baja teléfono/internet, el canon audiovisual (Rundfunkbeitrag), revisar los seguros.',
            },
            {
              label: 'Gestiones administrativas',
              text: 'Cambio de domicilio en el padrón municipal (Einwohnermeldeamt), informar de la nueva dirección al seguro de dependencia (Pflegekasse), al seguro de enfermedad y al seguro de pensiones.',
            },
            {
              label: 'Lo personal',
              text: '¿Cuáles son las cosas importantes que deben trasladarse también? ¿Qué recuerdos se conservan? ¿Quién de la familia recibe qué?',
            },
          ],
        },
        {
          heading: 'Lo que podemos hacer en concreto',
          paragraphs: [
            'No somos vendedores de muebles ni una empresa de retirada de enseres. Pero conocemos buenos proveedores en Berlín y hacemos de intermediarios. Lo que ofrecemos en concreto:',
          ],
          stronglist: [
            {
              label: 'Acompañamiento de la persona dependiente durante la mudanza',
              text: 'Nos quedamos, tranquilizamos, ayudamos a orientarse. Entramos con ella en el nuevo hogar y la acompañamos los primeros días.',
            },
            {
              label: 'Ayuda para clasificar los objetos de valor',
              text: 'Con discreción: el dinero en efectivo, las joyas y los documentos que estén dispersos por la vivienda los reunimos junto con la familia.',
            },
            {
              label: 'Ayuda organizativa para los familiares',
              text: 'Quien no viva en Berlín puede encargarnos acudir a citas concretas sobre el terreno (p. ej., la entrega de llaves al arrendador o la entrega a la empresa de retirada de enseres).',
            },
          ],
        },
        {
          heading: 'Lo que cuesta',
          paragraphs: [
            'Para esta prestación no ofrecemos precios cerrados: la dedicación es demasiado individual. Asesoramiento y coordinación, el acompañamiento de la persona dependiente durante la mudanza, la clasificación de los objetos de valor, la intermediación con proveedores externos (empresas de desalojo, limpieza final): todos los componentes se calculan según la dedicación. En la primera consulta hablamos de lo que realmente se necesita y le indicamos una cifra concreta por cada componente.',
            'Los costes de proveedores externos (empresas de desalojo, etc.) los adjuntamos de forma transparente como anexo a la factura.',
          ],
        },
      ],
      faq: [
        {
          question: '¿Pueden vaciar la vivienda ustedes solos por completo?',
          answer:
            'Coordinamos y acompañamos; el vaciado propiamente dicho lo realizan nuestras empresas colaboradoras.',
        },
        {
          question: '¿Cómo se procede con los objetos de valor?',
          answer:
            'Con discreción y de forma verificable. Elaboramos un inventario y lo entregamos a la familia. Lo valioso permanece bajo llave hasta su entrega.',
        },
        {
          question: '¿Ayudan también con el vaciado de la vivienda tras un fallecimiento?',
          answer: 'Sí. Es incluso uno de los motivos más frecuentes.',
        },
        {
          question: '¿Qué ocurre con los muebles que todavía están en buen estado?',
          answer:
            'Los intermediamos con asociaciones sin ánimo de lucro (Berliner Stadtmission, Caritas, Diakonie) o con casas de subastas serias, según su valor.',
        },
      ],
      cta: { text: 'Solicitar una primera consulta', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Asesoramiento en Berlín', href: '/leistungen/pflegeberatung-berlin' },
        {
          label: 'Atención las veinticuatro horas',
          href: '/leistungen/24-stunden-betreuung',
          note: 'como alternativa al traslado a una residencia',
        },
      ],
    },
  },
};
