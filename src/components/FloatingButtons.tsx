import { motion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";
import { WA_DEFAULT } from "../lib/site";

export default function FloatingButtons() {
  return (
    <motion.a
      href={WA_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="group fixed bottom-4 right-4 z-[80] sm:bottom-6 sm:right-6"
    >
      <span
        className="animate-soft-ping absolute inset-0 rounded-full bg-emerald-400"
        aria-hidden="true"
      />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-[0_14px_35px_rgba(16,185,129,0.45)]">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
      <span className="pointer-events-none absolute top-1/2 right-full me-3 hidden -translate-y-1/2 rounded-xl bg-night-950 px-3.5 py-2 text-xs font-extrabold whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 sm:block">
        راسلنا الآن — نرد خلال دقائق
        <span className="absolute top-1/2 left-full -translate-y-1/2 border-8 border-transparent border-l-night-950" />
      </span>
    </motion.a>
  );
}
