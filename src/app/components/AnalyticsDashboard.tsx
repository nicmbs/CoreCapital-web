import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { DollarSign, TrendingUp, Calendar, BarChart2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const portfolioData = [
  { name: "Real Estate", value: 23630, pct: 47.6, color: "#39FF71" },
  { name: "Bank CDAs", value: 15000, pct: 30.2, color: "#00d4ff" },
  { name: "Corporate Bonds", value: 8038, pct: 16.2, color: "#93c5fd" },
  { name: "Mutual Funds", value: 2500, pct: 5.0, color: "#f59e0b" },
  { name: "Crypto Bot", value: 488, pct: 1.0, color: "#f97316" },
];

const statCards = [
  {
    label: "Total Capital",
    sub: "Total invested capital",
    value: "$49,656.00",
    icon: DollarSign,
    color: "#39FF71",
    isGreen: true,
  },
  {
    label: "AVG TAN Interest",
    sub: "Avg. rate of interest assets",
    value: "7.02%",
    icon: TrendingUp,
    color: "#39FF71",
    isGreen: true,
  },
  {
    label: "Interest / Month",
    sub: "Monthly net income",
    value: "$152.16",
    icon: Calendar,
    color: "#39FF71",
    isGreen: false,
  },
  {
    label: "Capital Appreciation",
    sub: "Capital in appreciation assets",
    value: "$23,630.00",
    icon: BarChart2,
    color: "#39FF71",
    isGreen: false,
  },
  {
    label: "AVG TAN Capital",
    sub: "Avg. rate of appreciation assets",
    value: "12.50%",
    icon: TrendingUp,
    color: "#39FF71",
    isGreen: true,
  },
  {
    label: "Appreciation / Month",
    sub: "Estimated monthly appreciation",
    value: "$246.15",
    icon: Calendar,
    color: "#39FF71",
    isGreen: false,
  },
];

function StatCard({ card, index }: { card: (typeof statCards)[0]; index: number }) {
  const Icon = card.icon;
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
          <span className="text-white/40 text-xs uppercase tracking-widest">{card.label}</span>
          <div className="w-8 h-8 rounded-lg bg-[#39FF71]/12 flex items-center justify-center">
            <Icon size={14} className="text-[#39FF71]" />
          </div>
        </div>
        <div
          className="mb-1"
          style={{
            fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
            fontWeight: 700,
            color: card.isGreen ? "#39FF71" : "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          {card.value}
        </div>
        <div className="text-white/35 text-xs">{card.sub}</div>
      </div>
    </motion.div>
  );
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
      <div className="bg-[#1a1d24] border border-white/10 rounded-xl px-4 py-2.5 shadow-2xl">
        <div className="text-white text-sm font-semibold">{d.name}</div>
        <div style={{ color: d.color }} className="text-sm font-bold">
          ${d.value.toLocaleString()} · {d.pct}%
        </div>
      </div>
    );
  }
  return null;
};

export function AnalyticsDashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const totalCapital = portfolioData.reduce((a, b) => a + b.value, 0);

  const { language } = useLanguage();

  return (
    <section id="analytics" className="relative bg-[#0a0b0f] py-28 overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF71]/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#39FF71]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-cyan-500/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#39FF71]/10 border border-[#39FF71]/20 rounded-full px-4 py-1.5 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#39FF71] animate-pulse" />
            <span className="text-[#39FF71] text-sm font-medium">Live Portfolio Analytics</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Your wealth,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #39FF71 0%, #00d4ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              at a glance
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 max-w-xl mx-auto"
            style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            Real-time capital tracking, income projections, and asset-class breakdowns — all in one unified dashboard.
          </motion.p>
        </div>

        {/* Stat Cards Grid — 6 cards, 3x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {statCards.map((card, i) => (
            <StatCard key={card.label} card={card} index={i} />
          ))}
        </div>

        {/* Bottom row: Portfolio Donut + Right Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Portfolio Donut */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#111318] border border-white/6 rounded-2xl p-6"
          >
            <div className="text-white/40 text-xs uppercase tracking-widest mb-6">Portfolio</div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Chart */}
              <div className="w-48 h-48 shrink-0 min-h-[12rem]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={portfolioData}
                      cx="50%"
                      cy="50%"
                      innerRadius={58}
                      outerRadius={88}
                      paddingAngle={2}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                    >
                      {portfolioData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Legend */}
              <div className="flex flex-col gap-3 flex-1 w-full">
                {portfolioData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-white/70 text-sm">{item.name}</span>
                    </div>
                    <span className="text-white/60 text-sm font-medium tabular-nums">
                      ${item.value.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right panel: Capitalization + Asset Detail */}
          <div className="flex flex-col gap-4">
            {/* Capitalization card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#111318] border border-[#39FF71]/15 rounded-2xl p-5 flex items-center justify-between"
            >
              <div>
                <div className="text-white/40 text-xs uppercase tracking-widest mb-2">
                  Capitalization / Month
                </div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  $398.31
                </div>
                <div className="text-white/40 text-xs mt-1">Estimated monthly reinvestment</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#39FF71]/12 flex items-center justify-center">
                <TrendingUp size={22} className="text-[#39FF71]" />
              </div>
            </motion.div>

            {/* Asset Detail Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#111318] border border-white/6 rounded-2xl p-5 flex-1"
            >
              <div className="text-white/40 text-xs uppercase tracking-widest mb-5">
                Detail by Asset Type
              </div>
              <div className="space-y-4">
                {portfolioData.map((item, i) => (
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
                        <span className="text-white/35 text-xs">1 asset</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-white/70 text-sm font-medium tabular-nums">
                          ${item.value.toLocaleString()}
                        </span>
                        <span className="text-white/35 text-xs tabular-nums w-10 text-right">
                          {item.pct}%
                        </span>
                      </div>
                    </div>
                    {/* Progress bar */}
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