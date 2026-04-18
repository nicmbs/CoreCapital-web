import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { TrendingUp, Shield, Zap, ArrowRight } from "lucide-react";
import analyticsImage from "figma:asset/ac77aa8ddb3da79c77739a2229387f7229a002b1.png";
import logoImage from "figma:asset/587d4841ce1110b4d856258b2a922555fd7a1195.png";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const stats = [
  { value: "$2.4B+", label: "Assets Managed" },
  { value: "12.4%", label: "Growth" },
  { value: "150K+", label: "Active Investors" },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const stats = [
    { value: "$2.4B+", label: t.stats.assets },
    { value: "12.4%", label: t.stats.growth },
    { value: "150K+", label: t.stats.users },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16" id="home">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#0a0b0f]">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(57,255,113,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,113,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#39FF71]/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#39FF71]/10 border border-[#39FF71]/20 rounded-full px-4 py-1.5 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#39FF71] animate-pulse" />
              <span className="text-[#39FF71] text-sm font-medium">{t.badge}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              {t.title1}{" "}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #39FF71 0%, #00d4ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.title2}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/55 mb-10 max-w-xl mx-auto lg:mx-0"
              style={{ fontSize: "1.125rem", lineHeight: 1.7 }}
            >
              {t.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14"
            >
              <a
                href="https://app.corecapitalpy.com"
                className="group flex items-center justify-center gap-2 bg-[#39FF71] text-[#0a0b0f] font-semibold px-8 py-4 rounded-2xl text-base hover:bg-[#5dff8a] transition-all duration-200 shadow-[0_0_30px_rgba(57,255,113,0.4)]"
              >
                {t.cta}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div
                    className="text-white mb-1"
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #39FF71, #00d4ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/45 text-xs">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="flex-1 relative w-full max-w-2xl"
          >
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 z-20 bg-[#111318] border border-[#39FF71]/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl"
            >
              <div className="w-8 h-8 rounded-lg bg-[#39FF71]/15 flex items-center justify-center">
                <TrendingUp size={16} className="text-[#39FF71]" />
              </div>
              <div>
                <div className="text-[#39FF71] text-sm font-semibold">+12.4%</div>
                <div className="text-white/50 text-xs">Monthly Return</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-4 z-20 bg-[#111318] border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center">
                <Shield size={16} className="text-cyan-400" />
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Bank-Grade</div>
                <div className="text-white/50 text-xs">256-bit Encryption</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-8 z-20 bg-[#111318] border border-[#39FF71]/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl"
            >
              <div className="w-8 h-8 rounded-lg bg-[#39FF71]/15 flex items-center justify-center">
                <Zap size={16} className="text-[#39FF71]" />
              </div>
              <div>
                <div className="text-white text-sm font-semibold">AI Analyst</div>
                <div className="text-white/50 text-xs">Live Insights</div>
              </div>
            </motion.div>

            {/* Main mockup */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(57,255,113,0.12)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#39FF71]/5 to-cyan-500/5 pointer-events-none z-10" />
              <img
                src={analyticsImage}
                alt="CoreCapital Analytics Dashboard"
                className="w-full h-auto block"
              />
            </div>

            {/* Logo badge below mockup */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              className="flex items-center justify-center mt-8"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="flex items-center gap-4 bg-[#111318]/80 backdrop-blur-sm border border-[#39FF71]/25 rounded-2xl px-5 py-3.5 shadow-[0_0_30px_rgba(57,255,113,0.12)]"
              >
                <motion.div
                  animate={{ scale: [1, 1.06, 1], boxShadow: ["0 0 14px rgba(57,255,113,0.2)", "0 0 28px rgba(57,255,113,0.4)", "0 0 14px rgba(57,255,113,0.2)"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-14 h-14 rounded-2xl overflow-hidden border border-[#39FF71]/30"
                >
                  <img src={logoImage} alt="CoreCapital" className="w-full h-full object-cover" />
                </motion.div>
                <div className="text-left">
                  <div className="text-white font-bold" style={{ fontSize: "1.35rem", letterSpacing: "-0.01em" }}>
                    Core<span className="text-[#39FF71]">Capital</span>
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">Wealth Intelligence Platform</div>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#39FF71] animate-pulse" />
                    <span className="text-[#39FF71] text-xs">AI-Powered · Live</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Glow behind mockup */}
            <div className="absolute inset-0 -z-10 bg-[#39FF71]/10 blur-[60px] rounded-full scale-110" />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0b0f] to-transparent pointer-events-none" />
    </section>
  );
}