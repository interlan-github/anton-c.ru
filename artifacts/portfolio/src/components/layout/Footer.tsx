import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-display font-bold text-xl tracking-tight">
            Alex<span className="text-primary">Petrov</span>
          </span>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Senior System Administrator & DevOps Engineer
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/alex-petrov-ops" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/alex-petrov-devops" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <Linkedin size={18} />
          </a>
          <a href="mailto:alex.petrov@email.com" className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <Mail size={18} />
          </a>
        </div>

        <div className="text-sm text-muted-foreground text-center md:text-right">
          &copy; {currentYear} Alex Petrov. <br className="md:hidden" />All rights reserved.
        </div>

      </div>
    </footer>
  );
}
