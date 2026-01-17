// ============================================
// src/components/Skills.tsx - IMPROVED
// ============================================
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '3rem 1rem' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <h3 
          style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            textAlign: 'center',
            color: 'white'
          }}
        >
          Skills & Technologies
        </h3>
        
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {skills.map((skillSet) => (
            <div
              key={skillSet.category}
              style={{
                backgroundColor: '#1f2937',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #374151',
                transition: 'border-color 0.3s, transform 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#60a5fa';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#374151';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h4 
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#60a5fa'
                }}
              >
                {skillSet.category}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {skillSet.items.map((skill) => (
                  <li 
                    key={skill}
                    style={{
                      color: '#d1d5db',
                      fontSize: '0.875rem',
                      marginBottom: '0.5rem',
                      paddingLeft: '1rem',
                      position: 'relative'
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#60a5fa'
                    }}>•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}