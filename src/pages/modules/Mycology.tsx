import { ModulePage } from '@/components/ModulePage'

export function MycologyPage() {
  const sections = [
    {
      title: 'Yeast vs Molds',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Yeasts</h5>
              <p className="text-sm text-muted-foreground">
                Single-celled fungi. Round to oval. Reproduce by budding. Grow on routine media at 35-37°C.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Molds</h5>
              <p className="text-sm text-muted-foreground">
                Filamentous fungi. Grow as hyphae (filaments) and produce spores. Grow on Sabouraud agar at 25-30°C.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Dimorphic Fungi</h5>
              <p className="text-sm text-muted-foreground">
                Can exist as both yeast and mold depending on temperature. Highly pathogenic.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Common Yeasts',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Candida albicans</h5>
              <p className="text-sm text-muted-foreground">
                Most common yeast pathogen. Germ tube positive (diagnostic test: incubate in serum at 37°C for 2-3h).
                Causes thrush, vaginitis, bloodstream infections.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Non-albicans Candida</h5>
              <p className="text-sm text-muted-foreground">
                <strong>C. glabrata, C. parapsilosis, C. tropicalis, C. auris</strong><br/>
                Germ tube negative. C. auris is multidrug-resistant and emerging threat.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Cryptococcus neoformans</h5>
              <p className="text-sm text-muted-foreground">
                Encapsulated yeast. Meningitis in immunocompromised. India ink stain shows capsule. Urease positive.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Common Molds',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Aspergillus</h5>
              <p className="text-sm text-muted-foreground">
                <strong>A. fumigatus, A. flavus, A. niger</strong><br/>
                Septate hyphae, acute-angle branching. Causes invasive aspergillosis in immunocompromised.
                Also causes allergic bronchopulmonary aspergillosis (ABPA).
              </p>
            </div>
            <div>
              <h5 className="font-medium">Mucorales (Mucor, Rhizopus)</h5>
              <p className="text-sm text-muted-foreground">
                Broad, ribbon-like, non-septate hyphae. Right-angle branching. Causes mucormycosis (rhinocerebral, pulmonary).
                Rapidly invasive in DKA and immunocompromised patients.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Dermatophytes</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Trichophyton, Microsporum, Epidermophyton</strong><br/>
                Cause superficial infections (tinea pedis, tinea capitis, tinea corporis). KOH prep shows septate hyphae.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Dimorphic Fungi',
      content: (
        <div className="space-y-4">
          <p className="text-sm">
            <strong>BSL-3 organisms:</strong> Handle with extreme caution. Often endemic to specific geographic regions.
          </p>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Histoplasma capsulatum</h5>
              <p className="text-sm text-muted-foreground">
                Ohio/Mississippi River valleys. Pulmonary infection. Small intracellular yeasts in tissue. "Tuberculate macroconidia" in mold form.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Blastomyces dermatitidis</h5>
              <p className="text-sm text-muted-foreground">
                Great Lakes region. Broad-based budding yeast in tissue. Pulmonary and disseminated disease.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Coccidioides immitis/posadasii</h5>
              <p className="text-sm text-muted-foreground">
                Southwest US (Arizona, California). "Valley fever." Spherules with endospores in tissue. Extremely infectious in lab (arthroconidia).
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Diagnostic Methods',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">KOH Preparation</h5>
              <p className="text-sm text-muted-foreground">
                Direct microscopic exam. KOH dissolves keratin, reveals fungal elements (hyphae, spores, yeasts).
              </p>
            </div>
            <div>
              <h5 className="font-medium">Calcofluor White Stain</h5>
              <p className="text-sm text-muted-foreground">
                Fluorescent stain binds to fungal cell walls. More sensitive than KOH.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Culture</h5>
              <p className="text-sm text-muted-foreground">
                Sabouraud dextrose agar. Incubate at 25-30°C for molds. Some fungi grow slowly (weeks).
              </p>
            </div>
            <div>
              <h5 className="font-medium">Antigen Detection</h5>
              <p className="text-sm text-muted-foreground">
                Cryptococcal antigen (serum/CSF), Histoplasma antigen (urine), Aspergillus galactomannan, β-D-glucan (pan-fungal).
              </p>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <ModulePage
      title="Mycology"
      description="Yeasts, molds, dimorphic fungi, and fungal diagnostics"
      sections={sections}
    />
  )
}
