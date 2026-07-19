import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, ChartNoAxesCombined, CircleGauge, FilePenLine, Map, Megaphone, Star } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const services = [
  { icon: Map, title: "خرائط Google والظهور المحلي", text: "نبني ونحسن ملفك التجاري ليظهر أمام الباحثين القريبين منك." },
  { icon: Megaphone, title: "إعلانات Google", text: "حملات دقيقة تستهدف النية الشرائية وتحوّل كل نقرة إلى فرصة." },
  { icon: CircleGauge, title: "إدارة منصات التواصل", text: "حضور اجتماعي متناسق يعكس قيمة علامتك ويزيد التفاعل." },
  { icon: FilePenLine, title: "محتوى يبيع", text: "رسائل بصرية وكتابية مدروسة تبني الثقة وتحفز القرار." },
  { icon: Star, title: "إدارة السمعة والتقييمات", text: "نضاعف ثقة العملاء عبر تقييمات حقيقية وتجربة تواصل أفضل." },
  { icon: ChartNoAxesCombined, title: "تقارير ونمو مستمر", text: "نقرأ الأرقام ونحسن المسار شهراً بعد شهر بوضوح كامل." },
];

export function Services() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="services" className="relative overflow-hidden bg-[#f4f8f9] py-20 sm:py-28" aria-labelledby="services-title">
      <div className="absolute -right-20 top-24 h-80 w-80 rounded-full bg-[#c9edf1]/45 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div id="services-title">
          <SectionTitle
            eyebrow="خدماتنا"
            title="كل ما تحتاجه لتتقدم محلياً ورقمياً"
            description="نربط بين الظهور الذكي، المحتوى المقنع، والإعلان المؤثر في منظومة واحدة تعمل لصالحك."
          />
        </div>
        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
          }}
        >
          {services.map(({ icon: Icon, title, text }) => (
            <motion.article
              key={title}
              variants={{
                hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-white bg-white/75 p-6 shadow-[0_12px_32px_rgba(20,62,83,0.07)] backdrop-blur-sm transition-colors duration-300 hover:border-[#cfe3ef] hover:shadow-[0_20px_40px_rgba(15,63,87,0.14)]"
            >
              <div
                className="absolute -left-7 -top-7 h-24 w-24 rounded-full bg-[#fff2d3]/60 transition-transform duration-500 group-hover:scale-150"
                aria-hidden="true"
              />
              <div className="relative flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d3b58] text-[#f6c767] shadow-lg shadow-[#0d3b58]/15 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <BadgeCheck className="h-5 w-5 text-[#d4a247]" />
              </div>
              <h3 className="relative mt-6 text-lg font-black text-[#153855]">{title}</h3>
              <p className="relative mt-3 text-sm font-medium leading-7 text-[#627b8d]">{text}</p>
              <span className="relative mt-5 inline-block text-sm font-black text-[#b5771d]">اكتشف الخدمة ←</span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
