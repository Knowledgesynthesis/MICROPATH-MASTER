import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const cases = [
  {
    id: 1,
    organism: 'E. coli (urine)',
    drug: 'Nitrofurantoin',
    mic: 16,
    breakpoint: '≤32 (S), ≥128 (R)',
    question: 'Interpretation?',
    options: ['Susceptible', 'Intermediate', 'Resistant'],
    answer: 'Susceptible',
    explanation: 'MIC of 16 is ≤32, therefore Susceptible for nitrofurantoin'
  },
  {
    id: 2,
    organism: 'S. aureus',
    drug: 'Oxacillin (MRSA screen)',
    mic: 8,
    breakpoint: '≤2 (S), ≥4 (R)',
    question: 'Interpretation?',
    options: ['Susceptible', 'Intermediate', 'Resistant (MRSA)'],
    answer: 'Resistant (MRSA)',
    explanation: 'MIC ≥4 indicates resistance. This is MRSA—resistant to all β-lactams'
  },
  {
    id: 3,
    organism: 'Klebsiella pneumoniae',
    drug: 'Ceftriaxone',
    mic: 8,
    breakpoint: '≤1 (S), 2 (I), ≥4 (R)',
    question: 'Interpretation? What resistance mechanism might this suggest?',
    options: ['Susceptible', 'Resistant (possible ESBL)', 'Intermediate'],
    answer: 'Resistant (possible ESBL)',
    explanation: 'MIC ≥4 = Resistant. 3rd-gen cephalosporin resistance in Enterobacterales suggests possible ESBL'
  },
  {
    id: 4,
    organism: 'Pseudomonas aeruginosa',
    drug: 'Ciprofloxacin',
    mic: 0.5,
    breakpoint: '≤1 (S), 2 (I), ≥4 (R)',
    question: 'Interpretation?',
    options: ['Susceptible', 'Intermediate', 'Resistant'],
    answer: 'Susceptible',
    explanation: 'MIC 0.5 is ≤1, therefore Susceptible'
  },
  {
    id: 5,
    organism: 'Enterococcus faecalis',
    drug: 'Vancomycin',
    mic: 32,
    breakpoint: '≤4 (S), 8-16 (I), ≥32 (R)',
    question: 'Interpretation? What does this indicate?',
    options: ['Susceptible', 'Intermediate', 'Resistant (VRE)'],
    answer: 'Resistant (VRE)',
    explanation: 'MIC ≥32 = Resistant. This is VRE (vancomycin-resistant Enterococcus)—major infection control concern'
  }
]

export function ASTAnalyzerPage() {
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
        <Link to="/ast" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to AST Module
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">AST Analyzer</h1>
          <p className="text-xl text-muted-foreground">
            Practice interpreting MIC values and breakpoints
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
            <CardTitle>AST Interpretation</CardTitle>
            <CardDescription>Analyze the MIC and breakpoint data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-muted rounded-lg space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Organism</p>
                  <p className="font-medium">{currentCaseData.organism}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Antibiotic</p>
                  <p className="font-medium">{currentCaseData.drug}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">MIC (µg/mL)</p>
                  <p className="font-medium text-lg">{currentCaseData.mic}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Breakpoints (µg/mL)</p>
                  <p className="font-medium text-sm">{currentCaseData.breakpoint}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-3">{currentCaseData.question}</p>
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
