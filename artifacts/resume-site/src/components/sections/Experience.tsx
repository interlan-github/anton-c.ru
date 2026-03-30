import { SectionLayout } from "./SectionLayout";
import { experienceData } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <SectionLayout id="experience" title="Experience" subtitle="My professional journey." bgDark>
      <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 py-2 space-y-12">
        {experienceData.map((exp, index) => (
          <div key={exp.id} className="relative pl-8 md:pl-12 group">
            {/* Timeline dot */}
            <div className="absolute -left-[11px] md:-left-[11px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-primary group-hover:scale-125 transition-transform duration-300" />
            
            {/* Content Card */}
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border group-hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-medium mt-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-sm font-semibold text-muted-foreground whitespace-nowrap self-start sm:self-auto">
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-3 mt-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
