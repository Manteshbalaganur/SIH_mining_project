import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navigation from './components/Navigation';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import NewAssessment from './pages/NewAssessment';
import Results from './pages/Results';
import Projects from './pages/Projects';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-slate-50">
          <Navigation />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/new-assessment" element={<NewAssessment />} />
            <Route path="/results/:id" element={<Results />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/reports" element={<Dashboard />} />
            <Route path="/settings" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
