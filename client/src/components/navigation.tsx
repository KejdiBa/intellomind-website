import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const logoImage = "/logo.webp";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Start", href: "#home" },
  { label: "KI-Assistenten", href: "#services" },
  { label: "KI-Automatisierung", href: "/ki-workflow-automation", isPage: true },
  { label: "Leistungen", href: "#services" },
  { label: "Preise", href: "/preise", isPage: true },
  { label: "Über uns", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

interface NavigationProps {
  isSubPage?: boolean;
}

export function Navigation({ isSubPage = false }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPage?: boolean) => {
    if (isPage) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      navigate(href);
      return;
    }
    e.preventDefault();
    if (!isSubPage) {
      scrollToSection(href);
    } else {
      setIsMobileMenuOpen(false);
      navigate("/");
      let attempts = 0;
      const tryScroll = () => {
        const target = href.startsWith("#") ? document.querySelector(href) : null;
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < 20) {
          attempts++;
          setTimeout(tryScroll, 50);
        }
      };
      setTimeout(tryScroll, 50);
    }
  };

  const logoHref = isSubPage ? "/" : "#home";
  const getNavHref = (link: { href: string; isPage?: boolean }) => {
    if (link.isPage) return link.href;
    return isSubPage ? `/${link.href}` : link.href;
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
      data-testid="navigation-header"
    >
      <div className="animated-border-wrapper max-w-5xl mx-auto shadow-lg shadow-black/5">
        <nav className="px-6 py-3 flex items-center justify-between gap-4 rounded-full transition-all duration-300 bg-white text-[16px] ml-[0px] mr-[0px] pl-[22px] pr-[22px]">
        <a
          href={logoHref}
          onClick={(e) => {
            e.preventDefault();
            if (!isSubPage) {
              scrollToSection("#home");
            } else {
              navigate("/");
            }
          }}
          className="flex items-center gap-3"
          data-testid="link-logo"
        >
          <img
            src={logoImage}
            alt="IntelloMind"
            className="h-10 w-auto rounded-lg"
            width="40"
            height="40"
          />
          <span className="font-bold text-xl text-slate-800 tracking-tight">
            IntelloMind
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={getNavHref(link)}
                onClick={(e) => handleNavClick(e, link.href, link.isPage)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.intellomind.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="rounded-full px-6 btn-primary-gradient hover-glow"
              data-testid="button-nav-login"
            >
              Login
            </Button>
          </a>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-slate-700 hover:bg-slate-100/50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
        </nav>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="md:hidden mt-2 mx-auto max-w-5xl"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl px-6 py-4 space-y-3 border border-white/40 shadow-lg shadow-black/5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={getNavHref(link)}
                  onClick={(e) => handleNavClick(e, link.href, link.isPage)}
                  className="block text-base font-medium text-slate-600 hover:text-slate-900 py-2 transition-colors"
                  data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://app.intellomind.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3"
              >
                <Button
                  className="w-full rounded-full btn-primary-gradient hover-glow"
                  data-testid="button-mobile-login"
                >
                  Login
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
