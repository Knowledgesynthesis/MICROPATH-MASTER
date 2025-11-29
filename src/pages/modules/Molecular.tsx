import { ModulePage } from '@/components/ModulePage'

export function MolecularPage() {
  const sections = [
    {
      title: 'Molecular Methods Overview',
      content: (
        <div className="space-y-4">
          <p>
            Molecular diagnostics detect nucleic acids (DNA or RNA) directly from clinical specimens, often with higher sensitivity and faster turnaround than culture.
          </p>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">PCR (Polymerase Chain Reaction)</h5>
              <p className="text-sm text-muted-foreground">
                Exponential amplification of target DNA. Gold standard for many pathogens.
              </p>
            </div>
            <div>
              <h5 className="font-medium">RT-PCR (Reverse Transcription PCR)</h5>
              <p className="text-sm text-muted-foreground">
                For RNA viruses (influenza, SARS-CoV-2, HIV, HCV). RNA → cDNA → amplification.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Real-Time (Quantitative) PCR</h5>
              <p className="text-sm text-muted-foreground">
                Measures amount of product during amplification. Used for viral loads (HIV, HBV, HCV, CMV).
              </p>
            </div>
            <div>
              <h5 className="font-medium">Isothermal Amplification</h5>
              <p className="text-sm text-muted-foreground">
                Constant temperature amplification (LAMP, NAAT). Rapid, point-of-care friendly.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Multiplex Panels',
      content: (
        <div className="space-y-4">
          <p>
            Test for multiple pathogens simultaneously in a single specimen.
          </p>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Respiratory Panels</h5>
              <p className="text-sm text-muted-foreground">
                Detect 15-20+ viruses and some bacteria (M. pneumoniae, C. pneumoniae, Bordetella).<br/>
                Examples: BioFire FilmArray, GenMark ePlex
              </p>
            </div>
            <div>
              <h5 className="font-medium">GI Panels</h5>
              <p className="text-sm text-muted-foreground">
                Detect bacterial (Salmonella, Shigella, Campylobacter, C. diff), viral (norovirus, rotavirus), and parasitic (Giardia, Cryptosporidium) pathogens
              </p>
            </div>
            <div>
              <h5 className="font-medium">Meningitis/Encephalitis Panels</h5>
              <p className="text-sm text-muted-foreground">
                CSF testing for bacteria (S. pneumoniae, N. meningitidis, H. influenzae, L. monocytogenes), viruses (HSV-1/2, VZV, enteroviruses), and yeast (Cryptococcus)
              </p>
            </div>
            <div>
              <h5 className="font-medium">Blood Culture ID (BCID) Panels</h5>
              <p className="text-sm text-muted-foreground">
                Rapid ID from positive blood cultures (hours vs days). Can detect some resistance markers (mecA, vanA/B, KPC)
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Genotypic Resistance Detection',
      content: (
        <div className="space-y-4">
          <p>
            Detect specific resistance genes or mutations directly.
          </p>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">mecA (MRSA)</h5>
              <p className="text-sm text-muted-foreground">
                Detects methicillin resistance in S. aureus. From nasal swabs (screening) or positive cultures.
              </p>
            </div>
            <div>
              <h5 className="font-medium">vanA/vanB (VRE)</h5>
              <p className="text-sm text-muted-foreground">
                Detects vancomycin resistance in enterococci.
              </p>
            </div>
            <div>
              <h5 className="font-medium">KPC, NDM, OXA Carbapenemases</h5>
              <p className="text-sm text-muted-foreground">
                Carbapenem resistance in Enterobacterales and other Gram-negatives.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Xpert MTB/RIF</h5>
              <p className="text-sm text-muted-foreground">
                Detects M. tuberculosis and rifampin resistance (rpoB mutations) in ~2 hours.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Targeted vs Syndromic Testing',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Targeted Testing</h5>
              <p className="text-sm text-muted-foreground">
                Tests for specific pathogen (e.g., C. difficile toxin, GBS screening, N. gonorrhoeae/C. trachomatis).
                Cost-effective when clinical suspicion is high for one organism.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Syndromic Testing (Multiplex)</h5>
              <p className="text-sm text-muted-foreground">
                Broad panel for clinical syndrome (respiratory, GI, CNS). Useful when differential is wide.
                Risk: Overdetection of colonization/asymptomatic carriage.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Pitfalls & Stewardship',
      content: (
        <div className="space-y-4">
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Positive PCR ≠ Viable organism:</strong> Can detect dead bacteria or viral RNA post-infection</li>
            <li><strong>Contamination risk:</strong> Molecular methods are highly sensitive; contamination can cause false positives</li>
            <li><strong>Colonization vs infection:</strong> Respiratory panels may detect asymptomatic carriage (rhinovirus, coronavirus)</li>
            <li><strong>No susceptibility data:</strong> Molecular tests don't provide AST (except targeted resistance genes)</li>
            <li><strong>Reflex testing rules:</strong> Lab protocols to prevent unnecessary testing (e.g., no C. diff testing on formed stool)</li>
            <li><strong>Cost considerations:</strong> Multiplex panels are expensive; use appropriately</li>
          </ul>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm font-medium">Stewardship Pearl:</p>
            <p className="text-sm">
              Not every positive result requires treatment. Rhinovirus in an afebrile child may be incidental. Clinical correlation is essential.
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <ModulePage
      title="Molecular Diagnostics"
      description="PCR, multiplex panels, genotypic resistance, and molecular stewardship"
      sections={sections}
    />
  )
}
