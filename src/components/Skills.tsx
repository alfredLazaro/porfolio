// ============================================
// src/components/Skills.tsx
// ============================================
import { skills } from '../data/portfolioData';
import { Code, Database, Server, Wrench } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

const categoryIcons: Record<string, LucideIcon> = {
  'Frontend': Code,
  'Backend': Server,
  'Database': Database,
  'Tools & DevOps': Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillSet) => {
            const IconComponent = categoryIcons[skillSet.category] || Code;
            return (
              <div 
                key={skillSet.category} 
                className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30 group-hover:scale-110 transition-transform">
                    <IconComponent className="text-blue-400" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {skillSet.category}
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {skillSet.items.map((skill) => (
                    <li key={skill} className="text-gray-300 text-sm flex items-center gap-2 group/item">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover/item:bg-purple-400 transition-colors"></span>
                      <span className="group-hover/item:text-gray-200 transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}