# Atlantic Aerial

**Live site:** [atlanticaerial.com](https://atlanticaerial.com)

A client site for **Atlantic Aerial**, an FAA Part 107 licensed company offering aerial film and photography on the East Coast (Washington DC, New York, Philadelphia and beyond). The goal was a site that sells through the footage: video first, fast to load, and built to convert visitors into inquiries.

## Features

- **Full-screen hero video** streamed from Cloudflare Stream. It autoplays, loops and stays muted, and it's sized to cover any viewport, including mobile `svh` units.
- **Portfolio carousel** of aerial reels, each with a Cloudflare Stream thumbnail and an embedded player.
- **Services grid** covering construction documentation, architecture and urban design, infrastructure inspection, and tourism promotion.
- Manifesto, a scrolling marquee, and a responsive nav with a mobile menu.
- **Contact form** that posts to Formspree and has client-side states for sending, success and error.

## Tech stack

| Layer | Tools |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Styling | Tailwind CSS 3 |
| Video | Cloudflare Stream |
| Forms | Formspree |

## Project structure

```
src/app/
  page.js               page composition
  layout.js             metadata + root layout
  components/           Hero, Nav, Services, Manifesto, Marquee,
                        PortfolioCarousel, Contact, Footer
public/                 images (large .mp4 files are git-ignored and served from Cloudflare)
```

## Running locally

```bash
npm install
npm run dev     # http://localhost:3000
```

---
Designed and developed by **Ayodele Owolabi**, [AO Studio](https://github.com/ayodeleowolabi).
