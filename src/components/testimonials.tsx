import { Quote } from "lucide-react"
import Image from "next/image"


export default function Testimonials() {
  const testimonials = [
    {
      profile: "/pic1.png",
      text: "PayPress has transformed how I handle my finances. It's incredibly user-friendly!",
      author: "Sarah Johnson",
      role: "Small Business Owner",
    },
    {
      profile: "/pic2.png",
      text: "The security features give me peace of mind for all my transactions.",
      author: "Michael Chen",
      role: "Freelancer",
    },
    {
      profile: "/pic3.png",
      text: "Best payment solution I've used. The customer service is outstanding!",
      author: "Emma Davis",
      role: "E-commerce Manager",
    },
  ]

  return (
    <section className="px-4 lg:px-6 py-16 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-xl bg-[#27322F]/20 backdrop-blur-sm">
              <div className=" my-2 bg-[#3D544D] rounded-full p-3 w-12 h-12">
                  <Quote   className=" text-white p-1" />
              </div>
              
              <p className="text-white/90 mb-4">{testimonial.text}</p>
              <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden mb-4 my-4">
                <Image src={testimonial.profile} alt="Profile picture" width={100} height={100} />
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

