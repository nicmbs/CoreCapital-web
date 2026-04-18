import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check, Sparkles, MessageSquare, BarChart2, Zap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const tierIcons = [
  { id: "explorer", icon: BarChart2, color: "#ffffff", bgColor: "#ffffff08", borderColor: "#ffffff12" },
  { id: "essential", icon: Zap, color: "#00d4ff", bgColor: "#00d4ff08", borderColor: "#00d4ff20" },
  { id: "insightAI", icon: Sparkles, color: "#39FF71", bgColor: "#39FF7112", borderColor: "#39FF7130", popular: true },
  { id: "strategistAI", icon: MessageSquare, color: "#a78bfa", bgColor: "#a78bfa08", borderColor: "#a78bfa25" },
];

const tierPrices = [0, 7, 15, 25];

export function Pricing() {
  const { language } = useLanguage();
  const t = translations[language].pricing;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="relative bg-[#0a0b0f] py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF71]/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#39FF71]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#39FF71]/10 border border-[#39FF71]/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-[#39FF71] text-sm font-medium">{t.badge}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-4"
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
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 max-w-xl mx-auto"
            style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tierIcons.map((tier, i) => {
            const Icon = tier.icon;
            const tierData = t.tiers[tier.id as keyof typeof t.tiers];
            const price = tierPrices[i];
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative bg-[#111318] border rounded-3xl p-6 hover:-translate-y-1 transition-all duration-300 ${
                  tier.popular ? "border-[#39FF71]/30" : "border-white/6 hover:border-white/12"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="bg-[#39FF71] text-[#0a0b0f] text-xs font-bold px-3 py-1.5 rounded-full">
                      {language === "en" ? "Most Popular" : "Más Popular"}
                    </div>
                  </div>
                )}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at top, ${tier.bgColor}, transparent 70%)` }}
                />
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: tier.bgColor, border: `1px solid ${tier.borderColor}` }}
                  >
                    <Icon size={22} style={{ color: tier.color }} />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">{tierData.name}</h3>
                  <p className="text-white/45 text-sm mb-5 min-h-[40px]">{tierData.description}</p>
                  <div className="mb-6">
                    <span className="text-white text-4xl font-bold">${price}</span>
                    <span className="text-white/40 text-sm ml-2">/ {t.month}</span>
                  </div>
                  <a
                    href="https://app.corecapitalpy.com"
                    className="block w-full text-center bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 rounded-xl text-sm transition-all duration-200 mb-6"
                    style={
                      tier.popular
                        ? {
                            background: "#39FF71",
                            color: "#0a0b0f",
                            borderColor: "#39FF71",
                          }
                        : {}
                    }
                  >
                    {t.cta}
                  </a>
                  <ul className="space-y-3">
                    {tierData.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check size={16} className="text-[#39FF71] shrink-0 mt-0.5" />
                        <span className="text-white/60 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
