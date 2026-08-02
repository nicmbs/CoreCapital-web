import { CSNavbar } from "./components/CSNavbar";
import { CSHome } from "./components/CSHome";
import { CSSolutionSection } from "./components/CSSolutionSection";
import { csBrand } from "./brand";
import { csSections } from "./content";

/**
 * CoreSolutions marketing site — structured for a future dedicated domain.
 * Assets live under /public/coresolutions/
 */
export default function CoreSolutionsPage() {
  return (
    <div
      className="cs-root relative min-h-screen text-white"
      style={{
        backgroundColor: csBrand.black,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Fixed atmosphere — figure lives as animated orb in Inicio */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url(/coresolutions/page-atmosphere.png)",
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.78) 45%, rgba(0,0,0,0.92) 100%), linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.4) 100%)",
          }}
        />
      </div>

      <div className="relative z-10">
        <CSNavbar />
        <CSHome />
        {csSections.map((section) => (
          <CSSolutionSection key={section.id} section={section} />
        ))}

        <footer className="border-t border-white/8 py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white font-semibold tracking-tight" style={{ fontSize: "1.1rem" }}>
              Core<span style={{ color: csBrand.blueBright }}>Solutions</span>
            </p>
            <p className="text-white/35 text-xs">
              © {new Date().getFullYear()} CoreSolutions. AI-powered ecosystems for business.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
