// ============================================
// src/components/About.tsx
// ============================================
import { personalInfo } from '../data/portfolioData';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mb-6 border border-blue-500/30">
            <User className="text-blue-400" size={32} />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-xl">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center">
            {personalInfo.about}
          </p>
        </div>
      </div>
    </section>
  );
}

