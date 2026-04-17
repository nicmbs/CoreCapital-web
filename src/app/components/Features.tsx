import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Brain,
  BarChart3,
  TrendingUp,
  Shield,
  Bell,
  Globe,
  RefreshCw,
  DollarSign,
  Building2,
  Coins,
} from "lucide-react";
import portfolioImage from "figma:asset/9a40648c48af599d413c9760fdc4092b60406d44.png";
import projectionsImage from "figma:asset/23f41271582607d2a1db782f60a3fd4b0be255ca.png";
import analystImage from "figma:asset/a7a3efe018ee449ae6db95814c5f83259bc82389.png";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const featureIcons = [
  { id: "aiAnalyst", icon: Brain, color: "#39FF71" },
  { id: "analytics", icon: BarChart3, color: "#00d4ff" },
  { id: "projections", icon: TrendingUp, color: "#a78bfa" },
  { id: "research", icon: Globe, color: "#39FF71" },
  { id: "alerts", icon: Bell, color: "#f59e0b" },
  { id: "rebalancing", icon: RefreshCw, color: "#00d4ff" },
  { id: "multiAsset", icon: DollarSign, color: "#a78bfa" },
  { id: "security", icon: Shield, color: "#39FF71" },
];

function FeatureCard({ feature, index }: { feature: typeof featureIcons[0]; index: number }) {
  const { language } = useLanguage();
  const t = translations[language].features.cards[feature.id as keyof typeof translations.en.features.cards];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className="group relative bg-[#111318] border border-white/6 rounded-2xl p-6 hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at top left, ${feature.color}08 0%, transparent 60%)`,
        }}
      />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${feature.color}15` }}
          >
            <Icon size={20} style={{ color: feature.color }} />
          </div>
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              color: feature.color,
              backgroundColor: `${feature.color}15`,
              border: `1px solid ${feature.color}25`,
            }}
          >
            {t.badge}
          </span>
        </div>
        <h3 className="text-white mb-2" style={{ fontSize: "1rem", fontWeight: 600 }}>
          {t.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed">{t.description}</p>
      </div>
    </motion.div>
  );
}

export function Features() {
  const { language } = useLanguage();
  const t = translations[language].features;
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  const screens = [
    { img: portfolioImage, key: "portfolio" },
    { img: projectionsImage, key: "projections" },
    { img: analystImage, key: "analyst" },
  ];

  return (
    <section id="features" className="relative bg-[#0a0b0f] py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF71]/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/3 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#39FF71]/10 border border-[#39FF71]/20 rounded-full px-4 py-1.5 mb-6"
          >
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
                background: "linear-gradient(135deg, #39FF71 0%, #00d4ff 100%)",
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
            className="text-white/50 max-w-xl mx-auto"
            style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {featureIcons.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>

        {/* App Showcase - 3 screens */}
        <div className="space-y-6">
          <div className="text-center mb-12">
            <h3
              className="text-white mb-3"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700 }}
            >
              {t.showcase.title}
            </h3>
            <p className="text-white/50 max-w-lg mx-auto text-sm">
              {t.showcase.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {screens.map((item, i) => {
              const screenData = t.showcase.screens[item.key as keyof typeof t.showcase.screens];
              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group relative bg-[#111318] border border-white/6 rounded-3xl overflow-hidden hover:border-white/15 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent z-10 pointer-events-none" />
                    <img
                      src={item.img}
                      alt={screenData.title}
                      className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-white mb-2" style={{ fontWeight: 600 }}>
                      {screenData.title}
                    </h4>
                    <p className="text-white/50 text-sm leading-relaxed">{screenData.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Ecosystem Cards */}
        <div className="mt-24 space-y-6">
          <div className="text-center mb-12">
            <h3
              className="text-white mb-3"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700 }}
            >
              {t.ecosystem.title}
            </h3>
            <p className="text-white/50 max-w-lg mx-auto text-sm">
              {t.ecosystem.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Traditional Assets Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="group relative bg-[#111318] border border-white/6 rounded-3xl p-8 hover:border-[#39FF71]/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#39FF71]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#39FF71]/15 flex items-center justify-center mb-6">
                  <Building2 size={28} className="text-[#39FF71]" />
                </div>
                <h4 className="text-white mb-3" style={{ fontSize: "1.35rem", fontWeight: 700 }}>
                  {t.ecosystem.traditional.title}
                </h4>
                <p className="text-white/50 mb-6 leading-relaxed">
                  {t.ecosystem.traditional.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {t.ecosystem.traditional.features.map((item: string, i: number) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-center gap-2 text-white/70 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#39FF71]" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tokenized Assets Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="group relative bg-[#111318] border border-white/6 rounded-3xl p-8 hover:border-[#00d4ff]/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00d4ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#00d4ff]/15 flex items-center justify-center mb-6">
                  <Coins size={28} className="text-[#00d4ff]" />
                </div>
                <h4 className="text-white mb-3" style={{ fontSize: "1.35rem", fontWeight: 700 }}>
                  {t.ecosystem.tokenized.title}
                </h4>
                <p className="text-white/50 mb-6 leading-relaxed">
                  {t.ecosystem.tokenized.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {t.ecosystem.tokenized.features.map((item: string, i: number) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-center gap-2 text-white/70 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
