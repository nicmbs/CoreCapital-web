import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle } from "lucide-react";
import logoImage from "figma:asset/587d4841ce1110b4d856258b2a922555fd7a1195.png";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { language } = useLanguage();
  const t = translations[language].cta;
  const perks = t.perks;

  return (
    <section className="relative bg-[#0a0b0f] py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF71]/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[500px] bg-[#39FF71]/5 rounded-full blur-[120px]" />
      </div>

      {/* Radial grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(var(--cc-accent-green-rgb),0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--cc-accent-green-rgb),0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-3xl overflow-hidden bg-[#111318] border border-[#39FF71]/20 shadow-[0_0_40px_rgba(57,255,113,0.2)]">
              <img src={logoImage} alt="CoreCapital" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -inset-2 bg-[#39FF71]/10 rounded-3xl blur-xl -z-10" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}
        >
          {t.headline1}{" "}
          <br className="hidden md:block" />
          <span
            style={{
              background: "linear-gradient(135deg, var(--cc-accent-green) 0%, var(--cc-accent-cyan) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.headline2}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 mb-10 max-w-xl mx-auto"
          style={{ fontSize: "1.1rem", lineHeight: 1.7 }}
        >
          {t.finalSubtitle}
        </motion.p>

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12"
        >
          {perks.map((perk) => (
            <div key={perk} className="flex items-center gap-2 text-white/50 text-sm">
              <CheckCircle size={14} className="text-[#39FF71]" />
              {perk}
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg overflow-hidden bg-[#111318]">
                <img src={logoImage} alt="CoreCapital" className="w-full h-full object-cover" />
              </div>
              <span className="text-white/60 text-sm">
                Core<span className="text-[#39FF71]">Capital</span> — {t.brandTagline}
              </span>
            </div>
            <a
              href="mailto:contacto@corecapitalpy.com"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              contacto@corecapitalpy.com
            </a>
            <p className="text-white/25 text-xs">© 2026 CoreCapital. {t.rightsShort}</p>
          </div>
        </div>
      </div>
    </section>
  );
}