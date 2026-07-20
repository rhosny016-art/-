import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, FolderOpen, RefreshCw, Send, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { WA_DEFAULT, scrollToSection } from "../lib/site";
import { BOT_BRAIN, BOT_FALLBACK, BOT_NAME, BOT_QUICK_TOPICS, BOT_WELCOME } from "../data/content";

interface ChatMessage {
  id: number;
  role: "user" | "bot";
  text: string;
  cta?: "whatsapp" | "services";
}

/** Normalize Arabic text for forgiving keyword matching. */
function normalize(s: string): string {
  return s
    .replace(/[ً-ْٰ]/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .toLowerCase();
}

function findAnswer(input: string): { text: string; cta?: "whatsapp" | "services" } {
  const q = normalize(input);
  let best: { score: number; entry: (typeof BOT_BRAIN)[number] } | null = null;
  for (const entry of BOT_BRAIN) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (q.includes(normalize(kw))) score += kw.length >= 3 ? 2 : 1;
    }
    if (score > 0 && (!best || score > best.score)) best = { score, entry };
  }
  if (!best) return { text: BOT_FALLBACK };
  return { text: best.entry.answer, cta: best.entry.cta };
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [topic, setTopic] = useState<string | null>(null);
  const idRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  const push = (m: Omit<ChatMessage, "id">) => {
    idRef.current += 1;
    setMessages((prev) => [...prev, { ...m, id: idRef.current }]);
  };

  const seed = () => {
    setMessages([{ id: 0, role: "bot", text: BOT_WELCOME }]);
    idRef.current = 0;
    setTyping(false);
  };

  const openChat = () => {
    if (!open && messages.length === 0) seed();
    setOpen((v) => !v);
  };

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text || typing) return;
    setInput("");
    push({ role: "user", text });
    setTyping(true);
    const answer = findAnswer(text);
    const delay = 850 + Math.min(answer.text.length * 4, 1200);
    const t = window.setTimeout(() => {
      setTyping(false);
      push({ role: "bot", text: answer.text, cta: answer.cta });
    }, delay);
    timers.current.push(t);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const activeTopic = BOT_QUICK_TOPICS.find((t) => t.label === topic);

  return (
    <div className="fixed bottom-4 left-4 z-[80] sm:bottom-6 sm:left-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="mb-4 flex h-[min(600px,74vh)] w-[min(92vw,380px)] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_-15px_rgba(8,20,50,0.45)]"
            role="dialog"
            aria-label="المساعد الذكي دَلّوب"
          >
            {/* header */}
            <div className="relative flex items-center gap-3 bg-night-950 px-5 py-4 text-white">
              <div className="bg-grid-dark absolute inset-0 opacity-30" aria-hidden="true" />
              <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg">
                <Bot className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="relative flex-1">
                <p className="text-sm font-black">{BOT_NAME}</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-[11px] font-bold text-slate-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  مستشار دلّني الذكي — متصل الآن
                </p>
              </div>
              <button
                onClick={seed}
                title="إعادة بدء المحادثة"
                aria-label="إعادة بدء المحادثة"
                className="relative flex h-9 w-9 items-center justify-center rounded-xl text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="إغلاق المحادثة"
                className="relative flex h-9 w-9 items-center justify-center rounded-xl text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* messages */}
            <div ref={scrollRef} className="chat-scroll flex-1 space-y-4 overflow-y-auto bg-slate-50/80 p-4">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${m.role === "user" ? "justify-start flex-row-reverse" : ""}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-7 font-bold shadow-sm ${
                      m.role === "user"
                        ? "rounded-tl-sm bg-brand-600 text-white"
                        : "rounded-tr-sm border border-slate-100 bg-white text-slate-700"
                    }`}
                  >
                    <p>{m.text}</p>
                    {m.cta === "whatsapp" && (
                      <a
                        href={WA_DEFAULT}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-[12px] font-extrabold text-white shadow-md transition hover:bg-emerald-600 active:scale-95"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                        تواصل مباشرة عبر واتساب
                      </a>
                    )}
                    {m.cta === "services" && (
                      <button
                        onClick={() => {
                          setOpen(false);
                          setTimeout(() => scrollToSection("services"), 200);
                        }}
                        className="mt-3 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-[12px] font-extrabold text-white shadow-md transition hover:bg-slate-800 active:scale-95"
                      >
                        <FolderOpen className="h-4 w-4" />
                        استعرض الخدمات والباقات
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <div className="flex">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tr-sm border border-slate-100 bg-white px-4 py-3.5 shadow-sm">
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* quick topics */}
            <div className="border-t border-slate-100 bg-white px-3 pt-2.5">
              <div className="chat-scroll flex gap-1.5 overflow-x-auto pb-2">
                {BOT_QUICK_TOPICS.map((t) => (
                  <button
                    key={t.label}
                    onClick={() => setTopic(topic === t.label ? null : t.label)}
                    className={`shrink-0 rounded-full border px-3 py-1.5 text-[11px] font-extrabold transition-all active:scale-95 ${
                      topic === t.label
                        ? "border-brand-600 bg-brand-600 text-white"
                        : "border-slate-200 bg-slate-50 text-slate-600 hover:border-brand-300 hover:text-brand-700"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <AnimatePresence>
                {activeTopic && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-1.5 pb-2.5">
                      {activeTopic.questions.map((q) => (
                        <button
                          key={q}
                          onClick={() => {
                            setTopic(null);
                            send(q);
                          }}
                          className="rounded-lg bg-brand-50 px-3 py-1.5 text-[11px] font-bold text-brand-700 transition hover:bg-brand-100 active:scale-95"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2 border-t border-slate-100 bg-white p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اكتب سؤالك هنا…"
                aria-label="اكتب سؤالك"
                className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 outline-none transition placeholder:font-medium placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="إرسال"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 active:scale-95 disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
              >
                <Send className="h-4.5 w-4.5 -scale-x-100" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* launcher */}
      <motion.button
        onClick={openChat}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.93 }}
        aria-label={open ? "إغلاق المساعد الذكي" : "تحدث مع دَلّوب المساعد الذكي"}
        className={`relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl transition-colors duration-300 ${
          open ? "bg-slate-800 shadow-slate-800/30" : "bg-brand-600 shadow-brand-600/40"
        }`}
      >
        {!open && (
          <span className="animate-soft-ping absolute inset-0 rounded-full bg-brand-500" aria-hidden="true" />
        )}
        <span className="relative">
          {open ? <X className="h-6 w-6" /> : <Bot className="h-7 w-7" />}
        </span>
      </motion.button>
    </div>
  );
}
