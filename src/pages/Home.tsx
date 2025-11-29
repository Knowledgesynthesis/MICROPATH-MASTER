import { ModuleCard } from '@/components/ModuleCard'
import {
  Microscope,
  FlaskConical,
  Dna,
  Bug,
  Pill,
  AlertCircle,
  Stethoscope,
  TestTube,
  Droplet,
  Zap,
  Shield,
  Activity
} from 'lucide-react'

export function HomePage() {
  const modules = [
    {
      title: 'Foundations',
      description: 'Lab workflow, biosafety, media types, and quality control basics',
      icon: <Microscope className="h-6 w-6" />,
      route: '/foundations'
    },
    {
      title: 'Gram Stains',
      description: 'Pattern recognition, morphology, and staining interpretation',
      icon: <Droplet className="h-6 w-6" />,
      route: '/gram'
    },
    {
      title: 'Plates & Media',
      description: 'Colony recognition, media selection, and growth patterns',
      icon: <FlaskConical className="h-6 w-6" />,
      route: '/plates'
    },
    {
      title: 'Bacteriology',
      description: 'Identification pathways for Staph, Strep, Enterobacterales, and more',
      icon: <Shield className="h-6 w-6" />,
      route: '/bacteria'
    },
    {
      title: 'Mycobacteriology',
      description: 'AFB stains, culture processes, and drug resistance testing',
      icon: <TestTube className="h-6 w-6" />,
      route: '/mycobacteriology'
    },
    {
      title: 'Mycology',
      description: 'Yeasts, molds, dimorphic fungi, and fungal culture patterns',
      icon: <Bug className="h-6 w-6" />,
      route: '/mycology'
    },
    {
      title: 'Parasitology',
      description: 'Ova & parasites, Giardia, malaria, and microscopic identification',
      icon: <Activity className="h-6 w-6" />,
      route: '/parasitology'
    },
    {
      title: 'Virology',
      description: 'PCR/NAAT detection, respiratory panels, and viral load concepts',
      icon: <Zap className="h-6 w-6" />,
      route: '/virology'
    },
    {
      title: 'Molecular Diagnostics',
      description: 'PCR, multiplex panels, genotypic resistance, and stewardship',
      icon: <Dna className="h-6 w-6" />,
      route: '/molecular'
    },
    {
      title: 'AST',
      description: 'MIC, zone sizes, breakpoints, and resistance mechanisms',
      icon: <Pill className="h-6 w-6" />,
      route: '/ast'
    },
    {
      title: 'Infection Control',
      description: 'Isolation precautions, outbreak recognition, and stewardship',
      icon: <AlertCircle className="h-6 w-6" />,
      route: '/infection-control'
    },
    {
      title: 'Case Sign-Out',
      description: 'Integrated case workflows from specimen to report',
      icon: <Stethoscope className="h-6 w-6" />,
      route: '/cases'
    }
  ]

  return (
    <div className="container px-4 py-8 md:py-12 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            MicroPath Master
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From specimen to report — Learn clinical microbiology the way pathology residents learn it
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Educational purposes only. Not for clinical use or patient care.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard
              key={module.route}
              title={module.title}
              description={module.description}
              icon={module.icon}
              route={module.route}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
