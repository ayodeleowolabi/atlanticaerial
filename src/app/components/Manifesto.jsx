"use client";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative min-h-[60vh] bg-black text-white flex items-center"
    >
      {/* subtle top fade so it sits nicely under the hero */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-10 py-24 text-center">
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

        <div className="mt-14 max-w-4xl mx-auto">
          <p
            className="text-white/55 leading-relaxed"
            style={{ fontSize: "clamp(0.98rem, 1.15vw, 1.1rem)" }}
          >
            Experience across civic buildings, laboratories, and large-scale construction
            environments in Washington DC.
          </p>

          <p
            className="mt-5 text-white/45 leading-relaxed"
            style={{ fontSize: "clamp(0.98rem, 1.15vw, 1.1rem)" }}
          >
            With experience working across major municipal facilities and complex construction
            environments in Washington DC, we bring a disciplined and cinematic approach to
            aerial documentation—serving architecture, infrastructure, and destination storytelling.
          </p>
        </div>
      </div>
    </section>
  );
}