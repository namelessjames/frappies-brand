# Frappies Brand

Die verbindliche Markenrichtlinie für alles, was Frappies heißt: die App (iOS, Android, Web), die Website, E-Mails, Store-Einträge, Social Media und Druck. Sie ist für Menschen geschrieben und für KI-Agenten maschinenlesbar.

**Die eine Idee:** Der Tennisball liegt immer auf dem Nächsten, was dein Hund braucht.

**Die Welt:** Hundewiese am Nachmittag. Kleetinte trägt Schale, Überschriften und Text. Tennisball-Filz füllt die eine Hauptaktion und markiert das Nächste. Frisbee-Orange erscheint nur, wenn etwas fällig ist. Alles andere ist blasser Kleeboden unter weißen Karten. Nichts auf dem Bildschirm ist grau.

## Für Menschen

Lies die Kapitel in Reihenfolge, oder spring direkt zur Fläche, an der du arbeitest.

| Kapitel | Inhalt |
|---|---|
| [00 Marke](guide/00-marke.md) | Was Frappies ist, Haltung, Persönlichkeit, Prinzipien, die Idee hinter der Welt |
| [01 Logo](guide/01-logo.md) | Bildmarke, Wortmarke, Varianten, Schutzraum, Mindestgrößen, Verbote |
| [02 Farbe](guide/02-farbe.md) | Palette in Hell und Dunkel, Namen, Rollen, Regeln, Kontrastwerte |
| [03 Typografie](guide/03-typografie.md) | Bricolage Grotesque und Figtree, Hierarchie, Web-Erweiterung, Regeln |
| [04 Form und Raum](guide/04-form-und-raum.md) | Radien, Abstände, Maße, Tiefe, Layout |
| [05 Illustration](guide/05-illustration.md) | Der Frappies-Hund: acht Posen, Bedeutung, Varianten, Erzeugung |
| [06 Ikonografie](guide/06-ikonografie.md) | Phosphor Icons, Gewicht, Größen, Einsatz |
| [07 Bewegung](guide/07-bewegung.md) | Der rollende Ball, Federn, Dauern, Reduced Motion |
| [08 Sprache](guide/08-sprache.md) | Stimme, Ton, Du, Glossar DE/EN, Fehlermeldungen, KI-Hinweise |
| [09 Komponenten](guide/09-komponenten.md) | Buttons, Chips, Karten, Felder, Navigation, Banner, der Ball |
| [10 Anwendung](guide/10-anwendung.md) | App, Website, E-Mail, Stores, Social, Druck |

**Vorschau:** [`preview/index.html`](preview/index.html) zeigt die Marke auf einer Seite, in Hell und Dunkel. Lokal öffnen oder mit `python3 -m http.server -d preview` ausliefern.

## Für KI-Agenten

Start bei [`AGENTS.md`](AGENTS.md). Dort stehen die Regeln in der Form, in der sie geprüft werden können, und der Pfad zu den Tokens. [`llms.txt`](llms.txt) ist der kurze Index.

## Maschinenlesbare Quellen

| Datei | Zweck |
|---|---|
| [`tokens/tokens.json`](tokens/tokens.json) | Einzige Quelle. Design-Tokens im W3C-DTCG-Format: Farbe (Hell/Dunkel), Schrift, Typo-Stile, Radien, Abstände, Maße, Schatten, Bewegung |
| [`tokens/tokens.css`](tokens/tokens.css) | Generiert. CSS Custom Properties, mit `.dark`-Override und `prefers-color-scheme` |
| [`tokens/tokens.tailwind.css`](tokens/tokens.tailwind.css) | Generiert. Tailwind-v4-`@theme`-Block |
| [`scripts/build-tokens.js`](scripts/build-tokens.js) | Erzeugt die CSS-Dateien aus `tokens.json` |
| [`scripts/check-contrast.js`](scripts/check-contrast.js) | Prüft jede erlaubte Text-auf-Fläche-Paarung gegen WCAG |

```sh
node scripts/build-tokens.js     # tokens.css und tokens.tailwind.css neu erzeugen
node scripts/check-contrast.js   # Kontrasttabelle, Exit 1 bei Verstoß
```

## Assets

| Ordner | Inhalt |
|---|---|
| [`assets/logo/`](assets/logo/) | Bildmarke (`mark*.svg/png`), Wortmarke (`wordmark-*.svg/png`), Wortmarken-Geometrie (`wordmark.json`) |
| [`assets/app-icon/`](assets/app-icon/) | App-Icon iOS, Android Adaptive (Vorder-, Hintergrund, Monochrom), Splash, Favicon |
| [`assets/illustrations/`](assets/illustrations/) | Acht Posen des Frappies-Hundes, je Original und `*-shell`-Variante, mit eingebetteter Herkunft (`*.png.json`) |
| [`assets/illustrations/website/`](assets/illustrations/website/) | Der Posensatz der Website im Stil des Entwurfs vom 24.10.2026, mit Requisiten, je mit Prompt-Sidecar |
| [`assets/textures/`](assets/textures/) | Die Filzkörnung der Website-Flächen |
| [`assets/email/`](assets/email/) | Wortmarke als PNG für E-Mail-Clients |

Schriften werden nicht mitgeliefert. Beide sind Google Fonts unter der SIL Open Font License: [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque), [Figtree](https://fonts.google.com/specimen/Figtree).

## Beziehung zur App

Die App (`namelessjames/frappies`) ist die gebaute Wahrheit dieser Marke; ihre Werte sind hier abgeschrieben, nicht umgekehrt erfunden. Dieses Repository ist ab jetzt die verbindliche Quelle. Ändert sich ein Wert, ändert er sich zuerst hier, dann in `src/hooks/useThemeColors.ts` und `src/global.css` der App. Siehe [CONTRIBUTING.md](CONTRIBUTING.md).

Nicht Teil der Marke, weil noch nicht entschieden: Impressum, Firmenname und Rechtstexte. Nichts davon wird in Markenmaterial erfunden.
