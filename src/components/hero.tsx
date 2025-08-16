import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"



export default function Hero() {
  
  return (
    <section className="relative  pt-32 pb-16 px-4 lg:px-6 overflow-hidden">
      <img src='/vein.png' alt="star" className="absolute top-2 left-0 opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        <div className="space-y-8 mx-4 md:mx-0">
          
          <div className="relative my-12  md:my-8">
            <div className="bg-white border-2 p-1 flex mx-auto text-sm text-center border-[#EEEEEE] shadow-xl m-6 rounded-md w-1/3">What’s new? Instantly bill insurance for medications! <MoveRight className="w-4 ml-2"/>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold capitalize text-[#111827]  text-center  ">
              Seamlessly bridging
              <span className="text-[#4880FF] capitalize px-3">
                Pharmacy
              </span> and
              <span className="text-[#4880FF] px-3">
                Insurance
              </span>

            </h1>
          </div>
          <div>

          </div>
          <p className="text-lg text-[#111827]/80 max-w-4xl text-center mx-auto">
            Whether you're dispensing medication or processing coverage, our system ensures every step is smooth, accurate, and efficient.
          </p>

          <Button className="bg-[#4880FF] text-white mx-auto w-1/5  rounded-xl py-3 flex justify-between hover:bg-[#4880FF]/90 ">
           <p className="mx-auto">Our Process</p> 
          </Button>
      <img src='/back.svg' alt="star" className="absolute bottom-1/3 right-1.2 opacity-80  pointer-events-none" />


        
        </div>
          
                

      </div>
      <img src='/pills.png' alt="star" className="absolute bottom-1/3 right-0 opacity-80  pointer-events-none" />
<div className="flex justify-center max-w-7xl mx-auto mt-10">
    <img
              src="/computer.png"
              alt="stats"
              className="w-full hidden md:block"
      
            />

</div>

    </section>
  )
}

