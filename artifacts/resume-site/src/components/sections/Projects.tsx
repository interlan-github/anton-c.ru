import { SectionLayout } from "./SectionLayout";
import { projectsData } from "@/lib/data";
import { FolderGit2, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <SectionLayout id="projects" title="Реализованные проекты" subtitle="Несколько свежих реализованных проектов.">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FolderGit2 className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm font-semibold text-primary mb-4">
                Role: {project.role}
              </p>
              
              <p className="text-muted-foreground text-sm mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="space-y-3 mt-auto pt-6 border-t border-border/50">
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase">Tech Stack</span>
                  <p className="text-sm text-foreground font-medium mt-1">{project.technologies}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase">Outcome</span>
                  <p className="text-sm text-emerald-600 font-semibold mt-1">{project.outcome}</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-secondary/50 border-t border-border flex justify-end">
              <a 
                href={project.link}
                className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1.5"
                onClick={(e) => { e.preventDefault(); /* Mock link */ }}
              >
                View Details <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
