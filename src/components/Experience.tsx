// ============================================
// src/components/Experience.tsx (Optional)
// ============================================
import { workExperience } from '../data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  // Only render if there's work experience data
  if (!workExperience || workExperience.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block"></div>
          
          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <div 
                key={index} 
                className="relative md:pl-24 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 z-10 hidden md:block group-hover:scale-125 transition-transform"></div>
                
                <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                        <Briefcase className="text-blue-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                          {job.position}
                        </h4>
                        <p className="text-blue-400 font-semibold text-lg">{job.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base bg-gray-900/50 px-4 py-2 rounded-full border border-gray-700/50 w-fit">
                      <Calendar size={16} className="text-purple-400" />
                      <span>{job.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-base">{job.description}</p>
                  
                  {job.achievements && job.achievements.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-gray-700/50">
                      <h5 className="text-gray-400 font-semibold text-sm uppercase tracking-wide">Key Achievements</h5>
                      <ul className="space-y-3">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start gap-3 group/item">
                            <span className="text-blue-400 mt-1.5 font-bold">▸</span>
                            <span className="flex-1 leading-relaxed group-hover/item:text-gray-200 transition-colors">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
