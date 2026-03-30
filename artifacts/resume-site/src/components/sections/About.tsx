import { SectionLayout } from "./SectionLayout";
import { personalInfo } from "@/lib/data";

export function About() {
  return (
    <SectionLayout id="about" title="About Me" subtitle="Professional background and key competencies.">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        <div className="lg:col-span-2">
          <div className="prose prose-lg text-muted-foreground prose-p:leading-relaxed max-w-none">
            <p className="text-lg text-foreground font-medium mb-4">
              I am a dedicated {personalInfo.title} with a passion for designing resilient, highly-available systems.
            </p>
            <p>
              {personalInfo.bio}
            </p>
            <p>
              Throughout my career, I've bridged the gap between development and operations. By leveraging infrastructure as code and implementing robust CI/CD practices, I help teams ship code faster, safer, and with more confidence. I believe in the power of automation to eliminate manual toil, allowing engineering teams to focus on solving real business problems.
            </p>
            <p>
              When I'm not configuring clusters or writing automation scripts, I enjoy exploring new cloud-native technologies, contributing to open-source tools, and sharing knowledge with the community.
            </p>
          </div>
        </div>

        <div className="bg-card border border-border shadow-lg shadow-black/5 rounded-2xl p-6 lg:p-8">
          <h3 className="text-xl font-bold font-display text-foreground mb-6">Core Competencies</h3>
          <div className="flex flex-wrap gap-2.5">
            {personalInfo.competencies.map((skill) => (
              <span 
                key={skill}
                className="px-3.5 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-semibold border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </SectionLayout>
  );
}
