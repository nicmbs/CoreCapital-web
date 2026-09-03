import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ScrollToTop } from "./components/ScrollToTop";
import CoreCapitalPage from "../sites/corecapital/CoreCapitalPage";
import CoreSolutionsPage from "../sites/coresolutions/CoreSolutionsPage";
import LegalPage from "../sites/corecapital/LegalPage";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<CoreCapitalPage />} />
            {/* /* matches /coresolutions and /coresolutions/ (GitHub Pages trailing slash) */}
            <Route path="/coresolutions/*" element={<CoreSolutionsPage />} />
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
