export const SITE = {
  name: "دلّني",
  tagline: "وكالة تسويق رقمي متكاملة",
  phoneDisplay: "01554671424",
  phoneIntl: "201554671424",
  email: "hello@dalni.agency",
  address: "القاهرة، مصر",
  workingHours: "السبت – الخميس: 10 صباحاً – 7 مساءً",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
};

/** Build a WhatsApp deep link with a prefilled Arabic message. */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  "مرحباً فريق دلّني، أرغب في حجز استشارة مجانية لمناقشة نشاطي التجاري.",
);

export function waService(serviceTitle: string): string {
  return waLink(`مرحباً فريق دلّني، أرغب في الاستفسار عن خدمة: ${serviceTitle}`);
}

export function waPackage(serviceTitle: string, tierName: string): string {
  return waLink(
    `مرحباً فريق دلّني، أرغب في طلب باقة «${tierName}» من خدمة «${serviceTitle}».`,
  );
}

/** Smooth-scroll to a section by id. */
export function scrollToSection(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export const NAV_LINKS = [
  { id: "hero", label: "الرئيسية" },
  { id: "services", label: "خدماتنا" },
  { id: "why-us", label: "لماذا نحن" },
  { id: "network", label: "شبكتنا" },
  { id: "testimonials", label: "آراء العملاء" },
  { id: "faq", label: "الأسئلة الشائعة" },
];
