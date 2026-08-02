import { useLanguage } from "../../app/context/LanguageContext";
import { useTheme } from "../../app/context/ThemeContext";
import { CSNavbar } from "./components/CSNavbar";
import { CSHome } from "./components/CSHome";
import { CSSolutionSection } from "./components/CSSolutionSection";
import { csBrand, csTheme } from "./brand";
import { csTranslations } from "./content";

/**
 * CoreSolutions marketing site — structured for a future dedicated domain.
 * Assets live under /public/cs/
 */
export default function CoreSolutionsPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = csTranslations[language];
  const surface = csTheme(theme);

  return (
    <div
      className="cs-root relative min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: surface.bg,
        color: surface.fg,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Fixed atmosphere — figure lives as animated orb in Inicio */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: surface.atmosphereOpacity,
            backgroundImage: "url(/cs/page-atmosphere.png)",
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{ background: surface.overlay }}
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
