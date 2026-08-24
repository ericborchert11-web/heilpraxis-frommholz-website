import type { Overlay } from '../types';
import type { SeoStandort } from '@/lib/standorte';

/**
 * Spanische Fassungen, gekeyt nach dem deutschen Slug. Was hier fehlt,
 * erscheint auf `/es` weiterhin auf Deutsch.
 *
 * `slug`, `plz`, `geo`, `name`, `bezirk` sowie `isHauptstandort`/`hideInFooter`
 * bleiben unverändert — Ortsnamen und Strukturflags werden nicht übersetzt.
 * Jeder `href` in `detail.cta` und `detail.relatedLinks` ist ein deutscher
 * Referenzpfad und wird erst beim Rendern lokalisiert.
 *
 * Der Detail-Renderer gibt reinen Text aus (kein Markdown). Deutsche Fachbegriffe
 * stehen darum in runden Klammern statt kursiv: "acompañamiento (Sitzwache)".
 */
export const STANDORTE_ES: Overlay<SeoStandort> = {
  // === 1. Moabit (Hauptstandort) ==============================================
  moabit: {
    slug: 'moabit',
    name: 'Moabit',
    bezirk: 'Mitte',
    plz: ['10551', '10553', '10555', '10557', '10559'],
    geo: { lat: 52.5349, lng: 13.3432 },
    hook: 'Nuestra sede, nuestro barrio.',
    isHauptstandort: true,
    metaTitle: 'Cuidado y acompañamiento en Moabit — su barrio',
    metaDescription: 'Cuidado, acompañamiento (Sitzwache) y atención 24 horas en Moabit. Estamos en la Stephanstraße 46 y conocemos su barrio como pocos.',
    h1: 'Cuidado y acompañamiento en Moabit — desde su barrio, para su barrio',
    primaryKeyword: 'cuidado a domicilio Moabit Berlín',
    detail: {
      intro: [
        'Moabit es nuestro hogar. Desde hace más de quince años trabajamos en la Stephanstraße 46 —en pleno centro, entre Wedding, Tiergarten y el Hansaviertel—. Conocemos los edificios antiguos entre la Beusselstraße y la Turmstraße. Conocemos el silencio de la Wittstocker Straße y el bullicio de la Stephanplatz. Sabemos por dónde entran las ambulancias y qué portales resultan difíciles de recorrer.',
        'Si necesita cuidados en Moabit, estamos con usted en diez minutos.',
      ],
      sections: [
        {
          heading: 'Lo que ofrecemos en Moabit',
          paragraphs: ['Toda nuestra gama de servicios, con la ventaja de que estamos aquí mismo, a la vuelta de la esquina:'],
          list: [
            'Acompañamiento (Sitzwache) — en el hospital, en casa, en el hospicio.',
            'Atención las veinticuatro horas con un equipo de cuidadores de habla alemana.',
            'Acompañamiento por horas para personas mayores.',
            'Asesoramiento en materia de cuidados, a menudo en su propio domicilio.',
            'Guardias nocturnas y acompañamiento en hospicio.',
          ],
        },
        {
          heading: 'Hospitales en Moabit y sus alrededores',
          paragraphs: ['Conocemos los centros más importantes:'],
          list: [
            'Klinikum am Urban (Vivantes) — a 15 minutos.',
            'Vivantes Klinikum am Friedrichshain — a 20 minutos.',
            'DRK Kliniken Westend — a 18 minutos.',
            'Charité Campus Virchow — a 8 minutos.',
            'Lazarus-Krankenhaus (Wedding) — a 10 minutos.',
          ],
          trailingParagraphs: ['En todos estos centros hemos prestado ya servicios de acompañamiento (Sitzwache). Conocemos a las direcciones de enfermería, sabemos cómo se regula el acceso y llegamos a la planta sin rodeos.'],
        },
        {
          heading: 'Lo que hace especial a Moabit',
          paragraphs: ['Moabit es heterogéneo. El Beusselkiez y la cercanía del Hansaviertel, vecinos de toda la vida y locales nuevos, familias y personas solas. Nuestra clientela aquí es tan diversa como el propio barrio (Kiez):'],
          list: [
            'Personas mayores en los grandes pisos antiguos en torno a la Hutten-, la Calvin- y la Bremer Straße, que desean ayuda.',
            'Familias en los edificios de alquiler junto a la Stephan- y la Stromstraße, cuyos padres están de visita.',
            'Residentes de complejos de viviendas para mayores que desean atención adicional de pago privado.',
            'Inquilinos cuyos familiares están hospitalizados y necesitan compañía.',
          ],
        },
      ],
      faq: [
        { question: '¿Llegan especialmente rápido en caso de urgencia en Moabit?', answer: 'Sí: a menudo estamos con usted en 5-10 minutos, según la hora del día y el tráfico. Para solicitudes urgentes de acompañamiento (Sitzwache) del barrio inmediato, ofrecemos la respuesta más rápida de toda la ciudad.' },
        { question: '¿Con qué residencias de Moabit colaboran?', answer: 'Acudimos a residencias y complejos de viviendas asistidas como apoyo adicional, cuando una familia desea horas suplementarias de atención individualizada. Las instituciones concretas las tratamos en la primera conversación.' },
        { question: '¿Todo su personal es de Moabit?', answer: 'No, pero muchos viven en el centro de la ciudad. Eso significa trayectos cortos y un buen conocimiento local.' },
      ],
      cta: { text: 'Solicitar una primera conversación', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Cuidado a domicilio de pago privado', href: '/leistungen/pflegedienst-selbstzahler', note: 'nuestra orientación fundamental' },
        { label: 'Asesoramiento en materia de cuidados en Berlín', href: '/leistungen/pflegeberatung-berlin', note: 'a menudo como primer contacto' },
        { label: 'Tiergarten', href: '/standorte/tiergarten', note: 'el barrio contiguo' },
        { label: 'Frohnau', href: '/standorte/frohnau', note: 'en el norte de Berlín' },
      ],
    },
  },

  // === 2. Tiergarten ===========================================================
  tiergarten: {
    slug: 'tiergarten',
    name: 'Tiergarten',
    bezirk: 'Mitte',
    plz: ['10785', '10787', '10557'],
    geo: { lat: 52.514, lng: 13.351 },
    hook: 'Discreción y trayectos cortos.',
    metaTitle: 'Cuidado en Tiergarten — rápido y discreto',
    metaDescription: 'Cuidado a domicilio de pago privado en Tiergarten. Discreto, a corta distancia de nuestra sede en Moabit. También para embajadas y cuerpo diplomático.',
    h1: 'Cuidado en Tiergarten — discreto, rápido, de proximidad',
    primaryKeyword: 'cuidado a domicilio Tiergarten Berlín',
    detail: {
      intro: [
        'Tiergarten no es solo un parque. Es también un barrio en el que residen numerosas embajadas, donde empieza el Barrio Diplomático y donde la situación residencial suele ser singular: grandes apartamentos, viviendas de representación, edificios con conserjería.',
        'Quien necesita cuidados en Tiergarten tiene a menudo exigencias particulares: discreción, competencia lingüística, sensibilidad ante las situaciones de protocolo, disponibilidad a corto plazo. Estamos preparados para ello.',
      ],
      sections: [
        {
          heading: 'Quién acude a nosotros en Tiergarten',
          list: [
            'Personal de embajadas con familiares que necesitan cuidados.',
            'Representaciones diplomáticas que organizan cuidados de pago privado para dignatarios de paso.',
            'Residentes de los mejores complejos de apartamentos en torno al Großer Tiergarten, la Lützowplatz y la Hofjägerallee.',
            'Pacientes del cercano Bundeswehrkrankenhaus que necesitan seguir acompañados tras el alta.',
            'Personas mayores de los complejos de viviendas asistidas de la Klingelhöferstraße y sus alrededores.',
          ],
        },
        {
          heading: 'Lo que más importa en el cuidado en Tiergarten',
          stronglist: [
            { label: 'Discreción', text: 'Nuestro personal se presenta con ropa discreta, sin distintivos visibles de un servicio de cuidados. Las citas no se comentan en voz alta por teléfono. Cuando hace falta, firmamos acuerdos de confidencialidad adicionales.' },
            { label: 'Competencia lingüística', text: 'Según la necesidad, asignamos cuidadores con un buen dominio del inglés o del francés.' },
            { label: 'Disponibilidad a corto plazo', text: 'La vida diplomática se planifica con poca antelación. Estamos preparados para empezar incluso en un plazo de 24 horas.' },
            { label: 'Etiqueta con la conserjería', text: 'Sabemos cómo anunciarnos en edificios con conserjería o servicio de seguridad, y cómo preservar la imagen que nuestros clientes desean mantener allí.' },
          ],
        },
        {
          heading: 'Hospitales y tiempos de trayecto',
          list: [
            'Bundeswehrkrankenhaus Berlin (Scharnhorststraße) — a 7 minutos.',
            'Charité Campus Mitte — a 10 minutos.',
            'Vivantes Klinikum am Friedrichshain — a 15 minutos.',
          ],
          trailingParagraphs: ['De la Stephanplatz en Moabit a Tiergarten por la Beethovenstraße: unos 8-12 minutos según la hora del día. Podemos acudir con más frecuencia y quedarnos más tiempo, sin recargos por desplazamiento.'],
        },
      ],
      faq: [
        { question: '¿Su personal habla inglés u otros idiomas?', answer: 'Sí: el equipo cuenta con cuidadores que dominan el inglés a nivel profesional, y algunas personas con francés. Ante requisitos idiomáticos específicos, lo aclaramos antes de iniciar el contrato.' },
        { question: '¿Qué garantía de confidencialidad ofrecen con la clientela diplomática?', answer: 'El deber de secreto profesional en el ámbito de los cuidados está fijado por ley y recogido en el contrato. Con clientes especialmente sensibles firmamos, además, acuerdos de confidencialidad adicionales.' },
        { question: '¿Pueden trabajar también en un hotel, si la persona que necesita cuidados se aloja allí?', answer: 'Sí: sucede con regularidad (familiares de visita en Berlín que han reservado un hotel en Tiergarten). Nos coordinamos con el hotel.' },
      ],
      cta: { text: 'Solicitar una primera conversación', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Cuidado a domicilio de pago privado', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Acompañamiento en viajes para mayores', href: '/leistungen/reisebegleitung-senioren', note: 'a menudo relevante para los viajes de regreso de clientes diplomáticos' },
        { label: 'Moabit', href: '/standorte/moabit', note: 'nuestra sede, directamente contigua' },
      ],
    },
  },

  // === 3. Berlin-Mitte =========================================================
  mitte: {
    slug: 'mitte',
    name: 'Berlin-Mitte',
    bezirk: 'Mitte',
    plz: ['10117', '10115', '10119', '10178', '10179'],
    geo: { lat: 52.52, lng: 13.408 },
    hook: 'Cerca de la Charité Mitte.',
    metaTitle: 'Cuidado a domicilio en Berlin-Mitte — discreto',
    metaDescription: 'Cuidados, acompañamiento (Sitzwache) y compañía en Berlin-Mitte. Atención cercana a los hospitales Charité Mitte y Sankt Hedwig.',
    h1: 'Cuidado y acompañamiento en Berlin-Mitte — cerca de los hospitales y rápidos',
    primaryKeyword: 'cuidado a domicilio Berlín Mitte',
    detail: {
      intro: [
        'Berlin-Mitte es administración, turismo, vivienda —y hospitales—. Charité Mitte (Luisenstraße/Charitéplatz), Sankt Hedwig (Große Hamburger Straße), Vivantes Friedrichshain (en el límite de la Landsberger Allee): en Mitte se encuentran algunos de los hospitales más importantes de Berlín.',
        'Muchas de nuestras solicitudes de Mitte proceden precisamente de estos centros: acompañamiento (Sitzwache) para pacientes, apoyo en los traslados, transiciones de vuelta a casa. Pero Mitte es también un barrio residencial: vecinos de toda la vida entre el Hackescher Markt y la Friedrichstraße, nuevos residentes en los edificios del Spreebogen.',
      ],
      sections: [
        {
          heading: 'Lo que hacemos con más frecuencia en Berlin-Mitte',
          stronglist: [
            { label: 'Acompañamiento (Sitzwache) en la Charité Mitte', text: 'Acompañamiento individualizado tras una intervención, compañía en caso de demencia durante el ingreso, presencia en la última fase de la vida. Conocemos las plantas y conocemos las rutinas.' },
            { label: 'Acompañamiento en Sankt Hedwig', text: 'El Sankt Hedwig es un centro católico con rutinas propias. Lo respetamos. Nuestro personal tiene experiencia en el trato con estructuras de impronta eclesial.' },
            { label: 'Transiciones tras el alta hospitalaria', text: 'Cuando se acerca el alta, muchas familias necesitan un puente entre la clínica y el hogar. Nos hacemos cargo de los primeros días en casa, a menudo con modelos de 12 o 24 horas.' },
            { label: 'Asesoramiento en materia de cuidados en pisos de Mitte', text: 'Acudimos a su domicilio y lo tratamos con la familia y el médico de cabecera.' },
          ],
        },
        {
          heading: 'Tiempo de trayecto desde Moabit',
          paragraphs: [
            'En coche por la Invalidenstraße hasta la Charité Mitte: unos 7 minutos. A las zonas residenciales entre la Friedrichstraße y la Alexanderplatz: de 10 a 15 minutos.',
          ],
        },
      ],
      faq: [
        { question: '¿Pueden asumir el acompañamiento (Sitzwache) en la Charité Mitte?', answer: 'Sí, con regularidad. Antes del primer servicio contactamos con la dirección de enfermería de la planta y, si es necesario, obtenemos su autorización por escrito.' },
        { question: '¿Con qué rapidez llegan a un hospital?', answer: 'A la mayoría de los hospitales de Mitte, en 10 o 15 minutos. En situaciones urgentes solemos estar disponibles el mismo día.' },
        { question: '¿Podemos reservar un acompañamiento (Sitzwache) antes de una operación programada?', answer: 'Es muy recomendable: en intervenciones planificables podemos fijar el acompañamiento ya para el día 1 tras la operación. Eso reduce el riesgo de delirio y favorece la recuperación.' },
      ],
      cta: { text: 'Solicitar una primera conversación', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Moabit', href: '/standorte/moabit', note: 'directamente contiguo' },
      ],
    },
  },

  // === 4. Hansaviertel =========================================================
  hansaviertel: {
    slug: 'hansaviertel',
    name: 'Hansaviertel',
    bezirk: 'Mitte',
    plz: ['10557'],
    geo: { lat: 52.518, lng: 13.343 },
    hook: 'Presencia discreta en el barrio de la arquitectura.',
    metaTitle: 'Cuidado en el Hansaviertel — centro verde',
    metaDescription: 'Cuidado, acompañamiento (Sitzwache) y compañía en el Hansaviertel. Presencia discreta para los mayores de sus emblemáticos edificios de apartamentos.',
    h1: 'Cuidado en el Hansaviertel — en el barrio sereno entre Tiergarten y el Spree',
    primaryKeyword: 'cuidado a domicilio Hansaviertel Berlín',
    detail: {
      intro: [
        'El Hansaviertel es uno de los barrios singulares de Berlín. Nació en 1957 con motivo de la Exposición Internacional de la Construcción (Interbau), con obras de Niemeyer, Aalto, Gropius y Eiermann —candidato a Patrimonio de la Humanidad de la UNESCO—. Pero es también un barrio residencial cualquiera, con una particularidad: muchos de sus primeros habitantes han envejecido aquí. Los pisos suelen tener plantas pequeñas y sus residentes viven a menudo solos.',
        'Acudimos al Hansaviertel porque conocemos el barrio. Desde la estación de Bellevue, desde la Altonaer Straße, desde la Klopstockstraße: todo queda a diez minutos de nuestra sede en Moabit.',
      ],
      sections: [
        {
          heading: 'Quién acude a nosotros en el Hansaviertel',
          list: [
            'Primeros residentes de los apartamentos de la Interbau, hoy de edad muy avanzada y a menudo solos.',
            'Personas que necesitan cuidados en los pisos del complejo de Caritas en la Händelallee.',
            'Mayores interesados en el arte y la cultura, que se instalaron aquí para tener a mano el corazón cultural de Berlín.',
            'Viudas y viudos que desean permanecer en su piso de siempre pero necesitan ayuda.',
          ],
        },
        {
          heading: 'Lo que más se necesita en el Hansaviertel',
          stronglist: [
            { label: 'Acompañamiento por horas', text: 'para mayores que viven solos —no cada día, pero sí con regularidad—. Dos o tres horas: un paseo juntos por el Tiergarten, una comida en compañía, la lectura de un libro en voz alta.' },
            { label: 'Cobertura de fin de semana', text: 'Cuando entre semana hay una asistenta y visitas de voluntariado, pero el fin de semana queda vacío, nosotros nos ocupamos.' },
            { label: 'Guardias nocturnas ante la inseguridad', text: 'En pisos pequeños en los que levantarse al baño por la noche va unido al miedo a caer.' },
            { label: 'Acompañamiento a eventos culturales', text: 'Algunos clientes desean seguir yendo al concierto, al teatro, a una exposición: con el acompañamiento de una persona experimentada, sigue siendo posible.' },
          ],
        },
        {
          heading: 'Hospitales',
          list: [
            'Charité Campus Virchow Klinikum (Forckenbeckplatz) — a 5 minutos.',
            'Bundeswehrkrankenhaus Berlin — a 5 minutos.',
            'DRK Kliniken Westend — a 10 minutos.',
          ],
        },
      ],
      faq: [
        { question: 'Mi padre vive solo en el Hansaviertel y no quiere ir a una residencia. ¿Qué es posible?', answer: 'Mucho. Con dos o tres horas de acompañamiento al día, más una guardia nocturna dos o tres días por semana, en pisos pequeños suele lograrse un entorno seguro. En la primera conversación aclaramos qué tiene sentido.' },
        { question: '¿Son los pisos del Hansaviertel adecuados para el cuidado?', answer: 'En su mayoría no: son pequeños, a menudo con puertas estrechas. Aun así, el cuidado en casa es posible aquí en la mayoría de los casos, con frecuencia mediante pequeñas adaptaciones que en parte sufraga el seguro de dependencia (Pflegekasse).' },
        { question: '¿Pueden venir solo una vez por semana?', answer: 'Sí: aceptamos también volúmenes mínimos de dos o tres horas por semana cuando se trata de un acompañamiento a largo plazo.' },
      ],
      cta: { text: 'Solicitar una primera conversación', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Guardias nocturnas en Berlín', href: '/leistungen/nachtwachen-berlin' },
        { label: 'Asesoramiento en materia de cuidados', href: '/leistungen/pflegeberatung-berlin' },
      ],
    },
  },

  // === 5. Charlottenburg =======================================================
  charlottenburg: {
    slug: 'charlottenburg',
    name: 'Charlottenburg',
    bezirk: 'Charlottenburg-Wilmersdorf',
    plz: ['10585', '10587', '10589', '10623', '10625', '10627', '10629'],
    geo: { lat: 52.516, lng: 13.302 },
    hook: 'Clientela exigente de pago privado, entre el Schloss y el Kudamm.',
    metaTitle: 'Cuidado en Charlottenburg — pago privado',
    metaDescription: 'Cuidado y atención individualizada en Charlottenburg. Equipo experimentado, distancias cortas — del Schlosspark al Kurfürstendamm.',
    h1: 'Cuidado a domicilio en Charlottenburg — para clientela exigente de pago privado',
    primaryKeyword: 'cuidado a domicilio Charlottenburg Berlín',
    detail: {
      intro: [
        'Charlottenburg es grande. Del Schlosspark al norte al Kurfürstendamm al sur, del Spree al este al Lietzensee al oeste: decenas de miles de pisos, muchos de ellos antiguos y, en buena parte, de nivel alto a exclusivo. Quien vive aquí y necesita cuidados tiene, por lo general, una idea clara de cómo deben ser esos cuidados.',
        'Llevamos más de quince años trabajando en Charlottenburg. Conocemos a nuestra clientela en torno a la Olivaer Platz, en los pisos junto al Lietzensee, en los edificios entre la Bismarckstraße y la Kantstraße.',
      ],
      sections: [
        {
          heading: 'Lo que define el cuidado en Charlottenburg',
          stronglist: [
            { label: 'Exigente, pero nunca intrusivo', text: 'Nuestra clientela en Charlottenburg es a menudo culta, de formación académica, con un sentido claro del estilo y la discreción. Asignamos personal cuyo trato y lenguaje encajan en estos hogares.' },
            { label: 'Continuidad', text: 'Charlottenburg es clientela fiel. Muchas familias trabajan con nosotros durante años, a veces a lo largo de generaciones. El equipo fijo conoce a la familia, conoce sus preferencias, conoce la casa.' },
            { label: 'Carácter privado', text: 'Llegamos sin distintivos visibles, a menudo en nuestro propio coche, sin dejar rastros llamativos en los portales.' },
          ],
        },
        {
          heading: 'Hospitales en Charlottenburg',
          list: [
            'DRK Kliniken Berlin Westend — uno de nuestros centros de referencia.',
            'Schlosspark-Klinik — clínica privada exclusiva.',
            'Vivantes Klinikum Spandau — a 15 minutos.',
            'St. Gertrauden Krankenhaus — a 8 minutos.',
          ],
        },
        {
          heading: 'Trayecto desde Moabit',
          paragraphs: ['De la Stephanstraße al Schloss Charlottenburg por la Otto-Suhr-Allee, en 10-12 minutos. Hasta el Kurfürstendamm, de 15 a 20 minutos según la hora del día.'],
        },
      ],
      faq: [
        { question: '¿Acuden también a los edificios antiguos sin ascensor?', answer: 'Sí. Nuestro personal está dispuesto a subir 3 o 4 pisos sin ascensor cuando es necesario. Para personas que ya no pueden subir escaleras por sí mismas, valoramos si tienen sentido reformas (por ejemplo, un salvaescaleras).' },
        { question: 'Tenemos una auxiliar de cuidados extranjera. ¿Puede pasar a estar contratada por ustedes?', answer: 'La incorporación es posible si la persona estaba contratada por usted con arreglo a la legislación laboral. En situaciones de zona gris (autónoma, desplazada), una «incorporación» no es posible, pero sí podemos cubrir la laguna asistencial con personal propio.' },
        { question: '¿Pueden trabajar también en los exclusivos complejos de viviendas asistidas del Kurfürstendamm?', answer: 'Sí. Con la mayoría de ellos ya hemos colaborado. No asumimos la atención interna de la casa, pero las horas adicionales de atención individualizada, las guardias nocturnas y el acompañamiento personalizado son nuestro cometido.' },
      ],
      cta: { text: 'Solicitar una primera conversación', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Cuidado a domicilio de pago privado', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Atención las veinticuatro horas', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Wilmersdorf', href: '/standorte/wilmersdorf', note: 'directamente contiguo' },
        { label: 'Westend', href: '/standorte/westend' },
      ],
    },
  },

  // === 6. Wilmersdorf ==========================================================
  wilmersdorf: {
    slug: 'wilmersdorf',
    name: 'Wilmersdorf',
    bezirk: 'Charlottenburg-Wilmersdorf',
    plz: ['10707', '10709', '10711', '10713', '10715', '10717', '10719', '10779', '10789'],
    geo: { lat: 52.487, lng: 13.314 },
    hook: 'Burguesía culta, pisos antiguos, continuidad.',
    metaTitle: 'Cuidado en Wilmersdorf — discreto y exclusivo',
    metaDescription: 'Cuidado de pago privado en Wilmersdorf. Discreto, con un equipo estable — para los pisos antiguos del Olivaer Platz y el Ludwigkirchplatz.',
    h1: 'Cuidado en Wilmersdorf — en el barrio de pisos antiguos y burguesía culta',
    primaryKeyword: 'cuidado a domicilio Wilmersdorf Berlín',
    detail: {
      intro: [
        'Wilmersdorf es un barrio con carácter propio. Los grandes edificios de finales del siglo XIX entre la Olivaer Platz, el Bayerisches Viertel, el Volkspark y el Ludwigkirchplatz han sido durante generaciones el domicilio de la burguesía culta berlinesa: abogados, médicos, catedráticos, historiadores del arte. Sus habitantes envejecen, a menudo hasta edades muy avanzadas. Y suelen querer quedarse en su piso.',
        'Llevamos años familiarizados con el cuidado en Wilmersdorf. Sabemos cómo son estos pisos —techos altos, muebles oscuros, bibliotecas repletas de libros, una pátina que cuenta una historia—. Y sabemos cómo debe ser el cuidado en semejantes pisos: respetuoso, discreto, sin dañar el carácter de la vivienda.',
      ],
      sections: [
        {
          heading: 'Lo que hacemos especialmente bien en Wilmersdorf',
          stronglist: [
            { label: 'Acompañamiento de académicos que viven solos', text: 'A menudo sin hijos, a menudo con hermanos, sobrinos o sobrinas lejos. Quien habita solo un piso de cinco habitaciones en Wilmersdorf suele necesitar algo más que cuidados: necesita también un interlocutor capaz de seguirle el hilo.' },
            { label: 'Atención las veinticuatro horas en pisos amplios', text: 'Donde hay muchas habitaciones, también un equipo de 24/7 puede acomodarse bien sin estorbarse. Un dormitorio para el turno de noche, estancias tranquilas para las pausas.' },
            { label: 'Discreción frente a la comunidad de vecinos', text: 'Las comunidades de estos edificios antiguos suelen ser muy estrechas. Llegamos con discreción, evitamos llamar la atención y protegemos la intimidad.' },
          ],
        },
        {
          heading: 'Hospitales y tiempos de trayecto',
          list: [
            'St. Gertrauden Krankenhaus — a 5 minutos de muchas direcciones de Wilmersdorf.',
            'Schlosspark-Klinik — a 10 minutos.',
            'DRK Kliniken Westend — a 12 minutos.',
          ],
          trailingParagraphs: ['De Moabit al centro de Wilmersdorf por la Berliner Straße, unos 12 minutos. A las zonas del sur de Wilmersdorf (Hohenzollerndamm, Wittelsbacher Straße), unos 18-22 minutos.'],
        },
      ],
      faq: [
        { question: 'Mi padre tiene 92 años y rechaza un servicio de cuidados porque no quiere «gente extraña» en el piso. ¿Qué podemos hacer?', answer: 'Una situación frecuente. Lo abordamos con calma, a menudo con una primera visita en la que no se realiza ningún cuidado, solo una conversación. Nuestro personal tiene experiencia en construir confianza. La resistencia suele disiparse en unas pocas visitas.' },
        { question: '¿Pueden acompañar a un aficionado a la música clásica a un concierto?', answer: 'Sí: en Wilmersdorf es casi una de nuestras especialidades. Acompañamiento a la Berliner Philharmonie, a la Deutsche Oper, a las salas de concierto, con personal familiarizado con la música y su etiqueta.' },
        { question: '¿Cuánto cuesta una atención las veinticuatro horas en un piso antiguo de seis habitaciones?', answer: 'El tamaño del piso no altera el precio: lo decisivo es la cualificación requerida por turno y si la noche se cubre en activo o en disponibilidad. La cifra mensual concreta la recibe en la primera conversación, una vez aclaradas las necesidades.' },
      ],
      cta: { text: 'Solicitar una primera conversación', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Cuidado a domicilio de pago privado', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Atención las veinticuatro horas', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Charlottenburg', href: '/standorte/charlottenburg' },
        { label: 'Schmargendorf', href: '/standorte/schmargendorf' },
      ],
    },
  },

  // === 7. Westend ==============================================================
  westend: {
    slug: 'westend',
    name: 'Westend',
    bezirk: 'Charlottenburg-Wilmersdorf',
    plz: ['14050', '14052', '14053', '14055', '14057', '14059'],
    geo: { lat: 52.515, lng: 13.275 },
    hook: 'Villas, casas amplias, raíces profundas.',
    metaTitle: 'Cuidado en Westend — barrio de villas',
    metaDescription: 'Cuidado en el Westend, entre el Olympiastadion y el Lietzensee. Discreto y de alto nivel — para las villas y las grandes viviendas.',
    h1: 'Cuidado en el Westend — en las serenas calles de villas',
    primaryKeyword: 'cuidado a domicilio Westend Berlín',
    detail: {
      intro: [
        'El Westend es un Berlín propio. Calles serenas, villas antiguas, jardines, accesos de grava, comunidades asentadas a lo largo de décadas. Aquí viven familias desde hace generaciones —o nuevos compradores que quieren sumarse a esa tradición—. Quien envejece aquí, por regla general, quiere quedarse. Quien llega a necesitar cuidados busca soluciones a la altura de la dignidad de la casa.',
        'Estamos por aquí a menudo. Conocemos la Reichsstraße y la Akazienallee, la Lindenallee y las bocacalles del Spandauer Damm.',
      ],
      sections: [
        {
          heading: 'El cuidado en las casas del Westend',
          stronglist: [
            { label: 'Grandes propiedades', text: 'Una atención las veinticuatro horas en una villa de 200 m² transcurre de otro modo que en un piso de 60 m². Varias plantas, largas distancias, a menudo también grandes jardines: todo eso debe tenerse en cuenta en el cuidado.' },
            { label: 'Biografías de gran contenido', text: 'Quien envejece en una casa del Westend suele tener una larga vida a sus espaldas, guardada en muebles, cuadros, libros. Nuestro personal está habituado al trato con semejantes biografías.' },
            { label: 'Personal doméstico y cuidadores juntos', text: 'Muchas familias del Westend emplean desde hace décadas a asistentas y jardineros. Cuando nos incorporamos, hemos de integrarnos en esas estructuras.' },
            { label: 'Un morir con dignidad', text: 'Quien ha envejecido en una casa del Westend suele querer también morir allí. Acompañamos procesos de final de vida en estas casas, con todo lo que hace falta, desde el cuidado paliativo hasta el último día.' },
          ],
        },
        {
          heading: 'Hospitales y tiempos de trayecto',
          list: [
            'DRK Kliniken Berlin Westend — a 5 minutos de muchas direcciones del Westend.',
            'Schlosspark-Klinik (Charlottenburg) — a 10 minutos.',
            'Vivantes Klinikum Spandau — a 12 minutos.',
          ],
          trailingParagraphs: ['Por Charlottenburg hasta el Westend, unos 18-22 minutos según la hora del día. Planificamos el trayecto con antelación para llegar puntuales.'],
        },
      ],
      faq: [
        { question: 'Tenemos una casa muy grande. ¿Necesitamos más personal?', answer: 'No necesariamente. Una persona por turno atiende también una casa grande, siempre que la persona que necesita cuidados esté ubicada en un lugar abarcable. Con personas muy móviles (demencia, riesgo de deambulación) puede tener sentido trabajar con dos personas.' },
        { question: '¿Pueden hacer el cuidado en la terraza o en el jardín?', answer: 'En verano, con mucho gusto. Nuestro personal es flexible.' },
        { question: '¿Con qué discreción se presenta su personal?', answer: 'En su propio coche (sin distintivo del servicio de cuidados), con ropa discreta, a las horas acordadas. Con clientes especialmente sensibles acordamos de antemano los accesos y el aparcamiento.' },
      ],
      cta: { text: 'Solicitar una primera conversación', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Atención las veinticuatro horas', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Cuidado a domicilio de pago privado', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Charlottenburg', href: '/standorte/charlottenburg', note: 'el barrio contiguo' },
      ],
    },
  },

  // === 8. Grunewald ============================================================
  grunewald: {
    slug: 'grunewald',
    name: 'Grunewald',
    bezirk: 'Charlottenburg-Wilmersdorf',
    plz: ['14193', '14195'],
    geo: { lat: 52.485, lng: 13.262 },
    hook: 'La máxima discreción, para clientela expuesta.',
    metaTitle: 'Cuidado en Grunewald — máxima discreción',
    metaDescription: 'Servicio de cuidados privado en Grunewald. Máxima discreción, equipo reducido y estable, experiencia con clientela expuesta.',
    h1: 'Cuidado a domicilio en Grunewald — con la máxima discreción',
    primaryKeyword: 'cuidado a domicilio Grunewald Berlín',
    detail: {
      intro: [
        'En Grunewald viven personas que no quieren aparecer en el periódico. Vecinos cuyo nombre se conoce —o deliberadamente no—. Casas ocultas tras muros, setos e instalaciones de seguridad. Y bajo todo ello: necesidades de cuidado tan humanas como en cualquier otro lugar, pero con exigencias particulares de discreción.',
        'Quien busca cuidados en Grunewald no busca al proveedor más cercano. Busca un equipo que comprenda lo que la confidencialidad significa de verdad. Trabajamos desde hace años con clientela de ámbitos expuestos: la economía, la política, la ciencia, el arte.',
      ],
      sections: [
        {
          heading: 'Lo que distingue el cuidado en Grunewald de otros barrios',
          stronglist: [
            { label: 'El secreto profesional es la base del trabajo', text: 'Trabajamos con acuerdos de confidencialidad ampliados que nuestro personal firma. No comunicamos la identidad de un cliente ni siquiera dentro del propio equipo, a colegas que no tengan por qué conocerla.' },
            { label: 'Presencia sin dejar huella', text: 'Llegamos en nuestro propio coche y aparcamos según las indicaciones del cliente (a menudo cerca, no justo delante de la casa). Salimos sin que los vecinos sepan que se está atendiendo a alguien.' },
            { label: 'Equipo reducido y estable', text: 'Con clientes de alta exigencia de confidencialidad trabajamos con 3 o 4 profesionales fijos seleccionados: nada de personal rotatorio, nada de personas en prácticas.' },
            { label: 'Experiencia con personal de seguridad', text: 'En algunas casas hay servicios de seguridad, conserjes, vigilantes. Nuestro personal sabe cómo anunciarse y cómo comportarse.' },
            { label: 'Disposición a acuerdos por escrito', text: 'Acuerdos de confidencialidad (cláusulas NDA), regulaciones detalladas de protección de datos: en Grunewald todo esto es más habitual que en otros lugares.' },
          ],
        },
        {
          heading: 'Hospitales y tiempos de trayecto',
          list: [
            'DRK Kliniken Berlin Westend — a 10 minutos.',
            'Schlosspark-Klinik — a 12 minutos (utilizada con frecuencia para ingresos desde Grunewald).',
            'Sankt Gertrauden — a 15 minutos.',
          ],
          trailingParagraphs: ['De nuestra sede en Moabit a Grunewald, unos 22-30 minutos según el tráfico y el destino.'],
        },
      ],
      faq: [
        { question: '¿Pueden garantizar una confidencialidad absoluta?', answer: 'El deber de secreto profesional en el ámbito de los cuidados está fijado por ley: toda infracción es punible. Con clientes especialmente sensibles complementamos ese deber con acuerdos de confidencialidad por escrito con penalizaciones contractuales. Aun así: nadie puede dar una garantía del 100 %, porque las personas son personas. Hacemos todo lo que se puede hacer.' },
        { question: '¿Puede su personal presentar verificaciones de antecedentes?', answer: 'Todo el personal ha presentado un certificado de antecedentes penales ampliado (con una antigüedad máxima de 3 meses). Ante exigencias particulares, el personal se somete a verificaciones de antecedentes adicionales.' },
        { question: '¿Aceptan también la firma de contratos a través de abogados?', answer: 'Sí: muchos clientes de Grunewald tramitan el contrato a través de su bufete. Para nosotros no supone ningún problema.' },
        { question: '¿Podemos organizar también el pago a través de cuentas fiduciarias?', answer: 'Aceptamos los medios de pago habituales (transferencia bancaria y, en su caso, domiciliación SEPA). Ante construcciones de pago complejas, acordamos las condiciones de forma individual.' },
      ],
      cta: { text: 'Solicitar una primera conversación', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Cuidado a domicilio de pago privado', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Atención las veinticuatro horas', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Westend', href: '/standorte/westend' },
        { label: 'Schmargendorf', href: '/standorte/schmargendorf', note: 'directamente contiguo' },
        { label: 'Wannsee', href: '/standorte/wannsee', note: 'colindante' },
      ],
    },
  },

  // === 9. Zehlendorf ===========================================================
  zehlendorf: {
    slug: 'zehlendorf',
    name: 'Zehlendorf',
    bezirk: 'Steglitz-Zehlendorf',
    plz: ['14163', '14165', '14167', '14169'],
    geo: { lat: 52.432, lng: 13.255 },
    hook: 'Zona familiar y tranquila, casas, jardines.',
    metaTitle: 'Cuidado en Zehlendorf — cuidado familiar',
    metaDescription: 'Cuidado a domicilio y acompañamiento (Sitzwache) en Zehlendorf. Un equipo que conoce las calles tranquilas del Mexikoplatz a Krumme Lanke.',
    h1: 'Cuidado a domicilio en Zehlendorf — cuidado familiar en un entorno verde',
    primaryKeyword: 'cuidado a domicilio Zehlendorf Berlín',
    detail: {
      intro: [
        'Zehlendorf es el Berlín de las familias. Casas unifamiliares, adosados, grandes jardines, calles tranquilas, colegios, árboles. Aquí viven familias en las que las generaciones conviven estrechamente: los abuelos en una vivienda dentro de la casa de la hija, la hija y el yerno con los nietos en la parte principal. O los abuelos solos en la gran casa familiar, después de que los hijos se han ido.',
        'Conocemos Zehlendorf. Nos movemos desde la Mexikoplatz, la Krumme Lanke, la Onkel-Tom-Straße, del Schlachtensee a la Argentinische Allee.',
      ],
      sections: [
        {
          heading: 'Quién acude a nosotros en Zehlendorf',
          stronglist: [
            { label: 'Casas multigeneracionales', text: 'Los abuelos viven en una parte propia de la casa familiar. La familia ayuda cuanto puede, pero en algún momento deja de bastar. Complementamos sin perturbar el carácter familiar de la casa.' },
            { label: 'Viudas y viudos que se han quedado solos', text: 'En la gran casa familiar, con los hijos ya fuera —la hija en Múnich, el hijo en Fráncfort—. ¿Quién pasa a verlos? Nosotros.' },
            { label: 'Hijos que han acogido a sus propios padres', text: 'Una necesidad de cuidado repentina, a menudo con demencia, sin una red social local para quien acaba de mudarse. Ayudamos a construirla.' },
            { label: 'Familias académicas', text: 'Personal de la cercana FU, empleados de fundaciones, investigadores de los centros de investigación de Berlín.' },
          ],
        },
        {
          heading: 'Lo que distingue el cuidado en Zehlendorf',
          stronglist: [
            { label: 'Aceptar los trayectos largos', text: 'De Moabit a Zehlendorf hay 25-35 minutos. Lo aceptamos, porque la continuidad importa más a nuestra clientela que ahorrar en recargos por desplazamiento.' },
            { label: 'Compatibilidad con el coche', text: 'Muchas direcciones de Zehlendorf solo son bien accesibles en coche. Nuestro personal tiene carné y coche.' },
            { label: 'Compañía en el jardín', text: 'Muchos clientes de Zehlendorf pasan su tiempo en el jardín. Acompañarlos allí forma parte del trabajo: desde el paseo por la terraza hasta cuidar el jardín juntos, mientras las fuerzas lo permitan.' },
          ],
        },
        {
          heading: 'Hospitales del distrito',
          list: [
            'Helios-Klinikum Emil von Behring (sur de Zehlendorf) — local y apreciado.',
            'Vivantes Klinikum Steglitz — a 10 minutos.',
            'Charité Campus Benjamin Franklin — a 15 minutos.',
          ],
        },
      ],
      faq: [
        { question: 'Vivimos en la Onkel-Tom-Straße. ¿Acuden también a los pequeños adosados?', answer: 'Por supuesto. El tamaño de la vivienda no supone diferencia alguna para nosotros.' },
        { question: '¿Puede su personal ayudar también en el jardín?', answer: 'La jardinería propiamente dicha no es nuestro cometido: para eso existen servicios de jardinería. Pero acompañar al cliente al jardín, ayudarle a sentarse en la tumbona, contemplar juntos las rosas: todo eso forma parte de nuestro trabajo.' },
        { question: 'Queremos traer a nuestra madre, que vive en Baviera, a nuestra casa de Zehlendorf. ¿Cómo lo organizamos?', answer: 'Le ayudamos. Acompañamiento en el viaje desde Baviera, atención posterior en Zehlendorf, montaje de la estructura de cuidados. Lo ideal es una primera conversación 4-6 semanas antes de la mudanza prevista.' },
      ],
      cta: { text: 'Solicitar una primera conversación', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Cuidado a domicilio de pago privado', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Dahlem', href: '/standorte/dahlem' },
        { label: 'Atención las veinticuatro horas', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Nikolassee', href: '/standorte/nikolassee', note: 'colindante' },
        { label: 'Wannsee', href: '/standorte/wannsee', note: 'colindante' },
      ],
    },
  },

  // === 10. Dahlem ==============================================================
  dahlem: {
    slug: 'dahlem',
    name: 'Dahlem',
    bezirk: 'Steglitz-Zehlendorf',
    plz: ['14195'],
    geo: { lat: 52.456, lng: 13.288 },
    hook: 'De impronta académica, entorno universitario.',
    metaTitle: 'Cuidado en Dahlem — discreto, ambiente académico',
    metaDescription: 'Servicio de cuidados privado en Dahlem. Para académicos, personal universitario y barrios acomodados. Discreto y competente.',
    h1: 'Cuidado a domicilio en Dahlem — en el barrio académico',
    primaryKeyword: 'cuidado a domicilio Dahlem Berlín',
    detail: {
      intro: [
        'Dahlem es el Berlín académico. La Freie Universität, el Botanischer Garten, el Instituto Max Planck de Desarrollo Humano, el Instituto Max Planck de Historia de la Ciencia, la John-F.-Kennedy-Schule. Quien vive en Dahlem pertenece a menudo a una de estas instituciones o tiene relación con ella. La zona es tranquila, arbolada, notablemente cuidada —y envejece—.',
        'Muchos de los catedráticos que se instalaron en Dahlem en los años sesenta, setenta y ochenta están hoy en una edad en la que los cuidados entran en escena. Acudimos a ellos.',
      ],
      sections: [
        {
          heading: 'Quién acude a nosotros en Dahlem',
          list: [
            'Catedráticos eméritos de la FU que han envejecido en los pisos cercanos al campus.',
            'Familiares vinculados a los institutos Max Planck, a menudo con formación académica propia.',
            'Familiares de diplomáticos del cercano barrio consular.',
            'Familias cuyos padres se han mudado con ellos a Dahlem desde otras ciudades universitarias.',
          ],
        },
        {
          heading: 'Lo que define el cuidado en Dahlem',
          stronglist: [
            { label: 'Exigencia intelectual', text: 'Los académicos suelen querer, también en la edad del cuidado, hablar con personas capaces de seguirles. Nuestro personal lee, debate, está al tanto de la actualidad: esto no es «cuidado estándar», sino un encuentro en la misma longitud de onda.' },
            { label: 'Pisos-biblioteca', text: 'Los pisos de Dahlem están a menudo llenos de libros. Aquí se lee en voz alta, se conversa sobre libros, se aprecia el saber como forma de vida. Nuestro equipo sabe manejarse con ello.' },
            { label: 'Clientela internacional', text: 'Muchas familias de Dahlem tienen orígenes internacionales: estadounidense, británico, francés, neerlandés. Cuando hace falta, asignamos cuidadores de habla inglesa o con otras competencias lingüísticas pertinentes.' },
            { label: 'Discreción frente a la comunidad universitaria', text: 'Quien en Dahlem habla de más sobre la vida privada de una colega acaba oyéndolo de ella misma. Nuestro equipo lo entiende.' },
          ],
        },
        {
          heading: 'Hospitales y tiempos de trayecto',
          list: [
            'Charité Campus Benjamin Franklin (Steglitz) — a 12 minutos.',
            'Helios-Klinikum Emil von Behring — a 15 minutos.',
            'Schlosspark-Klinik — a 20 minutos.',
          ],
          trailingParagraphs: ['Unos 25-30 minutos de Moabit a muchas direcciones de Dahlem.'],
        },
      ],
      faq: [
        { question: '¿Puede su personal hablar inglés?', answer: 'En el equipo hay varias personas con inglés a nivel profesional. Ante requisitos específicos, lo aclaramos antes de iniciar el contrato.' },
        { question: 'Mi padre sigue leyendo mucho. ¿Pueden asignar personal que sepa manejarse con los libros?', answer: 'Por supuesto. Tenemos en cuenta el trasfondo biográfico e intelectual a la hora de seleccionar al personal.' },
        { question: '¿Cuál es su experiencia con la demencia en un entorno académico?', answer: 'La demencia es demencia: no hace distinción por la formación académica. Lo que sí se diferencia es el modo de afrontarla: los académicos luchan a menudo más tiempo contra la enfermedad y se sienten especialmente heridos por las dificultades para encontrar las palabras. Lo tratamos con sensibilidad.' },
      ],
      cta: { text: 'Solicitar una primera conversación', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Cuidado a domicilio de pago privado', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Zehlendorf', href: '/standorte/zehlendorf', note: 'directamente contiguo' },
        { label: 'Grunewald', href: '/standorte/grunewald', note: 'colindante' },
        { label: 'Acompañamiento en demencia', href: '/themen/demenz-begleitung' },
        { label: 'Kleinmachnow', href: '/standorte/kleinmachnow', note: 'junto al límite urbano' },
      ],
    },
  },

  // === 11. Schmargendorf =======================================================
  schmargendorf: {
    slug: 'schmargendorf',
    name: 'Schmargendorf',
    bezirk: 'Charlottenburg-Wilmersdorf',
    plz: ['14193', '14199'],
    geo: { lat: 52.476, lng: 13.29 },
    hook: 'Barrio acomodado entre Wilmersdorf y Grunewald.',
    metaTitle: 'Cuidado en Schmargendorf — arraigado en el barrio',
    metaDescription: 'Cuidado en Schmargendorf, el barrio entre Wilmersdorf y Grunewald. Discreto, con conocimiento de las estructuras locales.',
    h1: 'Cuidado a domicilio en Schmargendorf — en un tranquilo barrio residencial',
    primaryKeyword: 'cuidado a domicilio Schmargendorf Berlín',
    detail: {
      intro: [
        'Schmargendorf se sitúa entre Wilmersdorf y Grunewald —geográfica y socialmente—. No es tan prominente como Grunewald, pero sí acomodado. Los pisos suelen ser antiguos, unos de finales del siglo XIX, otros de los años veinte. Aquí viven familias berlinesas de larga trayectoria, a menudo desde hace dos o tres generaciones en los mismos edificios.',
        'Atendemos desde hace años a clientela en Schmargendorf: el barrio es una de nuestras zonas habituales.',
      ],
      sections: [
        {
          heading: 'Lo que es típico de Schmargendorf',
          stronglist: [
            { label: 'Raíces familiares', text: 'Muchos pisos están en manos de la misma familia desde hace generaciones. En el cuidado se trata a menudo también de preservar un modo de vivir familiar.' },
            { label: 'Vecindario menos expuesto que Grunewald', text: 'A diferencia de Grunewald, aquí viven a menudo autónomos, empresarios de tamaño medio, altos empleados: no en la esfera pública, pero con medios cómodos e ideas claras.' },
            { label: 'Pisos de tamaño medio', text: 'Lo típico son pisos de tres o cuatro habitaciones, no las grandes propiedades familiares del Westend o de Grunewald.' },
          ],
        },
        {
          heading: 'Lo que hace que el cuidado funcione en Schmargendorf',
          stronglist: [
            { label: 'Fiabilidad sin ostentación', text: 'Nuestra clientela de aquí no quiere ninguna puesta en escena ni tratos especiales: quiere cuidados fiables y buenos, de personas que respeten su historia.' },
            { label: 'Por horas en lugar de todo incluido', text: 'En comparación con Grunewald, la atención las veinticuatro horas es menos frecuente en Schmargendorf. Más habituales son el acompañamiento de día, las guardias nocturnas y las visitas puntuales por horas.' },
            { label: 'Asesoramiento en materia de cuidados con sentido de la medida', text: 'Las familias suelen querer saber cómo sacar el máximo partido al grado de dependencia (Pflegegrad), qué puede aportar el cuidado de sustitución (Verhinderungspflege) y cómo planificar los años venideros.' },
          ],
        },
        {
          heading: 'Hospitales y tiempos de trayecto',
          list: [
            'DRK Kliniken Berlin Westend — a 10 minutos.',
            'Sankt Gertrauden (Wilmersdorf) — a 8 minutos.',
            'Schlosspark-Klinik — a 12 minutos.',
          ],
          trailingParagraphs: ['De Moabit a Schmargendorf, unos 22-28 minutos.'],
        },
      ],
      faq: [
        { question: '¿Pueden venir solo tres o cuatro horas por la tarde?', answer: 'Sí: de hecho, ese es a menudo el modelo que se desea aquí. Un acompañamiento vespertino de 14:00 a 18:00 para un paseo, un café y conversación es lo habitual.' },
        { question: '¿Cuánto cuesta una guardia nocturna?', answer: 'La tarifa por hora depende de la cualificación y de si la noche se cubre en activo (despierto de forma continua) o en disponibilidad. Los recargos nocturnos y dominicales según el § 3b de la Ley del Impuesto sobre la Renta (EStG) están incluidos. La cifra concreta para el turno previsto la recibe en la primera conversación.' },
        { question: 'Para el cuidado de nuestro padre queremos a alguien que se quede de forma permanente y no cambie a menudo. ¿Es posible?', answer: 'Ese es precisamente nuestro modelo. Trabajamos con equipos pequeños y estables (2-4 personas) que se turnan. El cliente no tiene cada día una cara nueva delante.' },
      ],
      cta: { text: 'Solicitar una primera conversación', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Cuidado a domicilio de pago privado', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Wilmersdorf', href: '/standorte/wilmersdorf', note: 'directamente contiguo' },
        { label: 'Grunewald', href: '/standorte/grunewald', note: 'directamente contiguo' },
        { label: 'Guardias nocturnas en Berlín', href: '/leistungen/nachtwachen-berlin' },
      ],
    },
  },

  // === 12. Nikolassee ==========================================================
  nikolassee: {
    slug: 'nikolassee',
    name: 'Nikolassee',
    bezirk: 'Steglitz-Zehlendorf',
    plz: ['14109', '14129', '14163'],
    geo: { lat: 52.434, lng: 13.201 },
    hook: 'La colonia de villas junto al lago.',
    hideInFooter: true,
    metaTitle: 'Cuidado en Nikolassee — discreto, junto al lago',
    metaDescription: 'Cuidado privado en Nikolassee: atención, acompañamiento (Sitzwache) y 24 horas para la colonia de villas junto al Schlachtensee.',
    h1: 'Cuidado a domicilio en Nikolassee — junto al lago, en la colonia de villas',
    primaryKeyword: 'cuidado a domicilio Nikolassee Berlín',
    detail: {
      intro: [
        'Nikolassee se trazó a partir de 1901 como colonia de villas al borde del Grunewald —entre el Schlachtensee y el Nikolassee, con grandes parcelas, arbolado añejo y una calma poco frecuente en Berlín—. Quien posee aquí una casa la compró, por lo general, hace décadas o la heredó de sus padres. La colonia ha envejecido junto con sus habitantes.',
        'De ahí surge precisamente la necesidad de cuidados: propietarios que no quieren abandonar su casa junto al lago, y tampoco tienen por qué. Acudimos a ellos —al lugar donde han pasado su vida, en vez de trasladarlos a una institución—.',
      ],
      sections: [
        {
          heading: 'Quién acude a nosotros en Nikolassee',
          list: [
            'Propietarios mayores que viven desde hace décadas en la colonia de villas y desean quedarse.',
            'Matrimonios en los que uno de los cónyuges llega a necesitar cuidados y el otro precisa alivio.',
            'Hijos adultos que no viven en Berlín y buscan una atención fiable para sus padres junto al lago.',
            'Personas en fases iniciales de demencia, para quienes el entorno familiar junto al agua es un ancla.',
          ],
        },
        {
          heading: 'Lo que define el cuidado en Nikolassee',
          stronglist: [
            { label: 'Una casa, no un piso', text: 'Aquí el cuidado transcurre por lo general en una casa unifamiliar de varias plantas. Escaleras, jardín, el camino hasta el lago: ajustamos la atención a la vivienda real, no a un piso estándar.' },
            { label: 'El vínculo con los lagos', text: 'El paseo diario al Schlachtensee o al Nikolassee forma parte de la vida de muchos. Acompañamos esos paseos mientras es posible: el movimiento en lugares familiares mantiene a la persona estable más tiempo que cualquier programa.' },
            { label: 'Discreción en la colonia', text: 'En una colonia de villas abarcable, todos se conocen. Nuestro equipo actúa con discreción, sin coche corporativo a la vista, y respeta que aquí el vecindario significa también exposición pública.' },
          ],
        },
        {
          heading: 'Hospitales y tiempos de trayecto',
          list: [
            'Helios Klinikum Emil von Behring (Zehlendorf) — unos 4 km.',
            'Krankenhaus Waldfriede — unos 3 km.',
            'Immanuel Krankenhaus Wannsee — 3-4 km.',
          ],
          trailingParagraphs: ['Desde nuestra sede en Moabit son, según el tráfico, unos 20-30 minutos por la AVUS y la A115.'],
        },
      ],
      faq: [
        { question: '¿Pueden acompañar a mi padre en su paseo diario al Schlachtensee?', answer: 'Sí. Los paseos acompañados están entre nuestros servicios más frecuentes aquí. Ajustamos el ritmo y el recorrido a la forma del día y estamos a su lado también ante la inseguridad o el riesgo de caída.' },
        { question: 'La casa tiene varias plantas: ¿es un problema para el cuidado?', answer: 'No, pero lo examinamos en la primera visita. Asesoramos también sobre cómo trasladar la vida diaria a una sola planta o qué ayudas técnicas hacen las escaleras más seguras.' },
        { question: '¿Con qué rapidez llegan desde Moabit en caso de urgencia?', answer: 'Para servicios urgentes espontáneos, el tiempo de trayecto honesto que hay que contar es de 20-30 minutos. Por eso aquí trabajamos con servicios fijos, planificados de antemano, en lugar de una reacción al minuto: así siempre hay alguien presente cuando cuenta.' },
      ],
      cta: { text: 'Solicitar una primera conversación', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Wannsee', href: '/standorte/wannsee', note: 'colindante' },
        { label: 'Grunewald', href: '/standorte/grunewald' },
        { label: 'Zehlendorf', href: '/standorte/zehlendorf' },
        { label: 'Atención las veinticuatro horas', href: '/leistungen/24-stunden-betreuung' },
      ],
    },
  },

  // === 13. Wannsee =============================================================
  wannsee: {
    slug: 'wannsee',
    name: 'Wannsee',
    bezirk: 'Steglitz-Zehlendorf',
    plz: ['14109'],
    geo: { lat: 52.421, lng: 13.163 },
    hook: 'Junto al agua, en calma.',
    hideInFooter: true,
    metaTitle: 'Cuidado en Wannsee — junto al agua, discreto',
    metaDescription: 'Cuidado privado en Wannsee: atención, acompañamiento (Sitzwache) y 24 horas en las villas y fincas junto al Großer Wannsee.',
    h1: 'Cuidado a domicilio en Wannsee — quedarse en casa junto al agua',
    primaryKeyword: 'cuidado a domicilio Wannsee Berlín',
    detail: {
      intro: [
        'Wannsee es agua, bosque y amplitud. Entre el Großer Wannsee y el Havel se extienden villas generosas, parcelas junto al agua y calles tranquilas en el extremo suroccidental de Berlín. Quien vive aquí ha elegido, por lo general, la reclusión de forma deliberada, y no quiere renunciar a ella tampoco en la vejez.',
        'Para el cuidado, eso significa acudir allí donde el transporte público se vuelve escaso y las distancias se alargan. Vecinos mayores y asentados en las fincas junto al agua son nuestra clientela típica aquí: personas que desean quedarse en su casa junto al lago mientras sea posible.',
      ],
      sections: [
        {
          heading: 'Quién acude a nosotros en Wannsee',
          list: [
            'Propietarios mayores de villas en las fincas junto al agua y el bosque que desean ser atendidos en casa.',
            'Matrimonios en los que el cuidado prestado por uno de los cónyuges llega a su límite.',
            'Familiares que organizan las cosas a distancia y necesitan una atención fija sobre el terreno.',
            'Personas con necesidades de cuidado elevadas, para quienes la atención las veinticuatro horas en casa es la alternativa a una residencia.',
          ],
        },
        {
          heading: 'Lo que define el cuidado en Wannsee',
          stronglist: [
            { label: 'Ubicaciones apartadas', text: 'Las fincas junto al agua se sitúan a menudo al final de largos accesos, y algún camino baja por el jardín hasta la orilla. Nuestro equipo cuenta con esas distancias y trae consigo lo que hace falta para la jornada.' },
            { label: 'Un hospital en el vecindario', text: 'Con el Immanuel Krankenhaus hay un centro dentro del propio Ortsteil. Para las transiciones entre clínica y hogar —por ejemplo, tras una rehabilitación o una operación— es una ventaja real que aprovechamos para la atención.' },
            { label: 'Modelos de las veinticuatro horas', text: 'Por la ubicación y las necesidades de cuidado a menudo más elevadas, la atención continua es aquí más frecuente que en otros lugares. Trabajamos con equipos fijos y reducidos para que también de noche haya alguien de confianza.' },
          ],
        },
        {
          heading: 'Hospitales y tiempos de trayecto',
          list: [
            'Immanuel Krankenhaus Wannsee (Königstr. 63) — en el propio Ortsteil.',
            'Helios Klinikum Emil von Behring — unos 6 km.',
            'Klinikum Ernst von Bergmann Potsdam — unos 8 km.',
          ],
          trailingParagraphs: ['De Moabit a Wannsee hay que contar, según el tráfico, unos 25-35 minutos por la A115 y la AVUS.'],
        },
      ],
      faq: [
        { question: 'Nuestra casa está justo al borde del agua, con un largo acceso: ¿acuden igualmente?', answer: 'Sí. Atendemos con regularidad direcciones en ubicaciones apartadas junto al agua. Lo único que necesitamos es conocer de antemano el acceso y la situación de aparcamiento, para que cada servicio empiece sin contratiempos.' },
        { question: 'Mi marido vuelve pronto del Immanuel Krankenhaus. ¿Pueden asumir su atención?', answer: 'Con mucho gusto. Como el Immanuel está en el propio Ortsteil, la transición de la clínica a casa se coordina bien. Organizamos la atención en el hogar de modo que enlace sin fisuras con el alta.' },
        { question: '¿Les compensa siquiera el trayecto desde Moabit?', answer: 'Sí: atendemos Wannsee de forma deliberada. Con un tiempo de trayecto de 25-35 minutos, planificamos los servicios con antelación y en bloques razonables; las visitas breves de 20 minutos son aquí menos prácticas que los servicios largos y fiables.' },
      ],
      cta: { text: 'Solicitar una primera conversación', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Nikolassee', href: '/standorte/nikolassee', note: 'colindante' },
        { label: 'Zehlendorf', href: '/standorte/zehlendorf' },
        { label: 'Kleinmachnow', href: '/standorte/kleinmachnow', note: 'al otro lado del límite urbano' },
        { label: 'Atención las veinticuatro horas', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Potsdam', href: '/standorte/potsdam', note: 'al otro lado del Havel' },
      ],
    },
  },

  // === 14. Frohnau =============================================================
  frohnau: {
    slug: 'frohnau',
    name: 'Frohnau',
    bezirk: 'Reinickendorf',
    plz: ['13465'],
    geo: { lat: 52.640, lng: 13.291 },
    hook: 'La ciudad-jardín del norte.',
    hideInFooter: true,
    metaTitle: 'Cuidado en Frohnau — ciudad-jardín del norte',
    metaDescription: 'Cuidado privado en Frohnau: atención, acompañamiento (Sitzwache) y 24 horas en la ciudad-jardín del norte de Berlín. Fiable pese a la distancia.',
    h1: 'Cuidado a domicilio en Frohnau — en la ciudad-jardín del norte',
    primaryKeyword: 'cuidado a domicilio Frohnau Berlín',
    detail: {
      intro: [
        'Frohnau es el Ortsteil más septentrional de Berlín —planificado en 1910 sobre plano como ciudad-jardín, con amplias calles de casas unifamiliares, mucho verde y una calma acusada—. Las casas están a menudo en manos de la misma familia desde hace generaciones, y sus propietarios están jubilados. Quien envejece aquí, por regla general, ya no quiere abandonar la ciudad-jardín.',
        'Honestamente: Frohnau se sitúa en el extremo de nuestra zona de actuación. Desde nuestra sede en Moabit son unos 25-35 minutos por la A111. Por eso planificamos aquí de forma deliberada servicios fijos y más largos, en lugar de visitas breves: así la atención es fiable y el tiempo de trayecto no pesa en cada servicio.',
      ],
      sections: [
        {
          heading: 'Quién acude a nosotros en Frohnau',
          list: [
            'Propietarios mayores en las calles de casas unifamiliares que desean quedarse en casa.',
            'Matrimonios jubilados en los que uno de los cónyuges llega a necesitar cuidados.',
            'Hijos adultos que viven más lejos y organizan una atención fiable para sus padres en el norte.',
            'Personas con demencia, para quienes la ciudad-jardín, familiar y tranquila, es un apoyo importante.',
          ],
        },
        {
          heading: 'Lo que define el cuidado en Frohnau',
          stronglist: [
            { label: 'Casa y jardín', text: 'Aquí el cuidado transcurre casi siempre en la propia casa con jardín. Caminos, escaleras y exterior forman parte del día a día: orientamos la atención a la vivienda real.' },
            { label: 'Previsibilidad en lugar de intervención espontánea', text: 'Por la ubicación en el extremo norte, trabajamos con planes de servicio fijos y equipos reducidos. Eso da calma al desarrollo y asegura que siempre haya alguien de confianza sobre el terreno.' },
            { label: 'Un hogar autónomo', text: 'La clientela de Frohnau suele estar formada por personas independientes con ideas claras. Apoyamos sin tutelar y mantenemos las rutinas de siempre el mayor tiempo posible.' },
          ],
        },
        {
          heading: 'Hospitales y tiempos de trayecto',
          list: [
            'Vivantes Humboldt-Klinikum (Am Nordgraben, Reinickendorf) — 5-6 km.',
          ],
          trailingParagraphs: ['De Moabit a Frohnau son, según el tráfico, unos 25-35 minutos por la A111. Frohnau queda para nosotros en el extremo norte: para el trayecto más largo puede aplicarse, según el volumen, un recargo por desplazamiento que tratamos de antemano con toda transparencia.'],
        },
      ],
      faq: [
        { question: 'Frohnau queda muy al norte: ¿nos atienden igualmente?', answer: 'Sí. Acudimos a Frohnau de forma deliberada, pero planificando servicios fijos y más largos. Así la atención sigue siendo fiable y económicamente razonable, aunque el trayecto desde Moabit dure alrededor de media hora.' },
        { question: '¿Se aplica un recargo por la distancia?', answer: 'Según el volumen del servicio, puede aplicarse un recargo por desplazamiento por el trayecto más largo. Se lo decimos abiertamente en la primera conversación, antes de que exista ningún contrato: con nosotros no hay costes ocultos.' },
        { question: '¿Pueden prestar también una atención continua en la casa?', answer: 'Sí. Precisamente en zonas periféricas, los servicios largos o continuos son a menudo la solución más práctica. Trabajamos con equipos pequeños y estables para que, incluso en una atención las veinticuatro horas, no haya constantemente caras nuevas en la casa.' },
      ],
      cta: { text: 'Solicitar una primera conversación', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Moabit', href: '/standorte/moabit', note: 'nuestra sede' },
        { label: 'Atención las veinticuatro horas', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Acompañamiento en demencia', href: '/themen/demenz-begleitung' },
      ],
    },
  },

  // === 15. Kleinmachnow ========================================================
  kleinmachnow: {
    slug: 'kleinmachnow',
    name: 'Kleinmachnow',
    bezirk: 'Potsdam-Mittelmark (Brandenburg)',
    plz: ['14532'],
    geo: { lat: 52.408, lng: 13.225 },
    hook: 'Justo en el límite urbano.',
    hideInFooter: true,
    metaTitle: 'Cuidado en Kleinmachnow — junto a Berlín',
    metaDescription: 'Cuidado privado en Kleinmachnow: atención, acompañamiento (Sitzwache) y 24 horas en el municipio junto a Berlín. Cruzamos el límite urbano.',
    h1: 'Cuidado a domicilio en Kleinmachnow — junto al límite, en Brandeburgo',
    primaryKeyword: 'cuidado a domicilio Kleinmachnow',
    detail: {
      intro: [
        'Kleinmachnow está en Brandeburgo, en el distrito de Potsdam-Mittelmark, pero limita directamente con Berlin-Zehlendorf. El municipio, de unos 20.000 habitantes, creció con fuerza tras 1990: muchas villas, casas unifamiliares y familias acomodadas que valoran la cercanía a Berlín con más verde y más calma. Una parte de esos recién llegados está ya en edad de jubilación; otra parte ha vivido aquí desde siempre.',
        'Para nosotros, Kleinmachnow es un servicio más allá del límite urbano. Como el municipio enlaza directamente con Zehlendorf, es bien accesible desde nuestras zonas del suroeste: la frontera entre Berlín y Brandeburgo es aquí más una línea en el mapa que una distancia real.',
      ],
      sections: [
        {
          heading: 'Quién acude a nosotros en Kleinmachnow',
          list: [
            'Propietarios mayores de las numerosas villas y casas unifamiliares que desean ser atendidos en casa.',
            'Familias que se instalaron aquí tras 1990 y cuyos padres empiezan ahora a necesitar cuidados.',
            'Matrimonios en los que el cuidado prestado por uno de los cónyuges necesita alivio.',
            'Familiares que buscan un proveedor privado con vínculo berlinés en lugar de una solución puramente regional.',
          ],
        },
        {
          heading: 'Lo que define el cuidado en Kleinmachnow',
          stronglist: [
            { label: 'Brandeburgo, pero junto al límite', text: 'Kleinmachnow pertenece administrativamente a Brandeburgo, pero está puerta con puerta con Zehlendorf. Para la atención eso significa trayectos cortos desde nuestras ubicaciones del suroeste, y aun así un entorno con una calma más de pueblo.' },
            { label: 'Ubicaciones de casa y jardín', text: 'La dirección típica de Kleinmachnow es una casa unifamiliar con parcela. Escaleras, jardín y caminos forman parte del día a día; orientamos el cuidado a la vivienda concreta.' },
            { label: 'Claridad en los trayectos', text: 'Como cruzamos el límite urbano, planificamos los servicios con previsión y en bloques razonables. Así la atención sigue siendo fiable sin que el tiempo de trayecto se coma el servicio.' },
          ],
        },
        {
          heading: 'Hospitales y tiempos de trayecto',
          list: [
            'Helios Klinikum Emil von Behring (Zehlendorf) — 5-6 km, el hospital de agudos grande más cercano.',
            'Ev. Krankenhaus Ludwigsfelde-Teltow — 6-8 km.',
            'Klinikum Ernst von Bergmann Potsdam — unos 12 km.',
          ],
          trailingParagraphs: ['De Moabit a Kleinmachnow son, según el tráfico, unos 25-40 minutos por la A115. Como aquí cruzamos el límite urbano de Berlín, puede aplicarse, según el volumen del servicio, un recargo por desplazamiento; lo aclaramos de antemano.'],
        },
      ],
      faq: [
        { question: 'Kleinmachnow está en Brandeburgo: ¿trabajan siquiera allí?', answer: 'Sí. Cruzamos con regularidad el límite urbano hacia Kleinmachnow. Como el municipio limita directamente con Zehlendorf, es bien accesible desde nuestras zonas del suroeste.' },
        { question: '¿Qué hospital es el más cercano en caso de emergencia?', answer: 'Para la atención de agudos, el hospital grande más cercano suele ser el Helios Klinikum Emil von Behring, en Zehlendorf, a solo 5-6 km. Para determinadas especialidades entran también en juego Potsdam o Ludwigsfelde-Teltow.' },
        { question: '¿Cuesta más el trayecto al cruzar el límite del Land?', answer: 'Según el volumen del servicio, puede aplicarse un recargo por desplazamiento. Lo tratamos abiertamente en la primera conversación, antes de que decida, sin partidas ocultas.' },
      ],
      cta: { text: 'Solicitar una primera conversación', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Zehlendorf', href: '/standorte/zehlendorf', note: 'junto al límite urbano' },
        { label: 'Wannsee', href: '/standorte/wannsee' },
        { label: 'Potsdam', href: '/standorte/potsdam' },
        { label: 'Cuidado a domicilio de pago privado', href: '/leistungen/pflegedienst-selbstzahler' },
      ],
    },
  },

  // === 16. Potsdam =============================================================
  potsdam: {
    slug: 'potsdam',
    name: 'Potsdam',
    bezirk: 'Landeshauptstadt Brandenburg',
    plz: ['14467', '14469', '14471', '14473', '14476', '14478', '14480', '14482'],
    geo: { lat: 52.399, lng: 13.066 },
    hook: 'La capital del Land, junto a los lagos.',
    hideInFooter: true,
    metaTitle: 'Cuidado en Potsdam — capital de Brandeburgo',
    metaDescription: 'Cuidado privado en Potsdam: atención, acompañamiento (Sitzwache) y 24 horas en Babelsberg, la Berliner Vorstadt y las orillas de los lagos.',
    h1: 'Cuidado a domicilio en Potsdam — en la capital del Land, junto a los lagos',
    primaryKeyword: 'cuidado a domicilio Potsdam',
    detail: {
      intro: [
        'Potsdam es la capital del Land de Brandeburgo: una ciudad independiente de unos 180.000 habitantes, con centro histórico, amplias orillas junto a los lagos y prósperos barrios de villas como Babelsberg y la Berliner Vorstadt. En esos barrios junto a los lagos y en las tranquilas calles residenciales viven muchas personas mayores y de rentas altas que no quieren renunciar a su hogar tampoco cuando surge la necesidad de cuidados.',
        'Para nosotros, Potsdam es honestamente el punto más alejado de nuestra zona de actuación: desde Moabit son, según el tráfico, unos 35-50 minutos por la A115 y la AVUS. Atendemos Potsdam de forma deliberada, pero con servicios fijos y más largos y, según el volumen, un recargo por desplazamiento tratado con transparencia de antemano. Para visitas breves la distancia es demasiado grande; para una atención fiable y planificada es perfectamente asumible.',
      ],
      sections: [
        {
          heading: 'Quién acude a nosotros en Potsdam',
          list: [
            'Propietarios mayores en los barrios de villas de Babelsberg y la Berliner Vorstadt que desean quedarse en casa.',
            'Residentes de las tranquilas orillas de los lagos, al oeste de la ciudad, con altas exigencias de cuidado.',
            'Familiares que buscan un proveedor privado y discreto con vínculo berlinés.',
            'Matrimonios en los que el cuidado prestado por uno de los cónyuges llega a su límite.',
          ],
        },
        {
          heading: 'Lo que define el cuidado en Potsdam',
          stronglist: [
            { label: 'Grandes propiedades tranquilas', text: 'La dirección típica en Babelsberg o la Berliner Vorstadt es una casa generosa con jardín, a menudo cerca del agua o de un parque. Ajustamos la atención a esa vivienda en lugar de encajarla en un patrón estándar.' },
            { label: 'Un paisaje hospitalario propio', text: 'Potsdam cuenta con un gran centro sobre el terreno, el Klinikum Ernst von Bergmann. Para las transiciones entre clínica y hogar —tras una operación o una rehabilitación— aprovechamos las distancias cortas dentro de la ciudad.' },
            { label: 'Planificación en lugar de reacción', text: 'Por la distancia desde Moabit, en Potsdam trabajamos con planes de servicio fijos y equipos reducidos. Eso hace fiable la atención y garantiza que siempre haya alguien de confianza sobre el terreno.' },
          ],
        },
        {
          heading: 'Hospitales y tiempos de trayecto',
          list: [
            'Klinikum Ernst von Bergmann (Charlottenstr. 72) — el mayor centro de la ciudad, unas 1.100 camas.',
            'Oberlinklinik Babelsberg — especializada en traumatología.',
            'St. Josefs-Krankenhaus Potsdam-Sanssouci.',
          ],
          trailingParagraphs: ['De Moabit a Potsdam hay que contar, según el tráfico, unos 35-50 minutos por la A115 y la AVUS. Para este trayecto más largo puede aplicarse, según el volumen del servicio, un recargo por desplazamiento que tratamos abiertamente con usted de antemano.'],
        },
      ],
      faq: [
        { question: 'Potsdam está a buena distancia de Berlín: ¿atienden realmente allí?', answer: 'Sí, aunque honestamente en el extremo de nuestra zona. Desde Moabit son 35-50 minutos. Por eso planificamos Potsdam con servicios fijos y más largos, en lugar de visitas breves: así la atención es fiable y el tiempo de trayecto se emplea con sentido.' },
        { question: '¿Se aplica un recargo por desplazamiento para Potsdam?', answer: 'Según el volumen del servicio, sí. Le damos las condiciones completas en la primera conversación, antes de que se comprometa a nada. Con nosotros no hay extras ocultos.' },
        { question: '¿Qué hospital es el más importante sobre el terreno?', answer: 'El Klinikum Ernst von Bergmann, en la Charlottenstraße, es el mayor de la ciudad, con unas 1.100 camas. Para traumatología, la Oberlinklinik en Babelsberg es una referencia, junto con el St. Josefs-Krankenhaus en Sanssouci.' },
      ],
      cta: { text: 'Solicitar una primera conversación', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Wannsee', href: '/standorte/wannsee' },
        { label: 'Kleinmachnow', href: '/standorte/kleinmachnow' },
        { label: 'Grunewald', href: '/standorte/grunewald', note: 'al otro lado del Havel' },
        { label: 'Atención las veinticuatro horas', href: '/leistungen/24-stunden-betreuung' },
      ],
    },
  },
};
