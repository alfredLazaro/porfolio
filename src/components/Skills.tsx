// ============================================
// src/components/Skills.tsx - COMPACT FLOATING ICONS
// ============================================
import { skills } from '../data/portfolioData';

export default function Skills() {
  // Flatten all skills into a single array
  const allSkills = skills.flatMap(skillSet => skillSet.items);

  return (
    <section id="skills" style={{ padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <h3 
          style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            textAlign: 'center',
            color: '#d1d5db'
          }}
        >
          Tech Stack
        </h3>
        
        {/* Floating skill badges in a single row */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          {allSkills.map((skill) => (
            <span
              key={skill}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                border: '1px solid #374151',
                borderRadius: '9999px',
                color: '#d1d5db',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.3s',
                cursor: 'default',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
                e.currentTarget.style.borderColor = '#60a5fa';
                e.currentTarget.style.color = '#93c5fd';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(96, 165, 250, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
                e.currentTarget.style.borderColor = '#374151';
                e.currentTarget.style.color = '#d1d5db';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}