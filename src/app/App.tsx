import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { AnalyticsDashboard } from "./components/AnalyticsDashboard";
import { AIEngines } from "./components/AIEngines";
import { Tokenization } from "./components/Tokenization";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { CTA } from "./components/CTA";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function AppShell() {
  const { theme } = useTheme();
  return (
    <div
      className={`cc-root ${theme === "light" ? "theme-light" : "theme-dark"}`}
      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <Navbar />
      <Hero />
      <Features />
      <AnalyticsDashboard />
      <AIEngines />
      <Tokenization />
      <Pricing />
      <Contact />
      <CTA />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppShell />
      </LanguageProvider>
    </ThemeProvider>
  );
}
