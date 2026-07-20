import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { NAV_LINKS, SITE, WA_DEFAULT, scrollToSection } from "../lib/site";
import { useFocusTrap } from "../lib/useFocusTrap";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const drawerRef = useRef<HTMLElement>(null);
  useFocusTrap(drawerRef, open);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // track which section is in view to highlight its nav link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setActive(id);
    setOpen(false);
    setTimeout(() => scrollToSection(id), open ? 250 : 0);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
        <div className="glass-chip mx-auto flex h-[68px] max-w-7xl items-center justify-between rounded-2xl pe-3 ps-4 sm:ps-5">
          <button
            onClick={() => go("hero")}
            aria-label="العودة إلى الرئيسية"
            className="transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            <Logo />
          </button>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="التنقل الرئيسي">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-extrabold transition-all duration-200 ${
                  active === l.id
                    ? "text-amber-600"
                    : "text-slate-600 hover:bg-white/70 hover:text-night-900"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-amber-500"
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              <WhatsAppIcon className="h-4 w-4" />
              استشارة مجانية
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="فتح القائمة"
            className="flex h-11 w-11 items-center justify-center rounded-xl text-night-900 transition hover:bg-white/70 active:scale-95 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-slate-950/50 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[86vw] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <Logo size={36} />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="إغلاق القائمة"
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 active:scale-90"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-6" aria-label="قائمة الجوال">
                <p className="px-3 pb-3 text-[11px] font-black uppercase tracking-widest text-slate-400">
                  قائمة التنقل
                </p>
                {NAV_LINKS.map((l, i) => (
                  <motion.button
                    key={l.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                    onClick={() => go(l.id)}
                    className="block w-full rounded-2xl px-4 py-3.5 text-start text-[15px] font-extrabold text-slate-700 transition hover:bg-amber-50 hover:text-amber-700"
                  >
                    {l.label}
                  </motion.button>
                ))}
              </nav>

              <div className="space-y-3 border-t border-slate-100 p-5">
                <a
                  href={`tel:+${SITE.phoneIntl}`}
                  className="flex items-center gap-2 text-sm font-black text-slate-700 transition hover:text-brand-600"
                >
                  <Phone className="h-4 w-4 text-brand-600" />
                  <span className="ltr-nums">{SITE.phoneDisplay}</span>
                </a>
                <p className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <Clock className="h-4 w-4 text-slate-400" />
                  {SITE.workingHours}
                </p>
                <a
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-2xl text-base font-extrabold text-white transition active:scale-95"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  استشارة مجانية عبر واتساب
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
