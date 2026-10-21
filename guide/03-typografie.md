# 03 Typografie

Eine schwere, leicht schmale Grotesk für alles, was auf Armlänge in der Praxis lesbar sein muss, über einer runden, offenen humanistischen Sans für alles, was der Daumen bedient. Der Gewichtssprung zwischen Display und Text ist groß, der Größensprung bescheiden. Werte: [`tokens/tokens.json`](../tokens/tokens.json) → `font`, `type`.

## Schriften

| Rolle | Schrift | Gewichte | Lizenz |
|---|---|---|---|
| Display | [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) | 800 ExtraBold, 700 Bold | SIL OFL |
| Text | [Figtree](https://fonts.google.com/specimen/Figtree) | 400 Regular, 600 SemiBold, 700 Bold | SIL OFL |
| E-Mail | Systemstapel: -apple-system, Segoe UI, Helvetica, Arial | 400, 700, 800 | – |

Fallback überall `system-ui, sans-serif`. Nur diese fünf Gewichte laden. Keine Kursive. Keine dritte Schrift, auch keine Monospace für „technisch“; Zahlen in Tabellen bekommen `font-variant-numeric: tabular-nums` in Figtree.

In der App heißen die Dateien `BricolageGrotesque_800ExtraBold`, `BricolageGrotesque_700Bold`, `Figtree_400Regular`, `Figtree_600SemiBold`, `Figtree_700Bold`.

## Hierarchie

| Stil | Token | Schrift | Größe / Zeile | Gewicht | Laufweite | Einsatz |
|---|---|---|---|---|---|---|
| Display Hero | `type.display-hero` | Bricolage | 72 / 72 | 800 | -0.035em | Nur Landing-Hero der Website, ab 1024 px. Erweiterung |
| Display XL | `type.display-xl` | Bricolage | 56 / 60 | 800 | -0.03em | Web-Hero. Erweiterung |
| Display L | `type.display-l` | Bricolage | 44 / 48 | 800 | -0.03em | Web-Sektionstitel. Erweiterung |
| Display | `type.display` | Bricolage | 32 / 36 | 800 | -0.025em | Home-Überschrift (Zahl in Filz), Hundename auf dem Hero, Leerzustand-Titel |
| Figure | `type.figure` | Bricolage | 30 / 32 | 800 | 0 | Die Zahl in einer Akten-Zelle. Salbei bei null, nie allein |
| Headline | `type.headline` | Bricolage | 22 / 28 | 800 | -0.025em | Titel im schwebenden Header, Hundenamen in der Liste |
| Title | `type.title` | Bricolage | 20 / 28 | 700 | 0 | Sektionsüberschriften auf Home und im Gesundheits-Hub |
| Title Small | `type.title-sm` | Bricolage | 18 / 28 | 700 | 0 | Karten-Unterüberschriften, Formulartitel, Einstellungs-Sektionen |
| Time Chip | `type.time-chip` | Bricolage | 14 / 20 | 700 | 0 | Der Zeit-Chip. Die einzige Bricolage unter 18 px |
| Prose | `type.prose` | Figtree | 18 / 28 | 400 | 0 | Langtext im Web. Erweiterung |
| Body | `type.body` | Figtree | 16 / 24 | 400 | 0 | Fließtext, Feldwerte, Einstellungszeilen |
| Body Strong | `type.body-strong` | Figtree | 16 / 24 | 700 | 0 | Button-Labels, Zeilentitel in „Als Nächstes“ |
| Row Title | `type.row-title` | Figtree | 15 / 20 | 700 | 0 | Akten-Zellen-Labels, Namen im Hunde-Chip |
| Label | `type.label` | Figtree | 14 / 20 | 600 | 0 | Feldlabels, Auswahl-Chips, Hinweisbanner |
| Meta | `type.meta` | Figtree | 13 / 18 | 400 | 0 | Metazeilen, „zuletzt“-Zeilen |
| Tab Label | `type.tab-label` | Figtree | 12 / 16 | 600 | 0 | Nur Tab-Leiste |

## Benannte Regeln

**Heavy Headline (Schwere Überschrift).** Überschriften und Zahlen in Bricolage. Labels, Zeilen und Bedienelemente in Figtree. Nie einen Absatz in Bricolage, nie eine Zahl, die zählt, in Figtree.

**No Bare Count (Keine nackte Zahl).** Eine Zahl steht immer neben dem, was sie zählt: Zahl, Label, letzter Eintrag. Eine Zahl ohne Eintrag ist nicht erlaubt; das gilt auch auf der Website („3 Sachen zu tun“, nie „3“).

**German Fits (Deutsch passt).** Deutsch zuerst, etwa ein Drittel länger als Englisch. Labels brechen um statt abzuschneiden. Nur Namen, E-Mail-Adressen und Metazeilen dürfen gekürzt werden, dann mit Zeilenzahl, nie mit fester Breite.

**Accent In Felt (Akzent in Filz).** In einer Display-Zeile auf der Schale darf genau ein Satzteil in Filz stehen, und zwar der, der das Nächste benennt: „Heute für Frida: **3 Sachen zu tun**“. Auf hellem Grund gibt es keinen Filz-Text; dort trägt das Gewicht den Akzent.

## Satz

- Satzschreibung überall, in beiden Sprachen („Impfung speichern“, nicht „Impfung Speichern“).
- Zeilenlänge: 40 bis 60 Zeichen auf dem Telefon (die Karte begrenzt), 65 bis 75 Zeichen im Web (`size.web-measure` = 68ch).
- Ausgleich von Überschriften: `text-wrap: balance` für Display-Stile im Web, `pretty` für Absätze.
- Mehr Raum über einer Überschrift als darunter (Faustregel 2:1).
- Keine Großbuchstaben-Sperrsatz-Labels, keine Kicker oder Dachzeilen über Überschriften. Die Überschrift trägt sich selbst.
- Bindestrich in „E-Mail“ ist geschützt (`E&#8209;Mail` im HTML), damit das Wort nicht bricht.
- Zahlen mit schmalem geschütztem Leerzeichen vor Einheiten: „12,4 kg“, „4,99 €“. Datum über `formatDate()`, nie roh.

## Web-Erweiterung

Die App kennt keine Größe über 32 px. Für Website und Marketing erweitert die Rampe nach oben: Display L (44) und Display XL (56), beide ExtraBold mit -0.03em. Mehr nicht; ein 96-px-Hero wäre eine andere Marke. Prose (18/28) ist das Lesemaß für Artikel und Hilfe.

## Laden im Web

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Figtree:wght@400;600;700&display=swap" rel="stylesheet">
```

Für die Produktion selbst hosten (WOFF2, `font-display: swap`); die OFL erlaubt es. Bricolage ist eine variable Schrift mit optischer Größe; `font-optical-sizing: auto` lassen.

## Entscheidungen

### 2026-10-21: Display Hero für die Landing Page
Kontext: Der gewählte Entwurf der Landing Page setzt die Hero-Zeile mit 53 px Versalhöhe, das sind 72 px Bricolage 800. Display XL (56 px) trägt die Zeile „Weniger Zettel, mehr Zeit für deinen Hund.“ nicht mit der Wucht des Entwurfs. Fall 2 (Weiterentwicklung der Web-Typoskala).
Entscheidung: `type.display-hero` 72/72, 800, -0.035em, nur für den Hero der Landing Page ab 1024 px. Darunter Display XL, auf dem Telefon Display L. Die App nutzt sie nicht.
Verworfen: Display XL auf 72 px anheben (ändert jede Website-Überschrift), freie Größe im Code (umgeht die Tokens).
Web: namelessjames/frappies-web, Landing-Redesign (PR folgt).
