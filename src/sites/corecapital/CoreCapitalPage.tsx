import { Navbar } from "../../app/components/Navbar";
import { Hero } from "../../app/components/Hero";
import { Features } from "../../app/components/Features";
import { AnalyticsDashboard } from "../../app/components/AnalyticsDashboard";
import { AIEngines } from "../../app/components/AIEngines";
import { Tokenization } from "../../app/components/Tokenization";
import { Pricing } from "../../app/components/Pricing";
import { Contact } from "../../app/components/Contact";
import { CTA } from "../../app/components/CTA";
import { InteractiveAtmosphere } from "../../app/components/InteractiveAtmosphere";
import { ScrollProgress } from "../../app/components/ScrollProgress";
import { useTheme } from "../../app/context/ThemeContext";

/** CoreCapital marketing landing — current public site. */
export default function CoreCapitalPage() {
  const { theme } = useTheme();
  return (
    <div
      className={`cc-root relative ${theme === "light" ? "theme-light" : "theme-dark"}`}
      style={{ fontFamily: "var(--cc-font-sans)", backgroundColor: "transparent" }}
    >
      <InteractiveAtmosphere variant="capital" />
      <ScrollProgress color="#39FF71" />
      <div className="relative z-10">
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
    </div>
  );
}
