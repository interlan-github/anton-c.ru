import { SectionLayout } from "./SectionLayout";
import { certificationsData } from "@/lib/data";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  return (
    <SectionLayout id="certifications" title="Certifications" bgDark>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationsData.map((cert) => (
          <div 
            key={cert.id}
            className="flex items-start gap-5 p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
              <Award className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                {cert.name}
              </h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-sm">
                <span className="font-medium text-muted-foreground">{cert.issuer}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="font-medium text-primary">{cert.year}</span>
              </div>
            </div>
            <a 
              href={cert.verifyUrl}
              className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors shrink-0"
              title="Verify Credential"
              onClick={(e) => e.preventDefault()}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
