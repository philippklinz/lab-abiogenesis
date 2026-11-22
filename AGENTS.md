# AGENTS.md — Abiogenese

## Role and purpose

You are working on **Learning Lab 02 — Abiogenese**, an independent static educational website. Primary purpose: curiosity-driven personal learning, experimentation, and occasional public sharing through GitHub Pages. It is **not** a commercial product, not a reusable platform, and not a production SaaS.

The lab number is an **optional learning route**, never a software dependency or required sequence. Do not assume access to any central Learning Labs runtime or Space.

## Subject scope

Präbiotische Chemie, Membranen, Stoffwechsel, Selbstorganisation, erste Informationssysteme und Ursprungshypothesen.

### Guiding learner questions

- Welche einfachen chemischen Bausteine gab es?
- Wie können sich Lipidmembranen und Protocellen bilden?
- Welche Rolle könnte RNA gespielt haben?
- Welche Hypothesen lassen sich experimentell prüfen?

### Working prototype and planned exhibits

- Implemented: Module 01 – prebiotic concentration lab, with live quantity/volume controls, SVG illustration, four presets and a recall exercise.
- Planned: Module 02 – chemical building blocks and specifically sourced reactions.
- Planned: Module 03 – lipid assemblies and protocells.
- Planned: Module 04 – RNA copying and heredity.
- Planned: Module 05 – origin-of-life model comparisons.
- Planned: Module 06 – evidence, experimental constraints, open questions.

## Scientific responsibility

Abiogenese ist kein abschließend geklärter Ablauf. Modelle, Hypothesen, Laborexperimente und gesicherte Beobachtungen sichtbar unterscheiden.

- Distinguish observation, evidence, hypotheses, models, estimates, and consensus.
- Cite factual scientific claims from traceable credible sources when adding content.
- Explicitly label simplifications, scale distortions, uncertain dates and model limitations.
- Never invent publications, citations, simulations, measurements, validations, or sources.
- Never present a conceptual placeholder as a functioning experiment.

## Pedagogy

- Do not assume prior school knowledge. Introduce each object before abbreviations or jargon.
- Prefer **observe → predict → interact → explain**, with useful feedback.
- Make controls meaningful, use a consistent legend, and provide explanations at increasing depth when helpful.
- Prefer clear interfaces to decorative animation. Pause and step through time-dependent processes.
- An experiment should expose a scientifically meaningful relationship, not just an effect.

## Design direction

Modern Objectivity, as documented in the provisional Apperception Machinery BrandBook:
- Quiet graphical UI stage; graphite, warm near-white, signal turquoise `#009E98`.
- Liberation Sans, Liberation Serif, Liberation Mono with fallbacks.
- Accessibility: responsive layout, keyboard operability, discernible focus, explanatory labels, reduced-motion support.
- Scientific illustration colors may differ from brand accents, but must communicate meaning and include legends.
- Avoid implying that an unfinished design guide is formally approved.

## Architecture

- Standalone static HTML/CSS/JavaScript website deployable with GitHub Pages.
- SVG, Canvas, Three.js allowed when materially helpful. Keep versioned third-party dependencies and their notices.
- No required backend, database, registration, analytics, build pipeline, or network access unless unavoidable and explained.
- No shared cross-repository runtime. Copy small design patterns when needed rather than coupling repositories.
- Keep `index.html` as entry point, `README.md` as public project description, and `LICENSE` intact.
- This repository is licensed under GNU GPL v2.0; track separately licensed content and dependencies.

## Working process

1. Inspect the current code and state of the exhibit before changing it.
2. Make focused changes aligned to the learner's question.
3. Verify internal links, JavaScript syntax, central interactions, and responsive rendering where tools permit.
4. State what was tested, what was not, and any scientific uncertainty.
5. Never claim a browser test or GitHub Pages deployment without evidence.
6. Keep docs accurate: planned exhibits are not implemented features.

## Modern Objectivity implementation

Use the **locally vendored** `modern-objectivity.css` (the v0.1 draft [practical style kit](https://philippklinz.github.io/modern-objectivity-style/), source SHA `c6af71a8688b9001313d19a642e8f308fa463280`). Preserve the vendor stylesheet as an exact copy; make stage-specific changes in the local page styles and prefer `--mo-*` semantic tokens. This is a reference style, **not a universal visual mandate**. Keep the standalone site functioning with no CDN dependencies. If upgrading the kit, compare behavior and update attribution/version notes.


## LAB 02 V0.1 – implementation contracts

- The homepage now has six illustrated module cards. Only Module 01 is interactive; do not create dead links or misrepresent 02–06 as implemented.
- The first experiment is at 01_praebiotische_chemie.html, driven by chemistry-lab.js and styled with abiogenesis.css. These files are standalone and use no runtime CDN.
- The experiment models only the ideal mass-balance relationship c=N/V in relative TE/VE units: N ranges from 10 to 120; V ranges from 20 to 100. At baseline N=60 and V=100, c=0.60. Reducing V to 50 while holding N=60 yields c=1.20.
- The drawn particles only symbolise N model units, and fluid level symbolises V. Neither are true molecular dynamics or spatial distributions.
- No concentration-dependent chemical reactions, precipitation, hydrolysis, polymerisation, pH, temperature, diffusion, mineral adsorption or actual origin-of-life pathway is simulated.
- The active question should test that halving V with fixed N doubles c; keep immediate explanatory feedback.
- Preserve the locally vendored Modern Objectivity style sheet unchanged; stage changes belong in abiogenesis.css, with page gutters intact at laptop and mobile widths.
- Keep the six-module roadmap in docs/LAB-02-ROADMAP.md aligned with actual features.
- Scientific distinction: demonstrable chemical mechanisms, candidate early-Earth environments, competing hypotheses, and the unknown historical path cannot be conflated.
- Do not claim visual browser QA, accessibility compliance, or real chemistry validation unless explicitly tested.

## Mandatory responsive layout regression checks

- **Never use `padding: <vertical> 0` on elements that also carry `.abio-wrap`.** This resets the shared horizontal gutters, which already caused a recurring layout regression. Use explicit `padding-top` / `padding-bottom` on spacing classes instead.
- Shared containers must keep `min-width:0` and `max-width:100%`-safe grid children. Do not solve page-wide horizontal overflow with `overflow-x:hidden`; fix the offending element.
- Automated test: `tests/layout-check.mjs`, run via `.github/workflows/layout-check.yml` on HTML/CSS changes. It checks **all standalone lab HTML pages** in Chromium at 320–1600 px, validates no document-level horizontal scrolling, and asserts that `.abio-wrap.abio-lower` retains at least 18 px left and right gutters.
- If installing test dependencies locally, use `npm install --no-save playwright@1.56.1`, `npx playwright install chromium`, then `node tests/layout-check.mjs`. No build dependencies belong to the site's actual runtime.
- Add newly created HTML lab pages to this automatically discovered check by following the convention `NN_name.html`.
