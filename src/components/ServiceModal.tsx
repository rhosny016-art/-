import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck,
  CheckCircle2,
  Crown,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { waPackage, waService } from "../lib/site";
import type { Service } from "../data/content";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = service ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [service]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-end justify-center bg-slate-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={service.title}
        >
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="thin-scroll relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-[2rem] bg-white shadow-2xl sm:rounded-[2rem]"
          >
            {/* header */}
            <div className="relative overflow-hidden bg-night-950 px-6 py-8 text-white sm:px-10">
              <div className="bg-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="absolute -top-20 left-10 h-48 w-48 rounded-full bg-brand-600/40 blur-[80px]" aria-hidden="true" />
              <button
                onClick={onClose}
                aria-label="إغلاق النافذة"
                className="absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/20 active:scale-90"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                  <service.icon className="h-7 w-7 text-brand-300" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-black leading-9 sm:text-2xl sm:leading-10">
                    {service.title}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm leading-7 font-medium text-slate-300">
                    {service.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* body */}
            <div className="thin-scroll flex-1 overflow-y-auto px-6 py-8 sm:px-10">
              <p className="text-[15px] leading-9 font-medium text-slate-600">
                {service.description}
              </p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {/* includes */}
                <div>
                  <h4 className="flex items-center gap-2 text-base font-black text-slate-900">
                    <BadgeCheck className="h-5 w-5 text-brand-600" aria-hidden="true" />
                    ماذا تشمل الخدمة؟
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {service.includes.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm leading-7 font-bold text-slate-600">
                        <CheckCircle2 className={`mt-1.5 h-4 w-4 shrink-0 ${service.theme.check}`} aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-8">
                  {/* ideal for */}
                  <div>
                    <h4 className="flex items-center gap-2 text-base font-black text-slate-900">
                      <Users className="h-5 w-5 text-brand-600" aria-hidden="true" />
                      لمن تناسب هذه الخدمة؟
                    </h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.idealFor.map((t) => (
                        <span
                          key={t}
                          className={`rounded-full border px-3.5 py-1.5 text-xs font-extrabold ${service.theme.chip}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* outcomes */}
                  <div>
                    <h4 className="flex items-center gap-2 text-base font-black text-slate-900">
                      <TrendingUp className="h-5 w-5 text-brand-600" aria-hidden="true" />
                      النتائج المتوقعة
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                      {service.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2.5 text-sm leading-7 font-bold text-slate-600">
                          <Target className="mt-1.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* platforms */}
                  {service.platforms && (
                    <div>
                      <h4 className="text-base font-black text-slate-900">المنصات والأنواع</h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {service.platforms.map((p) => (
                          <span
                            key={p}
                            className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-extrabold text-slate-600"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* pricing */}
              <div className="mt-10">
                <h4 className="flex items-center gap-2 text-base font-black text-slate-900">
                  <Crown className="h-5 w-5 text-accent-500" aria-hidden="true" />
                  الباقات والاستثمار
                </h4>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {service.pricing.map((tier) => (
                    <div
                      key={tier.name}
                      className={`relative flex flex-col rounded-2xl border p-5 transition-all duration-300 ${
                        tier.popular
                          ? "border-brand-500 bg-brand-50/60 shadow-[0_16px_40px_-16px_rgba(0,102,204,0.4)]"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      {tier.popular && (
                        <span className="absolute -top-3 right-4 rounded-full bg-brand-600 px-3 py-1 text-[10px] font-black text-white shadow-md">
                          الأكثر طلباً
                        </span>
                      )}
                      {tier.badge && (
                        <span className="absolute -top-3 left-4 rounded-full bg-accent-500 px-3 py-1 text-[10px] font-black text-white shadow-md">
                          {tier.badge}
                        </span>
                      )}
                      <p className="text-sm font-black text-slate-800">{tier.name}</p>
                      <p className="mt-2 flex items-baseline gap-1.5">
                        <span className="text-3xl font-black text-slate-900 ltr-nums">{tier.price}</span>
                        <span className="text-xs font-black text-slate-500">ج.م</span>
                        {tier.period && (
                          <span className="text-[11px] font-bold text-slate-400">/ {tier.period}</span>
                        )}
                      </p>
                      <ul className="mt-4 flex-1 space-y-2">
                        {tier.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-[12.5px] leading-6 font-bold text-slate-600">
                            <CheckCircle2 className={`mt-1 h-3.5 w-3.5 shrink-0 ${service.theme.check}`} aria-hidden="true" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={waPackage(service.shortTitle, tier.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-5 inline-flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-extrabold transition-all duration-200 active:scale-95 ${
                          tier.popular
                            ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        <WhatsAppIcon className="h-3.5 w-3.5" />
                        اطلب هذه الباقة
                      </a>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-xs font-bold text-slate-400">
                  جميع الأسعار بالجنيه المصري وقابلة للتخصيص حسب احتياج نشاطك — اسأل عن عرض مخصص.
                </p>
              </div>
            </div>

            {/* footer */}
            <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/80 px-6 py-4 sm:flex-row sm:px-10">
              <p className="text-xs font-bold text-slate-500">
                لديك سؤال عن هذه الخدمة؟ فريقنا يجيبك فوراً.
              </p>
              <a
                href={waService(service.shortTitle)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600 active:scale-95"
              >
                <WhatsAppIcon className="h-4 w-4" />
                استفسر عبر واتساب
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
