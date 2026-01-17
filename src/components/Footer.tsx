// ============================================
// src/components/Footer.tsx
// ============================================
import { personalInfo } from '../data/portfolioData';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-gray-800/50 bg-gray-900/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 flex items-center justify-center gap-2">
          <span>&copy; {currentYear} {personalInfo.name}. Built with</span>
          <Heart className="text-red-500 fill-red-500" size={16} />
          <span>using React, TypeScript & Vite.</span>
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Designed with attention to detail
        </p>
      </div>
    </footer>
  );
}