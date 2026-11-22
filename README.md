# LAB 02 — Abiogenese

**Sechs eigenständige, interaktive Lernlabore** zur präbiotischen Chemie, Molekülstruktur, Kompartimentierung, RNA, Forschungsmodellen und wissenschaftlicher Evidenz.

**Website:** https://philippklinz.github.io/lab-abiogenesis/

Die Entstehung des Lebens ist wissenschaftlich nicht vollständig geklärt. Das Labor demonstriert gesicherte *Teilmechanismen*, hypothetische Zusammenhänge und ihre Grenzen — es stellt **keine historische Rekonstruktion** der Entstehung des Lebens dar.

## Unterlabore

| Nr. | Unterlabor | Interaktives Experiment | Einschränkung |
| --- | --- | --- | --- |
| 01 | [Präbiotische Chemie](01_praebiotische_chemie.html) | Konzentration und Wasservolumen verändern, Verdünnung verstehen, Verständnisfrage | Ideale Stoffmengenbilanz `c=N/V`, kein Reaktionsmodell |
| 02 | [Moleküle & Reaktionen](02_bausteine.html) | Vier Molekülklassen als schematische Strukturen untersuchen; Nukleotid-Bestandteile auswählen | Struktur- und Zuordnungsübung, keine Synthese |
| 03 | [Protocellen](03_protocellen.html) | Amphiphile, Mizellen und Vesikel vergleichen; Stoffaustausch über Modellschritte regulieren | `C_in=100(1-(1-p)^t)` ist ein frei gewähltes Austauschmodell, keine gemessene Permeabilität |
| 04 | [RNA & Information](04_rna_information.html) | RNA-Vorlage eingeben, komplementäre Basen sehen, Fehlerquote wählen, 100 Modellkopien vergleichen | Unabhängige Zufallsfehler, keine chemische RNA-Replikation |
| 05 | [Ursprungshypothesen](05_hypothesen.html) | Vier Ansätze nebeneinander vergleichen, vier geologische Umgebungen untersuchen | Kein Ranking oder Nachweis eines Ursprungsorts |
| 06 | [Evidenzlabor](06_evidenzlabor.html) | Sechs Originalexperimente, jeweils drei Behauptungen, Feedback und Quellen | Unterrichtsaufgaben, keine Reproduktion von Labormessungen |

Alle Unterlabore sind über die Startseite und die Navigation erreichbar. Die Module sind unabhängig voneinander und **keine gesicherte evolutionäre Reihenfolge**.

## Forschungsansatz

Das Projekt trennt bei jeder Fragestellung:

1. **Beobachtung:** Welche experimentellen oder geologischen Befunde existieren?
2. **Lehrmodell:** Welche vereinfachte Beziehung kann man damit erkunden?
3. **Deutung:** Welche Hypothesen werden dadurch gestützt?
4. **Grenzen:** Welche Behauptungen bleiben unbelegt?

Die Molekül-Bausteine (02) sind keine realen Reaktionswege. Die Protocellen-Skizzen (03) bilden keine tatsächliche Membranstabilität in Abhängigkeit von pH oder Salz ab. Die RNA-Kopien (04) nutzen festgelegte Basenpaarung und eine didaktisch konstruierte Fehlerwahrscheinlichkeit. Im Hypothesenlabor (05) werden chemische Mechanismen **von Umwelten getrennt**: beispielsweise können RNA-zentrierte Modelle und hydrothermale Umgebungen nicht einfach gegeneinander bewertet werden. Das Evidenzlabor (06) übt die Prüfung publizierter Aussagen ohne Überdehnung ihrer Schlussfolgerungen.

## Wissenschaftliche Primärquellen

- Miller, 1953, *A Production of Amino Acids Under Possible Primitive Earth Conditions*, https://doi.org/10.1126/science.117.3046.528
- Chen & Szostak, 2004, *Membrane growth can generate a transmembrane pH gradient in fatty acid vesicles*, https://doi.org/10.1073/pnas.0308045101
- Zhu & Szostak, 2009, *Coupled Growth and Division of Model Protocell Membranes*, https://doi.org/10.1021/ja900919c
- Powner, Gerland & Sutherland, 2009, *Synthesis of activated pyrimidine ribonucleotides in prebiotically plausible conditions*, https://doi.org/10.1038/nature08013
- Becker et al., 2018, *Wet-dry cycles enable the parallel origin of canonical and non-canonical nucleosides by continuous synthesis*, https://doi.org/10.1038/s41467-017-02639-1
- *Overcoming nucleotide bias in the nonenzymatic copying of RNA templates*, Nucleic Acids Research (2024), https://doi.org/10.1093/nar/gkae982

Weiterführende Übersichten: https://pmc.ncbi.nlm.nih.gov/articles/PMC7281141/ und https://pmc.ncbi.nlm.nih.gov/articles/PMC7133448/. Die einzelnen Unterlabore verlinken ihre jeweiligen Quellen.

## Architektur und Qualitätssicherung

- GitHub Pages, **statisch**, HTML/CSS/JavaScript, lokal geschriebenes SVG; keine Konten, Telemetrie oder externen JS-Runtimes.
- `modern-objectivity.css`: unverändertes vendortes Modern-Objectivity-Referenz-Stylesheet.
- `abiogenesis.css`: Grundbühne; `lab02-modules.css`: Layout aller Module 02–06.
- `chemistry-lab.js`: Einstiegsmodul; `lab02-modules.js`: fünf unabhängige Modellinteraktionen, aktiviert anhand von `body[data-sublab]`.
- Automatische Browser-QA: `tests/layout-check.mjs` prüft alle HTML-Seiten bei 12 Viewport-Größen (320–1600 px), `tests/modules-check.mjs` testet die Interaktionen in Chromium. Workflow: [Responsive layout checks](https://github.com/philippklinz/lab-abiogenesis/actions/workflows/layout-check.yml).
- Kein Build-Schritt für Besucher. Tests installieren Playwright ausschließlich in GitHub Actions. Reales Experten-Review der Wissenschaftsvermittlung und assistive manuelle Tests bleiben wünschenswert.

## Weitere Dokumentation

- [LAB-02-Roadmap](docs/LAB-02-ROADMAP.md) — Konzepte, bereits implementierter Umfang, Forschungslücken.
- [AGENTS.md](AGENTS.md) — wissenschaftliche, architektonische und technische Entwicklungsregeln.
- [GNU GPL v2.0 only](LICENSE) — Lizenz des eigenen Projekts; fremde Forschungsarbeiten werden ausschließlich verlinkt.

**Nachbarlabore:** [LAB 01 – Die frühe Erde](https://philippklinz.github.io/lab-early-earth/) · [LAB 03 – Molekularbiologie](https://philippklinz.github.io/lab-molecular-biology/).
