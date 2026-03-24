import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ChevronDown, TerminalSquare } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-tech-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute -bottom-32 -left-64 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6"
            >
              <TerminalSquare size={14} />
              <span>status: available_for_opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground"
            >
              Hi, I'm <br/>
              <span className="text-gradient">Alex Petrov</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-muted-foreground mb-4"
            >
              Senior System Administrator <br className="hidden sm:block"/> & DevOps Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-10 max-w-xl"
            >
              10+ years building reliable infrastructure at scale. Transforming complex operational challenges into automated, resilient systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="gap-2 text-base h-14 px-8 rounded-xl" onClick={scrollToContact}>
                Contact Me
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base h-14 px-8 rounded-xl bg-background/50 backdrop-blur-sm border-border hover:bg-muted">
                <Download size={18} />
                Download Resume
              </Button>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-400/20 rounded-3xl blur-2xl scale-110" />

              {/* Photo */}
              <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl w-80 h-96">
                <img
                  src="/profile-photo.png"
                  alt="Alex Petrov"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
