# 08 Sprache

Deutsch ist die Hauptsprache, Englisch die zweite. Frappies sagt Du, klein geschrieben, warm und knapp. Dasselbe Wort für denselben Begriff, überall; keine Variation aus Stilgründen. Die App-Quelle ist `src/i18n/GLOSSARY.md`.

## Stimme

Frappies spricht wie jemand, der selbst Hunde hat und Ordnung mag: direkt, freundlich, ohne Behördendeutsch und ohne Babysprache.

| So | Nicht so |
|---|---|
| „Leg zuerst deinen Hund an, dann führst du hier seine Akte.“ | „Bitte legen Sie zunächst ein Haustierprofil an, um fortzufahren.“ |
| „Heute für Frida: 3 Sachen zu tun“ | „Sie haben 3 offene Aufgaben“ |
| „Das hat nicht geklappt. Bitte versuch es noch einmal.“ | „Fehler 500: Interner Serverfehler“ |
| „Gerade ist nichts fällig.“ | „Keine Einträge vorhanden 🐶✨“ |
| „Willkommen zurück, deine Hunde haben dich vermisst.“ | „Willkommen zurück! Wuff wuff! 🎾“ |

Humor sitzt im Bild (der Hund, der Ball) und in einem Halbsatz, nie in der Datenzeile und nie in einer Fehlermeldung.

## Ton je Situation

| Situation | Ton | Beispiel |
|---|---|---|
| Ankunft, leerer Zustand | warm, einladend, konkret | „Leg deinen Hund an. Danach sammelst du hier Impfungen, Medikamente und Tierarztbesuche und siehst immer, was als Nächstes ansteht.“ |
| Akte, Formular | nüchtern, knapp | „Diagnostiziert am (optional)“ |
| Fällig, überfällig | klar, nicht alarmistisch | „Impfung fällig“, „Überfällig“ |
| Fehler | sagt, was schiefging und was zu tun ist | „Keine Verbindung. Prüf dein Internet und versuch es erneut.“ |
| Löschen | nennt Objekt und Folge, Button wiederholt das Verb | „Erkrankung löschen? Die Einträge dazu werden entfernt.“ → „Löschen“ |
| KI | ehrlich, nie überlegen | „Die KI liest deinen Befund aus. Das kann einige Sekunden dauern.“ |
| Premium | sachlich, ohne Druck | „KI-Nutzungen ohne Monatskontingent. Alles andere gibt es auch kostenlos.“ |
| E-Mail | kurz, ein Button, ein Hinweis | „Fast geschafft! Bestätige kurz deine E-Mail-Adresse, dann kannst du die Gesundheitsakte deines Hundes anlegen.“ |

## Regeln

- **Du, klein.** „du“, „dein“, „dir“, auch in E-Mails und auf der Website. Kein Sie, nirgends.
- **Hund, nicht Haustier.** Nie „Haustier“ oder „pet“ in Texten für Menschen; die Datenbank heißt intern `pets`, das bleibt dort.
- **Satzschreibung.** „Impfung speichern“, nicht „Impfung Speichern“; deutsche Substantive bleiben natürlich groß.
- **Buttons nennen Aktion und Objekt**, wenn es nicht offensichtlich ist: „Impfung speichern“, nicht „Speichern“ auf einer Seite mit mehreren Formularen.
- **Destruktive Bestätigungen** nennen Objekt und Folge; der Button wiederholt das Verb („Löschen“), nie „OK“ oder „Ja“.
- **Fehler** sagen, was nicht ging und was als Nächstes zu tun ist. Keine Fehlercodes, keine englischen API-Texte als Haupttext.
- **Keine Satzfragmente verketten.** Interpolation (`{{name}}`) und Plurale (`_one`, `_other`).
- **Deutsch läuft etwa 30 % länger.** Nicht abkürzen, umbrechen lassen.
- **Daten** über `formatDate()`, nie roh als `YYYY-MM-DD`.
- **Keine Emoji** in Produkttexten, E-Mails, Store-Texten. In Social-Beiträgen höchstens eines, nie als Aufzähler.
- **Keine Ausrufezeichen-Reihen.** Eines pro Bildschirm, wenn überhaupt („Fast geschafft!“).
- **Kein Marketing-Superlativ.** Nicht „die beste“, „revolutionär“, „KI-gestützt“ als Schmuck. Sagen, was es tut.

## Glossar

| Begriff | Deutsch | Englisch | Hinweis |
|---|---|---|---|
| Das Tier | Hund / Hunde | dog / dogs | Nie Haustier / pet |
| Profil des Menschen | Profil | profile | |
| Alle Gesundheitsdaten | Gesundheitsakte | health record | |
| Erkrankung | Erkrankung | condition | Englisch nicht „disease“ |
| Medikament | Medikament | medication | |
| Dosis / Dosierung | Dosis / Dosierung | dose / dosage | |
| Impfung | Impfung | vaccination | |
| Hundemarke | Hundemarke | dog tag | |
| Tierarzt (Eintrag) | Tierarztpraxis / Praxis | vet | Liste: „Tierarztpraxen“ |
| Tierarztbesuch | Tierarztbesuch | vet visit | Nicht „Termin“ für den Eintrag selbst |
| Gewicht | Gewicht / aktuelles Gewicht | weight / current weight | |
| Eine Messung | Gewichtseintrag | weight entry | Nicht „Wiegung“ |
| Alle Messungen | Gewichtsverlauf | weight history | Nicht „weight log“ |
| Erinnerung | Erinnerung | reminder | |
| Chipnummer | Chipnummer | microchip number | 15 Stellen, ISO 11784 |
| Registriernummer | Registriernummer | registration number | |
| Rasse | Rasse | breed | |
| Dokument-Scan | Befund scannen | scan a result | Laborwerte, Blutbilder, Diagnosen |
| KI-Ergebnis | KI-Auswertung | AI analysis | |
| Futterplan | Futterplan | meal plan | |
| KI-Erklärung einer Erkrankung | Erkrankungs-Info | condition summary | Nie „KI-Diagnose“ |
| Freie KI-Nutzungen pro Monat | Monatskontingent | monthly allowance | Geteilt über alle KI-Funktionen; Einheit „KI-Nutzungen“ |
| Tageslimit pro Funktion | Tageslimit | daily cap | Gilt auch für Premium |
| Premium | Premium | Premium | Nicht Pro, nicht „Bezahlstufe“ |
| Kostenlos | Kostenlos | Free | Nicht Basic, nicht Freemium |
| Premium-Test | Premium-Test / testen | Premium trial / try | 7 Tage, einmal, ohne Zahlungsdaten. Nicht „Probeabo“. Button: „Premium-Test starten“ |
| Abo | Abo (Monatlich / Jährlich) | Plan (Monthly / Yearly) | Nicht „Paket“, nicht „Tier“ |
| Abonnent | Abonnent | Subscriber | |
| Abos ansehen | Abos ansehen | See plans | Führt zur Abo-Seite, kauft nie |
| Käufe wiederherstellen | Käufe wiederherstellen | Restore purchases | Wortlaut der Stores |
| Gassi-Runde | Gassi-Runde | walk route | Nicht „Route“ allein, nicht „Track“ |
| Zuordnung (Runde zu Hunden) | Zuordnung | dog assignment | „alle Hunde“ oder eine Auswahl |
| Anmelden / Registrieren / Abmelden | Anmelden / Registrieren / Abmelden | Sign in / Create account / Sign out | |
| Nutzungsbedingungen | Nutzungsbedingungen | Terms of use (Link: „Terms“) | Nicht „AGB“: Frappies verkauft nichts selbst |
| Datenschutzerklärung | Datenschutzerklärung (Link: „Datenschutz“) | Privacy policy (Link: „Privacy“) | Eine für App und Website |
| Impressum | Impressum | Imprint | |
| Speichern / Löschen / Abbrechen / Bearbeiten | Speichern / Löschen / Abbrechen / Bearbeiten | Save / Delete / Cancel / Edit | |
| Mitteilungen | Mitteilungen | notifications | |
| Home-Liste aller Hunde | Deine Hunde | Your dogs | |
| Tabs | Start, Hunde, Gesundheit, Profil | Home, Dogs, Health, Profile | |

## Marke im Text

- „Frappies“ groß im Fließtext, „frappies“ nur als Wortmarke.
- Tagline (Auth, E-Mail-Footer): „Die Gesundheitsakte für deinen Hund.“ Englisch: „The health record for your dog.“
- Headline-Muster auf Home: „Heute für {{name}}: **{{count}} Sachen zu tun**“, der zweite Teil in Filz. Mehrere Hunde: „Heute: **3 Sachen zu tun**“. Nichts offen: „{{name}} hat heute **nichts mehr vor.**“
- Kontakt: contact@frappies.app.

## KI-Hinweise

Rechtlich verpflichtend, wörtlich, über jedem KI-Ergebnis, nicht kürzen, nicht weichspülen. Übersetzungen tragen dieselbe Bedeutung.

**Allgemein (KI-Auswertung, Erkrankungs-Info):**
> Frappies gibt dir unverbindliche Hinweise zur Information. Sie ersetzen keine tierärztliche Beratung, Diagnose oder Behandlung. Sprich vor jeder Änderung an der Gesundheitsvorsorge oder Ernährung deines Hundes mit deiner Tierarztpraxis.

**Futterplan:**
> Die Futtervorschläge von Frappies sind unverbindlich und ersetzen keine tierärztliche Ernährungsberatung. Besprich jede Futterumstellung vorher mit deiner Tierarztpraxis und lass sie bestätigen oder anpassen.

**Ausgelesene Werte (OCR):**
> Die von der KI ausgelesenen Werte können Fehler enthalten. Vergleich sie immer mit dem Originaldokument. Frappies übernimmt keine Gewähr für die Richtigkeit.

**Englisch**, in derselben Bedeutung und ebenso wörtlich:

> Frappies provides suggestions for information only. They are not a substitute for professional veterinary advice, diagnosis, or treatment. Always talk to your vet before changing your dog's health care or diet.

> Frappies meal suggestions are non-binding and don't replace a veterinary nutrition assessment. Talk to your vet before changing your dog's diet, and get their confirmation or adjustments.

> AI-extracted values may contain errors. Always check them against the original document. Frappies doesn't guarantee their accuracy.

Reihenfolge wie oben: allgemein, Futterplan, ausgelesene Werte.

Liest ein Ergebnis Werte aus und deutet sie (Befund mit Diagnosen oder Empfehlungen), stehen der allgemeine Hinweis und der OCR-Hinweis darüber, in dieser Reihenfolge. In einer Liste von KI-Ergebnissen (Verlauf) steht jeder Hinweis, der auf einen Eintrag der Liste zutrifft, einmal über der Liste, nicht in jedem Eintrag.

Der Hinweis steht im Hinweisbanner (Kleedunst, Dunsttinte, Info-Icon, 14-px-Radius). Auf der Website steht derselbe Text überall, wo KI-Funktionen beworben werden.

## Privatsphäre im Text

Wo Fotos ins Spiel kommen, wird gesagt, was passiert: „Foto ist auf deinem Gerät gespeichert.“ Die Auswertung schickt das Bild flüchtig an die KI und verwirft es; gespeichert werden nur die ausgelesenen Werte. Das darf die Website sagen, in genau dieser Schärfe, nicht schärfer („niemals irgendwohin“ wäre falsch).

## Englisch

Englisch folgt denselben Regeln: „you“, sentence case, dasselbe Glossar, dieselben Hinweise. Englische Texte entstehen aus den deutschen, nicht umgekehrt.

## Entscheidungen

### 2026-10-19: KI-Hinweise über Listen von KI-Ergebnissen
Kontext: Der KI-Verlauf der App zeigt Befunde und Futterpläne als Liste. „Über jedem KI-Ergebnis“ hätte einen Hinweis in jeder Karte bedeutet. Fall 1 (neues Muster).
Entscheidung: Jeder zutreffende Hinweis steht einmal über der Liste, wörtlich und vollständig. Deutende Befunde tragen allgemeinen und OCR-Hinweis.
Verworfen: Hinweis in jeder Karte (Wiederholung, die niemand mehr liest), nur der allgemeine Hinweis über der Liste (Futter- und OCR-Hinweis fehlten).
App: namelessjames/frappies#98.

### 2026-10-21: Englische KI-Hinweise
Kontext: Die Website zeigt die KI-Hinweise auch auf Englisch; bisher standen sie nur in der App (`src/i18n/locales/en/common.ts`). Fall 1 (neues Muster: eine zweite Sprache der Hinweise in der Marke).
Entscheidung: Der englische Wortlaut der App steht hier unter den deutschen Hinweisen und gilt wie sie wörtlich. App und Website zitieren ihn von hier.
Verworfen: Die Website übersetzt selbst (zweiter Wortlaut neben der App), die Website liest aus dem App-Repo (Hinweise sind Marke, nicht App-Code).
Web: namelessjames/frappies-web#6.
