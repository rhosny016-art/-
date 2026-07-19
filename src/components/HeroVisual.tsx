import React from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import {
  Building2,
  Eye,
  MapPinned,
  Phone,
  ShieldCheck,
  Star,
  Stethoscope,
  Store,
  ThumbsUp,
  TrendingUp,
  Users,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";
import cityImage from "../assets/city-hero.jpg";
import { CountUp } from "./ui/CountUp";

const categoryPins = [
  { icon: UtensilsCrossed, label: "المطاعم", tone: "gold", pos: "left-[3%] top-[45%]", delay: 0, duration: 4.4 },
  { icon: Stethoscope, label: "العيادات", tone: "cyan", pos: "left-[25%] top-[21%]", delay: 0.5, duration: 5 },
  { icon: Building2, label: "الشركات", tone: "cyan", pos: "right-[10%] top-[30%]", delay: 0.9, duration: 4.8 },
  { icon: Store, label: "المتاجر", tone: "gold", pos: "right-[3%] top-[58%]", delay: 1.3, duration: 5.4 },
  { icon: Wrench, label: "الخدمات", tone: "cyan", pos: "left-[36%] bottom-[15%]", delay: 0.7, duration: 4.6 },
] as const;

const sparkles = [
  { left: "16%", top: "64%", delay: "0s", color: "#7fe8ff" },
  { left: "29%", top: "38%", delay: "0.9s", color: "#ffd98f" },
  { left: "62%", top: "72%", delay: "1.6s", color: "#7fe8ff" },
  { left: "76%", top: "44%", delay: "0.4s", color: "#ffd98f" },
  { left: "45%", top: "74%", delay: "2s", color: "#ffd98f" },
  { left: "88%", top: "68%", delay: "1.2s", color: "#7fe8ff" },
  { left: "10%", top: "34%", delay: "2.3s", color: "#7fe8ff" },
  { left: "56%", top: "20%", delay: "0.7s", color: "#ffd98f" },
];

const heroStats = [
  { icon: Users, value: 250, prefix: "+", suffix: "", label: "عميل ناجح من مختلف المجالات" },
  { icon: Star, value: 200, prefix: "+", suffix: "", label: "تقييم إيجابي على Google" },
  { icon: ThumbsUp, value: 95, prefix: "+", suffix: "%", label: "رضا العملاء عن خدماتنا" },
];

const miniSignals = [
  { icon: Eye, label: "زيادة الظهور" },
  { icon: ShieldCheck, label: "ثقة العملاء" },
  { icon: TrendingUp, label: "زيارات أكثر" },
  { icon: Phone, label: "مكالمات" },
];

function GoogleMark() {
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_6px_16px_rgba(0,0,0,0.35)] sm:h-11 sm:w-11"
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" className="h-5 w-5 sm:h-6 sm:w-6">
        <path
          fill="#FFC107"
          d="M43.6 20.1H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.7-.4-3.9z"
        />
        <path
          fill="#FF3D00"
          d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
        />
        <path
          fill="#4CAF50"
          d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
        />
        <path
          fill="#1976D2"
          d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C41 35.4 44 30.3 44 24c0-1.3-.1-2.7-.4-3.9z"
        />
      </svg>
    </span>
  );
}

export function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springConfig = { stiffness: 55, damping: 16, mass: 0.7 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5.5, -5.5]), springConfig);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6.5, 6.5]), springConfig);
  const imageX = useTransform(mx, [-0.5, 0.5], [10, -10]);
  const imageY = useTransform(my, [-0.5, 0.5], [8, -8]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - bounds.left) / bounds.width - 0.5);
    my.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetPointer = () => {
    mx.set(0);
    my.set(0);
  };

  const float = (delay: number, duration: number, distance = 7) =>
    reduceMotion
      ? {}
      : {
          animate: { y: [0, -distance, 0] },
          transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const },
        };

  const enter = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 18, scale: reduceMotion ? 1 : 0.92 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <div
      className="relative mx-auto w-full max-w-[780px] px-1 pb-12 pt-8 [perspective:1500px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      {/* ambient halo behind the model */}
      <div
        aria-hidden="true"
        className="absolute inset-x-[6%] bottom-[18%] top-[8%] rounded-[50%] bg-[radial-gradient(50%_50%_at_50%_42%,rgba(46,178,214,0.18),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-[22%] top-0 h-64 rounded-full bg-[radial-gradient(closest-side,rgba(243,196,106,0.22),transparent)] blur-3xl"
      />

      <motion.div
        style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative will-change-transform"
      >
        {/* ============ the living city "model" ============ */}
        <div className="relative z-10 rounded-[1.9rem] border border-white/10 bg-[#051626] p-1.5 shadow-[0_50px_100px_rgba(1,8,16,0.75),0_0_80px_rgba(48,170,205,0.10)] sm:p-2">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[1.55rem] bg-[#071c2e] sm:aspect-[4/3]">
            {/* city render: slow cinematic zoom + pointer parallax */}
            <motion.div style={reduceMotion ? undefined : { x: imageX, y: imageY }} className="absolute inset-0">
              <motion.img
                src={cityImage}
                alt="مجسم ثلاثي الأبعاد لمدينة ذكية ليلاً، تتوهج شوارعها بمسارات ضوئية وتعلو أطول أبراجها علامة موقع ذهبية مشعة"
                draggable={false}
                loading="eager"
                // @ts-expect-error - fetchPriority is valid HTML but not yet in TS DOM types
                fetchpriority="high"
                decoding="async"
                initial={{ scale: 1.12 }}
                animate={reduceMotion ? undefined : { scale: [1.12, 1.18, 1.12] }}
                transition={reduceMotion ? { duration: 0 } : { duration: 14, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full select-none object-cover"
              />
            </motion.div>

            {/* cinematic grade + vignette */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5] bg-[linear-gradient(to_top,rgba(4,14,24,0.66),transparent_44%)]" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[5] bg-[linear-gradient(115deg,rgba(5,20,32,0.38),transparent_36%,rgba(243,196,106,0.09)_70%,rgba(5,20,32,0.30))]"
            />

            {/* flowing traffic light-trails */}
            <svg
              aria-hidden="true"
              viewBox="0 0 800 600"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 z-[6] h-full w-full"
            >
              <g fill="none" strokeLinecap="round">
                <path
                  d="M-25 505 C 150 458 235 484 345 438 C 445 398 505 432 595 402 C 695 370 745 394 835 352"
                  stroke="rgba(94,207,240,0.15)"
                  strokeWidth="9"
                />
                <path
                  d="M252 442 C 288 372 482 362 537 414 C 582 460 488 508 390 502 C 298 497 224 494 252 442 Z"
                  stroke="rgba(94,207,240,0.13)"
                  strokeWidth="9"
                />
                <path
                  d="M-35 566 C 180 548 330 546 478 522 C 606 502 705 508 835 472"
                  stroke="rgba(255,209,102,0.13)"
                  strokeWidth="8"
                />
                <path
                  d="M-25 505 C 150 458 235 484 345 438 C 445 398 505 432 595 402 C 695 370 745 394 835 352"
                  stroke="#6fe6ff"
                  strokeWidth="3.2"
                  strokeDasharray="10 90"
                  className="traffic-pulse"
                  style={{ animationDuration: "6.5s", filter: "drop-shadow(0 0 6px rgba(72,215,246,0.95))" }}
                />
                <path
                  d="M252 442 C 288 372 482 362 537 414 C 582 460 488 508 390 502 C 298 497 224 494 252 442 Z"
                  stroke="#9df1ff"
                  strokeWidth="3"
                  strokeDasharray="8 92"
                  className="traffic-pulse"
                  style={{ animationDuration: "8.5s", animationDelay: "-2s", filter: "drop-shadow(0 0 5px rgba(72,215,246,0.9))" }}
                />
                <path
                  d="M-35 566 C 180 548 330 546 478 522 C 606 502 705 508 835 472"
                  stroke="#ffd166"
                  strokeWidth="3.4"
                  strokeDasharray="12 88"
                  className="traffic-pulse"
                  style={{ animationDuration: "10s", animationDelay: "-4s", filter: "drop-shadow(0 0 6px rgba(255,197,90,0.9))" }}
                />
              </g>

              {/* thin data-flow lines converging on the central pin (50%,52%) */}
              <g fill="none" strokeLinecap="round" opacity="0.55">
                {[
                  "M60 270 C 200 300 320 360 400 312",
                  "M740 252 C 600 290 470 350 400 312",
                  "M120 480 C 240 470 330 420 400 390",
                  "M690 470 C 560 460 470 420 400 390",
                ].map((d, i) => (
                  <path
                    key={i}
                    d={d}
                    stroke={i % 2 === 0 ? "#62e0fa" : "#ffd166"}
                    strokeWidth="1"
                    strokeDasharray="3 12"
                    className="traffic-pulse"
                    style={{
                      animationDuration: `${4 + i}s`,
                      animationDelay: `-${i}s`,
                      filter: `drop-shadow(0 0 3px ${i % 2 === 0 ? "rgba(72,215,246,0.6)" : "rgba(255,197,90,0.5)"})`,
                    }}
                  />
                ))}
              </g>
            </svg>

            {/* golden beam rising from the giant pin */}
            <div
              aria-hidden="true"
              className="beam-pulse pointer-events-none absolute left-1/2 top-[4%] z-[7] h-[45%] w-24 -translate-x-1/2 bg-[linear-gradient(to_bottom,rgba(255,206,96,0.55),rgba(255,206,96,0.06)_82%,transparent)] blur-md"
              style={{ clipPath: "polygon(42% 0, 58% 0, 90% 100%, 10% 100%)" }}
            />
            <div
              aria-hidden="true"
              className="soft-glow pointer-events-none absolute left-1/2 top-[24%] z-[7] h-28 w-28 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,206,96,0.6),transparent_65%)] blur-lg"
            />

            {/* sonar rings at the pin base */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[52%] z-[7] h-14 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[100%] border-2 border-[#ffd88a]/40"
            />
            {!reduceMotion && (
              <>
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-[52%] z-[7] h-14 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[100%] border-2 border-[#ffd88a]/60"
                  animate={{ scale: [0.75, 1.8], opacity: [0.85, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-[52%] z-[7] h-14 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[100%] border-2 border-[#ffd88a]/60"
                  animate={{ scale: [0.75, 1.8], opacity: [0.85, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 1.2 }}
                />
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-[52%] z-[7] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffe3a3] shadow-[0_0_18px_6px_rgba(255,205,94,0.8)]"
                  animate={{ opacity: [0.6, 1, 0.6], scale: [0.9, 1.25, 0.9] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </>
            )}

            {/* blinking city lights */}
            {sparkles.map((dot, index) => (
              <span
                key={index}
                aria-hidden="true"
                className="twinkle pointer-events-none absolute z-[7] h-[5px] w-[5px] rounded-full"
                style={{ left: dot.left, top: dot.top, backgroundColor: dot.color, boxShadow: `0 0 12px 4px ${dot.color}66`, animationDelay: dot.delay }}
              />
            ))}

            {/* shine sweep */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-y-24 left-[-30%] z-[8] w-1/4 rotate-[18deg] bg-gradient-to-l from-transparent via-white/10 to-transparent"
              animate={reduceMotion ? undefined : { x: ["0%", "560%"] }}
              transition={reduceMotion ? { duration: 0 } : { duration: 6.5, repeat: Infinity, repeatDelay: 4.5, ease: "easeInOut" }}
            />

            {/* floating category map-pins */}
            {categoryPins.map((pin) => (
              <motion.div key={pin.label} {...enter(0.9 + pin.delay * 0.25)} className={`absolute z-[9] ${pin.pos}`}>
                <motion.span
                  {...float(pin.delay, pin.duration)}
                  className="flex items-center gap-1.5 rounded-full border border-white/15 bg-[#062634]/85 px-2.5 py-1.5 text-[10px] font-black text-white shadow-[0_10px_24px_rgba(0,0,0,0.45)] backdrop-blur-md sm:px-3 sm:text-xs"
                >
                  <pin.icon strokeWidth={2.5} className={`h-3.5 w-3.5 ${pin.tone === "gold" ? "text-[#ffcf6b]" : "text-[#62e0fa]"}`} />
                  {pin.label}
                </motion.span>
                <span aria-hidden="true" className="mx-auto mt-0.5 block h-3 w-px bg-gradient-to-b from-white/50 to-transparent" />
                <span aria-hidden="true" className="mx-auto block h-1 w-1 rounded-full bg-white/70" />
              </motion.div>
            ))}

            {/* bottom corner badges */}
            <div className="absolute bottom-3.5 right-3.5 z-[9] flex items-center gap-2 rounded-full border border-white/15 bg-[#05202f]/70 px-3 py-1.5 text-[10px] font-bold text-white/90 shadow-lg backdrop-blur-md sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5ce1b6] opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5ce1b6]" />
              </span>
              مدينة متصلة تعمل الآن
            </div>
            <div
              className="absolute bottom-3.5 left-3.5 z-[9] hidden items-center gap-2 rounded-full border border-white/15 bg-[#05202f]/70 px-3 py-1.5 font-mono text-[10px] font-bold text-[#8fe9ff] shadow-lg backdrop-blur-md sm:flex sm:text-xs"
              dir="ltr"
            >
              <MapPinned className="h-3.5 w-3.5" />
              LIVE LOCAL SIGNAL
            </div>
          </div>
        </div>

        {/* ============ floating HUD cards ============ */}
        {/* growth card */}
        <motion.div {...enter(0.55)} className="absolute -left-1 top-[9%] z-30 w-[146px] sm:-left-6 sm:w-[188px]" style={reduceMotion ? undefined : { transform: "translateZ(40px)" }}>
          <motion.div
            {...float(0.2, 5)}
            className="rounded-2xl border border-white/10 bg-[#07293c]/90 p-3.5 shadow-[0_28px_60px_rgba(0,0,0,0.55),0_0_30px_rgba(255,209,102,0.12),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-4"
          >
            <div className="flex items-center justify-between" dir="ltr">
              <CountUp
                value={300}
                prefix="+"
                suffix="%"
                duration={1.8}
                className="font-mono text-2xl font-bold text-[#ffd166] sm:text-3xl"
              />
              <span className="rounded-lg bg-[#12384e] p-1.5 text-[#ffd166]">
                <TrendingUp className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-1.5 text-[10px] font-bold text-[#9fc3d6] sm:text-xs">نمو ظهور العملاء</p>
            <svg viewBox="0 0 76 30" className="mt-2 h-8 w-full" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="sparkArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffd166" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#ffd166" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M2 26 L16 22 L28 24 L42 13 L56 16 L72 4 L72 30 L2 30 Z" fill="url(#sparkArea)" />
              <motion.path
                d="M2 26 L16 22 L28 24 L42 13 L56 16 L72 4"
                stroke="#ffd166"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: 0.9, ease: "easeOut" }}
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* calls card */}
        <motion.div {...enter(0.7)} className="absolute -left-1 bottom-[14%] z-30 w-[150px] sm:-left-8 sm:bottom-[17%] sm:w-[192px]" style={reduceMotion ? undefined : { transform: "translateZ(40px)" }}>
          <motion.div
            {...float(0.9, 5.6)}
            className="rounded-2xl border border-white/10 bg-[#07293c]/90 p-3.5 shadow-[0_28px_60px_rgba(0,0,0,0.55),0_0_30px_rgba(72,215,246,0.12),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-4"
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#12384e] text-[#6fe6ff]">
                <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-xl bg-[#6fe6ff]/20 motion-reduce:hidden" />
                <Phone className="relative h-4 w-4" />
              </span>
              <div>
                <CountUp
                  value={500}
                  prefix="+"
                  duration={1.8}
                  className="font-mono text-xl font-bold leading-none text-[#6fe6ff]"
                />
                <p className="mt-1 text-[9px] font-bold leading-4 text-[#9fc3d6] sm:text-[11px]">مكالمة يومية من العملاء</p>
              </div>
            </div>
            <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-[#0d4634]/70 px-2 py-0.5 text-[9px] font-bold text-[#67e3b0]">
              <TrendingUp className="h-3 w-3" />
              زيادة الطلبات +64%
            </span>
          </motion.div>
        </motion.div>

        {/* Google rating card */}
        <motion.div {...enter(0.85)} className="absolute -right-1 -top-3 z-30 w-[204px] sm:-right-5 sm:-top-7 sm:w-[248px]" style={reduceMotion ? undefined : { transform: "translateZ(40px)" }}>
          <motion.div
            {...float(0.5, 5.2)}
            className="rounded-2xl border border-white/10 bg-[#07293c]/90 p-3.5 shadow-[0_28px_60px_rgba(0,0,0,0.55),0_0_30px_rgba(255,209,102,0.10),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-4"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[9px] font-bold leading-4 text-[#9fc3d6] sm:text-[11px]">تقييم عملائنا في خرائط Google</p>
                <div className="mt-1.5 flex items-center gap-2" dir="ltr">
                  <CountUp
                    value={4.9}
                    decimals={1}
                    duration={2}
                    className="font-mono text-2xl font-bold leading-none text-white sm:text-3xl"
                  />
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-3 w-3 fill-[#ffc93c] text-[#ffc93c] sm:h-3.5 sm:w-3.5" />
                    ))}
                  </span>
                </div>
                <p className="mt-1 text-[9px] font-bold text-[#67e3b0]">320+ تقييم</p>
              </div>
              <GoogleMark />
            </div>
            <div className="mt-3 grid grid-cols-4 gap-1 border-t border-white/10 pt-2.5 text-center">
              {miniSignals.map((signal) => (
                <div key={signal.label} className="flex flex-col items-center gap-1">
                  <signal.icon className="h-3.5 w-3.5 text-[#62e0fa]" strokeWidth={2.2} />
                  <span className="text-[8px] font-bold leading-3 text-[#8fb4c7] sm:text-[9px]">{signal.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ============ bottom proof bar ============ */}
        <motion.div {...enter(1)} className="relative z-30 mx-auto -mt-8 w-[94%] sm:-mt-10">
          <div className="grid grid-cols-3 divide-x divide-white/10 divide-x-reverse rounded-2xl border border-white/10 bg-[#06283c]/90 px-3 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl sm:px-5">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 px-1 text-center sm:gap-1.5">
                <span className="flex items-center gap-1.5">
                  <stat.icon className="h-4 w-4 text-[#ffd166] sm:h-5 sm:w-5" strokeWidth={2.4} />
                  <CountUp
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={1.8}
                    className="font-mono text-lg font-bold text-white sm:text-2xl"
                  />
                </span>
                <span className="text-[9px] font-bold leading-4 text-[#8fb4c7] sm:text-[11px]">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
