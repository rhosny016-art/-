import React, { createContext, useContext, useId, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

type AccordionProps = {
  type?: "single";
  collapsible?: boolean;
  defaultValue?: string;
  className?: string;
  children: React.ReactNode;
};

type AccordionCtx = {
  openValue: string | null;
  toggle: (value: string) => void;
};

const AccordionContext = createContext<AccordionCtx | null>(null);
const ItemContext = createContext<{ value: string } | null>(null);

export function Accordion({ defaultValue, className, children }: AccordionProps) {
  const [openValue, setOpenValue] = useState<string | null>(defaultValue ?? null);
  const toggle = (value: string) => setOpenValue((current) => (current === value ? null : value));
  return (
    <AccordionContext.Provider value={{ openValue, toggle }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, className, children }: { value: string; className?: string; children: React.ReactNode }) {
  return (
    <ItemContext.Provider value={{ value }}>
      <div className={twMerge("border-b last:border-b-0", className)}>{children}</div>
    </ItemContext.Provider>
  );
}

function useAccordionItem() {
  const accordion = useContext(AccordionContext);
  const item = useContext(ItemContext);
  if (!accordion || !item) throw new Error("Accordion subcomponents must be used inside <Accordion>");
  const open = accordion.openValue === item.value;
  return { open, toggle: () => accordion.toggle(item.value), value: item.value };
}

export function AccordionTrigger({ className, children }: { className?: string; children: React.ReactNode }) {
  const { open, toggle, value } = useAccordionItem();
  const id = useId();
  return (
    <button
      type="button"
      id={`${id}-trigger`}
      aria-expanded={open}
      aria-controls={`${id}-content-${value}`}
      onClick={toggle}
      className={twMerge("flex w-full items-center justify-between gap-4 py-4 text-right font-bold transition-colors", className)}
    >
      <span className="flex-1">{children}</span>
      <ChevronDown className={twMerge("h-5 w-5 shrink-0 text-[#c8912e] transition-transform duration-300", open && "-rotate-180")} />
    </button>
  );
}

export function AccordionContent({ className, children }: { className?: string; children: React.ReactNode }) {
  const { open, value } = useAccordionItem();
  const id = useId();
  return (
    <motion.div
      id={`${id}-content-${value}`}
      role="region"
      initial={false}
      animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
    >
      <div className={twMerge("pb-4", className)}>{children}</div>
    </motion.div>
  );
}
