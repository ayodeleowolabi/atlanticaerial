"use client";

import { useRef, useState } from "react";

const VIDEOS = [
  { title: "Shore", location: "Coast", src: "/portfolio/shore.mp4" },
  { title: "Sunset", location: "Golden Hour", src: "/portfolio/sunset.mp4" },
  { title: "Mountains", location: "Highlands", src: "/portfolio/mountains.mp4" },
  { title: "Sevilla II", location: "Seville, ES", src: "/portfolio/sevilla2.mp4" },
  { title: "Krabi", location: "Thailand", src: "/portfolio/krabi.mp4" },
  { title: "Sevilla", location: "Seville, ES", src: "/portfolio/sevilla.mp4" },
  { title: "Naiharn", location: "Phuket", src: "/portfolio/naiharnayo.mp4" },
  { title: "Yaniu", location: "Phuket", src: "/portfolio/yaniuayo.mp4" },
];

function VideoTile({ v }) {
  const vidRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = async () => {
    const el = vidRef.current;
    if (!el) return;

    try {
      if (el.paused) {
        // Ensure it can autoplay on click (muted helps avoid policy issues)
        await el.play();
        setIsPlaying(true);
      } else {
        el.pause();
        setIsPlaying(false);
      }
    } catch {
      // If play fails, leave state as-is
    }
  };

  const goFullscreen = async (e) => {
    e.stopPropagation();
    const el = vidRef.current;
    if (!el) return;

    // Prefer native video fullscreen (mobile-friendly)
    try {
      if (el.requestFullscreen) await el.requestFullscreen();
      else if (el.webkitEnterFullscreen) el.webkitEnterFullscreen(); // Safari iOS
    } catch {
      // ignore
    }
  };

  return (
    <div
      onClick={togglePlay}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 cursor-pointer
                 transition-all duration-300 will-change-transform
                 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.55)] hover:border-white/20"
    >
      <div className="relative aspect-[16/10] bg-black">
        <video
          ref={vidRef}
          muted
          playsInline
          preload="metadata"
          controls={false}
          className="absolute inset-0 h-full w-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={v.src} type="video/mp4" />
        </video>

        {/* Cinematic overlay (reduces when playing) */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/10 transition-opacity duration-300 ${
            isPlaying ? "opacity-35" : "opacity-90"
          }`}
        />

        {/* Play button (center) */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isPlaying ? "opacity-0 group-hover:opacity-80" : "opacity-100"
          }`}
        >
          <div className="flex items-center gap-3 rounded-full border border-white/20 bg-black/45 px-5 py-3 backdrop-blur">
            <span className="text-white text-sm font-semibold tracking-tight">
              {isPlaying ? "Pause" : "Play"}
            </span>
            <span className="text-white/80 text-base leading-none">▶</span>
          </div>
        </div>

        {/* Fullscreen button (top right) */}
        <button
          type="button"
          onClick={goFullscreen}
          className="absolute top-4 right-4 rounded-full border border-white/15 bg-black/45 backdrop-blur px-3 py-2
                     text-[0.65rem] tracking-[0.18em] uppercase text-white/85
                     opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
          aria-label="Full screen"
          title="Full screen"
        >
          Full
        </button>

        {/* Text bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="text-white font-semibold tracking-tight text-lg leading-tight">
            {v.title}
          </div>
          <div className="mt-1 text-white/60 text-xs tracking-[0.18em] uppercase">
            {v.location}
          </div>
        </div>
      </div>

      {/* subtle base shine on hover */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

export default function PortfolioCarousel() {
  return (
    <section id="portfolio" className="bg-black text-white px-10 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-10 mb-10">
          <div>
            <p className="text-white/50 text-xs tracking-[0.28em] uppercase mb-3">
              Selected Work
            </p>
            <h2
              className="font-semibold tracking-tight leading-[1.05]"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}
            >
              Flights, frames, and places.
            </h2>
          </div>
          <p className="hidden md:block text-white/55 text-sm max-w-sm leading-relaxed">
            Hover to lift. Click to play. Use Full to expand.
          </p>
        </div>

        {/* 4 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VIDEOS.slice(0, 8).map((v) => (
            <VideoTile key={v.src} v={v} />
          ))}
        </div>
      </div>
    </section>
  );
}