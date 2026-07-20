import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Video } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { BRANCHES } from "../data/content";

const HQ = BRANCHES.find((b) => b.hq)!;

function arcPath(from: { x: number; y: number }, to: { x: number; y: number }) {
  const mx = (from.x + to.x) / 2;
  const my = Math.min(from.y, to.y) - 14;
  return `M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`;
}

export default function Network() {
  const [selected, setSelected] = useState(BRANCHES[1]);

  return (
    <section id="network" className="relative scroll-mt-20 overflow-hidden bg-night-950 py-20 lg:py-28">
      <div className="bg-grid-dark absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,black,transparent)]" aria-hidden="true" />
      <div className="absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-brand-600/20 blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 left-[8%] h-72 w-72 rounded-full bg-accent-600/15 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* copy + branch list */}
        <div>
          <SectionHeading
            dark
            align="start"
            eyebrow="شبكة أعمالنا الإقليمية"
            title="حضور عابر للحدود يخدمك أينما كنت"
            description="نعمل كمنظومة سحابية متكاملة تخدم عملاءنا وشركاء نجاحنا في مختلف أنحاء الخليج والوطن العربي — بأقصى إنتاجية وسرعة، وكأننا في مكتبك المجاور."
          />

          <div className="mt-8 space-y-3.5">
            {[
              {
                icon: Video,
                title: "جلسات نمو تفاعلية بالفيديو",
                text: "نلتقيك عبر Zoom وMeet أسبوعياً لتخطيط الحملات وتحليل الأرقام معاً.",
                tone: "bg-brand-500/15 text-brand-300",
              },
              {
                icon: MessageSquare,
                title: "مجموعات عمل ومتابعة فورية",
                text: "فريق مخصص لك على WhatsApp لدعم استثنائي وسريع على مدار الساعة.",
                tone: "bg-emerald-500/15 text-emerald-300",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${f.tone}`}>
                  <f.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h4 className="text-sm font-black text-white">{f.title}</h4>
                  <p className="mt-1 text-xs leading-6 font-bold text-slate-400">{f.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 mb-3 text-[11px] font-black uppercase tracking-widest text-slate-500">
            تأثير أعمالنا الرقمية في الوطن العربي
          </p>
          <div className="flex flex-wrap gap-2">
            {BRANCHES.map((b) => (
              <button
                key={b.id}
                onClick={() => setSelected(b)}
                className={`rounded-full border px-4 py-2 text-xs font-extrabold transition-all duration-200 active:scale-95 ${
                  selected.id === b.id
                    ? "border-accent-500 bg-accent-500/15 text-accent-300"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-white/25 hover:text-white"
                }`}
              >
                {b.city}، {b.country}
              </button>
            ))}
          </div>
        </div>

        {/* interactive map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-night-900 shadow-2xl"
        >
          <div className="bg-dots-light absolute inset-0 opacity-60" aria-hidden="true" />

          <svg viewBox="0 0 100 80" className="relative block h-auto w-full" role="img" aria-label="خريطة فروع دلّني في الوطن العربي">
            {/* arcs from HQ */}
            {BRANCHES.filter((b) => !b.hq).map((b) => (
              <path
                key={`arc-${b.id}`}
                d={arcPath(HQ, b)}
                fill="none"
                stroke={selected.id === b.id ? "#F97316" : "#3386FC"}
                strokeOpacity={selected.id === b.id ? 0.9 : 0.35}
                strokeWidth={selected.id === b.id ? 0.8 : 0.45}
                className="arc-dash transition-all duration-300"
              />
            ))}

            {/* branch nodes */}
            {BRANCHES.map((b) => {
              const isSel = selected.id === b.id;
              return (
                <g
                  key={`vis-${b.id}`}
                  transform={`translate(${b.x} ${b.y})`}
                >
                  <circle r={b.hq ? 6 : 4.5} fill="transparent" />
                  <circle
                    className="pin-ring"
                    r={b.hq ? 2.6 : 1.9}
                    fill={b.hq || isSel ? "#F97316" : "#3386FC"}
                    opacity="0.6"
                  />
                  <circle
                    r={b.hq ? 2.6 : 1.9}
                    fill={b.hq ? "#F97316" : isSel ? "#FBBF24" : "#3386FC"}
                    stroke="#fff"
                    strokeWidth="0.45"
                    className="transition-all duration-300"
                  />
                  <text
                    y={b.hq ? -4.6 : -3.6}
                    textAnchor="middle"
                    fontSize="3.1"
                    fontWeight="800"
                    fill={isSel || b.hq ? "#fff" : "#B9C6DE"}
                    fontFamily="Cairo, sans-serif"
                  >
                    {b.city}
                  </text>
                  {b.hq && (
                    <text
                      y={6.4}
                      textAnchor="middle"
                      fontSize="2.4"
                      fontWeight="700"
                      fill="#FBBF24"
                      fontFamily="Cairo, sans-serif"
                    >
                      المقر الرئيسي
                    </text>
                  )}
                </g>
              );
            })}

            {/* Keyboard-accessible branch buttons overlaid on SVG */}
            {BRANCHES.map((b) => (
              <foreignObject
                key={`btn-${b.id}`}
                x={b.x - 8}
                y={b.y - 10}
                width={16}
                height={b.hq ? 22 : 16}
                style={{ pointerEvents: "none" }}
              >
                <button
                  onClick={() => setSelected(b)}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    pointerEvents: "auto",
                  }}
                  aria-label={`فرع ${b.city}، ${b.country}`}
                  aria-pressed={selected.id === b.id}
                />
              </foreignObject>
            ))}
          </svg>

          {/* selected branch info */}
          <div className="relative border-t border-white/10 bg-night-950/70 px-5 py-4 backdrop-blur">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex items-start justify-between gap-4"
              >
                <div>
                  <p className="text-sm font-black text-white">
                    {selected.city}، {selected.country}
                    {selected.hq && (
                      <span className="ms-2 rounded-full bg-accent-500/15 px-2 py-0.5 text-[10px] font-black text-accent-300">
                        المقر الرئيسي
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs leading-6 font-bold text-slate-400">{selected.blurb}</p>
                </div>
                <span className="shrink-0 rounded-xl bg-brand-600/20 px-3 py-1.5 text-xs font-black text-brand-300">
                  {selected.stat}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
