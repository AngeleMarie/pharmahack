import { Button } from "@/components/ui/button"


export default function CardFeature() {
  return (
    <section className="px-4 lg:px-6 py-16 relative">
      <img src='/star.svg' alt="star"className="absolute bottom-1/3 left-1/3 opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="">
            <img
              src="/card.png"
              alt="PayPress Card"
              className=""
                       
            />
          </div>
          <div className="space-y-6 mx-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight capitalize">
            PayPress Card – fast, easy, secure!
            </h2>
            <p className="text-white/70 text-lg">
            Discover your ideal credit card with ease. Our comprehensive selection caters to every financial need and lifestyle. 
            </p>
            <Button className="bg-[#30E030] text-white  rounded-3xl hover:bg-[#30E030]/90">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

