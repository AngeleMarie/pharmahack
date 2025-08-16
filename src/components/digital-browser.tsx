import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"


export default function DigitalBrowser() {
  return (
    <section className="px-4 lg:px-6 py-16 relative">
      <img src='/star.svg' alt="star" className="absolute bottom-1/3 left-1/3 opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Choose Your Own Unique Digital Bracelet
            </h2>
            <p className="text-white/70 text-lg">
              Customize your digital banking experience with our flexible bracelet solutions. Ensuring a truly unique experience that makes you feel extraordinary.
            </p>
            <Button className="bg-[#30E030] text-white font-medium rounded-3xl flex p-3 justify-evenly w-full sm:w-2/3 md:w-1/2 lg:w-1/3 hover:bg-[#30E030]/90">
              Get Your Own
              <MoveRight />
            </Button>
          </div>
          <div className="flex justify-center">
            <img
              src="/bracelet.png"
              alt="Digital bracelet preview"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] hidden md:block"
      
            />
          </div>
        </div>
      </div>
    </section>
  )
}
