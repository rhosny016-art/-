import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/Accordion";
import { SectionTitle } from "./SectionTitle";

const questions = [
  {
    question: "متى يمكن أن أرى نتائج الظهور على خرائط Google؟",
    answer: "تعتمد المدة على وضع ملفك الحالي والمنافسة في منطقتك، لكن نبدأ عادةً بتحسينات واضحة خلال الأسابيع الأولى، ثم نبني نتائج ثابتة بشكل تدريجي ومدروس.",
  },
  {
    question: "هل تعملون مع الشركات خارج مصر؟",
    answer: "نعم. نعمل مع علامات تجارية في مصر والسعودية والإمارات وباقي أسواق الخليج، مع استراتيجية تراعي لغة وسلوك كل سوق.",
  },
  {
    question: "ما الذي يشمله تقرير الأداء الشهري؟",
    answer: "ستحصل على صورة مباشرة للظهور، التفاعل، المكالمات، الاتجاهات، والتقييمات، مع توصيات واضحة للخطوة التالية.",
  },
  {
    question: "هل يمكن البدء بخدمة واحدة فقط؟",
    answer: "بالتأكيد. نبدأ من الأولوية التي تحقق أكبر أثر لعملك، ثم نوسع المنظومة عندما يكون التوقيت مناسباً.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-[#f5f8fa] py-20 sm:py-28" aria-labelledby="faq-title">
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#fff0c8]/45 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-5">
        <div id="faq-title">
          <SectionTitle
            eyebrow="الأسئلة الشائعة"
            title="كل ما تريد معرفته قبل البداية"
            description="إجابات مختصرة وواضحة لمساعدتك على اتخاذ الخطوة التالية بثقة."
          />
        </div>
        <Accordion
          type="single"
          defaultValue="question-0"
          className="mt-10 rounded-3xl border border-white bg-white/80 px-5 shadow-[0_14px_34px_rgba(20,62,83,0.07)] backdrop-blur-md sm:px-7"
        >
          {questions.map((item, index) => (
            <AccordionItem key={item.question} value={`question-${index}`} className="border-[#e7edf0]">
              <AccordionTrigger className="py-5 text-base font-black text-[#1b3d57] hover:text-[#b8791d] sm:text-lg">{item.question}</AccordionTrigger>
              <AccordionContent className="pb-5 text-sm font-medium leading-8 text-[#617b8c] sm:text-base">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
