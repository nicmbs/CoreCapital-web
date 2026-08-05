import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Send, Check, Loader2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { PoweredByCoreSolutions } from "./PoweredByCoreSolutions";

const CONTACT_EMAIL = "contacto@corecapitalpy.com";

// Los leads van directo a la tabla `leads` de Supabase (migración 0016). La
// anon key es pública por diseño y la policy sólo habilita INSERT — no puede
// leer, editar ni borrar nada. El rate limit por IP corre en un trigger.
const SUPABASE_URL = "https://ztijerldaqkgdtmavlnf.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0aWplcmxkYXFrZ2R0bWF2bG5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NDI1NDAsImV4cCI6MjA5MjMxODU0MH0.HoPf792JzY0aICzb74VTDgI6MDWFsN3Q5ocC65sJtbM";
const LEADS_ENDPOINT = `${SUPABASE_URL}/rest/v1/leads`;

type Status = "idle" | "sending" | "sent" | "error";

const copy = {
  en: {
    badge: "Contact us",
    title1: "Let's talk",
    title2: "wealth",
    subtitle: "Questions, partnerships, or early access — send us a message and we'll get back to you.",
    name: "Name",
    email: "Email",
    message: "Message",
    namePlaceholder: "Your full name",
    emailPlaceholder: "you@example.com",
    messagePlaceholder: "How can we help?",
    send: "Send message",
    sending: "Sending…",
    sent: "Message sent",
    successTitle: "Thanks for reaching out",
    successBody: "We received your message and we'll get back to you shortly.",
    errorBody: "We couldn't send your message. Please try again or write to us directly.",
    rateLimited: "You've already sent us a few messages. Please try again in a few minutes.",
    subject: "CoreCapital — Contact form",
  },
  es: {
    badge: "Contáctanos",
    title1: "Hablemos de",
    title2: "patrimonio",
    subtitle: "Preguntas, alianzas o acceso anticipado — envíanos un mensaje y te responderemos.",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    namePlaceholder: "Tu nombre completo",
    emailPlaceholder: "tu@ejemplo.com",
    messagePlaceholder: "¿En qué podemos ayudarte?",
    send: "Enviar mensaje",
    sending: "Enviando…",
    sent: "Mensaje enviado",
    successTitle: "Gracias por escribirnos",
    successBody: "Recibimos tu mensaje y te vamos a responder a la brevedad.",
    errorBody: "No pudimos enviar tu mensaje. Probá de nuevo o escribinos directamente.",
    rateLimited: "Ya nos enviaste varios mensajes. Probá de nuevo en unos minutos.",
    subject: "CoreCapital — Formulario de contacto",
  },
};

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { language } = useLanguage();
  const t = copy[language as keyof typeof copy] ?? copy.es;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot: invisible para el usuario, sólo los bots lo completan.
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setErrorMsg("");

    // Honeypot lleno = bot. Mostramos el éxito de siempre para no darle señal,
    // y no mandamos nada.
    if (company.trim()) {
      setStatus("sent");
      return;
    }

    try {
      const res = await fetch(LEADS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          source: "web_contact",
          locale: language === "en" ? "en" : "es",
          page_url: window.location.href,
          user_agent: navigator.userAgent.slice(0, 500),
        }),
      });

      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        setErrorMsg(detail.includes("rate_limited") ? t.rateLimited : t.errorBody);
        setStatus("error");
        return;
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setErrorMsg(t.errorBody);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative bg-[#0a0b0f] py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-[#39FF71]/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39FF71]/10 border border-[#39FF71]/20 text-[#39FF71] text-xs font-medium mb-4">
            <Mail size={12} />
            {t.badge}
          </div>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}
          >
            {t.title1}{" "}
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
          </h2>
          <p className="text-white/50" style={{ fontSize: "1.05rem", lineHeight: 1.6 }}>
            {t.subtitle}
          </p>
        </motion.div>

        {status === "sent" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#111318] border border-[#39FF71]/20 rounded-2xl p-8 md:p-10 text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#39FF71]/10 border border-[#39FF71]/30 text-[#39FF71] mb-4">
              <Check size={22} />
            </div>
            <h3 className="text-white mb-2" style={{ fontSize: "1.35rem", fontWeight: 600 }}>
              {t.successTitle}
            </h3>
            <p className="text-white/50" style={{ fontSize: "1rem", lineHeight: 1.6 }}>
              {t.successBody}
            </p>
          </motion.div>
        ) : (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="bg-[#111318] border border-white/8 rounded-2xl p-6 md:p-8 space-y-5"
        >
          {/* Honeypot anti-spam: oculto y fuera del tab order, nunca lo ve un humano. */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="absolute -left-[9999px] w-px h-px opacity-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-name" className="block text-white/60 text-xs uppercase tracking-wider mb-2">
                {t.name}
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.namePlaceholder}
                className="w-full bg-[#0a0b0f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#39FF71]/50 focus:ring-1 focus:ring-[#39FF71]/30 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-white/60 text-xs uppercase tracking-wider mb-2">
                {t.email}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                className="w-full bg-[#0a0b0f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#39FF71]/50 focus:ring-1 focus:ring-[#39FF71]/30 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-white/60 text-xs uppercase tracking-wider mb-2">
              {t.message}
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.messagePlaceholder}
              className="w-full bg-[#0a0b0f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#39FF71]/50 focus:ring-1 focus:ring-[#39FF71]/30 transition-colors resize-none"
            />
          </div>

          {status === "error" && (
            <p role="alert" className="text-[#ff6b6b] text-sm">
              {errorMsg}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-white/40 text-sm hover:text-white/70 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={status === "sending" ? undefined : { scale: 1.02, boxShadow: "0 0 30px rgba(57,255,113,0.3)" }}
              whileTap={status === "sending" ? undefined : { scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-[#39FF71] text-[#0a0b0f] font-semibold px-6 py-3 rounded-xl hover:bg-[#39FF71]/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
              {status === "sending" ? t.sending : t.send}
            </motion.button>
          </div>
        </motion.form>
        )}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex justify-center mt-8"
        >
          <PoweredByCoreSolutions />
        </motion.div>
      </div>
    </section>
  );
}
