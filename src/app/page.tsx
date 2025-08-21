import Header from "@/components/header"
import Hero from "@/components/hero"
import Stats from "@/components/stats"

import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import BounceScroll from "@/components/bounce-scroll"
import WorkingProcess from "@/components/working-process"


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
      <div id="working-process">
        <WorkingProcess />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
  
      <Footer />
      <BounceScroll />
    </main>
  )
}

