# 02 Farbe

Eine Kleerampe für jedes Neutral, ein Filzakzent, ein Orange als Alarm. Die Palette ist eine Wiese im Nachmittagslicht. Werte: [`tokens/tokens.json`](../tokens/tokens.json) → `color`.

## Palette

### Signal

| Name | Token | Hell | Dunkel | Rolle |
|---|---|---|---|---|
| Tennisball-Filz | `primary` | #D9EE52 | #D9EE52 | Die eine Hauptaktion pro Bildschirm, aktiver Tab, aktiver Hund, der Ball, die Zahl in der Home-Überschrift. In beiden Themes identisch |
| Tinte auf Filz | `primary-foreground` | #14301F | #14301F | Die einzige Textfarbe auf Filz |
| Filzwäsche | `primary-soft` | #ECF5C4 | #2E4220 | Füllung eines Feldes, dessen Wert aus einem Foto gelesen wurde und das Auge braucht |
| Filz, tiefer | `primary-hover` | #CDE33F | #CDE33F | Hover des Primärbuttons im Web. Erweiterung |
| Frisbee-Orange | `warning` | #FF6A3D | #FF8A5C | Füllung des Zeit-Chips, wenn heute fällig oder überfällig. Sonst nichts |
| Tinte auf Frisbee | `warning-foreground` | #14301F | #14301F | Text auf Orange |
| Frisbee-Tinte | `warning-ink` | #B83A14 | #FF8A5C | Orange als Text auf hellen Flächen, wo die Füllung zu laut wäre |

### Grün

| Name | Token | Hell | Dunkel | Rolle |
|---|---|---|---|---|
| Wiesengrün | `brand` | #2E6B3F | #D9EE52 | Links, Outline-Button, fokussierter Feldrand, Caret und Fokusring im Web, Erfolgstext. Im Dunkeln wird es Filz, weil Grün auf dunklem Boden verschwindet |
| Erfolg | `success` | #2E6B3F | #A8D98A | Bestätigungsbanner, „Foto gespeichert“ |
| Info | `info` | #2E6B3F | #A8D98A | Wie Erfolg |

### Tinte und Boden

| Name | Token | Hell | Dunkel | Rolle |
|---|---|---|---|---|
| Kleeboden | `background` | #F2F4EC | #0F2117 | Seitenhintergrund hinter jeder Karte |
| Kleetinte | `foreground` | #14301F | #EEF2E6 | Fließtext, Überschriften, aktive Tab-Tönung |
| Kartenweiß | `card` | #FFFFFF | #17301F | Karten, Felder, Tab-Leiste, runde Header-Buttons |
| Tintenfüllung | `secondary` | #14301F | #EEF2E6 | Sekundärbutton, gewählter Auswahl-Chip, die Tinten-Kachel auf Home. Im Dunkeln kippt sie zu blassem Klee |
| Boden auf Tinte | `secondary-foreground` | #F2F4EC | #14301F | Text auf Tintenfüllung |
| Kleedunst | `accent`, `muted` | #E7EBDD | #1E3A28 | Hinweisbanner, deaktivierte Füllung, inaktive Auswahl-Chips, Icon-Kacheln |
| Dunsttinte | `accent-foreground` | #3F5A47 | #C3CDB8 | Text im Hinweisbanner |
| Salbei | `muted-foreground` | #5B6F5F | #A9B8A6 | Metazeilen, Platzhalter, inaktive Tab-Labels, deaktivierte Labels. Aus Klee getönt, nie grau |
| Heckenlinie | `border` | #DCE3D3 | #2A4733 | 1-px-Zeilentrenner, 1,5-px-Feldrand in Ruhe |

### Schale

| Name | Token | Hell | Dunkel | Rolle |
|---|---|---|---|---|
| Kleeschale | `shell` | #14301F | #1F3F2B | Der dunkle Header auf Home, Hero-Karten von Hund und Profil |
| Schalentext | `shell-foreground` | #F2F4EC | #EEF2E6 | Text auf der Schale |
| Schale gedämpft | `shell-muted` | #A9B8A6 | #A9B8A6 | Zweite Textebene auf der Schale |
| Schale erhöht | `shell-raised` | #22432F | #2C5239 | Avatar-Mulde auf der Schale |

### Alarm

| Name | Token | Hell | Dunkel | Rolle |
|---|---|---|---|---|
| Alarmrot | `destructive` | #B42318 | #FF7A66 | Fehlertext, Fehlerbanner (10 % Tönung), destruktive Button-Labels, Löschen-Icon. Nie eine große Fläche |
| Text auf Alarmrot | `destructive-foreground` | #FFFFFF | #14301F | Nur auf der vollen Füllung in Bestätigungen |

### Statisch

Drei Werte folgen nie dem Theme: `static.felt` #D9EE52, `static.ink` #14301F, `static.chalk` #F2F4EC. Sie bauen Logo, Icon und Splash.

## Die Rampe

Alle Neutrals liegen auf einer Linie vom dunklen Boden bis zum hellen Boden, alle mit Kleefarbton:

`#0F2117` → `#14301F` → `#17301F` → `#1E3A28` → `#1F3F2B` → `#22432F` → `#2A4733` → `#2C5239` → `#3F5A47` → `#5B6F5F` → `#A9B8A6` → `#C3CDB8` → `#DCE3D3` → `#E7EBDD` → `#EEF2E6` → `#F2F4EC` → `#FFFFFF`

Dunkelmodus ist dieselbe Rampe vom anderen Ende gelesen. Filz bleibt gleich.

## Benannte Regeln

**Felt Means Next (Filz heißt Nächstes).** Filz geht nur auf die Hauptaktion, den aktiven Tab, den aktiven Hund und das nächste Element. Jeder andere gewählte Zustand (Auswahl-Chips, Segmente, Tabs innerhalb eines Bildschirms) ist Tintenfüllung mit hellem Text; Icon-Kacheln sitzen auf Kleedunst. Taucht Filz woanders auf, entfernen.

**Ink On Felt (Tinte auf Filz).** Alles auf Filz ist Kleetinte, in beiden Themes. Weiß oder Grün auf Filz ist ein Fehler.

**Frisbee Is Due (Frisbee heißt fällig).** Orange Füllung nur auf heute fälligen oder überfälligen Elementen. Nie für Dekoration, Kategorien oder Handlungsaufforderungen. Orange als Text auf Hell ist `warning-ink`.

**One Ramp (Eine Rampe).** Jedes Neutral kommt aus der Rampe oben. Keine Grautöne, keine schwarzen Transparenzen außer dem einen FAB-Schatten. App-Dateien `global.css` und `useThemeColors.ts` bleiben Wert für Wert synchron, in beiden Themes.

**Alarm Is Small (Alarm ist klein).** Alarmrot ist Text, Icon oder 10-%-Tönung. Die volle Füllung gibt es nur für den Bestätigen-Button einer destruktiven Aktion.

## Anteile

Auf einem typischen Bildschirm: etwa 60 % Kleeboden und Kartenweiß, 25 % Kleetinte (Schale und Text), 10 % Kleedunst und Heckenlinie, höchstens 5 % Filz, Orange nur als Ausnahme. Wenn Filz mehr als eine Fläche füllt, stimmt die Hierarchie nicht.

## Kontrast

Gemessen mit `node scripts/check-contrast.js` nach WCAG 2.x. Ziel: 4,5:1 für Text, 3:1 für große Schrift und Bedienelemente. Deaktivierte Elemente sind von WCAG ausgenommen; die Paarung ist trotzdem aufgeführt.

| Theme | Paarung | Vordergrund | Hintergrund | Kontrast | Ziel erreicht |
|---|---|---|---|---|---|
| light | Fließtext auf Boden | `foreground` #14301F | `background` #F2F4EC | 12.86 | ✓ |
| light | Fließtext auf Karte | `foreground` #14301F | `card` #FFFFFF | 14.26 | ✓ |
| light | Tinte auf Filz (Primärbutton, Ball) | `primary-foreground` #14301F | `primary` #D9EE52 | 11.07 | ✓ |
| light | Boden auf Tinte (Sekundärbutton) | `secondary-foreground` #F2F4EC | `secondary` #14301F | 12.86 | ✓ |
| light | Salbei auf Karte (Meta, Placeholder) | `muted-foreground` #5B6F5F | `card` #FFFFFF | 5.41 | ✓ |
| light | Salbei auf Boden | `muted-foreground` #5B6F5F | `background` #F2F4EC | 4.87 | ✓ |
| light | Salbei auf Kleedunst (Disabled-Label, WCAG-Ausnahme für inaktive Elemente) | `muted-foreground` #5B6F5F | `muted` #E7EBDD | 4.46 | ✓ |
| light | Dunsttinte auf Kleedunst (Disclaimer) | `accent-foreground` #3F5A47 | `accent` #E7EBDD | 6.27 | ✓ |
| light | Wiesengrün auf Karte (Link, Outline) | `brand` #2E6B3F | `card` #FFFFFF | 6.38 | ✓ |
| light | Wiesengrün auf Boden | `brand` #2E6B3F | `background` #F2F4EC | 5.75 | ✓ |
| light | Frisbee-Tinte auf Karte | `warning-ink` #B83A14 | `card` #FFFFFF | 5.75 | ✓ |
| light | Tinte auf Frisbee (Time-Chip) | `warning-foreground` #14301F | `warning` #FF6A3D | 5.01 | ✓ |
| light | Alarmrot auf Karte | `destructive` #B42318 | `card` #FFFFFF | 6.57 | ✓ |
| light | Schalentext auf Schale | `shell-foreground` #F2F4EC | `shell` #14301F | 12.86 | ✓ |
| light | Schale gedämpft auf Schale | `shell-muted` #A9B8A6 | `shell` #14301F | 6.86 | ✓ |
| light | Filz auf Schale (Wortmarke, Akzent) | `primary` #D9EE52 | `shell` #14301F | 11.07 | ✓ |
| light | Heckenlinie auf Karte (UI-Kontur) | `border` #DCE3D3 | `card` #FFFFFF | 1.31 | – |
| light | Alarmrot auf 10 % Alarmrot-Tönung | `destructive` #B42318 | Tönung #f8e9e8 | 5.58 | ✓ |
| dark | Fließtext auf Boden | `foreground` #EEF2E6 | `background` #0F2117 | 14.78 | ✓ |
| dark | Fließtext auf Karte | `foreground` #EEF2E6 | `card` #17301F | 12.49 | ✓ |
| dark | Tinte auf Filz (Primärbutton, Ball) | `primary-foreground` #14301F | `primary` #D9EE52 | 11.07 | ✓ |
| dark | Boden auf Tinte (Sekundärbutton) | `secondary-foreground` #14301F | `secondary` #EEF2E6 | 12.55 | ✓ |
| dark | Salbei auf Karte (Meta, Placeholder) | `muted-foreground` #A9B8A6 | `card` #17301F | 6.82 | ✓ |
| dark | Salbei auf Boden | `muted-foreground` #A9B8A6 | `background` #0F2117 | 8.07 | ✓ |
| dark | Salbei auf Kleedunst (Disabled-Label, WCAG-Ausnahme für inaktive Elemente) | `muted-foreground` #A9B8A6 | `muted` #1E3A28 | 5.97 | ✓ |
| dark | Dunsttinte auf Kleedunst (Disclaimer) | `accent-foreground` #C3CDB8 | `accent` #1E3A28 | 7.54 | ✓ |
| dark | Wiesengrün auf Karte (Link, Outline) | `brand` #D9EE52 | `card` #17301F | 11.02 | ✓ |
| dark | Wiesengrün auf Boden | `brand` #D9EE52 | `background` #0F2117 | 13.04 | ✓ |
| dark | Frisbee-Tinte auf Karte | `warning-ink` #FF8A5C | `card` #17301F | 6.11 | ✓ |
| dark | Tinte auf Frisbee (Time-Chip) | `warning-foreground` #14301F | `warning` #FF8A5C | 6.14 | ✓ |
| dark | Alarmrot auf Karte | `destructive` #FF7A66 | `card` #17301F | 5.56 | ✓ |
| dark | Schalentext auf Schale | `shell-foreground` #EEF2E6 | `shell` #1F3F2B | 10.24 | ✓ |
| dark | Schale gedämpft auf Schale | `shell-muted` #A9B8A6 | `shell` #1F3F2B | 5.59 | ✓ |
| dark | Filz auf Schale (Wortmarke, Akzent) | `primary` #D9EE52 | `shell` #1F3F2B | 9.04 | ✓ |
| dark | Heckenlinie auf Karte (UI-Kontur) | `border` #2A4733 | `card` #17301F | 1.38 | – |
| dark | Alarmrot auf 10 % Alarmrot-Tönung | `destructive` #FF7A66 | Tönung #2e3726 | 4.87 | ✓ |

## Verbote

- Kein Grau. Auch nicht `#888`, `gray-500`, `rgba(0,0,0,0.5)`.
- Kein Filz als Hintergrund einer Sektion, einer Karte oder eines Badges.
- Kein Orange für Kategorien, „Neu“-Badges oder Premium.
- Kein Weiß auf Filz. Kein Grün auf Filz.
- Kein verblasster Filz für Disabled (liest sich als „los“); Disabled ist Kleedunst mit Salbei.
- Keine Verläufe, keine Transparenzschleier, kein Glas.
- Kein Cremepapier, kein Terrakotta, kein Warm-Teal, kein Soft-Peach (verworfene Welten).
