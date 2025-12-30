import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { IndustriesSection } from "@/components/industries-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ChatbotButton } from "@/components/chatbot-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <IntegrationsSection />
        <ServicesSection />
        <AboutSection />
        <IndustriesSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatbotButton />
    </div>
  );
}
