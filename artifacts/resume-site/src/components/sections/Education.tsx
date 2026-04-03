import { SectionLayout } from "./SectionLayout";
import { educationData } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <SectionLayout id="education" title="Образование">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu) => (
          <div 
            key={edu.id} 
            className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border flex items-start gap-4 hover:shadow-md transition-all hover:border-primary/30"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
              <p className="text-muted-foreground mt-1 font-medium">{edu.institution}</p>
              <p className="text-sm text-primary mt-2 font-semibold">Завершено: {edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
