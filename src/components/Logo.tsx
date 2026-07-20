interface LogoProps {
  size?: number;
  light?: boolean;
}

export default function Logo({ size = 42, light = false }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="shrink-0 drop-shadow-[0_6px_16px_rgba(0,102,204,0.35)]"
      >
        <defs>
          <linearGradient id="lg-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0066CC" />
            <stop offset="0.55" stopColor="#1E40AF" />
            <stop offset="1" stopColor="#0EA5E9" />
          </linearGradient>
          <linearGradient id="lg-pin" x1="28" y1="6" x2="40" y2="22" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FB923C" />
            <stop offset="1" stopColor="#EA580C" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#lg-bg)" />
        <path d="M-8-8L56-8L56 14L-8 27Z" fill="#fff" opacity="0.1" />
        <path
          d="M9 37C15 31 13 23 21 21C29 19 29 13 33 11"
          stroke="#fff"
          strokeOpacity="0.55"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 4"
          fill="none"
        />
        <path
          d="M34 5.5C30.1 5.5 27 8.6 27 12.5C27 17.5 34 24 34 24C34 24 41 17.5 41 12.5C41 8.6 37.9 5.5 34 5.5Z"
          fill="url(#lg-pin)"
        />
        <circle cx="34" cy="12.5" r="4" fill="#fff" />
        <path
          d="M9 40L17 34L23 37L33 28"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M33 28V33M33 28H28" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <div className="leading-none">
        <span
          className={`block text-[26px] font-black tracking-tight ${
            light ? "text-white" : "text-slate-900"
          }`}
        >
          دلّني
        </span>
        <span
          className={`mt-1 block text-[10px] font-bold ${
            light ? "text-slate-300" : "text-slate-400"
          }`}
        >
          وكالة تسويق رقمي
        </span>
      </div>
    </div>
  );
}
