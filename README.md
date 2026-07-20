# دلّني — وكالة تسويق رقمي متكاملة

موقع تسويقي احترافي أحادي الصفحة (Landing Page) لوكالة "دلّني" للتسويق الرقمي، مُحسّن للإنتاج (Production-Ready) مع تركيز على الأداء وSEO والوصولية.

## 🧱 التقنيات

- **React 19** + **TypeScript** (strict mode)
- **Vite 7** — أداة البناء والتطوير
- **Tailwind CSS v4** — التصميم
- **Framer Motion** — الأنيميشن
- **Lucide React** — الأيقونات

## 🚀 التشغيل المحلي

```bash
npm install      # تثبيت التبعيات
npm run dev      # تشغيل خادم التطوير  →  http://localhost:5173
```

## 📦 الأوامر المتاحة

| الأمر | الوظيفة |
|---|---|
| `npm run dev` | خادم التطوير مع HMR |
| `npm run build` | فحص الأنواع + بناء الإنتاج إلى `dist/` |
| `npm run typecheck` | فحص الأنواع فقط |
| `npm run lint` | فحص ESLint |
| `npm run preview` | معاينة بناء الإنتاج محليًا |

## 🌐 النشر على Vercel

المشروع مهيّأ بالكامل للنشر على Vercel عبر `vercel.json`:

1. ارفع المستودع إلى GitHub.
2. على [vercel.com](https://vercel.com) → **Add New Project** → اختر المستودع.
3. سيكتشف Vercel تلقائيًا إطار Vite والإعدادات.
4. اضغط **Deploy** — لا حاجة لأي إعدادات إضافية.

### إعدادات مدمجة في `vercel.json`
- **تخزين مؤقت طويل (1 سنة، immutable)** للأصول المجزّأة (`/assets/*`) والصور والخطوط.
- **روابط نظيفة** (`cleanUrls`) بدون شرطة مائلة زائدة.
- **رؤوس أمان**: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`.
- إصدار Node مثبّت عبر `.nvmrc` (Node 22).

## ✨ المميزات

- 🎨 **هوية بصرية متّسقة**: نظام ألوان موحّد (ذهبي/أزرق ليلي) + تأثيرات Glass/Grain.
- 🌍 **دعم RTL كامل** للغة العربية.
- ⚡ **أداء عالٍ**: صور AVIF/WebP مُحسّنة، خط Cairo مُحسّن، تقسيم كود.
- 🔍 **SEO متقدم**: وسوم Open Graph + Twitter Cards + JSON-LD (Organization + FAQPage) + robots.txt.
- ♿ **وصولية WCAG**: focus trap، focus-visible، دعم لوحة المفاتيح، `prefers-reduced-motion`.
- 🛡️ **متانة**: Error Boundary يمنع الشاشة البيضاء.
- 📱 **متجاوب بالكامل** مع جميع أحجام الشاشات.
- 💬 **مساعد ذكي** (دَلّوب) يطابق الكلمات المفتاحية بالعربية.

## 📁 بنية المشروع

```
├── public/                 # أصول ثابتة (صور، favicon، robots.txt)
├── src/
│   ├── components/         # مكوّنات React
│   │   ├── ErrorBoundary.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── ServiceModal.tsx
│   │   ├── Chatbot.tsx
│   │   └── ...
│   ├── data/
│   │   └── content.ts      # كل محتوى الموقع (خدمات، آراء، أسئلة...)
│   ├── lib/
│   │   ├── site.ts         # إعدادات الموقع + دوال مساعدة
│   │   ├── animations.ts   # أنيميشن مشترك
│   │   └── useFocusTrap.ts # هوك الوصولية
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vercel.json
├── .nvmrc
└── vite.config.ts
```

## 🔒 الخصوصية

لا يستخدم الموقع أي أدوات تتبّع خارجية أو كوكيز. التواصل يتم عبر روابط WhatsApp مباشرة.
