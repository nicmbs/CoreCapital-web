import termsEs from "../../legal/terminos-y-condiciones.es.md?raw";
import termsEn from "../../legal/terms-and-conditions.en.md?raw";
import privacyEs from "../../legal/politica-de-privacidad.es.md?raw";
import privacyEn from "../../legal/privacy-policy.en.md?raw";
import cookiesEs from "../../legal/politica-de-cookies.es.md?raw";
import cookiesEn from "../../legal/cookie-policy.en.md?raw";
// CoreContent: copia de despliegue de corecontent/src/lib/legal-content.js (solo ES).
import ccPrivacy from "../../legal/corecontent-politica-de-privacidad.es.md?raw";
import ccTerms from "../../legal/corecontent-terminos.es.md?raw";
import ccDeletion from "../../legal/corecontent-eliminacion-de-datos.es.md?raw";

export type LegalDocSlug = "terminos" | "privacidad" | "cookies";

export type LegalDoc = { path: string; title: { es: string; en: string }; body: { es: string; en: string } };

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

/**
 * Documentos de CoreContent (la app de contenido para redes). Meta los exige para la app
 * de Facebook Login: deben responder sin sesión, igual que los de CoreCapital.
 */
export const CORECONTENT_LEGAL_DOCS: Record<string, LegalDoc> = {
  privacidad: {
    path: "/corecontent/legal/privacidad",
    title: { es: "Política de privacidad", en: "Privacy Policy" },
    body: { es: ccPrivacy, en: ccPrivacy },
  },
  terminos: {
    path: "/corecontent/legal/terminos",
    title: { es: "Términos y condiciones", en: "Terms of Service" },
    body: { es: ccTerms, en: ccTerms },
  },
  "eliminar-datos": {
    path: "/corecontent/legal/eliminar-datos",
    title: { es: "Eliminación de datos", en: "Data Deletion" },
    body: { es: ccDeletion, en: ccDeletion },
  },
};

export type LegalSite = {
  docs: Record<string, LegalDoc>;
  order: string[];
  defaultSlug: string;
  wordmark: [string, string];
  showOperator: boolean;
};

export const LEGAL_SITES: Record<"corecapital" | "corecontent", LegalSite> = {
  corecapital: {
    docs: LEGAL_DOCS,
    order: LEGAL_DOC_ORDER,
    defaultSlug: "terminos",
    wordmark: ["Core", "Capital"],
    showOperator: true,
  },
  corecontent: {
    docs: CORECONTENT_LEGAL_DOCS,
    order: ["privacidad", "terminos", "eliminar-datos"],
    defaultSlug: "privacidad",
    wordmark: ["Core", "Content"],
    showOperator: false,
  },
};
