import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/lib/theme'
import { Header } from '@/components/Layout/Header'
import { Footer } from '@/components/Layout/Footer'

// Pages
import { HomePage } from '@/pages/Home'
import { FoundationsPage } from '@/pages/modules/Foundations'
import { GramStainsPage } from '@/pages/modules/GramStains'
import { PlatesPage } from '@/pages/modules/Plates'
import { BacteriologyPage } from '@/pages/modules/Bacteriology'
import { MycobacteriologyPage } from '@/pages/modules/Mycobacteriology'
import { MycologyPage } from '@/pages/modules/Mycology'
import { ParasitologyPage } from '@/pages/modules/Parasitology'
import { VirologyPage } from '@/pages/modules/Virology'
import { MolecularPage } from '@/pages/modules/Molecular'
import { ASTPage } from '@/pages/modules/AST'
import { InfectionControlPage } from '@/pages/modules/InfectionControl'
import { CasesPage } from '@/pages/modules/Cases'
import { AssessmentPage } from '@/pages/Assessment'
import { SettingsPage } from '@/pages/Settings'

// Interactive Tools
import { PlateReaderPage } from '@/pages/tools/PlateReader'
import { GramStainInterpreterPage } from '@/pages/tools/GramStainInterpreter'
import { ASTAnalyzerPage } from '@/pages/tools/ASTAnalyzer'
import { ContaminationSorterPage } from '@/pages/tools/ContaminationSorter'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />

              {/* Module Routes */}
              <Route path="/foundations" element={<FoundationsPage />} />
              <Route path="/gram" element={<GramStainsPage />} />
              <Route path="/plates" element={<PlatesPage />} />
              <Route path="/bacteria" element={<BacteriologyPage />} />
              <Route path="/mycobacteriology" element={<MycobacteriologyPage />} />
              <Route path="/mycology" element={<MycologyPage />} />
              <Route path="/parasitology" element={<ParasitologyPage />} />
              <Route path="/virology" element={<VirologyPage />} />
              <Route path="/molecular" element={<MolecularPage />} />
              <Route path="/ast" element={<ASTPage />} />
              <Route path="/infection-control" element={<InfectionControlPage />} />
              <Route path="/cases" element={<CasesPage />} />

              {/* Interactive Tools */}
              <Route path="/tools/plate-reader" element={<PlateReaderPage />} />
              <Route path="/tools/gram-interpreter" element={<GramStainInterpreterPage />} />
              <Route path="/tools/ast-analyzer" element={<ASTAnalyzerPage />} />
              <Route path="/tools/contamination-sorter" element={<ContaminationSorterPage />} />

              {/* Assessment & Settings */}
              <Route path="/assessment" element={<AssessmentPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
