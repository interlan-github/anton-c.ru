import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Rocket, TrendingDown, Activity, Clock, ShieldAlert } from "lucide-react";

export function Achievements() {
  const highlights = [
    {
      metric: "75%",
      label: "Faster Deployments",
      desc: "Implemented GitOps with ArgoCD reducing release cycle from 4 hours to 1 hour.",
      icon: <Rocket size={28} className="text-primary" />
    },
    {
      metric: "€120K",
      label: "Annual Savings",
      desc: "Cloud cost optimization through rightsizing and reserved instances on AWS.",
      icon: <TrendingDown size={28} className="text-emerald-500" />
    },
    {
      metric: "99.99%",
      label: "Uptime SLA",
      desc: "Designed fault-tolerant infrastructure with multi-AZ failover and automated recovery.",
      icon: <Activity size={28} className="text-primary" />
    },
    {
      metric: "60%",
      label: "Less Manual Work",
      desc: "Built an Ansible automation framework eliminating repetitive administrative tasks.",
      icon: <Clock size={28} className="text-amber-500" />
    },
    {
      metric: "0 Data",
      label: "Loss Incidents",
      desc: "Rebuilt backup architecture, achieved RTO < 15 min and RPO < 1 hour.",
      icon: <ShieldAlert size={28} className="text-primary" />
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading 
            title="Impact & Achievements" 
            subtitle="Quantifiable results from my recent projects."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="bg-background border border-border p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              {/* Background gradient flare */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-muted rounded-xl inline-flex">
                  {item.icon}
                </div>
                <h3 className="text-4xl font-display font-black text-foreground tracking-tight">
                  {item.metric}
                </h3>
              </div>
              
              <h4 className="text-xl font-bold text-foreground mb-2">{item.label}</h4>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
