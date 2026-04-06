import { SectionLayout } from "./SectionLayout";
import { personalInfo } from "@/lib/data";
import { MapPin, Mail, Phone, Linkedin, Github, Send, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    reset();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    toast({
      title: "Email Copied",
      description: "Email address copied to clipboard!",
    });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <SectionLayout id="contact" title="Контакты" subtitle="У вас есть вакансия или вы хотите обсудить какие-нибудь вопросы? Напишите мне.">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold font-display text-foreground mb-6">Контакты для связи</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Сейчас я в</p>
                  <p className="font-medium text-foreground">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Электронная почта (предпочтительно)</p>
                  <div className="flex items-center gap-2">
                    <a href={`mailto:${personalInfo.email}`} className="font-medium text-foreground hover:text-primary transition-colors">
                      {personalInfo.email}
                    </a>
                    <button 
                      onClick={copyEmail}
                      className="p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
                      title="Copy Email"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Телефон</p>
                  <a href={`tel:${personalInfo.phone}`} className="font-medium text-foreground hover:text-primary transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Я в социальных сетях</p>
              <div className="flex gap-4">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all hover:-translate-y-1 shadow-sm"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all hover:-translate-y-1 shadow-sm"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        {/*     
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">Your Name</label>
                <input
                  id="name"
                  {...register("name")}
                  className={`w-full px-4 py-3 rounded-xl bg-background border-2 ${errors.name ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : 'border-input focus:border-primary focus:ring-primary/20'} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-sm text-destructive font-medium">{errors.name.message}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`w-full px-4 py-3 rounded-xl bg-background border-2 ${errors.email ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : 'border-input focus:border-primary focus:ring-primary/20'} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-sm text-destructive font-medium">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-semibold text-foreground">Subject</label>
              <input
                id="subject"
                {...register("subject")}
                className={`w-full px-4 py-3 rounded-xl bg-background border-2 ${errors.subject ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : 'border-input focus:border-primary focus:ring-primary/20'} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all`}
                placeholder="How can I help you?"
              />
              {errors.subject && <p className="text-sm text-destructive font-medium">{errors.subject.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className={`w-full px-4 py-3 rounded-xl bg-background border-2 ${errors.message ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : 'border-input focus:border-primary focus:ring-primary/20'} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all resize-none`}
                placeholder="Write your message here..."
              />
              {errors.message && <p className="text-sm text-destructive font-medium">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
        */}        
      </div>
    </SectionLayout>
  );
}
