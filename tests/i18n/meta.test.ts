import { describe, it, expect } from 'vitest';
import { intlPageMeta, pageMeta, SITE } from '@/lib/site-config';
import { LOCALES } from '@/lib/i18n/config';
import { localizedHref } from '@/lib/i18n/slugs';
import { hatUebersetzung } from '@/lib/i18n/dictionaries';
import { de } from '@/lib/i18n/dictionaries/de';
import { en } from '@/lib/i18n/dictionaries/en';
import { leistungenWithDetail } from '@/lib/leistungen-seo';
import { THEMEN } from '@/lib/themen';
import { STANDORTE } from '@/lib/standorte';
import { KARRIERE } from '@/lib/karriere';

describe('pageMeta (deutsch)', () => {
  it('setzt Canonical auf die deutsche URL und listet alle Sprachen', () => {
    const meta = pageMeta('/leistungen');
    expect(meta.alternates.canonical).toBe(`${SITE.url}/leistungen`);
    expect(meta.alternates.languages).toEqual({
      de: `${SITE.url}/leistungen`,
      en: `${SITE.url}/en/services`,
      es: `${SITE.url}/es/servicios`,
      it: `${SITE.url}/it/servizi`,
      'x-default': `${SITE.url}/leistungen`,
    });
  });

  it('setzt für Seiten ohne Übersetzung keine hreflang-Verweise', () => {
    const meta = pageMeta('/karriere');
    expect(meta.alternates.languages).toBeUndefined();
  });

  it('setzt Canonical der Startseite ohne Schrägstrich am Ende', () => {
    expect(pageMeta('/').alternates.canonical).toBe(SITE.url);
  });

  it('verweist auf der Startseite auf alle Sprachstartseiten', () => {
    expect(pageMeta('/').alternates.languages).toEqual({
      de: SITE.url,
      en: `${SITE.url}/en`,
      es: `${SITE.url}/es`,
      it: `${SITE.url}/it`,
      'x-default': SITE.url,
    });
  });

  it.each(['/impressum', '/datenschutz', '/agb', '/karriere'])(
    'lässt %s ohne hreflang-Verweise',
    (path) => {
      expect(pageMeta(path).alternates.languages).toBeUndefined();
    },
  );

  it('setzt og:locale auf de_DE', () => {
    expect(pageMeta('/leistungen').openGraph.locale).toBe('de_DE');
  });

  it('hält og:url und Canonical synchron', () => {
    const meta = pageMeta('/standorte/moabit');
    expect(meta.openGraph.url).toBe(meta.alternates.canonical);
  });
});

describe('intlPageMeta', () => {
  it('setzt Canonical auf die übersetzte URL', () => {
    const meta = intlPageMeta('/leistungen', 'en');
    expect(meta.alternates.canonical).toBe(`${SITE.url}/en/services`);
  });

  it('setzt og:locale passend zur Sprache', () => {
    expect(intlPageMeta('/', 'it').openGraph.locale).toBe('it_IT');
  });

  it('verweist wechselseitig auf alle Fassungen', () => {
    expect(intlPageMeta('/leistungen', 'es').alternates.languages).toEqual(
      pageMeta('/leistungen').alternates.languages,
    );
  });

  it('setzt Canonical der englischen Startseite auf /en', () => {
    expect(intlPageMeta('/', 'en').alternates.canonical).toBe(`${SITE.url}/en`);
  });

  it('übersetzt das Segment einer Detailseite, nicht den Ortsteil-Slug', () => {
    expect(intlPageMeta('/standorte/moabit', 'it').alternates.canonical).toBe(
      `${SITE.url}/it/sedi/moabit`,
    );
  });

  it('übersetzt Segment und Slug einer Leistungsseite', () => {
    expect(intlPageMeta('/leistungen/sitzwachen-berlin', 'en').alternates.canonical).toBe(
      `${SITE.url}/en/services/bedside-companion-berlin`,
    );
  });
});

/**
 * hreflang muss wechselseitig sein: jede Seite eines Sets muss dasselbe Set
 * auflisten. Das prüfen wir über ALLE echten Seitenpfade der Site, nicht über
 * Stichproben — falsche hreflang-Verweise sind auf einer indexierten Seite
 * teurer als gar keine.
 */
const TRANSLATED_PATHS = [
  '/',
  '/leistungen',
  '/standorte',
  '/themen',
  '/familienbereich',
  '/soziales-engagement',
  ...leistungenWithDetail().map((l) => `/leistungen/${l.slug}`),
  ...THEMEN.map((t) => `/themen/${t.slug}`),
  ...STANDORTE.map((s) => `/standorte/${s.slug}`),
];

const UNTRANSLATED_PATHS = [
  '/karriere',
  '/impressum',
  '/datenschutz',
  '/agb',
  ...KARRIERE.map((k) => `/karriere/${k.slug}`),
];

describe('hreflang-Abdeckung über alle echten Seitenpfade', () => {
  it.each(TRANSLATED_PATHS)('%s trägt hreflang-Verweise für alle vier Sprachen', (dePath) => {
    const languages = pageMeta(dePath).alternates.languages;
    expect(languages).toBeDefined();
    expect(Object.keys(languages!).sort()).toEqual(['de', 'en', 'es', 'it', 'x-default']);
  });

  it.each(UNTRANSLATED_PATHS)('%s trägt keine hreflang-Verweise', (dePath) => {
    expect(pageMeta(dePath).alternates.languages).toBeUndefined();
  });

  it.each(TRANSLATED_PATHS)('%s ist wechselseitig verlinkt', (dePath) => {
    const expected = pageMeta(dePath).alternates.languages;
    for (const lang of LOCALES) {
      expect(intlPageMeta(dePath, lang).alternates.languages).toEqual(expected);
    }
  });

  it.each(TRANSLATED_PATHS)('%s: jede Sprachfassung ist ihr eigener Canonical', (dePath) => {
    const languages = pageMeta(dePath).alternates.languages!;
    for (const lang of LOCALES) {
      expect(intlPageMeta(dePath, lang).alternates.canonical).toBe(languages[lang]);
    }
  });

  it('führt keine übersetzte Seite versehentlich auf die Sprachstartseite', () => {
    // Wäre ein Slug nicht in den Übersetzungstabellen, fiele `localizedHref`
    // auf `/<lang>` zurück — die hreflang-Verweise zeigten dann auf die
    // falsche Seite. Für alles außer der Startseite ist das ein Fehler.
    for (const dePath of TRANSLATED_PATHS.filter((p) => p !== '/')) {
      for (const lang of ['en', 'es', 'it'] as const) {
        expect(localizedHref(dePath, lang)).not.toBe(`/${lang}`);
      }
    }
  });
});

/**
 * Titel und Beschreibung der sechs Übersichtsseiten. `intlPageMeta` liefert
 * bewusst nur Canonical, hreflang und OpenGraph — die Texte kommen aus dem
 * Wörterbuch. Ohne diese Prüfung fiel monatelang nicht auf, dass die
 * englischen Übersichtsseiten mit dem nackten Layout-Titel und ganz ohne
 * Beschreibung ausgeliefert wurden.
 */
const INDEX_META_KEYS = [
  ['/', 'home'],
  ['/leistungen', 'leistungen'],
  ['/themen', 'themen'],
  ['/standorte', 'standorte'],
  ['/familienbereich', 'familienbereich'],
  ['/soziales-engagement', 'sozialesEngagement'],
] as const;

describe('indexMeta der Übersichtsseiten', () => {
  it.each(INDEX_META_KEYS)('%s trägt auf Englisch Titel und Beschreibung', (_dePath, key) => {
    const meta = en.indexMeta[key];
    expect(meta.title.trim().length, `Titel für ${key} fehlt`).toBeGreaterThan(0);
    expect(meta.description.trim().length, `Beschreibung für ${key} fehlt`).toBeGreaterThan(0);
  });

  it.each(INDEX_META_KEYS)('%s hält auf Englisch die Längengrenzen ein', (_dePath, key) => {
    const meta = en.indexMeta[key];
    // Google schneidet darüber hinaus ab. Gezählt wird in Code-Points, damit
    // Gedankenstriche und Umlaute nicht doppelt zu Buche schlagen.
    expect([...meta.title].length, `Titel für ${key} zu lang: "${meta.title}"`).toBeLessThanOrEqual(60);
    expect([...meta.description].length, `Beschreibung für ${key} zu lang`).toBeLessThanOrEqual(160);
  });

  it('unterscheidet sich auf Englisch durchgehend vom deutschen Wörterbuch', () => {
    // Ein aus dem Deutschen kopierter Titel wäre schlimmer als gar keiner —
    // Google bekäme deutschen Text als englisch deklariert.
    for (const [, key] of INDEX_META_KEYS) {
      expect(en.indexMeta[key].title, `Titel für ${key} ist noch deutsch`).not.toBe(
        de.indexMeta[key].title,
      );
      expect(en.indexMeta[key].description, `Beschreibung für ${key} ist noch deutsch`).not.toBe(
        de.indexMeta[key].description,
      );
    }
  });

  it('lässt Spanisch und Italienisch bewusst ohne eigene Titel', () => {
    // Solange ihre Inhalte deutsch sind, dürfen die Routen nichts setzen —
    // `hatUebersetzung` ist der Schalter, an dem das hängt.
    for (const lang of ['es', 'it'] as const) {
      expect(hatUebersetzung(lang)).toBe(false);
    }
  });
});
