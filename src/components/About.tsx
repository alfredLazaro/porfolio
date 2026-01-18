// ============================================
// src/components/About.tsx - IMPROVED
// ============================================
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section 
      id="about"
      style={{
        padding: '3rem 1rem',
        backgroundColor: 'rgba(31, 41, 55, 0.5)'
      }}
    >
      <div style={{ maxWidth: '896px', margin: '0 auto', textAlign: 'center' }}>
        <p 
          style={{
            color: '#d1d5db',
            fontSize: '1rem',
            lineHeight: '1.75',
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          {personalInfo.about}
        </p>
      </div>
    </section>
  );
}