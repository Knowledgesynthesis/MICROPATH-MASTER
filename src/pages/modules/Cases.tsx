import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { ArrowLeft, ChevronRight } from 'lucide-react'

const cases = [
  {
    id: 'urine-1',
    title: 'Urine Culture Case 1',
    specimen: 'Urine',
    clinicalInfo: '65F with dysuria and frequency',
    gramStain: 'GNR, many WBCs',
    plates: 'BAP: >100,000 CFU/mL gray colonies. MAC: Pink colonies (lactose fermenter)',
    question: 'Most likely organism?',
    options: ['E. coli', 'Pseudomonas aeruginosa', 'Klebsiella pneumoniae', 'Proteus mirabilis'],
    answer: 'E. coli',
    rationale: 'GNR, lactose fermenter, >10⁵ CFU/mL in urine = classic E. coli UTI. Most common cause of community-acquired UTI.'
  },
  {
    id: 'blood-1',
    title: 'Blood Culture Case 1',
    specimen: 'Blood culture (2/2 sets positive)',
    clinicalInfo: 'IV drug user with fever, new heart murmur',
    gramStain: 'GPC in clusters',
    plates: 'BAP: Golden, β-hemolytic colonies',
    question: 'Most likely organism and key test?',
    options: ['S. aureus (coagulase test)', 'S. epidermidis (coagulase test)', 'Streptococcus pyogenes (hemolysis)', 'Enterococcus (PYR test)'],
    answer: 'S. aureus (coagulase test)',
    rationale: 'GPC in clusters + β-hemolysis + golden colonies = S. aureus. Coagulase-positive confirms. Endocarditis in IVDU is classic.'
  },
  {
    id: 'wound-1',
    title: 'Wound Culture Case 1',
    specimen: 'Wound swab from diabetic foot ulcer',
    clinicalInfo: 'Diabetic patient with chronic foot ulcer, foul odor',
    gramStain: 'Mixed: GPC in chains, GNR',
    plates: 'Polymicrobial growth: Enterococcus, E. coli, Bacteroides fragilis (anaerobic plate)',
    question: 'How should this culture be interpreted?',
    options: ['Contamination—ignore', 'True polymicrobial infection—report all', 'Only report aerobes', 'Repeat culture'],
    answer: 'True polymicrobial infection—report all',
    rationale: 'Diabetic foot infections are often polymicrobial (aerobes + anaerobes). Foul odor suggests anaerobes. All organisms are relevant.'
  },
  {
    id: 'resp-1',
    title: 'Respiratory Culture Case 1',
    specimen: 'Sputum',
    clinicalInfo: 'CF patient with worsening cough',
    gramStain: 'GNR, moderate WBCs',
    plates: 'BAP: Green pigmented colonies with metallic sheen, grape odor',
    question: 'Most likely organism?',
    options: ['E. coli', 'Pseudomonas aeruginosa', 'Klebsiella pneumoniae', 'Haemophilus influenzae'],
    answer: 'Pseudomonas aeruginosa',
    rationale: 'Green pigment (pyocyanin) + metallic sheen + grape odor = Pseudomonas. Common in CF patients.'
  },
  {
    id: 'csf-1',
    title: 'CSF Culture Case 1',
    specimen: 'CSF',
    clinicalInfo: 'Young adult with fever, headache, stiff neck. CSF: 500 WBC, low glucose, high protein',
    gramStain: 'GNC, kidney bean–shaped diplococci',
    plates: 'Chocolate agar: Growth. BAP: No growth',
    question: 'Most likely organism?',
    options: ['Neisseria meningitidis', 'Streptococcus pneumoniae', 'Haemophilus influenzae', 'Listeria monocytogenes'],
    answer: 'Neisseria meningitidis',
    rationale: 'GNC diplococci + fastidious (chocolate only) + meningitis = N. meningitidis. Reportable. Droplet precautions.'
  },
  {
    id: 'stool-1',
    title: 'Stool Culture Case 1',
    specimen: 'Stool',
    clinicalInfo: 'Traveler returning from Mexico with bloody diarrhea',
    gramStain: 'N/A (not routinely done on stool)',
    plates: 'MAC: Non-lactose fermenter colonies. Oxidase-negative. Non-motile.',
    question: 'Most likely organism?',
    options: ['E. coli O157:H7', 'Shigella', 'Salmonella', 'Campylobacter'],
    answer: 'Shigella',
    rationale: 'Bloody diarrhea + NLF + non-motile = Shigella. Salmonella is motile. E. coli O157 is LF (sorbitol-negative subtype). Reportable organism.'
  }
]

export function CasesPage() {
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  if (selectedCase) {
    return (
      <div className="container px-4 py-8 md:py-12 md:px-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => {
              setSelectedCase(null)
              setShowAnswer(false)
              setSelectedOption(null)
            }}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cases
          </button>

          <Card>
            <CardHeader>
              <CardTitle>{selectedCase.title}</CardTitle>
              <CardDescription>{selectedCase.clinicalInfo}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Specimen:</h4>
                <p className="text-sm text-muted-foreground">{selectedCase.specimen}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Gram Stain:</h4>
                <p className="text-sm text-muted-foreground">{selectedCase.gramStain}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Culture Results:</h4>
                <p className="text-sm text-muted-foreground">{selectedCase.plates}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">{selectedCase.question}</h4>
                <div className="space-y-2">
                  {selectedCase.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedOption(option)}
                      disabled={showAnswer}
                      className={`w-full text-left p-3 rounded-lg border transition-colors ${
                        selectedOption === option
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      } ${showAnswer && option === selectedCase.answer ? 'border-green-500 bg-green-500/10' : ''} ${
                        showAnswer && selectedOption === option && option !== selectedCase.answer
                          ? 'border-destructive bg-destructive/10'
                          : ''
                      }`}
                    >
                      <span className="text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </div>

              {!showAnswer && selectedOption && (
                <Button onClick={() => setShowAnswer(true)} className="w-full">
                  Check Answer
                </Button>
              )}

              {showAnswer && (
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Rationale:</h4>
                  <p className="text-sm">{selectedCase.rationale}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container px-4 py-8 md:py-12 md:px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Integrated Micro Case Sign-Out</h1>
          <p className="text-xl text-muted-foreground">
            Practice real-world case workflows from specimen to report
          </p>
        </div>

        <div className="space-y-4">
          {cases.map((caseItem) => (
            <Card
              key={caseItem.id}
              className="cursor-pointer transition-all hover:shadow-lg hover:border-primary/50"
              onClick={() => setSelectedCase(caseItem)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{caseItem.title}</CardTitle>
                    <CardDescription className="mt-2">{caseItem.clinicalInfo}</CardDescription>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
