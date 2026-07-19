import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { BrandMark } from "./BrandMark";

const links = [
  { label: "الرئيسية", id: "home" },
  { label: "لماذا نحن", id: "why-us" },
  { label: "خدماتنا", id: "services" },
  { label: "شبكة دلني", id: "network" },
];

export function Footer() {
  return (
    <footer className="bg-[#0d304a] pt-16 text-white" aria-label="تذييل الموقع">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <BrandMark light />
          <p className="mt-5 max-w-sm text-sm font-medium leading-7 text-[#bfd2dd]">شريكك في بناء حضور رقمي محلي يلفت الانتباه ويقود إلى نمو حقيقي.</p>
          <div className="mt-6 flex gap-2">
            <a
              href="#home"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 text-[#f4c363] transition hover:bg-white/10"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#home"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 text-[#f4c363] transition hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black text-[#f4c363]">روابط سريعة</h2>
          <ul className="mt-5 space-y-3">
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-sm font-bold text-[#d3e1e8] transition hover:text-[#f4c363]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-black text-[#f4c363]">تواصل معنا</h2>
          <ul className="mt-5 space-y-4 text-sm font-bold text-[#d3e1e8]">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#f4c363]" />
              <span dir="ltr">+20 100 000 0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#f4c363]" />
              <span>hello@dalni.agency</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-[#f4c363]" />
              <span>القاهرة · الرياض · دبي</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-center text-xs font-bold text-[#8fabb9] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 دلني. جميع الحقوق محفوظة.</span>
          <span>صُنع لنمو الأعمال المحلية.</span>
        </div>
      </div>
    </footer>
  );
}
