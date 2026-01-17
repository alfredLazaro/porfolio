// ============================================
// src/App.tsx - Enhanced version with better styles
// ============================================
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #111827, #1f2937, #111827)',
        color: 'white'
      }}
    >
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}