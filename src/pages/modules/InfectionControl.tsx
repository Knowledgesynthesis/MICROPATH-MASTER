import { ModulePage } from '@/components/ModulePage'

export function InfectionControlPage() {
  const sections = [
    {
      title: 'Isolation Precautions',
      content: (
        <div className="space-y-4">
          <p>
            Standard Precautions apply to all patients. Additional precautions based on transmission risk.
          </p>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Contact Precautions</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Indication:</strong> Direct or indirect contact transmission<br/>
                <strong>Examples:</strong> MRSA, VRE, C. difficile, multidrug-resistant organisms (MDRO), scabies<br/>
                <strong>Requirements:</strong> Gown and gloves
              </p>
            </div>
            <div>
              <h5 className="font-medium">Droplet Precautions</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Indication:</strong> Large respiratory droplets (travel &lt;6 feet)<br/>
                <strong>Examples:</strong> Influenza, pertussis, meningococcal disease, mumps<br/>
                <strong>Requirements:</strong> Surgical mask
              </p>
            </div>
            <div>
              <h5 className="font-medium">Airborne Precautions</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Indication:</strong> Small airborne particles (travel long distances)<br/>
                <strong>Examples:</strong> Tuberculosis, measles, varicella (chickenpox), disseminated zoster<br/>
                <strong>Requirements:</strong> N95 respirator, negative-pressure room
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Hospital-Acquired Pathogens',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">MRSA</h5>
              <p className="text-sm text-muted-foreground">
                Methicillin-resistant S. aureus. Contact precautions. Screening swabs (nasal) used in some facilities.
              </p>
            </div>
            <div>
              <h5 className="font-medium">VRE</h5>
              <p className="text-sm text-muted-foreground">
                Vancomycin-resistant Enterococcus. Contact precautions. Environmental contamination common.
              </p>
            </div>
            <div>
              <h5 className="font-medium">CRE</h5>
              <p className="text-sm text-muted-foreground">
                Carbapenem-resistant Enterobacterales. Contact precautions. Reportable to public health. Limited treatment options.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Clostridioides difficile</h5>
              <p className="text-sm text-muted-foreground">
                Antibiotic-associated diarrhea. Contact precautions. Spores resistant to alcohol—requires soap and water handwashing.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Candida auris</h5>
              <p className="text-sm text-muted-foreground">
                Multidrug-resistant yeast. Contact precautions. Environmental persistence. Emerging threat.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Outbreak Recognition',
      content: (
        <div className="space-y-4">
          <p>
            Labs play a critical role in detecting outbreaks.
          </p>
          <ul className="space-y-2 list-disc list-inside text-sm">
            <li><strong>Cluster detection:</strong> Unusual increase in specific organism or resistance pattern</li>
            <li><strong>Molecular typing:</strong> PFGE, WGS (whole-genome sequencing) to confirm clonality</li>
            <li><strong>Communication:</strong> Immediate notification to infection prevention and hospital epidemiology</li>
            <li><strong>Root cause analysis:</strong> Identify source (contaminated equipment, personnel carrier, environmental reservoir)</li>
          </ul>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm font-medium">Example Outbreak Scenarios:</p>
            <p className="text-sm">
              3 cases of identical Pseudomonas in ICU → Investigate common water source (ice machine, sink)<br/>
              Multiple MRSA bacteremias with same strain → Healthcare worker nasal carriage
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Antimicrobial Stewardship',
      content: (
        <div className="space-y-4">
          <p>
            Coordinated interventions to improve antibiotic use.
          </p>
          <ul className="space-y-2 list-disc list-inside text-sm">
            <li><strong>De-escalation:</strong> Narrow therapy based on culture results and AST</li>
            <li><strong>Selective reporting:</strong> Labs report narrow-spectrum options first</li>
            <li><strong>Comments on reports:</strong> "Consider oral step-down therapy," "ESBL detected—avoid cephalosporins"</li>
            <li><strong>Reflex testing protocols:</strong> Prevent unnecessary testing (e.g., no repeat C. diff testing within 7 days)</li>
            <li><strong>Organism-drug mismatch alerts:</strong> Flag inappropriate antibiotic selections</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Contaminant vs Colonizer vs Pathogen',
      content: (
        <div className="space-y-4">
          <p>
            One of the most important clinical microbiology skills.
          </p>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Contaminant</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Definition:</strong> Organism from skin flora or environment, not causing infection<br/>
                <strong>Example:</strong> Single positive blood culture with CoNS (likely skin contamination during venipuncture)<br/>
                <strong>Action:</strong> Usually do not report AST; add comment if clinically indicated
              </p>
            </div>
            <div>
              <h5 className="font-medium">Colonizer</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Definition:</strong> Organism present but not causing active infection<br/>
                <strong>Example:</strong> MRSA nasal swab (screening), Candida in respiratory culture without pneumonia<br/>
                <strong>Action:</strong> Report but note clinical correlation needed
              </p>
            </div>
            <div>
              <h5 className="font-medium">Pathogen</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Definition:</strong> Organism causing infection<br/>
                <strong>Example:</strong> E. coli ≥10⁵ CFU/mL in urine with pyuria, S. aureus in multiple positive blood culture sets<br/>
                <strong>Action:</strong> Full workup and AST
              </p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm font-medium">Blood Culture Pearl:</p>
            <p className="text-sm">
              CoNS in 1/2 sets = likely contaminant<br/>
              CoNS in 2/2 sets from same draw = still possibly contaminant<br/>
              CoNS in multiple sets over time + clinical signs = possible true infection (especially with prosthetic material)
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Lab-Clinician Communication',
      content: (
        <div className="space-y-4">
          <ul className="space-y-2 list-disc list-inside text-sm">
            <li><strong>Critical values:</strong> Call clinician immediately for positive blood cultures, CSF cultures, AFB smears</li>
            <li><strong>Unexpected resistance:</strong> Alert for unusual patterns (e.g., carbapenem-resistant organism)</li>
            <li><strong>Polymicrobial cultures:</strong> Note when multiple organisms present; may indicate contamination or mixed infection</li>
            <li><strong>Comments on reports:</strong> Add interpretive comments to guide therapy</li>
            <li><strong>Outbreak alerts:</strong> Notify infection prevention and clinicians of clustering</li>
          </ul>
        </div>
      )
    }
  ]

  return (
    <ModulePage
      title="Infection Control & Stewardship"
      description="Isolation precautions, outbreak recognition, stewardship, and lab-clinician communication"
      sections={sections}
      relatedTools={[
        { title: 'Contamination vs Infection Sorter', route: '/tools/contamination-sorter' }
      ]}
    />
  )
}
