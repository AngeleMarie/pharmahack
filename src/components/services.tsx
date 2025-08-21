import Image from "next/image";

const services = [
  {
    title: "Inventory",
    description: "Track medicine stock levels in real-time to avoid shortages or overstock.",
    icon: "/inv.svg",
    highlight: true,
  },
  {
    title: "Appeals",
    description: "Submit insurance Appeals quickly and accurately directly from the pharmacy portal.",
    icon: "/appeal.svg",
  },
  {
    title: "Documents",
    description: "Securely store and manage prescriptions and related medicine documents.",
    icon:"/doc.svg",
  },
  {
    title: "Reports",
    description: "Generate detailed reports on sales, inventory, and Appeals for better decision-making.",
    icon: "/rep.svg",
  },
  {
    title: "Review",
    description: "Insurance providers can efficiently receive and review pharmacy Appeals.",
    icon: "/rev.svg",
  },
  {
    title: "Feedback",
    description: "Facilitate clear communication between pharmacies and insurers through feedback tools.",
    icon: "/feed.svg",
  },
];

export default function Services() {
  return (
    <section className="pb-32">
      <div className ="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#242331] mb-12">
          Our <span className="text-[#4880FF]">Services</span>
        </h1>

        {/* Services Grid */}
        <div className="grid cursor-pointer grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl  h-full transition hover:shadow-md text-center hover:bg-gradient-to-b from-[#eef3ff] to-white"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-xl  mb-4">
                <Image
                  src={service.icon}
                  alt={service.title + " icon"}
                  width={48}
                  height={48}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#242331]">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
