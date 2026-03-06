"use client";

import { useRef, useState } from "react";

const VIDEOS = [
  {
    title: "Shore",
    location: "Coast",
    type: "cloudflare",
    src: "https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/4ad4224021972a6905b1a9e86a22a92c/iframe?autoplay=true&muted=true&loop=true&controls=false",
    thumb: "https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/4ad4224021972a6905b1a9e86a22a92c/thumbnails/thumbnail.jpg?height=600",
  },
  {
    title: "Sunset",
    location: "Golden Hour",
    type: "cloudflare",
    src: "https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/c62584728c64f928a74c7627616b4dab/iframe?autoplay=true&muted=true&loop=true&controls=false",
    thumb: "https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/c62584728c64f928a74c7627616b4dab/thumbnails/thumbnail.jpg?height=600",
  },
  {
    title: "Mountains",
    location: "Highlands",
    type: "cloudflare",
    src: "https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/e7c08cebd33cfd5a278728a7a334e268/iframe?autoplay=true&muted=true&loop=true&controls=false",
    thumb: "https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/e7c08cebd33cfd5a278728a7a334e268/thumbnails/thumbnail.jpg?height=600",
  },
  {
    title: "Sevilla II",
    location: "Seville, ES",
    type: "cloudflare",
    src: "https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/a8fa29af12c793e9c9e7de276fb90ca3/iframe?autoplay=true&muted=true&loop=true&controls=false",
    thumb: "https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/a8fa29af12c793e9c9e7de276fb90ca3/thumbnails/thumbnail.jpg?height=600",
  },
  {
    title: "Aerial Film",
    location: "Atlantic Aerial",
    type: "cloudflare",
    src: "https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/2014b93520767bcdb96652e660725137/iframe?autoplay=true&muted=true&loop=true&controls=false",
    thumb: "https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/2014b93520767bcdb96652e660725137/thumbnails/thumbnail.jpg?height=600",
  },
  {
    title: "Aerial Film",
    location: "Atlantic Aerial",
    type: "cloudflare",
    src: "https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/ca4f3a1b1b8e54d283e716b6e814ed91/iframe?autoplay=true&muted=true&loop=true&controls=false",
    thumb: "https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/ca4f3a1b1b8e54d283e716b6e814ed91/thumbnails/thumbnail.jpg?height=600",
  },
  {
    title: "Aerial Film",
    location: "Atlantic Aerial",
    type: "cloudflare",
    src: "https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/baad432b19dd188eb12f06cfc94cdd57/iframe?autoplay=true&muted=true&loop=true&controls=false",
    thumb: "https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/baad432b19dd188eb12f06cfc94cdd57/thumbnails/thumbnail.jpg?height=600",
  },
  {
    title: "Aerial Film",
    location: "Atlantic Aerial",
    type: "cloudflare",
    src: "https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/0f37086c3cf4f60c9a15c03bcddc837e/iframe?autoplay=true&muted=true&loop=true&controls=false",
    thumb: "https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/0f37086c3cf4f60c9a15c03bcddc837e/thumbnails/thumbnail.jpg?height=600",
  },

  // Local files — upload to Cloudflare and update when ready
];

// ── Cloudflare tile (iframe, hover to play) ──────────────────
function CloudflareTile({ v }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 cursor-pointer
                 transition-all duration-300 will-change-transform
                 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.55)] hover:border-white/20"
    >
      <div className="relative aspect-[16/10] bg-black">
        <img
          src={v.thumb}
          alt={v.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        />

        {hovered && (
          <iframe
            src={v.src}
            className="absolute inset-0 w-full h-full"
            style={{ border: "none" }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          />
        )}

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/10 transition-opacity duration-300 pointer-events-none ${
            hovered ? "opacity-20" : "opacity-90"
          }`}
        />

        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex items-center gap-3 rounded-full border border-white/20 bg-black/45 px-5 py-3 backdrop-blur">
            <span className="text-white text-sm font-semibold tracking-tight">Play</span>
            <span className="text-white/80 text-base leading-none">▶</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
          <div className="text-white font-semibold tracking-tight text-lg leading-tight">{v.title}</div>
          <div className="mt-1 text-white/60 text-xs tracking-[0.18em] uppercase">{v.location}</div>
        </div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

// ── Local video tile ────────────────────
function LocalTile({ v }) {
  const vidRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = async () => {
    const el = vidRef.current;
    if (!el) return;
    try {
      if (el.paused) {
        await el.play();
        setIsPlaying(true);
      } else {
        el.pause();
        setIsPlaying(false);
      }
    } catch {}
  };

  const goFullscreen = async (e) => {
    e.stopPropagation();
    const el = vidRef.current;
    if (!el) return;
    try {
      if (el.requestFullscreen) await el.requestFullscreen();
      else if (el.webkitEnterFullscreen) el.webkitEnterFullscreen();
    } catch {}
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
          className="absolute inset-0 h-full w-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={v.src} type="video/mp4" />
        </video>

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/10 transition-opacity duration-300 ${
            isPlaying ? "opacity-35" : "opacity-90"
          }`}
        />

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

        <button
          type="button"
          onClick={goFullscreen}
          className="absolute top-4 right-4 rounded-full border border-white/15 bg-black/45 backdrop-blur px-3 py-2
                     text-[0.65rem] tracking-[0.18em] uppercase text-white/85
                     opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
        >
          Full
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="text-white font-semibold tracking-tight text-lg leading-tight">{v.title}</div>
          <div className="mt-1 text-white/60 text-xs tracking-[0.18em] uppercase">{v.location}</div>
        </div>
      </div>
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
            <p className="text-white/50 text-xs tracking-[0.28em] uppercase mb-3">Selected Work</p>
            <h2
              className="font-semibold tracking-tight leading-[1.05]"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}
            >
              Flights, frames, and places.
            </h2>
          </div>
          <p className="hidden md:block text-white/55 text-sm max-w-sm leading-relaxed">
            Hover to play. Click fullscreen to expand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VIDEOS.map((v) =>
            v.type === "cloudflare" ? (
              <CloudflareTile key={v.src} v={v} />
            ) : (
              <LocalTile key={v.src} v={v} />
            )
          )}
        </div>
      </div>
    </section>
  );
}