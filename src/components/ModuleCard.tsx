import { Link } from 'react-router-dom'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ChevronRight } from 'lucide-react'

interface ModuleCardProps {
  title: string
  description: string
  icon: React.ReactNode
  route: string
}

export function ModuleCard({ title, description, icon, route }: ModuleCardProps) {
  return (
    <Link to={route} className="block group">
      <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {icon}
              </div>
              <CardTitle className="text-xl">{title}</CardTitle>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <CardDescription className="mt-2">{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
