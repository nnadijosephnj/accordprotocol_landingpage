"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { NavShaderButton } from "./nav-shader-button";
import { ChevronDown, ChevronRight, CircleDot, Globe2, Menu, X, Blocks, Lock, Scale, Coins } from "lucide-react";

const navLinks = [
  { name: "Solutions", href: "#solutions", icon: Blocks },
  { name: "Escrow", href: "#escrow", icon: Lock },
  { name: "Disputes", href: "#disputes", icon: Scale },
  { name: "Fees", href: "#fees", icon: Coins },
];

const languages = [
  { name: "English", code: "EN" },
  { name: "Français", code: "FR" },
  { name: "العربية", code: "AR" },
  { name: "Português", code: "PT" },
  { name: "Español", code: "ES" },
  { name: "中文", code: "ZH" },
  { name: "हिन्दी", code: "HI" },
  { name: "Русский", code: "RU" },
  { name: "Bahasa Indonesia", code: "ID" },
  { name: "Kiswahili", code: "SW" },
  { name: "한국어", code: "KO" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isIntroRevealed, setIsIntroRevealed] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const desktopLangRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopLangRef.current &&
        !desktopLangRef.current.contains(event.target as Node)
      ) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const showHeroLogo = !isScrolled && !isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const reveal = () => setIsIntroRevealed(true);
    window.addEventListener("accord:splash-done", reveal, { once: true });
    const fallback = window.setTimeout(reveal, 2500);
    return () => {
      window.removeEventListener("accord:splash-done", reveal);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <>
      <header
        className={`accord-nav-shell fixed z-50 transition-all duration-700 ease-out ${isIntroRevealed ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"} ${isScrolled
          ? "top-4 left-4 right-4"
          : "top-0 left-0 right-0"
          }`}
      >
      <nav
        className={`mx-auto transition-all duration-500 ${isScrolled || isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
          : "bg-transparent max-w-[1400px]"
          }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${isScrolled ? "h-14" : "h-20"
            }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            {showHeroLogo ? (
              <img
                src="/accordlogoWHITE.svg"
                alt="Accord"
                className="h-9 w-auto transition-all duration-500 md:h-10"
              />
            ) : (
              <img
                src="/accordlogoBLACKO.svg"
                alt="Accord"
                className="h-7 w-auto transition-all duration-500 md:h-8"
              />
            )}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12 lg:ml-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors duration-300 relative group ${isScrolled ? "text-black" : "text-white"}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-foreground" : "bg-white"}`} />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative" ref={desktopLangRef}>
              <button
                type="button"
                onClick={() => setIsLanguageOpen((open) => !open)}
                className={`flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-all duration-500 ${isScrolled
                  ? "border-foreground/15 bg-background/80 text-foreground shadow-sm"
                  : "border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white/15"
                  }`}
                aria-expanded={isLanguageOpen}
                aria-label="Select language"
              >
                <Globe2 className="h-4 w-4" />
                <span>{selectedLang}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isLanguageOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`absolute right-0 top-12 w-48 overflow-hidden rounded-2xl border border-foreground/10 bg-background/95 p-2 text-foreground shadow-xl backdrop-blur-xl transition-all duration-200 ${isLanguageOpen
                  ? "translate-y-0 opacity-100 pointer-events-auto"
                  : "-translate-y-2 opacity-0 pointer-events-none"
                  }`}
              >
                {languages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => {
                      setSelectedLang(language.code);
                      setIsLanguageOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                      selectedLang === language.code ? "bg-foreground/5 font-medium" : "hover:bg-foreground/5"
                    }`}
                  >
                    <span>{language.name}</span>
                    <span className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{language.code}</span>
                      {selectedLang === language.code && (
                        <span className="h-2 w-2 rounded-full bg-[#ff6719]" />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <NavShaderButton isScrolled={isScrolled} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsLanguageOpen(false);
            }}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>

      </nav>

      </header>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`lg:hidden fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-0 z-[100] w-full bg-background text-foreground shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-b-[24px] ${isMobileMenuOpen
          ? "translate-y-0"
          : "-translate-y-full"
          }`}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <img src="/accordlogoBLACKO.svg" alt="Accord" className="h-8 w-auto" />
          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsLanguageOpen(false);
            }}
            className="rounded-full p-2 -mr-2 text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4 px-6 pb-8">
          <div className="space-y-1 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-2 py-4 text-base font-medium transition-colors hover:bg-foreground/5"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff6719]/10 text-[#ff6719]">
                    <link.icon className="h-4 w-4" />
                  </span>
                  {link.name}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
              </a>
            ))}
          </div>

          <div className="rounded-2xl border border-foreground/10 bg-background overflow-hidden">
            <button
              type="button"
              onClick={() => setIsLanguageOpen((open) => !open)}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium"
              aria-expanded={isLanguageOpen}
            >
              <span>Select Language</span>
              <ChevronDown className={`h-4 w-4 text-[#ff6719] transition-transform duration-300 ${isLanguageOpen ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`grid gap-2 px-5 transition-all duration-300 ease-in-out ${isLanguageOpen
                ? "max-h-[500px] pb-4 opacity-100 overflow-y-auto"
                : "max-h-0 pb-0 opacity-0 overflow-hidden"
                }`}
            >
              <div className="flex flex-wrap gap-2 pt-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => {
                      setSelectedLang(language.code);
                      setIsLanguageOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`relative rounded-full border px-4 py-2 text-xs font-medium transition-colors ${selectedLang === language.code
                      ? "border-[#ff6719] bg-[#ff6719] text-white shadow-sm hover:bg-[#ff6719]/90"
                      : "border-foreground/10 text-foreground hover:border-[#ff6719]/40 hover:bg-foreground/5"
                      }`}
                  >
                    {language.name}
                    {selectedLang === language.code && (
                      <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-white border border-[#ff6719]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
