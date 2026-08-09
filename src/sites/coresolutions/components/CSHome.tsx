import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../../app/context/LanguageContext";
import { useTheme } from "../../../app/context/ThemeContext";
import { csBrand, csTheme } from "../brand";
import { csTranslations } from "../content";
import { CSAiOrb } from "./CSAiOrb";

export function CSHome() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = csTranslations[language].home;
  const surface = csTheme(theme);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.4]);

  return (
    <>
      <section
        ref={heroRef}
        id="home"
        className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-x-clip overflow-y-visible"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full overflow-visible">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 overflow-visible">
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7 border"
                style={{
                  borderColor: `${csBrand.blueBright}40`,
                  backgroundColor: `${csBrand.blueBright}14`,
                }}
              >
                <span className="text-sm font-medium" style={{ color: csBrand.blueBright }}>
                  Software · AI systems
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.06 }}
                className="mb-6"
                style={{
                  fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.035em",
                  wordSpacing: "0.18em",
                  color: surface.fg,
                }}
              >
                {language === "es" ? (
                  <>
                    Ecosistemas de IA
                    <br />
                    <span
                      style={{
                        background: `linear-gradient(135deg, ${csBrand.blueBright} 0%, #60a5fa 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      orientados al negocio
                    </span>
                  </>
                ) : (
                  <>
                    AI ecosystems
                    <br />
                    <span
                      style={{
                        background: `linear-gradient(135deg, ${csBrand.blueBright} 0%, #60a5fa 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      built for business
                    </span>
                  </>
                )}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 }}
                className="mb-8 max-w-lg mx-auto lg:mx-0"
                style={{ fontSize: "1.05rem", lineHeight: 1.7, color: surface.muted }}
              >
                {t.aboutP2}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <a
                  href="#corecapital"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("corecapital")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className="inline-flex h-11 items-center justify-center gap-2 font-semibold px-7 rounded-xl text-sm border border-transparent transition-colors box-border"
                  style={{ backgroundColor: csBrand.blueBright, color: "#041018" }}
                >
                  {t.exploreCta}
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#adn"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("adn")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="inline-flex h-11 items-center justify-center gap-2 font-medium px-7 rounded-xl text-sm border transition-colors box-border"
                  style={{
                    borderColor: theme === "light" ? "rgba(10,11,15,0.28)" : "rgba(255,255,255,0.35)",
                    color: surface.fg,
                  }}
                >
                  {t.aboutTitle}
                </a>
              </motion.div>

            </div>

            <motion.div
              style={{ scale: orbScale, y: orbY, opacity: orbOpacity }}
              className="flex-1 w-full max-w-lg lg:max-w-xl overflow-visible relative z-10"
            >
              <CSAiOrb />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="adn" className="relative py-28 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-1/2 opacity-30 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, ${csBrand.blueBright}10)`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
            >
              <p
                className="text-[11px] uppercase tracking-[0.16em] mb-4"
                style={{ color: csBrand.blueBright, fontFamily: "var(--cc-font-mono)" }}
              >
                {t.aboutBadge}
              </p>
              <h2
                className="mb-4"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: surface.fg,
                }}
              >
                {t.aboutTitle}
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="space-y-5 rounded-2xl border p-6 md:p-8"
              style={{
                borderColor: surface.navBorder,
                backgroundColor: theme === "light" ? "rgba(255,255,255,0.7)" : "rgba(10,11,15,0.55)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: surface.muted,
              }}
            >
              <p>
                {t.aboutP1Before}
                <span style={{ color: csBrand.blueBright, fontWeight: 600 }}>{t.aboutP1Accent}</span>
                {t.aboutP1After}
              </p>
              <p>{t.aboutP2}</p>
              <p>{t.aboutP3}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
