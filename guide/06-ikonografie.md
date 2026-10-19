# 06 Ikonografie

Frappies nutzt [Phosphor Icons](https://phosphoricons.com), in der App über `phosphor-react-native`, im Web über `@phosphor-icons/react` oder die SVGs.

## Regeln

| Was | Wert |
|---|---|
| Gewicht | `bold` überall. `fill` nur für den aktiven Tab-Glyphen |
| Größe in Zeilen und Tabs | 24 px |
| Größe im Button-Label | 18 px, 8 px Abstand zum Text, links |
| Farbe | Erbt die Textfarbe der Umgebung: Tinte auf Hell, Schalentext auf der Schale, Tinte auf Filz, Salbei wenn inaktiv, Alarmrot für Löschen |
| Trefferfläche | 44 px, auch wenn der Glyph 24 px ist |

Ein Gewicht, eine Bibliothek. Keine Mischung mit Material, Lucide oder selbstgezeichneten Icons. Keine Emoji als Icon-Ersatz, nirgends, auch nicht in Social-Texten als Aufzähler.

## Feste Zuordnungen

Dieselbe Bedeutung bekommt immer dasselbe Icon. Stand der App, Oktober 2026:

| Bedeutung | Phosphor |
|---|---|
| Start (Tab) | `HouseSimple` |
| Hunde (Tab) | `Dog` |
| Gesundheit (Tab) | `FirstAidKit` |
| Profil (Tab) | `UserCircle` |
| Mitteilungen | `Bell`; `BellRinging` fällig, `BellSlash` stumm |
| Zurück | `ArrowLeft` |
| Schließen | `X` |
| Weiter in einer Zeile | `CaretRight` |
| Aufklappen | `CaretDown` |
| Hinzufügen | `Plus` |
| Bearbeiten | `PencilSimple` |
| Löschen | `Trash` (Alarmrot) |
| Datum | `Calendar` |
| Foto aufnehmen | `Camera` |
| Dokument | `File` |
| KI | `Sparkle` |
| Tierarztpraxis | `Stethoscope` |
| Futter | `Bone` |
| Gewicht, Gesundheit allgemein | `Heart` |
| Verlauf | `ClockCounterClockwise` |
| Suche | `MagnifyingGlass` |
| Telefon, E-Mail, extern | `Phone`, `EnvelopeSimple`, `ArrowSquareOut` |
| Passwort | `LockKey` |
| Hinweis (Disclaimer) | `Info` |
| Fehler | `WarningCircle` |
| Erfolg | `CheckCircle`, `Check` |
| Ungültiger Link | `LinkBreak` |
| Erneut versuchen | `ArrowClockwise` |
| Premium | `Star` |

Wenn ein Bildschirm ein Icon braucht, das hier nicht steht: eines wählen, hier eintragen, dann überall dasselbe nehmen.

## Icon-Kacheln

Ein Icon mit Hintergrund (etwa die Werkzeuge auf Home) sitzt auf Kleedunst (`muted`) mit Tinte, oder auf Tintenfüllung (`secondary`) mit Boden-Text, 14-px-Radius. Nie auf Filz; Filz heißt Nächstes, nicht „Werkzeug“.

## Der Ball ist kein Icon

Der Tennisball wird nie durch ein Icon ersetzt. Er ist eine gezeichnete Scheibe mit Naht (siehe [09 Komponenten](09-komponenten.md), „Der Ball“), und sein Durchmesser trägt Bedeutung.
