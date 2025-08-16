import Image from "next/image";

export default function InsurancePartners() {
  return (
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
  );
}
