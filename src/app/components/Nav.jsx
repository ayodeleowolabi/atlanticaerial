"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const LINKS = [
  { label: "Home", href: "#", id: "top" },
  { label: "About", href: "#manifesto", id: "manifesto" },
  { label: "Portfolio", href: "#portfolio", id: "portfolio" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Nav() {
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const [scrolled, setScrolled] = useState(false);

  const [active, setActive] = useState("top");
  const [hovered, setHovered] = useState(null);

  // underline position
  const [line, setLine] = useState({ left: 0, width: 0, opacity: 0 });

  const setUnderlineTo = (key) => {
    const el = linkRefs.current[key];
    const nav = navRef.current;
    if (!el || !nav) return;

    const r = el.getBoundingClientRect();
    const nr = nav.getBoundingClientRect();

    setLine({
      left: r.left - nr.left,
      width: r.width,
      opacity: 1,
    });
  };

  // Set underline on first paint
  useLayoutEffect(() => {
    // Default underline to active
    setTimeout(() => setUnderlineTo(active), 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sticky background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking (IntersectionObserver)
  useEffect(() => {
    const ids = ["manifesto", "portfolio", "services", "contact"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // pick the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) {
          setActive(visible.target.id);
        } else if (window.scrollY < 80) {
          setActive("top");
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Move underline when active changes (unless hovering)
  useEffect(() => {
    if (hovered) return;
    setUnderlineTo(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, hovered]);

  // Keep underline correct on resize
  useEffect(() => {
    const onResize = () => setUnderlineTo(hovered || active);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, hovered]);

  const onEnter = (key) => {
    setHovered(key);
    setUnderlineTo(key);
  };

  const onLeave = () => {
    setHovered(null);
    setUnderlineTo(active);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-white font-semibold tracking-tight text-lg"
          onClick={() => setActive("top")}
        >
          Atlantic Aerial
        </a>

        {/* Links */}
        <div
          ref={navRef}
          className="relative hidden md:flex items-center gap-10 text-sm tracking-[0.18em] uppercase"
          onMouseLeave={onLeave}
        >
          {/* Sliding underline */}
          <span
            aria-hidden="true"
            className="absolute -bottom-2 h-[2px] bg-yellow-400 rounded-full transition-all duration-300"
            style={{
              left: `${line.left}px`,
              width: `${line.width}px`,
              opacity: line.opacity,
            }}
          />

          {LINKS.map((l) => (
            <a
              key={l.id}
              href={l.href}
              ref={(el) => (linkRefs.current[l.id] = el)}
              onMouseEnter={() => onEnter(l.id)}
              onFocus={() => onEnter(l.id)}
              onBlur={onLeave}
              className={`transition-colors duration-200 ${
                active === l.id ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}