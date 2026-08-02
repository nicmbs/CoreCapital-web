import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import CoreCapitalPage from "../sites/corecapital/CoreCapitalPage";
import CoreSolutionsPage from "../sites/coresolutions/CoreSolutionsPage";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CoreCapitalPage />} />
            <Route path="/coresolutions" element={<CoreSolutionsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
