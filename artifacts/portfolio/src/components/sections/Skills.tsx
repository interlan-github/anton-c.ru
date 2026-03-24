import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

type SkillLevel = "Expert" | "Advanced" | "Intermediate";

interface SkillItem {
  name: string;
  level: SkillLevel;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Operating Systems",
    skills: [
      { name: "Linux (RHEL/Ubuntu)", level: "Expert" },
      { name: "Windows Server", level: "Advanced" },
      { name: "FreeBSD", level: "Intermediate" }
    ]
  },
  {
    title: "Cloud & Virtualization",
    skills: [
      { name: "AWS", level: "Expert" },
      { name: "VMware vSphere", level: "Expert" },
      { name: "KVM/QEMU", level: "Advanced" },
      { name: "Azure", level: "Intermediate" }
    ]
  },
  {
    title: "Containers & Orchestration",
    skills: [
      { name: "Docker", level: "Expert" },
      { name: "Kubernetes", level: "Expert" },
      { name: "Helm", level: "Advanced" },
      { name: "ArgoCD", level: "Advanced" }
    ]
  },
  {
    title: "CI/CD & Automation",
    skills: [
      { name: "Ansible", level: "Expert" },
      { name: "Terraform", level: "Expert" },
      { name: "GitHub Actions", level: "Expert" },
      { name: "GitLab CI", level: "Expert" },
      { name: "Jenkins", level: "Advanced" }
    ]
  },
  {
    title: "Monitoring & Observability",
    skills: [
      { name: "Prometheus", level: "Expert" },
      { name: "Grafana", level: "Expert" },
      { name: "Zabbix", level: "Expert" },
      { name: "ELK Stack", level: "Advanced" },
      { name: "Datadog", level: "Intermediate" }
    ]
  },
  {
    title: "Scripting & Databases",
    skills: [
      { name: "Bash/Shell", level: "Expert" },
      { name: "Python", level: "Advanced" },
      { name: "PowerShell", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL/MariaDB", level: "Advanced" }
    ]
  }
];

// Helper to calculate percentage for the bar
const getLevelPercentage = (level: SkillLevel) => {
  switch (level) {
    case "Expert": return 95;
    case "Advanced": return 80;
    case "Intermediate": return 60;
    default: return 50;
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Tools and technologies I use to build and maintain infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 pb-4 border-b border-border/50">
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, idx) => {
                  const percentage = getLevelPercentage(skill.level);
                  return (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-medium text-sm text-foreground/90 group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">
                          {skill.level}
                        </span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full relative"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                        >
                          <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 blur-[2px]"></div>
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Networking summary at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-background border border-border p-6 rounded-2xl text-center"
        >
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-3">Additional Competencies</p>
          <p className="text-foreground">
            TCP/IP &bull; DNS &bull; DHCP &bull; VPN (OpenVPN/WireGuard) &bull; Nginx/HAProxy &bull; Firewall Management &bull; Security Hardening
          </p>
        </motion.div>

      </div>
    </section>
  );
}
