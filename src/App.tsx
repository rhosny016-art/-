import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import Network from "./components/Network";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-white font-sans text-slate-800">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <WhyUs />
        <Network />
        <Testimonials />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
      <FloatingButtons />
      <Chatbot />
    </div>
  );
}
