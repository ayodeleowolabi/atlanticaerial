"use client"

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

     <iframe
  src="https://customer-bhx35sxtf94ncmdm.cloudflarestream.com/f055cd30847ca49fdf33efe83093ac41/iframe?autoplay=true&muted=true&loop=true&controls=false&poster=https%3A%2F%2Fcustomer-bhx35sxtf94ncmdm.cloudflarestream.com%2Ff055cd30847ca49fdf33efe83093ac41%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
  style={{
    border: "none",
    position: "absolute",
    top: 0, left: 0,
    height: "100%",
    width: "100%",
    transform: "scale(1.05)",
    objectFit: "cover",
  }}
  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
/>

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