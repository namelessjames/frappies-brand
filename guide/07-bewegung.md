# 07 Bewegung

Bewegung in Frappies ist physisch und sparsam: Federn, kein Easing-Katalog. Ein Moment pro Bildschirm wird inszeniert; alles andere steht. Werte: [`tokens/tokens.json`](../tokens/tokens.json) → `motion`.

## Der Ball rollt

Die Signaturbewegung. Wird ein Element erledigt, rollt der Filzball auf die nächste Zeile: 64 px Weg, 300 Grad Drehung, Feder `motion.spring.ball` (damping 14, stiffness 140). Ändert sich nur die Dringlichkeit, wächst oder schrumpft die Scheibe in 220 ms Ease-out (`motion.duration.fast`). Unter Reduced Motion blendet der Ball über statt zu rollen.

Der Ball rollt nur an einer Stelle pro Liste. Er springt nicht, pulsiert nicht, leuchtet nicht.

## Federn

| Token | damping | stiffness | Für |
|---|---|---|---|
| `motion.spring.press` | 20 | 400 | Button-Druck: Skalierung auf 0,97, zurück beim Loslassen |
| `motion.spring.entry` | 18 | 300 | Karten und Illustrationen beim Erscheinen |
| `motion.spring.ball` | 14 | 140 | Der rollende Ball |
| `motion.spring.hero` | 14 | 120, Verzögerung 150 ms | Die Home-Illustration |

## Dauern

| Token | Wert | Für |
|---|---|---|
| `motion.duration.fast` | 220 ms | Ballgröße, Ease-out |
| `motion.duration.base` | 250 ms | Banner ein- und ausblenden |
| `motion.duration.slow` | 350 ms | Seitenübergänge, Listen-Umsortierung |
| `motion.easing.out` | cubic-bezier(0.16, 1, 0.3, 1) | Web-Übergänge ohne Feder |

## Einzüge

Illustrationen schieben von links mit leichter Drehung oder skalieren von 0,85. Karten blenden mit 8 px Aufwärtsversatz ein. Ein Bildschirm hat einen inszenierten Einzug, nicht zehn gestaffelte. Nichts, was bereits sichtbar war, wird erneut animiert.

## Laden

Der Scan-Zustand pulsiert sanft (1300 ms, ease-in-out, Schleife) auf dem Vorschaubild. Ein Button im Ladezustand zeigt seine Füllung bei 70 % Deckkraft mit einem kleinen Spinner in Labelfarbe und bleibt deaktiviert. Keine Skeleton-Schimmer in Filz.

## Reduced Motion

Jede Bewegung hat einen Zweig, der den Endzustand rendert. Einzüge stehen sofort. Der Ball blendet über. Buttons skalieren nicht. Die App liest die Systemeinstellung (`ReducedMotionProvider`); das Web nutzt `prefers-reduced-motion: reduce`. Autoplay-Schleifen ohne diesen Zweig sind nicht erlaubt.

## Im Web

Hover ist keine Bewegung, sondern ein Zustandswechsel in 150 ms: Tonstufe oder Unterstreichung. Parallax, Scroll-Jacking und Zähler, die hochlaufen, gehören nicht zur Marke. Ein Hero darf den Ball einmal auf die erste Zeile rollen lassen, wenn die Seite erscheint; das ist der eine Moment.
