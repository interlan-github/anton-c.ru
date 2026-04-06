export const personalInfo = {
  name: "Черноусов Антон",
  title: "Системный администратор / DevOps-инженер",
  email: "chernousov@interlan.xyz",
  phone: "+7-996-694-1252",
  linkedin: "https://www.linkedin.com/in/chernousov/",
  github: "https://github.com/interlan-github",
  location: "Россия, Новосибирск",
  bio: "За последние 20 лет я успешно реализовывал сложные ИТ‑проекты в разных компаниях, более 15-и лет опыт в проектировании, развертывании и обслуживании корпоративной инфраструктуры, более 10 лет практического опыта в администрировании Linux, облачных платформах и автоматизации DevOps. Занимаюсь созданием надежных, масштабируемых систем и оптимизацией конвейеров CI/CD для расширения возможностей команд разработчиков.",
  competencies: [
    "Linux", "Docker", "Kubernetes", "Ansible", "Terraform", 
    "CI/CD", "Cloud", "Git", "Monitoring", "Scripting", 
    "Networking", "Security", "Virtualization", "Web",
    "Python", "Shell scripting"
  ]
};

export const experienceData = [
  {
    id: 1,
    role: "Системный администратор",
    company: "ООО \"МАРОП\"",
    period: "2025–Настоящее время",
    description: [
      "Реализация проектов по импортозамещению ИТ‑инфраструктуры. Подготовка к переходу с решений Microsoft на отечественные программные продукты (в т. ч. RedOS) с сохранением функциональности и безопасности бизнес‑процессов;",
      "Проведение аудита существующей ИТ‑инфраструктуры (аппаратные ресурсы, ПО, сетевые сервисы, политики безопасности);",
      "Выявление узких мест, рисков и ограничений при миграции;",
      "Разработка детального плана внедрения с учётом требований заказчика и особенностей целевой платформы (RedOS);",
      "Подбор альтернативных российских решений для замены компонентов Microsoft (ОС, серверные сервисы, офисные приложения и т. д.);",
      "Поэтапная миграция инфраструктуры с Microsoft-решений на отечественное ПО (включая RedOS);"
    ]
  },
  {
    id: 2,
    role: "Системный инженер",
    company: "ООО \"Финстарлаб\"",
    period: "2020–2025",
    description: [
      "Разработал унифицированную платформу для запуска сервисов МФО в Docker Compose;",
      "Перенёс инфраструктуру в облачные среды (Selectel, Google Cloud);.",
      "Унифицировал пайплайны для сборки и публикации сервисов;",
      "Внедрил единую систему конфигурации серверов на базе Ansible;"
    ]
  },
  {
    id: 3,
    role: "Ведущий системный администратор",
    company: "ООО \"Продевелопмент\"",
    period: "2017–2019",
    description: [
      "Поддержка работы высоко нагруженного проекта сервиса подбора и продажи автозапчастей, подготовка и выкладка в прод-стэйдж-тест \
      новых релизов. Поддержка команд разработчиков и тестирования,\
      администрирование офисной серверной инфраструктуры;",
      "Настройка мониторинга серверов при помощи Zabbix, разработка нестандартных метрик и триггеров;",
      "Администрирование фермы виртуализации для разработчиков (кластер Proxmox);"
    ]
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Обработка металлов давлением",
    institution: "Алтайский Государственный Технический Университет",
    year: "2004"
  },
  {
    id: 1,
    degree: "Новые возможности Oracle 10g",
    institution: "Центр повышения квалификации SoftLine",
    year: "2012"
  }
];

export const skillsData = [
  { category: "Операционные системы", items: [{ name: "Linux RHEL/Ubuntu", level: "Advanced" }, { name: "Windows Server", level: "Intermediate" }] },
  { category: "Облачные платформы", items: [{ name: "AWS", level: "Advanced" }, { name: "GCP", level: "Intermediate" }, { name: "Azure", level: "Basic" }] },
  { category: "Контейнеры и оркестраторы", items: [{ name: "Docker", level: "Advanced" }, { name: "Kubernetes", level: "Advanced" }, { name: "Helm", level: "Intermediate" }] },
  { category: "CI/CD", items: [{ name: "Jenkins", level: "Advanced" }, { name: "GitLab CI", level: "Advanced" }, { name: "GitHub Actions", level: "Intermediate" }] },
  { category: "Infrastructure as Code", items: [{ name: "Terraform", level: "Advanced" }, { name: "Ansible", level: "Advanced" }, { name: "Puppet", level: "Basic" }] },
  { category: "Мониторинг и логирование", items: [{ name: "Prometheus", level: "Advanced" }, { name: "Grafana", level: "Advanced" }, { name: "ELK Stack", level: "Intermediate" }] },
  { category: "Разработка", items: [{ name: "Bash", level: "Advanced" }, { name: "Python", level: "Advanced" }, { name: "Go", level: "Basic" }] },
  { category: "Сети и безопасность", items: [{ name: "TCP/IP, DNS, VPN", level: "Advanced" }, { name: "Load Balancing", level: "Advanced" }] }
];

export const projectsData = [
  {
    id: 1,
    title: "Внедрение решений на базе Отечественного и Открытого ПО",
    role: "Системный администратор (в единственном числе)",
    technologies: "Linux, RedOS, ZVirt, RedADM, FreeIPA, Samba, CUPS",
    outcome: "Замещение около 60% проприетарного ПО отечественными аналогами",
    description: "Реализация проекта для Севернефтегазпром по импортозамещению ИТ‑инфраструктуры: переход с решений Microsoft на отечественные программные продукты (в т. ч. RedOS) с сохранением функциональности и безопасности бизнес‑процессов.",
    link: "#"
  },
  {
    id: 2,
    title: "Перевод крупной онлайн‑системы микрокредитования частных лиц в России на микросервисную архитектуру",
    role: "Системный инженер/Devops",
    technologies: "GitLab CI, Docker, Kubernetes, Terraform, ArgoCD, Postgresql, RabbitMQ",
    outcome: "Адаптация платформы для международных рынков Казахстан, Мексика, Колумбия",
    description: "Перевёл систему с монолитной архитектуры на микросервисы (Docker, Kubernetes). Переписал CI‑процессы для сборки сервисов в Docker и Kubernetes и настроил мониторинг и логирование микросервисов (Prometheus, Grafana, Zabbix, ELK).",
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
