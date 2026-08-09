import { useLanguage } from "../../app/context/LanguageContext";
import { useTheme } from "../../app/context/ThemeContext";
import { InteractiveAtmosphere } from "../../app/components/InteractiveAtmosphere";
import { ScrollProgress } from "../../app/components/ScrollProgress";
import { CSNavbar } from "./components/CSNavbar";
import { CSHome } from "./components/CSHome";
import { CSSolutionSection } from "./components/CSSolutionSection";
import { csBrand, csTheme } from "./brand";
import { csTranslations } from "./content";
import "./cs-aurora.css";

/**
 * CoreSolutions marketing site — structured for a future dedicated domain.
 * Assets live under /public/cs/
 */
export default function CoreSolutionsPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = csTranslations[language];
  const surface = csTheme(theme);
  const isLight = theme === "light";

  return (
    <div
      className={`cs-root relative min-h-screen transition-colors duration-300 ${
        isLight ? "cs-theme-light" : "cs-theme-dark"
      }`}
      style={{
        backgroundColor: "transparent",
        color: surface.fg,
        fontFamily: "var(--cc-font-sans)",
      }}
    >
      <InteractiveAtmosphere variant="solutions" />
      <ScrollProgress color={csBrand.blueBright} />

      {/* Animated aurora atmosphere */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        <div
          className="cs-aurora-art"
          style={{
            opacity: surface.atmosphereOpacity,
            backgroundImage: "url(/cs/page-atmosphere.png)",
            filter: isLight ? "brightness(1.35) contrast(1.1) saturate(1.05)" : undefined,
          }}
        />
        <div className="cs-aurora-ribbon cs-aurora-ribbon-a" />
        <div className="cs-aurora-ribbon cs-aurora-ribbon-b" />
        <div className="cs-aurora-sheen" />
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: surface.overlay,
            opacity: isLight ? 1 : 0.85,
          }}
        />
      </div>

      <div className="relative z-10">
        <CSNavbar />
        <CSHome />
        {t.sections.map((section) => (
          <CSSolutionSection key={section.id} section={section} />
        ))}

        <footer className="py-10" style={{ borderTop: `1px solid ${surface.footerBorder}` }}>
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-semibold tracking-tight" style={{ fontSize: "1.1rem", color: surface.fg }}>
              Core<span style={{ color: csBrand.blueBright }}>Solutions</span>
            </p>
            <p className="text-xs" style={{ color: surface.faint }}>
              © {new Date().getFullYear()} CoreSolutions. {t.footer.tagline}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
