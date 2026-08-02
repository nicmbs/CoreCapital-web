import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../../../app/context/ThemeContext";
import { csProductAccent, csTheme, type CSProductKey } from "../brand";
import type { CSSection } from "../content";

export function CSSolutionSection({ section }: { section: CSSection }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { theme } = useTheme();
  const surface = csTheme(theme);
  const accent = csProductAccent(section.id as CSProductKey, theme);
  const glow = theme === "light" ? `${accent}33` : `${accent}66`;

  return (
    <section id={section.anchor} className="relative py-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}40, transparent)`,
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/3 right-0 w-[420px] h-[420px] rounded-full blur-[140px] pointer-events-none"
        style={{ backgroundColor: `${accent}14` }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{
              backgroundColor: `${accent}14`,
              border: `1px solid ${accent}35`,
            }}
          >
            <span className="text-sm font-medium" style={{ color: accent }}>
              {section.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-3"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              color: surface.fg,
            }}
          >
            <span style={{ color: surface.fg }}>{section.core}</span>
            <span style={{ color: accent }}>{section.name}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mb-4"
            style={{
              fontSize: "clamp(1.35rem, 2.8vw, 1.85rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: surface.fg,
            }}
          >
            {section.title1}{" "}
            <span
              style={{
                color: accent,
                fontWeight: 800,
                fontStyle: "italic",
                letterSpacing: "-0.03em",
                textShadow: `0 0 28px ${glow}`,
              }}
            >
              {section.title2}
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18 }}
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: surface.soft,
            }}
          >
            {section.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {section.highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.06 }}
              className="rounded-2xl border p-5 backdrop-blur-sm"
              style={{
                borderColor: `${accent}28`,
                backgroundColor: surface.cardBg,
              }}
            >
              <h3 className="font-semibold mb-2" style={{ fontSize: "1rem", color: surface.fg }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: surface.soft }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {section.ctaHref && section.ctaLabel && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.35 }}
          >
            <a
              href={section.ctaHref}
              className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-2xl text-sm transition-all duration-200"
              style={
                theme === "light" && section.id === "capital"
                  ? {
                      backgroundColor: `${accent}14`,
                      border: `1px solid ${accent}35`,
                      color: accent,
                    }
                  : {
                      backgroundColor: accent,
                      color: "#0a0b0f",
                      boxShadow: `0 0 28px ${theme === "light" ? `${accent}33` : `${accent}55`}`,
                    }
              }
            >
              {section.ctaLabel}
              <ArrowRight size={16} />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
