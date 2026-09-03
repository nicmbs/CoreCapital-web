import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { Link, Navigate, useParams } from "react-router";
import { ArrowLeft, Globe, Moon, Sun } from "lucide-react";
import { useLanguage } from "../../app/context/LanguageContext";
import { useTheme } from "../../app/context/ThemeContext";
import { LEGAL_DOCS, LEGAL_DOC_ORDER, type LegalDocSlug } from "./legalDocs";
import "./legal.css";

const COPY = {
  es: {
    eyebrow: "Legal",
    back: "Volver al inicio",
    operator: "Plataforma operada por CORE SOLUTIONS E.A.S. — RUC 80177449-7 — Asunción, Paraguay.",
  },
  en: {
    eyebrow: "Legal",
    back: "Back to home",
    operator: "Platform operated by CORE SOLUTIONS E.A.S. — Tax ID 80177449-7 — Asunción, Paraguay.",
  },
} as const;

function isLegalDocSlug(value: string | undefined): value is LegalDocSlug {
  return !!value && value in LEGAL_DOCS;
}

/**
 * Documentos legales públicos (`/legal/:slug`).
 *
 * Deben quedar accesibles sin sesión y sin muros: Google los revisa al verificar
 * el cliente OAuth propio, y el conjunto legal exige que estén publicados antes
 * de enlazarlos desde el producto.
 */
export default function LegalPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  if (!isLegalDocSlug(slug)) {
    return <Navigate to={LEGAL_DOCS.terminos.path} replace />;
  }

  const light = theme === "light";
  const doc = LEGAL_DOCS[slug];
  const t = COPY[language];

  const palette = light
    ? {
        "--legal-fg": "#3d4653",
        "--legal-heading": "#0d1117",
        "--legal-muted": "#79828f",
        "--legal-accent": "#12A150",
        "--legal-border": "rgba(13, 17, 23, 0.1)",
        "--legal-quote-bg": "rgba(18, 161, 80, 0.06)",
        "--legal-code-bg": "rgba(13, 17, 23, 0.06)",
        "--legal-th-bg": "rgba(13, 17, 23, 0.03)",
        background: "#e8eef3",
      }
    : {
        "--legal-fg": "rgba(255, 255, 255, 0.68)",
        "--legal-heading": "#ffffff",
        "--legal-muted": "rgba(255, 255, 255, 0.4)",
        "--legal-accent": "#39FF71",
        "--legal-border": "rgba(255, 255, 255, 0.1)",
        "--legal-quote-bg": "rgba(57, 255, 113, 0.06)",
        "--legal-code-bg": "rgba(255, 255, 255, 0.08)",
        "--legal-th-bg": "rgba(255, 255, 255, 0.04)",
        background: "#0a0b0f",
      };

  const chrome = light ? "text-[#0d1117]" : "text-white";
  const subtle = light ? "text-[#0d1117]/50" : "text-white/40";
  const controlBtn = `flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-colors ${
    light
      ? "border-[#0d1117]/12 text-[#0d1117]/60 hover:text-[#0d1117]"
      : "border-white/10 text-white/60 hover:text-white"
  }`;

  return (
    <div
      className={`min-h-screen ${chrome}`}
      style={{ ...palette, fontFamily: "var(--cc-font-sans)" } as React.CSSProperties}
    >
      <div className="mx-auto w-full max-w-3xl px-5 py-8 sm:px-6 sm:py-12">
        <header>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/"
              className={`flex items-center gap-2 text-sm transition-colors ${
                light ? "text-[#0d1117]/60 hover:text-[#0d1117]" : "text-white/60 hover:text-white"
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
              {t.back}
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                className={controlBtn}
                aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
              >
                <Globe className="h-3.5 w-3.5" />
                {language === "es" ? "EN" : "ES"}
              </button>
              <button
                type="button"
                onClick={toggleTheme}
                className={controlBtn}
                aria-label={light ? "Modo oscuro" : "Modo claro"}
              >
                {light ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>

          <p className={`mt-8 text-xs uppercase tracking-[0.18em] ${subtle}`}>{t.eyebrow}</p>
          <span className="mt-2 block text-2xl font-semibold tracking-tight">
            Core<span className="text-[var(--legal-accent)]">Capital</span>
          </span>

          <nav className="mt-6 flex flex-wrap gap-2">
            {LEGAL_DOC_ORDER.map((key) => {
              const active = key === slug;
              return (
                <Link
                  key={key}
                  to={LEGAL_DOCS[key].path}
                  className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                    active
                      ? "border-[var(--legal-accent)] text-[var(--legal-accent)]"
                      : light
                        ? "border-[#0d1117]/12 text-[#0d1117]/55 hover:text-[#0d1117]"
                        : "border-white/10 text-white/50 hover:text-white"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {LEGAL_DOCS[key].title[language]}
                </Link>
              );
            })}
          </nav>
        </header>

        <article className="cc-legal mt-10">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkBreaks]}
            components={{
              // Las tablas de proveedores y plazos son anchas: el scroll vive en
              // el envoltorio para que la página no desborde en móvil.
              table: ({ children }) => (
                <div className="cc-legal-table-wrap">
                  <table>{children}</table>
                </div>
              ),
              a: ({ href, children }) =>
                href?.startsWith("/") ? (
                  <Link to={href}>{children}</Link>
                ) : (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
            }}
          >
            {doc.body[language]}
          </ReactMarkdown>
        </article>

        <footer className={`mt-14 border-t pt-6 text-xs ${subtle} ${light ? "border-[#0d1117]/10" : "border-white/10"}`}>
          <p>{t.operator}</p>
          <p className="mt-1">© {new Date().getFullYear()} CoreCapital</p>
        </footer>
      </div>
    </div>
  );
}
