"use client";

const SERVICES = [
  "Construction & Development Documentation",
  "Architecture & Urban Design",
  "Infrastructure Inspection",
  "Tourism & Destination Promotion",
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white px-10 py-28">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4">
            Services
          </p>

          <h2
            className="font-semibold tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
          >
            What We Document
          </h2>
        </div>

        {/* services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service}
              className="group border border-white/10 rounded-xl p-10 bg-white/[0.02]
                         transition-all duration-300
                         hover:-translate-y-2 hover:border-white/25
                         hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              <p className="text-xl font-medium tracking-tight text-white">
                {service}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}