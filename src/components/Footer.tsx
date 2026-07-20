import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, SITE, scrollToSection } from "../lib/site";
import { SERVICES } from "../data/content";

const LEGAL_DOCS: Record<string, { title: string; body: string[] }> = {
  privacy: {
    title: "سياسة الخصوصية",
    body: [
      "نحترم خصوصيتك احتراماً كاملاً. أي بيانات تشاركها معنا — مثل اسمك أو رقم هاتفك أو بيانات نشاطك التجاري — تُستخدم حصرياً لتقديم خدماتنا التسويقية المتفق عليها، ولا تُباع ولا تُشارك مع أي طرف ثالث لأغراض إعلانية.",
      "قد نستخدم أدوات تحليل معتمدة (مثل Google Analytics) لفهم أداء حملاتك وتحسينها، وتظل ملكية جميع البيانات والحسابات الإعلانية لك وحدك في كل الأوقات.",
      "يمكنك في أي وقت طلب الاطلاع على بياناتك أو تصحيحها أو حذفها نهائياً بالتواصل معنا عبر البريد hello@dalni.agency، وسننفذ طلبك خلال 7 أيام عمل كحد أقصى.",
    ],
  },
  terms: {
    title: "الشروط والأحكام",
    body: [
      "تبدأ أي خدمة بعد الاتفاق الكتابي الواضح على نطاق العمل والمدة والتكلفة، ويُعتد بما يرد في عرض السعر المرسل إليك كمرجع نهائي للطرفين.",
      "نلتزم بتطبيق أفضل الممارسات المهنية المعتمدة في إدارة الملفات التجارية والحملات الإعلانية، ونشاركك تقارير أداء دورية شفافة. ونظراً لطبيعة المنصات الإعلانية ومحركات البحث، لا يمكن ضمان ترتيب أو نتيجة رقمية محددة بعينها.",
      "المدفوعات تُسدد مقدماً بحسب الباقة المختارة، ويمكن إيقاف الخدمات الشهرية أو تجديدها بإشعار قبل نهاية الدورة الجارية بـ7 أيام على الأقل. الميزانية الإعلانية المدفوعة للمنصات غير مستردة بعد إنفاقها.",
      "تظل جميع الحسابات الإعلانية والملفات التجارية والمحتوى المنتج أثناء التعاقد ملكاً لعميلنا، ونسلّمها كاملة عند انتهاء التعاون.",
    ],
  },
};

export default function Footer() {
  const [doc, setDoc] = useState<string | null>(null);
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative scroll-mt-20 overflow-hidden bg-night-950 pt-16 text-slate-300">
      <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-brand-600/15 blur-[110px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr]">
          {/* brand */}
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-8 font-medium text-slate-400">
              وكالة تسويق رقمي متخصصة في وضع الأنشطة التجارية على خريطة النجاح —
              من خرائط Google إلى الحملات الإعلانية وبناء السمعة الرقمية.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, href: SITE.social.facebook, label: "فيسبوك" },
                { icon: Instagram, href: SITE.social.instagram, label: "إنستجرام" },
                { icon: Linkedin, href: SITE.social.linkedin, label: "لينكدإن" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:scale-110 hover:border-brand-500 hover:bg-brand-600 hover:text-white"
                >
                  <s.icon className="h-4.5 w-4.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* quick links */}
          <div>
            <h4 className="text-base font-black text-white">روابط سريعة</h4>
            <ul className="mt-5 space-y-3 text-sm font-bold">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollToSection(l.id)}
                    className="text-slate-400 transition-all duration-200 hover:-translate-x-1 hover:text-white"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div>
            <h4 className="text-base font-black text-white">خدماتنا</h4>
            <ul className="mt-5 space-y-3 text-sm font-bold">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-slate-400 transition-all duration-200 hover:-translate-x-1 hover:text-white"
                  >
                    {s.shortTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-base font-black text-white">تواصل معنا</h4>
            <ul className="mt-5 space-y-4 text-sm font-bold">
              <li>
                <a href={`tel:+${SITE.phoneIntl}`} className="flex items-center gap-3 text-slate-400 transition hover:text-white">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-brand-300">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="ltr-nums">{SITE.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-slate-400 transition hover:text-white">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-brand-300">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span dir="ltr">{SITE.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-brand-300">
                  <MapPin className="h-4 w-4" />
                </span>
                {SITE.address}
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-brand-300">
                  <Clock className="h-4 w-4" />
                </span>
                {SITE.workingHours}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs font-bold text-slate-500 sm:flex-row">
          <p>
            © {year} وكالة دلّني للتسويق الرقمي — جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            <button onClick={() => setDoc("privacy")} className="transition-colors hover:text-white">
              سياسة الخصوصية
            </button>
            <button onClick={() => setDoc("terms")} className="transition-colors hover:text-white">
              الشروط والأحكام
            </button>
          </div>
        </div>
      </div>

      {/* legal modal */}
      <AnimatePresence>
        {doc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
            onClick={() => setDoc(null)}
            role="dialog"
            aria-modal="true"
            aria-label={LEGAL_DOCS[doc].title}
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="thin-scroll max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-8 text-slate-700 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-slate-900">{LEGAL_DOCS[doc].title}</h3>
                <button
                  onClick={() => setDoc(null)}
                  aria-label="إغلاق"
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>
              <div className="mt-5 space-y-4">
                {LEGAL_DOCS[doc].body.map((p, i) => (
                  <p key={i} className="text-sm leading-8 font-medium text-slate-600">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
