import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings, Shield, BarChart3, Target } from "lucide-react";

interface CookieConsent {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

const CONSENT_KEY = "intellomind_cookie_consent";
const CONSENT_DURATION = 365 * 24 * 60 * 60 * 1000;

function getStoredConsent(): CookieConsent | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    const consent = JSON.parse(stored) as CookieConsent;
    if (Date.now() - consent.timestamp > CONSENT_DURATION) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    return consent;
  } catch {
    return null;
  }
}

function saveConsent(consent: CookieConsent) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
}

interface CookieBannerProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

export function CookieBanner({ forceOpen = false, onClose }: CookieBannerProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [settings, setSettings] = useState({
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = getStoredConsent();
    setHasConsent(stored !== null);
    if (!stored && !forceOpen) {
      setShowBanner(true);
    }
    if (stored) {
      setSettings({
        functional: stored.functional,
        analytics: stored.analytics,
        marketing: stored.marketing,
      });
    }
  }, []);

  useEffect(() => {
    if (forceOpen && hasConsent !== null) {
      setShowSettings(true);
      setShowBanner(true);
      const stored = getStoredConsent();
      if (stored) {
        setSettings({
          functional: stored.functional,
          analytics: stored.analytics,
          marketing: stored.marketing,
        });
      }
    }
  }, [forceOpen, hasConsent]);

  const closeBanner = useCallback(() => {
    setShowBanner(false);
    setShowSettings(false);
    onClose?.();
  }, [onClose]);

  const handleAcceptAll = useCallback(() => {
    const consent: CookieConsent = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    };
    saveConsent(consent);
    setHasConsent(true);
    closeBanner();
  }, [closeBanner]);

  const handleAcceptNecessary = useCallback(() => {
    const consent: CookieConsent = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    };
    saveConsent(consent);
    setHasConsent(true);
    closeBanner();
  }, [closeBanner]);

  const handleSaveSettings = useCallback(() => {
    const consent: CookieConsent = {
      necessary: true,
      ...settings,
      timestamp: Date.now(),
    };
    saveConsent(consent);
    setHasConsent(true);
    closeBanner();
  }, [settings, closeBanner]);

  const handleOpenSettings = useCallback(() => {
    setShowSettings(true);
  }, []);

  const handleCloseSettings = useCallback(() => {
    setShowSettings(false);
    if (forceOpen) {
      closeBanner();
    }
  }, [forceOpen, closeBanner]);

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {showSettings ? (
        <motion.div
          key="settings-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          data-testid="modal-cookie-settings"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            className="w-full max-w-lg"
          >
            <Card className="p-6 glass-card border border-border/50">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl icon-bubble-gradient flex items-center justify-center">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Cookie-Einstellungen</h3>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleCloseSettings}
                  data-testid="button-close-settings"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Hier können Sie einstellen, welche Cookies Sie akzeptieren möchten.
                Ihre Einstellungen werden für 12 Monate gespeichert und können jederzeit geändert werden.
                Weitere Informationen finden Sie in unserer{" "}
                <Link href="/datenschutz" className="text-cyan-500 hover:text-cyan-400 underline underline-offset-2">
                  Datenschutzerklärung
                </Link>
                .
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Technisch notwendig</p>
                      <p className="text-xs text-muted-foreground">Immer aktiv – für den Betrieb der Website erforderlich</p>
                    </div>
                  </div>
                  <Switch checked={true} disabled className="opacity-50" data-testid="switch-necessary" />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                      <Settings className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Funktionale Cookies</p>
                      <p className="text-xs text-muted-foreground">Login, Warenkorb, Seiteneinstellungen</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.functional}
                    onCheckedChange={(checked) => setSettings((s) => ({ ...s, functional: checked }))}
                    data-testid="switch-functional"
                  />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Statistik Cookies</p>
                      <p className="text-xs text-muted-foreground">Analyse und Leistungsmessung der Website</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.analytics}
                    onCheckedChange={(checked) => setSettings((s) => ({ ...s, analytics: checked }))}
                    data-testid="switch-analytics"
                  />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Marketing Cookies</p>
                      <p className="text-xs text-muted-foreground">Relevante Werbung, soziale Netzwerke</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.marketing}
                    onCheckedChange={(checked) => setSettings((s) => ({ ...s, marketing: checked }))}
                    data-testid="switch-marketing"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  className="flex-1 rounded-lg"
                  onClick={handleSaveSettings}
                  data-testid="button-save-settings"
                >
                  Einstellungen speichern
                </Button>
                <Button
                  className="flex-1 rounded-lg btn-primary-gradient"
                  onClick={handleAcceptAll}
                  data-testid="button-accept-all-modal"
                >
                  Alle akzeptieren
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="cookie-banner"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
          data-testid="banner-cookie"
        >
          <div className="max-w-6xl mx-auto">
            <Card className="p-4 md:p-5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-border/30 shadow-lg">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 rounded-xl icon-bubble-gradient flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Cookies & Datenschutz</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Wir nutzen Cookies und ähnliche Technologien, um unsere Website zu betreiben, die Nutzung zu analysieren und relevante Inhalte bereitzustellen. Weitere Informationen finden Sie in unserer{" "}
                      <Link href="/datenschutz" className="text-cyan-500 hover:text-cyan-400 underline underline-offset-2" data-testid="link-datenschutz-banner">
                        Datenschutzerklärung
                      </Link>
                      .{" "}
                      <button
                        onClick={handleOpenSettings}
                        className="text-cyan-500 hover:text-cyan-400 underline underline-offset-2"
                        data-testid="link-cookie-settings"
                      >
                        Einstellungen anpassen
                      </button>{" "}
                      oder alle akzeptieren.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg flex-1 md:flex-none"
                    onClick={handleAcceptNecessary}
                    data-testid="button-necessary-only"
                  >
                    Nur notwendige
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg flex-1 md:flex-none"
                    onClick={handleOpenSettings}
                    data-testid="button-customize"
                  >
                    Anpassen
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-lg flex-1 md:flex-none btn-primary-gradient"
                    onClick={handleAcceptAll}
                    data-testid="button-accept-all"
                  >
                    Alle akzeptieren
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
