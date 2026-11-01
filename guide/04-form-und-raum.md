# 04 Form und Raum

Werte: [`tokens/tokens.json`](../tokens/tokens.json) → `radius`, `space`, `size`, `stroke`, `shadow`.

## Radien

Zwei Radien tragen das System.

| Token | Wert | Für |
|---|---|---|
| `radius.control` | 14 px | Dinge, die man bedient: Buttons, Felder, Auswahl-Chips, Banner |
| `radius.card` | 18 px | Dinge, die man liest: Karten, Akten-Zellen, Hero-Karten |
| `radius.shell` | 28 px | Nur die unteren Ecken der Home-Schale |
| `radius.pill` | voll | Ball, Avatare, Hunde-Chips, aktive Tab-Pille, runde 44-px-Icon-Buttons |
| `radius.nested-sm` | 6 px | Zeit-Chip. Nur verschachtelt |
| `radius.nested-md` | 10 px | Auswahl-Chips im Raster, Foto-Thumbnails. Nur verschachtelt |

**Two Radii (Zwei Radien).** 14 px zum Bedienen, 18 px zum Lesen. Ein kleinerer Radius ist nur erlaubt, wenn er in einem der beiden sitzt. Nie eine Pille als Button.

## Striche

| Token | Wert | Für |
|---|---|---|
| `stroke.field` | 1,5 px | Feldrand in Ruhe, Outline-Button, gestrichelter „Weiteren Hund“-Kreis |
| `stroke.divider` | 1 px | Zeilentrenner in einer Karte (Heckenlinie) |
| `stroke.focus` | 2 px | Fokusring im Web, Abstand 2 px, Farbe `brand`. Felder zeigen Fokus über den eigenen Rand |

## Abstände

| Token | Wert | Typisch |
|---|---|---|
| `space.xs` | 4 | Innenabstand Zeit-Chip, Lücke Icon/Label in Tabs |
| `space.sm` | 8 | Lücke zwischen Chips, Label zu Feld (6 bis 8) |
| `space.md` | 12 | Raster-Gutter, Buttons nebeneinander |
| `space.lg` | 16 | Karten-Innenabstand, Abstand zwischen Karten, Bildschirmrand |
| `space.xl` | 20 | Prosa-Karten innen, Home-Bildschirmrand, Button horizontal |
| `space.2xl` | 24 | Primärbutton unter dem letzten Feld |
| `space.3xl` | 32 | Sektionsabstand in der App |
| `space.4xl` | 48 | Web-Sektionsabstand. Erweiterung |
| `space.5xl` | 80 | Web-Großabstand zwischen Kapiteln. Erweiterung |

Enge Gruppen, großzügige Trennung. Über einer Überschrift mehr Raum als darunter.

## Maße

| Token | Wert | Was |
|---|---|---|
| `size.control` | 52 | Buttons und Felder |
| `size.touch` | 44 | Mindest-Trefferfläche von allem Tippbaren |
| `size.icon-button` | 44 | Runde Header-Buttons |
| `size.icon` | 24 | Phosphor in Zeilen und Tabs |
| `size.icon-inline` | 18 | Icon im Button-Label |
| `size.row` | 64 bis 68 | Listenzeile in einer Karte |
| `size.record-cell` | 116 | Akten-Zelle im Zweispalter |
| `size.header` | 60 + Status-Inset | Schwebender Header |
| `size.tab-bar` | 70 + Bottom-Inset | Tab-Leiste |
| `size.avatar` | 32 | Avatar im 44-px-Hunde-Chip |
| `size.ball-slot` | 40 | Fester Platz des Balls |
| `size.ball-today` | 34 | Ball mit Naht: heute fällig oder überfällig |
| `size.ball-week` | 22 | Scheibe: diese Woche |
| `size.ball-later` | 10 | Heckenlinien-Punkt: später |
| `size.web-measure` | 68ch | Lesemaß Web. Erweiterung |
| `size.web-container` | 1200 | Web-Container. Erweiterung |

**44 Point.** Jedes tippbare Element, auch die Wisch-Aktion zum Löschen oder der 10-px-Punkt, sitzt in einer Trefferfläche von mindestens 44 pt. Das sichtbare Zeichen darf klein sein, das Ziel nie.

## Tiefe

Tiefe ist tonal, weich gehoben. Kleeboden, weiße Karte und Kleeschale sind drei Stufen einer Rampe; dazu schwebt jede weiße Karte auf einem diffusen Tintenschatten (`shadow.card`), wie auf der Website. Karten haben keinen Rand. Felder und Outline-Buttons nutzen den 1,5-px-Heckenstrich statt Höhe. Der schwebende Header mattiert den Inhalt darunter (Blur auf iOS und Web, deckender Boden auf Android) statt einen Schatten zu werfen.

| Token | Wert | Für |
|---|---|---|
| `shadow.card` | 0 10px 30px rgba(20, 48, 31, 0.10), 0 1px 2px rgba(20, 48, 31, 0.06) | Jede weiße Karte auf Boden oder Fläche, App und Website |
| `shadow.fab` | 0 6px 14px rgba(20, 48, 31, 0.25) | Der runde Filz-Button „Hund hinzufügen“, der über der Hundeliste schwebt |

**Ink Shadow (Tintenschatten).** Schatten sind Kleetinte mit niedriger Deckkraft, nie Schwarz, nie hart versetzt. Zwei Schatten sind das ganze Vokabular: die Kartenhöhe und die FAB-Höhe. Schalen, Chips, Felder und Buttons werfen keinen; sie heben sich durch die Tonstufe ab. Im Dunkelmodus bleibt der Schatten stehen und verschwindet auf dem dunklen Boden von selbst.

## Layout in der App

Jeder Bildschirm ist eine vertikale Rolle aus ganzen weißen Karten auf Kleeboden, 16 px vom Rand (20 px auf Home). Der Inhalt rollt unter einem schwebenden Header (60 px plus Status-Inset); er beginnt bei Safe-Area oben plus 96 px, aus einem Hook (`useScreenTopPadding`) abgeleitet, nie fest.

In der Karte 16 px Innenabstand (20 px für Prosa). Karten stapeln mit 16 px, Zeilen sind 64 bis 68 px hoch und durch 1 px Heckenlinie getrennt. Das Zweispalt-Akten-Raster hat 12 px Gutter und gleich hohe Zellen (116 px). Formulare sind einspaltig: 52-px-Felder, 14-px-Label darüber, 16 px zwischen Feldern, Primärbutton 24 px unter dem letzten Feld. Buttons nebeneinander teilen eine Zeile mit 12 px dazwischen und wachsen auf den höheren, wenn ein deutsches Label umbricht.

Die Tab-Leiste ist weiß, 70 px plus Bottom-Inset, vier Ziele: Start, Hunde, Gesundheit, Profil. Auf Home trägt die Kleeschale eine zweizeilige Überschrift neben einer 150-px-Illustration, die rechts aus dem Bild läuft; die Textspalte hält 80 bis 96 px Abstand nach rechts.

Es gibt keine Breakpoints. Das Layout ist auf jeder Plattform ein Telefon-Layout; im breiten Browserfenster bleibt es einspaltig und die Karten werden breiter.

**Whole Cell (Ganze Zelle).** Rasterzellen sind vollständige Einheiten: Zahl, Label, letzte Zeile, die ganze Zelle ist tippbar. Keine Tatsache über Zellen verteilen, keine Zelle ohne Stützzeile.

## Layout im Web (Erweiterung)

Die Website bekommt, was die App nicht braucht: Breakpoints und einen Container.

- Container 1200 px, Rand 20 px (Telefon) bis 48 px (Desktop).
- Raster 12 Spalten, Gutter 24 px. Unter 768 px eine Spalte.
- Lesemaß 68ch für Prosa.
- Sektionsrhythmus 48 px (Telefon) bis 80 px (Desktop) zwischen Sektionen; innerhalb einer Sektion 16 bis 32 px.
- Die Kleeschale darf als Hero-Fläche ganz oben stehen, mit 28-px-Unterecken, genau wie auf Home. Danach Kleeboden mit weißen Karten.
- Karten im Web bleiben randlos und schattenlos. Hover hebt nicht; Hover ändert höchstens die Tonstufe (`card` → `accent`) oder unterstreicht den Link.

## Entscheidungen

### 2026-10-31: Karten schweben wie auf der Website
Kontext: Im Vergleich der Emulator-Aufnahmen mit der Landing Page (Inhaber, 31.10.2026) wirkten die App-Bildschirme flach: weiße Karten auf #F2F4EC trennen sich kaum vom Boden, und ohne Höhe lesen sie sich wie frühes Material Design. Die Website hebt dieselben Karten seit dem 24.10.2026 auf einem Tintenschatten. Fall 3 (Regel und Befund kollidieren: „Tonal Step“ gegen die wahrgenommene Flachheit).
Entscheidung: `shadow.card` wird Marken-Token für App und Website (zwei Lagen, Kleetinte bei 10 % und 6 %); die App setzt ihn auf jede weiße Karte (`shadow-card` neben `rounded-card bg-card`). „Tonal Step“ wird zu „Ink Shadow“: Schatten nur in Tinte, nur auf Karten und dem FAB. Die Filz-Flächen (Primärbutton, aktive Tab-Pille, aktiver Hunde-Chip, FAB) tragen die Filzkörnung `assets/textures/felt-grain.png` als gekachelte Rasterfläche, wie die Felder der Website; kleine Scheiben (Ball, Zeit-Chip) bleiben flach.
Verworfen: den Boden eine Stufe dunkler (`muted` wäre dann der Boden, und Chips, Icon-Kacheln und Banner in `muted` verschwänden), Schatten nur auf Akten-Karten (zwei Kartenarten in einer App), Körnung auf jedem Filz (auf einer 10-px-Scheibe ist sie Rauschen).
App: namelessjames/frappies PR #194.

