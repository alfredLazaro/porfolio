// ============================================
// src/components/Projects.tsx - IMPROVED
// ============================================
import { Github, ExternalLink, Code } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section 
      id="projects"
      style={{
        padding: '4rem 1rem',
        backgroundColor: 'rgba(31, 41, 55, 0.5)'
      }}
    >
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <h3 
          style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            marginBottom: '2.5rem',
            textAlign: 'center',
            color: 'white'
          }}
        >
          Featured Projects
        </h3>
        
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                backgroundColor: '#1f2937',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                border: '1px solid #374151',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#60a5fa';
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#374151';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <Code style={{ color: '#60a5fa', marginRight: '0.5rem' }} size={24} />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white' }}>
                    {project.title}
                  </h4>
                </div>
                
                <p style={{ color: '#d1d5db', marginBottom: '1rem', fontSize: '0.875rem', lineHeight: '1.5' }}>
                  {project.description}
                </p>
                
                {/* Technology Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.25rem 0.75rem',
                        backgroundColor: 'rgba(96, 165, 250, 0.2)',
                        color: '#93c5fd',
                        borderRadius: '9999px',
                        fontSize: '0.75rem'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul style={{ marginBottom: '1rem', padding: 0, listStyle: 'none' }}>
                    {project.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        style={{
                          color: '#9ca3af',
                          fontSize: '0.75rem',
                          marginBottom: '0.25rem',
                          paddingLeft: '1rem',
                          position: 'relative'
                        }}
                      >
                        <span style={{ position: 'absolute', left: 0, color: '#60a5fa' }}>•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* Links */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#d1d5db',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                  >
                    <Github size={16} style={{ marginRight: '0.25rem' }} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#d1d5db',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                  >
                    <ExternalLink size={16} style={{ marginRight: '0.25rem' }} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}