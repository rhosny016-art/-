import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { WHY_US } from "../data/content";

export default function WhyUs() {
  return (
    <section id="why-us" className="relative scroll-mt-20 overflow-hidden bg-slate-50/70 py-20 lg:py-28">
      <div className="absolute top-10 right-[6%] h-72 w-72 rounded-full bg-brand-100/70 blur-[110px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="لماذا دلّني؟"
          title="شريك نجاحك الحقيقي، لا مجرد مقدّم خدمة"
          description="نتعامل مع كل مشروع كأنه استثمارنا الخاص — بشفافية كاملة، وبأعلى معايير الإتقان التقني والتسويقي."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_22px_45px_-18px_rgba(0,60,140,0.22)]"
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-3.5 text-white shadow-lg shadow-brand-600/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-black text-slate-900">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-8 font-medium text-slate-500">{f.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 rounded-3xl border border-emerald-100 bg-emerald-50/70 px-6 py-6 text-center sm:flex-row sm:gap-4"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md shadow-emerald-500/30">
            <ShieldCheck className="h-5.5 w-5.5" aria-hidden="true" />
          </span>
          <p className="text-sm font-extrabold leading-7 text-emerald-800 sm:text-base">
            استشارتك الأولى ومراجعة ملفك التجاري مجانية بالكامل — تقرير واضح بالوضع الحالي والفرص المتاحة، دون أي التزام.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
