# 10 Anwendung

Wie die eine Welt auf jede Fläche kommt. Die App ist gebaut und verbindlich; alles andere leitet sich daraus ab. Was die App nicht kennt, ist hier als Erweiterung festgelegt.

## App (iOS, Android, Web)

Modus: Bedienen. Scanbarkeit, Konsistenz und die echte Nutzungsszene (eine Hand, kurze Besuche, in der Praxis) schlagen Ausdruck. Die Marke lebt in präzisen Details: der Ball, die Filzzahl in der Überschrift, der Hund im leeren Zustand.

Alle Werte: [09 Komponenten](09-komponenten.md), [04 Form und Raum](04-form-und-raum.md). Native Konventionen (Safe Areas, Zurück-Gesten, native Date-Picker, Mitteilungen) bleiben erhalten; das Aussehen ist auf allen drei Plattformen dasselbe.

Dunkelmodus ist erstklassig: dieselbe Rampe vom anderen Ende, Filz unverändert, Shell-Illustrationen.

## Website

Modus: Überzeugen. Die Besucherin soll verstehen, was Frappies ist, glauben, dass es ihr Hundeleben ordnet, und die App laden.

**Struktur, die zur Marke passt:**

1. **Hero auf der Kleeschale**, genau wie Home: Wortmarke in Filz oben links, Display XL mit genau einem Satzteil in Filz, die Zoomie-Shell-Illustration läuft rechts aus dem Bild. Ein Primärbutton. Die Schale endet in 28-px-Unterecken.
2. **Danach Kleeboden** mit weißen Karten, die echte App-Inhalte zeigen: eine Hundekarte mit Ball, eine Akten-Zelle, ein Zeit-Chip in Orange. Die Website zeigt das Produkt, nicht Symbole für das Produkt.
3. **Privatsphäre und KI** als eigene Sektion, in der Schärfe aus [08 Sprache](08-sprache.md): Bilder flüchtig, nur Werte gespeichert, die Praxis entscheidet. Der KI-Hinweis steht wörtlich dabei.
4. **Premium** sachlich: was es ändert (kein Monatskontingent), was es nicht ändert (alles andere ist kostenlos). Preise erst, wenn festgelegt.
5. **Abschluss** mit dem ruhenden Hund und einem zweiten Primärbutton (der erste ist außer Sicht; pro Viewport einer).

**Typografie:** Display XL/L für Überschriften, Prose 18/28 für Fließtext, Lesemaß 68ch. Keine Dachzeilen, keine Kicker, keine nummerierten Sektionen.

**Was die Website nicht tut:** Stockfotos, Fotos fremder Hunde, Testimonials, Zahlen („10.000 Hunde“), Pressebalken, Store-Bewertungen, Verläufe, Glas, Parallax, hochzählende Zahlen, Filz als Sektionshintergrund, Orange für „Neu“.

**Breakpoints:** einspaltig unter 768 px, Container 1200 px, Sektionsrhythmus 48 bis 80 px. Der Hero auf dem Telefon stapelt: Überschrift, Button, dann die Illustration unter dem Text, nie darunter durchlaufend.

**Browserflächen:** Textauswahl Filz 70 %, Caret Wiesengrün, Fokusring 2 px Wiesengrün, Scrollbar schmal in Heckenlinie, Unterstreichungen 1,5 px mit 3 px Versatz. Diese Dinge sind Teil der Marke, nicht Browser-Standard.

## Lesen (Hilfe, Blog, Changelog, Rechtliches)

Modus: Lesen. Struktur für Verständnis, dann eine Leseerfahrung, in der man bleibt.

- Kleeboden, eine weiße Prosa-Karte oder eine Spalte ohne Karte, Lesemaß 68ch, Prose 18/28.
- Überschriften Display (32) und Title (20), mehr Raum darüber als darunter.
- Links Wiesengrün unterstrichen. Keine Icons in Überschriften.
- Illustration höchstens einmal pro Seite, am Anfang oder im leeren Zustand (Suche ohne Treffer: Sniffing).
- Rechtstexte bekommen keine Illustration und keinen Filz.

## E-Mail

Modus: Bedienen. Eine E-Mail hat einen Zweck, einen Button, einen Hinweis. Die Vorlagen liegen in der App (`supabase/email/build.js`) und sind gebaut, wie E-Mail es verlangt: Tabellen, Inline-Styles, Systemschrift.

| Element | Wert |
|---|---|
| Hintergrund | Kleeboden #F2F4EC, 32/16 px Außenabstand |
| Karte | Weiß, 520 px, 1 px Heckenlinie, 18 px Radius |
| Kopf | Kleetinte #14301F, 28/32/24 px, Wortmarke Filz als PNG 190 × 48 (`assets/email/wordmark-felt@2x.png`) |
| Überschrift | Systemschrift 800, 24/30, Tinte |
| Text | 16/24, Tinte |
| Button | Filz-Füllung, Tinte 700 16 px, 14 px Radius, 16/28 px Innenabstand |
| Code | 32/40, 800, Laufweite 6 px, auf Kleeboden mit 14 px Radius |
| Hinweis | 14/20 Salbei #5B6F5F |
| Footer | 13/18 Salbei: „Frappies, die Gesundheitsakte für deinen Hund. Fragen? Schreib uns an contact@frappies.app.“ |

Sprache folgt dem Konto (`locale`), Deutsch als Standard. Nur hell (`color-scheme: light`), weil Clients Dunkelmodus unzuverlässig umsetzen. „E-Mail“ mit geschütztem Bindestrich.

Marketing-E-Mails gibt es nicht; wenn sie kommen, erben sie dieses Gerüst, bekommen höchstens eine Illustration oben und halten einen Button.

## Stores (App Store, Google Play)

Modus: Überzeugen, in sechs Sekunden.

- **Icon:** `assets/app-icon/`. Nie neu zeichnen, nie mit Badge versehen.
- **Name:** Frappies. Untertitel: „Die Gesundheitsakte für deinen Hund“.
- **Screenshots:** echte Bildschirme auf Kleeboden oder Kleeschale, Gerät ohne Rahmen oder mit flachem Tintenrahmen, eine Zeile Display 32 pro Bild, der Satzteil mit dem Nutzen in Filz nur auf der Schale. Höchstens einmal eine Illustration (Zoomie auf dem ersten Bild). Keine Sterne, keine „Nr. 1“-Behauptungen, keine Pfeile.
- **Reihenfolge der Bilder:** Home mit Ball und Zahl, Akte eines Hundes, Befund scannen mit Hinweisbanner sichtbar, Erinnerungen, Dunkelmodus.
- **Beschreibung:** Du-Form, dieselben Glossarbegriffe, der KI-Hinweis sinngemäß im Text. Keine Preise, bis festgelegt.
- **Berechtigungstexte:** sagen, wofür („Frappies nutzt die Kamera, damit du Fotos deines Hundes machen und Befunde scannen kannst.“).

## Social

Modus: Überzeugen, beiläufig.

- Quadrat und Hochformat auf Kleeschale oder Kleeboden, nie auf Foto.
- Eine Illustration pro Beitrag, groß, mit Luft. Ein Satz in Display, höchstens ein Satzteil in Filz (nur auf der Schale).
- Wortmarke klein in einer Ecke, Filz auf Schale oder Tinte auf Boden, mit Schutzraum.
- Keine Emoji-Reihen, kein Hashtag-Block im Bild, keine Verläufe, keine Fotos fremder Hunde, keine Memes mit Fremdmaterial.
- Profilbild: `mark.svg` (Tinte-Quadrat; die Plattform rundet).

## Druck (Visitenkarte, Flyer, Praxisaushang)

- Farben: Tinte, Filz, Boden. CMYK-Umsetzung und Pantone-Entsprechung sind noch nicht festgelegt; bis dahin aus den sRGB-Werten konvertieren und vor dem Druck einen Proof prüfen. Filz verliert in CMYK an Leuchtkraft; die Tinte darf dunkler werden, der Filz nicht gelb kippen.
- Mindestgrößen aus [01 Logo](01-logo.md). Bildmarke ab 8 mm, Wortmarke ab 6 mm Höhe.
- Schrift wie am Bildschirm; beide Schriften sind druckbar und OFL-lizenziert.
- Ein Praxisaushang ist Lesen: Kleeboden, eine Überschrift, der ruhende oder horchende Hund, kein Filz als Fläche.

## Dokumente und Präsentationen

Weiße oder Kleeboden-Seiten, Tinte für Text, Bricolage für Titel, Figtree für den Rest. Eine Filzmarkierung pro Seite, für das, was zählt. Kein Orange außer für wirklich Fälliges. Diese Richtlinie selbst ist ein Beispiel: `preview/index.html`.

## Entscheidungen

### 2026-10-19: Erweiterungen für das Web
Kontext: Die App kennt weder Hover noch Breakpoints noch Größen über 32 px. Website, Hilfe und Social brauchen beides.
Entscheidung: Display XL 56/60 und Display L 44/48 (beide 800, -0.03em), Prose 18/28, `primary-hover` #CDE33F, Container 1200, Lesemaß 68ch, Sektionsrhythmus 48 bis 80 px. Hover ist Tonstufe oder Unterstreichung, nie Höhe.
Verworfen: Ein 96-px-Hero (andere Marke), Schatten auf Hover (verletzt „Tonal Step“), Aufhellen als Hover (liest sich als Disabled).

### 2026-10-19: Keine Fotografie
Kontext: Website und Social könnten Hundefotos wollen.
Entscheidung: Der Frappies-Hund ist gezeichnet. Fotos erscheinen nur als Inhalt der Nutzerin (ihr eigener Hund in ihrer Akte), nie als Markenmittel.
Offen: Wenn Fotografie je gewünscht wird, bekommt sie ein eigenes Kapitel mit Stil, Licht und Rechten. Bis dahin keine.
