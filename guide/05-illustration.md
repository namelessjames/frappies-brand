# 05 Illustration

Der Frappies-Hund ist ein struppiger, mittelgroßer Mischling, mit lockerer Pinsel-Tuschelinie in Kleetinte gezeichnet, mit ein paar flachen Filzflächen, ohne Schattierung, ohne Verlauf, ohne Textur. Ein Hund, acht Posen, jede mit einer Bedeutung. Er gehört zu Momenten, nie zu Datenzeilen.

![Zoomie](../assets/illustrations/zoomie.png)

## Stil

- Eine Linienstärke, lebendig und leicht wackelig, kein Clean-Vektor.
- Genau zwei Farben: Linie Kleetinte #14301F, Füllung Tennisball-Filz #D9EE52. Das Fell bleibt weiß (die Fläche darunter scheint durch).
- Eine große Filzfläche am Körper, wie ein Kleidungsstück in einem Editorial-Comic; der Rest ist Linie.
- Erwachsener Hund, natürliche Proportionen. Warm und witzig, nicht cartoonhaft, nicht kindlich.
- Transparenter Hintergrund, großzügiger Rand, kein Bodenschatten, kein Text.
- Requisiten in derselben Sprache: Ball mit Naht, Napf, Leine, Marke, Blatt Papier. Nichts Technisches (keine Laborgeräte, keine Kalender-Icons; das Briefing von damals ist verworfen).

## Die acht Posen

| Pose | Datei | Bedeutung | Einsatz |
|---|---|---|---|
| Zoomie | `zoomie.png` | Freude, Ankunft | Home-Schale, Onboarding, Willkommen, Website-Hero |
| Resting | `resting.png` | Nichts zu tun oder einzutragen | „Heute alles erledigt“, leere Erinnerungen |
| Ball | `ball.png` | Einladung anzufangen | Leere Akte, erster Hund, Premium-Seite |
| Listening | `listening.png` | Alles ruhig, horcht | Mitteilungen leer, Erinnerungen |
| Sniffing | `sniffing.png` | Liest ein Dokument | Befund scannen, KI-Auswertungen, Warten |
| Bowl | `bowl.png` | Futter | Futterplan |
| Lead | `lead.png` | Rausgehen | Tierarztpraxen, Tierarztbesuche, Gassi-Runden |
| Tag | `tag.png` | Identität | Hundemarken, Chipnummer |
| Papers | `papers.png` | Der Zettelhaufen vor Frappies | Website-Hero |

Requisiten und Flächen ohne Hund, nur für die Website: `meadow.png` (die Hundewiese: Hecke am Horizont, Grasbüschel, nur Linie) und `ball-grass.png` (der gezeichnete Ball im Gras, für die Ballskala auf der Wiese).

Alle Posen sind so beschnitten, dass sie etwa gleich hoch stehen. Seitenverhältnisse (Höhe ÷ Breite): papers 1004/1456, zoomie 594/973, resting 580/932, ball 622/871, listening 900/664, sniffing 593/900, bowl 756/900, lead 626/900, tag 837/657.

## Shell-Varianten

Jede Pose hat eine `*-shell.png` für die Kleeschale und jede dunkle Fläche, weil Tintenlinien dort verschwinden: Fell und Zettel bleiben weiß, die inneren Linien Tinte, nur die Außenlinie (Silhouette und Bewegungsstriche) wird Kreide. Dieselben Filzflächen. Seit dem 24.10.2026 gilt das für alle Posen und für das Porträt der Website; `scripts/derive-shell.py` leitet eine Shell-Variante deterministisch aus dem Original ab und schreibt die Sidecar-Datei. In der App wählt `Illustration` im Dunkelmodus automatisch die Shell-Variante. Die Originale gehören auf Weiß und Kleeboden.

Nie ein Original auf Dunkel, nie eine Shell-Variante auf Hell.

Die Website nutzt seit dem 24.10.2026 einen eigenen Posensatz unter `assets/illustrations/website/`: derselbe Hund im Stil des freigegebenen Website-Entwurfs (dichterer Strich, Fell weiß mit Filzflecken, Halsband mit rundem Filzanhänger), erzeugt aus dem Entwurf und dann aus seiner Hero-Pose als Stilreferenz; dazu Requisiten (Grasbüschel, die Hundemarke „Zoomer“). Jede Datei trägt ihren Prompt und ihre Herkunft in der `.png.json` daneben. Neue Website-Posen entstehen hier aus `hero-dog.png` als Referenz. Seit dem 31.10.2026 ist dieser Satz auch der Posensatz der App: Porträt (`app-avatar`), Home-Schale (`hero-dog` auf `grass-left`), und die Bedeutungen Resting → `closing-dog`, Listening → `listening-dog`, Sniffing → `scan-dog`, Bowl → `meals-dog`, Lead → `record-dog`, Tag → `feature-dog`, jede mit `*-shell.png` aus `scripts/derive-shell.py`. Zoomie und Ball haben noch keine Entsprechung in diesem Strich; die App zeigt dort bis dahin die lockeren Zeichnungen.

Für Hilfe, Blog und Social liegen unter `assets/illustrations/web/` WebP-Kopien (höchstens 1600 px breit, die Wiese 2880 px), aus den PNG erzeugt; die Website kopiert nur diese.

## Wo sie hingehört

Momente: leere Zustände, Erstlauf, Paywall, Warten, Ankunft, Website-Hero, Store-Screenshots, Social-Beiträge.

Wo nicht: Datenzeilen, das Akten-Raster, Formulare, neben Zahlen, als Hintergrundmuster, als Icon-Ersatz.

Text läuft nie unter die Zeichnung; ihr Fußabdruck wird mit Padding reserviert (auf Home 80 bis 96 px rechts).

## Bewegung

Einzug mit Feder (`motion.spring.entry`): von links geschoben mit leichter Drehung, oder Skalierung von 0,85. Unter Reduced Motion steht sie sofort still. Siehe [07 Bewegung](07-bewegung.md).

## Neue Posen erzeugen

Jede Pose ist aus einer Quelle generiert und trägt ihre Herkunft eingebettet (`*.png.json`: Prompt, Modell, Datum, Referenz). Eine neue Pose entsteht nur mit dem Stil-Prompt unten, der Referenz `zoomie.png` als Bildvorlage, und bekommt ihre `*.png.json`. Danach die passende Shell-Variante. Eine neue Pose ist eine Markenentscheidung (siehe [CONTRIBUTING.md](../CONTRIBUTING.md)).

Stil-Prompt (Englisch, wörtlich übernehmen, nur den Absatz „Subject“ ersetzen):

```
Hand-drawn editorial illustration in exactly the style of the reference sheet: loose, confident brush-pen ink line of one even weight, slightly wobbly organic strokes, a few flat solid fill shapes, no shading, no gradients, no texture, no text, no ground shadow. Exactly two colours: line work in deep clover green-black #14301F and flat fills in tennis-ball felt chartreuse #D9EE52. Fully transparent background, the subject isolated with generous empty margin.

Subject: a scruffy medium-sized mixed-breed dog [POSE AND PROPS]. The dog's body has one large flat chartreuse fill patch (like the reference's filled garments), the rest is line. Adult, natural proportions, warm and witty but not cartoony or childish. [COMPOSITION], dog centred.
```

Kein Stock-Hundebild, kein zweiter Illustrationsstil, keine Fotografie als Ersatz. Wenn die Marke je Fotografie braucht, ist das eine Entscheidung mit eigenem Kapitel, nicht ein Bild in einem Beitrag.

## Entscheidungen

### 2026-10-21: Zettelhaufen, Hundewiese und Ball im Gras für die Website
Kontext: Die Landing Page war zu brav (namelessjames/frappies-web, Landing-Redesign). Der gewählte Entwurf öffnet auf dem Zettelchaos, das jede Hundehalterin kennt, und löst es auf der Hundewiese auf, wo Dringlichkeit Entfernung ist. Dafür fehlten eine Pose und zwei Requisiten. Fall 2 (bestehende Regeln ändern sich: Text in der Zeichnung, Shell-Variante mit weißem Fell, die Wiese als Fläche unter App-Karten).
Entscheidung: Neue Pose `papers.png` (Hund schnüffelt im Zettelhaufen) mit dem Stil-Prompt und `zoomie.png`/`sniffing.png` als Vorlage. Auf ihren Requisiten stehen drei handgeschriebene Wörter (Impfpass, Wurmkur??, Blutbild) in derselben Tuschlinie; sie erzählen das Chaos, sonst bleibt Text aus Zeichnungen draußen. `papers-shell.png` behält auf Wunsch des Inhabers Fell und Zettel weiß und färbt nur die Außenlinie in Kreide, damit der Hund auf der Schale wie im Entwurf steht. `meadow.png` ist die Wiese als reine Linie; auf ihr stehen nur die Karten der Ballskala, nie Fließtext. `ball-grass.png` ist der Ball der Ballskala als Zeichnung, nur auf der Wiese; in der App bleibt der Ball die Komponente. Tinte auf Filz bleibt Tinte auch in den Shell-Varianten.
Verworfen: Shell-Variante mit ausgespartem Fell (der Inhaber wollte die Linien dunkel und die Flächen weiß), Wörter als HTML über der Zeichnung (bricht beim Skalieren auseinander), ein Foto echter Zettel (zweiter Bildstil), die Wiese als Muster hinter Text (verletzt „Wo nicht“).
Web: namelessjames/frappies-web#13.

### 2026-10-21: Sniffing und Bowl auf Dunkel wie der Zettelhaufen
Kontext: Auf der Website stehen Sniffing und Bowl in der dunklen KI-Sektion, direkt nach dem Hero mit `papers-shell.png`. Zwei Behandlungen desselben Hundes auf demselben Grund wirkten wie zwei Hunde. Fall 2 (bestehende Shell-Varianten ändern sich; die App nutzt sie im Dunkelmodus).
Entscheidung: `sniffing-shell.png` und `bowl-shell.png` bekommen dieselbe Behandlung wie `papers-shell.png`: Fell weiß, innere Linien Tinte, Außenlinie Kreide. Die übrigen Shell-Varianten bleiben vorerst ausgespart, bis die App entschieden hat.
Verworfen: alle Shell-Varianten auf einmal umstellen (ändert jeden dunklen App-Zustand ohne Prüfung), nur die Website-Kopien ändern (die Website kopiert die Marke byte-genau).
Web: namelessjames/frappies-web#13.

### 2026-10-21: Tag, Lead, Ball und Resting auf Dunkel wie der Zettelhaufen
Kontext: Im Dunkelmodus der Website stehen Tag, Lead, Ball und Resting noch mit ausgespartem Fell neben Sniffing und Bowl mit weißem Fell. Der Inhaber will alle Hunde der Website gleich. Fall 2 (bestehende Shell-Varianten ändern sich; die App nutzt sie im Dunkelmodus).
Entscheidung: `tag-shell.png`, `lead-shell.png`, `ball-shell.png` und `resting-shell.png` bekommen dieselbe Behandlung: Fell weiß, innere Linien Tinte, Außenlinie Kreide. Zoomie und Listening folgen, wenn die App sie braucht.
Verworfen: nur die Website-Kopien ändern (die Website kopiert die Marke byte-genau).
Web: namelessjames/frappies-web#15.

### 2026-10-24: Posensatz der Website
Kontext: Der Website-Entwurf, den der Inhaber wählte, zeigte den Hund in einem dichteren Strich als die App-Posen. In der Plattenprüfung lehnte er die App-Posen für die Website ab („I want the comp dog illustration“) und nahm die aus dem Entwurf erzeugten an. Die Website kopiert Illustrationen byte-genau aus der Marke, also gehören die Dateien hierher. Fall 1 (ein neuer Posensatz, der zur Marke dazukommt).
Entscheidung: `assets/illustrations/website/` mit hero-dog, feature-dog, app-avatar, record-dog, scan-dog, listening-dog, meals-dog, premium-dog, closing-dog, feature-tag, grass-left, grass-right, grass-right-2 und die Filzkörnung `assets/textures/felt-grain.png`, alle mit Prompt-Sidecar. Die App-Posen bleiben, wie sie sind.
Offen: die App-Posen in diesem Stil neu zeichnen, damit App und Website einen Hund haben.
Web: namelessjames/frappies-web#17.


### 2026-10-24: Alle Shell-Varianten mit weißem Fell; das Porträt kommt in die App
Kontext: Der Steckbrief der App soll aussehen wie das Hundeprofil im Hero der Website (Wunsch des Inhabers): das gezeichnete Porträt über dem Namen. Die App hatte für Zoomie und Listening noch die alten Shell-Varianten mit ausgespartem Fell, sodass im Dunkelmodus zwei Behandlungen desselben Hundes nebeneinander standen. Fall 2 (bestehende Shell-Varianten ändern sich; ein Website-Asset bekommt eine App-Rolle).
Entscheidung: `zoomie-shell.png` und `listening-shell.png` bekommen dieselbe Behandlung wie die anderen Posen (Fell weiß, Außenlinie Kreide), erzeugt mit `scripts/derive-shell.py`, das die Behandlung reproduzierbar macht. `app-avatar.png` wird in der App zum Porträt eines Hundes ohne Foto, mit `app-avatar-shell.png` für den Dunkelmodus; die App kopiert beide byte-genau. Damit stehen in der App zwei Strichstärken desselben Hundes (Porträt dicht, Posen locker); die Posen der App in den Website-Stil zu überführen bleibt die offene Frage vom 24.10.2026 und ist der empfohlene nächste Schritt.
Verworfen: ein Porträt im lockeren App-Stil generieren (der Inhaber hat den Website-Hund gewählt; ein drittes Bild würde die offene Frage nicht lösen), Initiale statt Porträt (der Website-Entwurf lebt vom Hund), die alten Shell-Varianten behalten (zwei Behandlungen in einer App).
App: namelessjames/frappies#117.

### 2026-10-31: Hero-Hund und Gras in der Home-Schale der App
Kontext: Die App wirkte neben der Website veraltet (Inhaber, 31.10.2026, Vergleich der Emulator-Aufnahmen mit der Landing Page). Der größte sichtbare Unterschied im ersten Viewport: Die Website zeigt den sitzenden Hund, der zur Überschrift aufschaut, auf gezeichnetem Gras; die Home-Schale der App zeigte die lockere Zoomie-Pose, die rechts ausläuft. Fall 2 (die Home-Schale ändert sich; Website-Assets bekommen eine App-Rolle, wie das Porträt am 24.10.2026).
Entscheidung: `hero-dog.png` und `grass-left.png` werden App-Assets der Home-Schale: der Hund sitzt rechts, seine Pfoten auf der Graslinie, das Gras läuft über die ganze Breite am Fuß der Schale. Beide bekommen `*-shell.png` aus `scripts/derive-shell.py` (Fell weiß, Außenlinie und Grashalme Kreide), weil die Schale in beiden Themes dunkel ist; die App kopiert alle vier Dateien byte-genau. Die Zoomie-Pose bleibt für Ankunft und Login. Die Textspalte der Überschrift bleibt bei 32 px und endet vor dem Hund; sie hält 54 px Abstand zum Fuß, damit kein Wort in die 42 px hohen Halme läuft.
Verworfen: Überschrift auf 36 px (03 Typografie: über 32 px ist in der App eine andere Marke; längere deutsche Varianten brechen in der schmaleren Spalte auf fünf Zeilen), Gras als Muster hinter dem Text („Wo nicht“), eine neue Pose im lockeren App-Stil (die offene Frage vom 24.10.2026 bleibt; ein drittes Bild löst sie nicht).
App: namelessjames/frappies, Branch der Home-Schale (PR folgt).

### 2026-10-31: Die App übernimmt den Posensatz der Website
Kontext: Seit dem 24.10.2026 standen in der App zwei Strichstärken desselben Hundes nebeneinander (Porträt und Home-Schale dicht, Posen locker); der Inhaber will App und Website mit einem Hund (31.10.2026). Fall 2 (bestehende App-Posen ändern sich; die offene Frage vom 24.10.2026 wird entschieden).
Entscheidung: Die App lädt die Website-Platten unter ihren bisherigen Bedeutungen (Zuordnung oben), kopiert byte-genau mit Sidecar, dazu neue `*-shell.png` für sechs Platten. Die Platten sind quadratisch, der Hund füllt sie; in der App gibt eine Breite allen Posen dieselbe Höhe (130 px in leeren Akten, 150 px in größeren Leerzuständen). Zoomie (Ankunft, Login) und Ball (erster Hund, Feedback, Profil) bleiben vorerst die lockeren Zeichnungen, bis sie aus `hero-dog.png` als Referenz neu entstehen; das ist der nächste Schritt und braucht den Bildgenerator des Inhabers.
Verworfen: die lockeren Posen behalten und nur die Schale wechseln (zwei Hunde in einer App), die Website-Posen auf den lockeren Strich zurückzeichnen (der Inhaber hat den Website-Hund gewählt).
App: namelessjames/frappies, Branch der Home-Schale (PR folgt).

