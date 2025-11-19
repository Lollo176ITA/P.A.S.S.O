"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-label="Torna all'inizio della pagina"
      className={`fixed bottom-6 right-6 z-60 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
        visible ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-95"
      }`}
    >
      <span className="relative inline-flex h-16 w-16 items-center justify-center drop-shadow-[0_12px_28px_rgba(17,160,154,0.35)]">
        <span
          className={`absolute inset-0 transition-transform ${isHovering ? "animate-spin" : ""}`}
          style={{
            background: "linear-gradient(135deg, #11A09A 0%, #0C7672 100%)",
            WebkitMaskImage: "url('/Shape Set.png')",
            maskImage: "url('/Shape Set.png')",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
        <span className="relative material-symbols-outlined text-3xl text-white">arrow_circle_up</span>
      </span>
    </button>
  );
}
