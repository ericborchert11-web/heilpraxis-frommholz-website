import type { FaqItem } from '@/lib/faq-global';

/**
 * Versione italiana della FAQ globale della homepage. Stesso numero e stessa
 * sequenza di `GLOBAL_FAQ` — altrimenti il JSON-LD della FAQ non corrisponde più.
 *
 * I termini giuridici e previdenziali tedeschi restano tra parentesi alla prima
 * occorrenza, perché non esiste un equivalente italiano. Volutamente senza
 * asterischi Markdown: le stringhe vengono emesse come testo semplice (anche
 * nel JSON-LD), dove gli asterischi sarebbero visibili.
 */
export const GLOBAL_FAQ_IT: readonly FaqItem[] = [
  {
    question: 'Che cosa distingue Heilpraxis Frommholz dagli altri servizi di assistenza?',
    answer:
      'Lavoriamo esclusivamente in regime privato — non fatturiamo all’assicurazione per la non autosufficienza (Pflegekasse). Questo ci consente di offrire un’assistenza uno a uno in blocchi di ore reali, invece di visite di quindici minuti. Il nostro team è piccolo e stabile, così che le clienti e i clienti ritrovino sempre gli stessi volti familiari. Il titolare, Simeon Frommholz, è un Heilpraktiker (operatore sanitario autorizzato secondo la legge tedesca) — il che significa che determinate prestazioni possono essere fatturate anche come prestazioni da Heilpraktiker.',
  },
  {
    question: 'Fatturate all’assicurazione per la non autosufficienza?',
    answer:
      'No. Siamo un servizio di assistenza esclusivamente in regime privato. Può utilizzare l’eventuale indennità di assistenza (Pflegegeld) che già riceve per pagare in parte la nostra fattura — è una Sua decisione. Non effettuiamo una fatturazione diretta alla Pflegekasse per prestazioni in natura (Sachleistungen).',
  },
  {
    question: 'Con quale rapidità potete iniziare?',
    answer:
      'Per richieste urgenti (veglie al capezzale, veglie notturne) spesso il giorno stesso, oppure entro 24-48 ore. Per impegni di più lunga durata (assistenza continuativa, copertura in attesa di un posto in casa di cura) di norma abbiamo bisogno di un preavviso di 5-10 giorni.',
  },
  {
    question: 'Quali quartieri della città coprite?',
    answer:
      'Le nostre zone principali sono Charlottenburg-Wilmersdorf, Steglitz-Zehlendorf e Mitte — ma con la nostra sede a Moabit (Stephanstraße 46) operiamo in tutta Berlin.',
  },
  {
    question: 'Quanto costa da voi l’assistenza uno a uno?',
    answer:
      'Non indichiamo tariffe forfettarie, perché le situazioni sono molto diverse tra loro — il fabbisogno, la qualifica richiesta, l’orario della giornata e il contesto entrano tutti nel calcolo. Nel colloquio iniziale gratuito prima ascoltiamo, poi Le presentiamo una proposta scritta con un prezzo vincolante. Decide con calma.',
  },
  {
    question: 'Chi sono i vostri collaboratori?',
    answer:
      'Infermieri e infermiere diplomati, assistenti alla persona qualificati, pedagogisti sociali e operatori di assistenza con molti anni di esperienza. Tutti i collaboratori sono assunti da noi con contratto e piena contribuzione previdenziale, parlano il tedesco come lingua madre (o almeno a livello C1) e hanno presentato un certificato penale esteso.',
  },
  {
    question: 'Offrite anche assistenza continuativa 24 ore su 24?',
    answer:
      'Sì — ma secondo un modello legale a turni avvicendati, con 4-6 collaboratori in un team stabile, e non nella forma di un’unica persona che vive in casa 24 ore su 24. Questo rende la nostra assistenza un po’ più costosa rispetto alle offerte del mercato grigio, ma è ineccepibile sul piano giuridico e corretta sotto il profilo del diritto del lavoro.',
  },
  {
    question: 'Come è organizzato il primo colloquio?',
    answer:
      'Gratuito, senza impegno, della durata di circa 60-90 minuti. A Sua scelta presso il Suo domicilio oppure per telefono. Prima ascoltiamo, poi Le presentiamo una proposta scritta con un prezzo concreto. Decide con calma.',
  },
];
