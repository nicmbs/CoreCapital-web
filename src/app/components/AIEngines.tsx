import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Zap, RefreshCw, MessageSquare, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const engines = [
  {
    id: "marketPulse",
    icon: Zap,
    color: "#39FF71",
    gradient: "from-[#39FF71] to-[#00d4ff]",
  },
  {
    id: "rebalancing",
    icon: RefreshCw,
    color: "#00d4ff",
    gradient: "from-[#00d4ff] to-[#a78bfa]",
  },
  {
    id: "conversational",
    icon: MessageSquare,
    color: "#a78bfa",
    gradient: "from-[#a78bfa] to-[#39FF71]",
  },
];

function EngineCard({ engine, index }: { engine: typeof engines[0]; index: number }) {
  const { language } = useLanguage();
  const t = translations[language].aiEngines.engines[engine.id as keyof typeof translations.en.aiEngines.engines];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = engine.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-[#111318] border border-white/6 rounded-3xl p-8 hover:border-white/15 transition-all duration-300 overflow-hidden"
    >
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${engine.gradient}`}
        style={{ opacity: 0.03 }}
      />

      <div className="relative z-10">
        {/* Icon & Badge */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: `${engine.color}15` }}
          >
            <Icon size={26} style={{ color: engine.color }} />
          </div>
          <span
            className="text-xs font-medium px-3 py-1.5 rounded-full"
            style={{
              color: engine.color,
              backgroundColor: `${engine.color}15`,
              border: `1px solid ${engine.color}25`,
            }}
          >
            {t.badge}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-white mb-3" style={{ fontSize: "1.35rem", fontWeight: 700 }}>
          {t.title}
        </h3>
        <p className="text-white/50 mb-6 leading-relaxed">{t.description}</p>

        {/* Features */}
        <div className="space-y-3">
          {t.features.map((feature: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.15 + i * 0.08 }}
              className="flex items-start gap-2.5"
            >
              <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: engine.color }} />
              <span className="text-white/70 text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function AIEngines() {
  const { language } = useLanguage();
  const t = translations[language].aiEngines;
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="capabilities" className="relative bg-[#0a0b0f] py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF71]/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[#39FF71]/3 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-purple-500/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#39FF71]/10 border border-[#39FF71]/20 rounded-full px-4 py-1.5 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#39FF71] animate-pulse" />
            <span className="text-[#39FF71] text-sm font-medium">{t.badge}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            {t.title1}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #39FF71 0%, #00d4ff 50%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.title2}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto"
            style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Engine Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {engines.map((engine, i) => (
            <EngineCard key={engine.id} engine={engine} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
