import { MessageCircle } from "lucide-react";

export function ChatBubble() {
  return (
    <a
      href="#contact"
      aria-label="احجز استشارة عبر الدردشة"
      className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-[#1372a5] text-white shadow-[0_12px_26px_rgba(8,83,129,0.38),inset_0_1px_0_rgba(255,255,255,.35)] transition duration-200 hover:-translate-y-1 hover:bg-[#0d6190] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f1bd55]/50 sm:bottom-7 sm:left-7"
    >
      <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full border border-white/40 motion-reduce:hidden" />
      <MessageCircle className="relative h-6 w-6" fill="currentColor" />
    </a>
  );
}
