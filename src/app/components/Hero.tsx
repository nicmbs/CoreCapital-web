import { useRef, type PointerEvent as ReactPointerEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "motion/react";
import { ArrowRight, Coins, TrendingUp, Shield, Zap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../translations";
import { PoweredByCoreSolutions } from "./PoweredByCoreSolutions";

const analyticsByTheme = {
  dark: "/cc/analytics-dark.png",
  light: "/cc/analytics-light.png",
} as const;

export function Hero() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language].hero;
  const analyticsImage = analyticsByTheme[theme];
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const hover = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 });
  const glareOpacity = useSpring(hover, { stiffness: 180, damping: 24 });
  const glareX = useTransform(mx, (v) => `${(v + 0.5) * 100}%`);
  const glareY = useTransform(my, (v) => `${(v + 0.5) * 100}%`);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(57,255,113,0.18), transparent 45%)`;

  const onVisualEnter = () => {
    hover.set(1);
  };
  const onVisualMove = (e: ReactPointerEvent) => {
    const el = visualRef.current;
    if (!el) return;
    hover.set(1);
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onVisualLeave = () => {
    hover.set(0);
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20"
      id="home"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#39FF71]/25 bg-[#39FF71]/10 px-4 py-1.5">
                <span className="text-sm font-medium text-[#39FF71]">{t.badge}</span>
              </div>
              <PoweredByCoreSolutions />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06 }}
              className="mb-6"
              style={{
                fontSize: "clamp(2.6rem, 6vw, 4.4rem)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                wordSpacing: "0.18em",
                color: "var(--cc-text-strong)",
              }}
            >
              {t.title1}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, var(--cc-accent-green) 0%, var(--cc-accent-cyan) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.title2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="text-white/55 mb-9 max-w-xl mx-auto lg:mx-0"
              style={{ fontSize: "1.08rem", lineHeight: 1.7 }}
            >
              {t.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto lg:mx-0"
            >
              <a
                href="https://app.corecapitalpy.com"
                className="group inline-flex items-center justify-center gap-2 bg-[#39FF71] text-[#0a0b0f] font-semibold px-7 py-3.5 rounded-xl text-base hover:bg-[#5dff8a] transition-colors"
              >
                {t.cta}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  setTimeout(() => {
                    (document.getElementById("contact-name") as HTMLInputElement | null)?.focus({
                      preventScroll: true,
                    });
                  }, 600);
                }}
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-medium px-7 py-3.5 rounded-xl text-base hover:bg-white/5 hover:border-white/30 transition-colors"
              >
                {t.contactCta}
              </a>
            </motion.div>

            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={() =>
                document.getElementById("tokenization")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/40 hover:text-[#00d4ff] transition-colors"
            >
              <Coins size={14} />
              {t.tokenizationCta}
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-10 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0"
            >
              {[
                { k: "RWA", v: "$16T" },
                { k: "Settle", v: "T+0" },
                { k: "Audit", v: "100%" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-3 backdrop-blur-sm"
                >
                  <div
                    className="text-[10px] uppercase tracking-[0.14em] text-white/35 mb-1"
                    style={{ fontFamily: "var(--cc-font-mono)" }}
                  >
                    {item.k}
                  </div>
                  <div className="text-lg font-semibold text-white" style={{ fontFamily: "var(--cc-font-mono)" }}>
                    {item.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            ref={visualRef}
            style={{ y: visualY, opacity: visualOpacity, perspective: 1200 }}
            onPointerEnter={onVisualEnter}
            onPointerMove={onVisualMove}
            onPointerLeave={onVisualLeave}
            className="flex-1 relative w-full max-w-2xl"
          >
            {/* Board + floating cards share the same 3D tilt — only while hovering this block */}
            <motion.div
              style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/12 bg-[#111318]">
                <motion.div
                  className="absolute inset-0 z-10 pointer-events-none mix-blend-screen hero-dashboard-glare"
                  style={{ background: glare, opacity: glareOpacity }}
                />
                <img
                  key={analyticsImage}
                  src={analyticsImage}
                  alt="CoreCapital Analytics Dashboard"
                  className="w-full h-auto block"
                  draggable={false}
                />
                <div className="hero-dashboard-fade absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#0a0b0f]/80 to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 z-20 bg-[#111318]/95 border border-[#39FF71]/20 rounded-2xl px-4 py-3 flex items-center gap-3 backdrop-blur-md"
                style={{ transform: "translateZ(28px)" }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#39FF71]/15 flex items-center justify-center">
                  <TrendingUp size={16} className="text-[#39FF71]" />
                </div>
                <div>
                  <div className="text-[#39FF71] text-sm font-semibold">+12.4%</div>
                  <div className="text-white/50 text-xs">{t.floating.monthlyReturn}</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-4 z-20 bg-[#111318]/95 border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 backdrop-blur-md"
                style={{ transform: "translateZ(36px)" }}
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center">
                  <Shield size={16} className="text-cyan-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.floating.bankGrade}</div>
                  <div className="text-white/50 text-xs">{t.floating.encryption}</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-6 z-20 bg-[#111318]/95 border border-[#39FF71]/20 rounded-2xl px-4 py-3 flex items-center gap-3 backdrop-blur-md"
                style={{ transform: "translateZ(44px)" }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#39FF71]/15 flex items-center justify-center">
                  <Zap size={16} className="text-[#39FF71]" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.floating.aiAnalyst}</div>
                  <div className="text-white/50 text-xs">{t.floating.liveInsights}</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
