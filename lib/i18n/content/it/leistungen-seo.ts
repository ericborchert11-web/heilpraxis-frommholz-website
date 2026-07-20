import type { Overlay } from '../types';
import type { SeoLeistung } from '@/lib/leistungen-seo';

/**
 * Fassungen für it, gekeyt nach dem deutschen Slug. Was hier fehlt,
 * erscheint auf /it weiterhin auf Deutsch.
 *
 * `slug` sowie alle `href` in `cta` und `relatedLinks` bleiben unverändert:
 * Das sind deutsche Referenzpfade, die `localizedHref` beim Rendern übersetzt.
 */
export const LEISTUNGEN_SEO_IT: Overlay<SeoLeistung> = {
  // === Money Page 1: Sitzwachen Berlin =========================================
  'sitzwachen-berlin': {
    slug: 'sitzwachen-berlin',
    title: 'Vigilanza al capezzale Berlino',
    short: 'Presenza 1:1 in ospedale, hospice e a casa.',
    metaTitle: 'Vigilanza al capezzale Berlino – 1:1 ospedale e casa',
    metaDescription:
      'Vigilanze al capezzale professionali a Berlino: ospedale, psichiatria, hospice, a casa. Squadra esperta, disponibile a breve termine. Primo colloquio gratuito.',
    h1: 'Vigilanza al capezzale a Berlino — quando nessuno deve restare solo',
    primaryKeyword: 'vigilanza al capezzale Berlino',
    secondaryKeywords: [
      'assistenza notturna ospedale Berlino',
      'assistenza psichiatrica 1:1 Berlino',
      'veglia notturna Berlino',
    ],
    detail: {
      intro: [
        'Una vigilanza al capezzale (Sitzwache) significa questo: qualcuno è presente. Non per l\'assistenza medica — per quella ci sono i medici e il personale infermieristico. Ma per la presenza stessa. Per la sensazione che qualcuno resti quando la notte si fa lunga, quando si avvicina l\'operazione, quando la confusione arriva e passa e torna di nuovo.',
        'La Heilpraxis Frommholz organizza vigilanze al capezzale a Berlino — in ospedale, in psichiatria, nell\'hospice e a casa. Da oltre 15 anni siamo specializzati nell\'assistenza 1:1. Chi ha bisogno di una vigilanza al capezzale ha spesso già molto alle spalle. Comprendiamo che in questi momenti conta meno la competenza tecnica che l\'umanità — e i nostri collaboratori portano entrambe.',
        'Una parte dei nostri incarichi di vigilanza al capezzale la sosteniamo insieme alla nostra associazione partner senza scopo di lucro Leben Pflegen Reisen e.V. — soprattutto là dove, accanto alla competenza assistenziale, servono impegno volontario e fasi di presenza più lunghe.',
      ],
      sections: [
        {
          heading: 'Quando una vigilanza al capezzale è opportuna',
          paragraphs: [
            'Una vigilanza al capezzale è più di una sedia accanto al letto. Protegge, rassicura, previene il peggio. Situazioni tipiche in cui i nostri clienti ci chiamano:',
          ],
          stronglist: [
            {
              label: 'Dopo le operazioni',
              text: 'La confusione postoperatoria (delirium) è una delle complicanze più frequenti nei pazienti anziani. Una presenza familiare può ridurre il rischio di delirium e sostenere il decorso della guarigione.',
            },
            {
              label: 'In caso di rischio di caduta',
              text: 'Chi di notte diventa irrequieto, vuole alzarsi, non si orienta più, è a rischio di caduta. Una vigilanza al capezzale osserva, rassicura, aiuta ad alzarsi — e può prevenire cadute e le lesioni connesse, che altrimenti possono segnare un\'intera fase della vita.',
            },
            {
              label: 'Nella fase terminale',
              text: 'Quando è chiaro che la fine è vicina, molti familiari non vogliono che la persona cara se ne vada da sola. Ma non tutti possono restare al capezzale senza sosta. Noi assumiamo le ore notturne, i fine settimana, le fasi in cui Lei stesso ha bisogno di riposo.',
            },
            {
              label: 'Nelle crisi psichiatriche',
              text: 'Acuto pericolo per sé o per altri, fasi suicidarie, gravi episodi depressivi. Un\'assistenza 1:1 protegge — e in alcuni casi può aiutare a evitare un ricovero coatto.',
            },
            {
              label: 'In caso di demenza',
              text: 'Fasi di veglia notturna, rischio di allontanamento, disorientamento — una vigilanza al capezzale porta calma in una situazione che altrimenti logora i familiari.',
            },
          ],
        },
        {
          heading: 'Dove offriamo vigilanze al capezzale',
          paragraphs: [
            'Siamo attivi in tutta Berlino. La nostra sede a Moabit (Stephanstraße 46) si trova in posizione comoda nel centro della città — da qui raggiungiamo Charlottenburg in dieci minuti, Wilmersdorf in dodici, Zehlendorf in venticinque.',
            'Organizziamo vigilanze al capezzale in:',
          ],
          stronglist: [
            {
              label: 'Ospedali',
              text: 'Charité (tutte le sedi), cliniche Vivantes, Schlosspark-Klinik, Sankt Gertrauden, DRK Kliniken, Lazarus, Helios e tutti gli altri ospedali di Berlino.',
            },
            {
              label: 'Cliniche psichiatriche',
              text: 'Vivantes Wenckebach, St. Hedwig, Schlosspark-Klinik e tutte le cliniche per acuti e diurne dell\'area cittadina.',
            },
            {
              label: 'Hospice e reparti di cure palliative',
              text: 'in stretto coordinamento con l\'équipe presente.',
            },
            {
              label: 'Case di riposo',
              text: 'quando i familiari hanno bisogno di sollievo o quando una situazione particolare richiede un\'assistenza 1:1.',
            },
            {
              label: 'A casa',
              text: 'nell\'ambiente familiare, con tutto ciò che rende propria la propria casa.',
            },
          ],
        },
        {
          heading: 'Quanto costa da noi una vigilanza al capezzale',
          paragraphs: [
            'Le vigilanze al capezzale sono di norma una prestazione a pagamento privato. L\'assicurazione per la non autosufficienza (Pflegekasse) non le copre direttamente — in alcuni casi si può utilizzare l\'assistenza sostitutiva (Verhinderungspflege, § 39 SGB XI) o l\'importo di sollievo (Entlastungsbetrag, § 45b SGB XI), e su questo La consigliamo volentieri.',
            'Non indichiamo tariffe forfettarie, perché le situazioni sono troppo diverse. Una vigilanza notturna in ospedale si calcola diversamente da un accompagnamento di dodici ore a casa. Nel primo colloquio gratuito stabiliamo di che cosa ha bisogno e quanto costerà concretamente. Supplementi trasparenti secondo il § 3b EStG (25 % di notte, 50 % la domenica e nei giorni festivi) si applicano a ogni incarico.',
          ],
        },
        {
          heading: 'Che cosa sanno fare le nostre vigilanze al capezzale',
          paragraphs: [
            'La nostra squadra è mista: infermieri diplomati, ausiliari, pedagogisti sociali, operatori di assistenza con lunga esperienza psichiatrica. A seconda della situazione impieghiamo la qualifica adatta. Ciò che tutti hanno in comune:',
          ],
          list: [
            'Calma nelle situazioni impegnative',
            'Capacità di osservazione e di documentazione oggettiva',
            'Esperienza nella gestione di confusione, aggressività, paura',
            'Discrezione — ciò che si vede e si sente nell\'abitazione resta lì',
          ],
        },
      ],
      faq: [
        {
          question: 'Qual è la differenza tra una vigilanza al capezzale e un infermiere?',
          answer:
            'Una vigilanza al capezzale è presente, osserva, protegge e rassicura — ma non svolge attività infermieristiche come il cambio di posizione, la cura delle ferite o la somministrazione di farmaci. Gli infermieri fanno entrambe le cose; una vigilanza al capezzale si specializza nella presenza.',
        },
        {
          question: 'Le vigilanze al capezzale possono venire anche di notte?',
          answer:
            'Sì. Le veglie notturne sono una delle nostre richieste più frequenti. Arriviamo all\'orario concordato e restiamo fino al mattino — se necessario anche per più notti consecutive, con turni all\'interno di una squadra stabile.',
        },
        {
          question: 'Con quanta rapidità è disponibile una vigilanza al capezzale?',
          answer:
            'Nelle emergenze spesso entro 24 ore, talvolta lo stesso giorno. Per incarichi pianificabili con più anticipo (ad esempio dopo un\'operazione) ci bastano 2-3 giorni di preavviso.',
        },
        {
          question: 'Le vigilanze al capezzale sono qualificate dal punto di vista professionale?',
          answer:
            'A seconda della situazione impieghiamo qualifiche diverse. Nelle situazioni delicate dal punto di vista medico interviene un infermiere diplomato. Dove basta la sola presenza è spesso sufficiente un operatore di assistenza esperto. Lo chiariamo nel primo colloquio.',
        },
        {
          question: 'Possiamo far rimborsare la vigilanza al capezzale tramite l\'assicurazione per la non autosufficienza?',
          answer:
            'No, non direttamente — fatturiamo esclusivamente come prestazione a pagamento privato. In presenza di un livello di assistenza (Pflegegrad) può però utilizzare l\'importo di sollievo (125 € al mese) o l\'assistenza sostitutiva e presentare Lei stesso la nostra fattura. La consigliamo su ciò che è possibile.',
        },
        {
          question: 'Chi è responsabile se accade qualcosa?',
          answer:
            'Disponiamo di un\'assicurazione di responsabilità civile professionale. I danni causati dai nostri collaboratori vengono gestiti tramite questa polizza.',
        },
      ],
      cta: { text: 'Richiedi un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Assistenza in ospedale Berlino',
          href: '/leistungen/klinik-begleitung-berlin',
          note: 'vigilanze al capezzale specificamente in ospedale',
        },
        {
          label: 'Servizio di assistenza a pagamento privato',
          href: '/leistungen/pflegedienst-selbstzahler',
          note: 'il nostro orientamento di base',
        },
        {
          label: 'Assistenza 1:1 per situazioni complesse',
          href: '/leistungen/systemsprenger-betreuung',
          note: 'in decorsi psichiatrici complessi',
        },
      ],
    },
  },

  // === Money Page 2: Systemsprenger-Betreuung ==================================
  'systemsprenger-betreuung': {
    slug: 'systemsprenger-betreuung',
    title: 'Assistenza 1:1 per situazioni complesse',
    short: 'Assistenza 1:1 nei decorsi psichiatrici complessi.',
    metaTitle: 'Assistenza 1:1 Berlino – Situazioni psichiatriche complesse',
    metaDescription:
      'Assistenza 1:1 per pazienti con comorbilità, emergenze psichiatriche e persone che nel sistema ordinario non trovano posto. Squadra esperta a Berlino.',
    h1: 'Assistenza 1:1 per situazioni complesse — quando nulla altro funziona',
    primaryKeyword: 'assistenza 1:1 psichiatrica Berlino',
    secondaryKeywords: [
      'assistenza 1:1 psichiatria Berlino',
      'doppia diagnosi assistenza domiciliare Berlino',
      'supporto crisi psichiatrica Berlino',
    ],
    detail: {
      intro: [
        'La parola tedesca per questo lavoro è «Systemsprenger» — letteralmente, qualcuno che «fa saltare il sistema». È un termine duro. Non ci piace particolarmente — ma nomina qualcosa di reale: ci sono persone i cui bisogni sono così complessi che le strutture consuete non riescono a contenerle. Comorbilità (malattia psichiatrica e dipendenza, malattia psichiatrica e trauma, disturbi della personalità con autolesionismo). Ricoveri ripetuti in situazione di crisi. Relazioni con i servizi di aiuto che si interrompono di continuo. Diagnosi che dovrebbero escludersi a vicenda e che invece compaiono insieme.',
        'Siamo specializzati in questo. Non perché «sappiamo fare tutto», ma perché abbiamo l\'atteggiamento, l\'esperienza e le risorse per affrontare esattamente queste situazioni. Da oltre 15 anni assistiamo a Berlino persone che altri fornitori rifiutano.',
      ],
      sections: [
        {
          heading: 'Chi assistiamo',
          paragraphs: [
            'Non esiste un cliente tipo — ma ci sono costellazioni ricorrenti. Alcuni esempi anonimizzati dal nostro lavoro:',
          ],
          stronglist: [
            {
              label: 'Comorbilità psichiatrica e dipendenza',
              text: 'Un giovane adulto con gravi episodi psicotici e, insieme, abuso di cannabis e alcol. Le terapie residenziali per la dipendenza falliscono a causa della malattia psichiatrica, i ricoveri psichiatrici a causa del consumo. Noi accompagniamo a casa — con un quadro chiaro, contatti regolari, una figura di riferimento fissa.',
            },
            {
              label: 'Acuto pericolo per sé nell\'ambiente domestico',
              text: 'Una donna di poco più di 50 anni, grave depressione, dimessa dalla clinica dopo diversi tentativi di suicidio. I familiari non possono essere presenti 24 ore su 24, e lei non vuole un nuovo ricovero. Predisponiamo un\'assistenza di 24 ore su turni alternati — finché la terapia ambulatoriale non fa effetto.',
            },
            {
              label: 'Fallimento della vita in comunità assistita',
              text: 'Una persona con disturbo borderline di personalità che in ogni comunità assistita va in escalation, ma che a casa può essere stabilizzata — con una figura di riferimento fissa e una squadra costante.',
            },
            {
              label: 'Demenza con grave aggressività',
              text: 'Una persona con demenza avanzata, ancora fisicamente in forze, che nessuna casa di riposo riesce più a tenere — ma gestibile nella propria abitazione con un\'assistenza calma ed esperta.',
            },
          ],
        },
        {
          heading: 'Che cosa caratterizza la nostra assistenza in questi casi',
          stronglist: [
            {
              label: 'Una squadra piccola e stabile',
              text: 'Non lavoriamo con collaboratori a contratto in continuo cambiamento. Per ogni cliente ci sono 2-4 figure di riferimento che si alternano. La fiducia cresce perché tornano gli stessi volti.',
            },
            {
              label: 'Un atteggiamento chiaro, non pietà',
              text: 'Siamo cordiali ma coerenti. Chi provoca non riceve controprovocazione. Chi mette alla prova trova limiti affidabili. Questo è — paradossalmente — spesso ciò di cui i nostri clienti hanno più bisogno.',
            },
            {
              label: 'Esperienza nella gestione delle crisi',
              text: 'La nostra squadra conosce l\'aggressività, la suicidalità, gli episodi psicotici, l\'autolesionismo. Non andiamo nel panico, disinneschiamo, documentiamo, manteniamo il contatto con il medico curante o con l\'amministratore di sostegno.',
            },
            {
              label: 'Collegamento con la rete dei servizi di aiuto',
              text: 'Collaboriamo strettamente con cliniche, psichiatri del territorio, amministratori di sostegno, servizi socio-psichiatrici. Non siamo un sostituto di un\'équipe terapeutica professionale — ne siamo il braccio esteso nella quotidianità domestica.',
            },
          ],
        },
        {
          heading: 'Chi lo paga',
          paragraphs: [
            'L\'assistenza per situazioni così complesse è costosa — e raramente viene finanziata attraverso i canali ordinari. Le vie possibili:',
          ],
          list: [
            'Pagamento privato da parte della famiglia — quando le possibilità economiche lo consentono, spesso la via più rapida.',
            'Aiuto all\'integrazione secondo il SGB IX — in caso di disabilità psichica riconosciuta, da richiedere all\'ufficio distrettuale competente.',
            'Assistenza sociale secondo il SGB XII — nei casi di particolare difficoltà, quando gli altri mezzi sono esauriti.',
            'Assicurazioni private — quando esistono diritti di copertura.',
          ],
        },
        {
          heading: 'Che cosa non offriamo',
          paragraphs: ['Siamo onesti: non possiamo fare tutto.'],
          stronglist: [
            {
              label: 'Misure coercitive',
              text: 'non rientrano nel nostro incarico — se qualcuno rappresenta un pericolo acuto per gli altri e non accetta volontariamente l\'assistenza, ciò appartiene a una clinica con reparto chiuso.',
            },
            {
              label: 'Disintossicazione',
              text: 'non la facciamo — appartiene a cliniche specializzate nelle dipendenze.',
            },
            {
              label: 'Psicoterapia acuta prolungata',
              text: 'non è il nostro ruolo — accompagniamo la terapia, non la sostituiamo.',
            },
          ],
        },
      ],
      faq: [
        {
          question: 'Accogliete anche clienti che altri servizi di assistenza hanno rifiutato?',
          answer:
            'Sì — spesso sono proprio queste le richieste che ci arrivano. Esaminiamo ogni caso singolarmente nel primo colloquio.',
        },
        {
          question: 'Potete assumere clienti con amministratore di sostegno?',
          answer:
            'Sì. Collaboriamo regolarmente con amministratori di sostegno (professionali e familiari). Il contratto viene allora stipulato con l\'amministratore in qualità di rappresentante legale.',
        },
        {
          question: 'Con quanta rapidità potete subentrare?',
          answer:
            'Per i subentri acuti dalla clinica di norma entro 3-7 giorni, a seconda della complessità del contesto. In caso di emergenza è possibile un subentro più rapido.',
        },
        {
          question: 'Quanto costa all\'incirca al mese un\'assistenza 1:1 di 24 ore per situazioni così complesse?',
          answer:
            'Varia molto, a seconda della qualifica necessaria, del contesto e della complessità. Un\'assistenza 1:1 continuativa su turni alternati si colloca nettamente al di sopra dell\'assistenza domiciliare classica — il calcolo preciso lo riceve nel primo colloquio, dopo aver chiarito il fabbisogno.',
        },
        {
          question: 'Che cosa succede se un cliente diventa violento?',
          answer:
            'Abbiamo protocolli di escalation chiari. In caso di pericolo acuto avvisiamo il medico d\'emergenza ed eventualmente la polizia. Fa parte della nostra esperienza — situazioni del genere sono impegnative, ma non insolite.',
        },
        {
          question: 'I clienti devono acconsentire all\'assistenza?',
          answer:
            'Sì — da noi non esiste assistenza imposta. Se qualcuno non ci vuole nella propria abitazione, non siamo competenti. In questi casi possiamo però consigliare i familiari su come eventualmente promuovere la nomina di un amministratore di sostegno.',
        },
      ],
      cta: { text: 'Richiedi un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Servizio di assistenza a pagamento privato',
          href: '/leistungen/pflegedienst-selbstzahler',
          note: 'il nostro orientamento di base',
        },
        {
          label: 'Vigilanza al capezzale Berlino',
          href: '/leistungen/sitzwachen-berlin',
          note: 'accompagnamento 1:1 per periodi più brevi',
        },
      ],
    },
  },

  // === Money Page 3: Pflegedienst für Selbstzahler =============================
  'pflegedienst-selbstzahler': {
    slug: 'pflegedienst-selbstzahler',
    title: 'Servizio di assistenza a pagamento privato',
    short: 'Assistenza esclusiva senza burocrazia delle casse.',
    metaTitle: 'Assistenza privata a pagamento Berlino – 1:1 esclusiva',
    metaDescription:
      'Servizio di assistenza privata a Berlino. Discreto, flessibile, piccola squadra stabile. Nessuna burocrazia delle casse. Primo colloquio senza impegno.',
    h1: 'Un servizio di assistenza a pagamento privato — l\'assistenza come la desidera',
    primaryKeyword: 'assistenza privata a pagamento Berlino',
    secondaryKeywords: [
      'assistenza infermieristica privata Berlino',
      'assistenza anziani a pagamento Berlino',
      'assistenza domiciliare privata Berlino',
    ],
    detail: {
      intro: [
        'L\'assistenza tramite la cassa ha una sua logica — calcolata al minuto, rendicontabile, spesso con personale che cambia e con fasce orarie fisse. Funziona per molti, ma non per tutti.',
        'Chi riceve assistenza a pagamento privato può applicare altri criteri: tempo. Continuità. Discrezione. Una piccola squadra che conosce davvero chi Lei è e di che cosa ha bisogno. Appuntamenti che si adattano alla Sua vita — non all\'ordine del giro di un servizio di assistenza.',
        'La Heilpraxis Frommholz è specializzata esattamente in questo tipo di assistenza. Fatturiamo esclusivamente a pagamento privato. È una scelta consapevole — ci consente di lavorare senza pressioni sui costi e senza burocrazia, e di assistere i nostri clienti come è giusto, non come sarebbe di volta in volta rendicontabile.',
      ],
      sections: [
        {
          heading: 'Chi si rivolge a noi come cliente privato',
          paragraphs: [
            'I clienti privati non si distinguono per un singolo criterio — ma per il loro atteggiamento. Ciò che li accomuna:',
          ],
          list: [
            'Vogliono sapere chi arriva — e desiderano che sia il più possibile sempre la stessa persona.',
            'Apprezzano la discrezione — nessun logo sull\'auto, nessun evidente veicolo assistenziale nel vialetto.',
            'Sono disposti a pagare un prezzo di mercato per una buona assistenza — ma in cambio si aspettano di non entrare a far parte di un sistema a cottimo.',
            'Non vogliono che si decida sopra la loro testa — ma che si pianifichi insieme a loro.',
          ],
        },
        {
          heading: 'Che cosa è diverso da noi',
          stronglist: [
            {
              label: 'Una squadra piccola e stabile',
              text: 'Per ogni cliente ci sono 2-4 collaboratori fissi. Sanno come la signora Müller ama il caffè. Sanno che il signor Schulze la mattina non vuole essere subito interpellato. Questa continuità è impagabile — ed è il nostro standard, non un desiderio speciale.',
            },
            {
              label: 'Tempo invece che ritmo',
              text: 'Invece di interventi assistenziali di 15 minuti lavoriamo per blocchi: 2 ore, 4 ore, mezze giornate, giornate intere, turni continuativi. Così resta spazio per la conversazione a colazione, per la passeggiata nel pomeriggio, per il cambio di posizione tranquillo, senza fretta.',
            },
            {
              label: 'La discrezione è il fondamento del rapporto',
              text: 'I nostri collaboratori arrivano in abiti non appariscenti, spesso con l\'auto propria. Per clienti in ambiti esposti (ministeri federali, diplomazia, mondo economico) prendiamo accordi particolari.',
            },
            {
              label: 'Flessibilità senza sovrapprezzo',
              text: 'Se un appuntamento deve essere spostato, si può. Se da 4 ore si passa a 6 ore, si può. Conteggiamo il tempo effettivo, non forfait interpretati a Suo svantaggio.',
            },
            {
              label: 'Niente casse, niente burocrazia',
              text: 'Riceve una fattura al mese. Chiaramente suddivisa, con i supplementi secondo il § 3b EStG indicati in modo trasparente. Nessuna trattativa con le casse, nessuna discussione sui livelli di assistenza (Pflegegrad), nessuna valutazione del servizio medico (Medizinischer Dienst).',
            },
          ],
        },
        {
          heading: 'Quanto costa',
          paragraphs: [
            'Non abbiamo tariffe forfettarie, perché i nostri clienti hanno esigenze diverse. L\'accompagnamento a ore, le veglie notturne e l\'assistenza continuativa di 24 ore vengono calcolati a seconda della qualifica della persona impiegata e dell\'ora del giorno. I supplementi secondo il § 3b EStG (25 % di notte dalle 22:00 alle 06:00, 50 % la domenica e nei giorni festivi) sono indicati in modo trasparente.',
            'Nel primo colloquio gratuito prima ascoltiamo — poi facciamo una proposta scritta con una tariffa oraria concreta, un piano dei turni e un ordine di grandezza mensile. Lei decide con calma.',
          ],
        },
        {
          heading: 'Come si inizia',
          paragraphs: [
            'Primo colloquio (gratuito, circa 60 minuti) a casa Sua o per telefono. Lei ci descrive la situazione, noi valutiamo se siamo le persone giuste. In caso affermativo, facciamo una proposta scritta con numero di ore, piano dei turni e prezzo. Lei decide con calma. Se accetta, iniziamo entro 5-10 giorni.',
          ],
        },
      ],
      faq: [
        {
          question: 'Perché nessun rapporto con le casse?',
          answer:
            'Perché sarebbe una logica del tutto diversa. L\'assistenza tramite cassa è calcolata al minuto, vincolata a cataloghi fissi di prestazioni, con forfait che restano al di sotto del reale costo del personale. Noi vogliamo fare buona assistenza — questo è possibile solo se il prezzo viene concordato liberamente.',
        },
        {
          question: 'Possiamo comunque utilizzare l\'assegno di assistenza?',
          answer:
            'Sì. In presenza di un livello di assistenza, l\'assegno di assistenza (Pflegegeld) viene versato sul Suo conto — può usarlo per pagare in parte la nostra fattura. È una Sua decisione, non una questione della cassa.',
        },
        {
          question: 'I vostri collaboratori sono infermieri diplomati?',
          answer:
            'La nostra squadra è mista: infermieri diplomati (formazione triennale), ausiliari (formazione di uno o due anni), pedagogisti sociali, operatori di assistenza qualificati. A seconda del fabbisogno impieghiamo la qualifica adatta.',
        },
        {
          question: 'Siete raggiungibili anche di notte e nel fine settimana?',
          answer:
            'Telefonicamente sì — in caso di necessità 24 ore su 24. Gli interventi nel servizio del fine settimana fanno parte della nostra offerta.',
        },
        {
          question: 'Che cosa succede in caso di malattia della persona impiegata?',
          answer:
            'Dalla squadra fissa subentra una sostituzione di fiducia. Non si trova mai davanti alla porta una persona del tutto estranea.',
        },
        {
          question: 'Potete operare anche nelle case di riposo?',
          answer:
            'Sì, come assistenza aggiuntiva — con il consenso della struttura. È più frequente di quanto si pensi: le famiglie integrano l\'assistenza della casa di riposo con i nostri collaboratori, ad esempio per un accompagnamento di alcune ore nel pomeriggio.',
        },
      ],
      cta: { text: 'Richiedi un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Vigilanza al capezzale Berlino',
          href: '/leistungen/sitzwachen-berlin',
          note: 'accompagnamento 1:1 per periodi più brevi',
        },
        {
          label: 'Assistenza 1:1 per situazioni complesse',
          href: '/leistungen/systemsprenger-betreuung',
          note: 'per casi complessi',
        },
      ],
    },
  },

  // === Money Page 4: 24-Stunden-Betreuung =====================================
  '24-stunden-betreuung': {
    slug: '24-stunden-betreuung',
    title: 'Assistenza 24 ore su 24',
    short: 'Tutto il giorno su turni alternati — corretta secondo il diritto tedesco.',
    metaTitle: 'Assistenza 24 ore Berlino – A casa tutto il giorno',
    metaDescription:
      'Assistenza continuativa a casa Sua: piccola squadra stabile, infermieri tedeschi, corretta secondo il diritto del lavoro. Nessun mercato grigio.',
    h1: 'Assistenza 24 ore su 24 a Berlino — senza mercato grigio',
    primaryKeyword: 'assistenza 24 ore Berlino',
    secondaryKeywords: [
      'assistenza domiciliare 24 ore Berlino',
      'assistenza convivente legale Berlino',
      'assistenza continuativa a casa Berlino',
    ],
    detail: {
      intro: [
        'Molti fornitori pubblicizzano un\'«assistenza 24 ore su 24» e con ciò intendono una singola persona che vive in casa per giorni o settimane di fila. Dal punto di vista giuridico, in quasi tutte le configurazioni si tratta di mercato grigio — legge sull\'orario di lavoro, salario minimo, previdenza sociale, disciplina delle pause. Sentenze recenti (Corte federale del lavoro, Corte di giustizia europea) lo rendono chiaro: questo modello non mantiene ciò che promette. I committenti rispondono sempre più spesso personalmente.',
        'Noi facciamo diversamente.',
        'Da noi assistenza 24 ore su 24 significa: una piccola squadra stabile di infermieri e operatori di assistenza tedeschi su turni alternati. Regolarmente assunti, regolarmente retribuiti, con supplementi notturni e domenicali secondo il § 3b EStG indicati in modo trasparente. Nessun costo nascosto, nessun rischio giuridico per Lei come committente.',
      ],
      sections: [
        {
          heading: 'Come si presenta concretamente il nostro modello a turni',
          paragraphs: ['Un esempio tipico — la realtà è sempre individuale:'],
          stronglist: [
            { label: 'Turno mattutino 06:00–14:00', text: 'Infermiera Anna.' },
            { label: 'Turno pomeridiano 14:00–22:00', text: 'Infermiere Bernhard.' },
            {
              label: 'Turno notturno 22:00–06:00',
              text: 'Infermiera Carla (reperibilità o veglia attiva).',
            },
          ],
        },
        {
          heading: 'Chi è nella squadra',
          paragraphs: ['Le nostre squadre 24 ore su 24 sono composte da:'],
          stronglist: [
            {
              label: 'Infermieri diplomati',
              text: 'per l\'assistenza specialistica (farmaci, cura delle ferite, consulenza ai familiari).',
            },
            {
              label: 'Ausiliari e operatori di assistenza',
              text: 'per l\'accompagnamento quotidiano (igiene, mobilizzazione, attività, pasti).',
            },
            {
              label: 'Facoltativamente: pedagogisti sociali o accompagnatori formati per la demenza',
              text: 'in caso di necessità.',
            },
          ],
        },
        {
          heading: 'Quanto costa da noi l\'assistenza 24 ore su 24',
          paragraphs: [
            'Un\'assistenza continuativa con tre turni al giorno, sette giorni su sette, è un investimento mensile considerevole. Quanto costi concretamente dipende da tre fattori: se la notte è svolta in reperibilità o in veglia attiva, quale qualifica è necessaria sul piano assistenziale (infermiere diplomato, ausiliario, operatore di assistenza) e quali esigenze particolari vi siano (ventilazione, gestione delle ferite, comportamenti impegnativi).',
            'Nel primo colloquio (60–90 minuti, gratuito) esaminiamo concretamente il contesto e forniamo un calcolo scritto con un ordine di grandezza mensile — nessun forfait, nessuna sorpresa.',
          ],
        },
        {
          heading: 'A che cosa fare attenzione con altri fornitori',
          paragraphs: [
            'Sul mercato ci sono numerosi intermediari che offrono «personale 24 ore dall\'Europa dell\'Est». Questi modelli si muovono su un terreno giuridico fragile:',
          ],
          stronglist: [
            {
              label: 'Legge sull\'orario di lavoro',
              text: 'Una persona non può legalmente essere «presente per 24 ore». Pause e periodi di riposo devono essere rispettati.',
            },
            {
              label: 'Salario minimo',
              text: 'Con 24 ore di reperibilità al giorno, in molti modelli vengono di fatto pagate tariffe orarie nettamente inferiori al salario minimo.',
            },
            {
              label: 'Previdenza sociale',
              text: 'In caso di distacco di lavoratori autonomi da altri Paesi dell\'UE sussistono notevoli rischi di conformità.',
            },
            {
              label: 'Responsabilità',
              text: 'Se la persona assistente si rompe l\'anca andando in bagno, nel dubbio risponde il committente.',
            },
          ],
        },
      ],
      faq: [
        {
          question: 'Quante persone ci sono in totale nella squadra?',
          answer:
            'Per un\'assistenza 24 ore su 24 e 7 giorni su 7 servono 4-6 persone nella squadra stabile — così sono coperti anche ferie, malattia e fine settimana. Ma davanti a Lei, per ogni turno, c\'è sempre una sola persona.',
        },
        {
          question: 'Il personale cambia spesso?',
          answer:
            'No. Lavoriamo con rapporti di lavoro a lungo termine. Se un membro della squadra viene a mancare, lo sostituiamo prima da un bacino ampliato di colleghi che conoscono già il Suo familiare — prima che si aggiunga una persona davvero nuova.',
        },
        {
          question: 'Possiamo concordare anche turni di 12 ore?',
          answer:
            'Sì, in misura limitata (ad esempio per lunghi cambi tra giorno e notte). Verifichiamo se è realizzabile dal punto di vista del diritto del lavoro.',
        },
        {
          question: 'Chi è responsabile se la persona assistente rompe qualcosa?',
          answer:
            'Disponiamo di un\'assicurazione di responsabilità civile professionale. I danni vengono gestiti tramite noi — non tramite la Sua assicurazione sulla casa.',
        },
        {
          question: 'Possiamo iniziare a breve termine?',
          answer:
            'Per i subentri acuti (ad esempio la dimissione dalla clinica) ci servono 5-10 giorni. Con un orizzonte di pianificazione più lungo possiamo procedere in modo più personalizzato.',
        },
        {
          question: 'Che cosa succede se il nostro familiare muore?',
          answer:
            'In caso di decesso il contratto termina automaticamente il giorno stesso. Le ore già prestate vengono ancora fatturate, dopodiché non sono più dovuti costi — nessuna durata residua, nessun termine di preavviso.',
        },
        {
          question: 'Potete venire anche per 3-4 settimane dopo un\'operazione?',
          answer:
            'Sì. Gli incarichi 24 ore su 24 a tempo determinato (riabilitazione postoperatoria, fase di convalescenza) sono una richiesta frequente. La prenotazione minima è di una settimana.',
        },
      ],
      cta: { text: 'Richiedi un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Servizio di assistenza a pagamento privato',
          href: '/leistungen/pflegedienst-selbstzahler',
          note: 'il nostro orientamento di base',
        },
        {
          label: 'Assistenza in ospedale Berlino',
          href: '/leistungen/klinik-begleitung-berlin',
          note: 'quando l\'accompagnamento continuativo avviene in ospedale',
        },
        {
          label: 'Veglie notturne Berlino',
          href: '/leistungen/nachtwachen-berlin',
          note: 'quando deve essere coperta solo la notte',
        },
        {
          label: 'Consulenza sull\'assistenza',
          href: '/leistungen/pflegeberatung-berlin',
          note: 'su livello di assistenza e finanziamento',
        },
      ],
    },
  },
  // === Money Page 5: Pflegeberatung Berlin =====================================
  'pflegeberatung-berlin': {
    slug: 'pflegeberatung-berlin',
    title: 'Consulenza sull\'assistenza Berlino',
    short: 'Indipendente, comprensibile, con lo sguardo a ciò che aiuta davvero.',
    metaTitle: 'Consulenza assistenza Berlino – Livelli e prestazioni',
    metaDescription:
      'Consulenza sull\'assistenza a Berlino: richiedere il livello di assistenza, capire le prestazioni, preparare la valutazione. Primo colloquio gratuito.',
    h1: 'Consulenza sull\'assistenza a Berlino — chiara, indipendente, comprensibile',
    primaryKeyword: 'consulenza assistenza Berlino',
    secondaryKeywords: [
      'richiesta livello di assistenza Berlino',
      'consulenza Pflegegrad Berlino',
      'aiuto valutazione assistenza Berlino',
    ],
    detail: {
      intro: [
        'L\'assistenza è diventata complicata. Livelli di assistenza (Pflegegrade), assistenza sostitutiva (Verhinderungspflege), budget di sollievo, prestazione combinata, forfait per ausili, assistenza residenziale di breve durata, assistenza diurna, supplemento per comunità abitative, indennità di sostegno all\'assistenza — persino gli esperti a volte perdono il filo. Noi no.',
        'E poiché sappiamo quanto denaro va perduto quando si presentano le domande sbagliate o si manca il momento giusto, offriamo una consulenza sull\'assistenza che serve davvero — con un accento che la distingue dalla consulenza standard delle casse: partiamo dal bisogno, non dal catalogo delle prestazioni.',
      ],
      sections: [
        {
          heading: 'Su che cosa consigliamo concretamente',
          stronglist: [
            {
              label: 'Domanda di livello di assistenza e valutazione del servizio medico',
              text: 'La prepariamo all\'appuntamento con il servizio medico (Medizinischer Dienst), aiutiamo a documentare il fabbisogno di aiuto, formuliamo con Lei la domanda. In caso di esito insufficiente sosteniamo il ricorso e la richiesta di un livello superiore.',
            },
            {
              label: 'Ottimizzazione delle prestazioni con un livello di assistenza esistente',
              text: 'Verifichiamo se tutte le prestazioni spettanti vengono effettivamente utilizzate — spesso restano inutilizzati diverse migliaia di euro all\'anno, perché il budget di sollievo, l\'assistenza sostitutiva o il forfait per ausili non vengono sfruttati.',
            },
            {
              label: 'Gestire i passaggi',
              text: 'Quando si avvicina la dimissione dall\'ospedale, quando si cambia l\'assistenza diurna o il servizio ambulatoriale, quando bisogna cercare un posto in una struttura — aiutiamo a compiere i passi giusti nell\'ordine giusto.',
            },
            {
              label: 'Procure e disposizioni',
              text: 'Procura preventiva, disposizione sull\'amministrazione di sostegno, disposizione del paziente — che cosa serve davvero, come deve essere formulato, dove va depositato.',
            },
            {
              label: 'Adeguamenti edilizi',
              text: 'Quali ristrutturazioni finanzia l\'assicurazione per la non autosufficienza (Pflegekasse) (fino a 4.000 € per intervento)? Quali ausili paga la cassa malattia? Dove conviene la domanda, dove no?',
            },
            {
              label: 'Conflitti all\'interno della famiglia',
              text: 'Quando i fratelli litigano sull\'assistenza dei genitori, quando le aspettative si scontrano, quando i sensi di colpa bloccano le decisioni — ascoltiamo, mettiamo ordine, proponiamo vie d\'uscita.',
            },
          ],
        },
        {
          heading: 'Che cos\'è la consulenza sull\'assistenza secondo il § 7a SGB XI (e che cosa facciamo diversamente)',
          paragraphs: [
            'Dal 2009 le casse per la non autosufficienza sono obbligate a offrire una consulenza gratuita sull\'assistenza. Questa consulenza è una prestazione importante — ma ha debolezze strutturali:',
          ],
          list: [
            'I consulenti sono dipendenti della cassa — non possono raccomandare in modo del tutto indipendente.',
            'Gli appuntamenti sono spesso brevi (45-60 minuti) e orientati a temi standard.',
            'Le costellazioni complesse (più livelli di assistenza in una famiglia, assicurazione internazionale, passaggi tra forme di assistenza) non vengono trattate in profondità.',
          ],
        },
        {
          heading: 'Quanto costa',
          paragraphs: [
            'Il primo colloquio è gratuito e senza impegno. Per una consulenza approfondita, visite a domicilio, accompagnamento alla valutazione e assistenza nella presentazione delle domande calcoliamo in base all\'impegno — l\'ordine di grandezza glielo indichiamo direttamente nel primo colloquio e lo mettiamo per iscritto. Non abbiamo tariffe forfettarie, perché le esigenze sono troppo diverse.',
          ],
        },
        {
          heading: 'Quando la consulenza sull\'assistenza conviene in modo particolare',
          list: [
            'Prima del primo appuntamento con il servizio medico — la preparazione decide spesso una differenza di uno o due livelli di assistenza.',
            'In caso di livello di assistenza respinto o troppo basso — qui va rispettato il termine per il ricorso (4 settimane!).',
            'In caso di dimissione dall\'ospedale — le prime settimane sono decisive per la stabilità dell\'assistenza.',
            'In caso di improvviso fabbisogno di assistenza (ictus, caduta) — una domanda tempestiva garantisce prestazioni retroattive dalla data della domanda.',
            'In caso di conflitti familiari sull\'assistenza dei genitori.',
          ],
        },
      ],
      faq: [
        {
          question: 'Siete consulenti dell\'assistenza secondo il § 7a SGB XI?',
          answer:
            'Offriamo una consulenza privata e indipendente sull\'assistenza. Il riconoscimento formale secondo il § 7a di solito non è rilevante per i nostri clienti, perché non fatturiamo tramite la cassa. Qualora desiderasse la consulenza ufficiale secondo il § 7a, La indirizziamo volentieri.',
        },
        {
          question: 'Potete venire anche a casa nostra?',
          answer:
            'Sì — le visite a domicilio sono anzi tipiche. Molte cose si possono valutare solo sul posto.',
        },
        {
          question: 'Aiutate anche con il ricorso sul livello di assistenza?',
          answer:
            'Sì. Formuliamo i ricorsi e, se necessario, possiamo partecipare anche alla nuova valutazione.',
        },
        {
          question: 'Vi intendete anche di assicurazione privata per la non autosufficienza?',
          answer:
            'Sì — gli assicuratori privati hanno spesso strutture tariffarie e diritti di sussidio diversi. Conosciamo i principali assicuratori privati per la non autosufficienza a Berlino.',
        },
        {
          question: 'Quanto tempo passa dalla domanda al livello di assistenza?',
          answer:
            'Per legge 5 settimane dalla data della domanda, a Berlino attualmente spesso 6-8 settimane. Le prestazioni vengono concesse retroattivamente alla data della domanda — per questo conviene presentarla tempestivamente.',
        },
        {
          question: 'Qual è la differenza tra consulenza sull\'assistenza e coordinamento dell\'assistenza?',
          answer:
            'Consulenza = trasmissione strutturata di conoscenze e opzioni. Coordinamento = gestione attiva della situazione assistenziale (fissare appuntamenti, parlare con i servizi, presentare domande). Offriamo entrambi — prenotabili separatamente.',
        },
        {
          question: 'Posso detrarre dalle tasse la consulenza sull\'assistenza?',
          answer:
            'I costi dell\'assistenza sono detraibili come oneri straordinari oltre determinate soglie. Di norma lo sono anche i costi di consulenza. Chiarisca i dettagli con il Suo consulente fiscale.',
        },
      ],
      cta: { text: 'Richiedi un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Richiedere il livello di assistenza',
          href: '/themen/pflegegrad-beantragen',
          note: 'la guida concreta',
        },
        {
          label: 'La valutazione del servizio medico',
          href: '/themen/mdk-begutachtung',
          note: 'che cosa La aspetta',
        },
        {
          label: 'Assistenza sostitutiva',
          href: '/themen/verhinderungspflege',
          note: 'il diritto spesso sottovalutato',
        },
      ],
    },
  },
  // === Money Page 6: Nachtwachen Berlin =======================================
  'nachtwachen-berlin': {
    slug: 'nachtwachen-berlin',
    title: 'Veglie notturne Berlino',
    short: 'Una presenza vigile quando la notte si fa lunga.',
    metaTitle: 'Veglia notturna Berlino – Accompagnamento sicuro',
    metaDescription:
      'Veglie notturne a Berlino per ospedale, hospice e a casa. Squadra esperta, disponibile subito. Anche per demenza, rischio di caduta, fine della vita.',
    h1: 'Veglie notturne a Berlino — accompagnamento sicuro attraverso la notte',
    primaryKeyword: 'veglia notturna Berlino',
    secondaryKeywords: [
      'assistenza notturna a domicilio Berlino',
      'veglia notturna demenza Berlino',
      'prevenzione cadute di notte',
    ],
    detail: {
      intro: [
        'Di notte molte cose diventano più difficili. Confusione, dolore, paura, mancanza di respiro — ciò che di giorno era gestibile, al buio diventa una minaccia. Chi è solo, di notte è ancora più solo. Chi assiste, di notte è ancora più sfinito.',
        'Una veglia notturna (Nachtwache) della Heilpraxis Frommholz assume esattamente queste ore. Dalle 20:00 o 22:00 fino alle 06:00 o 08:00 del mattino. All\'occorrenza una volta sola, per una determinata fase, oppure in modo continuativo.',
      ],
      sections: [
        {
          heading: 'Quando una veglia notturna aiuta',
          stronglist: [
            {
              label: 'Demenza con irrequietezza notturna',
              text: 'Alzarsi, vagare, confusione tra giorno e notte — questo logora i familiari nel giro di poche settimane. Una veglia notturna intercetta le fasi notturne e restituisce sonno alla famiglia.',
            },
            {
              label: 'Rischio di caduta',
              text: 'Chi di notte vuole alzarsi e non è più stabile non va lasciato senza sorveglianza a letto. Una veglia notturna è presente quando ci si alza, aiuta, rassicura — e può prevenire cadute che altrimenti cambiano tutto.',
            },
            {
              label: 'Accompagnamento nelle ultime notti',
              text: 'Alcune persone muoiono in una determinata notte. Nessuno può prevederlo, ma tutti possono prepararsi a essere presenti. Una veglia notturna subentra quando la famiglia deve dormire nel frattempo.',
            },
            {
              label: 'Dopo la dimissione dalla clinica',
              text: 'Le prime notti a casa dopo un ricovero sono spesso le più critiche. Una veglia notturna fa da ponte finché non torna la stabilità.',
            },
            {
              label: 'In caso di acuto carico psichico',
              text: 'Fasi suicidarie, gravi episodi depressivi, stati d\'ansia — una presenza vigile protegge e allo stesso tempo alleggerisce i familiari.',
            },
          ],
        },
        {
          heading: 'Veglia notturna attiva o veglia notturna di reperibilità?',
          paragraphs: ['Distinguiamo due modelli:'],
          stronglist: [
            {
              label: 'Veglia notturna attiva (vigile)',
              text: 'La collaboratrice resta sveglia per tutta la durata, osserva attivamente, documenta regolarmente. Utile nelle situazioni acute (fase terminale, grave confusione, post-operatorio).',
            },
            {
              label: 'Veglia notturna di reperibilità',
              text: 'La collaboratrice dorme in una stanza attigua (o in una poltrona reclinabile nella stessa stanza), ma viene svegliata a ogni rumore. Utile per clienti che di solito dormono ininterrottamente, ma non devono restare soli.',
            },
          ],
        },
        {
          heading: 'Quanto costa una veglia notturna',
          paragraphs: [
            'La tariffa oraria dipende dal fatto che si tratti di una veglia notturna attiva (sveglia per tutta la durata, con documentazione) o di una veglia di reperibilità (sonno nella stanza accanto, risveglio all\'occorrenza). E dalla qualifica impiegata — infermiere diplomato o operatore di assistenza esperto.',
            'Nel primo colloquio chiariamo il fabbisogno concreto e Le indichiamo la tariffa oraria nonché la somma complessiva prevista per il turno pianificato. I supplementi notturni e domenicali secondo il § 3b EStG sono già inclusi nelle tariffe e indicati in modo trasparente.',
          ],
        },
      ],
      faq: [
        {
          question: 'Con quanto anticipo si può organizzare una veglia notturna?',
          answer: 'In situazioni acute già lo stesso giorno, normalmente con 24-48 ore di preavviso.',
        },
        {
          question: 'Possiamo prenotare anche una sola notte?',
          answer:
            'Sì. Le veglie di una singola notte sono possibili, così come singole notti nel fine settimana o singole settimane per la fase di riabilitazione.',
        },
        {
          question: 'Che cosa succede in caso di emergenza medica?',
          answer:
            'La veglia notturna avvisa il medico d\'emergenza (112), informa i familiari, resta con la persona fino all\'arrivo dei soccorsi. In caso di peggioramento della respirazione, perdita di coscienza, sospetto ictus o infarto si interviene immediatamente.',
        },
        {
          question: 'La veglia notturna dorme in un letto?',
          answer:
            'Nella veglia notturna vigile: no. Nella veglia di reperibilità: sì — in una stanza di reperibilità o in una poltrona reclinabile. Ciò è corretto secondo il diritto del lavoro.',
        },
        {
          question: 'Ci serve una stanza separata per la veglia notturna?',
          answer:
            'Per la reperibilità basta un divano, una poltrona, una poltrona reclinabile — non serve un letto. Per la veglia notturna vigile è sufficiente una sedia nella stanza.',
        },
        {
          question: 'Quali attività svolge la veglia notturna?',
          answer:
            'Cambio di posizione, accompagnamento in bagno, gestione dell\'incontinenza, somministrazione di farmaci secondo il piano, offerta di bevande, rassicurazione. Attività mediche più complesse (cambio di medicazioni, iniezioni) solo se è stato prenotato personale adeguatamente qualificato.',
        },
      ],
      cta: { text: 'Richiedi un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Vigilanza al capezzale Berlino',
          href: '/leistungen/sitzwachen-berlin',
          note: 'accompagnamento 1:1 puntuale di giorno e di notte',
        },
        {
          label: 'Vigilanza al capezzale in hospice',
          href: '/leistungen/hospiz-sitzwachen',
          note: 'nell\'accompagnamento alla fine della vita',
        },
        {
          label: 'Assistenza 24 ore su 24',
          href: '/leistungen/24-stunden-betreuung',
          note: 'quando non deve essere coperta solo la notte',
        },
      ],
    },
  },
  // === Money Page 7: Hospiz-Sitzwachen ========================================
  'hospiz-sitzwachen': {
    slug: 'hospiz-sitzwachen',
    title: 'Vigilanza al capezzale in hospice',
    short: 'Presenza nelle ultime ore — per la persona e per i familiari.',
    metaTitle: 'Vigilanza al capezzale hospice Berlino – Ultime ore',
    metaDescription:
      'Vigilanze al capezzale in hospice, nel reparto di cure palliative o a casa. Discrete, esperte, dignitose. Sollievo per i familiari nelle ultime ore.',
    h1: 'Vigilanza al capezzale in hospice — qualcuno resta',
    primaryKeyword: 'vigilanza al capezzale hospice Berlino',
    secondaryKeywords: [
      'accompagnamento fine vita Berlino',
      'veglia palliativa Berlino',
      'assistenza ultime ore Berlino',
    ],
    detail: {
      intro: [
        'C\'è un compito particolare nel nostro lavoro: essere presenti quando qualcuno se ne va. Non come figura medica — per questo ci sono le équipe di cure palliative. Ma come presenza vigile e quieta, che non chiede più che ascoltare, tenere, attendere.',
        'Le vigilanze al capezzale (Sitzwache) in hospice si distinguono dalle altre in un punto decisivo: non hanno più un obiettivo medico. Non si tratta che qualcosa migliori. Si tratta del fatto che la persona non sia sola — e che la famiglia non si spezzi nel frattempo.',
        'In questo lavoro cooperiamo strettamente con la nostra associazione partner Leben Pflegen Reisen e.V., la cui rete di volontari integra le ore della Heilpraxis proprio negli accompagnamenti alla fine della vita — e non lascia sola la famiglia quando i nostri turni retribuiti giungono al termine.',
      ],
      sections: [
        {
          heading: 'Dove offriamo vigilanze al capezzale in hospice',
          stronglist: [
            {
              label: 'Nell\'hospice',
              text: 'La maggior parte degli hospice di Berlino (Ricam Hospiz, Hospiz Schöneberg-Steglitz, Hospiz Wilmersdorf, Christophorus Hospiz, Lazarus Hospiz e altri) ha proprie strutture di vigilanza al capezzale volontaria. Noi ci aggiungiamo come integrazione — spesso per clienti che desiderano un accompagnamento continuativo, che va oltre l\'offerta del volontariato.',
            },
            {
              label: 'Nel reparto di cure palliative',
              text: 'Veniamo in ospedale, in accordo con l\'équipe infermieristica. Non siamo un\'offerta concorrente — alleggeriamo il personale infermieristico assumendo la presenza 1:1, raramente possibile nella routine del reparto.',
            },
            {
              label: 'A casa',
              text: 'Molte persone vogliono morire a casa — e possono farlo, se la famiglia riesce a organizzarlo. Veniamo allora spesso per le ore notturne, per i fine settimana, per le fasi in cui i familiari stessi sentono lo sfinimento.',
            },
          ],
        },
        {
          heading: 'Che cosa fanno le vigilanze al capezzale in hospice (e che cosa no)',
          stronglist: [
            {
              label: 'Fanno',
              text: 'restare sveglie, osservare, parlare sottovoce, leggere ad alta voce, tacere, tenere la mano, inumidire le labbra, stare in silenzio. Chiamano i familiari quando è il momento. Chiamano l\'équipe di cure palliative quando la sintomatologia cambia.',
            },
            {
              label: 'Non fanno',
              text: 'regolare gli antidolorifici (lo fa il medico), svolgere l\'assistenza in senso stretto (lo fa il servizio di assistenza), offrire un conforto che suoni falso. Non parlano di religione se non è la persona morente a farlo. Non piangono ad alta voce quando ciò che serve è tenere la posizione.',
            },
          ],
        },
        {
          heading: 'Che cosa distingue i nostri collaboratori in questo lavoro',
          paragraphs: [
            'La vigilanza al capezzale in hospice è un compito particolare. Impieghiamo colleghi che:',
          ],
          list: [
            'hanno esperienza dell\'accompagnamento alla fine della vita (un tirocinio in hospice, esperienza assistenziale, una formazione all\'elaborazione del lutto).',
            'sono calmi, davvero calmi — non silenziosi per insicurezza, ma quieti per indole.',
            'hanno elaborato lutti propri, così che non sia il loro dolore a riempire la stanza.',
            'non si agitano di fronte ai cambiamenti fisici della fase terminale.',
          ],
          trailingParagraphs: [
            'Accompagnare qualcuno mentre muore non è un lavoro per principianti. Lo affidiamo solo a collaboratori esperti.',
          ],
        },
        {
          heading: 'Quanto costano le vigilanze al capezzale in hospice',
          paragraphs: [
            'Le vigilanze al capezzale alla fine della vita cadono spesso in giornate già costose, in una fase già costosa. Applichiamo una tariffa ridotta per l\'accompagnamento alla fine della vita, inferiore al nostro standard — la somma esatta per un turno notturno o per un accompagnamento di più giorni gliela indichiamo nel primo colloquio.',
            'I supplementi notturni (25 %) e quelli domenicali e festivi (50 %) secondo il § 3b EStG sono indicati in modo trasparente.',
          ],
        },
      ],
      faq: [
        {
          question: 'Potete venire nell\'hospice anche se lì ci sono già delle vigilanze?',
          answer:
            'Sì — in accordo con l\'équipe dell\'hospice. Ci consideriamo un\'integrazione, non un sostituto. Spesso portiamo una presenza aggiuntiva proprio nelle ultime 24 ore, perché le vigilanze volontarie non sono disponibili in modo continuativo.',
        },
        {
          question: 'Con quanta rapidità potete venire, quando diventa chiaro che la fine è vicina?',
          answer:
            'Se abbiamo un preavviso di 24 ore, sì. In situazioni davvero acute (poche ore) ci proviamo, ma non sempre possiamo garantirlo.',
        },
        {
          question: 'I vostri collaboratori parlano con la persona morente della morte?',
          answer:
            'Solo se è la persona stessa a introdurre l\'argomento. Noi ascoltiamo. Non diamo impulso a temi che non siamo in grado di valutare.',
        },
        {
          question: 'Potete aiutare anche dopo il decesso?',
          answer:
            'Se desiderato, restiamo nelle prime ore dopo il decesso. Aiutiamo a chiamare il medico d\'emergenza per la constatazione del decesso, siamo presenti per la famiglia, effettuiamo la consegna all\'impresa di pompe funebri. Per l\'elaborazione del lutto nelle settimane successive indirizziamo a servizi specializzati.',
        },
        {
          question: 'Vi intendete di diverse tradizioni religiose?',
          answer:
            'Rispettiamo ogni tradizione. In presenza di riti specifici (ad esempio l\'usanza musulmana della lavatura da parte dei familiari, le liturgie ortodosse, le usanze ebraiche della Shiva) chiediamo alla famiglia indicazioni chiare. Impariamo in fretta, ma non diamo nulla per scontato.',
        },
        {
          question: 'Potete accompagnare anche processi di morte non religiosi?',
          answer:
            'Naturalmente. La maggior parte dei nostri accompagnamenti alla fine della vita è laica. Non imponiamo a nessuno nulla di religioso che non voglia.',
        },
      ],
      cta: { text: 'Richiedi un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Vigilanza al capezzale Berlino',
          href: '/leistungen/sitzwachen-berlin',
          note: 'l\'offerta generale',
        },
        {
          label: 'Cure palliative a casa',
          href: '/themen/palliativ-zuhause',
          note: 'approfondimento',
        },
        {
          label: 'Veglie notturne Berlino',
          href: '/leistungen/nachtwachen-berlin',
          note: 'quando servono solo le ore notturne',
        },
      ],
    },
  },
  // === Money Page 8: Reisebegleitung für Senioren =============================
  'reisebegleitung-senioren': {
    slug: 'reisebegleitung-senioren',
    title: 'Accompagnamento di viaggio per anziani',
    short: 'Viaggiare in sicurezza — con assistenza medica, se necessario.',
    metaTitle: 'Accompagnamento viaggio anziani – Viaggi assistiti',
    metaDescription:
      'Accompagnamento di viaggio per anziani con partenza da Berlino: treno, aereo, auto. Accompagnamento medico possibile. Discreto, esperto, personalizzato.',
    h1: 'Accompagnamento di viaggio per anziani — in viaggio sicuri',
    primaryKeyword: 'accompagnamento di viaggio anziani Berlino',
    secondaryKeywords: [
      'accompagnamento medico in viaggio Germania',
      'infermiere accompagnatore viaggio Berlino',
      'rimpatrio sanitario a Berlino',
    ],
    detail: {
      intro: [
        'Viaggiare non è più scontato in età avanzata. Le distanze si allungano, le scale si fanno più ripide, le coincidenze più strette. Una convalescenza dopo un\'operazione all\'estero, una visita di famiglia nella Germania meridionale, l\'ultimo viaggio insieme al coniuge malato — in situazioni come queste un accompagnamento esperto è spesso ciò che rende possibile il viaggio.',
        'La Heilpraxis Frommholz offre accompagnamento di viaggio per anziani con partenza da Berlino — con qualifica infermieristica quando necessario, oppure come semplice aiuto pratico al viaggio. L\'organizzazione avviene in cooperazione con la nostra associazione partner senza scopo di lucro Leben Pflegen Reisen e.V., che da anni pianifica e accompagna viaggi per persone non autosufficienti.',
      ],
      sections: [
        {
          heading: 'Che cosa facciamo negli accompagnamenti di viaggio',
          stronglist: [
            {
              label: 'Organizzare andata e ritorno',
              text: 'Biglietti ferroviari, prenotazioni dei posti, servizio per sedia a rotelle, gestione dei bagagli, coincidenze, all\'occorrenza un hotel a metà strada. Ci occupiamo della logistica, Lei deve solo voler arrivare.',
            },
            {
              label: 'Accompagnare durante il viaggio',
              text: 'Viaggiamo con Lei — dall\'inizio alla fine. Aiutiamo a salire e scendere, con il pasto nel vagone ristorante, con la sosta all\'area di servizio. Custodiamo i biglietti, traduciamo allo sportello, rassicuriamo quando la situazione si fa concitata.',
            },
            {
              label: 'Assistenza medica durante il viaggio',
              text: 'In presenza di bisogni medici (cura delle ferite, gestione dei farmaci, trasporto di ossigeno, somministrazione di insulina) impieghiamo un infermiere qualificato come accompagnatore.',
            },
            {
              label: 'Trasferimenti ospedalieri',
              text: 'Quando un familiare deve essere riportato a Berlino da un ospedale all\'estero, lo organizziamo in collaborazione con servizi di trasporto sanitario — noi siamo l\'accompagnatore umano che segue il paziente da letto a letto.',
            },
          ],
        },
        {
          heading: 'Quali viaggi accompagniamo',
          list: [
            'Viaggi di riposo e recupero classici — ad esempio soggiorni termali, visite di famiglia in Germania o in Europa.',
            'Viaggi con finalità medica — ricoveri, spostamenti per la riabilitazione, visite specialistiche.',
            'Rientri a casa — da case di riposo o ospedali, di nuovo nell\'ambiente familiare.',
            'Ultimi viaggi — quando c\'è il desiderio di rivedere ancora una volta un luogo particolare (ad esempio il luogo di nascita, la tomba di famiglia, un posto del cuore).',
            'Viaggi di ritorno dall\'estero — ad esempio da una vacanza interrotta dalla malattia.',
          ],
        },
        {
          heading: 'Come è organizzato un accompagnamento di viaggio',
          stronglist: [
            {
              label: 'Primo colloquio e pianificazione',
              text: 'Prima comprendiamo di che cosa si tratta, poi pianifichiamo. Può avvenire per telefono o di persona.',
            },
            {
              label: 'Preparazione',
              text: 'Verifichiamo le questioni assicurative (assicurazione sanitaria di viaggio, polizze per l\'estero), chiariamo situazioni mediche particolari con il medico di famiglia o la clinica, procuriamo i documenti di trasporto.',
            },
            {
              label: 'Svolgimento',
              text: 'La preleviamo a casa. Restiamo fino alla destinazione o fino alla consegna alla successiva persona responsabile (ad esempio parenti, clinica, concierge dell\'hotel).',
            },
            {
              label: 'Attività successive',
              text: 'Se necessario, organizziamo il viaggio di ritorno o l\'assistenza a destinazione.',
            },
          ],
        },
        {
          heading: 'Quanto costa un accompagnamento di viaggio',
          paragraphs: [
            'Qui il calcolo si fa complesso — dipende da durata, tragitto e qualifica. Un accompagnamento di viaggio all\'interno della Germania senza bisogni medici si calcola diversamente da un viaggio internazionale con infermiere diplomato o da un trasferimento ospedaliero con collegamento al trasporto sanitario. Dopo il primo colloquio Le facciamo una proposta scritta con tariffa giornaliera e somma complessiva.',
            'Le spese di viaggio (treno, aereo, hotel) sono a carico del committente separatamente. Viaggiamo nella stessa classe della persona da accompagnare.',
          ],
        },
      ],
      faq: [
        {
          question: 'Potete viaggiare anche all\'estero con noi?',
          answer:
            'Sì — nell\'area Schengen senza difficoltà, in altri Paesi con un po\' di anticipo per le questioni di visto e assicurazione.',
        },
        {
          question: 'Che cosa succede se le condizioni del cliente peggiorano durante il viaggio?',
          answer:
            'In caso di peggioramento ci rivolgiamo immediatamente alla più vicina assistenza medica (medico d\'emergenza, ospedale locale). Restiamo con la persona e informiamo i familiari.',
        },
        {
          question: 'Sapete gestire anche viaggiatori in sedia a rotelle?',
          answer:
            'Naturalmente. Organizziamo il servizio per sedia a rotelle delle ferrovie, i punti di assistenza, i permessi di parcheggio. All\'occorrenza portiamo leggeri ausili portatili per alzarsi.',
        },
        {
          question: 'Con quanto anticipo va prenotato un accompagnamento di viaggio?',
          answer:
            'All\'interno della Germania da 2 settimane di preavviso, a livello internazionale da 4-6 settimane. I trasferimenti ospedalieri acuti possono essere organizzati anche in 2-3 giorni.',
        },
        {
          question: 'Accompagnate anche viaggi di persone con un livello di assistenza?',
          answer:
            'Sì — in ogni livello di assistenza (Pflegegrad), purché la persona sia idonea al viaggio (lo chiariamo in anticipo con il medico di famiglia e il cliente). Con livelli di assistenza più elevati impieghiamo sempre infermieri diplomati.',
        },
        {
          question: 'Che cosa succede se il viaggio deve essere prolungato?',
          answer:
            'Prolunghiamo all\'occorrenza — un prolungamento scritto viene confermato via e-mail. Le tariffe giornaliere continuano ad applicarsi.',
        },
      ],
      cta: { text: 'Richiedi un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Servizio di assistenza a pagamento privato',
          href: '/leistungen/pflegedienst-selbstzahler',
          note: 'il nostro orientamento di base',
        },
        {
          label: 'Accompagnamento in ospedale',
          href: '/themen/krankenhaus-begleitung',
          note: 'durante i ricoveri',
        },
        {
          label: 'Vigilanza al capezzale Berlino',
          href: '/leistungen/sitzwachen-berlin',
          note: 'per l\'accompagnamento 1:1 in reparto',
        },
      ],
    },
  },

  // === Money Page 9: Klinik-Begleitung Berlin ==================================
  'klinik-begleitung-berlin': {
    slug: 'klinik-begleitung-berlin',
    title: 'Assistenza in ospedale Berlino',
    short: 'Accompagnamento 1:1 in ospedale — quando i familiari non possono essere presenti in ogni momento.',
    metaTitle: 'Assistenza in ospedale Berlino — 1:1 in reparto',
    metaDescription:
      'Assistenza privata in ospedale a Berlino: quando gli infermieri seguono 18 pazienti, noi siamo 1:1 per il Suo familiare. Demenza, cadute, dopo operazioni.',
    h1: 'Assistenza in ospedale a Berlino — quando i familiari non possono essere presenti in ogni momento',
    primaryKeyword: 'assistenza in ospedale Berlino',
    secondaryKeywords: [
      'vigilanza privata in ospedale Berlino',
      'accompagnamento demenza ospedale Berlino',
      'veglia notturna post-operatoria Berlino',
      'prevenzione cadute dopo intervento',
    ],
    detail: {
      intro: [
        'Un ricovero in ospedale è per gli anziani spesso una situazione eccezionale — un ambiente estraneo, personale che cambia, lunghe attese al pulsante di chiamata. Nella routine del reparto il personale infermieristico assiste spesso 18 o più pazienti contemporaneamente; una presenza 1:1 è raramente possibile.',
        'Accompagniamo il Suo familiare privatamente in ospedale: in preparazione a una riabilitazione, nella notte dopo un\'operazione, in caso di demenza o rischio di caduta, durante degenze prolungate. A ore o 24 ore su 24 — come integrazione al personale della clinica, non come suo sostituto.',
      ],
      sections: [
        {
          heading: 'Che cosa facciamo concretamente',
          stronglist: [
            {
              label: 'Essere presenti quando il personale non può',
              text: 'Il personale infermieristico assiste spesso 18 o più pazienti contemporaneamente durante un turno. Noi siamo presenti 1:1 — in modo continuativo, vigili, osservando.',
            },
            {
              label: 'Prevenzione delle cadute dopo un\'operazione',
              text: 'Soprattutto di notte dopo l\'anestesia, in caso di confusione, in un ambiente estraneo. Restiamo accanto al letto e aiutiamo ad alzarsi, prima che accada qualcosa.',
            },
            {
              label: 'Accompagnamento della demenza in ospedale',
              text: 'Conosciamo la gestione della fuga dal letto, della perdita di orientamento, del delirium postoperatorio. Una presenza calma riduce nettamente lo stress e il bisogno di contenzioni o sedazione.',
            },
            {
              label: 'Aiutare a mangiare, offrire da bere',
              text: 'Ciò che il personale della clinica per mancanza di tempo spesso non riesce a fare con calma — soprattutto con i malati di demenza, che semplicemente «dimenticano» di mangiare.',
            },
            {
              label: 'Il pulsante di chiamata sotto controllo, punto di riferimento per personale e medici',
              text: 'Trasmissione delle osservazioni, mediazione durante la visita, promemoria per le domande che nella routine ospedaliera vanno spesso perdute.',
            },
            {
              label: 'Accompagnamento a esami e trasferimenti',
              text: 'Il paziente non resta solo in corridoio o durante l\'attesa — restiamo con lui.',
            },
            {
              label: 'Sollievo per la famiglia',
              text: 'Non deve correre ogni sera dopo il lavoro. Sa che qualcuno è presente.',
            },
          ],
        },
        {
          heading: 'Quando ha senso?',
          paragraphs: ['Quattro situazioni tipiche in cui le famiglie ci chiamano:'],
          stronglist: [
            {
              label: 'Dopo un\'operazione programmata',
              text: 'Le prime 2-5 notti per sicurezza — la fase con il più alto rischio di delirium e di caduta.',
            },
            {
              label: 'In caso di demenza o confusione',
              text: 'Accompagnamento continuativo per l\'intera degenza, perché l\'ambiente ospedaliero spesso peggiora nettamente la demenza.',
            },
            {
              label: 'Durante degenze prolungate (oltre una settimana)',
              text: 'A giornate o a ore, dove i familiari non possono essere presenti di continuo.',
            },
            {
              label: 'Nel pronto soccorso',
              text: 'Supporto a breve termine, quando nessuno della famiglia può arrivare abbastanza in fretta.',
            },
          ],
        },
        {
          heading: 'Che cosa ci distingue',
          stronglist: [
            {
              label: 'Infermieri esperti, non personale ausiliario',
              text: 'L\'assistenza in ospedale è impegnativa. Questi incarichi da noi vengono affidati solo a personale con adeguata esperienza professionale — capacità di osservazione, modi calmi, gestione della confusione e dei familiari, valutazione professionale delle osservazioni da riferire al personale della clinica.',
            },
            {
              label: 'Rapporto con il personale infermieristico e i medici',
              text: 'Sappiamo come muoverci nella routine ospedaliera senza intralciare. Ci annunciamo all\'accettazione e alla direzione infermieristica, concordiamo gli orari di presenza, ci integriamo nella routine del reparto.',
            },
            {
              label: 'Discreti e rispettosi della dignità',
              text: 'Non parliamo di altri pazienti, integriamo l\'équipe del reparto con rispetto, ci facciamo da parte quando la famiglia è presente.',
            },
          ],
        },
      ],
      faq: [
        {
          question: 'Quanto costa un\'assistenza privata in ospedale a Berlino?',
          answer:
            'I costi dipendono dal numero di ore, dalla quota diurna e notturna e dalla qualifica necessaria. Non indichiamo tariffe forfettarie, perché le situazioni sono molto diverse. Nel primo colloquio gratuito prima ascoltiamo — poi facciamo una proposta concreta e trasparente.',
        },
        {
          question: 'La cassa malattia si fa carico di un\'assistenza in ospedale tramite un servizio di assistenza?',
          answer:
            'Nella maggior parte dei casi no. La cassa malattia obbligatoria paga l\'assistenza medica in ospedale, ma non un\'ulteriore assistenza 1:1 tramite un servizio esterno. Vi sono eccezioni per il «rooming-in» dei bambini e in rari casi particolari. Per gli adulti con demenza, rischio di caduta o particolare bisogno di assistenza, l\'assistenza privata in ospedale è di norma una prestazione a pagamento privato. Alcune assicurazioni integrative private rimborsano in parte — La preghiamo di chiarirlo in anticipo.',
        },
        {
          question: 'Che cosa può fare concretamente un accompagnamento privato in ospedale?',
          answer:
            'Essere presente, tenere sotto controllo il pulsante di chiamata e il paziente, aiutare a mangiare e bere, assistere nei cambi di posizione, rassicurare in caso di confusione, informare personale infermieristico e medici sulle osservazioni, accompagnare agli esami. Non sostituiamo il personale della clinica — lo integriamo con una figura di riferimento costantemente presente. Le attività mediche (somministrazione di farmaci, cura delle ferite, cambio di medicazioni) restano al personale della clinica.',
        },
        {
          question: 'Mio padre dopo l\'operazione è confuso (delirium) — che cosa possiamo fare?',
          answer:
            'Il delirium postoperatorio riguarda soprattutto gli anziani e compare spesso nelle prime notti dopo un\'operazione. La misura più efficace è una presenza calma e familiare — gli studi mostrano che le vigilanze al capezzale (Sitzwache) possono ridurre nettamente il bisogno di contenzioni e sedazione. Se Lei stesso non può essere presente di continuo, ce ne occupiamo noi. Soprattutto nelle ore notturne, quando la confusione spesso si aggrava.',
        },
        {
          question: 'Mia madre ha la demenza e deve andare in ospedale — come possiamo aiutare?',
          answer:
            'I ricoveri sono particolarmente gravosi per le persone con demenza: ambiente estraneo, routine mancanti, molti volti sconosciuti. Un accompagnamento costante riduce nettamente l\'ansia, la fuga dal letto e il rischio di caduta. Se la famiglia non può essere presente di continuo, ci occupiamo noi dell\'accompagnamento — conosciamo la gestione della demenza e ci coordiniamo strettamente con il personale della clinica. Vi rientra anche l\'aiuto a mangiare, che con la demenza viene spesso «dimenticato».',
        },
        {
          question: 'Con quanta rapidità potete venire?',
          answer:
            'Per le degenze programmate (operazione, riabilitazione) è meglio qualche giorno di preavviso. Nelle situazioni acute (pronto soccorso, bisogno improvviso) cerchiamo di organizzare un primo accompagnamento entro 24 ore — a seconda del giorno della settimana e dell\'ora anche più rapidamente. Ci chiami e discuteremo che cosa è possibile.',
        },
        {
          question: 'L\'ospedale può ammettere un accompagnatore privato?',
          answer:
            'Sì. I familiari e gli accompagnatori da loro incaricati hanno in linea di principio accesso al paziente. Naturalmente ci annunciamo all\'accettazione e al personale infermieristico e concordiamo gli orari di presenza. La maggior parte delle cliniche berlinesi conosce il modello e collabora bene. Nelle stanze a più letti concordiamo il rispetto per gli altri pazienti.',
        },
        {
          question: 'Potete assumere anche una sola notte?',
          answer:
            'Sì. Molti dei nostri incarichi sono esattamente questo: una, due o tre notti subito dopo un\'operazione, quando il rischio di caduta o di confusione è più alto. Accompagnamenti più lunghi di diverse settimane li facciamo allo stesso modo.',
        },
        {
          question: 'In quali ospedali operate?',
          answer:
            'Accompagniamo in tutte le cliniche di Berlino — Charité, Helios, Vivantes, DRK, Park-Klinik Weissensee, St. Joseph, Schlosspark-Klinik, St. Gertrauden e tutte le altre. Il fulcro della nostra area di attività è l\'ovest di Berlino (Zehlendorf, Grunewald, Charlottenburg, Wilmersdorf, Dahlem, Schmargendorf, Westend), ma siamo attivi anche a Mitte, Moabit, Tiergarten e nei dintorni.',
        },
        {
          question: 'Chi svolge concretamente l\'incarico — tirocinanti o personale esperto?',
          answer:
            'Infermieri esperti con adeguata qualifica. L\'assistenza in ospedale è impegnativa: capacità di osservazione, modi calmi, gestione della confusione e dei familiari, valutazione professionale delle osservazioni da riferire al personale della clinica. Questi incarichi da noi vengono affidati solo a personale con adeguata esperienza.',
        },
        {
          question: 'E se mia madre non si trova bene con il vostro collaboratore?',
          answer:
            'Di norma diventiamo in breve tempo un volto familiare — la maggior parte dei pazienti si tranquillizza già dopo la prima ora. Se in un singolo caso non dovesse funzionare, sostituiamo il collaboratore. L\'intesa personale è molto importante proprio in queste situazioni.',
        },
        {
          question: 'Come si prenota?',
          answer:
            'Basta una prima telefonata. Chiariamo la situazione (operazione programmata, acuta, continuativa), il quadro del fabbisogno (demenza, rischio di caduta, insicurezza generale), l\'entità (giorno, notte, continuativo) e l\'ospedale. Entro 24 ore riceve una proposta concreta.',
        },
      ],
      cta: { text: 'Richiedi un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        {
          label: 'Vigilanza al capezzale Berlino',
          href: '/leistungen/sitzwachen-berlin',
          note: 'la parentela più stretta — anche a casa e in hospice',
        },
        {
          label: 'Accompagnamento in ospedale (approfondimento)',
          href: '/themen/krankenhaus-begleitung',
          note: 'quando un accompagnamento è opportuno, chi ne ha bisogno',
        },
        {
          label: 'Accompagnamento della demenza',
          href: '/themen/demenz-begleitung',
          note: 'approfondimento sull\'accompagnamento dei malati di demenza',
        },
      ],
    },
  },
};
