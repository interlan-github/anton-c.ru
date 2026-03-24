import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

export function Education() {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect – Professional",
      issuer: "Amazon Web Services",
      year: "2022",
      id: "AWS-SAP-12345",
      icon: "☁️"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "CNCF",
      year: "2021",
      id: "CKA-67890",
      icon: "☸️"
    },
    {
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      year: "2021",
      id: "TF-11223",
      icon: "🏗️"
    },
    {
      name: "Red Hat Certified Engineer (RHCE)",
      issuer: "Red Hat",
      year: "2019",
      id: "RH-44556",
      icon: "🔴"
    },
    {
      name: "VMware Certified Professional (VCP-DCV)",
      issuer: "VMware",
      year: "2018",
      id: "VCP-77889",
      icon: "🖥️"
    }
  ];

  return (
    <section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Education & Certifications" 
          subtitle="My academic background and professional credentials."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Education - takes 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-border before:content-[''] before:absolute before:left-[-9px] before:top-1 before:w-4 before:h-4 before:rounded-full before:bg-background before:border-4 before:border-primary"
            >
              <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-bold rounded-full mb-2">
                2009 &mdash; 2013
              </span>
              <h4 className="text-xl font-bold text-foreground mb-1">Bachelor's in Computer Science</h4>
              <p className="text-muted-foreground font-medium mb-3">Moscow State Technical University</p>
              <p className="text-sm text-muted-foreground">
                Focused on network engineering, distributed systems, and operating system fundamentals. 
                Graduated with honors.
              </p>
            </motion.div>
          </div>

          {/* Certifications - takes 8 cols */}
          <div className="lg:col-span-8 space-y-6">
             <div className="flex items-center gap-3 mb-6 lg:pl-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pl-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-md transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110" />
                  
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-2xl">{cert.icon}</span>
                    <span className="text-xs font-bold px-2 py-1 bg-secondary text-secondary-foreground rounded-md">
                      {cert.year}
                    </span>
                  </div>
                  
                  <h4 className="font-bold text-foreground mb-1 pr-4">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground font-medium mb-4">{cert.issuer}</p>
                  
                  <div className="pt-4 border-t border-border/50 flex justify-between items-center mt-auto">
                    <span className="text-xs font-mono text-muted-foreground/70">ID: {cert.id}</span>
                    <button className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Verify credential">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
