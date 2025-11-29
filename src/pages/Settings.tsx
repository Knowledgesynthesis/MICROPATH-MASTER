import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useTheme } from '@/lib/theme'
import { Sun, Moon } from 'lucide-react'

export function SettingsPage() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="container px-4 py-8 md:py-12 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <div className="space-y-6">
          {/* Theme Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize how MicroPath Master looks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Theme</p>
                  <p className="text-sm text-muted-foreground">
                    Choose your preferred color scheme
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={theme === 'light' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setTheme('light')}
                  >
                    <Sun className="h-4 w-4 mr-2" />
                    Light
                  </Button>
                  <Button
                    variant={theme === 'dark' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setTheme('dark')}
                  >
                    <Moon className="h-4 w-4 mr-2" />
                    Dark
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle>About MicroPath Master</CardTitle>
              <CardDescription>
                Learn more about this educational platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Mission</h3>
                <p className="text-sm text-muted-foreground">
                  MicroPath Master is a comprehensive educational platform designed to teach clinical
                  microbiology to pathology residents, microbiology fellows, ID fellows, and medical
                  students on microbiology rotations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Features</h3>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Comprehensive coverage of bacteriology, virology, mycology, and parasitology</li>
                  <li>Interactive learning tools for plate reading and Gram stain interpretation</li>
                  <li>Case-based workflows from specimen to report</li>
                  <li>Antimicrobial susceptibility testing (AST) education</li>
                  <li>Molecular diagnostics and infection control concepts</li>
                  <li>Mobile-first design with offline capability</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Version</h3>
                <p className="text-sm text-muted-foreground">1.0.0</p>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimers */}
          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="text-destructive">Important Disclaimers</CardTitle>
              <CardDescription>
                Please read carefully before using this application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Educational Use Only</h3>
                <p className="text-sm text-muted-foreground">
                  This application is designed strictly for educational purposes. It is NOT intended
                  for clinical use, patient care, or diagnostic decision-making.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">No Patient Data</h3>
                <p className="text-sm text-muted-foreground">
                  All cases, organisms, and scenarios presented in this app are synthetic and for
                  educational demonstration only. No real patient data is used or should be entered.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">No Medical Advice</h3>
                <p className="text-sm text-muted-foreground">
                  This application does not provide medical advice. Always consult appropriate clinical
                  guidelines, experienced colleagues, and validated resources for patient care decisions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Session-Only Data</h3>
                <p className="text-sm text-muted-foreground">
                  Assessment scores and quiz results are stored only for the current session and are
                  not tracked or saved permanently.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Accuracy</h3>
                <p className="text-sm text-muted-foreground">
                  While every effort has been made to ensure accuracy, microbiology guidelines and
                  practices evolve. Always verify information with current CLSI guidelines, CAP
                  recommendations, and institutional protocols.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
