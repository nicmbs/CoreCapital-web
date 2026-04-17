import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: t.home, href: "#home" },
    { label: t.features, href: "#features" },
    { label: t.analytics, href: "#analytics" },
    { label: t.capabilities, href: "#capabilities" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0b0f]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand name only — no logo image */}
        <span className="text-white font-semibold tracking-tight" style={{ fontSize: "1.45rem", letterSpacing: "-0.01em" }}>
          Core<span className="text-[#39FF71]">Capital</span>
        </span>

        {/* Desktop Links + Get Started */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
            >
              {link.label}
            </a>
          ))}
          
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 text-sm"
            title={language === "en" ? "Cambiar a Español" : "Switch to English"}
          >
            <Globe size={16} />
            <span className="uppercase font-medium">{language}</span>
          </button>
          
          <a
            href="#pricing"
            className="bg-[#39FF71] text-[#0a0b0f] text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#5dff8a] transition-all duration-200 shadow-[0_0_20px_rgba(57,255,113,0.3)]"
          >
            {t.getStarted}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white/70 hover:text-white"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0b0f]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-white/70 hover:text-white py-3 text-sm border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Language Switcher */}
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="flex items-center gap-2 text-white/70 hover:text-white py-3 text-sm border-b border-white/5 w-full"
            >
              <Globe size={16} />
              <span>{language === "en" ? "Cambiar a Español" : "Switch to English"}</span>
            </button>
            
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="block w-full mt-4 bg-[#39FF71] text-[#0a0b0f] font-semibold py-3 rounded-xl text-sm text-center"
            >
              {t.getStarted}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}