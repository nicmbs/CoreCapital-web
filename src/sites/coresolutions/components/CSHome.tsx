import { motion } from "motion/react";
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

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-x-clip overflow-y-visible"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full overflow-visible">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 overflow-visible">
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
              style={{
                backgroundColor: `${csBrand.blueBright}18`,
                border: `1px solid ${csBrand.blueBright}40`,
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: csBrand.blueBright }}
              />
              <span className="text-sm font-medium" style={{ color: csBrand.blueBright }}>
                {t.aboutBadge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-12"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: surface.fg,
              }}
            >
              {t.tagline}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
            >
              <h2
                className="mb-4"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: csBrand.blueBright,
                }}
              >
                {t.aboutTitle}
              </h2>
              <div
                className="space-y-4 max-w-xl mx-auto lg:mx-0"
                style={{ fontSize: "1.05rem", lineHeight: 1.7, color: surface.muted }}
              >
                <p>
                  {t.aboutP1Before}
                  <span style={{ color: csBrand.blueBright, fontWeight: 600 }}>{t.aboutP1Accent}</span>
                  {t.aboutP1After}
                </p>
                <p>{t.aboutP2}</p>
                <p>{t.aboutP3}</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full max-w-lg lg:max-w-xl overflow-visible relative z-10"
          >
            <CSAiOrb />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
