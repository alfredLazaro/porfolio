// ============================================
// src/components/Hero.tsx - IMPROVED
// ============================================
import { Github, Linkedin, Mail, Twitter, Globe, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section 
      style={{
        paddingTop: '6rem',
        paddingBottom: '3rem',
        padding: '6rem 1rem 3rem 1rem'
      }}
    >
      <div style={{ maxWidth: '1152px', margin: '0 auto', textAlign: 'center' }}>
        <h2 
          style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {personalInfo.name}
        </h2>
        
        <p style={{ fontSize: '1.125rem', color: '#d1d5db', marginBottom: '1.5rem' }}>
          {personalInfo.title}
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#d1d5db', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#d1d5db', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            style={{ color: '#d1d5db', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          {personalInfo.twitter && (
            <a 
              href={personalInfo.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#d1d5db', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
              aria-label="Twitter Profile"
            >
              <Twitter size={24} />
            </a>
          )}
          {personalInfo.website && (
            <a 
              href={personalInfo.website} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#d1d5db', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
              aria-label="Personal Website"
            >
              <Globe size={24} />
            </a>
          )}
          {personalInfo.resume && (
            <a 
              href={personalInfo.resume} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#d1d5db', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
              aria-label="Download Resume"
            >
              <FileText size={24} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}