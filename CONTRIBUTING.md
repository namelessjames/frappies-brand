# Die Marke ändern

Dieses Repository ist die verbindliche Quelle. Die App setzt um, was hier steht.

## Reihenfolge einer Änderung

1. **Token zuerst.** Werte stehen nur in `tokens/tokens.json`. Dort ändern, mit `$description`, warum der Wert so ist.
2. **Generieren.** `node scripts/build-tokens.js` schreibt `tokens.css` und `tokens.tailwind.css` neu. Generierte Dateien werden nie von Hand bearbeitet.
3. **Kontrast prüfen.** `node scripts/check-contrast.js` muss mit Exit 0 enden. Eine neue Text-auf-Fläche-Paarung kommt in die Liste `PAIRS`.
4. **Guide nachziehen.** Das betroffene Kapitel in `guide/` und, wenn ein Beispiel betroffen ist, `preview/index.html`.
5. **App nachziehen.** `src/hooks/useThemeColors.ts` und `src/global.css` in `namelessjames/frappies`, beide Themes, Wert für Wert. Dann `DESIGN.md` der App.

## Was eine Markenentscheidung ist

Eine Markenentscheidung braucht das Okay der Inhaberin oder des Inhabers, bevor sie umgesetzt wird:

- ein neuer oder geänderter Farbwert,
- eine neue oder geänderte benannte Regel („Felt Means Next“ und die anderen in `AGENTS.md`),
- eine neue Schrift oder ein neues Gewicht,
- eine neue Illustrationspose oder ein zweiter Illustrationsstil,
- Fotografie als Markenmittel,
- ein neuer Radius oder eine Ausnahme von den zwei Radien,
- alles, was die Idee „der Ball liegt auf dem Nächsten“ verwässert.

Keine Markenentscheidung, einfach machen: ein zusätzliches Beispiel, eine Korrektur eines Tippfehlers, ein weiterer Token, der nur einen bestehenden Wert unter einem Rollennamen verfügbar macht, eine Erweiterung der Kontrastliste.

## Entscheidungsformat

Kurz, am Ende des betroffenen Kapitels unter „Entscheidungen“, mit Datum:

```
### 2026-10-19: Hover-Filz für Web
Kontext: Die Website braucht einen Hover-Zustand für den Primärbutton; die App kennt keinen Hover.
Entscheidung: `primary-hover` #CDE33F, Filz eine Stufe tiefer. Label bleibt Tinte.
Verworfen: Aufhellen (liest sich als Disabled), Schatten (verletzt „Tonal Step“).
```

## Herkunft der Werte

Alle Ausgangswerte dieser Richtlinie stammen aus der laufenden App, Stand Oktober 2026 (`DESIGN.md`, `useThemeColors.ts`, `global.css`, `assets/brand/generate.js`, `src/i18n/GLOSSARY.md`). Was darüber hinausgeht, ist im jeweiligen Kapitel als „Erweiterung“ markiert: Web-Typogrößen, Hover-Zustände, Web-Abstände, Lesemaß, Container.
