import { ModulePage } from '@/components/ModulePage'

export function PlatesPage() {
  const sections = [
    {
      title: 'Colony Morphology Basics',
      content: (
        <div className="space-y-4">
          <p>Reading plates is both art and science. Key features to observe:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Size:</strong> Pinpoint, small, medium, large</li>
            <li><strong>Color:</strong> White, cream, golden, gray, pigmented</li>
            <li><strong>Shape:</strong> Round, irregular, spreading</li>
            <li><strong>Elevation:</strong> Flat, raised, convex, umbonate</li>
            <li><strong>Margin:</strong> Entire, undulate, lobate</li>
            <li><strong>Texture:</strong> Smooth, rough, mucoid</li>
            <li><strong>Hemolysis:</strong> α (partial), β (complete), γ (none)</li>
            <li><strong>Odor:</strong> Some organisms have characteristic smells</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Blood Agar Patterns',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold">Hemolysis Types:</h4>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">β-Hemolysis (Complete)</h5>
              <p className="text-sm text-muted-foreground">
                Clear zone around colonies. Think: <strong>S. aureus, S. pyogenes (Group A Strep), S. agalactiae (Group B Strep)</strong>
              </p>
            </div>
            <div>
              <h5 className="font-medium">α-Hemolysis (Partial)</h5>
              <p className="text-sm text-muted-foreground">
                Green/brown discoloration. Think: <strong>S. pneumoniae, viridans streptococci</strong>
              </p>
            </div>
            <div>
              <h5 className="font-medium">γ-Hemolysis (None)</h5>
              <p className="text-sm text-muted-foreground">
                No hemolysis. Think: <strong>Enterococcus, some CoNS</strong>
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'MacConkey Agar',
      content: (
        <div className="space-y-4">
          <p>Selective and differential for Gram-negative rods:</p>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Lactose Fermenters (Pink/Red)</h5>
              <p className="text-sm text-muted-foreground">
                <strong>E. coli, Klebsiella, Enterobacter, Citrobacter</strong>
              </p>
            </div>
            <div>
              <h5 className="font-medium">Non-Lactose Fermenters (Colorless)</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Salmonella, Shigella, Proteus, Pseudomonas</strong>
              </p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm">
              <strong>Pearl:</strong> Some organisms are "late lactose fermenters" and may appear colorless at 24h but pink at 48h.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Characteristic Colony Features',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">S. aureus on BAP</h5>
              <p className="text-sm text-muted-foreground">
                Golden/yellow, β-hemolytic, often creamy texture
              </p>
            </div>
            <div>
              <h5 className="font-medium">Pseudomonas aeruginosa</h5>
              <p className="text-sm text-muted-foreground">
                Green pigment (pyocyanin), metallic sheen, grape-like odor
              </p>
            </div>
            <div>
              <h5 className="font-medium">Proteus mirabilis</h5>
              <p className="text-sm text-muted-foreground">
                Swarming growth (waves across plate)
              </p>
            </div>
            <div>
              <h5 className="font-medium">Klebsiella</h5>
              <p className="text-sm text-muted-foreground">
                Large, mucoid colonies
              </p>
            </div>
            <div>
              <h5 className="font-medium">Streptococcus pneumoniae</h5>
              <p className="text-sm text-muted-foreground">
                Small, α-hemolytic, "draughtsman" colonies (central depression)
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Growth Requirements',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Chocolate Agar Growth (but NOT BAP)</h5>
              <p className="text-sm text-muted-foreground">
                Suggests fastidious organism: <strong>Haemophilus</strong> (needs X and V factors), <strong>Neisseria</strong>
              </p>
            </div>
            <div>
              <h5 className="font-medium">Anaerobic Growth Only</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Bacteroides, Fusobacterium, Clostridium</strong> (obligate anaerobes)
              </p>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <ModulePage
      title="Plates & Media"
      description="Colony recognition, media selection, and growth pattern interpretation"
      sections={sections}
      relatedTools={[
        { title: 'Plate Reader Simulator', route: '/tools/plate-reader' }
      ]}
    />
  )
}
