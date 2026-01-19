import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronLeft,
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
        <p className="text-xs text-[#f0edf2]">Intelligenz neu gedacht</p>
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
    <div className="absolute inset-0 flex flex-col bg-gradient-to-br from-cyan-600 via-blue-700 to-purple-800 p-5 pt-12">
      <div className="flex items-center justify-center pt-2 pb-6">
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

  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    setVisibleMessages([]);
    setCycleKey(prev => prev + 1);
  }, []);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    
    const runCycle = () => {
      setVisibleMessages([]);
      
      messages.forEach((_, index) => {
        const timeout = setTimeout(() => {
          setVisibleMessages(prev => [...prev, index]);
        }, (index + 1) * 600);
        timeouts.push(timeout);
      });

      const resetTimeout = setTimeout(() => {
        setCycleKey(prev => prev + 1);
      }, messages.length * 600 + 2500);
      timeouts.push(resetTimeout);
    };

    runCycle();

    return () => {
      timeouts.forEach(t => clearTimeout(t));
    };
  }, [cycleKey]);

  return (
    <div className="absolute inset-0 flex flex-col bg-gradient-to-br from-cyan-600/90 via-blue-700/90 to-purple-800/90 pt-10">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
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
          <motion.span 
            key={cycleKey}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 500, damping: 15 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center"
          >
            {visibleMessages.length > 0 ? visibleMessages.reduce((sum, idx) => sum + messages[idx].count, 0) : 0}
          </motion.span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden p-3 space-y-2">
        <AnimatePresence mode="popLayout">
          {messages.map((msg, i) => (
            visibleMessages.includes(i) && (
              <motion.div
                key={`${cycleKey}-${msg.name}`}
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-xl"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${msg.color} flex items-center justify-center flex-shrink-0`}>
                  <msg.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-white font-medium text-sm">{msg.name}</span>
                    <span className="text-[10px] text-right font-normal text-[#f0e9f7]">vor 2 Min</span>
                  </div>
                  <p className="text-slate-400 text-xs truncate">{msg.preview}</p>
                </div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 500, damping: 15 }}
                  className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold"
                >
                  {msg.count}
                </motion.div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
        
        <AnimatePresence>
          {visibleMessages.length === messages.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="pt-2"
            >
              <p className="text-purple-400 text-[10px] font-medium mb-2">KI-Automatisierung aktiv</p>
              <div className="flex items-center gap-2 text-[10px] text-slate-400">
                <Check className="w-3 h-3 text-green-400" />
                <span>15 Anfragen automatisch beantwortet</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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

  const [visibleAppointments, setVisibleAppointments] = useState<number[]>([]);
  const [showStats, setShowStats] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    setVisibleAppointments([]);
    setShowStats(false);
    setProgressWidth(0);
    setCycleKey(prev => prev + 1);
  }, []);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    
    const runCycle = () => {
      setVisibleAppointments([]);
      setShowStats(false);
      setProgressWidth(0);
      
      appointments.forEach((_, index) => {
        const timeout = setTimeout(() => {
          setVisibleAppointments(prev => [...prev, index]);
        }, (index + 1) * 500);
        timeouts.push(timeout);
      });

      const statsTimeout = setTimeout(() => {
        setShowStats(true);
      }, appointments.length * 500 + 300);
      timeouts.push(statsTimeout);

      const progressTimeout = setTimeout(() => {
        setProgressWidth(85);
      }, appointments.length * 500 + 600);
      timeouts.push(progressTimeout);

      const resetTimeout = setTimeout(() => {
        setCycleKey(prev => prev + 1);
      }, appointments.length * 500 + 3000);
      timeouts.push(resetTimeout);
    };

    runCycle();

    return () => {
      timeouts.forEach(t => clearTimeout(t));
    };
  }, [cycleKey]);

  return (
    <div className="absolute inset-0 flex flex-col bg-gradient-to-br from-cyan-600/90 via-blue-700/90 to-purple-800/90 pt-10">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-purple-400" />
          <span className="text-white font-semibold text-sm">Heute</span>
        </div>
        <motion.span 
          key={cycleKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs text-[#ebf9fa]"
        >
          24. Mai
        </motion.span>
      </div>
      <div className="flex-1 overflow-hidden p-3 space-y-2">
        <AnimatePresence mode="popLayout">
          {appointments.map((apt, i) => (
            visibleAppointments.includes(i) && (
              <motion.div
                key={`${cycleKey}-${apt.time}`}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
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
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 500, damping: 15 }}
                >
                  {apt.status === "confirmed" ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Clock className="w-4 h-4 text-yellow-400" />
                  )}
                </motion.div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
        
        <AnimatePresence>
          {showStats && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="pt-3 space-y-2"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Auslastung heute</span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-medium text-[#f0ebf5]"
                >
                  {progressWidth}%
                </motion.span>
              </div>
              <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressWidth}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-1 text-[10px] text-green-400"
              >
                <Star className="w-3 h-3" />
                <span>3 Termine von KI gebucht</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function StickyPhoneSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const screens = [SplashScreen, LoginScreen, InboxScreen, DashboardScreen];

  const goToStep = (index: number) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStep(index);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section
      className="relative bg-background/50 backdrop-blur-[2px] py-20 lg:py-32"
      data-testid="section-sticky-phone"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid ${isMobile ? "grid-cols-1 gap-12" : "lg:grid-cols-2 gap-16"} items-center w-full`}>
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 mb-6">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToStep(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${
                        index === currentStep
                          ? "w-10 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
                          : "w-4 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                      }`}
                      data-testid={`button-progress-bar-${index + 1}`}
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
                
                <div className="flex items-center gap-3 pt-6">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="rounded-full w-10 h-10 border-slate-300 dark:border-slate-600 disabled:opacity-30"
                    data-testid="button-prev-step"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextStep}
                    disabled={currentStep === steps.length - 1}
                    className="rounded-full w-10 h-10 border-slate-300 dark:border-slate-600 disabled:opacity-30"
                    data-testid="button-next-step"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                  <Button
                    className="ml-4 rounded-full px-8 btn-primary-gradient hover-glow"
                    onClick={() => {
                      const el = document.querySelector("#contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    data-testid="button-sticky-cta"
                  >
                    Jetzt starten
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <PhoneDevice
              currentStep={currentStep}
              screens={screens}
              isMobile={isMobile}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface PhoneDeviceProps {
  currentStep: number;
  screens: React.ComponentType[];
  isMobile: boolean;
}

function PhoneDevice({
  currentStep,
  screens,
  isMobile,
}: PhoneDeviceProps) {
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
      <motion.div
        initial={{ rotateY: 5, scale: 0.95 }}
        animate={{ rotateY: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative"
      >
        {/* Modern iPhone Frame - thin bezels */}
        <div className="relative w-[240px] h-[490px] bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-[50px] p-[3px] shadow-2xl"
          style={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255,255,255,0.1)"
          }}
        >
          {/* Side buttons */}
          <div className="absolute -left-[2px] top-24 w-[3px] h-8 bg-slate-600 rounded-l-sm" />
          <div className="absolute -left-[2px] top-36 w-[3px] h-12 bg-slate-600 rounded-l-sm" />
          <div className="absolute -left-[2px] top-52 w-[3px] h-12 bg-slate-600 rounded-l-sm" />
          <div className="absolute -right-[2px] top-32 w-[3px] h-16 bg-slate-600 rounded-r-sm" />
          
          {/* Inner bezel */}
          <div className="relative w-full h-full bg-black rounded-[47px] p-[2px]">
            {/* Screen */}
            <div className="relative w-full h-full bg-slate-900 rounded-[45px] overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
                <div className="w-3 h-3 rounded-full bg-slate-800 ring-1 ring-slate-700" />
              </div>

              <AnimatePresence mode="wait">
                {screens.map((Screen, index) =>
                  index === currentStep ? (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Screen />
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-500 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
