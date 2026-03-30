import { motion } from 'framer-motion';
import { Terminal, Server, Shield, Network, Cloud, GitBranch, Github, Linkedin, Mail, Phone, Copy, ExternalLink, CheckCircle2, ChevronRight, Download } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { useActiveSection } from '@/hooks/use-active-section';
import { PORTFOLIO_DATA } from '@/lib/data';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// Section IDs for active nav tracking
const SECTION_IDS = ['home', 'about', 'experience', 'skills', 'projects', 'certifications', 'contact'];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Contact Form Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});
type ContactFormValues = z.infer<typeof contactSchema>;

export default function Home() {
  const activeSection = useActiveSection(SECTION_IDS);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    toast({
      title: "Message sent successfully!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    reset();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    toast({
      title: "Email copied!",
      description: "Address copied to clipboard.",
    });
  };

  return (
    <div className="bg-background min-h-screen font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar activeSection={activeSection} />

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* Background Image/Gradient */}
          <div className="absolute inset-0 z-0">
            <img 
              src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
              alt="Hero Background" 
              className="w-full h-full object-cover opacity-20 dark:opacity-10 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="flex-1 min-w-0"
              >
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                  <Terminal className="w-4 h-4" />
                  <span>Available for new opportunities</span>
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{PORTFOLIO_DATA.name}</span>
                </motion.h1>
                
                <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-display text-muted-foreground mb-8">
                  {PORTFOLIO_DATA.title}
                </motion.h2>
                
                <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                  Architecting reliable infrastructure, automating workflows, and bridging the gap between development and operations for high-performance cloud environments.
                </motion.p>
                
                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                  <a href="#contact" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300">
                    Get in Touch
                  </a>
                  <a href="#experience" className="px-8 py-4 rounded-full bg-card text-foreground font-semibold border border-border hover:border-primary/50 hover:bg-muted transition-all duration-300">
                    View Experience
                  </a>
                </motion.div>
              </motion.div>

              {/* PROFILE PHOTO */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="flex-shrink-0 flex flex-col items-center gap-4"
              >
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20 bg-muted flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 text-muted-foreground/60">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4"/>
                        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                      </svg>
                      <span className="text-sm font-medium">Your Photo Here</span>
                    </div>
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute -inset-2 rounded-2xl border-2 border-primary/10 -z-10" />
                  <div className="absolute -inset-4 rounded-2xl border border-primary/5 -z-20" />
                  {/* Status badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-card border border-border rounded-full px-3 py-1.5 shadow-lg whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-medium text-foreground">Open to work</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 bg-card relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
                <span className="w-12 h-1 bg-primary rounded-full"></span>
                About Me
              </motion.h2>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <motion.div variants={fadeUp} className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                  <p>{PORTFOLIO_DATA.about}</p>
                </motion.div>

                <motion.div variants={fadeUp} className="bg-background rounded-3xl p-8 border border-border shadow-sm">
                  <h3 className="text-xl font-bold mb-6 text-foreground">Core Competencies</h3>
                  <div className="flex flex-wrap gap-3">
                    {PORTFOLIO_DATA.competencies.map((skill, i) => (
                      <span key={i} className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-4xl mx-auto">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-16 text-center">
                Professional Experience
              </motion.h2>

              <div className="space-y-12">
                {PORTFOLIO_DATA.experience.map((job, index) => (
                  <motion.div key={job.id} variants={fadeUp} className="relative pl-8 md:pl-0">
                    {/* Timeline line - hidden on mobile, shown on desktop beside content */}
                    <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
                    
                    <div className={cn(
                      "md:flex items-center justify-between w-full",
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    )}>
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0 z-10"></div>
                      
                      <div className="md:w-[45%]"></div>
                      
                      <div className={cn(
                        "md:w-[45%] bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow",
                        index % 2 === 0 ? "md:text-left" : "md:text-right"
                      )}>
                        <div className="flex flex-col gap-1 mb-4">
                          <span className="text-sm font-bold text-primary">{job.period}</span>
                          <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                          <span className="text-muted-foreground font-medium flex items-center gap-2 justify-start md:justify-end">
                            {index % 2 !== 0 && <Server className="w-4 h-4 hidden md:block" />}
                            {job.company}
                            {index % 2 === 0 && <Server className="w-4 h-4 hidden md:block" />}
                          </span>
                        </div>
                        <ul className={cn(
                          "space-y-2 text-muted-foreground text-sm",
                          index % 2 === 0 ? "text-left" : "md:text-right text-left"
                        )}>
                          {job.achievements.map((item, i) => (
                            <li key={i} className={cn(
                              "flex items-start gap-2",
                              index % 2 !== 0 ? "md:flex-row-reverse" : ""
                            )}>
                              <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-16 text-center">
                Technical Expertise
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PORTFOLIO_DATA.skills.map((category, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="bg-background rounded-2xl p-6 border border-border">
                    <h3 className="text-lg font-bold mb-6 text-foreground border-b border-border pb-3">
                      {category.category}
                    </h3>
                    <div className="space-y-5">
                      {category.items.map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-sm">{skill.name}</span>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{skill.level}</span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.value}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
                <span className="w-12 h-1 bg-primary rounded-full"></span>
                Key Projects
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PORTFOLIO_DATA.projects.map((project) => (
                  <motion.div 
                    key={project.id} 
                    variants={fadeUp}
                    className="group bg-card rounded-3xl p-8 border border-border hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Terminal className="w-6 h-6" />
                      </div>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                          <Github className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm font-semibold text-secondary mb-4">{project.role}</p>
                    
                    <p className="text-muted-foreground text-sm mb-6 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="mb-6 p-4 rounded-xl bg-muted/50 border border-border/50 text-sm font-medium text-foreground">
                      <span className="text-primary mr-2">Result:</span>{project.result}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-mono px-2 py-1 bg-background border border-border rounded-md text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="certifications" className="py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Education */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold mb-10">Education</motion.h2>
                <div className="space-y-6">
                  {PORTFOLIO_DATA.education.map((edu) => (
                    <motion.div key={edu.id} variants={fadeUp} className="bg-background p-6 rounded-2xl border border-border flex gap-4">
                      <div className="mt-1">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                          <Shield className="w-5 h-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <span className="text-sm font-bold text-primary mt-2 block">{edu.year}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold mb-10">Certifications</motion.h2>
                <div className="space-y-4">
                  {PORTFOLIO_DATA.certifications.map((cert) => (
                    <motion.div key={cert.id} variants={fadeUp} className="group bg-background p-5 rounded-2xl border border-border hover:border-primary/30 transition-colors flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                        <div>
                          <h3 className="font-bold text-foreground">{cert.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <span>{cert.issuer}</span>
                            <span>•</span>
                            <span>{cert.year}</span>
                          </div>
                        </div>
                      </div>
                      {cert.link && (
                        <a href={cert.link} target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-5xl mx-auto">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Let's Connect
              </motion.h2>
              <motion.p variants={fadeUp} className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </motion.p>

              <div className="grid lg:grid-cols-5 gap-12">
                {/* Contact Info */}
                <motion.div variants={fadeUp} className="lg:col-span-2 space-y-6">
                  <div className="bg-card p-6 rounded-2xl border border-border">
                    <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Email</p>
                          <p className="font-medium break-all">{PORTFOLIO_DATA.email}</p>
                          <button onClick={copyEmail} className="mt-2 flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors">
                            <Copy className="w-3 h-3" /> Copy Address
                          </button>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Phone</p>
                          <p className="font-medium">{PORTFOLIO_DATA.phone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-border flex gap-4">
                      <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={PORTFOLIO_DATA.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div variants={fadeUp} className="lg:col-span-3">
                  <form onSubmit={handleSubmit(onSubmit)} className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">Name</label>
                        <input
                          {...register("name")}
                          type="text"
                          id="name"
                          className={cn(
                            "w-full px-4 py-3 rounded-xl bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                            errors.name ? "border-destructive focus:ring-destructive/50" : "border-border"
                          )}
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">Email</label>
                        <input
                          {...register("email")}
                          type="email"
                          id="email"
                          className={cn(
                            "w-full px-4 py-3 rounded-xl bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                            errors.email ? "border-destructive focus:ring-destructive/50" : "border-border"
                          )}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">Message</label>
                        <textarea
                          {...register("message")}
                          id="message"
                          rows={5}
                          className={cn(
                            "w-full px-4 py-3 rounded-xl bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none",
                            errors.message ? "border-destructive focus:ring-destructive/50" : "border-border"
                          )}
                          placeholder="How can I help you?"
                        ></textarea>
                        {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : "Send Message"}
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-card py-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
                AJ
              </div>
              <span className="font-bold font-display tracking-tight text-foreground">Alex<span className="text-primary">.devops</span></span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.
          </p>
          
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert('Resume download simulated');
            }}
            className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
          >
            <Download className="w-4 h-4" /> Download Resume (PDF)
          </a>
        </div>
      </footer>
    </div>
  );
}
