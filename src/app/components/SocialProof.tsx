import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const testimonials = [
  {
    name: "Alexandra Reed",
    role: "Angel Investor",
    avatar: "AR",
    avatarColor: "#39FF71",
    text: "CoreCapital replaced three separate tools I was using. The AI analyst actually understands my portfolio mix and gives advice that feels like it's from a real CFO.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Software Engineer & Investor",
    avatar: "MC",
    avatarColor: "#00d4ff",
    text: "The projection engine is insane. I can model 20-year scenarios with compound reinvestment across bonds, real estate, and crypto in under a minute.",
    rating: 5,
  },
  {
    name: "Sofia Ramos",
    role: "Family Office Director",
    avatar: "SR",
    avatarColor: "#a78bfa",
    text: "We manage multiple clients through CoreCapital. The risk alert system has saved us from volatility spikes twice already. Worth every cent.",
    rating: 5,
  },
];

export function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative bg-[#0a0b0f] py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[#39FF71]/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Trust indicators */}
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-white/40 text-sm mb-6 uppercase tracking-widest"
          >
            Trusted by forward-thinking investors
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-12 flex-wrap"
          >
            {["Forbes", "TechCrunch", "Bloomberg", "CoinDesk", "Reuters"].map((brand, i) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1 * i }}
                className="text-white/20 font-bold tracking-tight hover:text-white/40 transition-colors duration-300"
                style={{ fontSize: "1.2rem" }}
              >
                {brand}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-[#111318] border border-white/6 rounded-2xl p-6 hover:border-white/12 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#39FF71] fill-[#39FF71]" />
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: `${t.avatarColor}20`,
                    color: t.avatarColor,
                    border: `1px solid ${t.avatarColor}30`,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}