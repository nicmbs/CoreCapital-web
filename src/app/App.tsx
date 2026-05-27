import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { AnalyticsDashboard } from "./components/AnalyticsDashboard";
import { AIEngines } from "./components/AIEngines";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { CTA } from "./components/CTA";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div style={{ backgroundColor: "#0a0b0f", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <Navbar />
        <Hero />
        <Features />
        <AnalyticsDashboard />
        <AIEngines />
        <Pricing />
        <Contact />
        <CTA />
      </div>
    </LanguageProvider>
  );
}