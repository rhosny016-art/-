import { Globe2, MapPinned, Sparkles, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { CountUp } from "./ui/CountUp";

type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  label: string;
  glow: string;
};

const stats: Stat[] = [
  { value: 250, prefix: "+", label: "شريك نجاح", glow: "rgba(243,196,106,0.16)" },
  { value: 4.9, decimals: 1, label: "متوسط تقييم عملائنا", glow: "rgba(255,209,102,0.18)" },
  { value: 200, prefix: "+", label: "مراجعة موثقة", glow: "rgba(72,215,246,0.16)" },
  { value: 8, label: "أسواق نعمل بها", glow: "rgba(72,215,246,0.14)" },
];

export function Network() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="network" className="grain relative overflow-hidden bg-[#103652] py-20 text-white sm:py-24" aria-labelledby="network-title">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(247,196,90,.45), transparent 22%), radial-gradient(circle at 85% 90%, rgba(42,174,194,.42), transparent 26%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-black text-[#f0be5a]">
              <Sparkles className="h-4 w-4" />
              شبكتنا تكبر كل يوم
            </p>
            <h2 id="network-title" className="text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl">
              علامات تجارية تثق بأن نجاحها يستحق أن يُرى
            </h2>
            <p className="mt-5 max-w-md text-base font-medium leading-8 text-[#d0e0e9]">
              من القاهرة إلى الرياض والخليج، نبني شبكة من الشركاء الذين اختاروا الظهور الصحيح والنمو المستدام.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-white">
                <MapPinned className="h-3.5 w-3.5 text-[#f0be5a]" />
                مصر والخليج
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-white">
                <Globe2 className="h-3.5 w-3.5 text-[#f0be5a]" />
                حضور متعدد الأسواق
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={{ boxShadow: `0 0 40px ${stat.glow}` }}
                className="rounded-2xl border border-white/15 bg-white/[0.09] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-md"
              >
                <CountUp
                  value={stat.value}
                  decimals={stat.decimals ?? 0}
                  prefix={stat.prefix ?? ""}
                  duration={1.8}
                  className="font-mono text-3xl font-bold text-[#f3c46a] sm:text-4xl"
                />
                <p className="mt-2 text-sm font-bold text-[#dceaf1]">{stat.label}</p>
                {stat.label.includes("تقييم") ? (
                  <span className="mt-2 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-3 w-3 fill-[#f3c46a] text-[#f3c46a]" />
                    ))}
                  </span>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-white/15 pt-8">
          <p className="text-center text-xs font-bold tracking-[0.22em] text-[#a9c6d5]">منصات نعمل معها ونفهمها</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-center">
            <span className="rounded-xl bg-white px-5 py-3 text-lg font-black text-[#4285f4] shadow-lg">Google</span>
            <span className="rounded-xl bg-white px-5 py-3 text-sm font-black text-[#1877f2] shadow-lg">Meta Business</span>
            <span className="rounded-xl bg-white px-5 py-3 text-sm font-black text-[#d34432] shadow-lg">Google Ads</span>
            <span className="rounded-xl bg-white px-5 py-3 text-sm font-black text-[#0a66c2] shadow-lg">LinkedIn</span>
          </div>
        </div>
      </div>
    </section>
  );
}
