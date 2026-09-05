import type { Overlay } from '../types';
import type { SeoThema } from '@/lib/themen';

/**
 * Versioni italiane, indicizzate secondo lo slug tedesco. Ciò che qui manca
 * continua a comparire su `/it` in tedesco.
 *
 * Le sequenze di cifre di importi, percentuali, paragrafi di legge e termini
 * sono riprese ESATTAMENTE dal tedesco, comprese le convenzioni di scrittura
 * (1.612 € con il punto come separatore delle migliaia, 12,5–26,9 con la
 * virgola decimale). In una guida sulle prestazioni spettanti, un importo
 * frainteso è l'errore peggiore possibile; le cifre restano confrontabili con
 * la decisione (Bescheid) dell'assicurazione per la non autosufficienza.
 */
export const THEMEN_IT: Overlay<SeoThema> = {
  // === Thema 1: Pflegegrad beantragen ==========================================
  'pflegegrad-beantragen': {
    slug: 'pflegegrad-beantragen',
    title: 'Richiedere il livello di assistenza',
    short: 'Passo dopo passo, dalla domanda alla decisione.',
    metaTitle: 'Richiedere il Pflegegrad 2026 – guida per Berlino',
    metaDescription:
      'Richiedere il livello di assistenza (Pflegegrad) a Berlino: le fasi, i termini, la valutazione MDK. Guida pratica da oltre 15 anni di consulenza.',
    h1: 'Richiedere il livello di assistenza — i passi in dettaglio',
    primaryKeyword: 'richiedere Pflegegrad',
    detail: {
      intro: [
        'Un livello di assistenza (Pflegegrad) apre la porta a prestazioni che rendono la cura più sostenibile: l\'indennità di assistenza (Pflegegeld), le prestazioni in natura (Sachleistungen), l\'assistenza sostitutiva (Verhinderungspflege), l\'importo di sgravio (Entlastungsbetrag), gli adeguamenti dell\'abitazione. Prima che tutto questo venga erogato, però, occorre presentare la domanda e far accertare formalmente il livello di assistenza. Le spieghiamo come si fa e a che cosa prestare attenzione.',
      ],
      sections: [
        {
          heading: 'Passo 1: presentare la domanda all\'assicurazione per la non autosufficienza (Pflegekasse)',
          paragraphs: [
            'La domanda va all\'assicurazione per la non autosufficienza (Pflegekasse) — l\'ente collegato alla Sua cassa malattia. Non serve un modulo: basta una sola riga: „Hiermit beantrage ich Leistungen nach dem Pflegeversicherungsgesetz." (Con la presente richiedo prestazioni ai sensi della legge sull\'assicurazione per la non autosufficienza.)',
            'Importante: la domanda vale retroattivamente dalla data di presentazione. Le prestazioni vengono pagate a partire da quel giorno, non appena arriva la decisione (Bescheid). Per questo la domanda dovrebbe partire in fretta, anche se non tutti i documenti sono ancora pronti.',
          ],
        },
        {
          heading: 'Passo 2: l\'appuntamento di valutazione MDK',
          paragraphs: [
            'Entro 4-6 settimane il servizio medico di valutazione (Medizinischer Dienst — MD, a Berlino: MD Nord) si mette in contatto e concorda una visita domiciliare. La valutazione dura 1-2 ore.',
            'Che cosa viene valutato: l\'autonomia in 6 ambiti (mobilità; capacità cognitive e comunicative; comportamento e problematiche psichiche; cura di sé; gestione delle esigenze legate alla malattia; organizzazione della vita quotidiana).',
            'Che cosa dovrebbe preparare: un diario dell\'assistenza (Pflegetagebuch) di almeno 1 settimana, un elenco di tutti i farmaci, tutti i referti degli ultimi 2 anni, un quadro degli ausili.',
          ],
        },
        {
          heading: 'Passo 3: la decisione ed eventualmente l\'opposizione',
          paragraphs: [
            'Entro 5 settimane dalla presentazione della domanda deve arrivare la decisione — termine di legge ai sensi del § 18 SGB XI. Se il termine non viene rispettato, Le spettano 70 € per ogni settimana di ritardo iniziata.',
            'Se il livello di assistenza risulta troppo basso: 4 settimane di termine per l\'opposizione (Widerspruch) dalla ricezione della decisione. L\'opposizione è possibile senza formalità, ma dovrebbe essere corredata di motivazione e di nuove prove.',
          ],
        },
        {
          heading: 'I livelli di assistenza in sintesi (situazione 2026)',
          paragraphs: [
            'Livello 1 (12,5–26,9 punti): nessuna indennità di assistenza, nessun budget per prestazioni in natura — solo l\'importo di sgravio e singole prestazioni.',
            'Livello 2 (27–47,4 punti): 332 € di indennità di assistenza, 761 € di prestazioni in natura al mese.',
            'Livello 3 (47,5–69,9 punti): 573 € di indennità di assistenza, 1.432 € di prestazioni in natura.',
            'Livello 4 (70–89,9 punti): 765 € di indennità di assistenza, 1.778 € di prestazioni in natura.',
            'Livello 5 (da 90 punti): 947 € di indennità di assistenza, 2.200 € di prestazioni in natura.',
            'In più, in ogni caso, 125 € di importo di sgravio e fino a 1.612 € l\'anno di assistenza sostitutiva.',
          ],
        },
      ],
      faq: [
        { question: 'Quanto velocemente arriva il livello di assistenza?', answer: 'Per legge, 5 settimane dalla data della domanda. A Berlino, attualmente, spesso 6-8 settimane. Le prestazioni vengono pagate retroattivamente alla data della domanda.' },
        { question: 'Posso richiedere un livello di assistenza retroattivamente?', answer: 'Sì, la domanda ha effetto dal giorno in cui viene presentata. Se quindi presenta domanda oggi e la decisione arriva tra 6 settimane, riceve la prestazione per quelle 6 settimane come pagamento arretrato.' },
        { question: 'Che cosa succede se il livello di assistenza è troppo basso?', answer: 'Può presentare opposizione entro 4 settimane. Con motivazione — al meglio con un nuovo diario dell\'assistenza e certificati medici. La sosteniamo nelle opposizioni.' },
        { question: 'Per la domanda mi serve già un referto medico?', answer: 'No. Ma il valutatore vorrà vedere i referti degli ultimi 2 anni. Li prepari prima dell\'appuntamento MDK.' },
        { question: 'Chi aiuta con la domanda?', answer: 'Offriamo una consulenza per l\'assistenza che fa esattamente questo: formulare la domanda, preparare l\'appuntamento MDK, motivare l\'opposizione.' },
      ],
      cta: { text: 'Richiedere una consulenza', href: '/leistungen/pflegeberatung-berlin' },
      relatedLinks: [
        { label: 'Prepararsi alla valutazione MDK', href: '/themen/mdk-begutachtung' },
        { label: 'Il budget di sgravio', href: '/themen/entlastungsbudget' },
      ],
    },
  },

  // === Thema 2: Verhinderungspflege ============================================

  // === Thema 3: Entlastungsbudget ==============================================
  entlastungsbudget: {
    slug: 'entlastungsbudget',
    title: 'Il budget di sgravio',
    short: '125 € al mese — spesso inutilizzati, ma spettanti.',
    metaTitle: 'Budget di sgravio – usare bene i 125 € al mese',
    metaDescription:
      'Importo di sgravio (Entlastungsbetrag) ai sensi del § 45b SGB XI: 125 € al mese per l\'assistenza. Le spieghiamo a cosa serve e come funziona il rimborso.',
    h1: 'Il budget di sgravio — 125 € al mese, spesso non utilizzati',
    primaryKeyword: 'importo di sgravio assistenza',
    detail: {
      intro: [
        '125 € al mese. All\'anno fanno 1.500 €. Questo denaro Le spetta se esiste un livello di assistenza (Pflegegrad) a partire dall\'1 — e nella maggior parte delle famiglie resta inutilizzato. Le spieghiamo che cosa può farci e come funziona il rimborso.',
      ],
      sections: [
        {
          heading: 'Che cos\'è l\'importo di sgravio?',
          paragraphs: [
            'L\'importo di sgravio (Entlastungsbetrag) ai sensi del § 45b SGB XI è una prestazione a destinazione vincolata per „prestazioni di sgravio". Si intendono offerte che alleggeriscono la persona assistente e stimolano la persona bisognosa di cure.',
            'Ammontare: 125 € al mese a partire dal livello di assistenza 1.',
          ],
        },
        {
          heading: 'Per che cosa posso usare il denaro?',
          paragraphs: ['Non per tutto. Sono rimborsabili solo le prestazioni di fornitori riconosciuti ai sensi del § 45a SGB XI — quindi non un aiuto qualsiasi.'],
          stronglist: [
            { label: 'Tipicamente usato per', text: 'assistenza a ore tramite servizi di supporto certificati, assistenza diurna (spesso combinata proporzionalmente), ricovero di sollievo di breve durata (Kurzzeitpflege) (fino al 50 % trasferibile), aiuti domestici tramite servizi riconosciuti, offerte di supporto nella vita quotidiana (accompagnatori per la demenza, assistenti quotidiani).' },
            { label: 'Non rimborsabile', text: 'aiuti privati senza status di ente riconosciuto, personale di assistenza classico (che passa dall\'indennità di assistenza o dalle prestazioni in natura), costi di una casa di riposo o di un ricovero.' },
          ],
        },
        {
          heading: 'Come funziona il rimborso',
          paragraphs: [
            'Lei paga prima, il fornitore emette una fattura, Lei presenta la fattura all\'assicurazione per la non autosufficienza (Pflegekasse), che Le rimborsa i costi — fino a 125 € al mese.',
            'Importante: gli importi non utilizzati possono essere impiegati fino al 30 giugno dell\'anno successivo. Chi quindi da gennaio a dicembre non spende 125 € al mese può usare il resto fino al 30.06. Dopodiché il resto decade.',
          ],
        },
        {
          heading: 'Come possiamo sostenerLa',
          paragraphs: [
            'Non operiamo come fornitore riconosciuto ai sensi del § 45a SGB XI (sarebbe un altro modello di attività). La consigliamo però su quali fornitori riconosciuti a Berlino siano validi e su come combinare al meglio i Suoi 125 €.',
          ],
        },
      ],
      faq: [
        { question: 'L\'importo di sgravio spetta anche al livello di assistenza 1?', answer: 'Sì. Il livello 1 ne dipende addirittura — al livello 1 non esistono altre prestazioni in denaro.' },
        { question: 'Posso usare il denaro semplicemente in contanti?', answer: 'No. Lei paga il fornitore, che emette una fattura; l\'assicurazione per la non autosufficienza Le rimborsa l\'importo.' },
        { question: 'Che cosa succede se non mi servono 125 € ogni mese?', answer: 'Il resto si accumula e può essere utilizzato fino al 30 giugno dell\'anno successivo.' },
        { question: 'Potete offrire voi questa prestazione?', answer: 'Non siamo un fornitore riconosciuto ai sensi del § 45a, ma aiutiamo a trovarne uno adatto.' },
      ],
      cta: { text: 'Richiedere una consulenza', href: '/leistungen/pflegeberatung-berlin' },
      relatedLinks: [
        { label: 'Richiedere il livello di assistenza', href: '/themen/pflegegrad-beantragen' },
      ],
    },
  },

  // === Thema 4: MDK-Begutachtung ===============================================
  'mdk-begutachtung': {
    slug: 'mdk-begutachtung',
    title: 'La valutazione MDK',
    short: 'Ciò che conta nell\'appuntamento con il servizio medico di valutazione.',
    metaTitle: 'Prepararsi alla valutazione MDK – consigli pratici',
    metaDescription:
      'Prima della valutazione MDK: che cosa conta, che cosa documentare, quali errori evitare. Con una lista di controllo per l\'appuntamento.',
    h1: 'Prepararsi alla valutazione MDK — ciò che conta',
    primaryKeyword: 'valutazione MDK Pflegegrad',
    detail: {
      intro: [
        'La valutazione da parte del servizio medico di valutazione (Medizinischer Dienst — MD, in passato MDK) decide quale livello di assistenza (Pflegegrad) Le viene assegnato. E con esso se riceve 332 € o 947 € al mese di indennità di assistenza (Pflegegeld) — e quali ulteriori prestazioni Le spettano.',
        'Una buona preparazione può fare la differenza tra un livello e quello successivo. Le spieghiamo ciò che conta.',
      ],
      sections: [
        {
          heading: 'Che cosa succede all\'appuntamento',
          paragraphs: ['Il valutatore viene a casa Sua. L\'appuntamento dura 1-2 ore. Viene valutata l\'autonomia in sei moduli:'],
          list: [
            'Mobilità (peso 10 %) — alzarsi, camminare, salire le scale.',
            'Capacità cognitive e comunicative (15 % oppure 7,5 %) — riconoscere, orientarsi, comunicare.',
            'Comportamento e problematiche psichiche (insieme al modulo 2: 15 %) — aggressività, ansie, deliri.',
            'Cura di sé (40 %) — igiene personale, mangiare, vestirsi.',
            'Gestione autonoma delle esigenze legate alla malattia/terapia (20 %) — farmaci, cambio delle medicazioni.',
            'Organizzazione della vita quotidiana e dei contatti sociali (15 %) — pianificazione, attività, contatti sociali.',
          ],
          trailingParagraphs: ['Per ogni modulo viene determinato un punteggio; tutti i moduli insieme danno un punteggio complessivo che viene attribuito al livello di assistenza.'],
        },
        {
          heading: 'Quattro errori frequenti nella valutazione',
          stronglist: [
            { label: 'Errore 1: mostrarsi impacciati', text: 'Molte persone bisognose di cure minimizzano i propri deficit davanti a estranei — per orgoglio, per cortesia. Il valutatore lo annota e ne deriva un livello di assistenza troppo basso. Dica onestamente ciò che non funziona più.' },
            { label: 'Errore 2: i familiari rispondono al posto della persona', text: 'Il valutatore deve poter giudicare la persona stessa. Se Lei come familiare interviene di continuo, ciò viene valutato come buona capacità comunicativa.' },
            { label: 'Errore 3: non preparare alcuna documentazione', text: 'Un diario dell\'assistenza (Pflegetagebuch) di almeno una settimana mostra concretamente dove c\'è bisogno. Referti, relazioni mediche, elenco dei farmaci — tutto a portata di mano sul tavolo.' },
            { label: 'Errore 4: fissare l\'appuntamento in un momento buono', text: 'Molte persone con demenza sono più orientate al mattino che al pomeriggio. Se fissa l\'appuntamento al mattino, il valutatore vede forse la persona nel suo momento migliore — e ne sottovaluta il bisogno.' },
          ],
        },
        {
          heading: 'Lista di controllo per l\'appuntamento MDK',
          list: [
            'Diario dell\'assistenza di 1-2 settimane (che cosa si fa, quando, per quanto tempo).',
            'Elenco di tutti i farmaci (nome, dose, frequenza).',
            'Tutte le relazioni mediche e i referti attuali.',
            'Quadro degli ausili (deambulatore, letto, presidi per l\'incontinenza).',
            'Elenco di tutti gli aiuti assistenziali già prestati.',
            'Tesserino di grave disabilità (Schwerbehindertenausweis), se presente.',
            'Tessera assicurativa e domanda di livello di assistenza.',
          ],
          paragraphs: ['Se possibile: avere presente una persona che prenda appunti — non che risponda.'],
        },
        {
          heading: 'Se è incerto',
          paragraphs: ['Offriamo accompagnamento agli appuntamenti MDK. Un nostro collaboratore partecipa all\'appuntamento, pone domande fondate, aggiunge osservazioni, protegge da una sottovalutazione. Le condizioni le discutiamo nel primo colloquio.'],
        },
      ],
      faq: [
        { question: 'Qualcuno può essere presente all\'appuntamento MDK?', answer: 'Sì. È anzi consigliato — sia un familiare sia un accompagnatore esterno come noi.' },
        { question: 'Che cosa succede se non sono d\'accordo con la decisione?', answer: 'Può presentare opposizione senza formalità entro 4 settimane.' },
        { question: 'Ogni quanto il livello di assistenza può essere rivalutato?', answer: 'In caso di peggioramento, in qualsiasi momento. Per una revisione di routine, di norma ogni 1-2 anni.' },
        { question: 'Chi decide alla fine sul livello di assistenza?', answer: 'L\'assicurazione per la non autosufficienza — sulla base della perizia MDK. In teoria può discostarsene, ma lo fa raramente.' },
        { question: 'Quanto costa la preparazione?', answer: 'Il primo colloquio è gratuito. Una consulenza più approfondita e l\'accompagnamento MDK li calcoliamo in base all\'impegno e al contesto — l\'ordine di grandezza lo apprende direttamente nel primo colloquio.' },
      ],
      cta: { text: 'Richiedere una consulenza', href: '/leistungen/pflegeberatung-berlin' },
      relatedLinks: [
        { label: 'Richiedere il livello di assistenza', href: '/themen/pflegegrad-beantragen' },
        { label: 'Consulenza a Berlino', href: '/leistungen/pflegeberatung-berlin' },
      ],
    },
  },

  // === Thema 5: Demenz-Begleitung ==============================================

  // === Thema 6: Palliativ zu Hause =============================================


  // === Thema 8: Wohnungsauflösung im Pflegefall ================================
  'wohnungsaufloesung-pflegefall': {
    slug: 'wohnungsaufloesung-pflegefall',
    title: 'Sgombero dell\'abitazione in caso di non autosufficienza',
    short: 'Quando l\'abitazione deve essere sgomberata — con dignità.',
    metaTitle: 'Sgombero abitazione non autosufficienza Berlino',
    metaDescription:
      'Sgomberare l\'abitazione quando arriva l\'assistenza: che cosa conta, che cosa resta, che cosa organizzare. Con raccomandazioni per Berlino.',
    h1: 'Sgombero dell\'abitazione in caso di non autosufficienza — con dignità, con un piano',
    primaryKeyword: 'sgombero abitazione non autosufficienza',
    detail: {
      intro: [
        'Quando l\'abitazione deve essere abbandonata perché la persona bisognosa di cure si trasferisce in una struttura o in una nuova forma abitativa, non è mai solo un compito logistico. È la fine di una fase della vita, spesso anche la fine di un\'identità. Questo merita più attenzione della semplice domanda di chi ritira i mobili.',
      ],
      sections: [
        {
          heading: 'Quando si rende necessario uno sgombero dell\'abitazione',
          list: [
            'Trasferimento in struttura — passaggio permanente a una struttura stazionaria.',
            'Trasferimento presso la famiglia — quando l\'assistenza a casa non è più possibile da soli.',
            'Trasferimento in un\'abitazione adatta all\'età — ad es. residenza con servizi, abitazione assistita.',
            'Dopo la morte — gli eredi devono svuotare l\'abitazione.',
          ],
        },
        {
          heading: 'Che cosa organizzare',
          stronglist: [
            { label: 'Logistica', text: 'Selezionare i mobili (tenere, regalare, vendere, smaltire), impresa di smaltimento, pulizia finale dell\'abitazione, consegna delle chiavi.' },
            { label: 'Contratti', text: 'Disdire il contratto di locazione, disdire luce/gas/acqua, disdire telefono/internet, canone radiotelevisivo (Rundfunkbeitrag), verificare le assicurazioni.' },
            { label: 'Aspetti burocratici', text: 'Cambio di residenza presso l\'ufficio anagrafe (Einwohnermeldeamt), informare del nuovo indirizzo l\'assicurazione per la non autosufficienza (Pflegekasse), la cassa malattia, l\'assicurazione pensionistica.' },
            { label: 'Aspetti personali', text: 'Quali sono le cose importanti che devono essere trasferite? Quali oggetti-ricordo vengono conservati? Chi in famiglia riceve che cosa?' },
          ],
        },
        {
          heading: 'Che cosa possiamo concretamente fare',
          paragraphs: ['Non siamo un rivenditore di mobili né un\'impresa di smaltimento. Ma conosciamo buoni fornitori a Berlino e facciamo da tramite. Ciò che offriamo concretamente:'],
          stronglist: [
            { label: 'Accompagnamento della persona bisognosa di cure durante il trasloco', text: 'Restiamo presenti, tranquillizziamo, aiutiamo a orientarsi. Andiamo con lei nella nuova casa e accompagniamo i primi giorni.' },
            { label: 'Aiuto nella selezione dei beni di valore', text: 'Con discrezione — quanto in contanti, gioielli, documenti è sparso nell\'abitazione, lo raccogliamo insieme alla famiglia.' },
            { label: 'Aiuto organizzativo per i familiari', text: 'Chi non vive a Berlino può incaricarci di presenziare a singoli appuntamenti sul posto (ad es. consegna delle chiavi al locatore, consegna all\'impresa di smaltimento).' },
          ],
        },
        {
          heading: 'Quanto costa',
          paragraphs: [
            'Per questa prestazione non abbiamo prezzi forfettari — l\'impegno è troppo individuale. Consulenza e coordinamento, l\'accompagnamento della persona bisognosa di cure durante il trasloco, la selezione dei beni di valore, la mediazione di fornitori esterni (sgombero, pulizia finale) — ogni elemento viene calcolato in base all\'impegno. Nel primo colloquio discutiamo ciò di cui c\'è davvero bisogno e Le indichiamo una somma concreta per ciascun elemento.',
            'I costi dei fornitori esterni (imprese di sgombero ecc.) li alleghiamo in modo trasparente come allegato alla fattura.',
          ],
        },
      ],
      faq: [
        { question: 'Potete sgomberare l\'abitazione interamente da soli?', answer: 'Coordiniamo e accompagniamo — lo sgombero vero e proprio lo eseguono le nostre imprese partner.' },
        { question: 'Come funziona con i beni di valore?', answer: 'In modo discreto e tracciabile. Redigiamo un inventario e lo consegniamo alla famiglia. Ciò che è di valore resta sotto chiave fino alla consegna.' },
        { question: 'Aiutate anche nello sgombero dell\'abitazione dopo un decesso?', answer: 'Sì. È anzi una delle occasioni più frequenti.' },
        { question: 'Che cosa succede ai mobili ancora in buono stato?', answer: 'Li facciamo pervenire ad associazioni benefiche (Berliner Stadtmission, Caritas, Diakonie) o a case d\'asta serie, a seconda del valore.' },
      ],
      cta: { text: 'Richiedere un primo colloquio', href: '/#kontakt' },
      relatedLinks: [
        { label: 'Consulenza a Berlino', href: '/leistungen/pflegeberatung-berlin' },
        { label: 'Assistenza 24 ore su 24', href: '/leistungen/24-stunden-betreuung', note: 'come alternativa al trasferimento in struttura' },
      ],
    },
  },
};
