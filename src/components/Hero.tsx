import { motion } from "framer-motion";
import { ArrowLeft, Navigation, Phone, Search, Star, TrendingUp } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { WA_DEFAULT, scrollToSection } from "../lib/site";

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="grain relative overflow-hidden pt-[118px] lg:pt-[132px]"
      style={{
        background:
          "linear-gradient(180deg, #E8F1FA 0%, #F1F7FD 38%, #FFFFFF 82%)",
      }}
    >
      {/* luminous backdrop: rays + gold & blue glows + grid */}
      <div className="light-rays absolute inset-0" aria-hidden="true" />
      <div
        className="bg-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_72%_62%_at_50%_30%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 right-[12%] h-[420px] w-[420px] rounded-full bg-amber-200/50 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-24 left-[2%] h-[380px] w-[380px] rounded-full bg-brand-200/45 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6 lg:px-8 lg:pb-24">
        {/* ------------------------------------------------ copy */}
        <div className="flex flex-col items-start gap-7">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2.5 text-sm font-black text-brand-900"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-80" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
            </span>
            وكالة تسويق رقمي متكاملة — مصر والخليج
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[2.5rem] font-black leading-[1.3] tracking-tight text-balance text-night-900 sm:text-6xl sm:leading-[1.22] xl:text-[4.2rem] xl:leading-[1.18]"
          >
            نضع نشاطك التجاري
            <br />
            على{" "}
            <span className="relative inline-block pb-2">
              <span className="text-gold-animated">خريطة النجاح</span>
              <svg
                className="absolute -bottom-1 right-0 w-full"
                viewBox="0 0 260 14"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="gold-line" x1="0" y1="0" x2="260" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#F59E0B" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#F59E0B" />
                    <stop offset="1" stopColor="#FCD34D" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <path
                  d="M6 10 C 70 3.5, 190 3.5, 254 9"
                  stroke="url(#gold-line)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="max-w-xl text-base leading-9 font-semibold text-slate-500 sm:text-lg sm:leading-10"
          >
            نساعد الأنشطة التجارية على تصدّر نتائج البحث المحلي، وتحويل الظهور
            الرقمي إلى عملاء حقيقيين — عبر خرائط Google وحملات إعلانية مدروسة
            بعناية على كل المنصات.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center"
          >
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex min-h-[56px] items-center justify-center gap-2.5 rounded-full px-8 text-base font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95"
            >
              <WhatsAppIcon className="h-5 w-5" />
              احجز استشارتك المجانية
            </a>
            <button
              onClick={() => scrollToSection("services")}
              className="group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full border border-slate-300/90 bg-white/80 px-8 text-base font-extrabold text-night-900 shadow-[0_10px_30px_-12px_rgba(13,42,92,0.25)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-white active:scale-95"
            >
              استكشف خدماتنا
              <ArrowLeft className="h-4.5 w-4.5 transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
          </motion.div>

          {/* trust glass bar */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="glass-chip flex w-full max-w-xl flex-wrap items-center justify-between gap-x-6 gap-y-3 rounded-3xl px-5 py-4 sm:rounded-full sm:px-6"
          >
            <div className="flex items-center">
              {["أ", "س", "م", "خ"].map((c, i) => (
                <span
                  key={i}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[11px] font-black text-white shadow-md ${
                    i !== 0 ? "-ms-3" : ""
                  } ${
                    ["bg-brand-600", "bg-emerald-500", "bg-amber-500", "bg-night-900"][i]
                  }`}
                >
                  {c}
                </span>
              ))}
              <span className="ms-3 text-sm font-extrabold text-slate-700">
                انضم إلى <span className="font-black text-amber-600 ltr-nums">+250</span> شريك نجاح
              </span>
            </div>
            <span className="flex items-center gap-1.5 text-sm font-extrabold text-slate-700">
              <span className="flex text-amber-400" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 drop-shadow-[0_1px_2px_rgba(245,158,11,0.5)]" />
                ))}
              </span>
              <span className="ltr-nums font-black">4.9</span>
              <span className="text-slate-400">من +200 مراجعة</span>
            </span>
          </motion.div>
        </div>

        {/* ------------------------------------------------ 3D visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 36 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[600px]"
        >
          {/* radiant golden halo behind the city */}
          <div
            className="absolute inset-x-[12%] top-[8%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.4)_0%,rgba(251,191,36,0.12)_45%,transparent_70%)] blur-2xl"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-[4%] bottom-[10%] aspect-[3/2] rounded-full bg-[radial-gradient(circle,rgba(51,134,252,0.22)_0%,transparent_70%)] blur-3xl"
            aria-hidden="true"
          />

          {/* the 3D city */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <picture>
              <source srcSet="/hero-city.avif" type="image/avif" />
              <source srcSet="/hero-city.webp" type="image/webp" />
              <img
                src="/hero-city.png"
                alt="مدينة مصغرة ثلاثية الأبعاد يعلوها دبوس خريطة ذهبي يرمز إلى تصدّر نشاطك التجاري"
                width={640}
                height={640}
                className="relative z-10 mx-auto w-full max-w-[560px] drop-shadow-[0_50px_60px_rgba(10,35,80,0.35)]"
                draggable={false}
                fetchPriority="high"
              />
            </picture>
            {/* soft ground reflection */}
            <div
              className="absolute bottom-[2%] left-1/2 z-0 h-14 w-[68%] -translate-x-1/2 rounded-[100%] bg-night-950/25 blur-2xl"
              aria-hidden="true"
            />
          </motion.div>

          {/* floating glass chips */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -top-1 right-0 z-20 sm:right-2"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-chip flex items-center gap-2.5 rounded-2xl px-4 py-3"
            >
              <Search className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
              <span className="max-w-[170px] truncate text-[12.5px] font-extrabold text-night-900">
                أفضل عيادة أسنان قريبة مني…
              </span>
              <span className="btn-gold flex h-7 w-7 items-center justify-center rounded-lg text-white">
                <Search className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="absolute left-0 top-[22%] z-20 hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="glass-chip rounded-2xl px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-amber-500" aria-hidden="true" />
                <p className="text-xl font-black leading-none text-night-900 ltr-nums">+300%</p>
              </div>
              <svg viewBox="0 0 90 26" className="mt-1.5 w-24" aria-hidden="true">
                <path
                  d="M3 22 C 18 20, 24 14, 36 15 C 48 16, 54 8, 68 7 C 76 6.5, 82 4, 87 3"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="87" cy="3" r="2.6" fill="#F59E0B" />
              </svg>
              <p className="mt-1 text-[10.5px] font-extrabold text-slate-500">نمو الظهور المحلي</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-[30%] left-0 z-20 sm:left-1"
          >
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="glass-chip flex items-center gap-3 rounded-2xl px-4 py-3"
            >
              <span className="btn-gold flex h-10 w-10 items-center justify-center rounded-xl text-white">
                <Phone className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-lg font-black leading-none text-night-900 ltr-nums">+500</p>
                <p className="mt-1 text-[10.5px] font-extrabold text-slate-500">
                  مكالمة شهرية من الخريطة
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute bottom-[4%] right-0 z-20 sm:right-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="glass-chip flex items-center gap-3 rounded-2xl px-4 py-3.5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-black text-brand-600 shadow-md ring-1 ring-slate-100">
                G
              </span>
              <div>
                <p className="text-[13px] font-black text-night-900">نشاطك التجاري</p>
                <p className="mt-1 flex items-center gap-1.5 text-[10.5px] font-extrabold text-slate-500">
                  <span className="flex text-amber-400" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400" />
                    ))}
                  </span>
                  <span className="ltr-nums">4.9</span>
                  <span className="rounded-full bg-emerald-100/90 px-2 py-0.5 text-[9.5px] font-black text-emerald-700">
                    مفتوح الآن
                  </span>
                </p>
              </div>
              <Navigation className="h-4 w-4 text-brand-500" aria-hidden="true" />
            </motion.div>
          </motion.div>

          {/* golden dust particles */}
          {(
            [
              { top: "12%", right: "18%", size: 6, delay: 0 },
              { top: "34%", left: "10%", size: 5, delay: 1.2 },
              { bottom: "22%", right: "8%", size: 7, delay: 2 },
              { top: "55%", left: "22%", size: 4, delay: 0.6 },
            ] as { top?: string; bottom?: string; left?: string; right?: string; size: number; delay: number }[]
          ).map((p, i) => (
            <motion.span
              key={i}
              className="absolute z-20 rounded-full bg-amber-300 shadow-[0_0_14px_4px_rgba(251,191,36,0.55)]"
              style={{
                top: p.top,
                bottom: p.bottom,
                left: p.left,
                right: p.right,
                width: p.size,
                height: p.size,
              }}
              animate={{ y: [0, -16, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
              aria-hidden="true"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
