import { ModulePage } from '@/components/ModulePage'

export function FoundationsPage() {
  const sections = [
    {
      title: 'Lab Workflow',
      content: (
        <div className="space-y-4">
          <p>
            Clinical microbiology begins the moment a specimen arrives at the laboratory. Understanding
            the complete workflow is essential for interpreting results and troubleshooting issues.
          </p>
          <h4 className="font-semibold">Specimen to Report Workflow:</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Accessioning:</strong> Specimen received, labeled, and logged into LIS</li>
            <li><strong>Plating:</strong> Specimen inoculated onto appropriate media based on source</li>
            <li><strong>Incubation:</strong> Plates incubated at appropriate temperature and atmosphere (aerobic, anaerobic, CO₂)</li>
            <li><strong>Reading:</strong> Plates examined for growth at 24h, 48h, and sometimes longer</li>
            <li><strong>Identification:</strong> Colonies worked up using Gram stain, biochemicals, MALDI-TOF</li>
            <li><strong>Susceptibility:</strong> AST performed on significant pathogens</li>
            <li><strong>Reporting:</strong> Results reviewed and released to clinicians</li>
          </ol>
        </div>
      )
    },
    {
      title: 'Biosafety Levels',
      content: (
        <div className="space-y-4">
          <p>
            Different organisms require different levels of containment to protect laboratory personnel.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">BSL-1</h4>
              <p className="text-sm text-muted-foreground">
                Minimal risk. Non-pathogenic organisms. Standard microbiological practices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">BSL-2</h4>
              <p className="text-sm text-muted-foreground">
                Moderate risk. Most routine clinical pathogens (S. aureus, E. coli, Salmonella).
                Requires biosafety cabinet for aerosol-generating procedures.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">BSL-3</h4>
              <p className="text-sm text-muted-foreground">
                High risk. M. tuberculosis, Brucella, Coxiella burnetii, certain fungi.
                Requires specialized ventilation and safety equipment.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Culture Media Types',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold">Common Media:</h4>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Blood Agar (BAP)</h5>
              <p className="text-sm text-muted-foreground">
                Enriched, non-selective. Supports most bacteria. Shows hemolysis patterns.
              </p>
            </div>
            <div>
              <h5 className="font-medium">MacConkey Agar</h5>
              <p className="text-sm text-muted-foreground">
                Selective for Gram-negative rods. Differentiates lactose fermenters (pink) from non-fermenters (colorless).
              </p>
            </div>
            <div>
              <h5 className="font-medium">Chocolate Agar</h5>
              <p className="text-sm text-muted-foreground">
                Enriched. For fastidious organisms (Haemophilus, Neisseria). Requires CO₂.
              </p>
            </div>
            <div>
              <h5 className="font-medium">CNA (Colistin-Nalidixic Acid)</h5>
              <p className="text-sm text-muted-foreground">
                Selective for Gram-positive organisms. Suppresses Gram-negatives.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Sabouraud Agar</h5>
              <p className="text-sm text-muted-foreground">
                For fungi. Lower pH favors fungal growth over bacteria.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Lowenstein-Jensen</h5>
              <p className="text-sm text-muted-foreground">
                For mycobacteria. Egg-based medium. Long incubation (up to 6-8 weeks).
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Incubation Conditions',
      content: (
        <div className="space-y-4">
          <ul className="space-y-2">
            <li><strong>Aerobic:</strong> Standard atmosphere, 35-37°C</li>
            <li><strong>CO₂-enriched:</strong> 5-10% CO₂, for fastidious organisms (Streptococcus pneumoniae, Neisseria)</li>
            <li><strong>Anaerobic:</strong> No oxygen, for strict anaerobes (Bacteroides, Clostridium)</li>
            <li><strong>Extended incubation:</strong> Some organisms grow slowly (fungi, mycobacteria, nutritionally variant streptococci)</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Quality Control',
      content: (
        <div className="space-y-4">
          <p>
            QC ensures media, reagents, and equipment function properly:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Media sterility checks</li>
            <li>Known organism controls for biochemical tests</li>
            <li>Gram stain controls (GPC and GNR)</li>
            <li>AST QC strains (ATCC reference strains)</li>
            <li>Incubator temperature logs</li>
          </ul>
        </div>
      )
    }
  ]

  return (
    <ModulePage
      title="Foundations of Clinical Microbiology"
      description="Understanding the laboratory workflow, biosafety, media types, and quality control"
      sections={sections}
    />
  )
}
