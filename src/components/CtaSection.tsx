import { motion } from "framer-motion";
import { ArrowLeft, PhoneCall } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { SITE, WA_DEFAULT, scrollToSection } from "../lib/site";

export default function CtaSection() {
  return (
    <section id="cta" className="relative scroll-mt-20 bg-white pb-20 pt-4 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-night-950 px-6 py-16 text-center shadow-2xl sm:px-12 lg:py-20"
        >
          <div className="bg-grid-dark absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_65%_75%_at_50%_50%,black,transparent)]" aria-hidden="true" />
          <div className="absolute -top-28 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full bg-brand-600/30 blur-[110px]" aria-hidden="true" />
          <div className="absolute -bottom-24 right-[10%] h-52 w-52 rounded-full bg-accent-600/25 blur-[90px]" aria-hidden="true" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-extrabold text-brand-300">
              خطوتك الأولى لا تكلفك شيئاً
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-black leading-[1.4] tracking-tight text-white text-balance sm:text-4xl sm:leading-[1.35] lg:text-[2.7rem]">
              جاهز لتحويل حضورك الرقمي إلى عملاء حقيقيين؟
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-9 font-medium text-slate-300 sm:text-lg sm:leading-10">
              انضم إلى أكثر من 250 شريك نجاح اختاروا النمو الحقيقي والمستدام.
              استشارتك الأولى ومراجعة ملفك التجاري مجانية بالكامل — بلا أي التزام.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[56px] w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-l from-emerald-500 to-green-500 px-8 text-base font-extrabold text-white shadow-[0_12px_40px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_18px_50px_rgba(37,211,102,0.5)] active:scale-95 sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                ابدأ المحادثة واستشرنا مجاناً
              </a>
              <a
                href={`tel:+${SITE.phoneIntl}`}
                className="inline-flex min-h-[56px] w-full items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 px-8 text-base font-extrabold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10 active:scale-95 sm:w-auto"
              >
                <PhoneCall className="h-5 w-5 text-brand-300" />
                <span className="ltr-nums">{SITE.phoneDisplay}</span>
              </a>
            </div>

            <button
              onClick={() => scrollToSection("services")}
              className="group mx-auto mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-slate-400 transition-colors hover:text-white"
            >
              أو تصفّح الخدمات والباقات أولاً
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
