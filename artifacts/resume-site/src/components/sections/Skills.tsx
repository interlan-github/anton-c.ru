import { SectionLayout } from "./SectionLayout";
import { skillsData } from "@/lib/data";

const levelToPercent = (level: string) => {
  switch(level.toLowerCase()) {
    case 'advanced': return '90%';
    case 'intermediate': return '65%';
    case 'basic': return '40%';
    default: return '50%';
  }
};

export function Skills() {
  return (
    <SectionLayout id="skills" title="Хард-скилы" subtitle="Технологии и инструменты с которыми я работаю каждый день." bgDark>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {skillsData.map((category, idx) => (
          <div key={idx} className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h3 className="text-lg font-bold font-display text-foreground mb-6 border-b border-border pb-3">
              {category.category}
            </h3>
            <div className="space-y-5">
              {category.items.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-medium text-foreground text-sm">{skill.name}</span>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{skill.level}</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full relative" 
                      style={{ width: levelToPercent(skill.level) }}
                    >
                      <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
