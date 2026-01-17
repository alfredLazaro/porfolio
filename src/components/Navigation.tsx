// ============================================
// src/components/Navigation.tsx - IMPROVED
// ============================================
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = ['About', 'Skills', 'Projects'];

  return (
    <nav 
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(75, 85, 99, 0.3)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              cursor: 'pointer'
            }}
          >
            {personalInfo.name.split(' ')[0]}
          </h1>
          
          {/* Desktop Menu */}
          <div style={{ display: 'none' }} className="md:flex md:gap-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  color: '#d1d5db',
                  fontWeight: '500',
                  padding: '0.5rem 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  textAlign: 'left',
                  width: '100%',
                  color: '#d1d5db',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  padding: '0.5rem 0',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
