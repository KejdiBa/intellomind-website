import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { StickyPhoneSection } from "@/components/sticky-phone-section";
import { FeaturesSection } from "@/components/features-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { IndustriesSection } from "@/components/industries-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ChatbotButton } from "@/components/chatbot-button";
import { CookieBanner } from "@/components/cookie-banner";

export default function Home() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  const handleOpenCookieSettings = () => {
    setShowCookieSettings(true);
  };

  const handleCloseCookieSettings = () => {
    setShowCookieSettings(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <StickyPhoneSection />
        <FeaturesSection />
        <IntegrationsSection />
        <ServicesSection />
        <AboutSection />
        <IndustriesSection />
        <ContactSection />
      </main>
      <Footer onOpenCookieSettings={handleOpenCookieSettings} />
      <ChatbotButton />
      <CookieBanner forceOpen={showCookieSettings} onClose={handleCloseCookieSettings} />
    </div>
  );
}
