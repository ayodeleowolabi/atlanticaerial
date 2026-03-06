"use client";

const SERVICES = [
  {
    title: "Construction & Development Documentation",
    desc: "Progress captures, stakeholder updates, investor visuals, and project marketing.",
  },
  {
    title: "Architecture & Urban Design",
    desc: "Aerial perspectives that show buildings, context, scale, and relationship to the city.",
  },
  {
    title: "Infrastructure Inspection",
    desc: "Clear aerial visuals for facilities, systems, and hard-to-access environments.",
  },
  {
    title: "Tourism & Destination Promotion",
    desc: "Cinematic visuals for cities, districts, landmarks, and public-facing campaigns.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white px-6 sm:px-10 py-28">
      <div className="max-w-6xl mx-auto">

        {/* section heading */}
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
                 <p className="mt-6 text-white/40 text-sm">
Washington DC · New York · Philadelphia · East Coast · Beyond
</p>
        </div>
 

        {/* services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group border border-white/10 rounded-xl p-10 bg-white/[0.02]
              transition-all duration-300
              hover:-translate-y-2 hover:border-white/25
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >

              {/* title */}
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
                {service.title}
              </h3>

              {/* yellow divider */}
              <div className="w-10 h-[2px] bg-yellow-400 mt-5 mb-5" />

              {/* description */}
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}