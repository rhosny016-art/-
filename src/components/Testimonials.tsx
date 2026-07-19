import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const testimonials = [
  {
    name: "د. أحمد صبري",
    role: "مؤسس عيادات أسنان",
    initials: "أص",
    color: "bg-[#dfeff1] text-[#207987]",
    quote: "في أقل من ثلاثة أشهر أصبح لدينا تدفق حقيقي من مكالمات خرائط Google. فريق دلني يفهم ما يحتاجه العميل المحلي فعلاً.",
  },
  {
    name: "سارة عادل",
    role: "مديرة متجر محلي",
    initials: "سع",
    color: "bg-[#f8ead0] text-[#b7791d]",
    quote: "أكثر ما أحببته هو الوضوح. التقارير بسيطة والنتائج ملموسة، وصارت تقييماتنا نقطة قوة في قرار الشراء.",
  },
  {
    name: "مروان خالد",
    role: "مالك مطعم",
    initials: "مخ",
    color: "bg-[#e6e8f8] text-[#5360ad]",
    quote: "لم يعد وجودنا على الخريطة مجرد عنوان. دلني حولت البحث القريب إلى حجوزات وطلبات تتكرر كل يوم.",
  },
];

export function Testimonials() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-28" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-6xl px-5">
        <div id="testimonials-title">
          <SectionTitle
            eyebrow="آراء العملاء"
            title="نتائج يتحدث عنها شركاؤنا"
            description="نحن نقيس النجاح بما ينعكس على واقع عملك، لا بما يبدو جميلاً في التقرير فقط."
          />
        </div>
        <motion.div
          className="mt-12 grid gap-5 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
          }}
        >
          {testimonials.map((item) => (
            <motion.figure
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="relative rounded-3xl border border-[#e8edf0] bg-[#fcfdfd] p-7 shadow-[0_12px_32px_rgba(20,62,83,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_42px_rgba(20,62,83,0.10)]"
            >
              <Quote className="absolute left-7 top-7 h-9 w-9 text-[#f0dba9]" fill="currentColor" />
              <div className="flex gap-0.5 text-[#d99b27]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 text-[15px] font-medium leading-8 text-[#3e5b71]">«{item.quote}»</blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-[#eaf0f2] pt-5">
                <span className={`flex h-11 w-11 items-center justify-center rounded-full font-black ${item.color}`}>{item.initials}</span>
                <span>
                  <span className="block text-sm font-black text-[#173a56]">{item.name}</span>
                  <span className="mt-1 block text-xs font-bold text-[#718899]">{item.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
