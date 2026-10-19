#!/usr/bin/env node
/**
 * WCAG 2.x contrast of every text/fill pairing the brand allows, in both themes.
 * Run: node scripts/check-contrast.js   (prints a Markdown table; exits 1 if a pairing fails its target)
 */
const tokens = require("../tokens/tokens.json");

const hex = (h) => h.match(/[0-9a-f]{2}/gi).map((c) => parseInt(c, 16) / 255);
const lin = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const L = (h) => { const [r, g, b] = hex(h).map(lin); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
const ratio = (a, b) => { const [x, y] = [L(a), L(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const mix = (fg, bg, a) => "#" + hex(fg).map((c, i) => Math.round((c * a + hex(bg)[i] * (1 - a)) * 255).toString(16).padStart(2, "0")).join("");

/** [label, foreground token, background token, target] — target 4.5 text, 3 large text or UI. */
const PAIRS = [
  ["Fließtext auf Boden", "foreground", "background", 4.5],
  ["Fließtext auf Karte", "foreground", "card", 4.5],
  ["Tinte auf Filz (Primärbutton, Ball)", "primary-foreground", "primary", 4.5],
  ["Boden auf Tinte (Sekundärbutton)", "secondary-foreground", "secondary", 4.5],
  ["Salbei auf Karte (Meta, Placeholder)", "muted-foreground", "card", 4.5],
  ["Salbei auf Boden", "muted-foreground", "background", 4.5],
  ["Salbei auf Kleedunst (Disabled-Label, WCAG-Ausnahme für inaktive Elemente)", "muted-foreground", "muted", 3],
  ["Dunsttinte auf Kleedunst (Disclaimer)", "accent-foreground", "accent", 4.5],
  ["Wiesengrün auf Karte (Link, Outline)", "brand", "card", 4.5],
  ["Wiesengrün auf Boden", "brand", "background", 4.5],
  ["Frisbee-Tinte auf Karte", "warning-ink", "card", 4.5],
  ["Tinte auf Frisbee (Time-Chip)", "warning-foreground", "warning", 4.5],
  ["Alarmrot auf Karte", "destructive", "card", 4.5],
  ["Schalentext auf Schale", "shell-foreground", "shell", 4.5],
  ["Schale gedämpft auf Schale", "shell-muted", "shell", 4.5],
  ["Filz auf Schale (Wortmarke, Akzent)", "primary", "shell", 3],
  ["Heckenlinie auf Karte (UI-Kontur)", "border", "card", 1],
];

let failed = false;
const rows = [];
for (const theme of ["light", "dark"]) {
  const c = (k) => tokens.color[theme][k].$value;
  for (const [label, fg, bg, target] of PAIRS) {
    const r = ratio(c(fg), c(bg));
    const ok = r >= target;
    if (!ok && target > 1) failed = true;
    rows.push(`| ${theme} | ${label} | \`${fg}\` ${c(fg)} | \`${bg}\` ${c(bg)} | ${r.toFixed(2)} | ${target > 1 ? (ok ? "✓" : "✗") : "–"} |`);
  }
  // Tinted banners: 10% destructive over card.
  const tint = mix(c("destructive"), c("card"), 0.1);
  const r = ratio(c("destructive"), tint);
  if (r < 4.5) failed = true;
  rows.push(`| ${theme} | Alarmrot auf 10 % Alarmrot-Tönung | \`destructive\` ${c("destructive")} | Tönung ${tint} | ${r.toFixed(2)} | ${r >= 4.5 ? "✓" : "✗"} |`);
}
console.log("| Theme | Paarung | Vordergrund | Hintergrund | Kontrast | Ziel erreicht |");
console.log("|---|---|---|---|---|---|");
console.log(rows.join("\n"));
process.exit(failed ? 1 : 0);
