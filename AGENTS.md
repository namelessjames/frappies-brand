# Frappies Brand: instructions for AI agents

You are working on something that carries the Frappies brand (app, website, e-mail, store listing, social post, document). This file is the contract. The human-readable reasoning is in `guide/`; the values are in `tokens/tokens.json`. When the two disagree, `tokens.json` wins and the guide has a bug.

## Read before you design

1. `tokens/tokens.json` for every value. Never type a hex, radius or font size from memory; reference the token.
2. The chapter of `guide/` that covers your surface: `10-anwendung.md` first, then the system chapters it points to.
3. `08-sprache.md` before writing any copy. German first, informal "du", glossary terms are fixed.

## The world in one paragraph

Hundewiese am Nachmittag. One idea: the tennis ball sits on the next thing your dog needs. Deep clover ink (`foreground`, `shell`) carries the shell, the headlines and the text. Tennis-ball felt (`primary`, #D9EE52) fills the one primary action and marks "next": the urgency ball, the active tab, the active dog. Frisbee orange (`warning`) appears only when something is due. Everything else is pale clover ground (`background`) under white cards (`card`). Every neutral is tinted from clover; there is no grey anywhere. Display type is Bricolage Grotesque ExtraBold, UI type is Figtree. Depth is tonal, not shadowed. Two radii: 14px to operate, 18px to read. The dog is drawn, never photographed, in loose ink with flat felt patches.

## Hard rules (check each before you finish)

Scope: every rule binds the app. The website (`namelessjames/frappies-web`) is exempt from the component and layout rules since 2026-10-24 (owner's decision, `guide/10-anwendung.md`, Website); it keeps the rules marked "app and website" and takes radii, depth, spacing, type sizes and layout from its own `DESIGN.md`.

- **Felt means next** (app). `primary` goes only on the primary action (one per screen or viewport), the active tab, the active dog, the next item. Every other selected state is ink fill with light text. Felt as decoration is a defect.
- **Ink on felt** (app and website). Text or icons on `primary` are always `primary-foreground` (#14301F), in both themes. White or green on felt is a defect.
- **Frisbee is due** (app and website). `warning` fill only on items due today or overdue, with `warning-foreground` text. Never for categories, emphasis or calls to action. Orange as text on light surfaces is `warning-ink`.
- **One ramp** (app and website). Every neutral comes from the clover ramp in `tokens.json`. No `#888`, no `gray-500`, no `rgba(0,0,0,x)` tints except the one FAB shadow; the website's shadows are clover ink at low alpha.
- **Two radii** (app). 14px (`radius.control`) for things you operate, 18px (`radius.card`) for things you read. 28px only on the bottom of the Home shell. Full circles only for the ball, avatars, chips, the active tab pill, round icon buttons. Never a pill-shaped button.
- **Tonal depth** (app). No shadows on cards. Separation is one step on the clover ramp. The only shadow in the system is `shadow.fab`.
- **Heavy headline** (app and website). Headlines, counts and figures are Bricolage Grotesque 700/800. Paragraphs, labels and controls are Figtree. Never a paragraph in Bricolage, never an important figure in Figtree.
- **No bare count** (app and website). A number always sits next to what it counts (count + label + latest entry).
- **44 point** (app and website). Every tappable element has a hit area of at least 44pt, including icon-only buttons and the 10px urgency dot.
- **German fits** (app and website). German copy runs about a third longer than English. Labels wrap, never truncate. Only names, e-mails and meta lines may clamp, by line count.
- **The ball scale** (app). Urgency is shown by ball size in a fixed 40px slot: 34px seam ball (today/overdue), 22px disc (this week), 10px hedge dot (later). Never by colour alone.
- **Reduced motion** (app and website). Every motion has a branch that renders the final state. No autoplay loops without it.
- **Honest AI** (app and website). Every AI output carries the legally required disclaimer verbatim (`guide/08-sprache.md`, section "KI-Hinweise"). Do not soften or shorten it.
- **Nothing invented** (app and website). No company name, testimonials, user counts, press quotes, vet endorsements or awards. None of these exist yet. The Impressum and the legal texts exist only on the website's legal pages, in the wording the owner approved; never retype them, the Impressum address included, anywhere else. Prices are set: use only the table in `guide/10-anwendung.md`, section "Website".
- **Dog, not pet** (app and website). User-facing copy says Hund/dog. Database naming (`pets`) does not leak into copy.
- **Loaded symbols stay out** (app and website). The meadow world uses balls, clover, hedges, frisbees, dogs. Nothing else as ornament.

## Surfaces

| Surface | Mode | Read |
|---|---|---|
| App screens (Expo, iOS/Android) | Operate | `guide/09-komponenten.md`, `guide/04-form-und-raum.md` |
| Website, landing, pricing | Persuade | `guide/10-anwendung.md` section "Website" |
| Help, docs, blog | Read | `guide/10-anwendung.md` section "Lesen" |
| Transactional e-mail | Operate | `guide/10-anwendung.md` section "E-Mail" |
| Store listing, screenshots | Persuade | `guide/10-anwendung.md` section "Stores" |
| Social, print | Persuade | `guide/10-anwendung.md` sections "Social" and "Druck" |

## Using the tokens

- CSS: `@import "tokens/tokens.css";` gives `--color-*`, `--font-*`, `--type-*`, `--radius-*`, `--space-*`, `--size-*`, `--shadow-fab`, `--duration-*`, `--ease-out`. Add class `dark` to `<html>` to force dark; `light` to force light; otherwise the OS decides.
- Tailwind v4: `@import "tokens/tokens.tailwind.css";` after tailwind, then `tokens.css` for dark.
- React Native: mirror `color.light` and `color.dark` value for value; the app's canonical copy is `src/hooks/useThemeColors.ts` and `src/global.css`.
- Fonts: Google Fonts, SIL OFL. Bricolage Grotesque 700 and 800; Figtree 400, 600 and 700 in the app, plus 500 on the website (ledes). Load only those weights.
- Icons: Phosphor Icons, weight `bold`, 24px in rows and tabs, 18px inside buttons. `fill` only for the active tab glyph.

## Changing the brand

Values change in `tokens/tokens.json` first, then `node scripts/build-tokens.js`, then `node scripts/check-contrast.js` must exit 0, then the matching chapter in `guide/`, then the app (`src/hooks/useThemeColors.ts`, `src/global.css`; its CI runs `bun run brand:check` against this repo). Do not drift a value to make one screen easier.

A change is legitimate while building the app or the website when it is one of three things: a new component or pattern the brand does not cover, a sensible evolution of the system, or a measurably better experience where a rule and a usability finding collide. Write it up in the decision format in `CONTRIBUTING.md` at the end of the affected chapter, naming the category. New components may land directly on `master`; changes to something that already exists go through a pull request and the owner's approval. The full protocol, from the app's side, is `docs/agents/brand.md` in `namelessjames/frappies`.
