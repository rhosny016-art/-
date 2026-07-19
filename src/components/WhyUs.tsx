import { BarChart3, MapPinned, Radar, UsersRound } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const pillars = [
  { icon: MapPinned, title: "خبرة في السوق المحلي", text: "نفهم سلوك عملائك في مصر والخليج ونحوّل البحث القريب إلى زيارة حقيقية." },
  { icon: Radar, title: "ظهور في المكان الصحيح", text: "استراتيجية واضحة تضعك أمام العميل الجاهز للشراء وقت اتخاذ القرار." },
  { icon: BarChart3, title: "قرارات مبنية على البيانات", text: "تقارير واضحة ومؤشرات مفهومة لتعرف بالضبط أين يذهب استثمارك." },
  { icon: UsersRound, title: "شراكة تهتم بالنمو", text: "فريق مختص يرافقك من التخطيط وحتى تحقيق نتائج ملموسة." },
];

export function WhyUs() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="why-us" className="relative z-10 -mt-9 overflow-hidden rounded-t-[2.5rem] bg-white py-20 sm:py-28" aria-labelledby="why-title">
      <div className="absolute left-0 top-12 h-64 w-64 rounded-full bg-[#f8e5b3]/35 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div id="why-title">
          <SectionTitle
            eyebrow="لماذا دلني؟"
            title="لأن موقعك على الخريطة بداية الحكاية"
            description="لا نكتفي بظهور أنيق. نبني حضوراً محلياً يلفت الانتباه ويقود إلى مكالمات وزيارات ومبيعات."
          />
        </div>
        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } },
          }}
        >
          {pillars.map(({ icon: Icon, title, text }) => (
            <motion.article
              key={title}
              variants={{
                hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className="group rounded-3xl border border-[#e7edf0] bg-[#fbfcfd] p-6 shadow-[0_10px_28px_rgba(20,62,83,0.06)] transition-colors duration-300 hover:border-[#e3c27a] hover:shadow-[0_22px_44px_rgba(173,119,28,0.16),0_0_0_1px_rgba(227,194,122,0.4)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f9eed9] text-[#bd7b1e] shadow-[inset_0_1px_0_white] transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-black text-[#173a56]">{title}</h3>
              <p className="mt-3 text-sm font-medium leading-7 text-[#63798a]">{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
