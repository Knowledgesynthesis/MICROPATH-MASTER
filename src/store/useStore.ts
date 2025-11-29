import { create } from 'zustand'

interface AssessmentState {
  currentQuizId: string | null
  currentQuestionIndex: number
  answers: Record<string, string>
  score: number | null
  startQuiz: (quizId: string) => void
  answerQuestion: (questionId: string, answer: string) => void
  nextQuestion: () => void
  previousQuestion: () => void
  finishQuiz: (score: number) => void
  resetQuiz: () => void
}

export const useStore = create<AssessmentState>((set) => ({
  currentQuizId: null,
  currentQuestionIndex: 0,
  answers: {},
  score: null,

  startQuiz: (quizId) => set({
    currentQuizId: quizId,
    currentQuestionIndex: 0,
    answers: {},
    score: null,
  }),

  answerQuestion: (questionId, answer) => set((state) => ({
    answers: { ...state.answers, [questionId]: answer },
  })),

  nextQuestion: () => set((state) => ({
    currentQuestionIndex: state.currentQuestionIndex + 1,
  })),

  previousQuestion: () => set((state) => ({
    currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1),
  })),

  finishQuiz: (score) => set({
    score,
  }),

  resetQuiz: () => set({
    currentQuizId: null,
    currentQuestionIndex: 0,
    answers: {},
    score: null,
  }),
}))
