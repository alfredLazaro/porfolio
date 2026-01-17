// ============================================
// src/components/Hero.tsx
// ============================================
import { Github, Linkedin, Mail, Twitter, Globe, FileText, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 px-4 min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light">
            {personalInfo.title}
          </p>
        </div>
        
        <div className="flex justify-center items-center gap-6 flex-wrap mb-12">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
            aria-label="GitHub Profile"
          >
            <Github size={22} className="text-gray-300 hover:text-blue-400 transition-colors" />
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={22} className="text-gray-300 hover:text-blue-400 transition-colors" />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
            aria-label="Email"
          >
            <Mail size={22} className="text-gray-300 hover:text-blue-400 transition-colors" />
          </a>
          {personalInfo.twitter && (
            <a 
              href={personalInfo.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="Twitter Profile"
            >
              <Twitter size={22} className="text-gray-300 hover:text-blue-400 transition-colors" />
            </a>
          )}
          {personalInfo.website && (
            <a 
              href={personalInfo.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="Personal Website"
            >
              <Globe size={22} className="text-gray-300 hover:text-blue-400 transition-colors" />
            </a>
          )}
          {personalInfo.resume && (
            <a 
              href={personalInfo.resume} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="Download Resume"
            >
              <FileText size={22} className="text-gray-300 hover:text-blue-400 transition-colors" />
            </a>
          )}
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="mt-8 animate-bounce text-gray-400 hover:text-blue-400 transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
}
