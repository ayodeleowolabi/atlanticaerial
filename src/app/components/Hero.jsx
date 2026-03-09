"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full h-screen overflow-hidden bg-black">

    {/* Cloudflare Stream background video */}
<div className="absolute inset-0 overflow-hidden min-h-[100svh]">

  <iframe
    src="https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/64cde6f1426b0624030a53423db7da5b/iframe?autoplay=true&muted=true&loop=true&controls=false&playsinline=true"
    loading="lazy"
    className="
      absolute
      top-1/2 left-1/2
      min-h-full min-w-full
      w-[177.77vh] h-[56.25vw]
      -translate-x-1/2 -translate-y-1/2
    "
    style={{ border: "none" }}
    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
    allowFullScreen
  />

</div>

      {/* overlays */}
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

      {/* content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 sm:px-10 pb-10 sm:pb-16">
        <div className="max-w-5xl">

          <p className="text-white/70 tracking-[0.25em] uppercase text-[0.7rem] sm:text-xs mb-4 sm:mb-5">
            Aerial Film & Photography
          </p>

          <h1
            className="text-white leading-[0.88] font-semibold"
            style={{ fontSize: "clamp(3.5rem, 14vw, 9rem)" }}
          >
            ATLANTIC
            <br />
            <span className="italic text-white/60">AERIAL</span>
          </h1>

          <p className="mt-3 text-white/65 tracking-[0.22em] uppercase text-[0.72rem] sm:text-xs">
            FAA Part 107 Licensed
          </p>

        </div>
      </div>

    </section>
  );
}