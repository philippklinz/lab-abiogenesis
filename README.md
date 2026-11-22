# Abiogenese — Learning Lab 02

> Wo endet Chemie? Wo beginnt Leben?

**Status:** Neue Startseite mit sechs Unterlaboren und einem **funktionsfähigen ersten Experiment**. Die weiteren fünf Module sind ausdrücklich geplant.

**Website:** https://philippklinz.github.io/lab-abiogenesis/

## Unterlabore

| Nr. | Thema | Status |
| --- | --- | --- |
| 01 | [Präbiotische Chemie](01_praebiotische_chemie.html) – Konzentration, Verdünnung, Verdunstung | **Interaktiv / V0.1** |
| 02 | Bausteine und Reaktionen | Geplant |
| 03 | Membranen und Protocellen | Geplant |
| 04 | RNA und Information | Geplant |
| 05 | Ursprungshypothesen | Geplant |
| 06 | Evidenzlabor | Geplant |

## Erster Prototyp: Konzentration

Im [Konzentrationslabor](01_praebiotische_chemie.html) lassen sich die Anzahl gelöster Teilchen und das Wasservolumen unabhängig verändern. Das schematische SVG-Gefäß zeigt die Wasserhöhe und die Punktzahl; darunter werden Konzentration und Vergleich zum Ausgangszustand berechnet. Vier Presets und eine aktive Verständnisfrage sind verfügbar.

**Idealisierte Gleichung:** c = N / V. N ist die Anzahl relativer Teilcheneinheiten (TE), V die Zahl relativer Volumeneinheiten (VE). Der Startzustand ist N = 60 und V = 100, also c = 0,60 TE/VE. Bei N = 60 und V = 50 ist c = 1,20 TE/VE – die Konzentration hat sich verdoppelt.

Das Experiment **simuliert keine echten Molekülreaktionen**. Insbesondere bleiben Lösungsmittelwechselwirkungen, Löslichkeitsgrenzen, chemische Reaktionen, Gleichgewichte, Energie- und Stoffflüsse, pH- und Temperaturabhängigkeit unberücksichtigt. Eine Verdunstung kann in Wirklichkeit Ausfällung oder Zersetzung bewirken.

## Wissenschaftlicher Anspruch

Die tatsächliche historische Entstehung von Leben ist nicht bekannt. Selbstorganisation, Molekülbildung, die Nutzung chemischer Energie sowie die Speicherung und Weitergabe von Information lassen sich getrennt erforschen – es gibt jedoch keine gesicherte Reihenfolge der Entstehung. Eine erfolgreiche Einzelreaktion im Labor ist nicht der Nachweis eines historischen Ursprungswegs.

Jedes Unterlabor trennt beobachtete und gesicherte Vorgänge, idealisierte Modelle, wissenschaftliche Hypothesen und offene Fragen.

## Architektur

- GitHub Pages mit statischem HTML, CSS, JavaScript und eigenen SVG-Illustrationen.
- Kein Benutzerkonto, kein Backend, keine Telemetrie und keine externen Laufzeitbibliotheken für das erste Experiment.
- Lokal vendortes, unverändertes [Modern Objectivity Stylesheet](https://philippklinz.github.io/modern-objectivity-style/) aus dem praktischen Kit v0.1.0 (GPL-2.0-only, Quell-Blob c6af71a8688b9001313d19a642e8f308fa463280).
- Das zusätzliche Layout liegt in der lokalen Datei abiogenesis.css; die Experiment-Logik in chemistry-lab.js.
- Andere Learning Labs werden nur über Links eingebunden; keine technische Kopplung.
- Die Funktionen wurden anhand bekannter Beispielwerte und DOM-Interaktionen geprüft; eine vollständige visuelle und assistive Browser-Abnahme steht noch aus.

## Quellen

- [NASA Astrobiology: How did life first emerge on Earth?](https://astrobiology.nasa.gov/education/alp/how-did-life-first-emerge-on-earth/)
- [NASA Astrobiology: Where could life have gotten started?](https://astrobiology.nasa.gov/education/alp/where-life-got-started/)
- [NASA Astrobiology: How did the first cells arise?](https://astrobiology.nasa.gov/education/alp/first-cells-arise/)
- [Czerniak & Saenz (2025): The secret life of RNA and lipids](https://pubmed.ncbi.nlm.nih.gov/40613519/)
- [Vázquez-Salazar (2026): Inside the RNA world, 40 years on](https://doi.org/10.1016/j.tibs.2026.07.002)

Die neue Illustration und die Berechnung sind didaktische Eigenarbeiten; die obenstehenden Quellen sind wissenschaftliche Referenzen, keine Herkunft experimenteller Messdaten in dieser Website.

## Entwicklung und Lizenz

- [Ausbauplan und fachliche Regeln](docs/LAB-02-ROADMAP.md)
- [Anweisungen für Entwicklungsagenten](AGENTS.md)
- [GNU General Public License v2.0 only](LICENSE)
