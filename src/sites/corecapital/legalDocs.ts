import termsEs from "../../legal/terminos-y-condiciones.es.md?raw";
import termsEn from "../../legal/terms-and-conditions.en.md?raw";
import privacyEs from "../../legal/politica-de-privacidad.es.md?raw";
import privacyEn from "../../legal/privacy-policy.en.md?raw";
import cookiesEs from "../../legal/politica-de-cookies.es.md?raw";
import cookiesEn from "../../legal/cookie-policy.en.md?raw";

export type LegalDocSlug = "terminos" | "privacidad" | "cookies";

/**
 * Los tres documentos legales públicos. Cada uno tiene una sola URL canónica:
 * el idioma lo elige el conmutador del sitio, no la ruta. Google verifica el
 * cliente OAuth contra estas URLs, así que deben ser estables y accesibles sin
 * sesión.
 */
export const LEGAL_DOCS: Record<
  LegalDocSlug,
  { path: string; title: { es: string; en: string }; body: { es: string; en: string } }
> = {
  terminos: {
    path: "/legal/terminos",
    title: { es: "Términos y Condiciones", en: "Terms and Conditions" },
    body: { es: termsEs, en: termsEn },
  },
  privacidad: {
    path: "/legal/privacidad",
    title: { es: "Política de Privacidad", en: "Privacy Policy" },
    body: { es: privacyEs, en: privacyEn },
  },
  cookies: {
    path: "/legal/cookies",
    title: { es: "Política de Cookies", en: "Cookie Policy" },
    body: { es: cookiesEs, en: cookiesEn },
  },
};

export const LEGAL_DOC_ORDER: LegalDocSlug[] = ["terminos", "privacidad", "cookies"];
