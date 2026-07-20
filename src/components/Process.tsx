import { motion } from "framer-motion";
import { LineChart, Rocket, SearchCheck, ClipboardList } from "lucide-react";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    icon: SearchCheck,
    title: "استشارة وتحليل مجاني",
    text: "نستمع إلى أهدافك، ونحلل وضعك الحالي ومنافسيك — دون أي التزام مادي.",
  },
  {
    icon: ClipboardList,
    title: "استراتيجية مخصصة",
    text: "نضع خطة واضحة بالقنوات المناسبة والميزانية والنتائج المتوقعة بجدول زمني.",
  },
  {
    icon: Rocket,
    title: "تنفيذ وإطلاق",
    text: "نؤسس ملفاتك ونطلق حملاتك بأعلى معايير الجودة، وفي الموعد المتفق عليه.",
  },
  {
    icon: LineChart,
    title: "قياس وتحسين مستمر",
    text: "تقارير دورية شفافة، وتحسين دائم للأداء لمضاعفة العائد شهراً بعد شهر.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-20 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="منهجية العمل"
          title="رحلتك معنا في أربع خطوات واضحة"
          description="لا عشوائية ولا وعود فضفاضة — منهجية عمل مجرّبة تنقل نشاطك من الاختفاء الرقمي إلى الصدارة المحلية."
        />

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* connector line */}
          <span
            className="absolute right-[12%] left-[12%] top-8 hidden h-0.5 bg-gradient-to-l from-brand-100 via-brand-300 to-brand-100 lg:block"
            aria-hidden="true"
          />
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-[0_14px_35px_-10px_rgba(0,102,204,0.35)] ring-1 ring-brand-100">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent-500 text-xs font-black text-white shadow-md ltr-nums">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-black text-slate-900">{s.title}</h3>
                <p className="mt-2 max-w-[260px] text-sm leading-7 font-medium text-slate-500">
                  {s.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
