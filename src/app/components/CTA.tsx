import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Apple, Smartphone, ArrowRight, CheckCircle } from "lucide-react";
import logoImage from "figma:asset/587d4841ce1110b4d856258b2a922555fd7a1195.png";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const perks = [
  "Free 30-day trial, no credit card",
  "Cancel anytime",
  "Bank-grade encryption",
  "24/7 AI analyst access",
];

function AppStoreButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(57,255,113,0.3)" }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-4 bg-white text-[#0a0b0f] px-7 py-4 rounded-2xl hover:bg-gray-100 transition-colors duration-200"
    >
      <Apple size={26} />
      <div className="text-left">
        <div className="text-xs opacity-60 leading-none mb-0.5">Download on the</div>
        <div className="font-bold" style={{ fontSize: "1.05rem", lineHeight: 1 }}>App Store</div>
      </div>
    </motion.button>
  );
}

function PlayStoreButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(57,255,113,0.25)" }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-4 bg-[#111318] border border-white/15 text-white px-7 py-4 rounded-2xl hover:bg-[#1a1d24] hover:border-white/25 transition-all duration-200"
    >
      {/* Google Play icon */}
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M3.18 23.76c.3.16.64.24.98.24.46 0 .9-.13 1.28-.38l12.2-6.84-2.68-2.68L3.18 23.76z" fill="#EA4335"/>
        <path d="M21.54 9.64l-2.62-1.47-3.04 3.04 3.04 3.04 2.65-1.48c.76-.43.76-1.69-.03-2.13z" fill="#FBBC04"/>
        <path d="M2.2.24A1.5 1.5 0 001.5 1.5v21c0 .52.27 1 .7 1.26l13.76-13.76L2.2.24z" fill="#4285F4"/>
        <path d="M5.44.38L17.64 7.2l-2.68 2.68L1.5.24C2.04-.07 2.7-.08 3.18.24l2.26 1.14z" fill="#34A853"/>
      </svg>
      <div className="text-left">
        <div className="text-xs opacity-50 leading-none mb-0.5">Get it on</div>
        <div className="font-bold" style={{ fontSize: "1.05rem", lineHeight: 1 }}>Google Play</div>
      </div>
    </motion.button>
  );
}

export function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { language } = useLanguage();

  return (
    <section className="relative bg-[#0a0b0f] py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF71]/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[500px] bg-[#39FF71]/5 rounded-full blur-[120px]" />
      </div>

      {/* Radial grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(57,255,113,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,113,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-3xl overflow-hidden bg-[#111318] border border-[#39FF71]/20 shadow-[0_0_40px_rgba(57,255,113,0.2)]">
              <img src={logoImage} alt="CoreCapital" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -inset-2 bg-[#39FF71]/10 rounded-3xl blur-xl -z-10" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}
        >
          Your wealth intelligence{" "}
          <br className="hidden md:block" />
          <span
            style={{
              background: "linear-gradient(135deg, #39FF71 0%, #00d4ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            starts today
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 mb-10 max-w-xl mx-auto"
          style={{ fontSize: "1.1rem", lineHeight: 1.7 }}
        >
          Join 150,000+ tech-savvy investors already growing their wealth with AI-driven insights. No minimums. No gatekeepers. Just results.
        </motion.p>

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12"
        >
          {perks.map((perk) => (
            <div key={perk} className="flex items-center gap-2 text-white/50 text-sm">
              <CheckCircle size={14} className="text-[#39FF71]" />
              {perk}
            </div>
          ))}
        </motion.div>

        {/* App Store buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <AppStoreButton />
          <PlayStoreButton />
        </motion.div>

        {/* Web CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            className="group inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200"
          >
            Or continue on web
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Divider */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg overflow-hidden bg-[#111318]">
                <img src={logoImage} alt="CoreCapital" className="w-full h-full object-cover" />
              </div>
              <span className="text-white/60 text-sm">
                Core<span className="text-[#39FF71]">Capital</span> — Wealth Intelligence Platform
              </span>
            </div>
            <div className="flex items-center gap-6 text-white/30 text-xs">
              <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white/60 transition-colors">Security</a>
            </div>
            <p className="text-white/25 text-xs">© 2026 CoreCapital. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}