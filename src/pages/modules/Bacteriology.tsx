import { ModulePage } from '@/components/ModulePage'

export function BacteriologyPage() {
  const sections = [
    {
      title: 'Staphylococci',
      content: (
        <div className="space-y-4">
          <p><strong>Gram stain:</strong> GPC in clusters</p>
          <h4 className="font-semibold mt-4">Key Test: Coagulase</h4>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Coagulase-Positive</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Staphylococcus aureus</strong> — Major pathogen, β-hemolytic, golden colonies
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Clinical significance: Skin/soft tissue infections, bacteremia, endocarditis, osteomyelitis
              </p>
            </div>
            <div>
              <h5 className="font-medium">Coagulase-Negative Staph (CoNS)</h5>
              <p className="text-sm text-muted-foreground">
                <strong>S. epidermidis, S. saprophyticus, S. haemolyticus</strong> — Often skin flora
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                <strong>Pearl:</strong> CoNS in blood culture = likely contaminant unless multiple positive sets. S. saprophyticus is a true UTI pathogen.
              </p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm font-medium">MRSA (Methicillin-Resistant S. aureus)</p>
            <p className="text-sm">Resistant to β-lactams (mecA gene). Requires vancomycin or alternative agents.</p>
          </div>
        </div>
      )
    },
    {
      title: 'Streptococci & Enterococci',
      content: (
        <div className="space-y-4">
          <p><strong>Gram stain:</strong> GPC in chains or pairs</p>
          <h4 className="font-semibold mt-4">Classification by Hemolysis:</h4>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">β-Hemolytic Streptococci</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Group A (S. pyogenes):</strong> Pharyngitis, cellulitis, necrotizing fasciitis<br/>
                <strong>Group B (S. agalactiae):</strong> Neonatal sepsis, maternal colonization
              </p>
            </div>
            <div>
              <h5 className="font-medium">α-Hemolytic Streptococci</h5>
              <p className="text-sm text-muted-foreground">
                <strong>S. pneumoniae:</strong> Pneumonia, meningitis, otitis. Optochin-sensitive, bile-soluble<br/>
                <strong>Viridans group:</strong> Oral flora, endocarditis risk. Optochin-resistant
              </p>
            </div>
            <div>
              <h5 className="font-medium">Enterococcus</h5>
              <p className="text-sm text-muted-foreground">
                <strong>E. faecalis, E. faecium</strong> — Intrinsically resistant to many antibiotics<br/>
                Bile-esculin positive, PYR positive, grows in 6.5% NaCl
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Enterobacterales (Enteric GNR)',
      content: (
        <div className="space-y-4">
          <p><strong>Gram stain:</strong> GNR</p>
          <h4 className="font-semibold mt-4">Common Organisms:</h4>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">E. coli</h5>
              <p className="text-sm text-muted-foreground">
                Most common cause of UTI. Lactose fermenter. Indole-positive.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Klebsiella pneumoniae</h5>
              <p className="text-sm text-muted-foreground">
                Pneumonia, UTI, bacteremia. Lactose fermenter. Mucoid colonies. Indole-negative.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Proteus mirabilis</h5>
              <p className="text-sm text-muted-foreground">
                UTI (struvite stones). Swarming on agar. Urease-positive.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Salmonella & Shigella</h5>
              <p className="text-sm text-muted-foreground">
                Diarrheal pathogens. Non-lactose fermenters. Reportable to public health.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Non-Fermenting GNR',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Pseudomonas aeruginosa</h5>
              <p className="text-sm text-muted-foreground">
                Opportunistic. Green pigment, grape odor. Oxidase-positive. Resistant to many antibiotics.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Acinetobacter baumannii</h5>
              <p className="text-sm text-muted-foreground">
                Nosocomial pathogen. Often multidrug-resistant. Oxidase-negative.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Anaerobes',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Bacteroides fragilis</h5>
              <p className="text-sm text-muted-foreground">
                Most common anaerobic pathogen. Intra-abdominal infections, abscesses.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Clostridium difficile</h5>
              <p className="text-sm text-muted-foreground">
                Antibiotic-associated diarrhea. Toxin detection (not routine culture).
              </p>
            </div>
            <div>
              <h5 className="font-medium">Clostridium perfringens</h5>
              <p className="text-sm text-muted-foreground">
                Gas gangrene, food poisoning. Double-zone hemolysis.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Fastidious & Special Organisms',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Haemophilus influenzae</h5>
              <p className="text-sm text-muted-foreground">
                Requires X and V factors. Chocolate agar. Respiratory pathogen, meningitis (especially non-typeable strains now).
              </p>
            </div>
            <div>
              <h5 className="font-medium">Neisseria meningitidis</h5>
              <p className="text-sm text-muted-foreground">
                GNC, diplococci. Meningitis, septicemia. Chocolate agar + CO₂. Oxidase-positive.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Neisseria gonorrhoeae</h5>
              <p className="text-sm text-muted-foreground">
                GNC. Urogenital infections. Fastidious. NAAT preferred for detection.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Listeria monocytogenes</h5>
              <p className="text-sm text-muted-foreground">
                GPR, tumbling motility. Foodborne. Meningitis in neonates and immunocompromised.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <ModulePage
      title="Bacteriology: Identification Pathways"
      description="Master organism identification from Gram stain to biochemical testing"
      sections={sections}
    />
  )
}
