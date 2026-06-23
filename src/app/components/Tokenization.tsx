import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Building2,
  Landmark,
  Trees,
  Beef,
  FileText,
  Truck,
  Wheat,
  Zap,
  ShieldCheck,
  Boxes,
  Link2,
  Coins,
  Repeat,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

// Icon per asset type (order matches translations.tokenization.assets)
const assetIcons = [Building2, Landmark, Trees, Beef, FileText, Truck, Wheat, Zap];

// Icon per benefit (order matches translations.tokenization.benefits)
const benefitIcons = [Boxes, Zap, Coins, Repeat, CalendarCheck, ShieldCheck];

export function Tokenization() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { language } = useLanguage();
  const t = translations[language].tokenization;

  return (
    <section id="tokenization" className="relative bg-[#0a0b0f] py-28 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />

      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00d4ff]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#39FF71]/4 rounded-full blur-[140px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-full px-4 py-1.5 mb-6"
          >
            <Link2 size={14} className="text-[#00d4ff]" />
            <span className="text-[#00d4ff] text-sm font-medium">{t.badge}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            {t.title1}{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--cc-accent-cyan) 0%, var(--cc-accent-green) 100%)",
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
            className="text-white/50 max-w-2xl mx-auto"
            style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {t.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#111318] border border-white/6 rounded-2xl p-5 text-center"
            >
              <div
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, var(--cc-accent-green) 0%, var(--cc-accent-cyan) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                className="mb-1"
              >
                {stat.value}
              </div>
              <div className="text-white/40 text-xs leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* How it works — steps */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-[#00d4ff] text-xs uppercase tracking-[0.2em] font-semibold">
              {t.stepsLabel}
            </span>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#39FF71]/30 via-[#00d4ff]/30 to-[#39FF71]/30" />
            {t.steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-[#111318] border border-white/6 rounded-2xl p-6 hover:border-[#00d4ff]/25 transition-all duration-300"
              >
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#0a0b0f] border border-[#00d4ff]/30 flex items-center justify-center mb-5 mx-auto lg:mx-0">
                  <span
                    style={{ fontSize: "1.5rem", fontWeight: 700 }}
                    className="text-[#00d4ff]"
                  >
                    {i + 1}
                  </span>
                </div>
                <h4
                  className="text-white mb-2 text-center lg:text-left"
                  style={{ fontSize: "1.05rem", fontWeight: 700 }}
                >
                  {step.title}
                </h4>
                <p className="text-white/45 text-sm leading-relaxed text-center lg:text-left">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Two-column: Assets + Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Asset types */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col bg-[#111318] border border-white/6 rounded-3xl p-8"
          >
            <span className="text-[#39FF71] text-xs uppercase tracking-[0.2em] font-semibold">
              {t.assetsLabel}
            </span>
            <div className="grid grid-cols-2 gap-4 mt-6 flex-1 auto-rows-fr">
              {t.assets.map((asset, i) => {
                const Icon = assetIcons[i] ?? Boxes;
                return (
                  <motion.div
                    key={asset}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="flex flex-col items-center justify-center text-center gap-3 h-full min-h-[7rem] bg-[#0a0b0f] border border-white/6 rounded-2xl px-4 py-5 hover:border-[#39FF71]/25 transition-colors duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#39FF71]/12 flex items-center justify-center shrink-0">
                      <Icon size={26} className="text-[#39FF71]" />
                    </div>
                    <span className="text-white/70 text-sm font-medium leading-tight">{asset}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col bg-[#111318] border border-white/6 rounded-3xl p-8"
          >
            <span className="text-[#00d4ff] text-xs uppercase tracking-[0.2em] font-semibold">
              {t.benefitsLabel}
            </span>
            <div className="flex flex-col gap-5 mt-6 flex-1 justify-between">
              {t.benefits.map((benefit, i) => {
                const Icon = benefitIcons[i] ?? ShieldCheck;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/12 flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-[#00d4ff]" />
                    </div>
                    <div>
                      <h5 className="text-white text-[15px] font-semibold mb-1">{benefit.title}</h5>
                      <p className="text-white/45 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-14"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 bg-[#39FF71] text-[#0a0b0f] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#5dff8a] transition-all duration-200 shadow-[0_0_30px_rgba(57,255,113,0.3)]"
          >
            {t.cta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
