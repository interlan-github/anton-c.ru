import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionLayoutProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  bgDark?: boolean;
}

export function SectionLayout({ id, title, subtitle, children, className = "", bgDark = false }: SectionLayoutProps) {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-28 ${bgDark ? 'bg-secondary/50' : 'bg-background'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="w-20 h-1.5 bg-primary mt-6 rounded-full" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
