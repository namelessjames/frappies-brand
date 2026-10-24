# 10 Anwendung

Wie die eine Welt auf jede Fläche kommt. Die App ist gebaut und verbindlich; alles andere leitet sich daraus ab. Was die App nicht kennt, ist hier als Erweiterung festgelegt.

## App (iOS, Android, Web)

Modus: Bedienen. Scanbarkeit, Konsistenz und die echte Nutzungsszene (eine Hand, kurze Besuche, in der Praxis) schlagen Ausdruck. Die Marke lebt in präzisen Details: der Ball, die Filzzahl in der Überschrift, der Hund im leeren Zustand.

Alle Werte: [09 Komponenten](09-komponenten.md), [04 Form und Raum](04-form-und-raum.md). Native Konventionen (Safe Areas, Zurück-Gesten, native Date-Picker, Mitteilungen) bleiben erhalten; das Aussehen ist auf allen drei Plattformen dasselbe.

Dunkelmodus ist erstklassig: dieselbe Rampe vom anderen Ende, Filz unverändert, Shell-Illustrationen.

## Website

Modus: Überzeugen. Die Besucherin soll verstehen, was Frappies ist, glauben, dass es ihr Hundeleben ordnet, und die App laden.

Die Website ist seit dem 24.10.2026 die Landing Page einer Consumer-App im Stil von Duolingo, Headspace und Finanzguru: laut, farbig, mit dem Hund als Maskottchen. Sie übernimmt von der Marke die Farben, die Schriftfamilien, den Illustrationsstil, die Sprache, die Preise und die KI-Hinweise. Radien, Tiefe, Abstände, Schriftgrößen und Layout gehören der Website selbst und stehen in `DESIGN.md` von `namelessjames/frappies-web`; die Komponenten- und Layoutregeln der App ([04 Form und Raum](04-form-und-raum.md), [09 Komponenten](09-komponenten.md)) gelten dort nicht. Welche Grundregeln aus `AGENTS.md` trotzdem gelten, steht dort beim jeweiligen Punkt.

**Struktur:**

1. **Hero auf Filz**, Kante zu Kante, mit der Filzkörnung (`assets/textures/felt-grain.png`): Wortmarke in Tinte oben links, Navigation rechts (Funktionen, Premium, Sprachwechsel), die Überschrift zentriert in Bricolage 800, darunter Einleitung und Startzeile. Aus dem Fuß des Heros ragt ein flaches Telefon mit dem Startbildschirm der App (Zoomer, heute fällig, als Nächstes), daneben sitzt der Hund und schaut hinauf; Grasbüschel am Fuß. Das ist das einzige Gerät auf der Website.
2. **Eine Funktion pro Farbfläche**, im Wechsel Kleeboden, Tinte, Filz: alle Hunde (Boden), die Akte als weiße Karte mit den Zeilen der App (Tinte), die KI mit drei echten Ergebnissen des App-Modells als App-Karten, jede mit ihrem Hinweis (Boden), Premium mit der Preistabelle (Filz), der Abschluss mit dem schlafenden Hund (Tinte). Weiße Karten mit weichem Tintenschatten tragen den App-Inhalt; der Hund schaut aus Ecken und Kanten der Flächen herein.
3. **Premium** sachlich: was es ändert (kein Monatskontingent), was es nicht ändert (alles andere ist kostenlos, das Tageslimit gilt auch mit Premium). Die Preise stehen je Land in einer eigenen Zeile, darunter „Preise inkl. MwSt.“ und der Hinweis, dass die Stores nach dem Land des Store-Kontos abrechnen; kein „% sparen“, kein Hervorheben eines Abos.

   | Land | Monatlich | Jährlich |
   |---|---|---|
   | Deutschland und Österreich | 4,99 € | 49,99 € |
   | Schweiz | CHF 4.00 | CHF 40.00 |

   Frappies gibt es nur in diesen drei Ländern.

**Illustration:** Die Website nutzt den Posensatz unter `assets/illustrations/website/` (der Hund im Stil des freigegebenen Entwurfs, siehe [05 Illustration](05-illustration.md)) und die Filzkörnung unter `assets/textures/`. Beides kopiert die Website byte-genau; neue Posen entstehen hier, mit Prompt und Herkunft in der Sidecar-Datei.

**Vor dem Start:** Solange die App in keinem Store steht, hat die Website keinen Primärbutton. An der Stelle beider Buttons steht die Startzeile, das Datum fett: „**Ab Januar 2027** für iPhone und Android in Deutschland, Österreich und der Schweiz.“ Keine Warteliste, kein Formular, kein „Bescheid geben“-Link, kein deaktivierter Button. Mit den Store-Links kommen die Buttons zurück; ihre Form steht in [09 Komponenten](09-komponenten.md), „Primärbutton der Website“.

**Typografie:** die fluide Web-Rampe aus [03 Typografie](03-typografie.md), „Web-Erweiterung“. Keine Dachzeilen, keine Kicker, keine nummerierten Sektionen.

**Nur hell:** Die Website hat keinen Dunkelmodus (`color-scheme: light`). Filz, Tinte und Boden sind ihre Flächen in jeder Systemeinstellung.

**Was die Website nicht tut:** Stockfotos, Fotos fremder Hunde, Testimonials, Zahlen („10.000 Hunde“), Pressebalken, Store-Bewertungen, Verläufe, Glas, Parallax, hochzählende Zahlen, Orange für „Neu“, ein zweiter Zeichenstil, mehr als das eine Telefon.

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
- **Beschreibung:** Du-Form, dieselben Glossarbegriffe, der KI-Hinweis sinngemäß im Text. Preise nur mit den Werten aus dem Abschnitt Website.
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

### 2026-10-20: Premium-Preise
Kontext: Die Landingpage (namelessjames/frappies-web#6) soll Premium sachlich erklären; bisher galt „Preise erst, wenn festgelegt“. Die Preise sind jetzt festgelegt, und Frappies erscheint nur in Deutschland, Österreich und der Schweiz. Fall 2 (Weiterentwicklung einer bestehenden Regel).
Entscheidung: Deutschland und Österreich 4,99 € monatlich, 49,99 € jährlich; Schweiz CHF 4.00 monatlich, CHF 40.00 jährlich, inkl. MwSt. Die Website zeigt beide Märkte als feste Zeilen, ohne Sparprozente.
Verworfen: Keine Preise bis zum Start (Premium bliebe vage, obwohl die Preise feststehen). Preis nach Standort (braucht einen Server pro Seitenaufruf, frappies-web ADR 0001, und zeigt Reisenden oder VPN-Nutzern den falschen Preis, weil die Stores nach Konto-Land abrechnen).
Web: namelessjames/frappies-web#6.

### 2026-10-21: Website vor dem Start
Kontext: Die Website geht vor der App online (namelessjames/frappies-web#6). Die Primärbuttons führen in die Stores, die es dann noch nicht gibt. Fall 1 (neues Muster: ein Zustand, den die Marke nicht abdeckte).
Entscheidung: Bis zu den Store-Links kein Primärbutton; die Startzeile steht an seiner Stelle. Der Filz bleibt dem Satzteil im Hero und dem Ball vorbehalten.
Verworfen: Bescheid per E-Mail (sammelt Adressen, die niemand verwalten will), Anmeldeformular (braucht einen Server, frappies-web ADR 0001), ein Button, der nur nach unten springt (Filz ohne nächsten Schritt verletzt „Felt Means Next“), ein deaktivierter Button (wirkt kaputt).
Web: namelessjames/frappies-web#6.

### 2026-10-21: Landing Page mit Zettelhaufen und Hundewiese
Kontext: Der Inhaber fand die Landing Page langweilig und wollte sie mit den Illustrationen lebendiger. Aus drei Strukturen und drei Kombinationen gewählt: oben der Zettelhaufen, darunter die Hundewiese. Fall 2 (die Struktur der Website ändert sich).
Entscheidung: Hero mit „Weniger Zettel, mehr Zeit für deinen Hund.“ und dem Hund im Zettelhaufen; die frühere Hero-Zeile schließt jetzt die Seite. Die Hundewiese zeigt die Ballskala als Tiefe, mit Zoomer als Beispielhund. Jeder Abschnitt hat seine Pose (Tag bei den Hunden, Lead bei der Akte, Sniffing beim Befund, Listening bei der Erkrankungs-Info, Bowl beim Futterplan, Ball bei Premium, Resting am Schluss). Die KI-Sektion liegt dunkel, jede Beispielausgabe trägt ihren KI-Hinweis wörtlich. Bewegung: ein Moment beim Laden, der Hero auf `motion.spring.hero`, dann landen die Dinge auf der Wiese von hinten nach vorn auf `motion.spring.entry`; unter Reduced Motion steht alles.
Verworfen: der Hundecomic (Panels kippen schnell in ein Kartenraster), die Wiese als Hero (das Zettel-Bild trägt den Einstieg stärker), eine durchgehende Szene mit fliegenden Bällen (zu viel Filz als Dekoration).
Web: namelessjames/frappies-web#13.

### 2026-10-24: Die Website wird eine eigene Fläche
Kontext: Der Inhaber fand die Website trotz zweier Überarbeitungen eng und brav und wollte „eine richtige, moderne, mutige Marketing-Website“, die von der Marke nur Illustrationen, Farben und Schrift behält. In der Entscheidungsrunde wählte er den Standard einer Consumer-App-Landing-Page (Vergleich: Duolingo, Headspace, Finanzguru) und den Entwurf mit dem filzgetränkten Hero. Fall 2 (die Struktur und die Regeln der Website ändern sich).
Entscheidung: Die Website ist von den Komponenten- und Layoutregeln der App befreit; ihr System steht in `DESIGN.md` von `namelessjames/frappies-web`. Die Marke behält Farben, Schriftfamilien, Illustrationsstil, Sprache, Preise, KI-Hinweise und die Liste dessen, was die Website nicht tut. Die Website ist nur hell. Ein einziges flaches Telefon im Hero zeigt die App; sonst kein Gerät.
Verworfen: die Regeln der App weiter auf die Website anwenden (hielt sie bei zwei Versuchen eng), ein Stickerbogen, der Heimtierausweis und zwei weitere Entwürfe (vom Inhaber nicht gewählt), die App-Bildschirme in geneigten iPhones in jeder Sektion (vom Inhaber zurückgenommen), Dunkelmodus für die Website (Filzflächen bleiben hell, der Aufwand lohnt für eine Marketing-Seite nicht).
Web: namelessjames/frappies-web#17.

