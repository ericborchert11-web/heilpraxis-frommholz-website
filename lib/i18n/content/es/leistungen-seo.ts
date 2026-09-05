import type { Overlay } from '../types';
import type { SeoLeistung } from '@/lib/leistungen-seo';

/**
 * Fassungen für es, gekeyt nach dem deutschen Slug. Was hier fehlt,
 * erscheint auf /es weiterhin auf Deutsch.
 *
 * `slug` sowie alle `href` in `cta` und `relatedLinks` bleiben unverändert:
 * Das sind deutsche Referenzpfade, die `localizedHref` beim Rendern übersetzt.
 */
export const LEISTUNGEN_SEO_ES: Overlay<SeoLeistung> = {
  // === Money Page 1: 1:1-Betreuung zu Hause ====================================
  '1-zu-1-betreuung-berlin': {
    slug: '1-zu-1-betreuung-berlin',
    title: 'Atención individual en casa',
    short: 'Una persona, un cuidador, atención sin dividir — por horas o las veinticuatro horas, en el propio domicilio.',
    metaTitle: 'Atención individual Berlín – acompañamiento privado en casa',
    metaDescription:
      'Atención individual privada en Berlín: una persona de referencia en el propio domicilio, por horas o de forma continua. En caso de demencia, riesgo de caídas o en la última etapa de la vida.',
    h1: 'Atención individual en casa — toda la atención para una sola persona',
    primaryKeyword: 'atención individual Berlín',
    secondaryKeywords: [
      'cuidador privado en casa Berlín',
      'atención individual demencia Berlín',
      'cuidados privados Berlín',
    ],
    detail: {
      intro: [
        'En la asistencia domiciliaria habitual el reloj está siempre en la habitación. Quince minutos para ir al baño, doce para el desayuno, y después el siguiente domicilio. Lo primero que se pierde es justo lo que importa: tiempo en el que nadie tiene que seguir adelante.',
        'Atención individual significa esto: una profesional está ahí para una sola persona. Sin ruta, sin atender a varios a la vez, sin relevos en mitad de una conversación. En la propia vivienda, en un entorno conocido, con las costumbres de siempre. Por horas, para noches sueltas, para una fase difícil o de forma permanente.',
        'Trabajamos exclusivamente como servicio de enfermería privado (*Selbstzahler-Pflegedienst*) con un equipo pequeño y estable. Es una decisión consciente: tiene un precio, pero es lo que hace posible este tipo de tiempo.',
      ],
      sections: [
        {
          heading: 'Cuándo la atención individual es el camino correcto',
          paragraphs: [
            'No toda situación necesita una presencia constante. Estas suelen necesitarla:',
          ],
          stronglist: [
            { label: 'Demencia con inquietud nocturna', text: 'Levantarse, deambular, confundir el día y la noche. Los familiares aguantan unas semanas y después están agotados. Una persona de referencia fija devuelve la estructura — y el sueño a la familia.' },
            { label: 'Riesgo de caídas', text: 'Quien se levanta de noche y ya no se sostiene con seguridad no debería quedarse solo en casa. Estamos ahí cuando se levanta, ayudamos a tiempo y prevenimos caídas que de otro modo marcarían toda una etapa de la vida.' },
            { label: 'La última etapa de la vida en casa', text: 'Muchas personas quieren morir en su casa. Para que sea posible, la familia necesita a alguien que sostenga con ella las horas largas: despierto, tranquilo, con experiencia, sin prisa.' },
            { label: 'Después de una operación', text: 'Las primeras noches de la recuperación son las más críticas: confusión, inseguridad al levantarse, dolor. El acompañamiento cubre ese tramo hasta que vuelve la estabilidad.' },
            { label: 'Cuando los familiares llegan a su límite', text: 'Quien cuida necesita noches en las que duerme de un tirón y días en los que no tiene que estar localizable. Nosotros asumimos esas horas con fiabilidad.' },
          ],
        },
        {
          heading: 'Qué hace una cuidadora con nosotros',
          stronglist: [
            { label: 'Estar ahí', text: 'Presente, atenta, disponible. Hablar cuando alguien quiere hablar. Callar cuando alguien quiere silencio.' },
            { label: 'Observar y ordenar lo observado', text: 'Detectar cambios y transmitirlos con claridad — a la familia, al médico de cabecera, al servicio de enfermería. Con más de quince años de experiencia, nuestro equipo sabe qué es importante y qué puede esperar.' },
            { label: 'Sostener la vida cotidiana', text: 'Ayudar con la comida y la bebida, acompañar al baño, ayudar en los cambios posturales, administrar la medicación según pauta, mantener la calma y el orden.' },
            { label: 'Acompañar a donde haga falta', text: 'Al médico de cabecera, al especialista, a pasear, a una celebración familiar. Nadie espera solo en un pasillo.' },
            { label: 'Aliviar a la familia', text: 'No hace falta correr cada tarde. Usted sabe que hay alguien ahí — y se entera de cómo ha ido.' },
          ],
        },
        {
          heading: '¿Presencia despierta o localizada?',
          paragraphs: ['Para las horas de la noche distinguimos dos modelos, y la diferencia se nota claramente en el precio:'],
          stronglist: [
            { label: 'Presencia activa (despierta)', text: 'La profesional permanece despierta toda la noche, observa activamente y documenta con regularidad. Adecuado en situaciones agudas: fase final, confusión grave, alto riesgo de caídas.' },
            { label: 'Presencia localizada', text: 'La profesional duerme en una habitación contigua o en un sillón reclinable en la misma habitación, y se despierta con cualquier ruido. Adecuado cuando las noches suelen ser tranquilas pero nadie debe quedarse solo.' },
          ],
          trailingParagraphs: ['Qué modelo encaja lo aclaramos en la primera conversación. Se puede cambiar en cualquier momento si la situación cambia.'],
        },
        {
          heading: 'Qué cuesta la atención individual',
          paragraphs: [
            'La atención individual es una prestación privada. El seguro público de dependencia no la cubre directamente. Si existe un grado de dependencia (*Pflegegrad*), a menudo pueden emplearse el cuidado de respiro (*Verhinderungspflege*, § 39 SGB XI) o el importe de alivio (*Entlastungsbetrag*, § 45b SGB XI) — usted presenta después nuestra factura. Le asesoramos sobre lo que es posible en su caso.',
            'No damos precios cerrados, porque las situaciones son demasiado distintas: la tarifa por hora depende de la cualificación necesaria, del alcance y de si se trata de presencia despierta o localizada. En la primera conversación, que es gratuita, primero escuchamos y después hacemos una propuesta concreta y transparente, con tarifa por hora e importe total previsto.',
            'Los recargos según el § 3b EStG los indicamos abiertamente: 25 % de noche, 50 % domingos y festivos.',
          ],
        },
      ],
      faq: [
        { question: '¿Con qué rapidez pueden empezar?', answer: 'En situaciones previsibles bastan dos o tres días. En casos agudos intentamos ofrecer un primer acompañamiento en 24 horas — según el día y la hora, incluso antes. Llámenos y le diremos con franqueza qué es posible.' },
        { question: '¿Podemos contratar solo noches sueltas?', answer: 'Sí. Muchos de nuestros servicios son exactamente eso: una, dos o tres noches en una fase crítica. Noches sueltas de fin de semana o una noche fija por semana son tan posibles como un acompañamiento continuo durante meses.' },
        { question: '¿Es siempre la misma persona?', answer: 'En la medida de lo posible, sí. Trabajamos con un equipo pequeño y estable y, en acompañamientos largos, con dos o tres profesionales que se alternan, para que también en caso de enfermedad o vacaciones llegue una cara conocida. Un personal en cambio constante sería lo contrario de lo que busca la atención individual.' },
        { question: '¿Y si a mi madre no le gusta la persona?', answer: 'Entonces la cambiamos. Normalmente la extrañeza desaparece tras la primera hora, pero la química personal no es un detalle menor en este trabajo. Díganoslo y lo organizamos sin discusión.' },
        { question: '¿Qué cualificación tiene el personal?', answer: 'Depende de la situación. Cuando las exigencias asistenciales son altas, acude una enfermera titulada. Cuando se trata de presencia, atención y vida cotidiana, una cuidadora con experiencia suele ser la mejor opción. Qué necesita su caso lo aclaramos antes, no después.' },
        { question: '¿Lo cubre el seguro de enfermedad?', answer: 'No. El seguro público de enfermedad paga el tratamiento médico, no la presencia continua de una persona de referencia. Algunos seguros privados complementarios reembolsan una parte — conviene aclararlo de antemano.' },
        { question: '¿Necesitamos una habitación propia para la cuidadora?', answer: 'Para la presencia localizada basta un sofá, un sillón o una butaca reclinable — no hace falta una cama. Para la presencia despierta basta una silla y luz para leer. Nos adaptamos a su vivienda, y no al revés.' },
        { question: '¿Qué ocurre en una emergencia?', answer: 'La cuidadora avisa al servicio de urgencias (112), informa a los familiares y permanece junto a la persona hasta que llega la ayuda. Lo que hay que hacer se fija por escrito con usted al inicio del acompañamiento y, si lo desea, con el médico de cabecera.' },
      ],
      cta: { text: 'Solicitar una primera conversación', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Atención 24 horas', href: '/leistungen/24-stunden-betreuung', note: 'cobertura continua en turnos' },
      ],
    },
  },

  // === Money Page 2: Systemsprenger-Betreuung ==================================
  'systemsprenger-betreuung': {
    slug: 'systemsprenger-betreuung',
    title: 'Atención 1:1 en situaciones complejas',
    short: 'Atención 1:1 en cuadros psiquiátricos complejos.',
    metaTitle: 'Atención 1:1 en crisis psiquiátricas – Berlín',
    metaDescription:
      'Atención 1:1 para patologías concurrentes, crisis psiquiátricas y quienes no encuentran lugar en el sistema habitual. Equipo con experiencia en Berlín.',
    h1: 'Atención 1:1 en situaciones complejas — cuando nada más encaja',
    primaryKeyword: 'atención psiquiátrica domiciliaria Berlín',
    secondaryKeywords: [
      'cuidado 1 a 1 psiquiatría Berlín',
      'atención crisis psiquiátrica Berlín',
      'cuidado patología dual domicilio Berlín',
    ],
    detail: {
      intro: [
        'La palabra alemana para este trabajo es «Systemsprenger»: literalmente, alguien que hace saltar el sistema. Es un término duro. No nos gusta, pero nombra algo real: hay personas cuyas necesidades son tan complejas que las estructuras habituales no pueden sostenerlas. Patologías concurrentes (enfermedad psiquiátrica y adicción, enfermedad psiquiátrica y trauma, trastornos de la personalidad con autolesiones). Ingresos de crisis repetidos. Vínculos con los servicios de ayuda que se rompen una y otra vez. Diagnósticos que deberían excluirse entre sí y, sin embargo, aparecen juntos.',
        'Estamos especializados en ello. No porque «lo sepamos hacer todo», sino porque tenemos la actitud, la experiencia y los recursos para trabajar precisamente con estas situaciones. Desde hace más de quince años atendemos en Berlín a personas a las que otros proveedores dan la espalda.',
      ],
      sections: [
        {
          heading: 'A quién atendemos',
          paragraphs: [
            'No hay un perfil típico de cliente, pero sí constelaciones recurrentes. Unos pocos ejemplos anonimizados de nuestro trabajo:',
          ],
          stronglist: [
            {
              label: 'Enfermedad psiquiátrica y adicción concurrentes',
              text: 'Un adulto joven con episodios psicóticos graves y, a la vez, abuso de cannabis y alcohol. Las terapias de deshabituación fracasan por la enfermedad psiquiátrica; el tratamiento psiquiátrico, por el consumo. Nosotros lo acompañamos en su domicilio, con un marco claro, contactos regulares y una persona de referencia fija.',
            },
            {
              label: 'Riesgo agudo de autolesión en el entorno doméstico',
              text: 'Una mujer de unos cincuenta y cinco años, con depresión grave, de vuelta en casa tras varios intentos de suicidio. La familia no puede estar presente las veinticuatro horas y ella no quiere volver a tratarse fuera de casa. Establecemos una atención de veinticuatro horas en modelo de turnos rotativos, hasta que la terapia ambulatoria surte efecto.',
            },
            {
              label: 'La vivienda compartida asistida fracasa',
              text: 'Una persona con trastorno límite de la personalidad que se descontrola en cada piso tutelado, pero a la que se puede estabilizar en su casa, con un acompañamiento de referencia fijo y un equipo constante.',
            },
            {
              label: 'Demencia con agresividad grave',
              text: 'Una persona con demencia avanzada, aún físicamente en forma, a la que ninguna residencia mantiene, pero que resulta manejable en su propia vivienda con un acompañamiento tranquilo y experimentado.',
            },
          ],
        },
        {
          heading: 'Qué distingue a nuestra atención en estos casos',
          stronglist: [
            {
              label: 'Un equipo pequeño y estable',
              text: 'No trabajamos con personal autónomo en constante rotación. Cada cliente tiene entre dos y cuatro personas de referencia que se turnan. La confianza crece porque vuelven las mismas caras.',
            },
            {
              label: 'Una postura clara, sin lástima',
              text: 'Somos amables, pero coherentes. A quien provoca no se le responde con una contraprovocación. Quien pone a prueba encuentra límites fiables. Eso es, paradójicamente, a menudo lo que nuestros clientes más necesitan.',
            },
            {
              label: 'Experiencia en la gestión de crisis',
              text: 'Nuestro equipo conoce la agresividad, la ideación suicida, los episodios psicóticos, las autolesiones. No entramos en pánico: desescalamos, documentamos y mantenemos el contacto con el médico responsable o con el tutor legal.',
            },
            {
              label: 'Conexión con la red de ayuda',
              text: 'Trabajamos en estrecha colaboración con los médicos responsables, psiquiatras de consulta, tutores legales y servicios sociopsiquiátricos. No somos un sustituto de un equipo de tratamiento profesional: somos su brazo prolongado en la vida cotidiana en casa.',
            },
          ],
        },
        {
          heading: 'Quién lo financia',
          paragraphs: [
            'Una atención de este tipo es cara, y rara vez se financia por las vías ordinarias. Las posibles vías:',
          ],
          list: [
            'Pago privado por parte de la familia: cuando la situación económica lo permite, a menudo la vía más rápida.',
            'Ayuda a la integración conforme al SGB IX: cuando existe una discapacidad psíquica reconocida, solicitada ante la oficina de distrito competente.',
            'Asistencia social conforme al SGB XII: en casos de necesidad, cuando se han agotado otros medios.',
            'Seguros privados: cuando existen derechos de cobertura.',
          ],
        },
        {
          heading: 'Qué no ofrecemos',
          paragraphs: ['Somos sinceros: no podemos hacerlo todo.'],
          stronglist: [
            {
              label: 'Medidas coercitivas',
              text: 'no forman parte de nuestro cometido: cuando alguien supone un peligro agudo para terceros y no acepta la atención de forma voluntaria, eso corresponde a un centro con unidad cerrada.',
            },
            {
              label: 'Desintoxicación',
              text: 'no la realizamos: eso corresponde a un tratamiento de deshabituación cualificado.',
            },
            {
              label: 'Psicoterapia aguda prolongada',
              text: 'no es nuestra función: acompañamos la terapia, no la sustituimos.',
            },
          ],
        },
      ],
      faq: [
        {
          question: '¿Aceptan también a clientes a los que otros servicios asistenciales han rechazado?',
          answer:
            'Sí; a menudo son precisamente esas consultas las que llegan a nosotros. Evaluamos cada caso de forma individual en la primera consulta.',
        },
        {
          question: '¿Pueden asumir a clientes con tutela legal?',
          answer:
            'Sí. Trabajamos con regularidad con tutores legales, tanto profesionales como familiares. El contrato se celebra entonces con el tutor como representante autorizado.',
        },
        {
          question: '¿Con qué rapidez pueden asumir el caso?',
          answer:
            'En traspasos agudos, por regla general en un plazo de tres a siete días, según la complejidad del entorno. Un traspaso más rápido es posible en situaciones de urgencia.',
        },
        {
          question: '¿Cuánto cuesta aproximadamente al mes una atención 1:1 de veinticuatro horas de este tipo?',
          answer:
            'Varía mucho, según la cualificación necesaria, el entorno y la complejidad. Una atención 1:1 continua en modelo de turnos rotativos se sitúa muy por encima de la atención domiciliaria convencional; recibirá el cálculo exacto en la primera consulta, una vez determinadas las necesidades.',
        },
        {
          question: '¿Qué ocurre si un cliente se vuelve violento?',
          answer:
            'Disponemos de protocolos de escalada claros. En caso de peligro agudo avisamos al médico de urgencias y, si es necesario, a la policía. Forma parte de nuestra experiencia: estas situaciones son exigentes, pero no inusuales.',
        },
        {
          question: '¿Los clientes tienen que consentir la atención?',
          answer:
            'Sí; nosotros nunca prestamos atención contra la voluntad de nadie. Si una persona no quiere tenernos en su vivienda, no somos los indicados. En esos casos podemos, no obstante, asesorar a la familia sobre cómo instar, en su caso, una tutela legal.',
        },
      ],
      cta: { text: 'Solicitar una primera consulta', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Servicio de enfermería para pago privado',
          href: '/leistungen/pflegedienst-selbstzahler',
          note: 'nuestra orientación de base',
        },
      ],
    },
  },

  // === Money Page 3: Pflegedienst für Selbstzahler =============================
  'pflegedienst-selbstzahler': {
    slug: 'pflegedienst-selbstzahler',
    title: 'Servicio de enfermería para pago privado',
    short: 'Atención exclusiva sin burocracia de seguros.',
    metaTitle: 'Enfermería privada Berlín – atención 1:1 exclusiva',
    metaDescription:
      'Enfermería privada para pago privado en Berlín. Discreta, flexible, equipo pequeño y estable. Sin burocracia de seguros. Primera consulta sin compromiso.',
    h1: 'Un servicio de enfermería para pago privado — la atención como usted la desea',
    primaryKeyword: 'enfermería privada Berlín',
    secondaryKeywords: [
      'cuidado de ancianos particular Berlín',
      'servicio de enfermería sin seguro Berlín',
      'atención domiciliaria privada Berlín',
    ],
    detail: {
      intro: [
        'La atención financiada por el seguro tiene su propia lógica: facturada al minuto, ceñida a lo que es reembolsable, a menudo con personal cambiante y franjas horarias fijas. Eso funciona para muchas personas, pero no para todas.',
        'Quien paga la atención de forma privada puede aplicar otros criterios: tiempo, constancia, discreción. Un equipo pequeño que de verdad sabe quién es usted y qué necesita. Citas que se adaptan a su vida, y no al orden de la ruta de un servicio asistencial.',
        'La Heilpraxis Frommholz está especializada exactamente en este tipo de atención. Facturamos exclusivamente como pago privado. Es una decisión deliberada: nos permite trabajar sin la presión de los costes ni la burocracia, y atender a nuestros clientes como es debido, en lugar de como resulta facturable en cada momento.',
      ],
      sections: [
        {
          heading: 'Quién acude a nosotros como cliente privado',
          paragraphs: [
            'A los clientes de pago privado no los define un único criterio, sino su actitud. Lo que tienen en común:',
          ],
          list: [
            'Quieren saber quién viene, y prefieren que sea, en lo posible, la misma persona.',
            'Valoran la discreción: sin logotipo en el coche, sin un vehículo asistencial evidente en la entrada.',
            'Están dispuestos a pagar un precio de mercado por una buena atención, pero a cambio esperan no convertirse en parte de un sistema a destajo.',
            'No quieren que se decida por encima de ellos, sino que se planifique con ellos.',
          ],
        },
        {
          heading: 'Qué es distinto con nosotros',
          stronglist: [
            {
              label: 'Un equipo pequeño y estable',
              text: 'Cada cliente cuenta con entre dos y cuatro profesionales de referencia. Saben cómo le gusta el café a la señora Müller. Saben que al señor Schulze no conviene dirigirle la palabra nada más despertarse. Esa continuidad no tiene precio, y es nuestro estándar, no un deseo especial.',
            },
            {
              label: 'Tiempo en lugar de reloj',
              text: 'En vez de intervenciones de quince minutos, trabajamos por bloques: dos horas, cuatro horas, medias jornadas, jornadas completas, turnos continuos. Así queda espacio para la conversación durante el desayuno, para el paseo de la tarde, para el cambio postural sin prisas.',
            },
            {
              label: 'La discreción es la base del trabajo',
              text: 'Nuestro personal acude con ropa discreta, a menudo con su propio coche. Con clientes de ámbitos expuestos (ministerios federales, cuerpo diplomático, mundo empresarial) adoptamos acuerdos particulares.',
            },
            {
              label: 'Flexibilidad sin recargo',
              text: 'Si hay que mover una cita, se puede. Si de cuatro horas pasan a seis, se puede. Facturamos el tiempo realmente trabajado, no tarifas cerradas interpretadas en su perjuicio.',
            },
            {
              label: 'Sin seguros, sin burocracia',
              text: 'Recibe una factura al mes. Claramente desglosada, con los recargos conforme al § 3b EStG indicados de forma transparente. Sin negociar con seguros, sin discusiones sobre el grado de dependencia (Pflegegrad), sin peritajes del servicio médico (Medizinischer Dienst).',
            },
          ],
        },
        {
          heading: 'Qué cuesta',
          paragraphs: [
            'No tenemos precios cerrados, porque nuestros clientes tienen necesidades distintas. El acompañamiento por horas, la atención nocturna y la atención continua de veinticuatro horas se calculan según la cualificación de la persona asignada y según la hora del día. Los recargos conforme al § 3b EStG (25 % por la noche, de 22:00 a 06:00, 50 % domingos y festivos) se indican de forma transparente.',
            'En la primera consulta gratuita escuchamos primero; después hacemos una propuesta por escrito con una tarifa horaria concreta, un plan de turnos y un orden de magnitud mensual. Usted decide con calma.',
          ],
        },
        {
          heading: 'Cómo empieza',
          paragraphs: [
            'Una primera consulta (gratuita, de unos sesenta minutos) en su domicilio o por teléfono. Usted nos describe la situación y valoramos si somos los indicados. Si lo somos, hacemos una propuesta por escrito con el número de horas, un plan de turnos y un precio. Usted decide con calma. Si acepta, empezamos en un plazo de cinco a diez días.',
          ],
        },
      ],
      faq: [
        {
          question: '¿Por qué no trabajan con el seguro legal?',
          answer:
            'Porque supondría una lógica radicalmente distinta. La atención financiada por el seguro se calcula al minuto, está ceñida a catálogos fijos de prestaciones, con tarifas cerradas que quedan por debajo del coste real del personal. Nosotros queremos ofrecer una buena atención, y eso solo es posible cuando el precio se acuerda libremente.',
        },
        {
          question: '¿Podemos utilizar de todos modos la prestación económica por dependencia?',
          answer:
            'Sí. Si existe un grado de dependencia (Pflegegrad), la prestación económica por dependencia (Pflegegeld) se ingresa en su cuenta y puede destinarla, en parte, al pago de nuestra factura. Es su decisión, no un asunto del seguro.',
        },
        {
          question: '¿Su personal es personal de enfermería titulado?',
          answer:
            'Nuestro equipo es mixto: personal de enfermería titulado (formación de tres años), auxiliares de enfermería (formación de uno o dos años), educadores y educadoras sociales, personal de acompañamiento cualificado. Según la necesidad, asignamos la cualificación adecuada.',
        },
        {
          question: '¿Están localizables también de noche y los fines de semana?',
          answer:
            'Por teléfono, sí; en caso necesario, de forma ininterrumpida. Los servicios en fin de semana forman parte de nuestra oferta.',
        },
        {
          question: '¿Qué ocurre si la persona asignada enferma?',
          answer:
            'La sustituye una persona de confianza del equipo estable. Nunca tendrá ante la puerta a alguien totalmente desconocido.',
        },
        {
          question: '¿Pueden trabajar también en residencias de mayores?',
          answer:
            'Sí, como atención adicional, con la conformidad del centro. Es más frecuente de lo que se piensa: las familias complementan la atención de la residencia con nuestro personal, por ejemplo para un acompañamiento de algunas horas por la tarde.',
        },
      ],
      cta: { text: 'Solicitar una primera consulta', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Atención 1:1 en situaciones complejas',
          href: '/leistungen/systemsprenger-betreuung',
          note: 'para casos complejos',
        },
      ],
    },
  },

  // === Money Page 4: 24-Stunden-Betreuung =====================================
  '24-stunden-betreuung': {
    slug: '24-stunden-betreuung',
    title: 'Atención de veinticuatro horas',
    short: 'Todo el día en modelo de turnos rotativos, conforme a la legislación alemana.',
    metaTitle: 'Atención 24 horas Berlín – en casa, todo el día',
    metaDescription:
      'Atención continua en el propio hogar: equipo pequeño y estable, personal de enfermería alemán, conforme a la legislación laboral. Sin mercado gris.',
    h1: 'Atención de veinticuatro horas en Berlín — sin mercado gris',
    primaryKeyword: 'atención 24 horas Berlín',
    secondaryKeywords: [
      'cuidado interno legal Berlín',
      'atención domiciliaria 24 horas Berlín',
      'cuidadora las 24 horas Berlín',
    ],
    detail: {
      intro: [
        'Muchos proveedores anuncian «atención de veinticuatro horas» y con ello se refieren a una sola persona que vive en la casa durante días o semanas seguidas. En casi todas las configuraciones eso es, jurídicamente, mercado gris: ley de jornada laboral, salario mínimo, seguridad social, régimen de descansos. Sentencias recientes (Tribunal Federal de Trabajo, Tribunal de Justicia de la Unión Europea) lo dejan claro: ese modelo no cumple lo que promete. Cada vez con mayor frecuencia, los contratantes responden de forma personal.',
        'Nosotros lo hacemos de otra manera.',
        'Para nosotros, la atención de veinticuatro horas significa un equipo pequeño y estable de personal de enfermería y de acompañamiento alemán en modelo de turnos rotativos. Correctamente dado de alta, correctamente remunerado, con los recargos de noche y de domingo conforme al § 3b EStG indicados de forma transparente. Sin costes ocultos, sin riesgos jurídicos para usted como contratante.',
      ],
      sections: [
        {
          heading: 'Cómo es nuestro modelo de turnos en la práctica',
          paragraphs: ['Un ejemplo típico; la realidad siempre es individual:'],
          stronglist: [
            { label: 'Turno de mañana 06:00–14:00', text: 'la enfermera Anna.' },
            { label: 'Turno de tarde 14:00–22:00', text: 'el enfermero Bernhard.' },
            {
              label: 'Turno de noche 22:00–06:00',
              text: 'la enfermera Carla (localizada o en vela activa).',
            },
          ],
        },
        {
          heading: 'Quién forma el equipo',
          paragraphs: ['Nuestros equipos de veinticuatro horas se componen de:'],
          stronglist: [
            {
              label: 'Personal de enfermería titulado',
              text: 'para la atención clínica (medicación, cura de heridas, asesoramiento a la familia).',
            },
            {
              label: 'Auxiliares de enfermería y personal de acompañamiento',
              text: 'para el acompañamiento cotidiano (higiene, movilización, actividad, comidas).',
            },
            {
              label: 'De forma opcional, educadores sociales o personal de acompañamiento formado en demencia',
              text: 'cuando es necesario.',
            },
          ],
        },
        {
          heading: 'Qué cuesta la atención de veinticuatro horas con nosotros',
          paragraphs: [
            'Una atención continua con tres turnos al día, siete días a la semana, supone una inversión mensual considerable. Lo que cuesta en concreto depende de tres factores: si la noche se cubre como localización o como vela activa, qué cualificación asistencial es necesaria (personal de enfermería titulado, auxiliar de enfermería, personal de acompañamiento) y qué exigencias particulares existen (ventilación, tratamiento de heridas, conductas desafiantes).',
            'En la primera consulta (de sesenta a noventa minutos, gratuita) repasamos el escenario en detalle y entregamos un cálculo por escrito con un orden de magnitud mensual: sin tarifas cerradas, sin sorpresas.',
          ],
        },
        {
          heading: 'En qué debe fijarse con otros proveedores',
          paragraphs: [
            'El mercado está lleno de intermediarios que ofrecen «personal de veinticuatro horas de Europa del Este». Jurídicamente, estos modelos se mueven sobre hielo fino:',
          ],
          stronglist: [
            {
              label: 'Ley de jornada laboral',
              text: 'Una persona no puede estar legalmente «presente veinticuatro horas». Han de respetarse las pausas y los periodos de descanso.',
            },
            {
              label: 'Salario mínimo',
              text: 'Con veinticuatro horas de disponibilidad al día, en muchos modelos se pagan de hecho tarifas horarias muy por debajo del salario mínimo.',
            },
            {
              label: 'Seguridad social',
              text: 'En el desplazamiento de trabajadores autónomos desde otros países de la UE existen riesgos de cumplimiento considerables.',
            },
            {
              label: 'Responsabilidad',
              text: 'Si la persona cuidadora se rompe la cadera camino del baño, en caso de duda responde el contratante.',
            },
          ],
        },
      ],
      faq: [
        {
          question: '¿Cuántas personas hay en total en el equipo?',
          answer:
            'Para una cobertura de veinticuatro horas todos los días necesitamos entre cuatro y seis personas en el equipo estable; así quedan cubiertos también las vacaciones, las bajas y los fines de semana. Pero usted solo tiene ante sí a una persona por turno.',
        },
        {
          question: '¿Cambia el personal con frecuencia?',
          answer:
            'No. Trabajamos con relaciones laborales de larga duración. Si un miembro del equipo causa baja, primero recurrimos a un grupo ampliado de colegas que ya conocen a su familiar, antes de que se incorpore alguien realmente nuevo.',
        },
        {
          question: '¿Podemos acordar también turnos de doce horas?',
          answer:
            'Sí, en cierta medida (por ejemplo, en cambios largos de día y noche). Comprobamos si es viable conforme a la legislación laboral.',
        },
        {
          question: '¿Quién responde si la persona cuidadora rompe algo?',
          answer:
            'Disponemos de un seguro de responsabilidad civil profesional. Los daños se gestionan a través de nosotros, no a través de su seguro del hogar.',
        },
        {
          question: '¿Podemos empezar con poca antelación?',
          answer:
            'Cuando la atención en casa debe comenzar a corto plazo, necesitamos de cinco a diez días. Con un horizonte de planificación más amplio podemos ajustarnos de forma más individual.',
        },
        {
          question: '¿Qué ocurre si nuestro familiar fallece?',
          answer:
            'En caso de fallecimiento, el contrato termina automáticamente el día del fallecimiento. Las horas pendientes aún se facturan; después no se generan más costes: sin plazo residual, sin periodo de preaviso.',
        },
        {
          question: '¿Pueden venir también durante tres o cuatro semanas tras una operación?',
          answer:
            'Sí. Los servicios de veinticuatro horas de duración limitada (rehabilitación posoperatoria, fase de convalecencia) son una solicitud frecuente. La reserva mínima es de una semana.',
        },
      ],
      cta: { text: 'Solicitar una primera consulta', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Servicio de enfermería para pago privado',
          href: '/leistungen/pflegedienst-selbstzahler',
          note: 'nuestra orientación de base',
        },
        {
          label: 'Acompañamiento nocturno en Berlín',
          href: '/leistungen/nachtwachen-berlin',
          note: 'cuando solo hay que cubrir la noche',
        },
        {
          label: 'Asesoría en dependencia',
          href: '/leistungen/pflegeberatung-berlin',
          note: 'sobre el grado de dependencia y la financiación',
        },
      ],
    },
  },

  // === Money Page 5: Pflegeberatung Berlin =====================================
  'pflegeberatung-berlin': {
    slug: 'pflegeberatung-berlin',
    title: 'Asesoría en dependencia en Berlín',
    short: 'Independiente, comprensible, con la mirada puesta en lo que de verdad ayuda.',
    metaTitle: 'Asesoría en dependencia Berlín – trámites y ayudas',
    metaDescription:
      'Asesoría independiente en dependencia en Berlín: solicitar el grado de dependencia, entender las prestaciones, preparar el peritaje. Primera consulta gratuita.',
    h1: 'Asesoría en dependencia en Berlín — clara, independiente, comprensible',
    primaryKeyword: 'asesoría de dependencia Berlín',
    secondaryKeywords: [
      'solicitar grado de dependencia Berlín',
      'asesoría seguro de dependencia alemán',
      'ayuda con el Pflegegrad Berlín',
    ],
    detail: {
      intro: [
        'La atención a la dependencia se ha vuelto complicada. Grados de dependencia (Pflegegrade), cuidado de relevo (Verhinderungspflege), el presupuesto de descarga (Entlastungsbudget), la prestación combinada, la asignación para material de apoyo, el ingreso temporal, el centro de día, el complemento por vivienda compartida, el subsidio de apoyo a personas cuidadoras: incluso los profesionales pierden a veces el hilo. Nosotros no.',
        'Y como sabemos cuánto dinero se queda por el camino cuando se presentan las solicitudes equivocadas o se pierde el momento oportuno, ofrecemos una asesoría en dependencia que de verdad sirve, con un enfoque que la distingue de la asesoría estándar de los seguros: partimos de la necesidad, no del catálogo de prestaciones.',
      ],
      sections: [
        {
          heading: 'Sobre qué asesoramos en concreto',
          stronglist: [
            {
              label: 'Solicitud del grado de dependencia y peritaje',
              text: 'Le preparamos para la cita con el servicio médico (Medizinischer Dienst), ayudamos a documentar la necesidad de ayuda y redactamos con usted la solicitud. Si la resolución es insuficiente, le apoyamos en el recurso y en la solicitud de un grado superior.',
            },
            {
              label: 'Optimización de prestaciones con un grado de dependencia ya reconocido',
              text: 'Comprobamos si todas las prestaciones a las que tiene derecho se solicitan realmente; a menudo quedan sin utilizar varios miles de euros al año porque no se aprovechan el presupuesto de descarga, el cuidado de relevo o la asignación para material de apoyo.',
            },
            {
              label: 'Gestionar las transiciones',
              text: 'Cuando la atención en casa comienza de nuevo, cuando se cambia de centro de día o de servicio a domicilio, cuando hay que buscar una plaza en residencia, le ayudamos a dar los pasos adecuados en el orden adecuado.',
            },
            {
              label: 'Poderes y previsión',
              text: 'Poder preventivo, disposición sobre la tutela, voluntades anticipadas: qué se necesita de verdad, cómo debe estar redactado, dónde debe quedar depositado.',
            },
            {
              label: 'Adaptaciones de la vivienda',
              text: '¿Qué obras financia el seguro de dependencia (Pflegekasse) (hasta 4.000 € por medida)? ¿Qué material de apoyo paga el seguro de enfermedad? ¿Dónde merece la pena la solicitud y dónde no?',
            },
            {
              label: 'Conflictos dentro de la familia',
              text: 'Cuando los hermanos discuten por el cuidado de los padres, cuando chocan las expectativas, cuando la culpa bloquea las decisiones, escuchamos, ordenamos y proponemos caminos.',
            },
          ],
        },
        {
          heading: 'Qué es la asesoría en dependencia conforme al § 7a SGB XI (y qué hacemos de otra manera)',
          paragraphs: [
            'Desde 2009, los seguros de dependencia están obligados a ofrecer una asesoría gratuita. Es una prestación importante, pero tiene debilidades estructurales:',
          ],
          list: [
            'Los asesores están empleados por el seguro y no pueden recomendar con total independencia.',
            'Las citas suelen ser breves (de 45 a 60 minutos) y están orientadas a temas estándar.',
            'Las constelaciones complejas (varios grados de dependencia en la familia, seguro internacional, transiciones entre formas de atención) no se abordan en profundidad.',
          ],
        },
        {
          heading: 'Qué cuesta',
          paragraphs: [
            'La primera consulta es gratuita y sin compromiso. Para la asesoría detallada, las visitas a domicilio, el acompañamiento en el peritaje y el apoyo con las solicitudes, calculamos según el esfuerzo; le indicamos el orden de magnitud directamente en la primera consulta y lo fijamos por escrito. No tenemos precios cerrados, porque las necesidades difieren demasiado.',
          ],
        },
        {
          heading: 'Cuándo merece especialmente la pena una asesoría en dependencia',
          list: [
            'Antes de la primera cita del peritaje: la preparación decide a menudo una diferencia de uno o dos grados de dependencia.',
            'Con un grado de dependencia denegado o demasiado bajo: aquí hay que respetar el plazo de recurso (cuatro semanas).',
            'Cuando la atención en casa comienza de nuevo: las primeras semanas son decisivas para su estabilidad.',
            'Ante una necesidad de cuidados repentina (ictus, caída): una solicitud rápida asegura prestaciones con efecto retroactivo desde la fecha de solicitud.',
            'En conflictos familiares sobre el cuidado de los padres.',
          ],
        },
      ],
      faq: [
        {
          question: '¿Son ustedes asesores en dependencia conforme al § 7a SGB XI?',
          answer:
            'Ofrecemos una asesoría en dependencia privada e independiente. El reconocimiento formal conforme al § 7a no suele ser relevante para nuestros clientes, porque no facturamos a través del seguro. Si desea la asesoría oficial del § 7a, con gusto le derivamos.',
        },
        {
          question: '¿Pueden venir también a nuestra vivienda?',
          answer:
            'Sí; las visitas a domicilio son, de hecho, lo habitual. Muchas cosas solo pueden valorarse sobre el terreno.',
        },
        {
          question: '¿Ayudan también con el recurso sobre el grado de dependencia?',
          answer:
            'Sí. Redactamos recursos y, si es necesario, podemos acudir también al nuevo peritaje.',
        },
        {
          question: '¿Conocen también el seguro de dependencia privado?',
          answer:
            'Sí; los aseguradores privados tienen a menudo otras estructuras de tarifas y derechos de subsidio para funcionarios. Conocemos a los principales aseguradores privados de dependencia en Berlín.',
        },
        {
          question: '¿Cuánto tarda desde la solicitud hasta el grado de dependencia?',
          answer:
            'Por ley, cinco semanas desde la fecha de solicitud; en Berlín, actualmente, a menudo de seis a ocho semanas. Las prestaciones se conceden con efecto retroactivo a la fecha de solicitud, por lo que merece la pena solicitarlo pronto.',
        },
        {
          question: '¿Qué diferencia hay entre asesoría en dependencia y coordinación de la atención?',
          answer:
            'Asesoría es la transmisión estructurada de conocimientos y opciones. Coordinación es la gestión activa de la situación de cuidados (concertar citas, hablar con los servicios, presentar solicitudes). Ofrecemos ambas, contratables por separado.',
        },
        {
          question: '¿Puedo desgravar la asesoría en dependencia?',
          answer:
            'Los gastos de cuidados son deducibles como gasto extraordinario a partir de ciertos umbrales. Los gastos de asesoría, por regla general, también. Aclare los detalles con su asesor fiscal.',
        },
      ],
      cta: { text: 'Solicitar una primera consulta', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Solicitar el grado de dependencia',
          href: '/themen/pflegegrad-beantragen',
          note: 'la guía concreta',
        },
        {
          label: 'El peritaje del servicio médico',
          href: '/themen/mdk-begutachtung',
          note: 'qué le espera',
        },
        {
          label: 'Cuidado de relevo',
          href: '/themen/verhinderungspflege',
          note: 'el derecho que más se subestima',
        },
      ],
    },
  },

  // === Money Page 6: Nachtwachen Berlin =======================================


  // === Money Page 8: Reisebegleitung für Senioren =============================

};
