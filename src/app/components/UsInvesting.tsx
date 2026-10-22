import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Clock,
  MessageCircle,
  Wallet,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import { CONTACT_PREFILL_EVENT } from "./Contact";

// Icon per feature (order matches translations.usInvesting.features)
const featureIcons = [BarChart3, Wallet, Bot, MessageCircle];

// Datos fijos de la vista previa: es una maqueta, no cotizaciones.
const PREVIEW_TICKER = "VOO";
const PREVIEW_AMOUNT = "USD 250.00";
const PREVIEW_SHARES = "0.4612";

/** "Invertí en EE.UU." — acciones, ETFs y cripto de EE.UU., en acceso anticipado. */
export function UsInvesting() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { language } = useLanguage();
  const t = translations[language].usInvesting;

  const requestEarlyAccess = () => {
    window.dispatchEvent(new CustomEvent(CONTACT_PREFILL_EVENT, { detail: t.contactMessage }));
  };

  return (
    <section id="us-investing" className="relative bg-[#0a0b0f] py-28 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF71]/20 to-transparent" />

      {/* Background glows */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#39FF71]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00d4ff]/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#39FF71]/10 border border-[#39FF71]/20 rounded-full px-4 py-1.5 mb-6"
          >
            <Clock size={14} className="text-[#39FF71]" />
            <span className="text-[#39FF71] text-sm font-medium">{t.badge}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            {t.title1}{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--cc-accent-green) 0%, var(--cc-accent-cyan) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.title2}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto"
            style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 bg-[#111318] border border-white/6 rounded-3xl p-6 sm:p-8"
          >
            {t.features.map((feature, i) => {
              const Icon = featureIcons[i] ?? BarChart3;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#39FF71]/12 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-[#39FF71]" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-white text-[15px] font-semibold mb-1">{feature.title}</h5>
                    <p className="text-white/45 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-auto pt-2">
              {t.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0a0b0f] border border-white/6 rounded-2xl px-1 sm:px-2 py-4 text-center"
                >
                  <div
                    style={{
                      fontSize: "clamp(0.85rem, 3.4vw, 1.25rem)",
                      fontWeight: 700,
                      background:
                        "linear-gradient(135deg, var(--cc-accent-green) 0%, var(--cc-accent-cyan) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    className="mb-1"
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-xs leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Illustrative preview: order ticket + WhatsApp confirmation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col bg-[#111318] border border-white/6 rounded-3xl p-6 sm:p-8"
          >
            <span className="text-[#00d4ff] text-xs uppercase tracking-[0.2em] font-semibold">
              {t.preview.label}
            </span>

            <div className="mt-6 bg-[#0a0b0f] border border-white/8 rounded-2xl p-5">
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/12 flex items-center justify-center shrink-0">
                    <span className="text-[#00d4ff] text-xs font-bold">{PREVIEW_TICKER}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-white text-sm font-semibold">
                      {t.preview.buy} {PREVIEW_TICKER}
                    </div>
                    <div className="text-white/40 text-xs truncate">{t.preview.account}</div>
                  </div>
                </div>
                <span className="text-[#39FF71] text-xs font-medium bg-[#39FF71]/10 border border-[#39FF71]/20 rounded-full px-2.5 py-1 shrink-0">
                  ETF
                </span>
              </div>

              <div className="flex items-center justify-between py-3 border-t border-white/6">
                <span className="text-white/45 text-sm">{t.preview.amount}</span>
                <span className="text-white text-sm font-semibold">{PREVIEW_AMOUNT}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-t border-white/6">
                <span className="text-white/45 text-sm">{t.preview.estimated}</span>
                <span className="text-white text-sm font-semibold">{PREVIEW_SHARES}</span>
              </div>

              <div
                aria-hidden="true"
                className="mt-4 w-full text-center bg-[#39FF71]/15 border border-[#39FF71]/25 text-[#39FF71] text-sm font-semibold rounded-xl py-2.5"
              >
                {t.preview.confirm}
              </div>
            </div>

            {/* WhatsApp-style exchange */}
            <div className="mt-5 flex flex-col gap-2.5">
              <div className="self-end max-w-[85%] bg-[#39FF71]/12 border border-[#39FF71]/20 rounded-2xl rounded-br-md px-4 py-2.5">
                <p className="text-white/70 text-sm">{t.preview.whatsapp}</p>
              </div>
              <div className="self-start max-w-[85%] flex items-start gap-2">
                <div className="w-7 h-7 rounded-full bg-[#00d4ff]/12 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot size={14} className="text-[#00d4ff]" />
                </div>
                <div className="bg-white/5 border border-white/8 rounded-2xl rounded-bl-md px-4 py-2.5">
                  <p className="text-white/70 text-sm">{t.preview.whatsappReply}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-14"
        >
          <a
            href="#contact"
            onClick={requestEarlyAccess}
            className="group inline-flex items-center gap-2 bg-[#39FF71] text-[#0a0b0f] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#5dff8a] transition-all duration-200 shadow-[0_0_30px_rgba(57,255,113,0.3)]"
          >
            {t.cta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
