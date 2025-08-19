import { Package, FileText, BarChart2, MessageSquare, RefreshCw, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Inventory",
    description: "Track medicine stock levels in real-time to avoid shortages or overstock.",
    icon: Package,
    highlight: true,
  },
  {
    title: "Appeals",
    description: "Submit insurance Appeals quickly and accurately directly from the pharmacy portal.",
    icon: TrendingUp,
  },
  {
    title: "Documents",
    description: "Securely store and manage prescriptions and related medicine documents.",
    icon: FileText,
  },
  {
    title: "Reports",
    description: "Generate detailed reports on sales, inventory, and Appeals for better decision-making.",
    icon: BarChart2,
  },
  {
    title: "Review",
    description: "Insurance providers can efficiently receive and review pharmacy Appeals.",
    icon: RefreshCw,
  },
  {
    title: "Feedback",
    description: "Facilitate clear communication between pharmacies and insurers through feedback tools.",
    icon: MessageSquare,
  },
];

export default function Services() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#242331] mb-12">
          Our <span className="text-[#4880FF]">Services</span>
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-sm transition hover:shadow-md text-center ${
                service.highlight ? "bg-gradient-to-b from-[#eef3ff] to-white" : "bg-white"
              }`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-xl bg-[#eef3ff] mb-4">
                <service.icon className="w-6 h-6 text-[#4880FF]" />
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
