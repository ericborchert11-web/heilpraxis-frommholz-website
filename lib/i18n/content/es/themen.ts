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
        { label: 'El presupuesto de descarga', href: '/themen/entlastungsbudget' },
      ],
    },
  },

  // === Thema 2: Verhinderungspflege ============================================

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
              text: 'ayudas privadas sin estatus de proveedor reconocido, personal de cuidados clásico (eso se tramita a través de la asignación por dependencia (Pflegegeld) o las prestaciones en especie (Sachleistungen)) y los costes de una residencia o de un tratamiento hospitalizado.',
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

  // === Thema 6: Palliativ zu Hause =============================================


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
