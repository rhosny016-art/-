import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ServiceModal from "./ServiceModal";
import { SERVICES, type Service } from "../data/content";
import { scrollToSection } from "../lib/site";

export default function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden bg-slate-50/70 py-20 lg:py-28">
      <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-brand-100/60 blur-[130px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-[10%] h-80 w-80 rounded-full bg-accent-100/50 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="خدماتنا"
          title="حلول تسويقية متكاملة لنموّ عملك"
          description="من تصدّر خرائط Google إلى الحملات الإعلانية الذكية وبناء السمعة الرقمية — كل ما يحتاجه نشاطك لتجاوز منافسيه، تحت سقف واحد."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const minPrice = s.pricing[0]?.price ?? "";
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_24px_50px_-18px_rgba(0,60,140,0.25)] ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${s.theme.glow} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  aria-hidden="true"
                />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${s.theme.iconBox} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                    >
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-slate-50 px-3 py-1.5 text-[11px] font-black text-slate-500">
                      يبدأ من <span className="text-slate-800 ltr-nums">{minPrice}</span> ج.م
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-black leading-8 text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-7 font-medium text-slate-500">
                    {s.tagline}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {s.includes.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px] font-bold text-slate-600">
                        <CheckCircle2 className={`h-4 w-4 shrink-0 ${s.theme.check}`} aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setActive(s)}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-extrabold text-white transition-all duration-300 hover:bg-brand-600 active:scale-[0.98] group-hover:bg-brand-600"
                  >
                    التفاصيل والباقات
                    <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            );
          })}

          {/* CTA tile completing the grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl bg-night-950 p-7 text-white shadow-xl"
          >
            <div className="bg-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-brand-600/30 blur-[70px]" aria-hidden="true" />
            <div className="relative">
              <h3 className="text-xl font-black leading-9">
                غير متأكد أي خدمة تناسب نشاطك؟
              </h3>
              <p className="mt-2 text-sm leading-7 font-medium text-slate-300">
                احجز استشارة مجانية وسنحلل وضعك الحالي ونرشّح لك الخطة الأنسب —
                دون أي التزام.
              </p>
            </div>
            <button
              onClick={() => scrollToSection("cta")}
              className="relative inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-night-950 transition-all duration-300 hover:bg-brand-50 active:scale-95"
            >
              تحدّث معنا الآن
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
          </motion.div>
        </div>
      </div>

      <ServiceModal service={active} onClose={() => setActive(null)} />
    </section>
  );
}
