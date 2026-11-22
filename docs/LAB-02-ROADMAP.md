# LAB 02 — Abiogenese: wissenschaftliches Lern- und Umsetzungskonzept

**Stand:** 22. November 2026 · **V0.1**. Die Entstehung des Lebens ist nicht geklärt. Diese Roadmap beschreibt einzelne Forschungsfragen und Lehrmodelle, keine gesicherte historische Abfolge.

## Leitidee

> Vom Molekül zum evolvierenden System — welche Schritte können wir experimentell untersuchen, und was wissen wir über ihre mögliche Kombination?

Die interaktiven Unterlabore dürfen nicht als notwendige oder abschließend rekonstruierte chronologische Phasen der Erdgeschichte ausgegeben werden. Reaktionen in kontrollierten Laborbedingungen sind nicht automatisch die Lösung des Ursprungsproblems. Vermittlungsstruktur: **Beobachtung → Mechanismus → Modell → Grenzen → offene Frage**.

Die Gegenwart kennt Zellen mit Membranen, Stoffwechsel und Informationsspeicherung. Für die Entstehung einfacher Vorstufen sind mehrere, teilweise miteinander vereinbare und teilweise konkurrierende Forschungsmodelle denkbar.

## Unterlabore

| Nr. | Seite | Arbeitstitel | Interaktion | Status |
| --- | --- | --- | --- | --- |
| 01 | `01_praebiotische_chemie.html` | Präbiotische Chemie | Konzentration und Wassermenge im idealisierten Gefäß, Verdünnung, Reaktionsbedingungen, alltagsnahe Erklärungen | **V0.1 implementiert** |
| 02 | `02_bausteine.html` | Bausteine des Lebens | Grundlegende Bindungen und funktionelle Gruppen sowie kleine Reaktionsnetzwerke aus didaktisch vereinfachten Molekülen | **V0.1 interaktiv implementiert** |
| 03 | `03_protocellen.html` | Membranen und Protocellen | Amphiphile Moleküle, Aggregation, Membranen, Vesikel; Permeabilität und Austausch | **V0.1 interaktiv implementiert** |
| 04 | `04_rna_information.html` | RNA und Information | Sequenzkopie, Fehlerrate, Ressourcen, Selektionsdruck und Stabilität; klar als Modell gekennzeichnet | **V0.1 interaktiv implementiert** |
| 05 | `05_hypothesen.html` | Hypothesen vergleichen | RNA-zentrierte Modelle, Stoffwechsel-zuerst, Membranen, hydrothermale Quellen, nass-trocken Zyklen, Eisszenarien; Nachweise/Grenzen | **V0.1 interaktiv implementiert** |
| 06 | `06_evidenzlabor.html` | Evidenzlabor | Literaturkarten, Originalexperimente, Messung vs. Interpretation, widerlegbare Vorhersagen und ungelöste Fragen | **V0.1 interaktiv implementiert** |

## M1 — ein sauberer Einstieg: das Konzentrationslabor (V0.1 implementiert)

Frage: **Warum könnte die lokale Konzentration einfacher Bausteine für präbiotische Reaktionen entscheidend gewesen sein?**

- Variable: Gesamtanzahl gelöster Teilchen (nur als Modell), Flüssigkeitsvolumen.
- Annahme: geschlossenes Gefäß mit nichtflüchtigem, löslichem Stoff; solange keine Fällung/Zersetzung/Adsorption eintritt und nichts entweicht.
- Berechnung: **relative Konzentration c = N/V**. Jede Änderung ist eine idealisierte Rechenannahme, kein chemischer Reaktionsversuch.
- Optionaler Indikator für Kollisionen: illustratives `c²`-Modell für Zweierkontakte; ausdrücklich **keine allgemeingültige Reaktionsgeschwindigkeit**, weil Kinetik, Barrieren, Energie, pH, Löslichkeit und Phasengrenzen entscheidend sind.
- Interaktiver Schieberegler für Wasservolumen und Menge an gelösten Molekülen; Startwerte jederzeit wiederherstellbar.
- Visuelle SVG-Flüssigkeit mit Teilchensymbolen, sodass Konzentration räumlich intuitiv erfahrbar wird.
- Geführte Lernfrage: Bei gleicher Stoffmenge, wie verändert die Verdunstung die Konzentration?
- Wissenschaftliche Einordnung: Der Ursprung des Lebens ist nicht mit dem Konzentrieren einer Lösung gelöst.

**Abnahme:** korrekte Proportionalität bei gleichbleibender Stoffmenge; keine Division durch null; Screenreader-Labels; Tastaturbedienung; responsive mobile Ansicht; sichtbare Quellen; keinerlei Behauptung eines echten Ursprungs- oder Syntheseexperiments.

## M2 — chemische Grundbegriffe

Vorwissen zu Atomen, Molekülen, Energie, Molekülbindungen, Löslichkeit und Gleichgewicht erläutern, ohne Vollständigkeit eines Chemielehrbuchs vorauszusetzen. Jede Modellreaktion muss **explizit** mit Reaktanten, Produkten und Voraussetzungen benannt werden; keine frei erfundene Reaktionskette, die Nukleotide „von selbst“ entstehen lässt.

## M3 — Kompartimentierung

Fettsäuren und andere geeignete Amphiphile können unter geeigneten Bedingungen selbstassemblieren. **Nicht jedes Amphiphil und nicht jede Umgebung erzeugt Vesikel.** pH, Salzkonzentration, Temperatur, Konzentration und molekulare Zusammensetzung sind relevante Parameter. Eine einfache Vesikelanimation demonstriert Geometrie, keine spontan entstandene lebende Zelle.

## M4 — Vererbung

Unterscheiden zwischen:
- Nukleotidbausteinen und ihren möglichen Synthesewegen;
- Polymerbildung, Sequenzinformation und Fehlern;
- katalytisch aktiver RNA und tatsächlich nachgewiesener nichtenzymatischer Kopie;
- Modellpopulationen mit Variationen und Selektion.

Die RNA-Welt gilt als Forschungsmodell, **nicht** als wissenschaftlich bewiesene Entstehungsgeschichte. RNA und Lipide könnten ineinandergreifende Rollen gespielt haben; keine „RNA-only“-Notwendigkeit unterstellen.

## M5 — Vergleich von Wegen und Umgebungen

Vergleiche als **Matrix aus Voraussetzungen, experimentellen Befunden, offenen Hindernissen und konkreten Vorhersagen**, niemals als numerisches Ranking, welche Hypothese „gewonnen“ hat. Chemische Quellen und Umweltvorschläge sind getrennte Achsen (RNA ist eine molekulare Modellfamilie; hydrothermale Quellen sind ein möglicher Ort).

## M6 — Evidenztypen

Für jeden Befund:
1. Welche Beobachtung wurde wirklich gemacht?
2. Unter welchen Bedingungen?
3. Was stützt die Beobachtung?
4. Was beweist sie **nicht**?
5. Welche Kontrollmessungen wären erforderlich?

## Architektur & Design

- Standalone GitHub Pages; HTML/CSS/JS ohne Backend oder Account.
- `index.html`: Einstieg und Modulverzeichnis, keine Pflichtnavigation über andere Projekte.
- `modern-objectivity.css`: bestehende unveränderte lokale Referenz; `abiogenesis.css`: ausschließlich laborspezifische Bühne.
- Keine Telemetrie, kein Nutzerkonto, kein Zwang zu Fremd-CDNs.
- Unterlabore sind nicht eigene Repositories.
- Bei statischen Lehrmodellen genügen semantische HTML-Elemente und SVG; Three.js ist eine spätere Option nur bei echtem 3D-Lerngewinn.
- Anschluss an LAB 01 (Frühe Erde) und LAB 03 (DNA/RNA) über reine Links, nicht über Laufzeitimporte.

## Quellen und fachliche Referenzen

- NASA Astrobiology, *How did life first emerge on Earth?*: https://astrobiology.nasa.gov/education/alp/how-did-life-first-emerge-on-earth/
- NASA Astrobiology, *Where could life have gotten started on Earth?*: https://astrobiology.nasa.gov/education/alp/where-life-got-started/
- NASA Astrobiology, *How did the first cells arise?*: https://astrobiology.nasa.gov/education/alp/first-cells-arise/
- NASA Astrobiology, *How did life become something that competes for resources and evolves?*: https://astrobiology.nasa.gov/education/alp/life-competes-and-evolves/
- Czerniak & Saenz (2025), *The secret life of RNA and lipids*, https://pubmed.ncbi.nlm.nih.gov/40613519/
- Vázquez-Salazar (2026), *Inside the RNA world, 40 years on*, Trends in Biochemical Sciences, https://doi.org/10.1016/j.tibs.2026.07.002
- Weitere Originalarbeiten werden für jedes Modul einzeln gesichtet und zitiert, bevor konkrete Mechanismen simuliert werden.

Bei NASA-Material handelt es sich um Referenzlinks; NASA-Bilder oder -Grafiken werden nicht ohne gesonderte Lizenz- und Herkunftsprüfung eingebunden.


## Implementierungsstand · 22. November 2026

- Die Hauptseite wurde im Stil von Modern Objectivity neu gestaltet und enthält alle sechs Module; alle sechs Module sind interaktiv ausgezeichnet.
- Modul 01 verfügt über einen unabhängigen Stoffmengen- und Volumenregler, schematische SVG-Darstellung, vier Beispielzustände, Konzentrationsanzeige und Verständnisaufgabe.
- Dateien: index.html, abiogenesis.css, 01_praebiotische_chemie.html und chemistry-lab.js.
- Das Konzentrationsmodell ist rein arithmetisch und kein Reaktions- oder Lebensentstehungssimulator.
- Module 02–06 sind als V0.1 ergänzt. Vertiefungen: echte Reaktionsnetze, chemisch kalibrierte Membranparameter, RNA-Replikationskinetik und wissenschaftliche Fachprüfung.

## Implementierungsstand: sechs Unterlabore (V0.1)

- **02:** Unterschied zwischen Glycin, Fettsäure, Ribonukleosid und Ribonukleotid interaktiv untersuchen; drei Nukleotid-Bestandteile auswählen. Es werden keine chemischen Bindungen tatsächlich berechnet.
- **03:** amphiphile Moleküle, Mizellen und Vesikel grafisch vergleichen; vereinfachtes Austauschmodell mit frei gesetztem p pro Schritt. Keine Vorhersage einer konkreten Membranstabilität.
- **04:** RNA-Sequenz 1–28 Basen; komplementäre Gegenpositionen; 100 Zufallskopien mit einstellbarer Fehlerrate; Vergleich von Stichprobe und analytischer Wahrscheinlichkeit. Kein enzymatischer oder präbiotischer Replikationsmechanismus.
- **05:** vier Forschungsansätze und vier geologische Umwelten auf getrennten Achsen; Voraussetzungen und Grenzen ohne numerische Erfolgsbewertung.
- **06:** sechs auf Primärquellen beruhende Multiple-Choice-Aufgaben zu Miller (1953), Chen/Szostak (2004), Zhu/Szostak (2009), Powner/Sutherland (2009), Becker/Carell (2018) und nichtenzymatischer RNA-Kopie (2024). Feedback und verlinkte Originalarbeiten.
- Gemeinsame statische Laufzeit in `lab02-modules.js`, Gestaltung in `lab02-modules.css`. Alle Seiten in der Navigation.
- Technische Abnahme durch GitHub Actions mit zwei Chromium-Suites (Layout und Interaktion); **wissenschaftliche Expertenbegutachtung und umfangreiche visuelle Bedienbarkeitsprüfung bleiben weitere Qualitätsziele**.

## Vertiefungsrichtungen

Die V0.1-Fassung liefert erste **interaktive Lernmodelle**, keine molekulardynamischen oder chemisch validierten Simulationen. Folgende Weiterentwicklungen sind sinnvoll, sofern belastbare Daten und benannte Literaturquellen vorliegen: tatsächliche Reaktionskinetik ausgewählter Systeme, Flüssigphasen- und Membranparameter, Quellenvergleich experimenteller Synthesen, kontrollierte RNA-Reaktionsmodelle und erweiterte Evidenzdatenbank.
