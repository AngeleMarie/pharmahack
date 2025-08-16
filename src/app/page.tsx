import Header from "@/components/header"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Features from "@/components/features"
import DigitalBrowser from "@/components/digital-browser"
import CardFeature from "@/components/card-feature"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import AppDownload from "@/components/app-download"
import Footer from "@/components/footer"
import BounceScroll from "@/components/bounce-scroll"


export default function Home() {
  
  return (
    <main 
    className="relative bg-[#FFFFFF]"
  >
     <Header />
      <div id="hero">
        <Hero />
        <Stats />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="digital-browser">
        <DigitalBrowser />
      </div>
      <div id="card-feature">
        <CardFeature />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="app-download">
        <AppDownload />
      </div>
      <Footer />
      <BounceScroll />
    </main>
  )
}

