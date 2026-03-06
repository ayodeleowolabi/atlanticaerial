"use client";

export default function Manifesto() {
  const points = [
    "FAA Part 107 Licensed",
    "Experience across civic and institutional environments",
    "Construction and infrastructure documentation",
    "Available for projects across the East Coast & beyond",  ];

  return (
    <section
      id="manifesto"
      className="relative min-h-[50vh] bg-black text-white flex items-start"
    >
      {/* subtle fade from hero */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 pt-14 pb-20 sm:pt-20 sm:pb-24 text-center">

        <h2
          className="font-semibold tracking-tight leading-[1.05]"
          style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
        >
          Cinematic aerial documentation
        </h2>

        <p
          className="mt-6 text-white/70"
          style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)" }}
        >
          for architecture, infrastructure, and the cities the world comes to see.
        </p>

        {/* bullet grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">

          {points.map((point, i) => (
            <div key={i} className="flex items-start gap-4 text-left">
              
              {/* yellow line */}
              <div className="w-10 h-[2px] bg-yellow-400 mt-[10px]" />

              {/* text */}
              <p
                className="text-white/60 leading-relaxed"
                style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
              >
                {point}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}