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

export type CSProductKey = keyof typeof csBrand.products;

/** Product accent colors — deepen neon greens in light mode for contrast. */
export function csProductAccent(product: CSProductKey, mode: CSThemeMode): string {
  if (mode === "light" && product === "capital") return "#0ca05a";
  return csBrand.products[product];
}

/** Theme-aware surfaces for the CoreSolutions marketing page. */
export function csTheme(mode: CSThemeMode) {
  const light = mode === "light";
  return {
    bg: light ? "#eef3f9" : csBrand.black,
    fg: light ? "#0a0b0f" : csBrand.white,
    muted: light ? "rgba(10,11,15,0.78)" : "rgba(255,255,255,0.7)",
    soft: light ? "rgba(10,11,15,0.62)" : "rgba(255,255,255,0.55)",
    faint: light ? "rgba(10,11,15,0.48)" : "rgba(255,255,255,0.35)",
    navLink: light ? "rgba(10,11,15,0.78)" : "rgba(255,255,255,0.6)",
    navLinkHover: light ? "#0a0b0f" : "#ffffff",
    navScrolledBg: light ? "rgba(246,249,252,0.94)" : "rgba(0,0,0,0.9)",
    navBorder: light ? "rgba(10,11,15,0.12)" : "rgba(255,255,255,0.05)",
    menuBg: light ? "rgba(246,249,252,0.98)" : "rgba(0,0,0,0.95)",
    cardBg: light ? "rgba(255,255,255,0.92)" : "rgba(10,11,15,0.7)",
    footerBorder: light ? "rgba(10,11,15,0.12)" : "rgba(255,255,255,0.08)",
    /**
     * Light: original atmosphere still present, but dialed so copy stays readable.
     * Heavy wash on the left (content), art peeks on the right.
     */
    atmosphereOpacity: light ? 0.38 : 0.4,
    overlay: light
      ? "linear-gradient(90deg, rgba(246,249,252,0.94) 0%, rgba(246,249,252,0.82) 38%, rgba(246,249,252,0.45) 68%, rgba(246,249,252,0.22) 100%), linear-gradient(180deg, rgba(246,249,252,0.55) 0%, rgba(246,249,252,0.28) 35%, rgba(236,243,252,0.55) 100%)"
      : "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.78) 45%, rgba(0,0,0,0.92) 100%), linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.4) 100%)",
  };
}
