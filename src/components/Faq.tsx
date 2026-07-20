import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { FAQS } from "../data/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-20 bg-slate-50/70 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="الأسئلة الشائعة"
          title="إجابات واضحة على أكثر ما يهمّك"
          description="جمعنا الأسئلة التي تصلنا يومياً من أصحاب الأنشطة التجارية وأجبنا عنها بشفافية كاملة."
        />

        <div className="mt-12 space-y-3.5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
                  isOpen ? "border-brand-300 shadow-[0_16px_40px_-18px_rgba(0,102,204,0.3)]" : "border-slate-200/80"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-btn-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
                >
                  <span className={`text-[15px] font-black leading-8 sm:text-base ${isOpen ? "text-brand-700" : "text-slate-800"}`}>
                    {f.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isOpen ? "rotate-180 bg-brand-600 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: "easeInOut" }}
                    >
                      <p className="border-t border-slate-100 px-6 pb-6 pt-4 text-sm leading-9 font-medium text-slate-600">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
