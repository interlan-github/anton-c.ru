import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ChevronDown, Briefcase, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    id: "job-1",
    role: "Senior DevOps Engineer",
    company: "TechScale GmbH",
    location: "Berlin, Germany",
    period: "2020 – Present",
    bullets: [
      "Architected and maintained Kubernetes clusters serving 50M+ requests/day across multiple AZs.",
      "Reduced deployment time by 75% through GitOps pipelines utilizing ArgoCD and GitHub Actions.",
      "Implemented comprehensive Prometheus/Grafana monitoring suite, achieving 99.99% uptime SLA.",
      "Successfully migrated 30+ microservices from legacy monolith to cloud-native AWS infrastructure.",
      "Drove cost optimization initiatives, reducing cloud spend by €120K/year through rightsizing and Spot Instances.",
      "Led and mentored a team of 4 DevOps engineers, conducting weekly code reviews and architecture planning.",
      "Built and tested disaster recovery plan, achieving RTO < 15min and RPO < 1hr."
    ],
    tags: ["Kubernetes", "AWS", "ArgoCD", "Terraform", "Prometheus"]
  },
  {
    id: "job-2",
    role: "System Administrator",
    company: "DataCore Solutions",
    location: "Moscow, Russia",
    period: "2016 – 2020",
    bullets: [
      "Managed 200+ Linux (CentOS/Ubuntu) and Windows servers distributed across 3 global datacenters.",
      "Built an Ansible automation framework from scratch, reducing manual operational tasks by 60%.",
      "Implemented centralized logging using ELK Stack across all infrastructure components.",
      "Administered VMware vSphere virtualization environment, achieving an 80% server consolidation ratio.",
      "Set up and tuned Zabbix monitoring for 500+ network endpoints and services.",
      "Maintained replication and backups for PostgreSQL and MySQL databases (50+ active instances).",
      "Overhauled the enterprise backup system, achieving a verified 99.9% data recovery rate."
    ],
    tags: ["Linux", "Ansible", "VMware", "ELK", "PostgreSQL"]
  },
  {
    id: "job-3",
    role: "Junior System Administrator",
    company: "NetPoint LLC",
    location: "Moscow, Russia",
    period: "2013 – 2016",
    bullets: [
      "Administered Active Directory, Group Policies, and DNS/DHCP for 300+ corporate users.",
      "Deployed and maintained corporate network infrastructure (switches, routers, firewalls).",
      "Managed Windows Server 2012/2016 environments and MS Exchange Server administration.",
      "Wrote PowerShell automation scripts for routine user management and reporting tasks.",
      "Supported tier-2/3 helpdesk operations, resolving 95% of tickets within SLA."
    ],
    tags: ["Windows Server", "Active Directory", "PowerShell", "Networking"]
  }
];

export function Experience() {
  // First item open by default
  const [openId, setOpenId] = useState<string>(experiences[0].id);

  const toggleJob = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My professional journey managing and scaling infrastructure."
        />

        <div className="space-y-4">
          {experiences.map((job, idx) => {
            const isOpen = openId === job.id;
            
            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-300",
                  isOpen 
                    ? "bg-card border-primary/30 shadow-lg shadow-primary/5" 
                    : "bg-background border-border hover:border-primary/30 hover:bg-card/50"
                )}
              >
                <button
                  onClick={() => toggleJob(job.id)}
                  className="w-full text-left px-6 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex gap-4">
                    <div className={cn(
                      "mt-1 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                      isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    )}>
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground mt-1 gap-1 sm:gap-3 text-sm">
                        <span className="font-medium text-foreground/80">{job.company}</span>
                        <span className="hidden sm:inline text-border">•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end sm:gap-4 w-full sm:w-auto pl-16 sm:pl-0">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium whitespace-nowrap">
                      <Calendar size={12} />
                      {job.period}
                    </div>
                    <ChevronDown 
                      size={20} 
                      className={cn("text-muted-foreground transition-transform duration-300", isOpen && "rotate-180 text-primary")} 
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 ml-0 sm:ml-16">
                        <div className="w-full h-px bg-border mb-6 hidden sm:block"></div>
                        
                        <ul className="space-y-3 mb-6">
                          {job.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start text-muted-foreground group">
                              <span className="text-primary mr-3 mt-1.5 opacity-60 group-hover:opacity-100 transition-opacity">▹</span>
                              <span className="leading-relaxed text-sm md:text-base group-hover:text-foreground transition-colors">{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {job.tags.map(tag => (
                            <span key={tag} className="px-2.5 py-1 rounded-md bg-muted text-xs font-mono text-muted-foreground border border-border/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
