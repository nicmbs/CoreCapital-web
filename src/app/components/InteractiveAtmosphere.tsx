import { useEffect, useRef, type CSSProperties } from "react";
import { useTheme } from "../context/ThemeContext";

type Props = {
  variant?: "capital" | "solutions";
};

/** Pointer-reactive market/tech atmosphere for marketing pages. */
export function InteractiveAtmosphere({ variant = "capital" }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const light = theme === "light";
  const isCapital = variant === "capital";

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        el.style.setProperty("--mx", `${(x * 100).toFixed(2)}%`);
        el.style.setProperty("--my", `${(y * 100).toFixed(2)}%`);
        el.style.setProperty("--mxn", (x - 0.5).toFixed(3));
        el.style.setProperty("--myn", (y - 0.5).toFixed(3));
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  /* Dark keeps the neon market floor; light gets a cooler paper + mint depth stack. */
  const base = light
    ? isCapital
      ? "linear-gradient(165deg, #e8eef3 0%, #f2f5f8 42%, #e6edf2 100%)"
      : /* Solutions: cool underlay so original atmosphere art can sit on top */
        "linear-gradient(160deg, #dce8f6 0%, #eef3fa 48%, #d9e6f5 100%)"
    : isCapital
      ? "#0a0b0f"
      : "#000000";

  const glowA = light
    ? isCapital
      ? "rgba(12,160,90,0.22)"
      : "rgba(0,127,255,0.2)"
    : isCapital
      ? "rgba(57,255,113,0.16)"
      : "rgba(0,127,255,0.22)";

  const glowB = light
    ? isCapital
      ? "rgba(8,145,178,0.16)"
      : "rgba(59,130,246,0.14)"
    : isCapital
      ? "rgba(0,212,255,0.1)"
      : "rgba(59,130,246,0.12)";

  const gridA = light
    ? isCapital
      ? "rgba(12,160,90,0.28)"
      : "rgba(0,127,255,0.26)"
    : isCapital
      ? "rgba(57,255,113,0.35)"
      : "rgba(0,127,255,0.4)";

  const gridB = light
    ? isCapital
      ? "rgba(15, 55, 40, 0.1)"
      : "rgba(20, 50, 90, 0.1)"
    : isCapital
      ? "rgba(57,255,113,0.25)"
      : "rgba(0,127,255,0.28)";

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={
        {
          "--mx": "70%",
          "--my": "35%",
          "--mxn": "0.15",
          "--myn": "-0.1",
        } as CSSProperties
      }
    >
      <div
        className="absolute inset-0"
        style={{
          background: light
            ? `${base}`
            : `radial-gradient(ellipse 55% 45% at var(--mx) var(--my), ${glowA}, transparent 55%), radial-gradient(ellipse 40% 35% at calc(100% - var(--mx)) calc(100% - var(--my)), ${glowB}, transparent 50%), ${base}`,
        }}
      />

      {/* Light: layered depth — brand haze + cool shadow wells */}
      {light && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 58% 48% at var(--mx) var(--my), ${glowA}, transparent 58%), radial-gradient(ellipse 42% 38% at calc(100% - var(--mx)) calc(100% - var(--my)), ${glowB}, transparent 55%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 55% at 50% 120%, rgba(15,35,45,0.1), transparent 55%), radial-gradient(ellipse 50% 40% at 0% 0%, rgba(15,40,55,0.06), transparent 50%)",
            }}
          />
          {/* Soft diagonal sheen for paper depth */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.55) 48%, transparent 72%)",
              transform: "translate3d(calc(var(--mxn) * 24px), calc(var(--myn) * 16px), 0)",
            }}
          />
        </>
      )}

      <div
        className="absolute inset-0"
        style={{
          opacity: light ? 0.16 : 0.14,
          backgroundImage: `linear-gradient(${gridA} 1px, transparent 1px), linear-gradient(90deg, ${gridB} 1px, transparent 1px)`,
          backgroundSize: light ? "56px 56px" : "48px 48px",
          transform: "translate3d(calc(var(--mxn) * 18px), calc(var(--myn) * 18px), 0)",
          maskImage: "radial-gradient(ellipse 70% 60% at var(--mx) var(--my), black 18%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at var(--mx) var(--my), black 18%, transparent 78%)",
        }}
      />

      {/* Light vignette: pulls edges darker so white cards pop */}
      {light && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 70% at 50% 40%, transparent 35%, rgba(20, 40, 50, 0.12) 100%)",
          }}
        />
      )}

      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          opacity: light ? 0.045 : 0.04,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
