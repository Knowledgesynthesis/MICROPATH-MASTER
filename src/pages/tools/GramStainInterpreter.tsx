import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const cases = [
  {
    id: 1,
    description: 'Purple cocci in clusters',
    options: ['Staphylococcus', 'Streptococcus', 'Enterococcus', 'Neisseria'],
    answer: 'Staphylococcus',
    explanation: 'Gram-positive (purple) cocci in clusters = Staphylococcus'
  },
  {
    id: 2,
    description: 'Purple cocci in chains',
    options: ['Staphylococcus', 'Streptococcus', 'E. coli', 'Pseudomonas'],
    answer: 'Streptococcus',
    explanation: 'Gram-positive (purple) cocci in chains = Streptococcus'
  },
  {
    id: 3,
    description: 'Pink/red rods',
    options: ['Gram-negative rods', 'Gram-positive rods', 'Yeast', 'Fungi'],
    answer: 'Gram-negative rods',
    explanation: 'Pink/red (safranin counterstain) rods = Gram-negative rods (GNR)'
  },
  {
    id: 4,
    description: 'Pink kidney bean–shaped diplococci',
    options: ['Streptococcus', 'Staphylococcus', 'Neisseria', 'Enterococcus'],
    answer: 'Neisseria',
    explanation: 'Gram-negative (pink) diplococci, kidney bean shape = Neisseria'
  },
  {
    id: 5,
    description: 'Purple small rods, pleomorphic',
    options: ['Listeria', 'Corynebacterium', 'E. coli', 'Bacillus'],
    answer: 'Corynebacterium',
    explanation: 'Gram-positive (purple) small pleomorphic rods = Corynebacterium (diphtheroids)'
  },
  {
    id: 6,
    description: 'Curved pink rods',
    options: ['Campylobacter', 'E. coli', 'Bacillus', 'Clostridium'],
    answer: 'Campylobacter',
    explanation: 'Gram-negative (pink) curved rods = Campylobacter, Vibrio, or Helicobacter'
  }
]

export function GramStainInterpreterPage() {
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
        <Link to="/gram" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Gram Stains Module
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Gram Stain Interpreter</h1>
          <p className="text-xl text-muted-foreground">
            Practice identifying organisms from Gram stain morphology
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
            <CardTitle>Gram Stain Observation</CardTitle>
            <CardDescription>What do you see under the microscope?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-muted rounded-lg text-center">
              <p className="text-lg font-medium">{currentCaseData.description}</p>
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
