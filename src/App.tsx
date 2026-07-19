import { ChatBubble } from "./components/ChatBubble";
import { CtaBand } from "./components/CtaBand";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Network } from "./components/Network";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { WhyUs } from "./components/WhyUs";

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen w-full overflow-x-clip bg-[#f5f8fa] font-heading text-[#102f4d]">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Network />
        <Testimonials />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
      <ChatBubble />
    </div>
  );
}
