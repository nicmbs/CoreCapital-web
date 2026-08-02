import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, Moon, Sun } from "lucide-react";
import { useLanguage } from "../../../app/context/LanguageContext";
import { useTheme } from "../../../app/context/ThemeContext";
import { csBrand, csTheme } from "../brand";
import { csTranslations } from "../content";

export function CSNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = csTranslations[language];
  const surface = csTheme(theme);
  const isLight = theme === "light";

  const links = [
    { label: t.nav.home, href: "#home" },
    ...t.sections.map((s) => ({ label: s.navLabel, href: `#${s.anchor}` })),
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const controlClass =
    "flex items-center gap-2 transition-colors duration-200 text-sm";
  const controlStyle = {
    color: surface.navLink,
  } as const;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              backgroundColor: surface.navScrolledBg,
              backdropFilter: "blur(20px)",
              borderBottom: `1px solid ${surface.navBorder}`,
            }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="font-semibold tracking-tight"
          style={{
            fontSize: "1.45rem",
            letterSpacing: "-0.01em",
            color: surface.fg,
          }}
        >
          Core<span style={{ color: csBrand.blueBright }}>Solutions</span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{ color: surface.navLink }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = surface.navLinkHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = surface.navLink;
              }}
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className={controlClass}
            style={controlStyle}
            title={t.nav.switchLang}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = surface.navLinkHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = surface.navLink;
            }}
          >
            <Globe size={16} />
            <span className="uppercase font-medium">{language}</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className={controlClass}
            style={controlStyle}
            title={isLight ? t.nav.themeDark : t.nav.themeLight}
            aria-label={isLight ? t.nav.themeDark : t.nav.themeLight}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = surface.navLinkHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = surface.navLink;
            }}
          >
            {isLight ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className={controlClass}
            style={controlStyle}
            title={t.nav.switchLang}
          >
            <Globe size={16} />
            <span className="uppercase font-medium">{language}</span>
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className={controlClass}
            style={controlStyle}
            aria-label={isLight ? t.nav.themeDark : t.nav.themeLight}
          >
            {isLight ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: surface.navLink }}
            aria-label={t.nav.openMenu}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-6 h-0.5 bg-current transition-all ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden px-6 py-4"
            style={{
              backgroundColor: surface.menuBg,
              borderTop: `1px solid ${surface.navBorder}`,
              backdropFilter: "blur(20px)",
            }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm"
                style={{
                  color: surface.navLink,
                  borderBottom: `1px solid ${surface.navBorder}`,
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setLanguage(language === "en" ? "es" : "en");
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 py-3 text-sm w-full"
              style={{
                color: surface.navLink,
                borderBottom: `1px solid ${surface.navBorder}`,
              }}
            >
              <Globe size={16} />
              <span>{t.nav.switchLang}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 py-3 text-sm w-full"
              style={{ color: surface.navLink }}
            >
              {isLight ? <Moon size={16} /> : <Sun size={16} />}
              <span>{isLight ? t.nav.themeDark : t.nav.themeLight}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
