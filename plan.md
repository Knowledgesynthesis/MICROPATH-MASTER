# **MICROPATH MASTER — OPTIMIZED MASTER PROMPT FOR EDUCATIONAL APP GENERATION**

A **mobile-first**, **dark-mode**, **offline-ready**, pathology-focused microbiology educational platform covering the **full scope of clinical microbiology** as learned in a **pathology resident’s microbiology rotation**, including:

- Bacteriology  
- Virology  
- Mycology  
- Parasitology  
- Mycobacteriology  
- Molecular diagnostics  
- Antimicrobial susceptibility testing (AST)  
- Gram stains, culture interpretation, plate reading  
- Workflow from specimen → bench → ID → susceptibility → reporting  
- Infection control, stewardship, and lab–clinician communication  

This app emphasizes **bench-level understanding**, **practical workflow**, **pattern recognition**, **phenotype → ID reasoning**, and the **interpretive responsibilities** of a microbiology laboratory in clinical care.

---

# **MASTER PROMPT — MicroPath Master Educational App Generator (SPECIALIZED VERSION)**

## **0. ROLE & MISSION**

You are a cross-functional team:
- PM  
- Staff Engineer  
- Senior Instructional Designer  
- Clinical Microbiology SME (bench workflow + ID + AST)  
- Molecular Microbiology SME  
- Infectious Disease SME (conceptual)  
- UX Writer  
- QA Engineer  

**Mission:**  
Build a **pathology-resident–oriented** microbiology educational platform that teaches, with clarity and detail:

- How samples are processed at the bench  
- How to read plates and Gram stains  
- How identification algorithms work  
- Common organisms and their distinguishing features  
- Interpretation of susceptibilities and resistance mechanisms  
- BSL (biosafety) concepts  
- Contamination vs colonization vs infection  
- The role of molecular diagnostics  
- Laboratory stewardship and reporting logic  

This app should be **intuitive**, **visually guided**, **workflow-based**, and **pattern-driven**, mimicking how a pathology resident learns to “think like the micro lab.”

All assessments are **session-only** (no user data storage).  
All examples are **synthetic**.  

---

# **1. INPUTS (To Fill When Running This Prompt)**

- **Primary Topics:** {{TOPICS}}  
  *Default:* Full clinical microbiology (bacteriology, virology, mycology, parasitology, mycobacteriology, molecular micro, AST).

- **Target Levels:** {{LEVELS}}  
  *Default:* Pathology residents, microbiology fellows, ID fellows, med students on micro rotation.

- **Learner Context:** {{CONTEXT}}  
  *Default:* Micro rotation, call coverage, lab bench-to-diagnosis integration.

- **Learning Objectives:** {{LEARNING_OBJECTIVES}}  
  *Default:*  
  - Perform plate reading & Gram stain interpretation.  
  - Use ID algorithms (biochemical, MALDI-TOF conceptual).  
  - Interpret AST patterns (MIC, zone sizes, breakpoints).  
  - Distinguish colonization from infection.  
  - Understand molecular assays.  
  - Know when to escalate or de-escalate reporting.

- **Constraints:** {{CONSTRAINTS}}  
  Required:
  - Mobile-first  
  - Dark-mode  
  - Offline-ready  
  - Synthetic data  
  - No user tracking  

- **References:** {{REFERENCES}}  
  Optional conceptual alignment: CLSI, CAP micro rotation goals, ASM fundamentals.

- **Voice/Tone:** {{VOICE_TONE}}  
  *Default:* Clear, pattern-oriented, visual, stepwise reasoning.

---

# **2. EXECUTIVE SUMMARY & NAME OPTIONS**

**Goal:**  
Create a diagnostic-level, pathology-resident–appropriate microbiology learning map that teaches **plate reading → Gram stain → ID → susceptibilities → reporting** using structured rules, intuitive visuals, and realistic workflow-based practice.

**Name Options:**  
- **MicroPath Master** — “From specimen to report.”  
- **BenchLogic Micro** — “Learn how the micro lab thinks.”  
- **Path Micro Atlas** — “Plate reading, ID, AST, molecular integration.”

**Success Criteria:**  
- Resident can correctly identify and differentiate major organisms.  
- Learner understands how bench microbiologists decide “what to report” vs “what to ignore.”  
- Resident can interpret MIC and zone-size data conceptually.  
- User can navigate typical micro rotation tasks confidently.

---

# **3. PERSONAS & USE CASES**

### PERSONAS (Design-Time Only)
1. **Pathology Resident (PGY-1/2)**  
   - Pain: Microbiology feels overwhelming, too many organisms and tests.  
   - Goal: Build intuitive pattern recognition.

2. **Micro Fellow**  
   - Pain: AST rules and reporting decisions.  
   - Goal: Higher-level reasoning and QC understanding.

3. **ID Fellow**  
   - Pain: Understanding how micro data is generated.  
   - Goal: Lab-clinician communication fluency.

### Use Cases
- “What does this Gram stain tell me about possible organisms?”  
- “What plates should I expect growth on?”  
- “How do I differentiate Staph aureus vs coagulase-negative Staph?”  
- “Is this Enterococcus or Streptococcus?”  
- “Understanding MIC values and breakpoints conceptually.”  
- “Molecular assay is positive—what does that mean?”  
- “Distinguish contamination vs colonization vs true infection.”  

---

# **4. CURRICULUM MAP & KNOWLEDGE GRAPH (MICRO ROTATION–FOCUSED)**

## MODULE A — Foundations of Clinical Microbiology
- Lab workflow: specimen → accessioning → plating → incubation → reading  
- Biosafety levels (BSL-1, BSL-2, BSL-3 conceptually)  
- Media types:
  - Blood agar  
  - MacConkey  
  - Chocolate  
  - CNA, PEA  
  - Sabouraud  
  - Lowenstein-Jensen (mycobacteria)  
- Anaerobic vs aerobic concepts  
- Quality control basics  

---

## MODULE B — Gram Stains & Basic Morphology
- Gram-positive cocci: clusters vs chains  
- Gram-positive rods  
- Gram-negative rods (lactose fermenters vs non-fermenters)  
- Gram-negative cocci  
- Curved rods, branching rods  
- Yeast vs pseudohyphae vs hyphae  
- Acid-fast organisms (ZN stain conceptual)  
- Pitfalls: Overdecolorization, thick smears

---

## MODULE C — Bacteriology: Identification Pathways
### Staphylococci
- Coagulase test logic  
- Stap aureus vs CoNS  
- MRSA conceptual markers  

### Streptococci & Enterococci
- Hemolysis patterns  
- Group A, B, pneumoniae, viridans  
- Enterococcus resistance conceptual layout  

### Gram-negative rods
- Enterobacterales:
  - Lactose fermenters vs non  
  - Indole, citrate, urease conceptions  
- Pseudomonas aeruginosa clues  
- Anaerobes: Bacteroides, Clostridium conceptual patterns  

### Special morphologies
- H. pylori (curved GN rod)  
- Campylobacter  
- Neisseria vs Moraxella  
- Corynebacterium vs Listeria vs Bacillus  

---

## MODULE D — Mycobacteriology
- AFB stain basics  
- Concentration & culture process  
- NAAT conceptual testing  
- M. tuberculosis complex vs NTM  
- MGIT concept  
- Drug-resistance testing (high-level)  

---

## MODULE E — Mycology
- Yeasts: Candida species (germ tube conceptual), Cryptococcus basics  
- Molds: Aspergillus, Mucorales, dermatophytes  
- Dimorphic fungi: Histoplasma, Blastomyces, Coccidioides (lab conceptual risks)  
- Fungal culture patterns  
- Direct microscopic exam logic (KOH prep)  

---

## MODULE F — Parasitology (Clinically Important Highlights)
- Ova & parasites  
- Giardia, Cryptosporidium, Entamoeba  
- Malaria life cycle & smear patterns  
- Blood vs stool vs urine parasite logic  

---

## MODULE G — Virology
- Viral culture conceptual (rare now)  
- PCR/NAAT-based detection  
- Respiratory panels  
- Viral load basics (HIV, HBV, HCV conceptual)  
- Antigen testing vs NAAT sensitivity differences  

---

## MODULE H — Molecular Diagnostics
- PCR, RT-PCR, isothermal amplification basics  
- Multiplex panels  
- Genotypic resistance detection  
- Targeted vs syndromic testing  
- False positives/contamination risks  
- Lab stewardship: “Reflex testing rules”  

---

## MODULE I — Antimicrobial Susceptibility Testing (AST)
- MIC basics  
- Kirby-Bauer zone sizes  
- Breakpoints (CLSI concept)  
- Intrinsic resistance patterns  
- Inducible resistance (D-test conceptual)  
- Extended-spectrum β-lactamases (ESBL), carbapenemases (KPC, NDM)  
- Reporting logic:  
  - When to suppress results  
  - When to add comments  
  - How to interpret “intermediate”  

---

## MODULE J — Infection Control & Stewardship
- Isolation precautions: contact, droplet, airborne  
- Hospital-acquired pathogens  
- Outbreak recognition  
- Lab-to-clinician communication rules  
- Contaminant vs colonizer vs pathogen (e.g., CoNS in blood culture)  
- Multiple positive sets logic  

---

## MODULE K — Integrated Micro Case Sign-Out
- Case-based workflows:  
  - Wound culture  
  - Blood culture  
  - Urine culture  
  - Respiratory culture  
  - CSF culture  
- Gram stain → colony morphology → biochemical → MALDI → AST → report  
- Interactive sign-out practice  

---

# **5. INTERACTIVE MODELS (TABLE)**

| Interactive | Purpose | Inputs | Outputs | Visuals | Guardrails | Presets |
|------------|---------|--------|---------|---------|-----------|---------|
| Plate Reader Simulator | Practice colony recognition | Plate description | Differential | Plate icons | Educational | 15 cases |
| Gram Stain Interpreter | Pattern recognition | Gram morphology | Probable organism class | Stain schematic | Synthetic | 12 examples |
| Lactose Fermenter vs Non-Fermenter Tree | Enterobacterales logic | Colony color | ID branches | MacConkey icons | Concept-only | 10 cases |
| Coagulase Logic Tool | Staph differentiation | Test results | SA vs CoNS | Flowchart | No real patient data | 6 cases |
| Hemolysis Interpreter | α, β, γ patterns | Hemolysis plate | Probable group | Blood agar icons | Educational | 8 examples |
| AST Analyzer | MIC or zone data | Drug-organism pair | Interpretation (S/I/R) | MIC/zone chart | Conceptual | 10 cases |
| Contamination vs Infection Sorter | Blood/urine culture vignettes | Growth patterns | Interpretation | Growth timeline | No clinical care | 12 cases |
| Molecular Test Decider | PCR vs culture vs antigen | Organism + scenario | Most useful modality | Test cards | Educational | 10 cases |
| Integrated Report Builder | Complete micro case | Findings | Draft synthetic report | Report viewer | Non-clinical | 8 cases |

---

# **6. ASSESSMENT & MASTERY (Session-Only)**

TOOLS:
- MCQs  
- Matching: organism ↔ morphology  
- Drag-and-drop: colony features → organism group  
- AST interpretation challenges  
- “Best next test” logic questions  
- Contamination vs infection classification  
- Mixed-case set  

At end of quiz:
- “You answered X/Y correctly this session.”  
- Suggestions for topics to review  
- No storage of results  

---

# **7. MICROPATH REASONING FRAMEWORK**

1. **Specimen type** (urine, wound, blood, CSF…)  
2. **Gram stain clues**  
3. **Growth on media (which plates? which patterns?)**  
4. **Biochemical or MALDI-TOF clues**  
5. **AST pattern**  
6. **Molecular test correlation**  
7. **Interpretation: contamination? colonization? infection?**  
8. **Reporting logic**: what to call out, what to suppress  

Pitfalls:
- Mistaking contaminants for pathogens  
- Under-recognizing resistance mechanisms  
- Overcalling polymicrobial cultures  
- Misinterpreting PCR positives  
- Overinterpreting normal flora in respiratory cultures  

---

# **8. ACCESSIBILITY, EQUITY, SAFETY**

- WCAG 2.2 AA compliance  
- Dark mode default  
- High-contrast plate & Gram illustrations  
- Inclusive case scenarios  
- STRICT disclaimers:  
  “Educational only. Not for patient care.”  

---

# **9. TECH ARCHITECTURE**

Stack:
- React + TypeScript  
- Tailwind + shadcn/ui  
- Zustand (in-memory quiz state)  
- Service worker for offline capability  

Routes:
- `/foundations`  
- `/gram`  
- `/plates`  
- `/bacteria`  
- `/mycology`  
- `/parasitology`  
- `/virology`  
- `/molecular`  
- `/ast`  
- `/infection-control`  
- `/cases`  
- `/assessment`  
- `/settings`  

Settings page must only contain:
- Dark/light toggle  
- About  
- Disclaimer  

---

# **10. DATA SCHEMAS**

### Organism Schema

    {
      "id": "s_aureus",
      "name": "Staphylococcus aureus",
      "gram": "GPC in clusters",
      "key_features": ["Coagulase positive", "β-hemolysis", "Golden colonies"],
      "notes": "Common pathogen in skin/soft tissue infections."
    }

### Case Schema

    {
      "id": "urine_case_3",
      "specimen": "urine",
      "gram": "GNR",
      "plate": "lactose fermenter",
      "ast": {"cipro": "S", "amp": "R"},
      "question": "Likely organism class?",
      "options": ["E. coli", "Pseudomonas", "Proteus"],
      "correct_option": "E. coli",
      "rationale": "LF GNR + urine setting = classic for E. coli."
    }

### AST Schema

    {
      "id": "esbl_case",
      "organism": "Enterobacterales",
      "mic": {"cefotaxime": 4, "ceftazidime": 8, "ertapenem": 0.12},
      "pattern": "Possible ESBL pattern."
    }

---

# **11. SCREENS & WIREFRAMES**

### Home  
- Modules: Foundations / Gram / Plates / Bacteriology / Mycology / Parasitology / Virology / Molecular / AST / Infection Control / Cases / Assessment  

### Module Overview  
- Summary + subsections + Quick Quiz  

### Lesson  
- Stepwise diagrams (Gram stain → plates → ID → AST)  
- Colonies drawn as icons  
- Stain schematics  

### Case Engine  
- Realistic synthetic vignettes  
- Stepwise reasoning: stain → colony → ID → AST  
- Immediate feedback  

### Assessment  
- 5–15 questions  
- Session-only scoring  

### Settings  
- Dark/light  
- About  
- Disclaimer  

---

# **12. COPY & CONTENT KIT**

Examples:
- “Think Enterobacterales when you see LF GNR on MacConkey.”  
- “Coagulase test separates S. aureus from CoNS.”  
- “Pseudomonas often smells ‘grape-like’ and produces metallic sheen.”  
- “Carbapenem resistance requires careful interpretation—always look for patterns.”  
- “PCR-positive ≠ viable organism.”  

Glossary:
- MIC, zone size, breakpoint, MALDI-TOF, ESBL, KPC, NAAT, LPCB mount, germ tube, etc.

---

# **13. ANALYTICS & A/B (Creator-Side Only)**

- Compare icon-based Gram stain teaching vs text-only.  
- Evaluate AST interpretation confusion points.  
- Test how users distinguish contaminants vs pathogens.

(No user analytics—design-time only.)

---

# **14. QA CHECKLIST**

- All organism features accurate conceptually  
- AST interpretations correct conceptually  
- Bench workflow diagrams correct  
- No treatment advice  
- No real patient data  

---

# **15. ROADMAP**

- M0: Foundations + Gram stains + Plates  
- M1: Bacteriology + AST  
- M2: Mycology + Parasitology + Virology  
- M3: Molecular + Infection Control  
- M4: Integrated Case Bank (100+ cases)

---

# **ACCEPTANCE CRITERIA**

- Covers **everything a pathology resident learns in a micro rotation**  
- Bench workflows clear and intuitive  
- Plate reading, Gram stain, culture interpretation, AST, molecular included  
- Settings limited to: dark/light, about, disclaimer  
- No user tracking  

---

## **NOW GENERATE**

Using this blueprint, generate the full microbiology educational app specification in the required format.  
Adhere strictly to all constraints.  
