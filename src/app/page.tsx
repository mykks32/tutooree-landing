import Header from "@/components/layouts/header";
import HeroSection from "@/components/landing/hero-section";
import FaqsSection from "@/components/landing/faqs-section";
import FooterSection from "@/components/landing/footer-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <HeroSection />
      <FaqsSection />
      <FooterSection />
    </div>
  );
}
