"use client";

const LOCATIONS = [
  "Medellín, Colombia",
  "Azores, Portugal",
  "New York, USA",
  "Tulum, Mexico",
  "London, UK",
];

export default function Marquee() {
  return (
    <section className="relative bg-black py-10 overflow-hidden">
      {/* Rotated band */}
      <div className="relative left-1/2 w-[140vw] -translate-x-1/2 rotate-[-2.5deg]">
        <div className="bg-yellow-400 py-5 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
          <div
            className="flex gap-16 whitespace-nowrap will-change-transform"
            style={{ animation: "marquee 20s linear infinite" }}
          >
            {[...LOCATIONS, ...LOCATIONS, ...LOCATIONS].map((loc, i) => (
              <span
                key={i}
                className="text-black text-xs tracking-[0.35em] uppercase font-medium"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}