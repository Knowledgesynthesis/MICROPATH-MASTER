import { ModulePage } from '@/components/ModulePage'

export function GramStainsPage() {
  const sections = [
    {
      title: 'Gram Stain Principles',
      content: (
        <div className="space-y-4">
          <p>
            The Gram stain is one of the most important tools in microbiology, allowing rapid
            differentiation of bacteria based on cell wall structure.
          </p>
          <h4 className="font-semibold">Steps:</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Crystal violet:</strong> Primary stain (all bacteria turn purple)</li>
            <li><strong>Iodine:</strong> Mordant (fixes crystal violet)</li>
            <li><strong>Decolorizer:</strong> Alcohol or acetone (differentiating step)</li>
            <li><strong>Safranin:</strong> Counterstain (stains decolorized bacteria pink/red)</li>
          </ol>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="font-medium">Key Principle:</p>
            <p className="text-sm">
              Gram-positive bacteria have thick peptidoglycan that retains crystal violet.
              Gram-negative bacteria have thin peptidoglycan and lose crystal violet during decolorization.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Gram-Positive Cocci (GPC)',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold">Arrangement Matters:</h4>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Clusters</h5>
              <p className="text-sm text-muted-foreground">
                Think <strong>Staphylococcus</strong> (S. aureus, coagulase-negative Staph)
              </p>
            </div>
            <div>
              <h5 className="font-medium">Chains</h5>
              <p className="text-sm text-muted-foreground">
                Think <strong>Streptococcus</strong> (S. pyogenes, S. pneumoniae, S. agalactiae)
              </p>
            </div>
            <div>
              <h5 className="font-medium">Pairs (diplococci)</h5>
              <p className="text-sm text-muted-foreground">
                Think <strong>Streptococcus pneumoniae</strong> (lancet-shaped), <strong>Enterococcus</strong>
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Gram-Positive Rods (GPR)',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Large rods</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Bacillus</strong> (aerobic), <strong>Clostridium</strong> (anaerobic, spore-forming)
              </p>
            </div>
            <div>
              <h5 className="font-medium">Small, pleomorphic rods (diphtheroid)</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Corynebacterium, Propionibacterium</strong>
              </p>
            </div>
            <div>
              <h5 className="font-medium">Small rods, tumbling motility</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Listeria monocytogenes</strong>
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Gram-Negative Rods (GNR)',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Enterobacterales (Enteric)</h5>
              <p className="text-sm text-muted-foreground">
                <strong>E. coli, Klebsiella, Enterobacter, Proteus, Salmonella, Shigella</strong> — typically straight rods
              </p>
            </div>
            <div>
              <h5 className="font-medium">Non-fermenters</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Pseudomonas aeruginosa, Acinetobacter, Stenotrophomonas</strong>
              </p>
            </div>
            <div>
              <h5 className="font-medium">Curved rods</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Campylobacter, Vibrio, Helicobacter</strong>
              </p>
            </div>
            <div>
              <h5 className="font-medium">Coccobacilli</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Haemophilus, Bordetella</strong>
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Gram-Negative Cocci (GNC)',
      content: (
        <div className="space-y-4">
          <p className="text-sm">
            <strong>Neisseria</strong> (N. meningitidis, N. gonorrhoeae) — diplococci, kidney bean–shaped
          </p>
          <p className="text-sm">
            <strong>Moraxella catarrhalis</strong> — diplococci, respiratory pathogen
          </p>
        </div>
      )
    },
    {
      title: 'Special Stains & Morphologies',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Acid-Fast Stain (Ziehl-Neelsen)</h5>
              <p className="text-sm text-muted-foreground">
                For <strong>Mycobacterium</strong> (M. tuberculosis, NTM) and <strong>Nocardia</strong>
              </p>
            </div>
            <div>
              <h5 className="font-medium">Yeast vs Fungi</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Yeast:</strong> Round, budding; <strong>Pseudohyphae:</strong> Elongated budding; <strong>True hyphae:</strong> Mold filaments
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Common Pitfalls',
      content: (
        <div className="space-y-4">
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Over-decolorization:</strong> Gram-positive organisms may appear Gram-negative</li>
            <li><strong>Under-decolorization:</strong> Gram-negative organisms may appear Gram-positive</li>
            <li><strong>Thick smears:</strong> Hard to decolorize properly; overlapping cells</li>
            <li><strong>Old cultures:</strong> Gram-positive organisms can become Gram-variable</li>
            <li><strong>Mixed flora:</strong> Both GPC and GNR can coexist; look carefully</li>
          </ul>
        </div>
      )
    }
  ]

  return (
    <ModulePage
      title="Gram Stains & Basic Morphology"
      description="Master pattern recognition and morphological interpretation"
      sections={sections}
      relatedTools={[
        { title: 'Gram Stain Interpreter', route: '/tools/gram-interpreter' }
      ]}
    />
  )
}
