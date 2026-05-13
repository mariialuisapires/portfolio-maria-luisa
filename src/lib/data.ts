export const PERSONAL = {
  name: "Maria Luísa Pires Soares",
  role: "Backend & Mobile Developer",
  tagline: "Building scalable systems and modern experiences.",
  bio: "Desenvolvedora em formação com experiência prática em C# .NET e desenvolvimento mobile com Flutter. Apaixonada por arquitetura limpa, APIs robustas e interfaces elegantes.",
  email: "mariapires.dev@gmail.com",
  phone: "(51) 99776-5859",
  github: "https://github.com/mariialuisapires",
  linkedin: "https://linkedin.com/in/maria-pires-670555356",
  location: "Rio Grande do Sul, Brasil",
};

export const SKILLS = [
  { name: "C# / .NET",      icon: "⚙️",  color: "#a855f7", level: 90, tag: "backend"  },
  { name: "ASP.NET Core",   icon: "🚀",  color: "#ec4899", level: 88, tag: "backend"  },
  { name: "Flutter / Dart", icon: "📱",  color: "#60a5fa", level: 82, tag: "mobile"   },
  { name: "PostgreSQL",     icon: "🐘",  color: "#22d3ee", level: 80, tag: "database" },
  { name: "PHP / Laravel",  icon: "🐘",  color: "#9333ea", level: 75, tag: "backend"  },
  { name: "React",          icon: "⚛️",  color: "#38bdf8", level: 70, tag: "frontend" },
  { name: "TypeScript",     icon: "🔷",  color: "#3b82f6", level: 68, tag: "frontend" },
  { name: "Java / Spring",  icon: "☕",  color: "#f97316", level: 65, tag: "backend"  },
  { name: "MongoDB",        icon: "🍃",  color: "#4ade80", level: 65, tag: "database" },
  { name: "JWT / Auth",     icon: "🔐",  color: "#facc15", level: 78, tag: "security" },
  { name: "Docker",         icon: "🐳",  color: "#06b6d4", level: 55, tag: "devops"   },
  { name: "Git / GitHub",   icon: "🔀",  color: "#f87171", level: 85, tag: "tools"    },
];

export const PROJECTS = [
  {
    id: "fitdivas",
    name: "FitDivas",
    folder: "FitDivas/",
    status: "em construção",
    headline: "Fitness app focado em mulheres",
    description:
      "Aplicativo mobile completo com acompanhamento de treinos, metas de peso, controle de hidratação, desafios gamificados e assistente de IA personalizado.",
    tech: ["Flutter", "Dart", "ASP.NET Core", ".NET 10", "PostgreSQL", "JWT", "Firebase FCM", "Tailwind CSS"],
    highlights: [
      "Autenticação JWT com refresh token",
      "Painel Admin em HTML/Tailwind CSS",
      "Arquitetura em camadas — Clean Architecture",
      "Notificações push via Firebase Cloud Messaging",
      "API REST documentada com Swagger",
    ],
    color: "#ec4899",
    featured: true,
    github: "https://github.com/mariialuisapires",
  },
  {
    id: "damas",
    name: "Damas Online",
    folder: "DamasOnline/",
    status: "concluído",
    headline: "Jogo multiplayer em tempo real",
    description:
      "Jogo de damas multiplayer com arquitetura MVC, comunicação em tempo real via SignalR e interface moderna em React.",
    tech: ["C#", "ASP.NET Core 8", "SignalR", "React", "Vite"],
    highlights: [
      "WebSocket via SignalR para partidas em tempo real",
      "Lógica de jogo completa no backend",
      "Interface React responsiva",
      "Sistema de salas e matchmaking",
    ],
    color: "#a855f7",
    featured: false,
    github: "https://github.com/mariialuisapires",
  },
  {
    id: "coup",
    name: "COUP Online",
    folder: "CoupOnline/",
    status: "concluído",
    headline: "Jogo de cartas multiplayer web",
    description:
      "Jogo de cartas COUP implementado como aplicação web com sistema de lobby, controle de turnos e todas as regras do jogo original.",
    tech: ["PHP", "Laravel", "JavaScript", "MySQL"],
    highlights: [
      "Sistema de lobby e salas privadas",
      "Controle de turnos com validação de ações",
      "Regras completas do jogo original",
      "Interface dinâmica com JavaScript vanilla",
    ],
    color: "#60a5fa",
    featured: false,
    github: "https://github.com/mariialuisapires",
  },
  {
    id: "gastos",
    name: "Controle de Gastos",
    folder: "GastosResidenciais/",
    status: "concluído",
    headline: "Sistema fullstack financeiro",
    description:
      "Aplicação fullstack para controle financeiro doméstico com front-end em React/TypeScript e back-end em C# .NET.",
    tech: ["C# .NET 8", "ASP.NET Core Web API", "Entity Framework Core", "PostgreSQL", "Swagger", "React 18", "TypeScript", "Vite", "Axios", "React Router DOM"],
    highlights: [
      "API REST com ASP.NET Core Web API e documentação via Swagger",
      "ORM com Entity Framework Core + PostgreSQL",
      "Front-end em React 18 + TypeScript com Vite",
      "Navegação com React Router DOM",
      "Requisições HTTP via Axios",
      "CRUD de despesas e categorias",
    ],
    color: "#22d3ee",
    featured: false,
    github: "https://github.com/mariialuisapires",
  },
  {
    id: "agendamentos",
    name: "Sistema de Agendamentos",
    folder: "Agendamentos/",
    status: "concluído",
    headline: "App desktop de gerenciamento",
    description:
      "Aplicação desktop para gerenciamento de agendamentos com interface gráfica Windows Forms e persistência em PostgreSQL.",
    tech: ["C# .NET", "Windows Forms", "PostgreSQL", "Npgsql"],
    highlights: [
      "Interface Windows Forms completa",
      "CRUD de clientes e horários",
      "Relatório de agenda diária",
      "Validação de conflitos de horário",
      "Driver de conexão: Npgsql",
    ],
    color: "#4ade80",
    featured: false,
    github: "https://github.com/mariialuisapires",
  },
];

export const TERMINAL_RESPONSES: Record<string, string> = {
  help: `Comandos disponíveis:
  about      → Sobre Maria Luísa
  skills     → Habilidades técnicas
  projects   → Projetos desenvolvidos
  contact    → Informações de contato
  github     → Link do GitHub
  education  → Formação acadêmica
  clear      → Limpar terminal`,

  about: `Maria Luísa Pires Soares — Backend & Mobile Developer

  Desenvolvedora em formação (5º semestre — ADS / ULBRA Torres).
  Foco principal em C# .NET e Flutter/Dart.
  Experiência com APIs REST, arquitetura em camadas e sistemas reais.
  Inglês intermediário/avançado (estudos desde 2016).`,

  skills: `Linguagens & Frameworks:
  ├── C# / ASP.NET Core 8+  ████████████ 90%
  ├── Flutter / Dart         ██████████   82%
  ├── PHP / Laravel          █████████    75%
  ├── React / TypeScript     ████████     70%
  └── Java / Spring          ████████     65%

  Banco de Dados:
  ├── PostgreSQL             ██████████   80%
  ├── MySQL                  █████████    75%
  └── MongoDB / SQLite       ████████     65%`,

  projects: `Projetos em destaque:

  [1] FitDivas        → Flutter + ASP.NET Core + PostgreSQL  [em construção]
  [2] Damas Online    → C# + SignalR + React                 [concluído]
  [3] COUP Online     → PHP + Laravel + MySQL                [concluído]
  [4] Gastos Res.     → C# + React/TypeScript                [concluído]
  [5] Agendamentos    → C# + Windows Forms + PostgreSQL      [concluído]`,

  contact: `Contato:

  📧 Email:    mariapires.dev@gmail.com
  📱 Phone:    (51) 99776-5859
  💼 LinkedIn: linkedin.com/in/maria-pires-670555356
  🐙 GitHub:   github.com/mariialuisapires
  📍 Local:    Rio Grande do Sul, Brasil`,

  github: `Abrindo GitHub...
  → github.com/mariialuisapires`,

  education: `Formação:

  [cursando] Análise e Desenvolvimento de Sistemas — ULBRA Torres (5º semestre)
             Ênfase em DART/Flutter e sistemas móveis

  [2023]     HTML, CSS e JavaScript — Rocketseat
  [ongoing]  Java e C# — Udemy (Programação Orientada a Objetos)
  [2023]     Ensino Médio — Instituto Divina Providência`,

  clear: "__CLEAR__",
};
