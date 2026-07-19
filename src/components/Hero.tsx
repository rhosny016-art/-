import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, Star } from "lucide-react";
import { Button } from "./ui/Button";
import { HeroVisual } from "./HeroVisual";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="home" className="grain relative isolate overflow-hidden bg-[#050f1b]" aria-labelledby="hero-title">
      {/* atmosphere */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(1100px_620px_at_82%_-8%,rgba(38,110,142,0.32),transparent_62%),radial-gradient(900px_560px_at_6%_108%,rgba(200,145,46,0.16),transparent_60%),linear-gradient(180deg,#071a2d_0%,#050f1b_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-70 [background-image:linear-gradient(rgba(125,185,215,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(125,185,215,0.05)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(75%_60%_at_50%_32%,black,transparent)]"
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-40 top-24 -z-10 h-[480px] w-[480px] rounded-full bg-[#1d6d8c]/20 blur-3xl"
        animate={reduceMotion ? undefined : { opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -left-32 bottom-10 -z-10 h-[420px] w-[420px] rounded-full bg-[#c8912e]/15 blur-3xl"
        animate={reduceMotion ? undefined : { opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-32 sm:pt-36 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6 lg:pb-24 lg:pt-40">
        {/* copy */}
        <div className="order-1 lg:order-2 lg:pr-2">
          <motion.div
            {...enter(0.05)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#8a651f]/50 bg-[#c8912e]/10 px-3 py-1.5 text-xs font-bold text-[#f3c46a] backdrop-blur-sm"
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
            وكالة تسويق رقمي متكاملة — مصر والخليج
          </motion.div>

          <motion.h1
            {...enter(0.13)}
            id="hero-title"
            className="max-w-[620px] text-[2.45rem] font-black leading-[1.2] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.1rem]"
          >
            نضع نشاطك التجاري
            <br />
            على{" "}
            <span className="relative whitespace-nowrap">
              <span className="text-gradient-gold">خريطة النجاح</span>
              <span aria-hidden="true" className="absolute -bottom-2 right-0 h-1 w-full rounded-full bg-gradient-to-l from-[#ffd166]/90 to-[#dd9927]/30" />
              <span aria-hidden="true" className="absolute -inset-x-3 -inset-y-1 -z-10 rounded-full bg-[#c8912e]/20 blur-xl" />
            </span>
          </motion.h1>

          <motion.p {...enter(0.22)} className="mt-7 max-w-[560px] text-base font-medium leading-8 text-[#9fbccd] sm:text-lg">
            نساعد الأنشطة التجارية على تصدر نتائج البحث المحلي، وتحويل الظهور الرقمي إلى عملاء حقيقيين عبر خرائط Google وحملات إعلانية مدروسة بعناية.
          </motion.p>

          <motion.div {...enter(0.31)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={() => scrollTo("contact")}
              size="lg"
              className="h-[52px] rounded-full bg-[#c48325] px-6 text-base font-black text-white shadow-[0_12px_25px_rgba(190,126,26,0.30),inset_0_1px_0_rgba(255,255,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#d8952f] hover:shadow-[0_18px_34px_rgba(190,126,26,0.42)]"
            >
              <MessageCircle className="ml-2 h-5 w-5" />
              احجز استشارتك المجانية
            </Button>
            <Button
              onClick={() => scrollTo("services")}
              variant="outline"
              size="lg"
              className="h-[52px] rounded-full border-white/20 bg-white/5 px-6 text-base font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10"
            >
              <ArrowLeft className="ml-2 h-5 w-5" />
              استكشف خدماتنا
            </Button>
          </motion.div>

          <motion.div
            {...enter(0.4)}
            className="mt-9 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md sm:inline-flex sm:gap-5"
          >
            <div className="flex -space-x-2 space-x-reverse" aria-label="منصات شركائنا">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0b2033] bg-white text-sm font-black text-[#4285f4] shadow-[0_4px_10px_rgba(66,133,244,0.35)]">G</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0b2033] bg-[#edf7ff] text-xs font-black text-[#178bda] shadow-[0_4px_10px_rgba(23,139,218,0.30)]">ads</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0b2033] bg-[#eaf6ed] text-xs font-black text-[#27a457] shadow-[0_4px_10px_rgba(39,164,87,0.30)]">M</span>
            </div>
            <div>
              <p className="text-sm font-black text-white">انضم إلى +250 شريك نجاح</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs font-bold text-[#8fb0c4]">
                <span>4.9 من +200 مراجعة</span>
                <span className="inline-flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="mt-0.5 h-3 w-3 fill-[#ffc93c] text-[#ffc93c]" />
                  ))}
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* living 3D city */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 28, scale: reduceMotion ? 1 : 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
