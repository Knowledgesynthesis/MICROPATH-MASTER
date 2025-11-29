import { ModulePage } from '@/components/ModulePage'

export function ParasitologyPage() {
  const sections = [
    {
      title: 'Intestinal Parasites',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold">Ova & Parasite (O&P) Exam:</h4>
          <p className="text-sm">
            Stool examination for parasites. Multiple specimens (usually 3) increase sensitivity.
          </p>
          <div className="space-y-3 mt-4">
            <div>
              <h5 className="font-medium">Giardia lamblia</h5>
              <p className="text-sm text-muted-foreground">
                Protozoan. Causes diarrhea, malabsorption. Trophozoites (pear-shaped, "falling leaf" motility) and cysts (oval, 4 nuclei).
                Antigen testing (EIA) more sensitive than O&P.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Cryptosporidium</h5>
              <p className="text-sm text-muted-foreground">
                Protozoan. Watery diarrhea, especially in immunocompromised. Acid-fast positive oocysts. Antigen testing available.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Entamoeba histolytica</h5>
              <p className="text-sm text-muted-foreground">
                Amoeba. Bloody diarrhea, liver abscess. Trophozoites may contain ingested RBCs (pathognomonic). Cysts have 1-4 nuclei.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Helminths (Worms)</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Ascaris lumbricoides:</strong> Large roundworm eggs<br/>
                <strong>Enterobius vermicularis:</strong> Pinworm. "Scotch tape test" for eggs<br/>
                <strong>Trichuris trichiura:</strong> Whipworm. Barrel-shaped eggs with polar plugs
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Blood Parasites',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Malaria (Plasmodium species)</h5>
              <p className="text-sm text-muted-foreground">
                <strong>P. falciparum, P. vivax, P. ovale, P. malariae, P. knowlesi</strong><br/>
                Thick and thin blood smears (Giemsa stain). Thick = screening. Thin = species ID and parasitemia quantification.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Key features:</strong><br/>
                P. falciparum: Ring forms, banana-shaped gametocytes, high parasitemia<br/>
                P. vivax/ovale: Enlarged RBCs, Schüffner's dots, dormant hypnozoites (relapse risk)<br/>
                P. malariae: Band forms, quartan fever (72h cycle)
              </p>
            </div>
            <div>
              <h5 className="font-medium">Babesia</h5>
              <p className="text-sm text-muted-foreground">
                Tick-borne. "Maltese cross" tetrads in RBCs. Can mimic malaria.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Tissue & Other Parasites',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h5 className="font-medium">Toxoplasma gondii</h5>
              <p className="text-sm text-muted-foreground">
                Protozoan. Congenital infection, CNS disease in immunocompromised. Serology and PCR used for diagnosis (not routine O&P).
              </p>
            </div>
            <div>
              <h5 className="font-medium">Trichomonas vaginalis</h5>
              <p className="text-sm text-muted-foreground">
                Flagellated protozoan. STI, vaginal discharge. Motile trophozoites on wet mount. NAAT testing preferred.
              </p>
            </div>
            <div>
              <h5 className="font-medium">Strongyloides stercoralis</h5>
              <p className="text-sm text-muted-foreground">
                Threadworm. Can cause hyperinfection in immunosuppressed. Larvae (not eggs) in stool.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Diagnostic Approach',
      content: (
        <div className="space-y-4">
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Travel history critical:</strong> Geographic exposure guides differential</li>
            <li><strong>Specimen type matters:</strong> Stool for intestinal parasites, blood for malaria/Babesia, urine for Schistosoma</li>
            <li><strong>Multiple specimens:</strong> Single O&P has low sensitivity; 3 specimens recommended</li>
            <li><strong>Antigen/NAAT tests:</strong> More sensitive than microscopy for Giardia, Cryptosporidium, Trichomonas</li>
            <li><strong>Timing:</strong> Malaria smears should be collected during fever spikes if possible</li>
          </ul>
        </div>
      )
    }
  ]

  return (
    <ModulePage
      title="Parasitology"
      description="Ova & parasites, malaria, and clinically important parasites"
      sections={sections}
    />
  )
}
