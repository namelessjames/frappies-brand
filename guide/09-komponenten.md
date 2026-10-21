# 09 Komponenten

Die Bausteine der App, so wie sie gebaut sind. Jede Website- oder Web-Komponente erbt diese Werte und weicht nur ab, wo das Medium es verlangt (Hover, Breakpoints). Die Komponenten setzen sich aus den Tokens `color`, `type`, `radius`, `size` und `motion` in [`tokens/tokens.json`](../tokens/tokens.json) zusammen, wie hier aufgeführt.

## Buttons

Selbstbewusst und flach: eine Füllung, kein Schatten, ein 1,5-px-Rand, damit jede Variante dieselbe Höhe hat.

| Eigenschaft | Wert |
|---|---|
| Form | 14 px Radius, 52 px Mindesthöhe, 20 px horizontal, 12 px vertikal |
| Label | Figtree Bold 16 px, optional 18-px-Icon links mit 8 px Abstand |
| Druck | Skalierung 0,97 auf Feder `press`; unter Reduced Motion keine Skalierung |
| Laden | Füllung bei 70 % Deckkraft, kleiner Spinner in Labelfarbe, deaktiviert |
| Deaktiviert | Kleedunst-Füllung und -Rand, Salbei-Label, Icon 40 %. Nie verblasster Filz |
| Web-Hover | Primär: `primary-hover`. Sekundär: `shell-raised` (hell) bzw. `card` (dunkel). Outline/Ghost: Füllung `accent`. 150 ms |
| Web-Fokus | 2 px `brand`, Abstand 2 px |

| Variante | Füllung | Rand | Label | Wann |
|---|---|---|---|---|
| Primär | `primary` | `primary` | `primary-foreground` | Die eine Hauptaktion pro Bildschirm |
| Sekundär | `secondary` | `secondary` | `secondary-foreground` | Zweite Aktion; im Dunkeln kippt sie zu blass mit Tinte |
| Outline | transparent | `brand` | `brand` | Nebenaktion mit Gewicht |
| Ghost | transparent | `border` | `foreground` | Leise Aktion |
| Destruktiv weich | 10 % `destructive` | – | `destructive` | Löschen auslösen |
| Destruktiv voll | `destructive` | – | `destructive-foreground` | Nur im Bestätigen-Dialog |
| FAB | `primary`, rund 56 px | – | Icon in Tinte | Nur „Hund hinzufügen“, mit `shadow.fab` |

Ein Primärbutton pro Bildschirm. Nebeneinander stehende Buttons teilen eine Zeile mit 12 px Abstand und wachsen auf den höheren.

## Chips

| Chip | Form | Aktiv / gewählt | Ruhe | Einsatz |
|---|---|---|---|---|
| Hunde-Chip | 44 px Pille, 32-px-Avatar 6 px eingerückt, Name Row Title | `primary` mit Tinte | `card` mit Tinte | Horizontale Reihe auf Akten-Bildschirmen; Home hat keinen |
| Auswahl-Chip (Formular) | 44 px hoch, Zweispalter, 10 px Radius, Label 14/600 | `secondary` mit Boden-Text | `muted` mit Tinte | Radios. Nie Filz |
| Hund-Chip (KI) | 44 px Pille | `primary` mit Tinte | `card` mit Heckenrand | „Für welchen Hund?“; lange Namen brechen um |
| Zeit-Chip | Bricolage 700 14 px, 6 px Radius, 4/8 px Innenabstand | `warning` mit Tinte, wenn heute fällig oder überfällig | Tinte als Text, keine Füllung | In „Als Nächstes“-Zeilen |
| Hundename-Tag | Meta 13 px, 6 px Radius, `muted` | – | – | In einer Zeile, die mehrere Hunde betrifft |

## Karten

| Eigenschaft | Wert |
|---|---|
| Radius | 18 px |
| Füllung | `card` auf `background`; `shell` für Home-Header und Hero-Karten |
| Schatten, Rand | keiner |
| Innenabstand | 16 px für Listen und Zellen, 20 px für Prosa und Formulare |
| Zeilen | 64 bis 68 px, 1 px Heckenlinie dazwischen |

**Akten-Zelle:** 116 px, Zahl (Figure) oben links, Label (Row Title) und letzte Zeile (Meta) unten links, die ganze Zelle ist der Button. Barrierefreier Name: „Label: Zahl, letzter Eintrag“. Null steht in Salbei.

**Hundekarte auf Home:** eine Zeile pro Hund mit Avatar, Name (Headline), Status heute („Heute 2 Sachen fällig“ / „Heute alles erledigt“) und „Als Nächstes: …“. Der Ball sitzt links im 40-px-Slot.

## Felder

| Eigenschaft | Wert |
|---|---|
| Form | `card`-Füllung, 1,5 px `border`, 14 px Radius, 52 px hoch, 16 px horizontal, Figtree 16 |
| Mehrzeilig | 96 px, Text oben |
| Label | Figtree SemiBold 14 darüber, 6 px Abstand |
| Platzhalter | Salbei |
| Fokus | Rand `brand`; im Web kein zusätzlicher Outline |
| Hervorgehoben | `primary-soft`-Füllung für einen aus dem Foto gelesenen Wert |
| Fehler | Rand `destructive`, 14-px-Zeile darunter in Alarmrot, höflich angesagt; Hinweiszeile in Salbei nimmt denselben Platz |
| Datum | Dieselbe Hülle mit Kalender-Glyph; Web: natives Date-Input, Gerät: Plattform-Picker |

## Navigation

**Schwebender Header:** 60 px plus Status-Inset, mattiert (Blur auf iOS und Web, deckend auf Android). Links ein 44-px-runder weißer Zurück- oder Schließen-Button. Titel Bricolage 22, eine Zeile. Rechts 44-px-runde Mitteilungs- und Avatar-Buttons; der Avatar-Button ist Kleeschale mit Filz-Initialen.

**Tab-Leiste:** weiß, Heckenlinie oben, 70 px plus Bottom-Inset, vier Ziele. Label Figtree SemiBold 12. Das aktive Icon sitzt auf einer 56 × 32 px Filz-Pille in `bold`/`fill`, inaktive Icons sind Salbei.

**Home-Schale:** ersetzt den Header auf Home. Begrüßung („Hallo {{name}}“, Fallback „Hundemensch“) und die zweizeilige Überschrift mit der Zahl in Filz, daneben die 150-px-Zoomie-Illustration, die rechts ausläuft. Unterkanten 28 px.

## Banner

| Banner | Füllung | Text | Icon | Verhalten |
|---|---|---|---|---|
| Hinweis (Disclaimer) | `accent` | `accent-foreground`, Figtree 14 | `Info` | Pflicht über jedem KI-Ergebnis |
| Fehler | 10 % `destructive` | `destructive` | `Warning` | Mit 44-px-rundem Erneut-Button; bleibt bis zur nächsten Aktion, assertiv angesagt |
| Erfolg | 10 % `success` | `success`, zentriert | `CheckCircle` | Blendet ein, verschwindet nach 3 s |

Alle 14 px Radius, 12/16 px Innenabstand.

## Der Ball

Eine Filzscheibe in einem festen 40-px-Slot markiert das Nächste. Ihre Größe ist die Dringlichkeit:

| Größe | Form | Bedeutung |
|---|---|---|
| 34 px | Filz mit Kreidenaht (zwei Bögen, Strich 8,5 % des Radius, 30° gedreht) | Heute fällig oder überfällig |
| 22 px | Filzscheibe ohne Naht | Diese Woche |
| 10 px | Heckenlinien-Punkt | Später |

Wird ein Element erledigt, rollt der Ball auf die nächste Zeile (siehe [07 Bewegung](07-bewegung.md)). Der Ball erscheint auf Home, bei der nächsten offenen Erinnerung und bei der am frühesten fälligen Auffrischung. Medikamente tragen keinen Ball, weil ihre Daten keinen Zeitplan haben. Pro Liste außerhalb der Home-Spur höchstens ein Ball.

Nie Dringlichkeit allein durch Farbe. Nie der Ball als Dekoration oder Aufzählungspunkt.

## Illustration in Komponenten

Leere Listen nutzen `RecordEmpty` mit einer Pose aus [05 Illustration](05-illustration.md), Titel in Display 32 (Bricolage 800), Text Body, ein Primärbutton. Auf der Schale die `*-shell`-Variante.

## Web-Ergänzungen (Erweiterung)

- **Link:** `brand`, Unterstreichung 1,5 px mit 3 px Versatz, Hover ohne Unterstreichung. Im Dunkeln Filz.
- **Textauswahl:** Filz bei 70 % mit Tinte.
- **Caret:** `brand`. **Scrollbar:** schmal, Heckenlinie auf transparent.
- **Inline-Code, Tabellenzahlen:** Figtree mit `tabular-nums`, keine Monospace.
- **Navigation der Website:** Wortmarke links (Filz auf der Schale, Tinte auf Boden), höchstens fünf Ziele, ein Primärbutton („App laden“ oder was der Store erlaubt).
- **Sprachwechsel:** ein Textlink mit dem Namen der anderen Sprache in ihrer Sprache („English“ auf Deutsch, „Deutsch“ auf Englisch), mit `lang`-Attribut, rechts in der Navigation. Keine Flaggen, keine automatische Umleitung.
- **Fußzeile der Website:** auf Kleeboden unter einer Heckenlinie, Meta 13/18 in Salbei, Links nach den Link-Regeln oben: Impressum, Datenschutz, AGB, Hilfe, Konto löschen, dazu contact@frappies.app. Keine Wortmarke, kein Filz, keine Illustration, keine Social-Icons.

## Entscheidungen

### 2026-10-21: Sprachwechsel und Fußzeile der Website
Kontext: Die Landingpage (namelessjames/frappies-web#6) braucht einen Weg zur englischen Seite und auf jeder Seite einen Link zum Impressum. Beides deckte die Marke nicht ab. Fall 1 (neue Komponente).
Entscheidung: Sprachwechsel als Textlink mit dem Sprachnamen in der Zielsprache; Fußzeile auf Kleeboden, Meta in Salbei, nur Rechts- und Hilfelinks und die Kontaktadresse.
Verworfen: Flaggen (Sprache ist kein Land; Schweiz und Österreich sprechen Deutsch), Umleitung nach Browsersprache (braucht einen Server, frappies-web ADR 0001), Fußzeile auf der Kleeschale (eine zweite Schale nimmt dem Hero das Gewicht).
Web: namelessjames/frappies-web#6.
