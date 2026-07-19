import { MapPin } from "lucide-react";

type BrandMarkProps = {
  light?: boolean;
};

export function BrandMark({ light = false }: BrandMarkProps) {
  return (
    <div className="inline-flex items-center gap-2" aria-label="دلني">
      <span className={`font-heading text-3xl font-black tracking-[-0.09em] ${light ? "text-white" : "text-[#0e2a47]"}`}>دلني</span>
      <span className="relative flex h-9 w-7 items-center justify-center" aria-hidden="true">
        <span className="absolute inset-0 rounded-[55%_55%_55%_8%] bg-[#c8912e] shadow-[0_5px_11px_rgba(181,116,21,0.35)] [transform:rotate(45deg)]" />
        <MapPin className="relative h-4 w-4 -rotate-45 text-white" strokeWidth={3} />
      </span>
    </div>
  );
}
