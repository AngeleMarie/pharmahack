import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomeSections() {
  return (
    <main>
      {/* --- SECTION 1: Insurance Partners --- */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl text-center font-bold text-[#242331] mb-10">
            Insurance <span className="text-[#4880FF]">Partners</span>
          </h1>

          {/* Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <Image
              src="/rssb.svg"
              alt="RSSB"
              width={200}
              height={200}
              className="object-contain"
            />
            <Image
              src="/mmi.svg"
              alt="MMI"
              width={200}
              height={200}
              className="object-contain"
            />
            <Image
              src="/san.svg"
              alt="Sanlam"
              width={200}
              height={200}
              className="object-contain"
            />
            <Image
              src="/mit.svg"
              alt="Mituweli"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: Pharmacy Appeals --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - TEXT */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#242331] leading-snug">
              Making <span className="text-[#4880FF]">Pharmacy</span> Appeals{" "}
              <span className="text-[#4880FF]">Simple</span> and{" "}
              <span className="text-[#4880FF]">Fast</span>
            </h1>
            <p className="text-gray-600 mt-4">
              Fast Appeals, less hassle. Pharmacies and insurers, directly
              connected. We make pharmacy Appeals easy and fast for all.
            </p>

            {/* Bullet Points */}
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0 mt-1" />
                <span>Easy submission of pharmacy Appeals to insurance</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0 mt-1" />
                <span>Faster payment processing for pharmacies</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0 mt-1" />
                <span>Improved accuracy and fewer errors in Appeals</span>
              </li>
            </ul>

            {/* CTA */}
            <Button className="mt-8 bg-[#4880FF] hover:bg-[#3765cc] px-6 py-2 rounded-full text-white text-lg">
              Get Started
            </Button>
          </div>

          {/* RIGHT SIDE - IMAGE/GRAPH */}
          <div className="relative">
            <Image
              src="/stats.png" // Replace with your actual image path
              alt="Pharmacy Stats"
              width={600}
              height={500}
              
            />
          </div>
        </div>
      </section>
    </main>
  );
}
