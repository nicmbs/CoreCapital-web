import { csBrand } from "./brand";

export type CSSection = {
  id: string;
  anchor: string;
  navLabel: string;
  core: string;
  name: string;
  color: string;
  badge: string;
  title1: string;
  title2: string;
  subtitle: string;
  highlights: { title: string; description: string }[];
  ctaLabel?: string;
  ctaHref?: string;
};

type CSLocaleCopy = {
  nav: {
    home: string;
    openMenu: string;
    switchLang: string;
    themeLight: string;
    themeDark: string;
  };
  home: {
    tagline: string;
    aboutBadge: string;
    aboutTitle: string;
    aboutP1Before: string;
    aboutP1Accent: string;
    aboutP1After: string;
    aboutP2: string;
    aboutP3: string;
  };
  footer: { tagline: string };
  sections: CSSection[];
};

const sectionsEs: CSSection[] = [
  {
    id: "capital",
    anchor: "corecapital",
    navLabel: "CoreCapital",
    core: "Core",
    name: "Capital",
    color: csBrand.products.capital,
    badge: "Gestión de Patrimonio con IA",
    title1: "Tu patrimonio,",
    title2: "reimaginado",
    subtitle:
      "CoreCapital es la primera plataforma de gestión de patrimonio nativa de IA diseñada para inversores tech-savvy. Consolida todos tus activos, obtén análisis de nivel institucional y aprovecha la IA conversacional para hacer crecer tu portafolio.",
    highlights: [
      {
        title: "Analista de Cartera IA",
        description:
          "Insights de rendimiento en tiempo real, puntuación de riesgos y recomendaciones estratégicas adaptadas a tu perfil.",
      },
      {
        title: "Analíticas avanzadas",
        description:
          "Seguimiento de TAN, apreciación de capital e ingresos mensuales con visión multi-activo unificada.",
      },
      {
        title: "Tokenización RWA",
        description:
          "Inmuebles, bonos, campos y más convertidos en fracciones negociables con liquidación T+0 y transparencia on-chain.",
      },
      {
        title: "Tres motores de IA",
        description:
          "Pulso de mercado, rebalanceo algorítmico e inteligencia conversacional en una sola plataforma.",
      },
    ],
    ctaLabel: "Ir a CoreCapital",
    ctaHref: "/#home",
  },
  {
    id: "commerce",
    anchor: "corecommerce",
    navLabel: "CoreCommerce",
    core: "Core",
    name: "Commerce",
    color: csBrand.products.commerce,
    badge: "Comercio digital",
    title1: "Tiendas web",
    title2: "inteligentes",
    subtitle:
      "Consultoría e implementación de tienda web: desde la estrategia comercial hasta el lanzamiento y la operación diaria de un canal de venta digital escalable.",
    highlights: [
      {
        title: "Diseño y experiencia de compra",
        description:
          "Arquitectura de catálogo, checkout y journeys pensados para convertir y retener clientes.",
      },
      {
        title: "Implementación end-to-end",
        description:
          "Integración de pagos, inventario, logística y herramientas de marketing en un solo flujo.",
      },
      {
        title: "Operación y crecimiento",
        description:
          "Tableros, automatizaciones y mejoras continuas para escalar ventas sin fricción operativa.",
      },
      {
        title: "Capacitación del equipo",
        description:
          "Acompañamos a tu organización para operar la tienda con autonomía y mejores prácticas.",
      },
    ],
  },
  {
    id: "ads",
    anchor: "coreads",
    navLabel: "CoreADS",
    core: "Core",
    name: "ADS",
    color: csBrand.products.ads,
    badge: "Contenido y publicidad con IA",
    title1: "Avatares y contenido",
    title2: "con IA",
    subtitle:
      "Consultoría e implementación de avatares, generación de contenido y programación con IA para potenciar campañas, marca y presencia digital.",
    highlights: [
      {
        title: "Avatares digitales",
        description:
          "Diseño e implementación de avatares para comunicación de marca, atención y contenido audiovisual.",
      },
      {
        title: "Generación de contenido",
        description:
          "Pipelines de copy, creatividades y piezas multiformato asistidas por IA, alineadas a tu tono de marca.",
      },
      {
        title: "Programación con IA",
        description:
          "Automatización de calendarios, variantes creativas y flujos de publicación para acelerar campañas.",
      },
      {
        title: "Medición y aprendizaje",
        description:
          "Ciclos de prueba y optimización para mejorar performance creativo con datos reales.",
      },
    ],
  },
  {
    id: "ai",
    anchor: "coreia",
    navLabel: "CoreIA",
    core: "Core",
    name: "IA",
    color: csBrand.products.ai,
    badge: "IA orientada a negocios",
    title1: "Inteligencia artificial",
    title2: "para operar mejor",
    subtitle:
      "Consultoría para implementación de IA orientada a negocios y operación: uso de modelos, consultoría legal de uso, protección de datos y transformación de operaciones empresariales aplicando inteligencia artificial.",
    highlights: [
      {
        title: "Estrategia y modelos",
        description:
          "Selección e implementación de modelos adecuados al caso de uso, con foco en valor de negocio medible.",
      },
      {
        title: "Gobierno, legal y datos",
        description:
          "Consultoría legal de uso, protección de datos y marcos de cumplimiento para adoptar IA con responsabilidad.",
      },
      {
        title: "Transformación operativa",
        description:
          "Rediseño de procesos empresariales aplicando IA donde genera eficiencia, calidad y velocidad.",
      },
      {
        title: "Agentes organizacionales",
        description:
          "Implementación de agentes para automatizar tareas, flujos de trabajo e información dentro de la empresa.",
      },
    ],
  },
];

const sectionsEn: CSSection[] = [
  {
    id: "capital",
    anchor: "corecapital",
    navLabel: "CoreCapital",
    core: "Core",
    name: "Capital",
    color: csBrand.products.capital,
    badge: "AI-powered wealth management",
    title1: "Your wealth,",
    title2: "reimagined",
    subtitle:
      "CoreCapital is the first AI-native wealth management platform built for tech-savvy investors. Consolidate every asset, get institutional-grade analytics, and use conversational AI to grow your portfolio.",
    highlights: [
      {
        title: "AI Portfolio Analyst",
        description:
          "Real-time performance insights, risk scoring, and strategic recommendations tailored to your profile.",
      },
      {
        title: "Advanced analytics",
        description:
          "Track NAV, capital appreciation, and monthly income with a unified multi-asset view.",
      },
      {
        title: "RWA tokenization",
        description:
          "Real estate, bonds, farmland, and more converted into tradable fractions with T+0 settlement and on-chain transparency.",
      },
      {
        title: "Three AI engines",
        description:
          "Market pulse, algorithmic rebalancing, and conversational intelligence in one platform.",
      },
    ],
    ctaLabel: "Go to CoreCapital",
    ctaHref: "/#home",
  },
  {
    id: "commerce",
    anchor: "corecommerce",
    navLabel: "CoreCommerce",
    core: "Core",
    name: "Commerce",
    color: csBrand.products.commerce,
    badge: "Digital commerce",
    title1: "Smart",
    title2: "web stores",
    subtitle:
      "Web store consulting and implementation: from commercial strategy to launch and day-to-day operation of a scalable digital sales channel.",
    highlights: [
      {
        title: "Design & shopping experience",
        description:
          "Catalog architecture, checkout, and journeys built to convert and retain customers.",
      },
      {
        title: "End-to-end implementation",
        description:
          "Payments, inventory, logistics, and marketing tools integrated into one flow.",
      },
      {
        title: "Operations & growth",
        description:
          "Dashboards, automations, and continuous improvements to scale sales without operational friction.",
      },
      {
        title: "Team enablement",
        description:
          "We train your organization to run the store autonomously with best practices.",
      },
    ],
  },
  {
    id: "ads",
    anchor: "coreads",
    navLabel: "CoreADS",
    core: "Core",
    name: "ADS",
    color: csBrand.products.ads,
    badge: "AI content & advertising",
    title1: "Avatars and content",
    title2: "with AI",
    subtitle:
      "Consulting and implementation of avatars, content generation, and AI-driven scheduling to strengthen campaigns, brand, and digital presence.",
    highlights: [
      {
        title: "Digital avatars",
        description:
          "Design and deployment of avatars for brand communication, support, and audiovisual content.",
      },
      {
        title: "Content generation",
        description:
          "AI-assisted pipelines for copy, creatives, and multi-format assets aligned to your brand voice.",
      },
      {
        title: "AI scheduling",
        description:
          "Automate calendars, creative variants, and publishing workflows to accelerate campaigns.",
      },
      {
        title: "Measurement & learning",
        description:
          "Test-and-learn cycles to improve creative performance with real data.",
      },
    ],
  },
  {
    id: "ai",
    anchor: "coreia",
    navLabel: "CoreIA",
    core: "Core",
    name: "IA",
    color: csBrand.products.ai,
    badge: "Business-oriented AI",
    title1: "Artificial intelligence",
    title2: "to operate better",
    subtitle:
      "Consulting for business- and operations-oriented AI: model usage, legal guidance, data protection, and transforming enterprise operations with artificial intelligence.",
    highlights: [
      {
        title: "Strategy & models",
        description:
          "Select and implement the right models for each use case, with a focus on measurable business value.",
      },
      {
        title: "Governance, legal & data",
        description:
          "Legal usage guidance, data protection, and compliance frameworks for responsible AI adoption.",
      },
      {
        title: "Operational transformation",
        description:
          "Redesign business processes with AI where it drives efficiency, quality, and speed.",
      },
      {
        title: "Organizational agents",
        description:
          "Deploy agents to automate tasks, workflows, and information flows inside the company.",
      },
    ],
  },
];

export const csTranslations: Record<"es" | "en", CSLocaleCopy> = {
  es: {
    nav: {
      home: "Inicio",
      openMenu: "Abrir menú",
      switchLang: "Switch to English",
      themeLight: "Modo claro",
      themeDark: "Modo oscuro",
    },
    home: {
      tagline: "Ecosistemas de IA orientados al negocio",
      aboutBadge: "Sobre nosotros",
      aboutTitle: "Nuestro ADN",
      aboutP1Before:
        "CoreSolutions es una consultora de software y servicios profesionales centrada en la implementación y adopción de inteligencia artificial ",
      aboutP1Accent: "(AI-centric)",
      aboutP1After: ".",
      aboutP2:
        "Diseñamos, desarrollamos e implementamos ecosistemas tecnológicos para impulsar la innovación, optimizar procesos empresariales y acelerar la adopción de nuevas tecnologías orientadas a negocios.",
      aboutP3:
        "Nos encargamos de enfocar y dirigir la IA en tus procesos: el brief, la arquitectura de prompts y la elección de herramientas para maximizar resultado y controlar el costo operativo.",
    },
    footer: {
      tagline: "Ecosistemas de IA orientados al negocio.",
    },
    sections: sectionsEs,
  },
  en: {
    nav: {
      home: "Home",
      openMenu: "Open menu",
      switchLang: "Cambiar a Español",
      themeLight: "Light mode",
      themeDark: "Dark mode",
    },
    home: {
      tagline: "AI ecosystems built for business",
      aboutBadge: "About us",
      aboutTitle: "Our DNA",
      aboutP1Before:
        "CoreSolutions is a software and professional services consultancy focused on the implementation and adoption of artificial intelligence ",
      aboutP1Accent: "(AI-centric)",
      aboutP1After: ".",
      aboutP2:
        "We design, build, and implement technology ecosystems to drive innovation, optimize business processes, and accelerate the adoption of business-oriented technologies.",
      aboutP3:
        "We focus and direct AI in your processes: the brief, prompt architecture, and tool selection to maximize outcomes and control operating cost.",
    },
    footer: {
      tagline: "AI ecosystems built for business.",
    },
    sections: sectionsEn,
  },
};

/** @deprecated Prefer csTranslations[language] — kept for any stray imports */
export const csHomeCopy = csTranslations.es.home;
export const csSections = csTranslations.es.sections;
