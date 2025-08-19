import Header from "@/components/header"
import Hero from "@/components/hero"
import Stats from "@/components/stats"

import Services from "@/components/digital-browser"
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
      </div>
      <div id="about">
        <Stats />
      </div>
      <div id="services">
        <Services/>
      </div>
      <div id="card-feature">
        <CardFeature />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
  
    
      <Footer />
      <BounceScroll />
    </main>
  )
}

