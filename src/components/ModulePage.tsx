import { ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

interface Section {
  title: string
  content: ReactNode
}

interface ModulePageProps {
  title: string
  description: string
  sections: Section[]
  relatedTools?: { title: string; route: string }[]
}

export function ModulePage({ title, description, sections, relatedTools }: ModulePageProps) {
  return (
    <div className="container px-4 py-8 md:py-12 md:px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground">{description}</p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                {section.content}
              </CardContent>
            </Card>
          ))}

          {relatedTools && relatedTools.length > 0 && (
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle>Interactive Tools</CardTitle>
                <CardDescription>
                  Practice what you've learned with these interactive exercises
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {relatedTools.map((tool, index) => (
                    <Link key={index} to={tool.route}>
                      <Button variant="outline">{tool.title}</Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
