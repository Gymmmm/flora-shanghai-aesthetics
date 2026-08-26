# Flora Shanghai Aesthetics — Design Direction

## Three Directions

### Theme Name: Quiet Meridian
Very Brief Intro: A restrained luxury healthcare identity combining Shanghai's architectural calm with an editorial magazine rhythm. Warm mineral neutrals, surgical precision, and generous negative space make the experience feel considered rather than promotional.
Probability: 0.07

### Theme Name: Pearl Current
Very Brief Intro: A luminous, gallery-like direction built around soft ivory, pale stone, and translucent layers. The mood is gentle and reassuring, with patient stories treated as quiet visual documents rather than sales assets.
Probability: 0.03

### Theme Name: Neon Clinic After Dark
Very Brief Intro: A more dramatic city-night interpretation with graphite surfaces and restrained electric accents. It suggests an after-hours Shanghai studio, but risks becoming too technology-led for a medical brand.
Probability: 0.02

## Selected Direction: Quiet Meridian

### Design Movement
Contemporary editorial minimalism with references to Swiss typography, quiet luxury hospitality, and Shanghai's modern architectural language. The design should feel like an international medical journal translated into a warm, human digital space.

### Core Principles
1. **Evidence before embellishment** — credentials, process, consent, and limitations stay visible and easy to verify.
2. **Editorial asymmetry** — staggered columns, rule lines, offset captions, and large image fields replace generic centered marketing blocks.
3. **Warm restraint** — ivory, ink, clay, and one muted bronze accent create depth without resorting to metallic excess.
4. **Human scale** — every medical touchpoint is calm, legible, and specific; no urgency language, guarantees, or comparison claims.

### Color Philosophy
The foundation is a warm paper ivory (#F4F0E9) rather than clinical white, giving the brand a sense of tactility and calm. Ink black (#1D1E1C) supplies editorial authority. Stone (#D7D1C6) and shell (#E8E1D7) create soft separation. The signature color is **Meridian Bronze (#A67B5B)**, used sparingly for rules, markers, and small interaction cues so it reads as crafted material, not decorative gold. Deep pine (#263A35) appears in verification and journey moments to communicate steadiness and care.

### Layout Paradigm
A full-bleed editorial canvas with a persistent left-side index on desktop, offset content rails, and wide image-led chapters. Sections intentionally alternate between asymmetric 7/5 and 5/7 compositions, with vertical rules acting as a navigational spine. On mobile, the index collapses into a compact header and the rail becomes a subtle top label; the visual hierarchy remains intact without horizontal scrolling.

### Signature Elements
1. **Meridian rule** — a thin bronze line with a numbered marker that introduces major chapters and acts as a visual progress cue.
2. **Verification stamp** — a small outlined seal reading “VERIFIED / DOCUMENTED” used only around credential and case-information surfaces.
3. **Caption rail** — quiet uppercase microcopy aligned to image edges, echoing a printed medical feature spread.

### Interaction Philosophy
Interactions should feel like opening a well-made publication: links underline or shift a few pixels, cards reveal metadata through a short lift, and buttons use solid tonal changes instead of glow. Every CTA clarifies the next human step. Placeholder actions explain what is not yet connected rather than pretending to submit real information.

### Animation
Use 180–260ms ease-out transitions for hover, focus, and drawer states. Page sections reveal with a 20px upward translation and staggered 40ms timing only when reduced motion is not requested. Images scale no more than 1.025 on hover. The mobile consultation bar remains stable and never bounces. Avoid perpetual motion, parallax, or dramatic zooms that could make a medical service feel theatrical.

### Typography System
Display: **Cormorant Garamond**, using 500–600 weights for large headlines and selected italic emphasis. Body and UI: **Manrope**, using 400–700 weights for accessibility and compact navigation. Eyebrows and metadata use Manrope at 10–12px with 0.18em tracking. Headlines use a tight 0.94 line height; body copy stays around 1.65 for calm reading. Never use Inter.

### Brand Essence
Flora Shanghai Aesthetics is a considered entry point to personalized plastic surgery and aesthetic medicine in Shanghai for international patients who want informed choices, careful planning, and care beyond a single visit.
Personality: **considered, precise, warm**.

### Brand Voice
Headlines should be short, composed, and quietly confident. CTAs should name an action without pressure. Microcopy should disclose uncertainty and next steps in plain English.

Example lines:
- “A different perspective on Asian aesthetics.”
- “Review the information. Then decide with context.”

### Wordmark & Logo
The wordmark should pair a custom high-contrast serif “Flora” with a narrow sans-serif descriptor set beneath it. The mark is a simple botanical meridian: three offset vertical petals intersected by one horizontal line, suggesting a face profile, a city grid, and a care pathway. Use the symbol alone for the favicon and mobile header; never typeset the brand name as a default logo image.

### Signature Brand Color
**Meridian Bronze — #A67B5B.** It is ownable because it sits between clay and antique paper: warmer than institutional taupe, quieter than gold, and specific to the brand's editorial-medical balance.

## File-level reminders
- `client/src/index.css`: enforce Quiet Meridian tokens, paper texture, Cormorant Garamond + Manrope hierarchy, reduced-motion rules, and asymmetric spacing.
- `client/src/App.tsx`: preserve the editorial shell and compact mobile navigation across every route.
- `client/src/data/*`: keep medical content replaceable and label all sample content clearly.
- `client/src/pages/*`: use the meridian rule and caption rail to keep each page connected to the same visual system.
