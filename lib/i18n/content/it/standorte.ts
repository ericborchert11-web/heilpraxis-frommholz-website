import type { Overlay } from '../types';
import type { SeoStandort } from '@/lib/standorte';

/**
 * Versioni italiane, indicizzate secondo lo slug tedesco. Ciò che manca qui
 * continua ad apparire in tedesco su `/it`.
 *
 * `slug`, `plz`, `geo`, `name`, `bezirk` così come `isHauptstandort`/`hideInFooter`
 * restano invariati: nomi di luogo e flag strutturali non vengono tradotti.
 * Ogni `href` in `detail.cta` e `detail.relatedLinks` è un percorso di
 * riferimento tedesco e viene localizzato solo al momento del rendering.
 *
 * Il renderer del dettaglio produce testo semplice (niente Markdown). I termini
 * tecnici tedeschi stanno perciò tra parentesi tonde: "vigilanza al capezzale (Sitzwache)".
 */
export const STANDORTE_IT: Overlay<SeoStandort> = {
  // === 1. Moabit (Hauptstandort) ==============================================
  moabit: {
    slug: 'moabit',
    name: 'Moabit',
    bezirk: 'Mitte',
    plz: ['10551', '10553', '10555', '10557', '10559'],
    geo: { lat: 52.5349, lng: 13.3432 },
    hook: 'La nostra sede, il nostro quartiere.',
    isHauptstandort: true,
    metaTitle: 'Assistenza e vigilanza Moabit — nel Suo quartiere',
    metaDescription: 'Assistenza, vigilanza al capezzale e cura 24h a Moabit. La nostra sede è in Stephanstraße 46 — conosciamo il Suo quartiere come pochi.',
    h1: 'Assistenza e vigilanza al capezzale a Moabit — dal Suo quartiere, per il Suo quartiere',
    primaryKeyword: 'assistenza domiciliare Moabit Berlino',
    detail: {
      intro: [
        'Moabit è casa nostra. Da oltre 15 anni la nostra sede è in Stephanstraße 46 — nel mezzo, tra Wedding, Tiergarten e Hansaviertel. Conosciamo i palazzi d’epoca tra Beusselstraße e Turmstraße. Conosciamo il silenzio della Wittstocker Straße e il chiasso dello Stephanplatz. Sappiamo dove entrano le ambulanze e quali androni sono difficili da raggiungere.',
        'Se a Moabit ha bisogno di assistenza, siamo da Lei in dieci minuti.',
      ],
      sections: [
        {
          heading: 'Cosa offriamo a Moabit',
          paragraphs: ['Tutta la nostra gamma di servizi — con il vantaggio di essere qui, proprio dietro l’angolo:'],
          list: [
            'Vigilanza al capezzale (Sitzwache) — in ospedale, a casa, in hospice.',
            'Assistenza 24 ore su 24 con un team di personale di lingua tedesca.',
            'Accompagnamento a ore per signore e signori anziani.',
            'Consulenza sull’assistenza — spesso a casa Sua.',
            'Vigilanza notturna e vigilanza al capezzale in hospice.',
          ],
        },
        {
          heading: 'Ospedali a Moabit e dintorni',
          paragraphs: ['Conosciamo le strutture più importanti:'],
          list: [
            'Klinikum am Urban (Vivantes) — 15 minuti di tragitto.',
            'Vivantes Klinikum am Friedrichshain — 20 minuti.',
            'DRK Kliniken Westend — 18 minuti.',
            'Charité Campus Virchow — 8 minuti.',
            'Lazarus-Krankenhaus (Wedding) — 10 minuti.',
          ],
          trailingParagraphs: ['In tutte queste strutture abbiamo già svolto vigilanze al capezzale e accompagnamenti. Conosciamo i responsabili del servizio infermieristico, sappiamo come è regolato l’accesso e raggiungiamo il reparto senza deviazioni.'],
        },
        {
          heading: 'Cosa rende Moabit ciò che è',
          paragraphs: ['Moabit è eterogeneo. Il Beusselkiez e la vicinanza all’Hansaviertel, inquilini di lunga data e nuovi caffè, famiglie e persone che vivono sole. Anche la nostra clientela a Moabit è varia come il quartiere (Kiez) stesso:'],
          list: [
            'Signore anziane nei grandi appartamenti d’epoca intorno a Huttenstraße, Calvinstraße e Bremer Straße, che desiderano un aiuto.',
            'Famiglie nei caseggiati intorno a Stephanstraße e Stromstraße, i cui genitori sono in visita.',
            'Residenti delle residenze per anziani che desiderano un’assistenza privata aggiuntiva.',
            'Inquilini i cui familiari sono ricoverati in ospedale e hanno bisogno di accompagnamento.',
          ],
        },
      ],
      faq: [
        { question: 'In caso di emergenza a Moabit arrivate particolarmente in fretta?', answer: 'Sì — spesso siamo da Lei in 5-10 minuti, a seconda dell’ora e del traffico. Per le richieste urgenti di vigilanza al capezzale dal quartiere immediato offriamo la reazione più rapida di tutta la città.' },
        { question: 'Con quali case di riposo di Moabit collaborate?', answer: 'Interveniamo nelle case di riposo e nelle residenze assistite come supporto aggiuntivo, quando una famiglia desidera ore individuali in più. Delle strutture concrete parliamo nel primo colloquio.' },
        { question: 'I Suoi collaboratori sono tutti di Moabit?', answer: 'No — ma molti abitano nel centro città. Questo significa tragitti brevi e una buona conoscenza del territorio.' },
      ],
      cta: { text: 'Richiedere un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Assistenza domiciliare per privati', href: '/leistungen/pflegedienst-selbstzahler', note: 'il nostro orientamento di fondo' },
        { label: 'Consulenza sull’assistenza a Berlino', href: '/leistungen/pflegeberatung-berlin', note: 'spesso come primo contatto' },
        { label: 'Tiergarten', href: '/standorte/tiergarten', note: 'il quartiere adiacente' },
        { label: 'Frohnau', href: '/standorte/frohnau', note: 'nel nord di Berlino' },
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
    hook: 'Discrezione e distanze brevi.',
    metaTitle: 'Assistenza Tiergarten — rapida e discreta',
    metaDescription: 'Assistenza privata a Tiergarten. Discreta, con distanze brevi dalla nostra sede di Moabit. Anche per ambasciate e ambienti diplomatici.',
    h1: 'Assistenza a Tiergarten — discreta, rapida, sul posto',
    primaryKeyword: 'assistenza domiciliare Tiergarten Berlino',
    detail: {
      intro: [
        'Tiergarten non è solo un parco. È anche un quartiere in cui risiedono molte ambasciate, in cui comincia il Quartiere diplomatico, in cui le situazioni abitative sono spesso particolari — grandi appartamenti, residenze di rappresentanza, edifici con portineria.',
        'Chi a Tiergarten ha bisogno di assistenza ha spesso esigenze particolari: discrezione, competenza linguistica, sensibilità per le situazioni di protocollo, disponibilità a breve termine. Noi siamo pronti a questo.',
      ],
      sections: [
        {
          heading: 'Chi si rivolge a noi a Tiergarten',
          list: [
            'Membri delle ambasciate con familiari non autosufficienti.',
            'Rappresentanze diplomatiche che organizzano assistenza privata per dignitari in visita.',
            'Residenti degli eleganti complessi residenziali intorno al Großer Tiergarten, al Lützowplatz, alla Hofjägerallee.',
            'Pazienti del vicino Bundeswehrkrankenhaus che dopo le dimissioni hanno bisogno di ulteriore accompagnamento.',
            'Signore anziane delle residenze assistite nella Klingelhöferstraße e dintorni.',
          ],
        },
        {
          heading: 'Cosa conta di più per l’assistenza a Tiergarten',
          stronglist: [
            { label: 'Discrezione', text: 'I collaboratori si presentano in abiti sobri, senza logo dell’assistenza visibile. Gli appuntamenti non vengono comunicati ad alta voce al telefono. Se necessario, stipuliamo accordi di riservatezza specifici.' },
            { label: 'Competenza linguistica', text: 'A seconda delle esigenze impieghiamo personale con buone conoscenze di inglese, francese o spagnolo.' },
            { label: 'Tempestività', text: 'La vita diplomatica programma con poco anticipo. Siamo pronti a iniziare anche entro 24 ore.' },
            { label: 'Etichetta con la portineria', text: 'Sappiamo come annunciarci negli edifici con portineria o servizio di sicurezza e come mantenere l’immagine che i nostri committenti desiderano preservare.' },
          ],
        },
        {
          heading: 'Ospedali e tragitti',
          list: [
            'Bundeswehrkrankenhaus Berlin (Scharnhorststraße) — 7 minuti.',
            'Charité Campus Mitte — 10 minuti.',
            'Vivantes Klinikum am Friedrichshain — 15 minuti.',
          ],
          trailingParagraphs: ['Dallo Stephanplatz a Moabit, lungo la Beethovenstraße fino a Tiergarten: circa 8-12 minuti a seconda dell’ora. Se serve, siamo sul posto più spesso e più a lungo, senza forfait di trasferta.'],
        },
      ],
      faq: [
        { question: 'I Suoi collaboratori parlano inglese o altre lingue?', answer: 'Sì — nel team ci sono professionisti con un inglese fluente e sicuro, alcuni con conoscenze di francese o spagnolo. In caso di esigenze linguistiche specifiche le chiariamo prima dell’inizio del contratto.' },
        { question: 'Quanto è garantito il segreto professionale con la clientela diplomatica?', answer: 'Il segreto professionale in ambito assistenziale è previsto dalla legge e sancito per contratto. Con la clientela particolarmente sensibile firmiamo ulteriori accordi di riservatezza.' },
        { question: 'Potete lavorare anche in albergo, se vi è ospite una persona non autosufficiente?', answer: 'Sì — accade regolarmente (familiari in visita a Berlino che hanno prenotato un albergo a Tiergarten). Ci coordiniamo con l’hotel.' },
      ],
      cta: { text: 'Richiedere un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Assistenza domiciliare per privati', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Accompagnamento in viaggio per anziani', href: '/leistungen/reisebegleitung-senioren', note: 'spesso utile per i viaggi di rientro della clientela diplomatica' },
        { label: 'Moabit', href: '/standorte/moabit', note: 'la nostra sede, direttamente adiacente' },
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
    hook: 'A due passi dalla Charité Mitte.',
    metaTitle: 'Assistenza Berlin-Mitte — discreta e affidabile',
    metaDescription: 'Assistenza, vigilanza al capezzale e accompagnamento a Berlin-Mitte. Cure vicino agli ospedali Charité Mitte e Sankt Hedwig.',
    h1: 'Assistenza e vigilanza al capezzale a Berlin-Mitte — vicino agli ospedali e rapida',
    primaryKeyword: 'assistenza domiciliare Berlin-Mitte',
    detail: {
      intro: [
        'Berlin-Mitte è amministrazione, turismo, abitazione — e assistenza ospedaliera. Charité Mitte (Luisenstraße/Charitéplatz), Sankt Hedwig (Große Hamburger Straße), Vivantes Friedrichshain (al confine con la Landsberger Allee) — a Mitte si trovano alcuni dei più importanti ospedali di Berlino.',
        'Molte delle nostre richieste da Mitte arrivano proprio da queste strutture: vigilanze al capezzale per pazienti, accompagnamento nei trasferimenti, passaggi di consegne verso casa. Ma Mitte è anche un quartiere residenziale — vecchi inquilini tra Hackescher Markt e Friedrichstraße, nuovi residenti nei nuovi edifici allo Spreebogen.',
      ],
      sections: [
        {
          heading: 'Cosa facciamo spesso a Berlin-Mitte',
          stronglist: [
            { label: 'Vigilanza al capezzale (Sitzwache) alla Charité Mitte', text: 'Accompagnamento individuale nel post-operatorio, compagnia alle persone con demenza durante il ricovero, presenza nell’ultima fase della vita. Conosciamo i reparti, conosciamo le routine.' },
            { label: 'Accompagnamento al Sankt Hedwig', text: 'Il Sankt Hedwig è una struttura cattolica con routine proprie. Le rispettiamo. I nostri collaboratori hanno esperienza nel muoversi in strutture di impronta ecclesiastica.' },
            { label: 'Passaggi alla dimissione dall’ospedale', text: 'Quando la dimissione si avvicina, molte famiglie hanno bisogno di un ponte tra ospedale e casa. Ci occupiamo dei primi giorni a casa, spesso con modelli da 12 o 24 ore.' },
            { label: 'Consulenza sull’assistenza negli appartamenti di Mitte', text: 'Veniamo da Lei, parliamo con la famiglia e con il medico di base.' },
          ],
        },
        {
          heading: 'Tempi di percorrenza da Moabit',
          paragraphs: [
            'In auto lungo la Invalidenstraße fino alla Charité Mitte: circa 7 minuti. Verso le zone residenziali tra Friedrichstraße e Alexanderplatz: 10-15 minuti.',
          ],
        },
      ],
      faq: [
        { question: 'Potete svolgere vigilanze al capezzale alla Charité Mitte?', answer: 'Sì — regolarmente. Prima del primo intervento contattiamo il responsabile del servizio infermieristico del reparto e, se necessario, otteniamo un’autorizzazione scritta.' },
        { question: 'Quanto rapidamente arrivate in ospedale?', answer: 'Alla maggior parte degli ospedali di Mitte in 10-15 minuti. In caso di emergenze a breve termine siamo spesso disponibili in giornata.' },
        { question: 'Possiamo prenotare una vigilanza al capezzale prima di un intervento programmato?', answer: 'Molto consigliabile — per gli interventi programmabili possiamo fissare la vigilanza già per il giorno 1 dopo l’operazione. Questo riduce il rischio di delirio e favorisce la guarigione.' },
      ],
      cta: { text: 'Richiedere un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Vigilanza al capezzale a Berlino', href: '/leistungen/sitzwachen-berlin' },
        { label: 'Accompagnamento in ospedale', href: '/themen/krankenhaus-begleitung' },
        { label: 'Moabit', href: '/standorte/moabit', note: 'direttamente adiacente' },
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
    hook: 'Presenza discreta nel quartiere dell’architettura.',
    metaTitle: 'Assistenza Hansaviertel — nel cuore verde',
    metaDescription: 'Assistenza, vigilanza al capezzale e accompagnamento nell’Hansaviertel. Presenza discreta per residenti anziani nei palazzi d’autore.',
    h1: 'Assistenza nell’Hansaviertel — nel quartiere silenzioso tra Tiergarten e Spree',
    primaryKeyword: 'assistenza domiciliare Hansaviertel Berlino',
    detail: {
      intro: [
        'L’Hansaviertel è uno dei quartieri più particolari di Berlino. Nato nel 1957 per l’Esposizione internazionale di architettura (Interbau), con edifici di Niemeyer, Aalto, Gropius, Eiermann — candidato al patrimonio mondiale UNESCO. Ma anche un normale quartiere residenziale con una particolarità: molti dei primi abitanti sono invecchiati qui. Gli appartamenti hanno spesso metrature ridotte, i residenti vivono spesso soli.',
        'Veniamo nell’Hansaviertel perché conosciamo il quartiere. Dalla stazione di Bellevue, dalla Altonaer Straße, dalla Klopstockstraße — è tutto a dieci minuti dalla nostra sede di Moabit.',
      ],
      sections: [
        {
          heading: 'Chi si rivolge a noi nell’Hansaviertel',
          list: [
            'Primi abitanti degli appartamenti dell’Interbau, ora in età avanzata, spesso soli.',
            'Persone non autosufficienti negli appartamenti della residenza Caritas nella Händelallee.',
            'Anziani appassionati d’arte e cultura, che hanno scelto l’Hansaviertel per poter raggiungere il centro culturale di Berlino.',
            'Vedove e vedovi che vogliono restare nell’appartamento di sempre, ma hanno bisogno di aiuto.',
          ],
        },
        {
          heading: 'Di cosa c’è spesso bisogno nell’Hansaviertel',
          stronglist: [
            { label: 'Accompagnamento a ore', text: 'per anziani che vivono soli — non ogni giorno, ma con regolarità. 2-3 ore: una passeggiata insieme nel Tiergarten, un pranzo condiviso, la lettura di un libro ad alta voce.' },
            { label: 'Sicurezza nel fine settimana', text: 'Quando durante la settimana c’è una collaboratrice domestica e visite di volontari, ma il fine settimana resta vuoto — subentriamo noi.' },
            { label: 'Vigilanza notturna in caso di insicurezza', text: 'In appartamenti piccoli, dove alzarsi per andare in bagno di notte è legato alla paura di cadere.' },
            { label: 'Accompagnamento a eventi culturali', text: 'Alcuni clienti vogliono ancora andare al concerto, a teatro, a una mostra — con l’accompagnamento di una persona esperta è possibile.' },
          ],
        },
        {
          heading: 'Ospedali',
          list: [
            'Charité Campus Virchow Klinikum (Forckenbeckplatz) — 5 minuti.',
            'Bundeswehrkrankenhaus Berlin — 5 minuti.',
            'DRK Kliniken Westend — 10 minuti.',
          ],
        },
      ],
      faq: [
        { question: 'Mio padre vive solo nell’Hansaviertel e non vuole andare in una casa di riposo. Cosa è possibile?', answer: 'Molto. Con 2-3 ore di accompagnamento al giorno più una vigilanza notturna 2-3 giorni a settimana si riesce spesso a creare un contesto sicuro anche in appartamenti piccoli. Nel primo colloquio chiariamo cosa ha senso.' },
        { question: 'Gli appartamenti dell’Hansaviertel sono adatti all’assistenza?', answer: 'In gran parte no — sono piccoli, spesso con porte strette. Ciononostante l’assistenza a domicilio è qui possibile nella maggior parte dei casi, spesso con piccoli adattamenti strutturali, in parte finanziati dalla cassa per l’assistenza (Pflegekasse).' },
        { question: 'Potete venire anche solo una volta a settimana?', answer: 'Sì — accettiamo anche impegni minimi di 2-3 ore a settimana, quando si tratta di un accompagnamento a lungo termine.' },
      ],
      cta: { text: 'Richiedere un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Vigilanza al capezzale a Berlino', href: '/leistungen/sitzwachen-berlin', note: 'spesso a ore' },
        { label: 'Assistenza notturna a Berlino', href: '/leistungen/nachtwachen-berlin' },
        { label: 'Consulenza sull’assistenza', href: '/leistungen/pflegeberatung-berlin' },
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
    hook: 'Clientela privata esigente tra il castello e il Kudamm.',
    metaTitle: 'Assistenza Charlottenburg — clientela privata',
    metaDescription: 'Assistenza e cura individuale a Charlottenburg. Team esperto, distanze brevi — dallo Schlosspark al Kurfürstendamm.',
    h1: 'Assistenza a Charlottenburg — per una clientela privata esigente',
    primaryKeyword: 'assistenza domiciliare Charlottenburg Berlino',
    detail: {
      intro: [
        'Charlottenburg è grande. Dal parco del castello a nord al Kurfürstendamm a sud, dalla Spree a est al Lietzensee a ovest — decine di migliaia di appartamenti, molti dei quali d’epoca, in gran parte da signorili a esclusivi. Chi abita qui e ha bisogno di assistenza ha per lo più un’idea chiara di come debba essere questa assistenza.',
        'Siamo presenti a Charlottenburg da oltre 15 anni. Conosciamo la clientela intorno all’Olivaer Platz, negli appartamenti sul Lietzensee, negli edifici tra Bismarckstraße e Kantstraße.',
      ],
      sections: [
        {
          heading: 'Cosa caratterizza l’assistenza a Charlottenburg',
          stronglist: [
            { label: 'Esigente, ma mai invadente', text: 'La nostra clientela a Charlottenburg è spesso colta, di formazione accademica, con un senso preciso dello stile e della discrezione. Impieghiamo collaboratori che, per linguaggio e portamento, si addicono a queste case.' },
            { label: 'Continuità', text: 'Charlottenburg è clientela affezionata. Molte famiglie lavorano con noi per anni, a volte per generazioni. Il team fisso conosce la famiglia, conosce le preferenze, conosce la casa.' },
            { label: 'Carattere privato', text: 'Arriviamo senza logo visibile, spesso con la nostra auto, senza lasciare tracce evidenti negli androni.' },
          ],
        },
        {
          heading: 'Ospedali a Charlottenburg',
          list: [
            'DRK Kliniken Berlin Westend — una delle strutture in cui operiamo più spesso.',
            'Schlosspark-Klinik — clinica privata esclusiva.',
            'Vivantes Klinikum Spandau — 15 minuti.',
            'St. Gertrauden Krankenhaus — 8 minuti.',
          ],
        },
        {
          heading: 'Tragitto da Moabit',
          paragraphs: ['Dalla Stephanstraße lungo la Otto-Suhr-Allee al Schloss Charlottenburg in 10-12 minuti. Fino al Kurfürstendamm 15-20 minuti a seconda dell’ora.'],
        },
      ],
      faq: [
        { question: 'Venite anche nei vecchi caseggiati senza ascensore?', answer: 'Sì. I nostri collaboratori sono disposti, se serve, a salire 3-4 piani senza ascensore. Per le persone non autosufficienti che non riescono più a fare le scale da sole, valutiamo se abbiano senso interventi strutturali (ad es. un montascale).' },
        { question: 'Abbiamo un’assistente alla persona proveniente dall’estero — può essere assunta da voi?', answer: 'Un’assunzione è possibile se la persona era regolarmente assunta da Lei sotto il profilo giuslavoristico. In situazioni di zona grigia (lavoro autonomo, distacco) un’“assunzione” non è possibile, ma possiamo comunque colmare la lacuna assistenziale con personale nostro.' },
        { question: 'Potete lavorare anche nelle esclusive residenze assistite sul Kurfürstendamm?', answer: 'Sì. Con la maggior parte delle strutture abbiamo già collaborato. L’assistenza interna alla struttura non la assumiamo — ma le ore individuali aggiuntive, la vigilanza notturna, l’accompagnamento personalizzato sono il nostro lavoro.' },
      ],
      cta: { text: 'Richiedere un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Assistenza domiciliare per privati', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Assistenza 24 ore su 24', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Wilmersdorf', href: '/standorte/wilmersdorf', note: 'direttamente adiacente' },
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
    hook: 'Borghesia colta, palazzi d’epoca, continuità.',
    metaTitle: 'Assistenza Wilmersdorf — discreta ed esclusiva',
    metaDescription: 'Assistenza privata a Wilmersdorf. Discreta, con un team fisso — per gli appartamenti d’epoca tra Olivaer Platz e Ludwigkirchplatz.',
    h1: 'Assistenza a Wilmersdorf — nel quartiere d’epoca della borghesia colta',
    primaryKeyword: 'assistenza domiciliare Wilmersdorf Berlino',
    detail: {
      intro: [
        'Wilmersdorf è un quartiere con carattere. I grandi palazzi di fine Ottocento (Gründerzeit) tra Olivaer Platz, Bayerisches Viertel, Volkspark e Ludwigkirchplatz sono da generazioni residenza della borghesia colta berlinese — avvocate, medici, professoresse, storici dell’arte. I residenti invecchiano, spesso molto. E spesso vogliono restare nel loro appartamento.',
        'Da anni abbiamo dimestichezza con l’assistenza a Wilmersdorf. Sappiamo come sono questi appartamenti — soffitti alti, mobili scuri, biblioteche piene di libri, una patina che racconta una storia. E sappiamo come dovrebbe essere l’assistenza in appartamenti così: rispettosa, silenziosa, senza intaccare il carattere della casa.',
      ],
      sections: [
        {
          heading: 'Cosa sappiamo fare particolarmente bene a Wilmersdorf',
          stronglist: [
            { label: 'Accompagnamento di accademiche e accademici che vivono soli', text: 'Spesso senza figli, spesso con fratelli, nipoti lontani. Chi a Wilmersdorf abita un appartamento di cinque stanze ed è solo ha spesso bisogno di più dell’assistenza — anche di un interlocutore capace di seguirlo nel pensiero.' },
            { label: 'Assistenza 24 ore su 24 nei grandi appartamenti', text: 'Dove ci sono molte stanze, anche un team 24 ore su 24 può essere sistemato bene senza intralciarsi. Una camera per il turno di notte, stanze tranquille per le pause.' },
            { label: 'Discrezione verso il condominio', text: 'Le comunità dei palazzi d’epoca sono spesso molto affiatate. Arriviamo con discrezione, evitiamo di dare nell’occhio, tuteliamo la sfera privata.' },
          ],
        },
        {
          heading: 'Ospedali e tragitti',
          list: [
            'St. Gertrauden Krankenhaus — 5 minuti da molti indirizzi di Wilmersdorf.',
            'Schlosspark-Klinik — 10 minuti.',
            'DRK Kliniken Westend — 12 minuti.',
          ],
          trailingParagraphs: ['Da Moabit lungo la Berliner Straße fino al centro di Wilmersdorf circa 12 minuti. Verso le zone meridionali di Wilmersdorf (Hohenzollerndamm, Wittelsbacher Straße) circa 18-22 minuti.'],
        },
      ],
      faq: [
        { question: 'Mio padre ha 92 anni e non vuole un servizio di assistenza perché non vuole “estranei” in casa. Cosa fare?', answer: 'Situazione frequente. La affrontiamo con calma — spesso con una prima visita in cui non si presta alcuna assistenza, si fa solo una conversazione. I nostri collaboratori hanno esperienza nel costruire fiducia. Spesso la resistenza si scioglie nel giro di poche visite.' },
        { question: 'Potete accompagnare gli amanti della musica classica ai concerti?', answer: 'Sì — a Wilmersdorf è anzi una delle nostre specialità. Accompagnamento alla Berliner Philharmonie, alla Deutsche Oper, nelle sale da concerto — con collaboratori che hanno dimestichezza con la musica e l’etichetta.' },
        { question: 'Quanto costa un’assistenza 24 ore su 24 in un appartamento d’epoca di sei stanze?', answer: 'La metratura non cambia il prezzo — decisiva è la qualifica richiesta per ogni turno e se la notte è attiva o in reperibilità. L’ordine di grandezza mensile concreto lo riceve nel primo colloquio, dopo aver definito il fabbisogno.' },
      ],
      cta: { text: 'Richiedere un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Assistenza domiciliare per privati', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Assistenza 24 ore su 24', href: '/leistungen/24-stunden-betreuung' },
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
    hook: 'Ville, grandi case, radici profonde.',
    metaTitle: 'Assistenza Westend — i quartieri delle ville',
    metaDescription: 'Assistenza nel Westend, tra l’Olympiastadion e il Lietzensee. Discreta, con esigenze elevate — per le ville e i grandi appartamenti.',
    h1: 'Assistenza nel Westend — nelle vie tranquille delle ville',
    primaryKeyword: 'assistenza domiciliare Westend Berlino',
    detail: {
      intro: [
        'Il Westend è una Berlino a sé. Strade silenziose, vecchie ville, giardini, vialetti di ghiaia, comunità di vicinato cresciute nel tempo. Qui abitano famiglie da generazioni — oppure nuovi acquirenti che vogliono inserirsi nella tradizione. Chi qui invecchia, di norma vuole restare. Chi diventa non autosufficiente cerca soluzioni all’altezza della dignità della casa.',
        'Siamo spesso qui. Conosciamo la Reichsstraße e la Akazienallee, la Lindenallee e le traverse dello Spandauer Damm.',
      ],
      sections: [
        {
          heading: 'Assistenza nelle case del Westend',
          stronglist: [
            { label: 'Grandi proprietà', text: 'Un’assistenza 24 ore su 24 in una villa di 200 mq si svolge diversamente da quella in un appartamento di 60 mq. Più piani, grandi distanze, spesso anche grandi giardini — tutto questo va considerato nell’organizzazione dell’assistenza.' },
            { label: 'Vite ricche di storia', text: 'Chi invecchia in una casa del Westend ha spesso alle spalle una vita lunga, custodita nei mobili, nei quadri, nei libri. I nostri collaboratori sono abituati a trattare con simili biografie.' },
            { label: 'Personale domestico e assistenza insieme', text: 'Molte famiglie del Westend impiegano da decenni collaboratori domestici e giardinieri. Quando ci inseriamo, dobbiamo adattarci a queste strutture.' },
            { label: 'Morire con stile', text: 'Chi è invecchiato in una casa del Westend spesso vuole anche morirvi. Accompagniamo i processi di fine vita in queste case — con tutto ciò che serve, dall’assistenza in hospice fino all’ultimo giorno.' },
          ],
        },
        {
          heading: 'Ospedali e tragitti',
          list: [
            'DRK Kliniken Berlin Westend — 5 minuti da molti indirizzi del Westend.',
            'Schlosspark-Klinik (Charlottenburg) — 10 minuti.',
            'Vivantes Klinikum Spandau — 12 minuti.',
          ],
          trailingParagraphs: ['Attraverso Charlottenburg fino al Westend — circa 18-22 minuti, a seconda dell’ora. Pianifichiamo il tragitto in anticipo, così da arrivare puntuali.'],
        },
      ],
      faq: [
        { question: 'Abbiamo una casa molto grande. Serve più personale?', answer: 'Non necessariamente. Una persona per turno può assistere anche una casa grande, purché la persona da assistere sia sistemata in una parte contenuta. Con persone molto mobili (demenza, rischio di allontanamento) può avere senso lavorare in due.' },
        { question: 'Possiamo fare l’assistenza in terrazza o in giardino?', answer: 'D’estate, volentieri. I nostri collaboratori sono flessibili.' },
        { question: 'Con quanta discrezione arrivano i Suoi collaboratori?', answer: 'Con la propria auto (senza logo dell’assistenza), in abiti sobri, agli orari concordati. Con la clientela particolarmente sensibile concordiamo i percorsi di arrivo.' },
      ],
      cta: { text: 'Richiedere un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Assistenza 24 ore su 24', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Assistenza domiciliare per privati', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Vigilanza al capezzale in hospice', href: '/leistungen/hospiz-sitzwachen' },
        { label: 'Charlottenburg', href: '/standorte/charlottenburg', note: 'il quartiere adiacente' },
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
    hook: 'Massima discrezione, clientela in vista.',
    metaTitle: 'Assistenza Grunewald — massima discrezione',
    metaDescription: 'Assistenza privata a Grunewald. Massima discrezione, piccolo team fisso, esperienza con clientela in vista.',
    h1: 'Assistenza a Grunewald — con la massima discrezione',
    primaryKeyword: 'assistenza domiciliare Grunewald Berlino',
    detail: {
      intro: [
        'A Grunewald abitano persone che non vogliono finire sui giornali. Residenti i cui nomi si conoscono — o che di proposito non si conoscono. Case che si celano dietro muri, siepi e sistemi di sicurezza. E sotto tutto questo: bisogni di assistenza umani come ovunque — ma con particolari esigenze di discrezione.',
        'Chi cerca assistenza a Grunewald non cerca il primo fornitore a portata di mano. Cerca un team che capisca che cosa significhi davvero la riservatezza. Da anni lavoriamo con clientela di ambiti esposti — economia, politica, scienza, arte.',
      ],
      sections: [
        {
          heading: 'Cosa distingue l’assistenza a Grunewald da altri quartieri',
          stronglist: [
            { label: 'Il segreto è il presupposto del lavoro', text: 'Lavoriamo con accordi di riservatezza estesi, che i nostri collaboratori firmano. Non riveliamo l’identità della clientela nemmeno all’interno del nostro team, a colleghi che non ne hanno motivo.' },
            { label: 'Presenza senza impronta', text: 'Arriviamo con la nostra auto, parcheggiamo secondo le indicazioni della clientela (spesso nelle vicinanze, non direttamente davanti alla casa). Lasciamo la casa senza che i vicini sappiano che qualcuno viene assistito.' },
            { label: 'Team piccolo e fisso', text: 'Con la clientela dalle elevate esigenze di riservatezza lavoriamo con 3-4 collaboratori fissi selezionati — nessun personale di pool a rotazione, nessun tirocinante.' },
            { label: 'Esperienza con il personale di sicurezza', text: 'In alcune case ci sono servizi di sicurezza, portieri, guardie. I nostri collaboratori sanno come annunciarsi, come comportarsi.' },
            { label: 'Disponibilità ad accordi scritti', text: 'Accordi di riservatezza (clausole NDA), regolamenti dettagliati sulla protezione dei dati — a Grunewald tutto ciò è più spesso lo standard che altrove.' },
          ],
        },
        {
          heading: 'Ospedali e tragitti',
          list: [
            'DRK Kliniken Berlin Westend — 10 minuti.',
            'Schlosspark-Klinik — 12 minuti (spesso utilizzata per i ricoveri da Grunewald).',
            'Sankt Gertrauden — 15 minuti.',
          ],
          trailingParagraphs: ['Dalla nostra sede di Moabit a Grunewald circa 22-30 minuti, a seconda dell’ora e della destinazione.'],
        },
      ],
      faq: [
        { question: 'Potete garantire riservatezza assoluta?', answer: 'Il segreto professionale in ambito assistenziale è previsto dalla legge — ogni violazione è perseguibile penalmente. Con la clientela particolarmente sensibile integriamo il segreto con accordi di riservatezza scritti e penali contrattuali. Ciononostante: una garanzia al 100% non può darla nessuno, perché gli esseri umani sono esseri umani. Facciamo tutto ciò che è possibile.' },
        { question: 'I Suoi collaboratori possono esibire controlli sui precedenti?', answer: 'Tutti i collaboratori hanno presentato un certificato penale esteso (erweitertes Führungszeugnis), non più vecchio di 3 mesi. In presenza di esigenze particolari, i collaboratori si sottopongono a ulteriori controlli sui precedenti.' },
        { question: 'Accettate anche la stipula del contratto tramite avvocati?', answer: 'Sì — molta clientela di Grunewald fa gestire il contratto tramite il proprio studio legale. Per noi non è un problema.' },
        { question: 'Possiamo organizzare anche il pagamento tramite conti fiduciari?', answer: 'Accettiamo le modalità di pagamento consuete (bonifico, all’occorrenza addebito diretto SEPA). Per costruzioni di pagamento complesse concordiamo le condizioni caso per caso.' },
      ],
      cta: { text: 'Richiedere un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Assistenza domiciliare per privati', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Assistenza 24 ore su 24', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Westend', href: '/standorte/westend' },
        { label: 'Schmargendorf', href: '/standorte/schmargendorf', note: 'direttamente adiacente' },
        { label: 'Wannsee', href: '/standorte/wannsee', note: 'confinante' },
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
    hook: 'Zona tranquilla per famiglie, case, giardini.',
    metaTitle: 'Assistenza Zehlendorf — cure nel verde',
    metaDescription: 'Assistenza e vigilanza al capezzale a Zehlendorf. Un team esperto, che conosce le vie quiete dal Mexikoplatz al Krumme Lanke.',
    h1: 'Assistenza a Zehlendorf — cure per la famiglia nel verde',
    primaryKeyword: 'assistenza domiciliare Zehlendorf Berlino',
    detail: {
      intro: [
        'Zehlendorf è la Berlino delle famiglie. Case unifamiliari, case a schiera, grandi giardini, strade tranquille, scuole, alberi. Qui abitano famiglie in cui le generazioni vivono vicine — i nonni in un appartamento nella casa della figlia, la figlia e il genero con i nipoti nella parte principale. Oppure i nonni soli nella grande casa di famiglia, dopo che i figli se ne sono andati.',
        'Conosciamo Zehlendorf. Ci muoviamo dal Mexikoplatz, dal Krumme Lanke, dalla Onkel-Tom-Straße, dallo Schlachtensee fino alla Argentinische Allee.',
      ],
      sections: [
        {
          heading: 'Chi si rivolge a noi a Zehlendorf',
          stronglist: [
            { label: 'Case multigenerazionali', text: 'I nonni vivono in una parte propria della casa di famiglia. La famiglia aiuta finché può — ma a un certo punto non basta più. Noi integriamo, senza turbare il carattere familiare della casa.' },
            { label: 'Vedove e vedovi rimasti soli', text: 'Nella grande casa di famiglia, con i figli ormai fuori casa, una figlia a Monaco, un figlio a Francoforte. Chi passa a trovarli? Noi.' },
            { label: 'Figli che hanno accolto i propri genitori', text: 'Un bisogno improvviso di assistenza, spesso con demenza, senza una rete sociale locale per chi è stato accolto. Noi aiutiamo a costruirla.' },
            { label: 'Famiglie di accademici', text: 'Personale della vicina FU, dipendenti di fondazioni, ricercatrici e ricercatori degli enti di ricerca berlinesi.' },
          ],
        },
        {
          heading: 'Cosa caratterizza in particolare l’assistenza a Zehlendorf',
          stronglist: [
            { label: 'Accettare tragitti più lunghi', text: 'Da Moabit a Zehlendorf sono 25-35 minuti. Lo accettiamo, perché la continuità per la clientela conta più dei forfait di trasferta.' },
            { label: 'Compatibilità con l’auto', text: 'Molti indirizzi di Zehlendorf sono raggiungibili bene solo in auto. I nostri collaboratori hanno patente e automobile.' },
            { label: 'Accompagnamento in giardino', text: 'Molti clienti di Zehlendorf trascorrono le loro giornate in giardino. L’accompagnamento vi rientra — dalla passeggiata in terrazza al giardinaggio insieme, finché le forze lo consentono.' },
          ],
        },
        {
          heading: 'Ospedali del distretto',
          list: [
            'Helios-Klinikum Emil von Behring (Zehlendorf-Süd) — locale e apprezzato.',
            'Vivantes Klinikum Steglitz — 10 minuti.',
            'Charité Campus Benjamin Franklin — 15 minuti.',
          ],
        },
      ],
      faq: [
        { question: 'Abitiamo nella Onkel-Tom-Straße. Venite anche nelle piccole case a schiera?', answer: 'Certamente. La dimensione dell’abitazione per noi non conta.' },
        { question: 'I Suoi collaboratori possono aiutare anche in giardino?', answer: 'Il vero e proprio lavoro di giardinaggio non è nostro compito — per quello ci sono i servizi di giardinaggio. Ma accompagnare la clientela in giardino, sistemarla sulla sdraio, osservare insieme le rose — tutto questo fa parte del nostro lavoro.' },
        { question: 'Vogliamo portare da noi a Zehlendorf mia madre, che vive in Baviera. Come lo organizziamo?', answer: 'Aiutiamo noi. Accompagnamento in viaggio dalla Baviera fin qui, assistenza successiva a Zehlendorf, costruzione della rete di supporto. Meglio un primo colloquio 4-6 settimane prima del trasloco previsto.' },
      ],
      cta: { text: 'Richiedere un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Assistenza domiciliare per privati', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Dahlem', href: '/standorte/dahlem' },
        { label: 'Assistenza 24 ore su 24', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Nikolassee', href: '/standorte/nikolassee', note: 'confinante' },
        { label: 'Wannsee', href: '/standorte/wannsee', note: 'confinante' },
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
    hook: 'Di impronta accademica, nel contesto universitario.',
    metaTitle: 'Assistenza Dahlem — accademica e discreta',
    metaDescription: 'Assistenza privata a Dahlem. Per accademici, personale universitario e quartieri residenziali di pregio. Discreta e competente.',
    h1: 'Assistenza a Dahlem — nel quartiere accademico',
    primaryKeyword: 'assistenza domiciliare Dahlem Berlino',
    detail: {
      intro: [
        'Dahlem è accademia. La Freie Universität, il Botanischer Garten, il Max-Planck-Institut per la ricerca educativa, il Max-Planck-Institut per la storia della scienza, la John-F.-Kennedy-Schule. Chi abita a Dahlem appartiene spesso a una di queste istituzioni o vi è legato. La zona è silenziosa, alberata, notevolmente curata — e invecchia.',
        'Molte professoresse e molti professori che si trasferirono a Dahlem negli anni Sessanta, Settanta, Ottanta hanno ora un’età in cui l’assistenza entra in gioco. Noi andiamo da loro.',
      ],
      sections: [
        {
          heading: 'Chi si rivolge a noi a Dahlem',
          list: [
            'Professoresse e professori emeriti della FU, invecchiati negli appartamenti vicini all’università.',
            'Familiari dei Max-Planck-Institute, spesso a loro volta di formazione accademica.',
            'Familiari di diplomatici del vicino quartiere consolare.',
            'Famiglie i cui genitori si sono trasferiti da loro a Dahlem da altre città universitarie.',
          ],
        },
        {
          heading: 'Cosa caratterizza l’assistenza a Dahlem',
          stronglist: [
            { label: 'Esigenza intellettuale', text: 'Le accademiche e gli accademici spesso vogliono, anche in età di assistenza, parlare con persone capaci di seguirli. I nostri collaboratori leggono, discutono, conoscono i temi d’attualità — non è “assistenza standard”, ma un incontro sulla stessa lunghezza d’onda.' },
            { label: 'Appartamenti-biblioteca', text: 'Gli appartamenti di Dahlem sono spesso pieni di libri. Qui si legge ad alta voce, qui si parla di libri, qui la scienza è apprezzata come contenuto di vita. Il nostro team sa come muoversi in questo.' },
            { label: 'Clientela internazionale', text: 'Molte famiglie di Dahlem hanno origini internazionali — americane, britanniche, francesi, olandesi. Se serve, impieghiamo personale di lingua inglese o comunque con competenze linguistiche adeguate.' },
            { label: 'Discrezione verso la comunità universitaria', text: 'Chi a Dahlem parla troppo a lungo della vita privata di una collega se lo sente tornare indietro da lei stessa. Il nostro team lo capisce.' },
          ],
        },
        {
          heading: 'Ospedali e tragitti',
          list: [
            'Charité Campus Benjamin Franklin (Steglitz) — 12 minuti.',
            'Helios-Klinikum Emil von Behring — 15 minuti.',
            'Schlosspark-Klinik — 20 minuti.',
          ],
          trailingParagraphs: ['Circa 25-30 minuti da Moabit a molti indirizzi di Dahlem.'],
        },
      ],
      faq: [
        { question: 'I Suoi collaboratori parlano inglese?', answer: 'Nel team vi sono diversi collaboratori con un inglese fluente e sicuro. In caso di esigenze specifiche le chiariamo prima dell’inizio del contratto.' },
        { question: 'Mio padre legge ancora molto. Potete impiegare collaboratori che sappiano trattare con i libri?', answer: 'Certamente. Nella scelta del personale teniamo conto del retroterra biografico e intellettuale.' },
        { question: 'Qual è la Sua esperienza con la demenza in ambito accademico?', answer: 'La demenza è demenza — non fa distinzioni per il retroterra accademico. Ciò che differisce è il modo di affrontarla: le accademiche e gli accademici lottano spesso più a lungo contro la malattia, si sentono particolarmente feriti dalle difficoltà nel trovare le parole. Noi vi facciamo fronte con sensibilità.' },
      ],
      cta: { text: 'Richiedere un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Assistenza domiciliare per privati', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Zehlendorf', href: '/standorte/zehlendorf', note: 'direttamente adiacente' },
        { label: 'Grunewald', href: '/standorte/grunewald', note: 'confinante' },
        { label: 'Accompagnamento nella demenza', href: '/themen/demenz-begleitung' },
        { label: 'Kleinmachnow', href: '/standorte/kleinmachnow', note: 'vicino al confine' },
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
    hook: 'Quartiere agiato tra Wilmersdorf e Grunewald.',
    metaTitle: 'Assistenza Schmargendorf — radicata nel quartiere',
    metaDescription: 'Assistenza a Schmargendorf, il quartiere tra Wilmersdorf e Grunewald. Discreta, con conoscenza delle realtà locali.',
    h1: 'Assistenza a Schmargendorf — nel tranquillo quartiere residenziale',
    primaryKeyword: 'assistenza domiciliare Schmargendorf Berlino',
    detail: {
      intro: [
        'Schmargendorf si trova tra Wilmersdorf e Grunewald — geograficamente e socialmente. Non è del tutto prominente come Grunewald, ma agiato. Gli appartamenti sono spesso d’epoca, alcuni dell’epoca guglielmina (Gründerzeit), altri degli anni Venti. Qui abitano famiglie berlinesi di lunga data, spesso da due o tre generazioni negli stessi edifici.',
        'Da anni assistiamo clientela a Schmargendorf — il quartiere è tra le nostre zone abituali.',
      ],
      sections: [
        {
          heading: 'Cosa è tipico di Schmargendorf',
          stronglist: [
            { label: 'Radici familiari', text: 'Molti appartamenti sono in mano alla stessa famiglia da generazioni. Nell’assistenza si tratta spesso anche di preservare un habitus familiare.' },
            { label: 'Minore notorietà dei residenti', text: 'A differenza di Grunewald, qui abitano spesso lavoratori autonomi, imprenditori di media impresa, alti dirigenti — non esposti al pubblico, ma con mezzi confortevoli e idee chiare.' },
            { label: 'Metrature medie', text: 'Sono tipici gli appartamenti di tre-quattro stanze, non le grandissime proprietà di famiglia come nel Westend o a Grunewald.' },
          ],
        },
        {
          heading: 'Cosa rende buona l’assistenza a Schmargendorf',
          stronglist: [
            { label: 'Costanza senza stravaganze', text: 'La nostra clientela qui non vuole spettacolo, né esigenze speciali — vuole un’assistenza affidabile e di qualità, da persone che ne rispettino la storia.' },
            { label: 'A ore, più che tutto compreso', text: 'Rispetto a Grunewald, a Schmargendorf le assistenze 24 ore su 24 sono più rare. Più frequenti sono l’accompagnamento diurno, la vigilanza notturna, gli interventi mirati a ore.' },
            { label: 'Consulenza sull’assistenza con misura', text: 'Le famiglie vogliono spesso sapere come ottenere il massimo dal livello di assistenza (Pflegegrad), cosa può fare l’assistenza sostitutiva (Verhinderungspflege), come rendere programmabili gli anni a venire.' },
          ],
        },
        {
          heading: 'Ospedali e tragitti',
          list: [
            'DRK Kliniken Berlin Westend — 10 minuti.',
            'Sankt Gertrauden (Wilmersdorf) — 8 minuti.',
            'Schlosspark-Klinik — 12 minuti.',
          ],
          trailingParagraphs: ['Da Moabit a Schmargendorf circa 22-28 minuti.'],
        },
      ],
      faq: [
        { question: 'Potete venire anche solo per 3-4 ore nel pomeriggio?', answer: 'Sì — anzi qui è spesso il modello richiesto. Un accompagnamento pomeridiano dalle 14 alle 18 per una passeggiata insieme, un caffè e una conversazione è tipico.' },
        { question: 'Quanto costa una vigilanza notturna?', answer: 'La tariffa oraria dipende dalla qualifica e dal fatto che la notte sia attiva (sempre desti) o in reperibilità. I supplementi notturni e domenicali ai sensi del § 3b della legge sull’imposta sui redditi (EStG) sono compresi. La cifra concreta per il turno previsto la riceve nel primo colloquio.' },
        { question: 'Per l’assistenza di nostro padre vogliamo qualcuno che resti stabilmente e non cambi di continuo. È possibile?', answer: 'È esattamente il nostro modello. Impieghiamo piccoli team fissi (2-4 persone) che si alternano. Il cliente non ha ogni giorno un volto nuovo davanti.' },
      ],
      cta: { text: 'Richiedere un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Assistenza domiciliare per privati', href: '/leistungen/pflegedienst-selbstzahler' },
        { label: 'Wilmersdorf', href: '/standorte/wilmersdorf', note: 'direttamente adiacente' },
        { label: 'Grunewald', href: '/standorte/grunewald', note: 'direttamente adiacente' },
        { label: 'Assistenza notturna a Berlino', href: '/leistungen/nachtwachen-berlin' },
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
    hook: 'La colonia di ville sul lago.',
    hideInFooter: true,
    metaTitle: 'Assistenza Nikolassee — discreta sul lago',
    metaDescription: 'Assistenza privata a Nikolassee: cure, vigilanza al capezzale e 24h per la colonia di ville sullo Schlachtensee. Discreta e affidabile.',
    h1: 'Assistenza a Nikolassee — sul lago, nella colonia di ville',
    primaryKeyword: 'assistenza domiciliare Nikolassee Berlino',
    detail: {
      intro: [
        'Nikolassee fu realizzata a partire dal 1901 come colonia di ville ai margini del Grunewald — tra lo Schlachtensee e il Nikolassee, con grandi lotti, alberi secolari e una quiete che a Berlino si trova di rado. Chi qui possiede una casa l’ha spesso acquistata decenni fa o ereditata dai genitori. La colonia è invecchiata insieme ai suoi abitanti.',
        'Proprio da qui nasce il bisogno di assistenza: proprietari che non vogliono lasciare la loro casa sul lago, e nemmeno devono. Andiamo da loro — là dove hanno trascorso la vita, invece di trasferirli in una struttura.',
      ],
      sections: [
        {
          heading: 'Chi si rivolge a noi a Nikolassee',
          list: [
            'Proprietari di casa anziani, che vivono da decenni nella colonia di ville e desiderano restarvi.',
            'Coppie in cui un partner diventa non autosufficiente e l’altro ha bisogno di sollievo.',
            'Figli adulti che non vivono a Berlino e cercano un’assistenza affidabile per i genitori sul lago.',
            'Persone con demenza iniziale, per le quali l’ambiente familiare sull’acqua è un ancoraggio.',
          ],
        },
        {
          heading: 'Cosa caratterizza l’assistenza a Nikolassee',
          stronglist: [
            { label: 'Una casa, non un appartamento', text: 'Qui l’assistenza si svolge di solito in una casa unifamiliare su più piani. Scale, giardino, il sentiero fino al lago — adattiamo l’assistenza alla situazione abitativa reale, non a un appartamento standard.' },
            { label: 'Il richiamo dei laghi', text: 'Il tragitto quotidiano fino allo Schlachtensee o al Nikolassee fa parte della vita per molti. Accompagniamo queste passeggiate finché è possibile — il movimento in luoghi familiari mantiene stabili più a lungo di qualsiasi programma.' },
            { label: 'Discrezione nella colonia', text: 'In una piccola colonia di ville ci si conosce. Il nostro team si presenta con riserbo, senza sfoggio di auto aziendali, e rispetta il fatto che qui vicinato significa anche visibilità.' },
          ],
        },
        {
          heading: 'Ospedali e tragitti',
          list: [
            'Helios Klinikum Emil von Behring (Zehlendorf) — circa 4 km.',
            'Krankenhaus Waldfriede — circa 3 km.',
            'Immanuel Krankenhaus Wannsee — 3-4 km.',
          ],
          trailingParagraphs: ['Dalla nostra sede di Moabit sono circa 20-30 minuti a seconda del traffico, lungo la AVUS e la A115.'],
        },
      ],
      faq: [
        { question: 'Potete accompagnare mio padre nella sua passeggiata quotidiana fino allo Schlachtensee?', answer: 'Sì. Le passeggiate accompagnate sono tra i nostri interventi più frequenti qui. Adattiamo passo e percorso alla forma del giorno e siamo al suo fianco anche in caso di insicurezza o rischio di caduta.' },
        { question: 'La casa ha più piani — è un problema per l’assistenza?', answer: 'No, ma lo valutiamo nel primo colloquio. Consigliamo anche come spostare la vita quotidiana su un solo piano o quali ausili rendano le scale più sicure.' },
        { question: 'Quanto rapidamente arrivate da Moabit in caso di emergenza?', answer: 'Per gli interventi urgenti spontanei bisogna onestamente mettere in conto un tempo di percorrenza di 20-30 minuti. Per questo qui lavoriamo con turni fissi, pianificati in anticipo, invece che con una reazione al minuto — così qualcuno è già sul posto quando conta.' },
      ],
      cta: { text: 'Richiedere un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Wannsee', href: '/standorte/wannsee', note: 'confinante' },
        { label: 'Grunewald', href: '/standorte/grunewald' },
        { label: 'Zehlendorf', href: '/standorte/zehlendorf' },
        { label: 'Assistenza 24 ore su 24', href: '/leistungen/24-stunden-betreuung' },
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
    hook: 'In riva all’acqua, nella quiete.',
    hideInFooter: true,
    metaTitle: 'Assistenza Wannsee — cure in riva all’acqua',
    metaDescription: 'Assistenza privata a Wannsee: cure, vigilanza al capezzale e 24h nelle ville e proprietà sul Großer Wannsee. Affidabile e discreta.',
    h1: 'Assistenza a Wannsee — restare a casa in riva all’acqua',
    primaryKeyword: 'assistenza domiciliare Wannsee Berlino',
    detail: {
      intro: [
        'Wannsee è acqua, bosco e spazio. Tra il Großer Wannsee e la Havel si distendono ville generose, lotti sull’acqua e strade tranquille all’estremo margine sud-occidentale di Berlino. Chi qui abita ha per lo più scelto consapevolmente l’isolamento — e non vuole rinunciarvi nemmeno in età avanzata.',
        'Per l’assistenza questo significa: andiamo là dove il trasporto pubblico si dirada e le distanze si allungano. Residenti anziani ben radicati nelle zone sull’acqua sono qui la nostra clientela tipica — persone che vogliono restare nella loro casa sul lago finché è possibile.',
      ],
      sections: [
        {
          heading: 'Chi si rivolge a noi a Wannsee',
          list: [
            'Proprietari di ville anziani nelle zone sull’acqua e nel bosco, che vogliono essere assistiti a casa.',
            'Coppie in cui l’assistenza domestica prestata da un partner arriva ai propri limiti.',
            'Familiari che organizzano da lontano e hanno bisogno di un’assistenza fissa sul posto.',
            'Persone con elevato fabbisogno di assistenza, per le quali un’assistenza 24 ore su 24 nella propria casa è l’alternativa alla casa di riposo.',
          ],
        },
        {
          heading: 'Cosa caratterizza l’assistenza a Wannsee',
          stronglist: [
            { label: 'Posizioni isolate', text: 'I lotti sull’acqua si trovano spesso al termine di lunghi vialetti, qualche sentiero conduce attraverso il giardino fino alla riva. Il nostro team si prepara a questi percorsi e porta con sé ciò che serve per la giornata.' },
            { label: 'Vicinanza a un ospedale', text: 'Con l’Immanuel Krankenhaus una struttura si trova direttamente nell’Ortsteil. Per i passaggi tra ospedale e casa — ad esempio dopo una riabilitazione o un intervento — è un vero vantaggio, che sfruttiamo per l’assistenza.' },
            { label: 'Modelli 24 ore su 24', text: 'Per via della posizione e del fabbisogno spesso più elevato, qui le assistenze continuative sono più frequenti che altrove. Lavoriamo con team piccoli e fissi, così che anche di notte ci sia qualcuno di familiare.' },
          ],
        },
        {
          heading: 'Ospedali e tragitti',
          list: [
            'Immanuel Krankenhaus Wannsee (Königstr. 63) — nell’Ortsteil.',
            'Helios Klinikum Emil von Behring — circa 6 km.',
            'Klinikum Ernst von Bergmann Potsdam — circa 8 km.',
          ],
          trailingParagraphs: ['Da Moabit a Wannsee si calcolano circa 25-35 minuti a seconda del traffico, lungo la A115 e la AVUS.'],
        },
      ],
      faq: [
        { question: 'La nostra casa è proprio sull’acqua, con un lungo vialetto — venite lo stesso?', answer: 'Sì. Assistiamo regolarmente indirizzi in zone appartate sull’acqua. Importante è solo che conosciamo in anticipo l’accesso e la situazione dei parcheggi, così che ogni turno cominci senza intoppi.' },
        { question: 'Mio marito torna presto dall’Immanuel Krankenhaus. Potete assumervi l’assistenza?', answer: 'Volentieri. Poiché l’Immanuel si trova nell’Ortsteil, il passaggio dall’ospedale a casa si coordina bene. Organizziamo l’assistenza domiciliare in modo che segua senza interruzioni alle dimissioni.' },
        { question: 'Ne vale la pena per voi il tragitto da Moabit?', answer: 'Sì — assistiamo Wannsee di proposito. Con un tempo di percorrenza di 25-35 minuti pianifichiamo i turni in anticipo e in blocchi sensati; brevi visite di 20 minuti sono qui meno pratiche di interventi più lunghi e affidabili.' },
      ],
      cta: { text: 'Richiedere un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Nikolassee', href: '/standorte/nikolassee', note: 'confinante' },
        { label: 'Zehlendorf', href: '/standorte/zehlendorf' },
        { label: 'Kleinmachnow', href: '/standorte/kleinmachnow', note: 'oltre il confine cittadino' },
        { label: 'Assistenza 24 ore su 24', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Potsdam', href: '/standorte/potsdam', note: 'oltre la Havel' },
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
    hook: 'La città-giardino a nord.',
    hideInFooter: true,
    metaTitle: 'Assistenza Frohnau — la città-giardino a nord',
    metaDescription: 'Assistenza privata a Frohnau: cure, vigilanza al capezzale e 24h nella città-giardino a nord di Berlino. Affidabile anche da lontano.',
    h1: 'Assistenza a Frohnau — nella città-giardino a nord',
    primaryKeyword: 'assistenza domiciliare Frohnau Berlino',
    detail: {
      intro: [
        'Frohnau è l’Ortsteil più settentrionale di Berlino — progettato a tavolino nel 1910 come città-giardino, con ampie strade di case unifamiliari, molto verde e una quiete spiccata. Le case sono spesso in mano alla stessa famiglia da generazioni, i proprietari in pensione. Chi qui invecchia, di regola non vuole più lasciare la città-giardino.',
        'A dire il vero: Frohnau si trova all’estremo margine della nostra area di intervento. Dalla nostra sede di Moabit sono circa 25-35 minuti lungo la A111. Per questo qui pianifichiamo di proposito turni fissi e più lunghi, invece di brevi visite — così l’assistenza è affidabile e il tempo di percorrenza non pesa a ogni singolo intervento.',
      ],
      sections: [
        {
          heading: 'Chi si rivolge a noi a Frohnau',
          list: [
            'Proprietari di casa anziani nelle strade di case unifamiliari, che desiderano restare a casa.',
            'Coppie in pensione in cui un partner diventa non autosufficiente.',
            'Figli adulti che abitano più lontano e organizzano un’assistenza affidabile per i genitori a nord.',
            'Persone con demenza, per le quali la città-giardino familiare e tranquilla è un sostegno importante.',
          ],
        },
        {
          heading: 'Cosa caratterizza l’assistenza a Frohnau',
          stronglist: [
            { label: 'Casa e giardino', text: 'Qui l’assistenza si svolge quasi sempre nella propria casa con giardino. Vialetti, scale e spazi esterni fanno parte della quotidianità — orientiamo l’assistenza alla situazione abitativa reale.' },
            { label: 'Programmabilità invece di interventi spontanei', text: 'Per via della posizione periferica a nord lavoriamo con turni fissi e piccoli team. Questo dà tranquillità nello svolgimento e assicura che ci sia sempre qualcuno di familiare sul posto.' },
            { label: 'Casa vissuta con autodeterminazione', text: 'La clientela di Frohnau è per lo più fatta di persone autonome con idee chiare. Sosteniamo senza sostituirci, e manteniamo il più a lungo possibile le abitudini consuete.' },
          ],
        },
        {
          heading: 'Ospedali e tragitti',
          list: [
            'Vivantes Humboldt-Klinikum (Am Nordgraben, Reinickendorf) — 5-6 km.',
          ],
          trailingParagraphs: ['Da Moabit a Frohnau sono circa 25-35 minuti a seconda del traffico, lungo la A111. Frohnau è per noi al margine settentrionale — per il tragitto più lungo può, a seconda dell’entità, essere previsto un forfait di trasferta, che concordiamo in modo trasparente in anticipo.'],
        },
      ],
      faq: [
        { question: 'Frohnau è lontana, a nord — ci assistete lo stesso?', answer: 'Sì. Raggiungiamo Frohnau di proposito, ma pianifichiamo turni fissi e più lunghi. Così l’assistenza resta affidabile ed economicamente sensata, anche se il tragitto da Moabit dura circa mezz’ora.' },
        { question: 'Per la distanza è previsto un supplemento?', answer: 'A seconda dell’entità dell’intervento, per il lungo tragitto può essere previsto un forfait di trasferta. Glielo diciamo apertamente nel primo colloquio, prima che sia stipulato qualsiasi contratto — da noi non ci sono costi nascosti.' },
        { question: 'Potete fornire anche un’assistenza continuativa in casa?', answer: 'Sì. Proprio nelle posizioni periferiche gli interventi più lunghi o continuativi sono spesso la soluzione più pratica. Lavoriamo con piccoli team fissi, così che anche con un’assistenza 24 ore su 24 non ci siano di continuo volti nuovi in casa.' },
      ],
      cta: { text: 'Richiedere un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Moabit', href: '/standorte/moabit', note: 'la nostra sede' },
        { label: 'Assistenza 24 ore su 24', href: '/leistungen/24-stunden-betreuung' },
        { label: 'Accompagnamento nella demenza', href: '/themen/demenz-begleitung' },
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
    hook: 'Proprio al confine della città.',
    hideInFooter: true,
    metaTitle: 'Assistenza Kleinmachnow — al confine di Berlino',
    metaDescription: 'Assistenza privata a Kleinmachnow: cure, vigilanza al capezzale e 24h nel comune al confine di Berlino. Superiamo il confine cittadino.',
    h1: 'Assistenza a Kleinmachnow — al confine, nel Brandeburgo',
    primaryKeyword: 'assistenza domiciliare Kleinmachnow',
    detail: {
      intro: [
        'Kleinmachnow si trova nel Brandeburgo, nel circondario di Potsdam-Mittelmark — ma confina direttamente con Berlin-Zehlendorf. Il comune, con circa 20.000 abitanti, è cresciuto molto dopo il 1990: molte ville, case unifamiliari e famiglie benestanti che apprezzano la vicinanza a Berlino unita a più verde e più quiete. Una parte di questi nuovi arrivati è ormai in età pensionabile, un’altra parte ha sempre abitato qui.',
        'Per noi Kleinmachnow è un intervento oltre il confine cittadino. Poiché il comune si collega direttamente a Zehlendorf, è ben raggiungibile dalle nostre zone sud-occidentali — qui il confine tra Berlino e Brandeburgo è più una linea sulla carta che una distanza reale.',
      ],
      sections: [
        {
          heading: 'Chi si rivolge a noi a Kleinmachnow',
          list: [
            'Proprietari anziani delle numerose ville e case unifamiliari, che vogliono essere assistiti a casa.',
            'Famiglie trasferitesi dopo il 1990, i cui genitori diventano ora non autosufficienti.',
            'Coppie in cui l’assistenza domestica prestata da un partner ha bisogno di sollievo.',
            'Familiari che cercano un fornitore privato con collegamento berlinese, invece di una soluzione puramente regionale.',
          ],
        },
        {
          heading: 'Cosa caratterizza l’assistenza a Kleinmachnow',
          stronglist: [
            { label: 'Brandeburgo, ma vicino al confine', text: 'Kleinmachnow appartiene sotto il profilo amministrativo al Brandeburgo, ma è porta a porta con Zehlendorf. Per l’assistenza questo significa tragitti brevi dalle nostre sedi sud-occidentali — e comunque un ambiente con una quiete più da paese.' },
            { label: 'Posizioni con casa e giardino', text: 'L’indirizzo tipico di Kleinmachnow è una casa unifamiliare con terreno. Scale, giardino e vialetti fanno parte della quotidianità; orientiamo l’assistenza alla situazione abitativa concreta.' },
            { label: 'Chiarezza sui tragitti', text: 'Poiché attraversiamo il confine cittadino, pianifichiamo i turni con lungimiranza e in blocchi sensati. Così l’assistenza resta affidabile, senza che il tempo di percorrenza divori l’intervento.' },
          ],
        },
        {
          heading: 'Ospedali e tragitti',
          list: [
            'Helios Klinikum Emil von Behring (Zehlendorf) — 5-6 km, il più vicino grande ospedale per acuti.',
            'Ev. Krankenhaus Ludwigsfelde-Teltow — 6-8 km.',
            'Klinikum Ernst von Bergmann Potsdam — circa 12 km.',
          ],
          trailingParagraphs: ['Da Moabit a Kleinmachnow sono circa 25-40 minuti a seconda del traffico, lungo la A115. Poiché qui attraversiamo il confine cittadino di Berlino, a seconda dell’entità dell’intervento può essere previsto un forfait di trasferta — lo chiariamo in anticipo.'],
        },
      ],
      faq: [
        { question: 'Kleinmachnow è nel Brandeburgo — vi operate davvero?', answer: 'Sì. Attraversiamo regolarmente il confine cittadino verso Kleinmachnow. Poiché il comune confina direttamente con Zehlendorf, è ben raggiungibile dalle nostre zone sud-occidentali.' },
        { question: 'Quale ospedale è più vicino in caso di emergenza?', answer: 'Per l’assistenza in acuto il più vicino grande ospedale è di solito l’Helios Klinikum Emil von Behring a Zehlendorf, a soli 5-6 km. Per singole specialità entrano in gioco anche Potsdam o Ludwigsfelde-Teltow.' },
        { question: 'Il tragitto oltre il confine regionale costa di più?', answer: 'A seconda dell’entità dell’intervento può essere previsto un forfait di trasferta. Lo discutiamo apertamente nel primo colloquio, prima che Lei decida — senza voci nascoste.' },
      ],
      cta: { text: 'Richiedere un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Zehlendorf', href: '/standorte/zehlendorf', note: 'vicino al confine' },
        { label: 'Wannsee', href: '/standorte/wannsee' },
        { label: 'Potsdam', href: '/standorte/potsdam' },
        { label: 'Assistenza domiciliare per privati', href: '/leistungen/pflegedienst-selbstzahler' },
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
    hook: 'Capitale del Land, tra i laghi.',
    hideInFooter: true,
    metaTitle: 'Assistenza Potsdam — cure private nella capitale',
    metaDescription: 'Assistenza privata a Potsdam: cure, vigilanza al capezzale e 24h a Babelsberg, Berliner Vorstadt e sui laghi. Discreta anche da lontano.',
    h1: 'Assistenza a Potsdam — nella capitale del Land, tra i laghi',
    primaryKeyword: 'assistenza domiciliare Potsdam',
    detail: {
      intro: [
        'Potsdam è la capitale del Land Brandeburgo — una città extracircondariale con circa 180.000 abitanti, un centro storico, ampie zone lacustri e ricchi quartieri di ville come Babelsberg e la Berliner Vorstadt. In questi quartieri sui laghi e nelle tranquille strade residenziali vivono molte persone anziane e benestanti, che non vogliono rinunciare alla loro casa nemmeno in caso di bisogno di assistenza.',
        'Per noi Potsdam è, a dire il vero, il punto più lontano della nostra area di intervento: da Moabit sono circa 35-50 minuti a seconda del traffico, lungo la A115 e la AVUS. Assistiamo Potsdam di proposito — ma con turni fissi e più lunghi e, a seconda dell’entità, un forfait di trasferta discusso in modo trasparente. Per brevi visite la distanza è eccessiva; per un’assistenza affidabile e pianificata è ben praticabile.',
      ],
      sections: [
        {
          heading: 'Chi si rivolge a noi a Potsdam',
          list: [
            'Proprietari anziani nei quartieri di ville di Babelsberg e della Berliner Vorstadt, che desiderano restare a casa.',
            'Residenti delle tranquille zone lacustri a ovest della città, con esigenze assistenziali elevate.',
            'Familiari che cercano un fornitore privato e discreto con collegamento berlinese.',
            'Coppie in cui l’assistenza domestica prestata da un partner arriva ai propri limiti.',
          ],
        },
        {
          heading: 'Cosa caratterizza l’assistenza a Potsdam',
          stronglist: [
            { label: 'Grandi proprietà tranquille', text: 'L’indirizzo tipico a Babelsberg o nella Berliner Vorstadt è una casa ampia con giardino, spesso vicino all’acqua o a un parco. Adattiamo l’assistenza a questa situazione abitativa, invece di comprimerla in uno schema standard.' },
            { label: 'Un panorama ospedaliero proprio', text: 'Con il Klinikum Ernst von Bergmann, Potsdam ha in loco una grande struttura. Per i passaggi tra ospedale e casa — dopo un intervento o una riabilitazione — sfruttiamo i tragitti brevi all’interno della città.' },
            { label: 'Pianificazione invece di reazione', text: 'Per via della distanza da Moabit, a Potsdam lavoriamo con turni fissi e piccoli team. Questo rende l’assistenza affidabile e fa sì che ci sia sempre qualcuno di familiare sul posto.' },
          ],
        },
        {
          heading: 'Ospedali e tragitti',
          list: [
            'Klinikum Ernst von Bergmann (Charlottenstr. 72) — la struttura più grande della città, circa 1.100 posti letto.',
            'Oberlinklinik Babelsberg — specializzata in ortopedia.',
            'St. Josefs-Krankenhaus Potsdam-Sanssouci.',
          ],
          trailingParagraphs: ['Da Moabit a Potsdam si calcolano circa 35-50 minuti a seconda del traffico, lungo la A115 e la AVUS. Per questo tragitto più lungo può, a seconda dell’entità dell’intervento, essere previsto un forfait di trasferta, che concordiamo apertamente con Lei in anticipo.'],
        },
      ],
      faq: [
        { question: 'Potsdam è a una certa distanza da Berlino — vi assistete davvero lì?', answer: 'Sì, ma a dire il vero al margine della nostra area. Da Moabit sono 35-50 minuti. Per questo pianifichiamo Potsdam con turni fissi e più lunghi, invece di brevi visite — così l’assistenza è affidabile e il tempo di percorrenza è impiegato in modo sensato.' },
        { question: 'Per Potsdam è previsto un forfait di trasferta?', answer: 'A seconda dell’entità dell’intervento, sì. Le indichiamo le condizioni per intero nel primo colloquio, prima che Lei si impegni. Da noi non ci sono costi aggiuntivi nascosti.' },
        { question: 'Qual è da voi in loco l’ospedale più importante?', answer: 'Il Klinikum Ernst von Bergmann nella Charlottenstraße è, con circa 1.100 posti letto, la struttura più grande della città. Per l’ortopedia la Oberlinklinik a Babelsberg è un riferimento, insieme al St. Josefs-Krankenhaus a Sanssouci.' },
      ],
      cta: { text: 'Richiedere un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Wannsee', href: '/standorte/wannsee' },
        { label: 'Kleinmachnow', href: '/standorte/kleinmachnow' },
        { label: 'Grunewald', href: '/standorte/grunewald', note: 'oltre la Havel' },
        { label: 'Assistenza 24 ore su 24', href: '/leistungen/24-stunden-betreuung' },
      ],
    },
  },
};
