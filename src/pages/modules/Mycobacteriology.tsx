import { ModulePage } from '@/components/ModulePage'

export function MycobacteriologyPage() {
  const sections = [
    {
      title: 'AFB Stain Basics',
      content: (
        <div className="space-y-4">
          <p>
            Acid-fast bacilli (AFB) have a unique waxy cell wall (mycolic acid) that resists standard Gram staining.
          </p>
          <h4 className="font-semibold">Ziehl-Neelsen (ZN) Stain:</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li>Heat with carbol fuchsin (red)</li>
            <li>Decolorize with acid-alcohol</li>
            <li>Counterstain with methylene blue</li>
          </ol>
          <p className="text-sm mt-4">
            <strong>Result:</strong> AFB retain red stain (acid-fast positive). Background is blue.
          </p>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm">
              <strong>Pearl:</strong> Fluorochrome stains (auramine-rhodamine) are more sensitive and easier to screen but require fluorescence microscopy.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Culture Process',
      content: (
        <div className="space-y-4">
          <p>Mycobacteria grow slowly. Culture is the gold standard for diagnosis.</p>
          <h4 className="font-semibold">Media:</h4>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Lowenstein-Jensen (LJ):</strong> Egg-based solid medium</li>
            <li><strong>Middlebrook 7H10/7H11:</strong> Agar-based solid medium</li>
            <li><strong>MGIT (Mycobacteria Growth Indicator Tube):</strong> Liquid broth, fluorescence-based detection</li>
          </ul>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm">
              <strong>Incubation:</strong> Up to 6-8 weeks for slow growers. MGIT systems detect growth faster (days to weeks).
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'M. tuberculosis Complex vs NTM',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">M. tuberculosis Complex (MTBC)</h5>
              <p className="text-sm text-muted-foreground">
                <strong>M. tuberculosis, M. bovis, M. africanum</strong><br/>
                Slow growth (3-6 weeks). Niacin-positive, nitrate-positive (M. tb).
              </p>
            </div>
            <div>
              <h5 className="font-medium">Non-Tuberculous Mycobacteria (NTM)</h5>
              <p className="text-sm text-muted-foreground">
                <strong>M. avium complex (MAC), M. kansasii, M. abscessus, M. fortuitum</strong><br/>
                Environmental organisms. Clinical significance varies (colonization vs infection).
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Molecular Testing',
      content: (
        <div className="space-y-4">
          <p>
            NAAT (Nucleic Acid Amplification Tests) provide rapid diagnosis.
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Xpert MTB/RIF:</strong> Detects M. tuberculosis and rifampin resistance in ~2 hours</li>
            <li><strong>Molecular probes:</strong> Identify species (MTBC, MAC, etc.) from culture</li>
            <li><strong>Line probe assays:</strong> Detect resistance mutations</li>
          </ul>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm">
              <strong>Pearl:</strong> Positive NAAT + negative smear = low bacillary load or paucibacillary disease. Still treat if clinical suspicion high.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Drug Susceptibility Testing',
      content: (
        <div className="space-y-4">
          <p>
            Essential for MDR-TB (multidrug-resistant) and XDR-TB (extensively drug-resistant).
          </p>
          <h4 className="font-semibold">First-Line Agents:</h4>
          <ul className="space-y-1 list-disc list-inside text-sm">
            <li>Isoniazid (INH)</li>
            <li>Rifampin (RIF)</li>
            <li>Pyrazinamide (PZA)</li>
            <li>Ethambutol (EMB)</li>
          </ul>
          <h4 className="font-semibold mt-4">Resistance Patterns:</h4>
          <ul className="space-y-1 list-disc list-inside text-sm">
            <li><strong>MDR-TB:</strong> Resistant to at least INH and RIF</li>
            <li><strong>XDR-TB:</strong> MDR + resistant to fluoroquinolone and injectable agent</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Clinical & Lab Stewardship',
      content: (
        <div className="space-y-4">
          <ul className="space-y-2 list-disc list-inside">
            <li>AFB smear-positive = high infectivity → respiratory isolation</li>
            <li>Report AFB results STAT to infection control</li>
            <li>Not all AFB are M. tuberculosis (NTM, Nocardia can be AFB-positive)</li>
            <li>Multiple specimens increase sensitivity (3 early-morning sputa for pulmonary TB)</li>
          </ul>
        </div>
      )
    }
  ]

  return (
    <ModulePage
      title="Mycobacteriology"
      description="AFB stains, culture processes, NAAT, and drug resistance testing"
      sections={sections}
    />
  )
}
