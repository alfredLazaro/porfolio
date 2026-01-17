// ============================================
// src/components/Projects.tsx
// ============================================
import { Github, ExternalLink, Code, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30 group-hover:scale-110 transition-transform">
                    <Code className="text-blue-400" size={24} />
                  </div>
                  {project.highlights && project.highlights.length > 0 && (
                    <Sparkles className="text-purple-400 opacity-50" size={20} />
                  )}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Highlights (if available) */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="mb-6 space-y-2 border-t border-gray-700/50 pt-4">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-400 text-xs flex items-start gap-2 group/item">
                        <span className="text-blue-400 mt-1 font-bold">▸</span>
                        <span className="flex-1 group-hover/item:text-gray-300 transition-colors">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* Links */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-700/50">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all border border-gray-700/50 hover:border-blue-500/50 flex-1 justify-center group/link"
                  >
                    <Github size={18} className="group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg text-gray-300 hover:text-blue-400 hover:from-blue-500/30 hover:to-purple-500/30 transition-all border border-blue-500/30 hover:border-blue-500/50 flex-1 justify-center group/link"
                  >
                    <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Demo</span>
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