export const PORTFOLIO_DATA = {
  name: "Alex Johnson",
  title: "System Administrator / DevOps Engineer",
  email: "alex.johnson@devops.example.com",
  phone: "+7 (999) 123-45-67",
  linkedin: "https://linkedin.com/in/alexjohnson",
  github: "https://github.com/alexjohnson",
  about: "Detail-oriented and results-driven System Administrator and DevOps Engineer with over 8 years of experience in architecting, automating, and maintaining highly available cloud and on-premise infrastructure. Proven expertise in migrating monolithic applications to containerized microservices, streamlining CI/CD pipelines, and establishing comprehensive observability stacks. Passionate about infrastructure as code, security best practices, and bridging the gap between development and operations to accelerate delivery.",
  
  competencies: [
    "Linux Administration", "Docker & Containers", "Kubernetes (k8s)", 
    "Ansible Automation", "CI/CD Pipelines", "Infrastructure Monitoring", 
    "Networking & VPN", "Cloud (AWS/GCP)", "Bash/Python Scripting", "Security & Firewall"
  ],

  experience: [
    {
      id: 1,
      role: "Senior DevOps Engineer",
      company: "TechCorp Solutions",
      period: "2021 – Present",
      achievements: [
        "Led the architectural migration of 50+ monolithic legacy services to Kubernetes microservices, achieving 99.99% uptime.",
        "Reduced deployment time by 60% by designing and implementing automated GitLab CI/CD pipelines.",
        "Implemented a comprehensive Prometheus and Grafana monitoring stack, providing real-time visibility into cluster health."
      ]
    },
    {
      id: 2,
      role: "System Administrator",
      company: "DataSoft Inc",
      period: "2018 – 2021",
      achievements: [
        "Managed and maintained a fleet of 200+ Linux (RHEL/Ubuntu) servers across multiple datacenters.",
        "Deployed Ansible automation for server provisioning and configuration, reducing manual administrative tasks by 40%.",
        "Configured and maintained secure VPN and firewall infrastructure supporting 500+ remote and on-site users."
      ]
    },
    {
      id: 3,
      role: "IT Engineer",
      company: "StartupHub",
      period: "2016 – 2018",
      achievements: [
        "Set up and administered a VMware ESXi virtualization environment from scratch.",
        "Implemented robust backup and disaster recovery strategies using Veeam Backup & Replication.",
        "Deployed and maintained critical internal services including self-hosted GitLab, Jira, and Confluence."
      ]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Computer Science & Information Technology",
      institution: "Lomonosov Moscow State University",
      year: "2016"
    }
  ],

  skills: [
    {
      category: "Operating Systems",
      items: [
        { name: "Linux (RHEL/Ubuntu/Debian)", level: "Advanced", value: 95 },
        { name: "Windows Server", level: "Intermediate", value: 70 }
      ]
    },
    {
      category: "Networking & Security",
      items: [
        { name: "TCP/IP, DNS, VPN", level: "Advanced", value: 90 },
        { name: "Firewalls (iptables, pfSense)", level: "Advanced", value: 85 }
      ]
    },
    {
      category: "Virtualization & Containers",
      items: [
        { name: "Docker & Kubernetes", level: "Advanced", value: 95 },
        { name: "VMware, KVM, Proxmox", level: "Advanced", value: 85 },
        { name: "Helm", level: "Advanced", value: 90 }
      ]
    },
    {
      category: "CI/CD & Automation",
      items: [
        { name: "GitLab CI / GitHub Actions", level: "Advanced", value: 95 },
        { name: "Jenkins", level: "Advanced", value: 85 },
        { name: "ArgoCD", level: "Intermediate", value: 75 }
      ]
    },
    {
      category: "Scripting & IaC",
      items: [
        { name: "Bash", level: "Advanced", value: 95 },
        { name: "Python", level: "Intermediate", value: 75 },
        { name: "Terraform", level: "Intermediate", value: 80 }
      ]
    },
    {
      category: "Monitoring & Cloud",
      items: [
        { name: "Prometheus & Grafana", level: "Advanced", value: 95 },
        { name: "ELK Stack", level: "Advanced", value: 85 },
        { name: "AWS & GCP", level: "Intermediate", value: 75 }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Kubernetes Migration Platform",
      role: "Lead Architect",
      tech: ["Kubernetes", "Helm", "ArgoCD", "Terraform"],
      description: "Migrated legacy monolith to k8s microservices. Established GitOps workflows for infrastructure and application deployment.",
      result: "Achieved 99.9% uptime and 3x faster deployments.",
      github: "https://github.com/alexjohnson/k8s-migration"
    },
    {
      id: 2,
      title: "CI/CD Pipeline Framework",
      role: "Author & Maintainer",
      tech: ["GitLab CI", "Docker", "Bash", "Python"],
      description: "Developed a library of reusable, standardized GitLab CI templates adopted by 10+ development teams across the organization.",
      result: "Cut developer onboarding time from weeks to days.",
      github: "https://github.com/alexjohnson/cicd-framework"
    },
    {
      id: 3,
      title: "Unified Infrastructure Monitoring",
      role: "Designer & Implementer",
      tech: ["Prometheus", "Grafana", "AlertManager", "ELK"],
      description: "Built a centralized observability platform consolidating metrics and logs from hundreds of servers and containers.",
      result: "Mean Time To Recovery (MTTR) reduced by 50%."
    }
  ],

  certifications: [
    {
      id: 1,
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "CNCF",
      year: "2022",
      link: "https://training.linuxfoundation.org/certification/verify"
    },
    {
      id: 2,
      name: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services",
      year: "2021"
    },
    {
      id: 3,
      name: "Red Hat Certified System Administrator (RHCSA)",
      issuer: "Red Hat",
      year: "2019"
    },
    {
      id: 4,
      name: "HashiCorp Terraform Associate",
      issuer: "HashiCorp",
      year: "2023"
    }
  ]
};
