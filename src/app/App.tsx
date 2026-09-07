import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ScrollToTop } from "./components/ScrollToTop";
import CoreCapitalPage from "../sites/corecapital/CoreCapitalPage";
import CoreSolutionsRedirect from "./components/CoreSolutionsRedirect";
import LegalPage from "../sites/corecapital/LegalPage";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<CoreCapitalPage />} />
            {/* CoreSolutions vive ahora en coresolutions.services; la ruta vieja
                sólo redirige para no romper enlaces publicados. */}
            <Route path="/coresolutions/*" element={<CoreSolutionsRedirect />} />
            {/* Documentos legales públicos — sin sesión: los revisa Google al
                verificar el cliente OAuth propio. */}
            <Route path="/legal" element={<Navigate to="/legal/terminos" replace />} />
            <Route path="/legal/:slug" element={<LegalPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
