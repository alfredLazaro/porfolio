// ============================================
// src/App.tsx - IMPROVED
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
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)',
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