import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { ChevronDown, Mail, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-secondary/50 to-background"
    >
      {/* Abstract Background Decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold text-foreground tracking-tight leading-tight">
              Hi, I'm <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {personalInfo.name}
              </span>
            </h1>
            
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto lg:mx-0">
              {personalInfo.title}
            </p>
            
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Building robust infrastructure, automating pipelines, and scaling systems for the modern web.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                View My Work
              </a>
              <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-white border-2 border-border text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* The decorative circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-spin-slow" style={{ animationDuration: '15s' }} />
            
            {/* Inner dashed ring */}
            <div className="absolute inset-4 rounded-full border border-dashed border-primary/40 animate-spin-reverse-slow" style={{ animationDuration: '20s' }} />
            
            {/* The image */}
            <div className="absolute inset-6 rounded-full bg-background overflow-hidden border-4 border-white shadow-xl">
              <img 
                src={`${import.meta.env.BASE_URL}images/profile-avatar.png`}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-xs font-semibold tracking-widest uppercase mb-2">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
