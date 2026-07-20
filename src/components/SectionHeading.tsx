import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "center" | "start";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = "center",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-start items-start";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex max-w-2xl flex-col gap-4 ${alignCls}`}
    >
      <span
        className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-extrabold ${
          dark
            ? "border-white/15 bg-white/5 text-brand-300"
            : "border-brand-100 bg-brand-50 text-brand-700"
        }`}
      >
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        className={`text-3xl font-black leading-[1.35] tracking-tight text-balance sm:text-4xl lg:text-[2.6rem] lg:leading-[1.3] ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-8 font-medium sm:text-lg sm:leading-9 ${
            dark ? "text-slate-300" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
