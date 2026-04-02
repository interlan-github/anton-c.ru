import { SectionLayout } from "./SectionLayout";
import { personalInfo } from "@/lib/data";

export function About() {
  return (
    <SectionLayout id="about" title="О себе" subtitle="Профессиональный опыт и ключевые компетенции.">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        <div className="lg:col-span-2">
          <div className="prose prose-lg text-muted-foreground prose-p:leading-relaxed max-w-none">
            <p className="text-lg text-foreground font-medium mb-4">
              Я — преданный своему делу специалист в области проектирования отказоустойчивых и высокодоступных систем.
            </p>
            <p>
              {personalInfo.bio}
            </p>
            <p>
              На протяжении всей своей карьеры я успешно совмещал разработку и эксплуатацию. Используя концепцию «инфраструктура как код» и внедряя надежные методы CI/CD, я помогаю командам выпускать код быстрее, безопаснее и увереннее. Я верю в силу автоматизации, способной устранить ручную работу, позволяя инженерным командам сосредоточиться на решении реальных бизнес-задач.
            </p>
            <p>
              В свободное от настройки кластеров и написания скриптов автоматизации время я с удовольствием изучаю новые облачные технологии, вношу вклад в разработку инструментов с открытым исходным кодом и делюсь знаниями с сообществом.
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
