#!/usr/bin/env node
/**
 * Generates tokens/tokens.css and tokens/tokens.tailwind.css from tokens/tokens.json.
 * No dependencies. Run: node scripts/build-tokens.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const tokens = JSON.parse(fs.readFileSync(path.join(ROOT, "tokens/tokens.json"), "utf8"));
const banner = "/* Generated from tokens/tokens.json by scripts/build-tokens.js. Do not edit by hand. */\n";

const colorVars = (theme) =>
  Object.entries(tokens.color[theme])
    .filter(([k]) => !k.startsWith("$"))
    .map(([k, v]) => `  --color-${k}: ${v.$value};`)
    .join("\n");

const family = (name) => tokens.font.family[name].$value.map((f) => (/\s/.test(f) ? `"${f}"` : f)).join(", ");

const typeVars = Object.entries(tokens.type)
  .filter(([k]) => !k.startsWith("$"))
  .flatMap(([k, v]) => {
    const t = v.$value;
    const fam = t.fontFamily.replace(/[{}]/g, "").split(".").pop();
    return [
      `  --type-${k}-family: var(--font-${fam});`,
      `  --type-${k}-size: ${t.fontSize};`,
      `  --type-${k}-weight: ${t.fontWeight};`,
      `  --type-${k}-leading: ${t.lineHeight};`,
      `  --type-${k}-tracking: ${t.letterSpacing};`,
    ];
  })
  .join("\n");

const simple = (group, prefix) =>
  Object.entries(tokens[group])
    .filter(([k]) => !k.startsWith("$"))
    .map(([k, v]) => `  --${prefix}-${k}: ${v.$value};`)
    .join("\n");

const sh = tokens.shadow.fab.$value;
const shadow = `  --shadow-fab: ${sh.offsetX} ${sh.offsetY} ${sh.blur} ${sh.spread} ${sh.color};`;
const motion = [
  ...Object.entries(tokens.motion.duration)
    .filter(([k]) => !k.startsWith("$"))
    .map(([k, v]) => `  --duration-${k}: ${v.$value};`),
  `  --ease-out: cubic-bezier(${tokens.motion.easing.out.$value.join(", ")});`,
].join("\n");

const css = `${banner}
:root {
  color-scheme: light;
${colorVars("light")}

  --font-display: ${family("display")};
  --font-body: ${family("body")};
  --font-email: ${family("email")};

${typeVars}

${simple("radius", "radius")}

${simple("space", "space")}

${simple("size", "size")}

${simple("stroke", "stroke")}

${shadow}

${motion}
}

.dark {
  color-scheme: dark;
${colorVars("dark")}
}

@media (prefers-color-scheme: dark) {
  :root:not(.light) {
    color-scheme: dark;
${colorVars("dark")}
  }
}
`;

const tailwind = `${banner}
/* Tailwind v4 theme. Import after tailwindcss; pair with tokens.css for the dark overrides. */
@theme {
${colorVars("light")}

  --font-display: ${family("display")};
  --font-body: ${family("body")};

${simple("radius", "radius")}

${simple("space", "space").replace(/--space-/g, "--spacing-")}

${shadow}
}
`;

fs.writeFileSync(path.join(ROOT, "tokens/tokens.css"), css);
fs.writeFileSync(path.join(ROOT, "tokens/tokens.tailwind.css"), tailwind);
// The preview page reads the tokens from a script tag so it also works from file://.
fs.writeFileSync(
  path.join(ROOT, "preview/tokens.js"),
  `${banner}window.FRAPPIES_TOKENS = ${JSON.stringify(tokens)};\n`,
);
console.log("Wrote tokens/tokens.css, tokens/tokens.tailwind.css and preview/tokens.js");
