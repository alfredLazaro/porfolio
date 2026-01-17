// ============================================
// src/components/Footer.tsx - IMPROVED
// ============================================
import { personalInfo } from '../data/portfolioData';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{
        padding: '2rem 1rem',
        borderTop: '1px solid #374151',
        backgroundColor: 'rgba(17, 24, 39, 0.5)'
      }}
    >
      <div 
        style={{
          maxWidth: '1152px',
          margin: '0 auto',
          textAlign: 'center',
          color: '#9ca3af'
        }}
      >
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span>&copy; {currentYear} {personalInfo.name}.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            Built with <Heart size={16} style={{ color: '#ef4444' }} /> using React, TypeScript & Vite
          </span>
        </p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
          Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
