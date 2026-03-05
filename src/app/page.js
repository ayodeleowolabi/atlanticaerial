import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import Manifesto from "./components/Manifesto"
import PortfolioCarousel from "./components/PortfolioCarousel"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Nav from "./components/Nav";
  
function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Manifesto />
      <Marquee />
      <PortfolioCarousel />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default Page