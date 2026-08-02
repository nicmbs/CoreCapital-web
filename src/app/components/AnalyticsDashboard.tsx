import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { DollarSign, TrendingUp, Calendar, BarChart2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

type Currency = "USD" | "PYG";

/** Existing book + $18,000 Tokens allocation (stored in USD). */
const AVG_TAN_INTEREST = 0.0837; // 8.37%
const AVG_TAN_CAPITAL = 0.125; // 12.50%
/** Fallback if FX fetch fails (~market USD/PYG). */
const FALLBACK_USD_PYG = 6000;

const portfolioRaw = [
  { name: "Real Estate", value: 23630, color: "#39FF71", assets: 1 },
  { name: "Bank CDAs", value: 15000, color: "#00d4ff", assets: 2 },
  { name: "Corporate Bonds", value: 8038, color: "#93c5fd", assets: 4 },
  { name: "Mutual Funds", value: 2500, color: "#f59e0b", assets: 1 },
  { name: "Crypto Bot", value: 488, color: "#f97316", assets: 1 },
  { name: "Tokens", value: 18000, color: "#A78BFA", assets: 3 },
] as const;

const TOTAL_CAPITAL_USD = portfolioRaw.reduce((a, b) => a + b.value, 0);
const REAL_ESTATE_USD = portfolioRaw.find((a) => a.name === "Real Estate")!.value;
const INTEREST_BEARING_USD = TOTAL_CAPITAL_USD - REAL_ESTATE_USD;

const interestMonthUsd = (INTEREST_BEARING_USD * AVG_TAN_INTEREST) / 12;
const appreciationMonthUsd = (REAL_ESTATE_USD * AVG_TAN_CAPITAL) / 12;
const capitalizationMonthUsd = interestMonthUsd + appreciationMonthUsd;

const portfolioData = portfolioRaw.map((item) => ({
  ...item,
  pct: Math.round((item.value / TOTAL_CAPITAL_USD) * 1000) / 10,
}));

const portfolioByValue = [...portfolioData].sort((a, b) => b.value - a.value);

function assetCountLabel(count: number, language: "en" | "es") {
  if (language === "es") return count === 1 ? "1 activo" : `${count} activos`;
  return count === 1 ? "1 asset" : `${count} assets`;
}

const pctLabel = (rate: number) => `${(rate * 100).toFixed(2)}%`;

function formatMoney(amountUsd: number, currency: Currency, usdToPyg: number) {
  if (currency === "USD") {
    return `$${amountUsd.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }
  const pyg = Math.round(amountUsd * usdToPyg);
  return `₲${pyg.toLocaleString("es-PY")}`;
}

async function fetchUsdToPyg(): Promise<number> {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD", { cache: "no-store" });
    if (res.ok) {
      const data = (await res.json()) as { rates?: { PYG?: number } };
      if (data.rates?.PYG && data.rates.PYG > 0) return data.rates.PYG;
    }
  } catch {
    /* try fallback source */
  }
  try {
    const res = await fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json",
      { cache: "no-store" },
    );
    if (res.ok) {
      const data = (await res.json()) as { usd?: { pyg?: number } };
      if (data.usd?.pyg && data.usd.pyg > 0) return data.usd.pyg;
    }
  } catch {
    /* use static fallback */
  }
  return FALLBACK_USD_PYG;
}

const moneyStatKeys = [
  "totalCapital",
  "interestMonth",
  "capitalAppreciation",
  "appreciationMonth",
] as const;

type MoneyStatKey = (typeof moneyStatKeys)[number];

const moneyStatUsd: Record<MoneyStatKey, number> = {
  totalCapital: TOTAL_CAPITAL_USD,
  interestMonth: interestMonthUsd,
  capitalAppreciation: REAL_ESTATE_USD,
  appreciationMonth: appreciationMonthUsd,
};

const statMeta = [
  { key: "totalCapital", icon: DollarSign, isGreen: true, kind: "money" as const },
  { key: "avgTanInterest", icon: TrendingUp, isGreen: true, kind: "pct" as const, value: pctLabel(AVG_TAN_INTEREST) },
  { key: "interestMonth", icon: Calendar, isGreen: false, kind: "money" as const },
  { key: "capitalAppreciation", icon: BarChart2, isGreen: false, kind: "money" as const },
  { key: "avgTanCapital", icon: TrendingUp, isGreen: true, kind: "pct" as const, value: pctLabel(AVG_TAN_CAPITAL) },
  { key: "appreciationMonth", icon: Calendar, isGreen: false, kind: "money" as const },
] as const;

function StatCard({
  index,
  label,
  sub,
  value,
  isGreen,
  Icon,
}: {
  index: number;
  label: string;
  sub: string;
  value: string;
  isGreen: boolean;
  Icon: typeof DollarSign;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="relative bg-[#111318] border border-white/6 rounded-2xl p-5 hover:border-[#39FF71]/20 transition-all duration-300 group overflow-hidden"
    >
      <div className="absolute inset-0 rounded-2xl bg-[#39FF71]/0 group-hover:bg-[#39FF71]/3 transition-all duration-500" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <span className="text-white/40 text-xs uppercase tracking-widest">{label}</span>
          <div className="w-8 h-8 rounded-lg bg-[#39FF71]/12 flex items-center justify-center">
            <Icon size={14} className="text-[#39FF71]" />
          </div>
        </div>
        <div
          className="mb-1"
          style={{
            fontSize: "clamp(1.15rem, 2.2vw, 1.55rem)",
            fontWeight: 700,
            color: isGreen ? "#39FF71" : "var(--cc-text-strong)",
            letterSpacing: "-0.02em",
          }}
        >
          {value}
        </div>
        <div className="text-white/35 text-xs">{sub}</div>
      </div>
    </motion.div>
  );
}

export function AnalyticsDashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { language } = useLanguage();
  const t = translations[language].analytics;

  const [currency, setCurrency] = useState<Currency>("USD");
  const [usdToPyg, setUsdToPyg] = useState(FALLBACK_USD_PYG);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const rate = await fetchUsdToPyg();
      if (!cancelled) setUsdToPyg(rate);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const fmt = (usd: number) => formatMoney(usd, currency, usdToPyg);

  const chartData = useMemo(
    () =>
      portfolioByValue.map((item) => ({
        ...item,
        displayValue: currency === "USD" ? item.value : Math.round(item.value * usdToPyg),
      })),
    [currency, usdToPyg],
  );

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const d = payload[0].payload;
      return (
        <div className="bg-[#1a1d24] border border-white/10 rounded-xl px-4 py-2.5 shadow-2xl">
          <div className="text-white text-sm font-semibold">{d.name}</div>
          <div style={{ color: d.color }} className="text-sm font-bold">
            {fmt(d.value)} · {d.pct}%
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="analytics" className="relative bg-[#0a0b0f] py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF71]/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#39FF71]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-cyan-500/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#39FF71]/10 border border-[#39FF71]/20 rounded-full px-4 py-1.5 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#39FF71] animate-pulse" />
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
                background: "linear-gradient(135deg, var(--cc-accent-green) 0%, var(--cc-accent-cyan) 100%)",
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
            className="text-white/50 max-w-xl mx-auto"
            style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Currency pills */}
        <div className="mb-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111318] p-1">
            {(["USD", "PYG"] as const).map((code) => {
              const active = currency === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setCurrency(code)}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200"
                  style={
                    active
                      ? {
                          backgroundColor: "rgba(57,255,113,0.15)",
                          color: "#39FF71",
                          border: "1px solid rgba(57,255,113,0.35)",
                        }
                      : {
                          backgroundColor: "transparent",
                          color: "rgba(255,255,255,0.45)",
                          border: "1px solid transparent",
                        }
                  }
                >
                  {code}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {statMeta.map((card, i) => (
            <StatCard
              key={card.key}
              index={i}
              label={t.stats[card.key].label}
              sub={t.stats[card.key].sub}
              isGreen={card.isGreen}
              Icon={card.icon}
              value={
                card.kind === "pct"
                  ? card.value
                  : fmt(moneyStatUsd[card.key as MoneyStatKey])
              }
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#111318] border border-white/6 rounded-2xl p-6"
          >
            <div className="text-white/40 text-xs uppercase tracking-widest mb-6">{t.portfolio}</div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-48 h-48 shrink-0 min-h-[12rem]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={58}
                      outerRadius={88}
                      paddingAngle={2}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="flex flex-col gap-3 flex-1 w-full">
                {chartData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-white/70 text-sm">{item.name}</span>
                    </div>
                    <span className="text-white/60 text-sm font-medium tabular-nums">
                      {fmt(item.value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#111318] border border-[#39FF71]/15 rounded-2xl p-5 flex items-center justify-between"
            >
              <div>
                <div className="text-white/40 text-xs uppercase tracking-widest mb-2">
                  {t.capitalization.label}
                </div>
                <div
                  style={{
                    fontSize: currency === "PYG" ? "1.55rem" : "2rem",
                    fontWeight: 700,
                    color: "var(--cc-text-strong)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {fmt(capitalizationMonthUsd)}
                </div>
                <div className="text-white/40 text-xs mt-1">{t.capitalization.sub}</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#39FF71]/12 flex items-center justify-center">
                <TrendingUp size={22} className="text-[#39FF71]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#111318] border border-white/6 rounded-2xl p-5 flex-1"
            >
              <div className="text-white/40 text-xs uppercase tracking-widest mb-5">
                {t.detail}
              </div>
              <div className="space-y-4">
                {chartData.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{
                            backgroundColor: `${item.color}18`,
                            color: item.color,
                            border: `1px solid ${item.color}30`,
                          }}
                        >
                          {item.name}
                        </span>
                        <span className="text-white/35 text-xs">
                          {assetCountLabel(item.assets, language)}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-white/70 text-sm font-medium tabular-nums">
                          {fmt(item.value)}
                        </span>
                        <span className="text-white/35 text-xs tabular-nums w-10 text-right">
                          {item.pct}%
                        </span>
                      </div>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
