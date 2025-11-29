import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const cases = [
  {
    id: 1,
    description: 'BAP: Golden colonies, β-hemolysis, creamy texture',
    options: ['S. aureus', 'S. epidermidis', 'S. pyogenes', 'Enterococcus'],
    answer: 'S. aureus',
    explanation: 'Golden color + β-hemolysis + creamy texture = classic S. aureus appearance'
  },
  {
    id: 2,
    description: 'MacConkey: Pink colonies, mucoid',
    options: ['E. coli', 'Klebsiella', 'Pseudomonas', 'Salmonella'],
    answer: 'Klebsiella',
    explanation: 'Pink (lactose fermenter) + mucoid = Klebsiella pneumoniae'
  },
  {
    id: 3,
    description: 'BAP: Green pigment, metallic sheen, grape odor',
    options: ['E. coli', 'Pseudomonas', 'Proteus', 'Klebsiella'],
    answer: 'Pseudomonas',
    explanation: 'Pyocyanin (green pigment) + metallic sheen + grape odor = Pseudomonas aeruginosa'
  },
  {
    id: 4,
    description: 'BAP: Swarming growth across entire plate',
    options: ['Proteus', 'E. coli', 'Klebsiella', 'Pseudomonas'],
    answer: 'Proteus',
    explanation: 'Swarming motility = Proteus mirabilis characteristic'
  },
  {
    id: 5,
    description: 'BAP: Small, α-hemolytic, "draughtsman" colonies',
    options: ['S. pneumoniae', 'S. pyogenes', 'S. aureus', 'Enterococcus'],
    answer: 'S. pneumoniae',
    explanation: 'α-hemolysis + draughtsman (central depression) = S. pneumoniae'
  }
]

export function PlateReaderPage() {
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
        <Link to="/plates" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Plates Module
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Plate Reader Simulator</h1>
          <p className="text-xl text-muted-foreground">
            Practice identifying organisms based on colony morphology
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
            <CardTitle>Plate Observation</CardTitle>
            <CardDescription>What organism do you see?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-muted rounded-lg text-center">
              <p className="text-lg">{currentCaseData.description}</p>
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
