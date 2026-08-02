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

export const csHomeCopy = {
  tagline: "AI - Powered ecosystems for business",
  aboutBadge: "Sobre nosotros",
  aboutTitle: "Nuestro ADN",
  aboutP1:
    "CoreSolutions es una firma de ingeniería de software y servicios profesionales centrada en Inteligencia Artificial (AI-centric).",
  aboutP2:
    "Diseñamos, desarrollamos e implementamos ecosistemas tecnológicos para impulsar la innovación, optimizar procesos empresariales y acelerar la adopción de nuevas tecnologías e Inteligencia artificial orientada a negocios.",
};

export const csSections: CSSection[] = [
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
    anchor: "coreai",
    navLabel: "CoreAI",
    core: "Core",
    name: "AI",
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
