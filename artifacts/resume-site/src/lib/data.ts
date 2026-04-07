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
    title: "Перевод call-центра в режим удаленной работы на время самоизоляции",
    role: "Ведущий системный администратор",
    technologies: "Windows, Linux, CRM, VoIP",
    outcome: "Перевод на удаленный формат работы 30-и сотрудников Call-центра",
    description: "Обеспечил непрерывность и эффективность работы call-центра при переводе сотрудников на дистанционный формат, сохраняя качество обслуживания клиентов. Организация технической инфраструктуры для удалённого доступа к рабочим инструментам и системам;",
    link: "#"
  }
];

export const certificationsData = [
  {
    id: 1,
    name: "Сертификация - Senior Linux System Administrator",
    issuer: "Хабр-карьера",
    year: "2026",
    verifyUrl: "https://interlan.xyz/2026/03/31/podtverdil-svoj-uroven-na-habr-karere/"
  },
  {
    id: 2,
    name: "Креативное мышление и AI для решения задач",
    issuer: "Cloud.ru",
    year: "2026",
    verifyUrl: "https://interlan.xyz/2026/03/30/vvedenie-v-vibecode-navajbkodim-sajt-vizitku-rezjume/#AI-CERT"
  },
  {
    id: 3,
    name: "Погружение в PostgreSQL",
    issuer: "Selectel",
    year: "2026",
    verifyUrl: "https://interlan.xyz/2026/02/13/kurs-pogruzhenie-v-postgresql-ot-selectel/"
  },
  {
    id: 4,
    name: "Cloud.ru Cloud Fundamentals",
    issuer: "Cloud.ru",
    year: "2025",
    verifyUrl: "https://awardme.ru/ru/badges/a9967d2b-edfe-4d65-9675-fb7ca0cdf475"
  },
  {
    id: 5,
    name: "Cloud.ru Evolution Fundamentals",
    issuer: "Cloud.ru",
    year: "2025",
    verifyUrl: "https://interlan.xyz/2025/01/31/mojo-obuchenie-kursy-i-sertifikaty/#2025-1"
  },
  {
    id: 6,
    name: "Introduction to Docker : The Basics",
    issuer: "Cloud.ru",
    year: "2021",
    verifyUrl: "https://coursera.org/share/ce401afe38fbb54bddcc1b1607a3e843"
  },
  {
    id: 7,
    name: "PHP Tutorial",
    issuer: "SoloLearn",
    year: "2019",
    verifyUrl: "https://www.sololearn.com/Certificate/CT-EUGVFGOI/jpg"
  },
  {
    id: 8,
    name: "Java Tutorial",
    issuer: "SoloLearn",
    year: "2019",
    verifyUrl: "https://www.sololearn.com/Certificate/CT-ZCWWYF0L/jpg"
  },
  {
    id: 9,
    name: "JavaScript Tutorial",
    issuer: "SoloLearn",
    year: "2018",
    verifyUrl: "https://www.sololearn.com/Certificate/CT-CR9RHQ6D/jpg"
  },
  {
    id: 10,
    name: "CSS Fundamentals",
    issuer: "SoloLearn",
    year: "2018",
    verifyUrl: "https://www.sololearn.com/Certificate/CT-WP4UCWPK/jpg"
  },
  {
    id: 11,
    name: "HTML Fundamentals",
    issuer: "SoloLearn",
    year: "2018",
    verifyUrl: "https://www.sololearn.com/Certificate/CT-CGVFSOMX/jpg"
  },
  {
    id: 12,
    name: "Python 3 Tutorial",
    issuer: "SoloLearn",
    year: "2018",
    verifyUrl: "https://www.sololearn.com/Certificate/CT-AQACSED8/jpg"
  },
  {
    id: 13,
    name: "SQL Fundamentals",
    issuer: "SoloLearn",
    year: "2018",
    verifyUrl: "https://www.sololearn.com/Certificate/CT-WMYQ5DQE/jpg"
  },
  {
    id: 14,
    name: "jQuery Tutorial",
    issuer: "SoloLearn",
    year: "2018",
    verifyUrl: "https://www.sololearn.com/Certificate/CT-FYIU7IB3/jpg"
  },
  {
    id: 15,
    name: "Администрирование ОС Linux",
    issuer: "Интуит",
    year: "2017",
    verifyUrl: "https://intuit.ru/verifydiplomas/101096109"
  },
  {
    id: 16,
    name: "Введение в HTML и CSS",
    issuer: "Интуит",
    year: "2017",
    verifyUrl: "https://intuit.ru/verifydiplomas/101102651"
  },
  {
    id: 17,
    name: "Операционная система Linux",
    issuer: "Интуит",
    year: "2017",
    verifyUrl: "https://intuit.ru/verifydiplomas/101096094"
  },
  {
    id: 18,
    name: "Сетевые средства Linux",
    issuer: "Интуит",
    year: "2017",
    verifyUrl: "https://intuit.ru/verifydiplomas/101096098"
  },
  {
    id: 19,
    name: "Спецификация языка HTML",
    issuer: "Интуит",
    year: "2017",
    verifyUrl: "https://intuit.ru/verifydiplomas/101102648"
  }
];
