export interface Module {
  id: string
  title: string
  description: string
  icon: string
  route: string
  sections?: Section[]
}

export interface Section {
  id: string
  title: string
  content: string
  subsections?: Subsection[]
}

export interface Subsection {
  id: string
  title: string
  content: string
  visualAid?: VisualAid
}

export interface VisualAid {
  type: 'diagram' | 'table' | 'flowchart' | 'image'
  data: any
}

export interface Organism {
  id: string
  name: string
  gram: string
  keyFeatures: string[]
  notes: string
  morphology?: string
  hemolysis?: string
  media?: string[]
}

export interface Case {
  id: string
  specimen: string
  gram: string
  plate: string
  ast?: Record<string, string>
  question: string
  options: string[]
  correctOption: string
  rationale: string
}

export interface ASTCase {
  id: string
  organism: string
  mic?: Record<string, number>
  zones?: Record<string, number>
  pattern: string
  interpretation: string
}

export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: string
  explanation: string
  category: string
}

export interface Quiz {
  id: string
  title: string
  description: string
  questions: Question[]
  moduleId: string
}

export interface InteractiveTool {
  id: string
  name: string
  description: string
  type: 'plate-reader' | 'gram-stain' | 'ast-analyzer' | 'contamination-sorter' | 'molecular-decider' | 'report-builder'
  route: string
}
