import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { TESTIMONIALS } from "../data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-20 overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-brand-50 blur-[110px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/5 h-72 w-72 rounded-full bg-emerald-50 blur-[110px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="قالوا عنا"
          title="قصص نجاح حقيقية لشركائنا"
          description="لا شهادة أصدق من نجاح عملائنا — إليك بعض التجارب الواقعية ممن وضعوا ثقتهم في دلّني."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative flex flex-col rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-18px_rgba(0,60,140,0.2)]"
            >
              <Quote className="h-8 w-8 text-brand-100" aria-hidden="true" />
              <div className="mt-3 flex gap-0.5 text-amber-400" aria-label="تقييم 5 من 5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-9 font-bold text-slate-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-base font-black text-white shadow-md ${t.tone}`}
                  aria-hidden="true"
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-black text-slate-900">{t.name}</p>
                  <p className="mt-0.5 text-xs font-bold text-slate-400">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
