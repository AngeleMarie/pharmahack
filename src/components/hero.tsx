import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 px-4 lg:px-6 overflow-hidden">
      {/* Decorative images */}
      <img
        src="/vein.png"
        alt="star"
        className="absolute top-2 left-0 opacity-40 pointer-events-none hidden md:block"
      />

      <div className="max-w-7xl mx-auto">
        <div className="space-y-8 mx-2 sm:mx-4 md:mx-0">
          {/* Announcement */}
          <div className="relative my-8 md:my-12">
            <div className="bg-white border-2 p-1 flex md:mx-auto text-xs sm:text-sm text-center border-[#EEEEEE] shadow-xl m-4 sm:m-6 rounded-md w-full sm:w-2/3 md:w-1/3">
              What’s new? Instantly bill insurance for medications!{" "}
              <MoveRight className="w-3 md:w-4 mr-6 mt-1 md:mt-0 md:ml-2" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold capitalize text-[#111827] text-center">
              Seamlessly bridging{" "}
              <span className="text-[#4880FF] capitalize px-2 sm:px-3">
                Pharmacy
              </span>{" "}
              and{" "}
              <span className="text-[#4880FF] px-2 sm:px-3">Insurance</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#111827]/80 max-w-4xl text-center mx-auto px-2 sm:px-0">
            Whether you are dispensing medication or processing coverage, our
            system ensures every step is smooth, accurate, and efficient.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button className="bg-[#4880FF] text-white w-2/3 sm:w-1/3 md:w-1/5 rounded-xl py-3 flex justify-center hover:bg-[#4880FF]/90">
              <p className="mx-auto text-sm sm:text-base">Our Process</p>
            </Button>
          </div>

          {/* Decorative images */}
          <img
            src="/back.svg"
            alt="star"
            className="absolute bottom-1/3 right-1.2 opacity-80 pointer-events-none hidden md:block"
          />
        </div>
      </div>

      <img
        src="/pills.png"
        alt="star"
        className="absolute bottom-1/3 right-0 opacity-80 pointer-events-none hidden md:block"
      />

      {/* Hero Image */}
      <div className="flex justify-center max-w-7xl mx-auto mt-10">
        <img src="/computer.png" alt="stats" className="w-full" />
      </div>
    </section>
  );
}
