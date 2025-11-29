import { ModulePage } from '@/components/ModulePage'

export function VirologyPage() {
  const sections = [
    {
      title: 'Diagnostic Methods',
      content: (
        <div className="space-y-4">
          <p>
            Virology diagnosis has shifted almost entirely from culture to molecular methods (NAAT/PCR).
          </p>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Viral Culture</h5>
              <p className="text-sm text-muted-foreground">
                Rarely used now. Slow (days to weeks). Still used for HSV susceptibility testing in some cases.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Antigen Detection</h5>
              <p className="text-sm text-muted-foreground">
                Rapid but less sensitive than NAAT. Examples: Influenza rapid tests, RSV antigen tests.
              </p>
            </div>
            <div>
              <h5 className="font-medium">NAAT (Nucleic Acid Amplification)</h5>
              <p className="text-sm text-muted-foreground">
                Gold standard. High sensitivity and specificity. PCR, RT-PCR for RNA viruses. Multiplex panels available.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Serology</h5>
              <p className="text-sm text-muted-foreground">
                IgM (acute infection) vs IgG (past infection or immunity). Used for HIV, HBV, HCV, EBV, etc.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Respiratory Viruses',
      content: (
        <div className="space-y-4">
          <p>
            Multiplex respiratory panels test for 15-20 pathogens simultaneously.
          </p>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Influenza A & B</h5>
              <p className="text-sm text-muted-foreground">
                Seasonal. PCR or rapid antigen. Subtyping (H1N1, H3N2) available. Antiviral treatment (oseltamivir) most effective if started early.
              </p>
            </div>
            <div>
              <h5 className="font-medium">RSV (Respiratory Syncytial Virus)</h5>
              <p className="text-sm text-muted-foreground">
                Leading cause of bronchiolitis in infants. PCR or antigen tests.
              </p>
            </div>
            <div>
              <h5 className="font-medium">SARS-CoV-2</h5>
              <p className="text-sm text-muted-foreground">
                COVID-19. RT-PCR gold standard. Rapid antigen tests less sensitive but faster.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Other Respiratory Viruses</h5>
              <p className="text-sm text-muted-foreground">
                Rhinovirus/Enterovirus, Adenovirus, Parainfluenza, Human metapneumovirus, Coronaviruses (non-SARS-CoV-2)
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Herpesviruses',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">HSV-1 & HSV-2</h5>
              <p className="text-sm text-muted-foreground">
                Oral and genital lesions, encephalitis (HSV-1), neonatal herpes. PCR on CSF for encephalitis. Lesion swab PCR for mucocutaneous.
              </p>
            </div>
            <div>
              <h5 className="font-medium">VZV (Varicella-Zoster Virus)</h5>
              <p className="text-sm text-muted-foreground">
                Chickenpox (primary), shingles (reactivation). PCR from lesion or CSF.
              </p>
            </div>
            <div>
              <h5 className="font-medium">CMV (Cytomegalovirus)</h5>
              <p className="text-sm text-muted-foreground">
                Congenital infection, transplant recipients. Viral load (quantitative PCR) used to monitor. CMV pp65 antigenemia test (less common now).
              </p>
            </div>
            <div>
              <h5 className="font-medium">EBV (Epstein-Barr Virus)</h5>
              <p className="text-sm text-muted-foreground">
                Infectious mononucleosis. Serology: VCA-IgM (acute), EBNA-IgG (past). EBV PCR for lymphoproliferative disease.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Hepatitis Viruses',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Hepatitis B (HBV)</h5>
              <p className="text-sm text-muted-foreground">
                <strong>HBsAg:</strong> Surface antigen (active infection)<br/>
                <strong>Anti-HBs:</strong> Antibody to surface antigen (immunity from vaccine or recovery)<br/>
                <strong>Anti-HBc IgM:</strong> Acute infection<br/>
                <strong>HBV DNA (viral load):</strong> Quantitative, monitors treatment
              </p>
            </div>
            <div>
              <h5 className="font-medium">Hepatitis C (HCV)</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Anti-HCV:</strong> Screening antibody (exposure, not active infection)<br/>
                <strong>HCV RNA:</strong> Confirms active infection. Quantitative viral load monitors treatment.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'HIV',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Screening</h5>
              <p className="text-sm text-muted-foreground">
                4th generation Ag/Ab combo test detects HIV-1/2 antibodies + p24 antigen. Shortens window period.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Confirmation</h5>
              <p className="text-sm text-muted-foreground">
                HIV-1/HIV-2 differentiation assay. If indeterminate, HIV RNA PCR.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Monitoring</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Viral load (HIV RNA):</strong> Quantitative PCR. Goal: undetectable on ART<br/>
                <strong>CD4 count:</strong> Immune status
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Lab Stewardship Considerations',
      content: (
        <div className="space-y-4">
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Positive NAAT ≠ Viable virus:</strong> Can detect nucleic acid from non-infectious particles</li>
            <li><strong>Multiplex panels:</strong> May detect colonization/asymptomatic carriage (e.g., rhinovirus)</li>
            <li><strong>Cycle threshold (Ct) values:</strong> Lower Ct = higher viral load (more clinically significant)</li>
            <li><strong>Test appropriateness:</strong> Not all respiratory infections need testing; clinical judgment critical</li>
          </ul>
        </div>
      )
    }
  ]

  return (
    <ModulePage
      title="Virology"
      description="Viral diagnostics: PCR/NAAT, antigen tests, viral loads, and serology"
      sections={sections}
    />
  )
}
