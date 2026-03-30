export const personalInfo = {
  name: "Alex Sokolov",
  title: "System Administrator / DevOps Engineer",
  email: "alex.sokolov@example.com",
  phone: "+1 (555) 123-4567",
  linkedin: "https://linkedin.com/in/alex-sokolov",
  github: "https://github.com/alex-sokolov",
  location: "New York, NY",
  bio: "Experienced in designing, deploying, and maintaining enterprise infrastructure with 7+ years of hands-on experience in Linux administration, cloud platforms, and DevOps automation. Passionate about building robust, scalable systems and optimizing CI/CD pipelines to empower development teams.",
  competencies: [
    "Linux", "Docker", "Kubernetes", "Ansible", "Terraform", 
    "CI/CD", "AWS", "Git", "Monitoring", "Scripting", 
    "Networking", "Security"
  ]
};

export const experienceData = [
  {
    id: 1,
    role: "Senior DevOps Engineer",
    company: "TechCorp Inc.",
    period: "2021–Present",
    description: [
      "Managed Kubernetes clusters (50+ nodes) across multiple environments ensuring 99.99% availability.",
      "Automated CI/CD pipelines using GitLab CI, reducing average deployment time by 60%.",
      "Implemented full infrastructure-as-code strategy with Terraform and Ansible for standardized provisioning."
    ]
  },
  {
    id: 2,
    role: "System Administrator",
    company: "DataSoft Solutions",
    period: "2018–2021",
    description: [
      "Administered enterprise Linux servers (RHEL, Ubuntu) in a complex 200+ server environment.",
      "Built and maintained comprehensive monitoring solutions using Prometheus, AlertManager, and Grafana.",
      "Implemented and routinely tested automated backup and disaster recovery procedures."
    ]
  },
  {
    id: 3,
    role: "Junior System Administrator",
    company: "WebHost LLC",
    period: "2016–2018",
    description: [
      "Managed Apache/Nginx web servers and MySQL databases for highly-trafficked client sites.",
      "Performed routine system maintenance, performance tuning, and critical security patching.",
      "Provided tier-2 technical support resolving complex infrastructure and application issues."
    ]
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "State Technical University",
    year: "2016"
  }
];

export const skillsData = [
  { category: "Operating Systems", items: [{ name: "Linux RHEL/Ubuntu", level: "Advanced" }, { name: "Windows Server", level: "Intermediate" }] },
  { category: "Cloud Platforms", items: [{ name: "AWS", level: "Advanced" }, { name: "GCP", level: "Intermediate" }, { name: "Azure", level: "Basic" }] },
  { category: "Containers & Orchestration", items: [{ name: "Docker", level: "Advanced" }, { name: "Kubernetes", level: "Advanced" }, { name: "Helm", level: "Intermediate" }] },
  { category: "CI/CD", items: [{ name: "Jenkins", level: "Advanced" }, { name: "GitLab CI", level: "Advanced" }, { name: "GitHub Actions", level: "Intermediate" }] },
  { category: "Infrastructure as Code", items: [{ name: "Terraform", level: "Advanced" }, { name: "Ansible", level: "Advanced" }, { name: "Puppet", level: "Basic" }] },
  { category: "Monitoring & Logging", items: [{ name: "Prometheus", level: "Advanced" }, { name: "Grafana", level: "Advanced" }, { name: "ELK Stack", level: "Intermediate" }] },
  { category: "Scripting", items: [{ name: "Bash", level: "Advanced" }, { name: "Python", level: "Advanced" }, { name: "Go", level: "Basic" }] },
  { category: "Networking & Security", items: [{ name: "TCP/IP, DNS, VPN", level: "Advanced" }, { name: "Load Balancing", level: "Advanced" }] }
];

export const projectsData = [
  {
    id: 1,
    title: "Kubernetes Migration Project",
    role: "Lead DevOps",
    technologies: "Kubernetes, Helm, ArgoCD, AWS EKS",
    outcome: "40% cost reduction, 99.9% uptime",
    description: "Migrated a legacy monolithic application to a highly-available microservices architecture running on Kubernetes.",
    link: "#"
  },
  {
    id: 2,
    title: "CI/CD Pipeline Automation",
    role: "DevOps Engineer",
    technologies: "GitLab CI, Docker, Terraform, ArgoCD",
    outcome: "3x faster release cycles",
    description: "Built an end-to-end GitOps pipeline servicing 20+ development teams with automated testing and deployment gates.",
    link: "#"
  },
  {
    id: 3,
    title: "Centralized Monitoring Platform",
    role: "System Administrator",
    technologies: "Prometheus, Grafana, AlertManager, ELK",
    outcome: "MTTR reduced by 70%",
    description: "Designed and deployed a centralized monitoring and logging platform providing deep observability into 500+ servers.",
    link: "#"
  }
];

export const certificationsData = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon",
    year: "2022",
    verifyUrl: "#"
  },
  {
    id: 2,
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    year: "2021",
    verifyUrl: "#"
  },
  {
    id: 3,
    name: "Red Hat Certified Engineer (RHCE)",
    issuer: "Red Hat",
    year: "2020",
    verifyUrl: "#"
  },
  {
    id: 4,
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    year: "2022",
    verifyUrl: "#"
  }
];
