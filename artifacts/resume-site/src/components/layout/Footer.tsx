import { personalInfo } from "@/lib/data";
import { Download } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-white text-xl mb-1">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-slate-400">{personalInfo.title}</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-primary transition-colors text-sm font-semibold flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume (PDF)
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
