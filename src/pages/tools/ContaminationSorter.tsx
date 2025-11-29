import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const cases = [
  {
    id: 1,
    scenario: 'Blood culture: CoNS in 1 of 2 sets. Patient afebrile, no signs of infection.',
    options: ['Contamination', 'True infection', 'Colonization'],
    answer: 'Contamination',
    explanation: 'Single positive blood culture with CoNS (common skin flora) in asymptomatic patient = likely skin contamination during venipuncture'
  },
  {
    id: 2,
    scenario: 'Urine culture: 10³ CFU/mL mixed skin flora. Patient asymptomatic.',
    options: ['Contamination', 'True UTI', 'Colonization'],
    answer: 'Contamination',
    explanation: 'Low colony count (<10⁵) + mixed flora + asymptomatic = likely contamination from skin/perineal flora during collection'
  },
  {
    id: 3,
    scenario: 'Respiratory culture: Heavy Candida growth. Patient on mechanical ventilator, no pneumonia.',
    options: ['Contamination', 'True infection', 'Colonization'],
    answer: 'Colonization',
    explanation: 'Candida in respiratory culture without signs of pneumonia = colonization, especially common in ventilated patients. Not invasive candidiasis.'
  },
  {
    id: 4,
    scenario: 'Blood culture: S. aureus in 2/2 sets drawn 1 hour apart. Patient febrile with new heart murmur.',
    options: ['Contamination', 'True infection (bacteremia)', 'Colonization'],
    answer: 'True infection (bacteremia)',
    explanation: 'S. aureus in multiple blood culture sets + clinical signs (fever, murmur) = true bacteremia, likely endocarditis'
  },
  {
    id: 5,
    scenario: 'MRSA nasal swab positive. Patient asymptomatic, admitted for elective surgery.',
    options: ['Contamination', 'Active infection', 'Colonization'],
    answer: 'Colonization',
    explanation: 'Positive MRSA screening swab without active infection = colonization. Important for infection control (contact precautions) but not active disease.'
  },
  {
    id: 6,
    scenario: 'Urine culture: E. coli >10⁵ CFU/mL. Patient with dysuria, frequency, and pyuria.',
    options: ['Contamination', 'True UTI', 'Asymptomatic bacteriuria'],
    answer: 'True UTI',
    explanation: 'High colony count + pyuria + symptoms = true urinary tract infection requiring treatment'
  }
]

export function ContaminationSorterPage() {
  const [currentCase, setCurrentCase] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    setShowFeedback(true)
  }

  const handleNext = () => {
    if (currentCase < cases.length - 1) {
      setCurrentCase(currentCase + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    }
  }

  const handlePrevious = () => {
    if (currentCase > 0) {
      setCurrentCase(currentCase - 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    }
  }

  const currentCaseData = cases[currentCase]
  const isCorrect = selectedAnswer === currentCaseData.answer

  return (
    <div className="container px-4 py-8 md:py-12 md:px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/infection-control"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Infection Control Module
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Contamination vs Infection Sorter</h1>
          <p className="text-xl text-muted-foreground">
            Learn to distinguish contamination, colonization, and true infection
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              Case {currentCase + 1} of {cases.length}
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${((currentCase + 1) / cases.length) * 100}%` }}
            />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Clinical Scenario</CardTitle>
            <CardDescription>How would you classify this result?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-muted rounded-lg">
              <p className="text-base">{currentCaseData.scenario}</p>
            </div>

            <div className="space-y-2">
              {currentCaseData.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={showFeedback}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    selectedAnswer === option
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  } ${showFeedback && option === currentCaseData.answer ? 'border-green-500 bg-green-500/10' : ''} ${
                    showFeedback && selectedAnswer === option && !isCorrect
                      ? 'border-destructive bg-destructive/10'
                      : ''
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {showFeedback && (
              <div
                className={`p-4 rounded-lg border ${
                  isCorrect
                    ? 'border-green-500/50 bg-green-500/10'
                    : 'border-destructive/50 bg-destructive/10'
                }`}
              >
                <p className="font-semibold mb-2">{isCorrect ? 'Correct!' : 'Incorrect'}</p>
                <p className="text-sm">{currentCaseData.explanation}</p>
              </div>
            )}

            <div className="flex gap-3">
              <Button variant="outline" onClick={handlePrevious} disabled={currentCase === 0} className="flex-1">
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentCase === cases.length - 1 || !showFeedback}
                className="flex-1"
              >
                Next Case
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
