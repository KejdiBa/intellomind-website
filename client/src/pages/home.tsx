import { useState, useEffect } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
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
import { AnimatedBackground } from "@/components/animated-background";

export default function Home() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  useMetaTags(
    "IntelloMind – KI-Lösungen für Unternehmen",
    "Intelligente KI-Assistenten für Telefon, Chat und E-Mail. Automatisieren Sie Ihren Kundenservice mit IntelloMind – 24/7, DSGVO-konform, sofort einsatzbereit."
  );

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const handleOpenCookieSettings = () => {
    setShowCookieSettings(true);
  };

  const handleCloseCookieSettings = () => {
    setShowCookieSettings(false);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
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
