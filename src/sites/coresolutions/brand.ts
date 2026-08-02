/** CoreSolutions brand tokens — keep isolated for future domain split. */
export const csBrand = {
  black: "#000000",
  white: "#FFFFFF",
  blue: "#0055FF",
  blueBright: "#007FFF",
  tagline: "rgba(255,255,255,0.55)",
  products: {
    capital: "#39FF71",
    commerce: "#E11D8F",
    ads: "#F97316",
    ai: "#A78BFA",
  },
} as const;

export type CSThemeMode = "dark" | "light";

/** Theme-aware surfaces for the CoreSolutions marketing page. */
export function csTheme(mode: CSThemeMode) {
  const light = mode === "light";
  return {
    bg: light ? "#f4f6f9" : csBrand.black,
    fg: light ? "#0a0b0f" : csBrand.white,
    muted: light ? "rgba(10,11,15,0.68)" : "rgba(255,255,255,0.7)",
    soft: light ? "rgba(10,11,15,0.5)" : "rgba(255,255,255,0.55)",
    faint: light ? "rgba(10,11,15,0.4)" : "rgba(255,255,255,0.35)",
    navLink: light ? "rgba(10,11,15,0.55)" : "rgba(255,255,255,0.6)",
    navLinkHover: light ? "#0a0b0f" : "#ffffff",
    navScrolledBg: light ? "rgba(244,246,249,0.92)" : "rgba(0,0,0,0.9)",
    navBorder: light ? "rgba(10,11,15,0.08)" : "rgba(255,255,255,0.05)",
    menuBg: light ? "rgba(244,246,249,0.98)" : "rgba(0,0,0,0.95)",
    cardBg: light ? "rgba(255,255,255,0.88)" : "rgba(10,11,15,0.7)",
    footerBorder: light ? "rgba(10,11,15,0.08)" : "rgba(255,255,255,0.08)",
    atmosphereOpacity: light ? 0.18 : 0.4,
    overlay: light
      ? "linear-gradient(180deg, rgba(244,246,249,0.72) 0%, rgba(244,246,249,0.88) 45%, rgba(244,246,249,0.96) 100%), linear-gradient(90deg, rgba(244,246,249,0.95) 0%, rgba(244,246,249,0.75) 55%, rgba(244,246,249,0.55) 100%)"
      : "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.78) 45%, rgba(0,0,0,0.92) 100%), linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.4) 100%)",
  };
}
