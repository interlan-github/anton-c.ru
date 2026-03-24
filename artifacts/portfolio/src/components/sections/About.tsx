import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Terminal, Cpu, RefreshCw, Users, MapPin, CheckCircle2 } from "lucide-react";

export function About() {
  const values = [
    { icon: <ShieldCheck size={24} className="text-primary" />, title: "Reliability", desc: "Building fault-tolerant systems that sleep when you do." },
    { icon: <RefreshCw size={24} className="text-primary" />, title: "Automation", desc: "If you do it twice, script it. IaC is the standard." },
    { icon: <Terminal size={24} className="text-primary" />, title: "Continuous Learning", desc: "Tech evolves rapidly; staying adaptable is key." },
    { icon: <Users size={24} className="text-primary" />, title: "Collaboration", desc: "Bridging the gap between Dev and Ops teams." },
  ];

  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Me" 
          subtitle="A deeper look into my background, philosophy, and professional values."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Bio Text */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground"
            >
              <p className="text-lg leading-relaxed text-foreground">
                Experienced system administrator and DevOps engineer with over <strong className="text-primary">10 years in IT infrastructure</strong>. Specialized in building and maintaining highly available systems, automating deployments, and implementing robust monitoring solutions. Passionate about infrastructure as code and continuous improvement.
              </p>
              <p className="leading-relaxed">
                I thrive in environments where reliability and performance matter. Whether it's designing fault-tolerant architectures on AWS, optimizing Kubernetes CI/CD pipelines, or mentoring junior engineers, I bring both technical depth and a strategic operations mindset.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border shadow-sm">
                <MapPin size={18} className="text-muted-foreground" />
                <span className="font-medium text-sm">Berlin, Germany</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 shadow-sm">
                <CheckCircle2 size={18} />
                <span className="font-medium text-sm">Open to relocation (EU)</span>
              </div>
            </motion.div>
          </div>

          {/* Core Values Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="bg-background border border-border/50 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-border transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Used above, fixing missing import in the file
import { ShieldCheck } from "lucide-react";
