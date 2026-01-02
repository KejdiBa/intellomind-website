import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Logo_IntelloMind_1767046191762.jpg";
import {
  MessageSquare,
  Mail,
  Phone,
  Calendar,
  Bell,
  Check,
  ChevronRight,
  User,
  Lock,
  Clock,
  Star,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Willkommen bei IntelloMind",
    subtitle: "Ihr KI-Partner für intelligente Kommunikation",
    description:
      "IntelloMind revolutioniert Ihre Kundenkommunikation mit modernster KI-Technologie. Starten Sie noch heute.",
  },
  {
    id: 2,
    title: "Einfacher Zugang",
    subtitle: "Sicheres Login in Sekunden",
    description:
      "Mit nur wenigen Klicks sind Sie eingeloggt und haben Zugriff auf alle Ihre KI-Assistenten und Kommunikationstools.",
  },
  {
    id: 3,
    title: "Unified Inbox",
    subtitle: "Alle Kanäle an einem Ort",
    description:
      "WhatsApp, E-Mail, Telefon, Social Media – alle Anfragen fließen in eine zentrale Inbox. Ihre KI antwortet automatisch.",
  },
  {
    id: 4,
    title: "Intelligente Terminplanung",
    subtitle: "Automatische Buchungen 24/7",
    description:
      "Ihr KI-Assistent koordiniert Termine vollautomatisch, synchronisiert Kalender und reduziert No-Shows um bis zu 80%.",
  },
];

function SplashScreen() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 p-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <img
          src={logoImage}
          alt="IntelloMind"
          className="w-20 h-20 rounded-2xl mb-4 shadow-2xl"
        />
        <h3 className="text-white font-bold text-xl mb-1">IntelloMind</h3>
        <p className="text-purple-300 text-xs">Intelligenz neu gedacht</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute bottom-12"
      >
        <div className="w-8 h-8 rounded-full border-2 border-purple-400/50 border-t-purple-400 animate-spin" />
      </motion.div>
    </div>
  );
}

function LoginScreen() {
  return (
    <div className="absolute inset-0 flex flex-col bg-gradient-to-br from-cyan-600 via-blue-700 to-purple-800 p-5">
      <div className="flex items-center justify-center pt-6 pb-8">
        <img
          src={logoImage}
          alt="IntelloMind"
          className="w-12 h-12 rounded-xl mr-3"
        />
        <span className="text-white font-bold text-lg">IntelloMind</span>
      </div>
      
      <div className="flex-1 flex flex-col justify-center px-2">
        <h3 className="text-white font-bold text-lg mb-6 text-center">Anmelden</h3>
        
        <div className="space-y-3 mb-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
            <div className="w-full h-10 bg-slate-800/60 rounded-lg pl-10 flex items-center">
              <span className="text-slate-400 text-sm">E-Mail</span>
            </div>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
            <div className="w-full h-10 bg-slate-800/60 rounded-lg pl-10 flex items-center">
              <span className="text-slate-400 text-sm">Passwort</span>
            </div>
          </div>
        </div>
        
        <div className="w-full h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white font-semibold text-sm">Einloggen</span>
        </div>
        
        <p className="text-center text-purple-400 text-xs">Passwort vergessen?</p>
      </div>
    </div>
  );
}

function InboxScreen() {
  const messages = [
    { icon: MessageSquare, name: "WhatsApp", count: 12, color: "from-green-500 to-emerald-600", preview: "Neue Kundenanfrage..." },
    { icon: Mail, name: "E-Mail", count: 8, color: "from-blue-500 to-cyan-600", preview: "Terminbestätigung für..." },
    { icon: Phone, name: "Anrufe", count: 3, color: "from-purple-500 to-violet-600", preview: "Rückruf angefordert" },
  ];

  return (
    <div className="absolute inset-0 flex flex-col bg-gradient-to-br from-cyan-600/90 via-blue-700/90 to-purple-800/90">
      <div className="flex items-center justify-between p-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <img
            src={logoImage}
            alt="IntelloMind"
            className="w-8 h-8 rounded-lg"
          />
          <span className="text-white font-semibold text-sm">Inbox</span>
        </div>
        <div className="relative">
          <Bell className="w-5 h-5 text-purple-400" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
            23
          </span>
        </div>
      </div>
      
      <div className="flex-1 overflow-hidden p-3 space-y-2">
        {messages.map((msg, i) => (
          <motion.div
            key={msg.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-xl"
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${msg.color} flex items-center justify-center flex-shrink-0`}>
              <msg.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-white font-medium text-sm">{msg.name}</span>
                <span className="text-[10px] text-purple-400">vor 2 Min</span>
              </div>
              <p className="text-slate-400 text-xs truncate">{msg.preview}</p>
            </div>
            <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
              {msg.count}
            </div>
          </motion.div>
        ))}
        
        <div className="pt-2">
          <p className="text-purple-400 text-[10px] font-medium mb-2">KI-Automatisierung aktiv</p>
          <div className="flex items-center gap-2 text-[10px] text-slate-400">
            <Check className="w-3 h-3 text-green-400" />
            <span>15 Anfragen automatisch beantwortet</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardScreen() {
  const appointments = [
    { time: "10:00", title: "Max Müller", type: "Beratung", status: "confirmed" },
    { time: "14:30", title: "Anna Schmidt", type: "Demo", status: "pending" },
    { time: "16:00", title: "Tech GmbH", type: "Onboarding", status: "confirmed" },
  ];

  return (
    <div className="absolute inset-0 flex flex-col bg-gradient-to-br from-cyan-600/90 via-blue-700/90 to-purple-800/90">
      <div className="flex items-center justify-between p-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-purple-400" />
          <span className="text-white font-semibold text-sm">Heute</span>
        </div>
        <span className="text-purple-400 text-xs">30. Dez 2024</span>
      </div>
      
      <div className="flex-1 overflow-hidden p-3 space-y-2">
        {appointments.map((apt, i) => (
          <motion.div
            key={apt.time}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-xl"
          >
            <div className="text-center min-w-[40px]">
              <span className="text-white font-bold text-sm">{apt.time}</span>
            </div>
            <div className="w-px h-8 bg-purple-500/50" />
            <div className="flex-1">
              <p className="text-white font-medium text-sm">{apt.title}</p>
              <p className="text-slate-400 text-xs">{apt.type}</p>
            </div>
            {apt.status === "confirmed" ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Clock className="w-4 h-4 text-yellow-400" />
            )}
          </motion.div>
        ))}
        
        <div className="pt-3 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Auslastung heute</span>
            <span className="text-purple-400 font-medium">85%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
            />
          </div>
          <div className="flex items-center gap-1 text-[10px] text-green-400">
            <Star className="w-3 h-3" />
            <span>3 Termine von KI gebucht</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StickyPhoneSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.3, 0.55, 0.8, 1], [5, 3, 0, -2, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.3, 0.55, 0.8, 1], [2, 1, 0, -1, 0]);
  const translateX = useTransform(scrollYProgress, [0, 0.3, 0.55, 0.8, 1], [-30, -15, 0, 0, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -10, -20]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.02]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value < 0.25) setCurrentStep(0);
      else if (value < 0.5) setCurrentStep(1);
      else if (value < 0.75) setCurrentStep(2);
      else setCurrentStep(3);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const screens = [SplashScreen, LoginScreen, InboxScreen, DashboardScreen];

  return (
    <section
      ref={containerRef}
      className="relative bg-background"
      style={{ height: isMobile ? "auto" : "400vh", position: "relative" }}
      data-testid="section-sticky-phone"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-gradient-orb bg-gradient-orb-cyan w-[600px] h-[600px] top-1/4 -left-40 opacity-20" />
        <div className="bg-gradient-orb bg-gradient-orb-purple w-[500px] h-[500px] bottom-1/4 -right-40 opacity-15" />
      </div>

      <div
        className={`max-w-6xl mx-auto px-6 ${
          isMobile ? "py-16" : "sticky top-0 h-screen flex items-center"
        }`}
      >
        <div className={`grid ${isMobile ? "grid-cols-1 gap-12" : "lg:grid-cols-2 gap-16"} items-center w-full`}>
          {isMobile && (
            <div className="flex justify-center">
              <PhoneDevice
                currentStep={currentStep}
                screens={screens}
                rotateY={0}
                rotateZ={0}
                translateX={0}
                translateY={0}
                scale={1}
                isMobile={true}
              />
            </div>
          )}

          <div className={isMobile ? "space-y-8" : ""}>
            {isMobile ? (
              steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  onViewportEnter={() => setCurrentStep(index)}
                  className="space-y-3"
                >
                  <p className="gradient-text font-semibold text-sm tracking-wide">
                    Schritt {step.id}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-lg gradient-text">{step.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              ))
            ) : (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 mb-6">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === currentStep
                          ? "w-8 bg-gradient-to-r from-purple-600 to-indigo-600"
                          : "w-4 bg-slate-700"
                      }`}
                    />
                  ))}
                </div>
                <p className="gradient-text font-semibold text-sm tracking-wide uppercase">
                  Schritt {steps[currentStep].id} von 4
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {steps[currentStep].title}
                </h2>
                <p className="text-xl gradient-text">{steps[currentStep].subtitle}</p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  {steps[currentStep].description}
                </p>
                <Button
                  className="mt-6 rounded-full px-8 btn-primary-gradient hover-glow"
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  data-testid="button-sticky-cta"
                >
                  Jetzt starten
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            )}
          </div>

          {!isMobile && (
            <div className="flex justify-center lg:justify-end">
              <PhoneDevice
                currentStep={currentStep}
                screens={screens}
                rotateY={rotateY}
                rotateZ={rotateZ}
                translateX={translateX}
                translateY={translateY}
                scale={scale}
                isMobile={false}
              />
            </div>
          )}
        </div>
      </div>

      {!isMobile && (
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => {
                if (containerRef.current) {
                  const sectionHeight = containerRef.current.offsetHeight;
                  const targetScroll = containerRef.current.offsetTop + (sectionHeight * (index / 4));
                  window.scrollTo({ top: targetScroll, behavior: "smooth" });
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? "bg-purple-500 scale-125"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              data-testid={`button-step-${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

interface PhoneDeviceProps {
  currentStep: number;
  screens: React.ComponentType[];
  rotateY: any;
  rotateZ: any;
  translateX: any;
  translateY: any;
  scale: any;
  isMobile: boolean;
}

function PhoneDevice({
  currentStep,
  screens,
  rotateY,
  rotateZ,
  translateX,
  translateY,
  scale,
  isMobile,
}: PhoneDeviceProps) {
  const MotionWrapper = isMobile ? motion.div : motion.div;

  return (
    <div className="relative" style={{ perspective: "1000px" }}>
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] rounded-[60px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34, 211, 238, 0.4) 0%, rgba(56, 189, 248, 0.3) 30%, rgba(168, 85, 247, 0.2) 60%, transparent 80%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <MotionWrapper
        style={
          isMobile
            ? {}
            : {
                rotateY,
                rotateZ,
                translateX,
                translateY,
                scale,
              }
        }
        className="relative"
      >
        <div className="relative w-[220px] h-[450px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[40px] p-2 shadow-2xl border border-slate-700/50">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-20" />

          <div className="relative w-full h-full bg-slate-900 rounded-[32px] overflow-hidden">
            <AnimatePresence mode="wait">
              {screens.map((Screen, index) =>
                index === currentStep ? (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Screen />
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-600 rounded-full" />
        </div>
      </MotionWrapper>
    </div>
  );
}
