"use client"

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
    >
      <source
        src="https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/f055cd30847ca49fdf33efe83093ac41/downloads/default.mp4"
        type="video/mp4"
    />
    </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex items-end h-full px-10 pb-16">
        <div>
          <p className="text-white/70 tracking-[0.25em] uppercase text-xs mb-5">
            Aerial Film & Photography
          </p>

          <h1
            className="text-white leading-[0.9] font-semibold"
            style={{ fontSize: "clamp(4rem, 9vw, 9rem)" }}
          >
            ATLANTIC
            <br />
            <span className="italic text-white/60">AERIAL</span>
          </h1>
          <p className="text-white/70 tracking-[0.25em] uppercase text-xs mb-5">
            FAA Part 107 Licensed
          </p>
        </div>
      </div>

    </section>
  )
}

export default Hero