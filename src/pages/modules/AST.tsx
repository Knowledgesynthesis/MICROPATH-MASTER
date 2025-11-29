import { ModulePage } from '@/components/ModulePage'

export function ASTPage() {
  const sections = [
    {
      title: 'AST Fundamentals',
      content: (
        <div className="space-y-4">
          <p>
            Antimicrobial Susceptibility Testing (AST) guides appropriate antibiotic therapy.
          </p>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">MIC (Minimum Inhibitory Concentration)</h5>
              <p className="text-sm text-muted-foreground">
                Lowest concentration of antibiotic that inhibits visible growth. Reported in µg/mL or mg/L.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Kirby-Bauer (Disk Diffusion)</h5>
              <p className="text-sm text-muted-foreground">
                Antibiotic-impregnated disks placed on agar. Zone of inhibition measured in mm.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Breakpoints (CLSI)</h5>
              <p className="text-sm text-muted-foreground">
                Cut-off values to classify organism as Susceptible (S), Intermediate (I), or Resistant (R).
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Interpretation Categories',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Susceptible (S)</h5>
              <p className="text-sm text-muted-foreground">
                Organism is inhibited by achievable drug concentrations with standard dosing.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Intermediate (I) / Susceptible-Dose Dependent (SDD)</h5>
              <p className="text-sm text-muted-foreground">
                May respond to higher doses or if drug concentrates at infection site (e.g., urinary tract).
              </p>
            </div>
            <div>
              <h5 className="font-medium">Resistant (R)</h5>
              <p className="text-sm text-muted-foreground">
                Not inhibited by achievable concentrations. Unlikely to respond clinically.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Intrinsic Resistance',
      content: (
        <div className="space-y-4">
          <p>
            Some organisms are naturally resistant to certain antibiotics.
          </p>
          <ul className="space-y-2 list-disc list-inside text-sm">
            <li><strong>Enterococcus:</strong> Intrinsically resistant to cephalosporins</li>
            <li><strong>Pseudomonas aeruginosa:</strong> Intrinsically resistant to many β-lactams, aminoglycosides (some)</li>
            <li><strong>Stenotrophomonas maltophilia:</strong> Intrinsically resistant to carbapenems</li>
            <li><strong>Anaerobes:</strong> Intrinsically resistant to aminoglycosides (require oxygen to enter cell)</li>
          </ul>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm">
              <strong>Pearl:</strong> Labs should not report these antibiotics for organisms with intrinsic resistance (selective reporting).
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Acquired Resistance Mechanisms',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">ESBL (Extended-Spectrum β-Lactamases)</h5>
              <p className="text-sm text-muted-foreground">
                Enterobacterales resistance to 3rd-gen cephalosporins and aztreonam. Carbapenem usually effective.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Carbapenemases (KPC, NDM, OXA, VIM)</h5>
              <p className="text-sm text-muted-foreground">
                Resistance to carbapenems. CRE (Carbapenem-Resistant Enterobacterales). Limited treatment options.
              </p>
            </div>
            <div>
              <h5 className="font-medium">MRSA (mecA gene)</h5>
              <p className="text-sm text-muted-foreground">
                Methicillin-resistant S. aureus. Resistant to all β-lactams. Treat with vancomycin, daptomycin, linezolid, or ceftaroline.
              </p>
            </div>
            <div>
              <h5 className="font-medium">VRE (vanA, vanB)</h5>
              <p className="text-sm text-muted-foreground">
                Vancomycin-resistant Enterococcus. vanA = high-level resistance (vancomycin + teicoplanin). vanB = variable vancomycin resistance.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Inducible Clindamycin Resistance (D-test)</h5>
              <p className="text-sm text-muted-foreground">
                Staph/Strep may appear susceptible to clindamycin but have inducible resistance. "D-zone" on disk diffusion = positive test.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Reporting Logic',
      content: (
        <div className="space-y-4">
          <p>
            Labs use selective reporting to promote antibiotic stewardship.
          </p>
          <ul className="space-y-2 list-disc list-inside text-sm">
            <li><strong>Cascade reporting:</strong> Report narrow-spectrum agents first; release broad-spectrum only if resistant</li>
            <li><strong>Suppress results:</strong> Don't report agents that shouldn't be used (e.g., cephalosporins for Enterococcus)</li>
            <li><strong>Add comments:</strong> Note resistance mechanisms (ESBL, carbapenemase), infection control alerts</li>
            <li><strong>Intermediate interpretation:</strong> May require higher dosing or site-specific activity (e.g., fluoroquinolones in UTI)</li>
          </ul>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm font-medium">Example:</p>
            <p className="text-sm">
              E. coli UTI: Report nitrofurantoin and trimethoprim-sulfamethoxazole first. If resistant, report ciprofloxacin. Reserve ceftriaxone reporting unless oral options exhausted.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Quality Control',
      content: (
        <div className="space-y-4">
          <p>
            AST quality control uses ATCC reference strains with known MIC ranges.
          </p>
          <ul className="space-y-2 list-disc list-inside text-sm">
            <li><strong>E. coli ATCC 25922:</strong> Pansusceptible control</li>
            <li><strong>S. aureus ATCC 29213:</strong> Pansusceptible control</li>
            <li><strong>P. aeruginosa ATCC 27853:</strong> QC for anti-pseudomonal agents</li>
          </ul>
          <p className="text-sm mt-2">
            QC strains run daily or with each new batch of testing to ensure accuracy.
          </p>
        </div>
      )
    }
  ]

  return (
    <ModulePage
      title="Antimicrobial Susceptibility Testing (AST)"
      description="MIC, breakpoints, resistance mechanisms, and reporting logic"
      sections={sections}
      relatedTools={[
        { title: 'AST Analyzer', route: '/tools/ast-analyzer' }
      ]}
    />
  )
}
