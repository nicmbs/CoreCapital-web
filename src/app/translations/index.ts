export const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      features: "Features",
      analytics: "Analytics",
      capabilities: "Capabilities",
      tokenization: "Tokenization",
      contact: "Contact",
      getStarted: "Get Started",
    },
    // Hero
    hero: {
      badge: "AI-Powered Wealth Management",
      title1: "Your wealth,",
      title2: "reimagined",
      subtitle: "CoreCapital is the first AI-native wealth platform designed for tech-savvy investors. Consolidate all your assets, get institutional-grade analytics, and leverage conversational AI to grow your portfolio.",
      cta: "Accede al pre-lanzamiento",
      contactCta: "Contact us",
      tokenizationCta: "Explore tokenization",
      watchDemo: "Watch Demo",
      stats: {
        assets: "Projected RWA Market (2030)",
        growth: "Yield Settlement",
        users: "Audited Physical Assets",
      }
    },
    // Features
    features: {
      badge: "Everything You Need",
      title1: "Institutional tools,",
      title2: "democratized",
      subtitle: "CoreCapital brings the power of a family office to individual investors — without the fees, gatekeepers, or complexity.",
      cards: {
        aiAnalyst: {
          title: "AI Portfolio Analyst",
          description: "Your personal Senior Wealth Analyst powered by AI. Get real-time performance insights, risk scoring, and strategic recommendations tailored to your profile.",
          badge: "AI-Powered",
        },
        analytics: {
          title: "Advanced Analytics",
          description: "Deep-dive into your portfolio's performance with institutional-grade analytics. Track TAN rates, capital appreciation, and monthly income streams at a glance.",
          badge: "Real-Time",
        },
        projections: {
          title: "Growth Projections",
          description: "Simulate compound growth scenarios across your interest and capital-gain assets. Model up to 30 years of wealth accumulation with reinvestment calculations.",
          badge: "Predictive",
        },
        research: {
          title: "Global Research",
          description: "Access curated global market intelligence with Flash Insights and macro-economic context for every asset in your portfolio.",
          badge: "Global",
        },
        alerts: {
          title: "Risk Alerts",
          description: "Stay ahead of market volatility with intelligent risk alerts. Receive instant notifications when your portfolio deviates from your target risk profile.",
          badge: "Smart Alerts",
        },
        rebalancing: {
          title: "Auto Rebalancing",
          description: "Keep your portfolio aligned with your goals through AI-driven rebalancing suggestions that optimize for return, risk, and liquidity simultaneously.",
          badge: "Automated",
        },
        multiAsset: {
          title: "Multi-Asset Classes",
          description: "Manage crypto bots, real estate, bonds, mutual funds, and bank CDAs — all in one unified platform with cross-asset performance benchmarking.",
          badge: "Unified",
        },
        security: {
          title: "Bank-Grade Security",
          description: "256-bit encryption, biometric authentication, and SOC 2 Type II compliance protect your wealth data at every layer.",
          badge: "Secure",
        },
      },
      showcase: {
        title: "One app. Every angle of your wealth.",
        subtitle: "From portfolio management to AI-powered projections — all in a unified, beautifully designed interface.",
        screens: {
          portfolio: {
            title: "Portfolio Overview",
            desc: "Full multi-asset view with real-time P&L tracking across all positions.",
          },
          projections: {
            title: "Growth Projections",
            desc: "Compound interest modeling with reinvestment simulations up to 30 years.",
          },
          analyst: {
            title: "AI Analyst",
            desc: "Conversational AI that understands your portfolio and answers financial questions.",
          },
        },
      },
      ecosystem: {
        title: "The CoreCapital Ecosystem",
        subtitle: "Seamlessly manage both traditional and tokenized assets in one unified platform.",
        traditional: {
          title: "Traditional Financial Assets",
          description: "Real estate, bonds, mutual funds, bank CDAs, and more — all consolidated in one dashboard with institutional-grade analytics.",
          features: ["Real Estate", "Corporate Bonds", "Bank CDAs", "Mutual Funds", "Commodities", "Private Equity"],
        },
        tokenized: {
          title: "Tokenized Real-World Assets",
          description: "Real estate, corporate bonds, farmland, livestock, and trade receivables brought on-chain. Own fractional stakes, earn periodic yield, and settle instantly with full on-chain transparency.",
          features: ["Real Estate", "Corporate Bonds", "Farmland & Ranches", "Trade Receivables", "Fractional Ownership", "On-Chain Yield"],
        },
      },
    },
    // Analytics Dashboard
    analytics: {
      badge: "Live Portfolio Analytics",
      title1: "Your wealth,",
      title2: "at a glance",
      subtitle: "Real-time capital tracking, income projections, and asset-class breakdowns — all in one unified dashboard.",
      stats: {
        totalCapital: {
          label: "Total Capital",
          sub: "Total invested capital",
        },
        avgTanInterest: {
          label: "AVG TAN Interest",
          sub: "Avg. rate of interest assets",
        },
        interestMonth: {
          label: "Interest / Month",
          sub: "Monthly net income",
        },
        capitalAppreciation: {
          label: "Capital Appreciation",
          sub: "Capital in appreciation assets",
        },
        avgTanCapital: {
          label: "AVG TAN Capital",
          sub: "Avg. rate of appreciation assets",
        },
        appreciationMonth: {
          label: "Appreciation / Month",
          sub: "Estimated monthly appreciation",
        },
      },
      portfolio: "Portfolio",
      capitalization: {
        label: "Capitalization / Month",
        sub: "Estimated monthly reinvestment",
      },
      detail: "Detail by Asset Type",
    },
    // AI Engines
    aiEngines: {
      badge: "AI-Powered Capabilities",
      title1: "Three AI engines,",
      title2: "one platform",
      subtitle: "CoreCapital leverages cutting-edge AI to deliver real-time market insights, automated portfolio optimization, and conversational financial intelligence.",
      engines: {
        marketPulse: {
          title: "Smart Market Pulse",
          description: "Real-time market sentiment analysis powered by GPT-4. Get instant insights on macro trends, sector rotations, and emerging opportunities tailored to your portfolio composition.",
          badge: "Real-Time",
          features: [
            "Macro-economic sentiment tracking",
            "Sector rotation alerts",
            "Flash insights on portfolio holdings",
            "News impact analysis",
          ],
        },
        rebalancing: {
          title: "Algorithmic Rebalancing",
          description: "AI-driven portfolio optimization that continuously monitors your asset allocation and suggests rebalancing actions to maintain your target risk-return profile.",
          badge: "Automated",
          features: [
            "Target allocation monitoring",
            "Tax-efficient rebalancing",
            "Risk-adjusted recommendations",
            "Liquidity-aware execution",
          ],
        },
        conversational: {
          title: "Conversational Intelligence",
          description: "Chat with your portfolio. Ask complex financial questions and get instant, data-driven answers from an AI that understands your complete wealth picture.",
          badge: "Conversational",
          features: [
            "Natural language queries",
            "Portfolio-aware responses",
            "Scenario modeling",
            "Comparative analysis",
          ],
        },
      },
    },
    // Tokenization
    tokenization: {
      badge: "Real-World Asset Tokenization",
      title1: "Real assets,",
      title2: "made liquid",
      subtitle: "CoreCapital turns real-world assets — property, bonds, farmland and more — into fractional, tradable tokens. Institutional-grade access, opened to every investor.",
      stepsLabel: "How it works",
      steps: [
        {
          title: "Sourced & audited",
          desc: "Each asset is verified against legal title, registry and ownership records, and independently valued before it ever goes on-chain.",
        },
        {
          title: "Tokenized on-chain",
          desc: "A smart contract is deployed and the asset is split into fractional tokens, each backed 1:1 by the real underlying asset.",
        },
        {
          title: "Own a fraction",
          desc: "Buy fractional stakes and settle T+0 — no clearing delays, no gatekeepers, full transparency.",
        },
        {
          title: "Earn & redeem",
          desc: "Collect periodic yield straight to your wallet, resell on the secondary market, or redeem capital plus interest at maturity.",
        },
      ],
      assetsLabel: "What you can own",
      assets: [
        "Real Estate",
        "Corporate Bonds",
        "Farmland & Ranches",
        "Livestock",
        "Trade Receivables",
        "Machinery",
        "Agri-Commodities",
        "Infrastructure & Energy",
      ],
      benefitsLabel: "Why tokenize with CoreCapital",
      benefits: [
        {
          title: "Fractional ownership",
          desc: "Own a slice of a multi-million-dollar property or a corporate bond — diversify across assets you couldn't buy whole.",
        },
        {
          title: "Instant T+0 settlement",
          desc: "Trades settle on-chain in minutes, not days. No traditional clearing, no counterparty limbo.",
        },
        {
          title: "Periodic yield",
          desc: "Fixed-income assets pay interest, rent or coupons (TAN) auto-credited to your wallet — monthly, quarterly or annually.",
        },
        {
          title: "Built-in liquidity",
          desc: "Exit when you need to. List tokens on the peer-to-peer secondary market at the price you choose.",
        },
        {
          title: "Redemption at maturity",
          desc: "At maturity, tokens are redeemed at par plus accrued yield — or repurchased by the issuer.",
        },
        {
          title: "Audited, real backing",
          desc: "Every token is backed by a real, legally registered asset with a verified issuer (RUC) and documents on file.",
        },
      ],
      stats: [
        { value: "$16T", label: "Projected RWA market by 2030" },
        { value: "T+0", label: "On-chain settlement" },
        { value: "24/7", label: "Secondary market access" },
        { value: "100%", label: "Asset-backed & audited" },
      ],
      cta: "Accede al pre-lanzamiento",
    },
    // Pricing
    pricing: {
      badge: "Flexible Pricing",
      title1: "Choose your",
      title2: "wealth journey",
      subtitle: "Start free, upgrade when you need advanced AI capabilities. All plans include bank-grade security and real-time analytics.",
      tiers: {
        explorer: {
          name: "Explorer",
          description: "Start managing your wealth with core portfolio tools.",
          features: [
            "Manual asset consolidation",
            "Basic portfolio analytics",
            "Monthly performance reports",
            "Email support",
            "Mobile app access",
          ],
        },
        essential: {
          name: "Essential",
          description: "Unlock advanced analytics and automated workflows.",
          features: [
            "Everything in Explorer",
            "Auto asset sync",
            "Advanced analytics dashboard",
            "Risk scoring & alerts",
            "Priority email support",
            "API access",
          ],
        },
        insightAI: {
          name: "Insight AI",
          description: "Get AI-powered market insights and projections.",
          features: [
            "Everything in Essential",
            "Smart Market Pulse AI",
            "Growth projections (30 years)",
            "Flash Insights",
            "Chat support",
            "Custom reports",
          ],
        },
        strategistAI: {
          name: "Strategist AI",
          description: "Full AI suite with conversational intelligence.",
          features: [
            "Everything in Insight AI",
            "Conversational AI Analyst",
            "Algorithmic rebalancing",
            "Tax optimization",
            "Dedicated account manager",
            "White-glove onboarding",
          ],
        },
      },
      cta: "Get Started",
      month: "month",
    },
    // Social Proof
    socialProof: {
      badge: "Trusted by Investors",
      title1: "Join the",
      title2: "new generation",
      title3: "of wealth builders",
      subtitle: "Tech-savvy investors around the world trust CoreCapital to manage their multi-asset portfolios.",
    },
    // CTA / Footer
    cta: {
      badge: "Ready to Get Started?",
      title1: "Start building wealth",
      title2: "smarter",
      title3: "today",
      subtitle: "Join thousands of investors using AI to grow their portfolios. No credit card required.",
      button: "Accede al pre-lanzamiento",
      headline1: "Your wealth intelligence",
      headline2: "starts today",
      finalSubtitle: "Join 150,000+ tech-savvy investors already growing their wealth with AI-driven insights. No minimums. No gatekeepers. Just results.",
      perks: [
        "Free 30-day trial, no credit card",
        "Cancel anytime",
        "Bank-grade encryption",
        "24/7 AI analyst access",
      ],
      brandTagline: "Wealth Intelligence Platform",
      rightsShort: "All rights reserved.",
      footer: {
        tagline: "AI-powered wealth management for the modern investor.",
        product: "Product",
        features: "Features",
        pricing: "Pricing",
        security: "Security",
        company: "Company",
        about: "About",
        blog: "Blog",
        careers: "Careers",
        legal: "Legal",
        privacy: "Privacy",
        terms: "Terms",
        cookies: "Cookies",
        rights: "All rights reserved.",
      },
    },
  },
  es: {
    // Navbar
    nav: {
      home: "Inicio",
      features: "Funciones",
      analytics: "Analíticas",
      capabilities: "Capacidades",
      tokenization: "Tokenización",
      contact: "Contacto",
      getStarted: "Comenzar",
    },
    // Hero
    hero: {
      badge: "Gestión de Patrimonio con IA",
      title1: "Tu patrimonio,",
      title2: "reimaginado",
      subtitle: "CoreCapital es la primera plataforma de gestión de patrimonio nativa de IA diseñada para inversores tech-savvy. Consolida todos tus activos, obtén análisis de nivel institucional y aprovecha la IA conversacional para hacer crecer tu portafolio.",
      cta: "Accede al pre-lanzamiento",
      contactCta: "Contactarse",
      tokenizationCta: "Explorar tokenización",
      watchDemo: "Ver Demo",
      stats: {
        assets: "Mercado RWA Proyectado (2030)",
        growth: "Liquidación de Rendimientos",
        users: "Activos Físicos Auditados",
      }
    },
    // Features
    features: {
      badge: "Todo lo que Necesitas",
      title1: "Herramientas institucionales,",
      title2: "democratizadas",
      subtitle: "CoreCapital trae el poder de una oficina familiar a inversores individuales — sin las tarifas, intermediarios o complejidad.",
      cards: {
        aiAnalyst: {
          title: "Analista de Cartera IA",
          description: "Tu Analista Senior de Patrimonio personal impulsado por IA. Obtén información de rendimiento en tiempo real, puntuación de riesgos y recomendaciones estratégicas adaptadas a tu perfil.",
          badge: "Con IA",
        },
        analytics: {
          title: "Analíticas Avanzadas",
          description: "Profundiza en el rendimiento de tu cartera con análisis de nivel institucional. Rastrea tasas TAN, apreciación de capital y flujos de ingresos mensuales de un vistazo.",
          badge: "Tiempo Real",
        },
        projections: {
          title: "Proyecciones de Crecimiento",
          description: "Simula escenarios de crecimiento compuesto en tus activos de interés y ganancia de capital. Modela hasta 30 años de acumulación de riqueza con cálculos de reinversión.",
          badge: "Predictivo",
        },
        research: {
          title: "Investigación Global",
          description: "Accede a inteligencia de mercado global curada con Flash Insights y contexto macroeconómico para cada activo en tu cartera.",
          badge: "Global",
        },
        alerts: {
          title: "Alertas de Riesgo",
          description: "Mantente adelante de la volatilidad del mercado con alertas de riesgo inteligentes. Recibe notificaciones instantáneas cuando tu cartera se desvía de tu perfil de riesgo objetivo.",
          badge: "Alertas Inteligentes",
        },
        rebalancing: {
          title: "Rebalanceo Automático",
          description: "Mantén tu cartera alineada con tus objetivos a través de sugerencias de rebalanceo impulsadas por IA que optimizan rendimiento, riesgo y liquidez simultáneamente.",
          badge: "Automatizado",
        },
        multiAsset: {
          title: "Múltiples Clases de Activos",
          description: "Gestiona bots de crypto, bienes raíces, bonos, fondos mutuos y CDAs bancarios — todo en una plataforma unificada con benchmarking de rendimiento entre activos.",
          badge: "Unificado",
        },
        security: {
          title: "Seguridad Nivel Bancario",
          description: "Encriptación de 256 bits, autenticación biométrica y cumplimiento SOC 2 Type II protegen tus datos financieros en cada capa.",
          badge: "Seguro",
        },
      },
      showcase: {
        title: "Una app. Todos los ángulos de tu patrimonio.",
        subtitle: "Desde gestión de cartera hasta proyecciones con IA — todo en una interfaz unificada y bellamente diseñada.",
        screens: {
          portfolio: {
            title: "Vista de Cartera",
            desc: "Vista completa de múltiples activos con seguimiento de P&L en tiempo real en todas las posiciones.",
          },
          projections: {
            title: "Proyecciones de Crecimiento",
            desc: "Modelado de interés compuesto con simulaciones de reinversión hasta 30 años.",
          },
          analyst: {
            title: "Analista IA",
            desc: "IA conversacional que entiende tu cartera y responde preguntas financieras.",
          },
        },
      },
      ecosystem: {
        title: "El Ecosistema CoreCapital",
        subtitle: "Gestiona sin problemas tanto activos tradicionales como tokenizados en una plataforma unificada.",
        traditional: {
          title: "Activos Financieros Tradicionales",
          description: "Bienes raíces, bonos, fondos mutuos, CDAs bancarios y más — todo consolidado en un tablero con análisis de nivel institucional.",
          features: ["Bienes Raíces", "Bonos Corporativos", "CDAs Bancarios", "Fondos Mutuos", "Commodities", "Private Equity"],
        },
        tokenized: {
          title: "Activos del Mundo Real Tokenizados",
          description: "Inmuebles, bonos corporativos, campos, ganado y facturas cambiarias llevados on-chain. Posee fracciones, gana rendimientos periódicos y liquida al instante con transparencia on-chain total.",
          features: ["Inmuebles", "Bonos Corporativos", "Campos y Estancias", "Facturas Cambiarias", "Propiedad Fraccionada", "Rendimiento On-Chain"],
        },
      },
    },
    // Analytics Dashboard
    analytics: {
      badge: "Analíticas de Cartera en Vivo",
      title1: "Tu patrimonio,",
      title2: "de un vistazo",
      subtitle: "Seguimiento de capital en tiempo real, proyecciones de ingresos y desglose por clase de activo — todo en un tablero unificado.",
      stats: {
        totalCapital: {
          label: "Capital Total",
          sub: "Capital invertido total",
        },
        avgTanInterest: {
          label: "TAN Interés Prom.",
          sub: "Tasa promedio de activos de interés",
        },
        interestMonth: {
          label: "Interés / Mes",
          sub: "Ingreso neto mensual",
        },
        capitalAppreciation: {
          label: "Apreciación de Capital",
          sub: "Capital en activos de apreciación",
        },
        avgTanCapital: {
          label: "TAN Capital Prom.",
          sub: "Tasa promedio de activos de apreciación",
        },
        appreciationMonth: {
          label: "Apreciación / Mes",
          sub: "Apreciación mensual estimada",
        },
      },
      portfolio: "Cartera",
      capitalization: {
        label: "Capitalización / Mes",
        sub: "Reinversión mensual estimada",
      },
      detail: "Detalle por Tipo de Activo",
    },
    // AI Engines
    aiEngines: {
      badge: "Capacidades con IA",
      title1: "Tres motores de IA,",
      title2: "una plataforma",
      subtitle: "CoreCapital aprovecha IA de vanguardia para entregar información de mercado en tiempo real, optimización automática de cartera e inteligencia financiera conversacional.",
      engines: {
        marketPulse: {
          title: "Pulso de Mercado Inteligente",
          description: "Análisis de sentimiento de mercado en tiempo real impulsado por GPT-4. Obtén información instantánea sobre tendencias macro, rotaciones de sectores y oportunidades emergentes adaptadas a la composición de tu cartera.",
          badge: "Tiempo Real",
          features: [
            "Seguimiento de sentimiento macroeconómico",
            "Alertas de rotación sectorial",
            "Flash insights sobre holdings de cartera",
            "Análisis de impacto de noticias",
          ],
        },
        rebalancing: {
          title: "Rebalanceo Algorítmico",
          description: "Optimización de cartera impulsada por IA que monitorea continuamente tu asignación de activos y sugiere acciones de rebalanceo para mantener tu perfil de riesgo-retorno objetivo.",
          badge: "Automatizado",
          features: [
            "Monitoreo de asignación objetivo",
            "Rebalanceo eficiente en impuestos",
            "Recomendaciones ajustadas por riesgo",
            "Ejecución consciente de liquidez",
          ],
        },
        conversational: {
          title: "Inteligencia Conversacional",
          description: "Chatea con tu cartera. Haz preguntas financieras complejas y obtén respuestas instantáneas basadas en datos de una IA que entiende tu panorama completo de patrimonio.",
          badge: "Conversacional",
          features: [
            "Consultas en lenguaje natural",
            "Respuestas conscientes de cartera",
            "Modelado de escenarios",
            "Análisis comparativo",
          ],
        },
      },
    },
    // Tokenization
    tokenization: {
      badge: "Tokenización de Activos del Mundo Real",
      title1: "Activos reales,",
      title2: "hechos líquidos",
      subtitle: "CoreCapital convierte activos del mundo real — inmuebles, bonos, campos y más — en tokens fraccionados y negociables. Acceso de nivel institucional, abierto a todo inversor.",
      stepsLabel: "Cómo funciona",
      steps: [
        {
          title: "Originado y auditado",
          desc: "Cada activo se verifica contra título legal, registros de propiedad y catastrales, y se valúa de forma independiente antes de llevarlo on-chain.",
        },
        {
          title: "Tokenizado on-chain",
          desc: "Se despliega un smart contract y el activo se divide en tokens fraccionados, cada uno respaldado 1:1 por el activo real subyacente.",
        },
        {
          title: "Posee una fracción",
          desc: "Compra participaciones fraccionadas y liquida en T+0 — sin demoras de compensación, sin intermediarios, con total transparencia.",
        },
        {
          title: "Gana y rescata",
          desc: "Cobra rendimientos periódicos directo a tu wallet, revende en el mercado secundario o rescata capital más intereses al vencimiento.",
        },
      ],
      assetsLabel: "Lo que puedes poseer",
      assets: [
        "Inmuebles",
        "Bonos Corporativos",
        "Campos y Estancias",
        "Ganado",
        "Facturas Cambiarias",
        "Maquinaria",
        "Commodities Agrícolas",
        "Infraestructura y Energía",
      ],
      benefitsLabel: "Por qué tokenizar con CoreCapital",
      benefits: [
        {
          title: "Propiedad fraccionada",
          desc: "Posee una parte de un inmueble millonario o un bono corporativo — diversifica en activos que no podrías comprar enteros.",
        },
        {
          title: "Liquidación instantánea T+0",
          desc: "Las operaciones liquidan on-chain en minutos, no en días. Sin compensación tradicional, sin esperas de contraparte.",
        },
        {
          title: "Rendimiento periódico",
          desc: "Los activos de renta fija pagan intereses, renta o cupones (TAN) acreditados automáticamente a tu wallet — mensual, trimestral o anual.",
        },
        {
          title: "Liquidez incorporada",
          desc: "Sal cuando lo necesites. Lista tus tokens en el mercado secundario entre pares al precio que elijas.",
        },
        {
          title: "Rescate al vencimiento",
          desc: "Al vencimiento, los tokens se rescatan a la par más el rendimiento acumulado — o los recompra el emisor.",
        },
        {
          title: "Respaldo real y auditado",
          desc: "Cada token está respaldado por un activo real, legalmente registrado, con emisor verificado (RUC) y documentos en archivo.",
        },
      ],
      stats: [
        { value: "$16T", label: "Mercado RWA proyectado a 2030" },
        { value: "T+0", label: "Liquidación on-chain" },
        { value: "24/7", label: "Acceso al mercado secundario" },
        { value: "100%", label: "Respaldado y auditado" },
      ],
      cta: "Accede al pre-lanzamiento",
    },
    // Pricing
    pricing: {
      badge: "Precios Flexibles",
      title1: "Elige tu",
      title2: "viaje de patrimonio",
      subtitle: "Comienza gratis, actualiza cuando necesites capacidades avanzadas de IA. Todos los planes incluyen seguridad de nivel bancario y analíticas en tiempo real.",
      tiers: {
        explorer: {
          name: "Explorador",
          description: "Comienza a gestionar tu patrimonio con herramientas básicas de cartera.",
          features: [
            "Consolidación manual de activos",
            "Analíticas básicas de cartera",
            "Reportes mensuales de rendimiento",
            "Soporte por email",
            "Acceso a app móvil",
          ],
        },
        essential: {
          name: "Esencial",
          description: "Desbloquea analíticas avanzadas y flujos de trabajo automatizados.",
          features: [
            "Todo en Explorador",
            "Sincronización automática de activos",
            "Tablero de analíticas avanzadas",
            "Puntuación de riesgo y alertas",
            "Soporte prioritario por email",
            "Acceso API",
          ],
        },
        insightAI: {
          name: "Insight AI",
          description: "Obtén información de mercado y proyecciones impulsadas por IA.",
          features: [
            "Todo en Esencial",
            "IA Pulso de Mercado Inteligente",
            "Proyecciones de crecimiento (30 años)",
            "Flash Insights",
            "Soporte por chat",
            "Reportes personalizados",
          ],
        },
        strategistAI: {
          name: "Estratega AI",
          description: "Suite completa de IA con inteligencia conversacional.",
          features: [
            "Todo en Insight AI",
            "Analista IA Conversacional",
            "Rebalanceo algorítmico",
            "Optimización fiscal",
            "Gerente de cuenta dedicado",
            "Onboarding personalizado",
          ],
        },
      },
      cta: "Comenzar",
      month: "mes",
    },
    // Social Proof
    socialProof: {
      badge: "Confianza de Inversores",
      title1: "Únete a la",
      title2: "nueva generación",
      title3: "de constructores de patrimonio",
      subtitle: "Inversores tech-savvy en todo el mundo confían en CoreCapital para gestionar sus carteras multi-activo.",
    },
    // CTA / Footer
    cta: {
      badge: "¿Listo para Comenzar?",
      title1: "Comienza a construir patrimonio",
      title2: "más inteligente",
      title3: "hoy",
      subtitle: "Únete a miles de inversores usando IA para hacer crecer sus carteras. No se requiere tarjeta de crédito.",
      button: "Accede al pre-lanzamiento",
      headline1: "Tu inteligencia patrimonial",
      headline2: "comienza hoy",
      finalSubtitle: "Únete a más de 150.000 inversores tech-savvy que ya hacen crecer su patrimonio con análisis impulsados por IA. Sin mínimos. Sin intermediarios. Solo resultados.",
      perks: [
        "Prueba gratis de 30 días, sin tarjeta de crédito",
        "Cancela cuando quieras",
        "Encriptación de nivel bancario",
        "Acceso al analista IA 24/7",
      ],
      brandTagline: "Plataforma de Inteligencia Patrimonial",
      rightsShort: "Todos los derechos reservados.",
      footer: {
        tagline: "Gestión de patrimonio con IA para el inversor moderno.",
        product: "Producto",
        features: "Funciones",
        pricing: "Precios",
        security: "Seguridad",
        company: "Compañía",
        about: "Acerca de",
        blog: "Blog",
        careers: "Carreras",
        legal: "Legal",
        privacy: "Privacidad",
        terms: "Términos",
        cookies: "Cookies",
        rights: "Todos los derechos reservados.",
      },
    },
  },
};

export type TranslationKey = typeof translations.en;
