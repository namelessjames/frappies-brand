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

## Karten

| Eigenschaft | Wert |
|---|---|
| Radius | 18 px |
| Füllung | `card` auf `background`; `shell` für Home-Header und die Hero-Karte des Profils |
| Schatten, Rand | keiner |
| Innenabstand | 16 px für Listen und Zellen, 20 px für Prosa und Formulare |
| Zeilen | 64 bis 68 px, 1 px Heckenlinie dazwischen |

**Akten-Zelle:** 116 px, Zahl (Figure) oben links, Label (Row Title) und letzte Zeile (Meta) unten links, die ganze Zelle ist der Button. Barrierefreier Name: „Label: Zahl, letzter Eintrag“. Null steht in Salbei.

**Steckbrief (Hundeprofil):** kein Schalen-Hero. Auf dem Kleeboden zentriert das Porträt (Foto im 120-px-Kreis, sonst `app-avatar.png` 200 px breit), darunter der Name in Display 32 und eine Zeile Figtree SemiBold 15 in Salbei: Alter · Gewicht · Rasse, Unbekanntes fällt weg. Dann „Als Nächstes“ mit den Zeilen der Home-Spur nur für diesen Hund (Ball, Erledigen, Zeit-Chip), die Akte als Zeilen des Gesundheits-Hubs (Zahl plus letzter Eintrag), die Basisdaten als Label-Wert-Zeilen (52 px, Heckenlinie) mit dem Sekundärbutton „Angaben bearbeiten“ darunter, zuletzt die KI-Werkzeuge. Eine leere Akte zeigt statt Spur und Akte die Karte „Leg los mit der Akte“.

**Hundekarte auf Home:** eine Zeile pro Hund mit Avatar, Name (Headline), Status heute („Heute 2 Sachen fällig“ / „Heute nichts fällig“) und „Als Nächstes: …“. Der Ball sitzt links im 40-px-Slot.

## Felder

| Eigenschaft | Wert |
|---|---|
| Form | `card`-Füllung, 1,5 px `border`, 14 px Radius, 52 px hoch, 16 px horizontal, Figtree 16 |
| Mehrzeilig | 96 px, Text oben |
| Label | Figtree SemiBold 14 darüber, 6 px Abstand |
| Platzhalter | Salbei |
| Fokus | Rand `brand` |
| Hervorgehoben | `primary-soft`-Füllung für einen aus dem Foto gelesenen Wert |
| Fehler | Rand `destructive`, 14-px-Zeile darunter in Alarmrot, höflich angesagt; Hinweiszeile in Salbei nimmt denselben Platz |
| Datum | Dieselbe Hülle mit Kalender-Glyph; öffnet den Plattform-Picker |

## Navigation

**Schwebender Header:** 60 px plus Status-Inset, mattiert (Blur auf iOS, deckend auf Android). Links ein 44-px-runder weißer Zurück- oder Schließen-Button. Titel Bricolage 22, eine Zeile. Rechts 44-px-runde Mitteilungs- und Avatar-Buttons; der Avatar-Button ist Kleeschale mit Filz-Initialen.

**Tab-Leiste:** weiß, Heckenlinie oben, 70 px plus Bottom-Inset, vier Ziele. Label Figtree SemiBold 12. Das aktive Icon sitzt auf einer 56 × 32 px Filz-Pille in `bold`/`fill`, inaktive Icons sind Salbei.

**Home-Schale:** ersetzt den Header auf Home. Begrüßung („Hallo {{name}}“, Fallback „Hundemensch“) und die zweizeilige Überschrift mit der Zahl in Filz, daneben der sitzende Hund (`hero-dog-shell.png`, 150 px), der zur Überschrift aufschaut und mit den Pfoten auf der Graslinie steht; die Grasbüschel (`grass-left-shell.png`) laufen über die ganze Breite am Fuß der Schale, 42 px hoch. Die Textspalte endet vor dem Hund und hält 54 px zum Fuß. Unterkanten 28 px.

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

**Der Ball zum Fangen.** Liegt der Ball auf einer Erinnerung, die sich abhaken lässt, sitzt er in einem 44-pt-Ring aus der 1,5-px-Heckenlinie, zentriert auf dem 40-px-Slot. Der Ring ist der einzige Unterschied zum Ball einer Impfung oder eines Termins, die man nur ansehen kann. Beim Drücken wird der Ring wiesengrün (`brand`) und der Ball gibt mit der Druckfeder auf 0,92 nach; beim Loslassen füllt sich der Ring für 220 ms mit Tinte (`secondary`) und einem hellen Haken, dann verlässt die Zeile den Bildschirm und der Ball rollt weiter. Unter Reduced Motion wechselt nur die Farbe. Der Ball pulsiert, leuchtet oder springt nie, um zum Tippen einzuladen; das tut der Ring.

## Gewichtskurve

Die Gewichtskurve eines Hundes steht in der App auf dem Gewicht-Bildschirm, in einer Karte zwischen aktuellem Gewicht und Eintragsliste. Sie ist die einzige Kurve der Marke; jede weitere Kurve folgt diesen Regeln. Sie nutzt nur bestehende Tokens:

| Rolle | Token | Maß |
|---|---|---|
| Fläche | `card`, Radius 18 px, Innenabstand 16 px | keine Füllung unter der Linie, kein Verlauf |
| Linie | `brand` | 2 px, runde Enden und Ecken, gerade Segmente |
| Punkt | Füllung `card`, Ring `brand` | 8 px Durchmesser, Ring 2 px |
| Gewählter Punkt | Füllung `brand` | 12 px Durchmesser |
| Raster | `border` | 1 px (`stroke.divider`), nur waagrecht, keine Achsenlinien |
| Achsenbeschriftung | `muted-foreground` | Meta 13 px, Figtree, `tabular-nums` |
| Zeitraum-Wahl | wie der Auswahl-Chip: gewählt `secondary` mit Boden-Text, Ruhe `muted` mit Tinte | 44 px hoch, 10 px Radius, fünf in einer Reihe |
| Kopfzeile | über der Kurve, linksbündig, ohne Fläche | ohne Auswahl: Durchschnitt des Zeitraums als Figure (Bricolage 700), darunter Zeitraum und „Durchschnitt aus N Messungen“ in Meta |
| Auswahl-Label | `muted`, Radius 14 px, über dem gewählten Punkt zentriert, am Kartenrand gehalten, steht auf der Kurve auf | Wert als Figure, darunter Tag, Woche („13.–19. Juli 2026“) oder Monat und „Durchschnitt aus N Messungen“ oder „Beim Tierarzt gemessen“, beides Meta |
| Auswahl-Linie | `muted-foreground` | 1 px senkrecht durch die Kurve am gewählten Punkt |

Die ganze Kurvenfläche ist eine Tippfläche (weit über 44 px); ein Tipp wählt den nächsten Punkt, auch wenn bei vielen Punkten jeder nur wenige Pixel Abstand hat. Die Kopfzeile hat eine feste Höhe, damit die Kurve beim Wählen nicht springt. Waagrechtes Wischen über die Kurve blättert um einen Zeitraum zurück (nach rechts wischen) oder vor (nach links): der Nachbarzeitraum folgt dem Finger und rastet ein. Zeiträume ohne Eintrag werden übersprungen, am ersten und am neuesten Eintrag ist Schluss. Das Zurückwischen des Systems bleibt überall außer auf der Kurve. Kein Filz auf der Kurve, kein Orange, keine Farbe pro Zeitraum. Tierarztmessungen nennt das Label in Worten, die Kurve markiert sie nicht. Die Kurve erscheint ohne Animation; beim Blättern bewegt sie nur der Finger. Für Screenreader ist sie ein einstellbares Element mit einer Zusammenfassung (erster und letzter Wert, Minimum, Maximum, Zeitraum), das mit Auf- und Abwischen blättert; die Eintragsliste darunter bleibt die vollständige Fassung.

**Im Dokument.** In der Gesundheitsakte als PDF steht die Kurve statisch über der Eintragstabelle, für ein Jahr bis zum neuesten Eintrag und nur ab zwei Punkten. Sie behält Linie, Punkt und Raster aus der Tabelle oben, in denselben Stärken und Durchmessern; die Seite (weiß) ist ihre Fläche, ohne Karte, Radius oder Schatten. Es entfallen Zeitraum-Wahl, Kopfzeile, Auswahl, Label und Blättern. Die Achsen beschriftet Figtree 8 pt in `muted-foreground` mit `tabular-nums`: links kg, unten jeder Monat kurz („Mär“). Darüber eine Bildunterschrift in Meta, die den Zeitraum nennt („Gewichtskurve, 12 Monate bis 10. September 2026“). Kein Filz, kein Orange; die eine Filzmarkierung der Seite bleibt der Name.

## Illustration in Komponenten

**Erste-Schritte-Zustand.** Jeder Bildschirm, auf dem für diesen Hund noch nichts eingetragen ist (jede Akten-Liste, Tierarztpraxen, Befund scannen, Futterplan, KI-Auswertungen, Mitteilungen), zeigt an der Stelle der Liste eine weiße Karte (Radius 18 px, `shadow.card`) mit einer Pose aus [05 Illustration](05-illustration.md) (130 px breit, Wiederholungen erlaubt, keine neue Zeichnung), darunter zentriert einen Titel in Headline 22 (Bricolage 800) und höchstens zwei Sätze Body 14 in `muted-foreground`: was das ist und warum es für die Praxis oder den Hund zählt. Kein eigener Button: der Hinzufügen-Button des Bildschirms ist die eine Handlung, und sein Formular startet auf einem leeren Bildschirm geschlossen (außer der Bildschirm wurde zum Eintragen geöffnet, Home „In die Akte eintragen“). Der Zustand verschwindet mit dem ersten Eintrag; es wird nichts gespeichert und nichts weggeklickt. Bewegung: der eine inszenierte Moment des Bildschirms (siehe Einführung). Im Dunkelmodus die `*-shell`-Variante.

## Einführung

Einmal pro frischer Installation, vor Home, sechs Folien auf Kleeboden. Ein Gerät, auf dem beim Update schon ein Hund liegt, sieht sie nie; wiederholen lässt sie sich nicht.

| Folie | Pose | Titel | Text |
|---|---|---|---|
| 1 Grundlagen | Zoomie | Alles über deinen Hund an einem Ort | Impfungen, Medikamente, Erkrankungen, Gewicht und Tierarztbesuche in einer Gesundheitsakte. Statt auf Zetteln und im Kopf. |
| 2 Gesundheitsakte als PDF | Lead | Fertig für die Praxis | Die Gesundheitsakte als PDF, sortiert und mit Datum. Ein Tipp, und du teilst sie mit deiner Tierarztpraxis. |
| 3 Erinnerungen | Listening | Rechtzeitig erinnert | Impfungen, Medikamente, Wurmkuren und Tierarztbesuche melden sich, bevor sie fällig sind. |
| 4 Befund scannen | Sniffing | Befund scannen | Fotografier einen Laborbefund, und die KI liest die Werte aus. Das Foto bleibt auf deinem Handy. |
| 5 Notfallkarte | Tag | Die Notfallkarte | Alles, was Finder, Hundesitter und Notfallpraxis wissen müssen. Als Bild teilbar. |
| 6 Lokal oder Konto | Ball | Deine Akte, deine Wahl | Ohne Konto liegt die Akte nur auf diesem Handy. Mit Konto ist sie gesichert und auch auf deinen anderen Geräten da. |

Aufbau einer Folie, von oben: rechts oben der Textlink „Überspringen“ (Figtree SemiBold 15, Tinte, 44 pt), mittig die Pose 200 px breit, darunter Titel in Display 32 und der Text in Body 16 `muted-foreground`, beides zentriert und umbrechend, nie gekürzt. Am Fuß die Seitenpunkte (8 px, aktiv `secondary`, sonst `border`; kein Filz, die Punkte sind kein „Nächstes“) und der Primärbutton „Weiter“. Wischen blättert ebenso. Folie 4 trägt über dem Titel das leise Label „Premium“ wie der Auswahl-Chip in Ruhe (`muted` mit Tinte, Meta 13), keinen Preis, keinen Test-Hinweis. Folie 6 hat kein „Überspringen“: „Los geht's“ (Primärbutton, lokaler Modus) führt nach Home, darunter der Textlink „Konto erstellen“ in `brand` öffnet die Registrierung. Kein Modal, kein Nachfragen. „Überspringen“ springt auf Folie 6; die Wahl zwischen lokal und Konto lässt sich nicht überspringen. Das Konto kommt nur hier zur Sprache, danach wohnt es im Profil.

Bewegung nach [07 Bewegung](07-bewegung.md): ein inszenierter Moment pro Folie und pro Erste-Schritte-Zustand. Die Pose skaliert von 0,85 mit `motion.spring.entry`, danach blendet der Text mit 8 px Aufwärtsversatz ein (`motion.duration.slow`, 120 ms nach der Pose). Eine Folie spielt ihren Moment beim ersten Erscheinen, nicht bei jedem Zurückwischen. Unter Reduced Motion steht alles sofort im Endzustand.

## Web-Ergänzungen (Erweiterung)

- **Link:** `brand`, Unterstreichung 1,5 px mit 3 px Versatz, Hover ohne Unterstreichung. Im Dunkeln Filz.
- **Textauswahl:** Filz bei 70 % mit Tinte.
- **Caret:** `brand`. **Scrollbar:** schmal, Heckenlinie auf transparent.
- **Inline-Code, Tabellenzahlen:** Figtree mit `tabular-nums`, keine Monospace.
- **Navigation der Website:** Wortmarke links (Filz auf der Schale, Tinte auf Boden), höchstens fünf Ziele, ein Primärbutton („App laden“ oder was der Store erlaubt).
- **Sprachwechsel:** ein Textlink mit dem Namen der anderen Sprache in ihrer Sprache („English“ auf Deutsch, „Deutsch“ auf Englisch), mit `lang`-Attribut, rechts in der Navigation. Keine Flaggen, keine automatische Umleitung.
- **Primärbutton der Website:** Filz-Füllung mit Tinte-Label (Figtree 700, 18 px), 56 px hoch, 28 px horizontal, voll gerundet (Pille; die Regel „nie eine Pille“ gilt der App), mit dem weichen Tintenschatten der Website-Karten. Hover `primary-hover`, Fokus 2 px `brand`. Einer pro Viewport: im Hero und im Abschluss, sobald die Store-Links da sind; davor steht die Startzeile. Store-Badges von Apple und Google stehen daneben, nie statt des Buttons.
- **Fußzeile der Website:** auf Kleeboden unter einer Heckenlinie, Meta 13/18 in Salbei, Links nach den Link-Regeln oben: Impressum, Datenschutz, Nutzungsbedingungen, Hilfe, Konto löschen, dazu contact@frappies.app. Keine Wortmarke, kein Filz, keine Illustration, keine Social-Icons.

## Entscheidungen

### 2026-11-01: Gewichtskurve im Dokument
Kontext: Die Gesundheitsakte als PDF zeigt den Gewichtsverlauf als Kurve über ein Jahr (namelessjames/frappies#102). Die Regeln der Gewichtskurve galten nur dem Bildschirm; „Dokumente und Präsentationen“ in [10 Anwendung](10-anwendung.md) kennt keine Kurve. Fall 1 (die Komponente bekommt eine Druckfassung, nichts Bestehendes ändert sich).
Entscheidung: Dieselben Tokens und Maße wie am Bildschirm, ohne alles Interaktive; die Seite ist die Fläche; Achsenbeschriftung in 8 pt, passend zum Textmaß des Dokuments; eine Bildunterschrift nennt den Zeitraum.
Verworfen: Karte mit Radius um die Kurve (auf Papier eine Fläche ohne Zweck), Filz für die Linie (die eine Filzmarkierung der Seite gehört dem Namen), Linie in Tinte statt `brand` (die Kurve sähe anders aus als in der App), Durchschnitt als Figure über der Kurve (die Tabelle darunter trägt die Werte).
App: namelessjames/frappies#204 (Issue #102).

### 2026-10-31: Gewichtskurve wählt und blättert wie Apple Health
Kontext: Der Inhaber will getippte Werte wie in Apple Health (Wert und Zeitraum über dem Punkt, senkrechte Linie) und die Kurve um einen Zeitraum blättern können. Das Panel unter der Kurve mit bis zu fünf Einträgen war dafür zu lang. Fall 1 (die neue Komponente wird erweitert, bevor sie veröffentlicht ist).
Entscheidung: Kopfzeile über der Kurve mit festem Platz; ohne Auswahl zeigt sie den Durchschnitt des Zeitraums, mit Auswahl wird sie zum `muted`-Label über dem Punkt, mit 1-px-Linie in `muted-foreground`. Wischen blättert um einen Zeitraum, leere Zeiträume entfallen. Die Einträge eines Punkts stehen nicht mehr im Label; die Liste darunter hat jeden.
Verworfen: Label unter der Kurve behalten (zu weit vom Punkt, lange Listen schieben die Seite), Label frei über der Kurve schwebend (verdeckt Punkte; die feste Kopfzeile verdeckt nichts), Blättern mit Pfeiltasten (Platz in der Karte, und Wischen ist auf der Kurve die erwartete Geste), Wechsel ohne Mitbewegung (ein Wischen, das nichts unter dem Finger bewegt, fühlt sich kaputt an), Zurückwischen des Systems auf dem ganzen Bildschirm abschalten (nur die Kurve braucht die Geste).
App: namelessjames/frappies#189 (Issue #87).

### 2026-10-31: Gewichtskurve
Kontext: Die App zeigt den Gewichtsverlauf eines Hundes als Kurve (namelessjames/frappies#87). Die Marke kannte noch keine Kurve und kein Diagramm. Fall 1 (neue Komponente).
Entscheidung: Linie und Punkte in `brand`, Raster als Heckenlinie in `border`, Beschriftung in Salbei, Zeitraum-Wahl als Auswahl-Chips, Punkt-Label als `muted`-Fläche unter der Kurve, wie oben unter „Gewichtskurve“. Keine neuen Tokens.
Verworfen: Filz für Linie oder gewählten Punkt im hellen Thema (Filz heißt Nächstes, nicht Daten), Fläche oder Verlauf unter der Linie (Tiefe ist tonal, und eine Fläche liest sich als Menge), schwebender Tooltip über der Kurve (verdeckt Punkte und bricht deutsch nicht sauber um), eigene Markierung für Tierarztmessungen (eine zweite Bedeutung in der Kurve; das Label sagt es in Worten).
App: namelessjames/frappies#189 (Issue #87).

### 2026-10-24: Der Steckbrief folgt dem Hundeprofil der Website
Kontext: Der Inhaber will das Hundeprofil der App so wie das Profil im Hero der Website: Porträt, Name, eine Zeile mit Alter, Gewicht und Rasse, darunter was heute ansteht und was als Nächstes kommt. Der bisherige Steckbrief war eine Schalen-Hero-Karte mit Initiale und Zoomie, darunter fünf Karten mit Aufzählungen ohne Zahlen. Fall 2 (eine bestehende Komponente ändert sich).
Entscheidung: Der Steckbrief verliert die Schalen-Hero-Karte; das Porträt steht zentriert auf dem Kleeboden (siehe „Karten“). „Als Nächstes“ nutzt dieselbe Zeile wie Home, mit Ball, Erledigen und rollendem Ball; die Akte nutzt dieselben Zeilen wie der Gesundheits-Hub, damit keine Zahl ohne Eintrag steht. Die Schale bleibt dem Home-Header, dem Hub-Intro und der Hero-Karte des Profils (das Hub-Intro entfällt am 31.10.2026, siehe unten).
Verworfen: Porträt in der Schalen-Karte (die Website zeigt das Profil auf hellem Grund, und die Schale verdeckt die Tintenlinien des Porträts), die Website-Karte mit Filz-Icon-Kacheln (Filz heißt Nächstes, nicht Rubrik), weißer Kartenschatten wie auf der Website (verletzt „Tonal Step“).
App: namelessjames/frappies#117.

### 2026-10-21: Sprachwechsel und Fußzeile der Website
Kontext: Die Landingpage (namelessjames/frappies-web#6) braucht einen Weg zur englischen Seite und auf jeder Seite einen Link zum Impressum. Beides deckte die Marke nicht ab. Fall 1 (neue Komponente).
Entscheidung: Sprachwechsel als Textlink mit dem Sprachnamen in der Zielsprache; Fußzeile auf Kleeboden, Meta in Salbei, nur Rechts- und Hilfelinks und die Kontaktadresse.
Verworfen: Flaggen (Sprache ist kein Land; Schweiz und Österreich sprechen Deutsch), Umleitung nach Browsersprache (braucht einen Server, frappies-web ADR 0001), Fußzeile auf der Kleeschale (eine zweite Schale nimmt dem Hero das Gewicht).
Web: namelessjames/frappies-web#6.

### 2026-10-24: Primärbutton der Website
Kontext: Die Website ist seit dem 24.10.2026 von den Komponentenregeln der App befreit; ihre Karten sind 24 px gerundet und tragen einen weichen Tintenschatten. Der Store-Button muss dazu passen, bevor die Store-Links kommen. Fall 1 (ein Muster, das die Marke für die Website noch nicht hatte).
Entscheidung: Pillenform, Filz, Tinte-Label, 56 px, Tintenschatten, wie oben unter „Web-Ergänzungen“. In der App bleibt der 14-px-Button.
Verworfen: der App-Button mit 14 px (wirkt auf der neuen Website kantig), ein Tinte-Button (Filz bedeutet auf der Website weiter die Hauptaktion), nur Store-Badges (kein eigener Button, keine eigene Stimme).
Web: namelessjames/frappies-web#17.

### 2026-10-24: Nutzungsbedingungen statt AGB; die Rechtstexte stehen fest
Kontext: Die Rechtsseiten der Website (namelessjames/frappies-web#3) werden die einzige Quelle der Rechtstexte für App und Website (frappies-web ADR 0003). Die Fußzeile nannte „AGB“, die App „Nutzungsbedingungen“. Frappies verkauft nichts selbst, Premium kaufen Nutzerinnen und Nutzer bei Apple oder Google. Fall 2 (Weiterentwicklung: eine bestehende Regel ändert sich).
Entscheidung: Die Fußzeile nennt „Nutzungsbedingungen“ (englisch „Terms“), nicht „AGB“. Impressum und Rechtstexte erscheinen nur auf den Rechtsseiten der Website, im Wortlaut, den die Inhaberin oder der Inhaber freigegeben hat; das Impressum ist festgelegt, Datenschutzerklärung und Nutzungsbedingungen folgen nach der rechtlichen Prüfung.
Verworfen: „AGB“ behalten (es gibt keine Geschäftsbedingungen eines Verkaufs bei Frappies), beide Begriffe nebeneinander (zwei Namen für einen Text).
Web: namelessjames/frappies-web#3.

### 2026-10-31: Der Gesundheits-Hub zeigt den Hund statt einer Anleitung
Kontext: Der Hub öffnete mit einer Schalen-Karte „Wähl einen Hund, um seine Gesundheitsakte anzusehen und zu pflegen“ neben dem schlafenden Hund. Im Vergleich mit der Website (Inhaber, 31.10.2026) ist das eine Füllfläche: Sie erklärt die Chips darunter, die sich selbst erklären, und zeigt nicht, wessen Akte folgt. Fall 2 (eine bestehende Komponente ändert sich).
Entscheidung: Der Hub beginnt wie der Steckbrief mit der Identität des gewählten Hundes auf dem Kleeboden: Foto im 88-px-Kreis (sonst das Porträt 150 px breit), Name in Bricolage 800 28 px, eine Zeile Alter · Gewicht · Rasse in Salbei. Darunter die Hunde-Chips, dann die Akte als Zeilen. Steckbrief und Hub teilen eine Komponente (`DogIdentity`, groß 120 px / 32 px, kompakt 88 px / 28 px). Der Text „hub.intro“ entfällt in beiden Sprachen. Die Schale bleibt der Home-Schale und der Hero-Karte des Profils.
Verworfen: Identität in der Schalen-Karte (die Schale verdeckt die Tintenlinien des Porträts, siehe 24.10.2026), die Chips ganz oben ohne Identität (ein Chip-Streifen sagt nicht, wessen Akte folgt), den Text behalten und kürzen (jede Fassung bleibt eine Anleitung).
App: namelessjames/frappies PR #194.

### 2026-10-31: Listen und Zeilen wie auf der Website
Kontext: Im Vergleich mit der Website (Inhaber, 31.10.2026) fielen vier Stellen als veraltet auf: die Hundeliste schrieb „Gewicht: 62,5 kg  Alter: 5 Jahre“ als Label-Wert-Paare und ließ den Zoomie unter zwei Karten im Leeren laufen; jede Akten-Liste öffnete ihr Formular über eine gestrichelte Outline-Zeile; jede Akten-Karte trug einen roten Papierkorb; die „Als Nächstes“-Zeilen auf Home stellten den Hundenamen als Tag über den Titel. Fall 2 (bestehende Komponenten ändern sich).
Entscheidung: (1) Die Hundeliste zeigt unter dem Namen dieselbe Zeile wie Steckbrief und Hub: „Alter · Gewicht · Rasse“, Figtree SemiBold 15 in Salbei; die Illustration unter der Liste entfällt, der Zoomie bleibt der Ankunft. (2) Das geschlossene Formular einer Akten-Liste ist der Filz-Primärbutton des Bildschirms („Impfung eintragen“ mit Plus); offen übernimmt „Speichern“ die Rolle, es gibt nie zwei. (3) Löschen liegt hinter einem Wischen nach links (`SwipeToDelete`): eine 96 px breite `destructive`-Fläche mit Papierkorb und „Löschen“ in Weiß, die den bestehenden Bestätigungsdialog öffnet; Screenreader bekommen dieselbe Aktion als Accessibility-Action der Karte. Alarmrot erscheint damit nur noch auf Wunsch. (4) In einer „Als Nächstes“-Zeile, die mehrere Hunde betrifft, steht der Hundename vorn in der Meta-Zeile („Luna · Tierarzttermin · in 4 Tagen“); der Hundename-Tag entfällt, `radius.nested-sm` bleibt dem Zeit-Chip.
Verworfen: Papierkorb in Salbei statt Rot (ein Löschen-Icon auf jeder Karte bleibt Lärm, egal in welcher Farbe), Löschen nur im Bearbeiten-Formular (Gewicht und Allergien haben eines, fünf andere Listen nicht), gestrichelte Zeile in Filz (Filz braucht keinen gestrichelten Rand, um nach Hinzufügen auszusehen).
App: namelessjames/frappies PR #194.

### 2026-11-01: Der Ball zum Fangen
Kontext: In der „Als Nächstes“-Spur (Home, Steckbrief, Eingang) hakt ein Tipp auf den Ball eine Erinnerung ab. Nichts zeigte das: der Ball kann ein 10-px-Punkt sein, hatte keinen Druckzustand außer Deckkraft und keinen Haken, und die Zeile verschwand ohne Bestätigung. Die Kritik der App (2026-11-01, `.impeccable/critique`) stufte das als P1 ein: Die Signaturinteraktion war nur für Screenreader benannt. Fall 1 (ein Muster, das die Marke noch nicht abdeckte: der abhakbare Ball).
Entscheidung: Ein abhakbarer Ball sitzt in einem 44-pt-Heckenlinien-Ring (siehe „Der Ball“). Druck: Ring `brand`, Ball auf 0,92 mit `motion.spring.press`. Loslassen: Ring 220 ms (`motion.duration.fast`) in `secondary` mit Haken in `secondary-foreground`, dann rollt der Ball. Bälle auf Impfungen und Terminen bleiben ohne Ring.
Verworfen: Ball pulsieren oder leuchten lassen (verboten in „Der Ball rollt“, und Dringlichkeit darf nicht wie eine Einladung aussehen), ein zweites Häkchen rechts in der Zeile (zwei Bedienelemente für eine Handlung, und der Ball verlöre seine Rolle), Wischen zum Erledigen (unsichtbar wie das Löschen, löst das Problem nicht), ein hohler Ball für abhakbare Zeilen (bricht die Ballskala: Größe ist Dringlichkeit, Filz ist Filz).
Dazu gehört der Weg zurück: Nach dem Abhaken zeigt der Bildschirm fünf Sekunden lang das Erfolgsbanner „„{{Titel}}“ erledigt.“ mit einem fetten Textbutton „Rückgängig“ rechts (44 pt). Rückgängig öffnet die Erinnerung wieder und nimmt die erzeugte nächste Wiederholung zurück. Fünf statt drei Sekunden, weil es das einzige Rückgängig ist.
App: namelessjames/frappies PR #198.

### 2026-11-01: Lokaler Modus hat ein Gesicht
Kontext: Ohne Konto begrüßte Home den Menschen als „Hundemensch“, der Avatar-Knopf in jeder Kopfzeile zeigte ein „?“, und das Profil sagte „Dein Profil“ über einem leeren Hero; nichts erklärte, dass die Akte nur auf diesem Handy liegt und was ein Konto bringt. Die Kritik der App (2026-11-01) stufte das als P1 ein. Fall 1 (eine Komponente und ein Zustand, die die Marke noch nicht abdeckte).
Entscheidung: (1) Ist weder Name noch E-Mail bekannt, zeigt der Avatar-Knopf (Kopfzeile, Home-Schale, Profil-Hero) statt Initialen das Phosphor-Personen-Glyph in Filz, fett, 20 px im 44-px-Knopf und 32 px im 72-px-Hero; nie ein „?“. Home grüßt dann mit einem bloßen „Hallo“. (2) Im lokalen Modus steht an der Stelle des Profil-Heros eine Kleeschalen-Karte „Deine Akte liegt nur auf diesem Gerät“ (Headline 22) mit einem Satz dazu, was ein Konto bringt (gesichert, zweites Gerät, Einträge bleiben), dem Ball-Plate, dem Filz-Primärbutton „Konto erstellen“ und dem Filz-Textlink „Ich habe schon ein Konto“. Der Anmelden-Button am Fuß des Profils entfällt.
Verworfen: einen erfundenen Namen behalten („Hundemensch“, „Freund“: grüßt einen Fremden mit einem Kosenamen), ein Hinweisbanner auf Home (Home gehört dem Nächsten, nicht der Kontowerbung), ein Modal beim Start (der lokale Modus ist eine freie Wahl, CONTEXT.md, und braucht keine Unterbrechung), „Gast“ als Wort (Glossar: zu vermeiden).
App: namelessjames/frappies PR #198.

### 2026-11-01: Schnell-Eintragen in zwei Gruppen
Kontext: Das Blatt hinter „In die Akte eintragen“ listete alle acht Akten-Bereiche gleichwertig, bis fast an die Statusleiste. Acht gleiche Optionen an einem Entscheidungspunkt liegen über dem Arbeitsgedächtnis (Kritik der App, 2026-11-01, P2). Fall 2 (eine bestehende Komponente ändert sich); braucht die Freigabe der Inhaberin oder des Inhabers.
Entscheidung: Zwei Gruppen zu je vier. Oben die Einträge, die immer wieder anfallen, in der Reihenfolge, in der das Papier kommt: Impfungen, Medikamente, Tierarztbesuche, Gewicht, als Zeilen mit Icon-Kachel und fettem Titel wie bisher. Darunter, nach einer Heckenlinie und 12 px, die seltenen: Erkrankungen, Allergien, Erinnerungen, Hundemarken, als 44-px-Zeilen ohne Kachel, Glyph 18 px in Salbei, Figtree Medium 15. Die Akte selbst (Steckbrief) behält ihre medizinische Reihenfolge.
Verworfen: „Mehr“ aufklappen (versteckt vier Einträge hinter einem weiteren Tipp), zuletzt genutzt zuerst (die Reihenfolge springt, nichts lässt sich lernen), ein Raster aus Kacheln (acht Kacheln sind acht Optionen, nur bunter).
App: namelessjames/frappies PR #198.

### 2026-11-01: Home ohne KI-Kacheln
Kontext: Home trug unter der Hundeliste die beiden KI-Kacheln und die Zeile „Bisherige Auswertungen“, die jeder Steckbrief ebenfalls zeigt. Mit zwei Hunden lief Home drei Bildschirme lang, und „Alles anzeigen“ öffnete einen Eingang mit denselben Zeilen. Kritik der App (2026-11-01, P2); die Inhaberin oder der Inhaber hat dem Wegfall zugestimmt. Fall 2 (ein bestehender Bildschirm ändert sich).
Entscheidung: Home besteht aus vier Dingen: Schale, „Als Nächstes“, Hundeliste, Filz-Button „In die Akte eintragen“. Die KI-Werkzeuge stehen nur noch auf dem Steckbrief des Hundes. „Alles anzeigen“ erscheint nur, wenn der Eingang mehr hält als die Spur zeigt.
Verworfen: KI-Kacheln behalten und den Steckbrief entlasten (die Werkzeuge gehören zum Hund, nicht zum Tag), eine einzelne „KI“-Zeile auf Home (bleibt ein fünftes Ding ohne Bezug zum Nächsten).
App: namelessjames/frappies PR #198.

### 2026-11-05: Einführung beim ersten Start
Kontext: Neue Halterinnen und Halter fanden die Funktionen jenseits der Grundlagen nicht (Gesundheitsakte als PDF, Befund scannen, Notfallkarte), und die Wahl zwischen lokalem Modus und Konto stand nirgends vor dem ersten Eintrag. Ein Wegwerf-Prototyp verglich drei Wege: nur Hinweise in den Funktionen, nur Folien, beides; beides gewann, mit mehr Folien. Fall 1 (eine neue Art Bildschirm, die die Marke noch nicht abdeckte).
Entscheidung: Sechs Folien einmal pro frischer Installation (siehe „Einführung“), „Überspringen“ auf allen außer der letzten, die letzte stellt lokalen Modus („Los geht's“, primär) und Konto (Textlink) gleichwertig frei. Premium als leises Label auf der Scan-Folie, kein Preis.
Verworfen: Coach Marks und geführte Touren (verdecken den Bildschirm, den sie erklären), Lottie oder Rive (neue Abhängigkeit und neue Zeichnungen), ein Konto-Hinweis auf Home oder spätere Erinnerungen daran (Home gehört dem Nächsten, Entscheidung „Lokaler Modus hat ein Gesicht“), aktive Seitenpunkte in Filz (Filz heißt Nächstes, nicht „hier bist du“).
App: namelessjames/frappies PR #221 (#203).

### 2026-11-05: Erste-Schritte-Zustand statt leerer Liste
Kontext: Leere Listen zeigten eine Pose und einen Satz „Noch keine … Trag oben … ein.“, und das Formular stand auf einem leeren Bildschirm schon offen; wer den Bildschirm zum ersten Mal sah, erfuhr nicht, wozu er da ist. Die Regel sah Display 32 und einen eigenen Primärbutton vor; daneben stand der Hinzufügen-Button des Bildschirms, also zwei Filzflächen. Fall 2 (eine bestehende Komponente ändert sich); braucht die Freigabe der Inhaberin oder des Inhabers.
Entscheidung: `RecordEmpty` wird der Erste-Schritte-Zustand (siehe „Illustration in Komponenten“): Titel Headline 22 statt Display 32, höchstens zwei Sätze, kein eigener Button, gilt für jede Funktion, nicht nur für Akten-Listen. Das Formular startet geschlossen; „In die Akte eintragen“ auf Home öffnet es weiter direkt.
Verworfen: Display 32 im Zustand (in einer Karte unter Hundechip und Button bricht der deutsche Titel auf drei Zeilen), ein eigener Button im Zustand (zweiter Filz neben dem Hinzufügen-Button, „Felt means next“), ein Wegklicken mit gespeichertem Zustand (der Zustand ist die leere Liste selbst; nichts zu merken).
App: namelessjames/frappies PR #221 (#203).
