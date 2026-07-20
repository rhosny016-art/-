import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "../data/content";

function CountUp({
  target,
  decimals = 0,
  suffix,
  start,
}: {
  target: number;
  decimals?: number;
  suffix: string;
  start: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1900;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);

  return (
    <span className="ltr-nums tabular-nums">
      {value.toFixed(decimals)}
      <span className="text-accent-400">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="relative overflow-hidden bg-night-950 py-16 lg:py-20">
      <div className="bg-grid-dark absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_75%_80%_at_50%_50%,black,transparent)]" aria-hidden="true" />
      <div className="absolute -top-32 left-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[120px]" aria-hidden="true" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative flex flex-col items-center gap-2 text-center"
            >
              <p className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                <CountUp target={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} start={inView} />
              </p>
              <p className="text-sm font-extrabold text-brand-200 sm:text-base">{s.label}</p>
              <p className="text-xs font-medium text-slate-400">{s.note}</p>
              {i < STATS.length - 1 && (
                <span
                  className="absolute left-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-white/10 lg:block"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
