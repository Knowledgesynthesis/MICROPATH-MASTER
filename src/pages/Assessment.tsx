import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useStore } from '@/store/useStore'

const quizQuestions = [
  {
    id: 'q1',
    question: 'Which test differentiates Staphylococcus aureus from coagulase-negative Staph?',
    options: ['Catalase test', 'Coagulase test', 'Oxidase test', 'Urease test'],
    correctAnswer: 'Coagulase test',
    explanation: 'The coagulase test is the key differentiator: S. aureus is coagulase-positive, while CoNS are coagulase-negative.',
    category: 'Bacteriology'
  },
  {
    id: 'q2',
    question: 'A urine culture grows pink colonies on MacConkey agar. This indicates:',
    options: ['Lactose fermenter', 'Non-lactose fermenter', 'Gram-positive organism', 'Fungal growth'],
    correctAnswer: 'Lactose fermenter',
    explanation: 'Pink/red colonies on MacConkey indicate lactose fermentation. Common examples: E. coli, Klebsiella.',
    category: 'Media & Culture'
  },
  {
    id: 'q3',
    question: 'Which stain is used for Mycobacterium tuberculosis?',
    options: ['Gram stain', 'Acid-fast stain', 'India ink', 'KOH prep'],
    correctAnswer: 'Acid-fast stain',
    explanation: 'Acid-fast bacilli (AFB) stain (Ziehl-Neelsen or auramine-rhodamine) is used for mycobacteria due to their waxy cell wall.',
    category: 'Mycobacteriology'
  },
  {
    id: 'q4',
    question: 'MRSA is resistant to which class of antibiotics?',
    options: ['Fluoroquinolones', 'β-lactams', 'Aminoglycosides', 'Macrolides'],
    correctAnswer: 'β-lactams',
    explanation: 'MRSA (mecA gene) is resistant to all β-lactam antibiotics including methicillin, nafcillin, and cephalosporins.',
    category: 'AST'
  },
  {
    id: 'q5',
    question: 'What is the primary method for diagnosing most viral infections in modern laboratories?',
    options: ['Viral culture', 'Serology', 'NAAT/PCR', 'Antigen detection'],
    correctAnswer: 'NAAT/PCR',
    explanation: 'Nucleic acid amplification tests (NAAT/PCR) have become the gold standard for most viral diagnoses due to high sensitivity and rapid results.',
    category: 'Virology'
  },
  {
    id: 'q6',
    question: 'Which organism causes "valley fever" in the southwestern United States?',
    options: ['Histoplasma capsulatum', 'Blastomyces dermatitidis', 'Coccidioides immitis', 'Aspergillus fumigatus'],
    correctAnswer: 'Coccidioides immitis',
    explanation: 'Coccidioides immitis/posadasii causes valley fever, endemic to Arizona and California. Highly infectious in the lab.',
    category: 'Mycology'
  },
  {
    id: 'q7',
    question: 'Broad, ribbon-like, non-septate hyphae suggest which organism?',
    options: ['Aspergillus', 'Candida', 'Mucorales (Mucor/Rhizopus)', 'Dermatophytes'],
    correctAnswer: 'Mucorales (Mucor/Rhizopus)',
    explanation: 'Mucorales have broad, non-septate hyphae with right-angle branching. Causes mucormycosis, especially in DKA and immunocompromised patients.',
    category: 'Mycology'
  },
  {
    id: 'q8',
    question: 'Green pigment and grape-like odor on culture suggest:',
    options: ['E. coli', 'Klebsiella pneumoniae', 'Pseudomonas aeruginosa', 'Proteus mirabilis'],
    correctAnswer: 'Pseudomonas aeruginosa',
    explanation: 'Pyocyanin (green pigment), metallic sheen, and grape odor are characteristic of Pseudomonas aeruginosa.',
    category: 'Bacteriology'
  },
  {
    id: 'q9',
    question: 'Which organism is intrinsically resistant to cephalosporins?',
    options: ['Staphylococcus aureus', 'Escherichia coli', 'Enterococcus', 'Streptococcus pneumoniae'],
    correctAnswer: 'Enterococcus',
    explanation: 'Enterococcus is intrinsically resistant to cephalosporins. This should not be reported on AST results.',
    category: 'AST'
  },
  {
    id: 'q10',
    question: 'Coagulase-negative Staph in 1 of 2 blood culture sets most likely represents:',
    options: ['True bacteremia', 'Skin contamination', 'Endocarditis', 'Osteomyelitis'],
    correctAnswer: 'Skin contamination',
    explanation: 'Single positive blood culture with CoNS (common skin flora) is usually contamination from venipuncture. Multiple positive sets increase likelihood of true infection.',
    category: 'Infection Control'
  }
]

export function AssessmentPage() {
  const { answers, answerQuestion, score, finishQuiz, resetQuiz } = useStore()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)

  const currentQuestion = quizQuestions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1

  const handleStartQuiz = () => {
    resetQuiz()
    setQuizStarted(true)
    setShowResults(false)
    setCurrentQuestionIndex(0)
  }

  const handleAnswer = (answer: string) => {
    answerQuestion(currentQuestion.id, answer)
  }

  const handleNext = () => {
    if (isLastQuestion) {
      // Calculate score
      const correctAnswers = quizQuestions.filter(
        (q) => answers[q.id] === q.correctAnswer
      ).length
      finishQuiz(correctAnswers)
      setShowResults(true)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  if (!quizStarted) {
    return (
      <div className="container px-4 py-8 md:py-12 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Assessment</h1>
            <p className="text-xl text-muted-foreground">
              Test your knowledge of clinical microbiology
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Ready to begin?</CardTitle>
              <CardDescription>
                This assessment contains {quizQuestions.length} questions covering all major topics in clinical microbiology.
                Your score will be shown at the end but not saved.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div className="p-3 bg-muted rounded-lg">
                  <div className="font-semibold">Questions</div>
                  <div className="text-muted-foreground">{quizQuestions.length} total</div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="font-semibold">Format</div>
                  <div className="text-muted-foreground">Multiple choice</div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="font-semibold">Time</div>
                  <div className="text-muted-foreground">Untimed</div>
                </div>
              </div>

              <Button onClick={handleStartQuiz} className="w-full" size="lg">
                Start Assessment
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Note: Results are session-only and will not be saved
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (showResults) {
    const percentage = Math.round((score! / quizQuestions.length) * 100)
    const passed = percentage >= 70

    return (
      <div className="container px-4 py-8 md:py-12 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Assessment Complete</CardTitle>
              <CardDescription>Here are your results for this session</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center py-8">
                <div className="text-6xl font-bold mb-2">{percentage}%</div>
                <div className="text-xl text-muted-foreground">
                  {score} out of {quizQuestions.length} correct
                </div>
                {passed ? (
                  <div className="mt-4 p-4 bg-green-500/10 border border-green-500/50 rounded-lg">
                    <p className="text-green-600 dark:text-green-400 font-semibold">
                      Great job! You passed the assessment.
                    </p>
                  </div>
                ) : (
                  <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/50 rounded-lg">
                    <p className="text-yellow-600 dark:text-yellow-400 font-semibold">
                      Keep studying! Review the modules and try again.
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Review Your Answers:</h3>
                {quizQuestions.map((q, index) => {
                  const userAnswer = answers[q.id]
                  const isCorrect = userAnswer === q.correctAnswer
                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-lg border ${
                        isCorrect
                          ? 'border-green-500/50 bg-green-500/10'
                          : 'border-destructive/50 bg-destructive/10'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="font-medium">Question {index + 1}</div>
                        <div
                          className={`text-sm font-semibold ${
                            isCorrect ? 'text-green-600 dark:text-green-400' : 'text-destructive'
                          }`}
                        >
                          {isCorrect ? 'Correct' : 'Incorrect'}
                        </div>
                      </div>
                      <p className="text-sm mb-2">{q.question}</p>
                      {!isCorrect && (
                        <div className="text-sm space-y-1">
                          <p>
                            <span className="text-muted-foreground">Your answer:</span>{' '}
                            <span className="text-destructive">{userAnswer}</span>
                          </p>
                          <p>
                            <span className="text-muted-foreground">Correct answer:</span>{' '}
                            <span className="text-green-600 dark:text-green-400">{q.correctAnswer}</span>
                          </p>
                        </div>
                      )}
                      <p className="text-sm text-muted-foreground mt-2">{q.explanation}</p>
                    </div>
                  )
                })}
              </div>

              <div className="flex gap-3">
                <Button onClick={handleStartQuiz} className="flex-1">
                  Retake Assessment
                </Button>
                <Button variant="outline" onClick={() => (window.location.href = '/')} className="flex-1">
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const selectedAnswer = answers[currentQuestion.id]

  return (
    <div className="container px-4 py-8 md:py-12 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm text-muted-foreground">{currentQuestion.category}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    selectedAnswer === option
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <span className="text-sm">{option}</span>
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="flex-1"
              >
                Previous
              </Button>
              <Button onClick={handleNext} disabled={!selectedAnswer} className="flex-1">
                {isLastQuestion ? 'Finish' : 'Next'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
