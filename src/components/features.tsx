
import SecurityIcon from '@mui/icons-material/Security';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PaymentsIcon from '@mui/icons-material/Payments';
export default function Features() {
  const features = [
    {
      icon: <SecurityIcon className="w-6 h-6 text-white" />,
      title: "Secure Payments",
      description: "State-of-the-art security for all your transactions",
    },
    {
      icon: <RocketLaunchIcon className="w-6 h-6 text-white" />,
      title: "Fast Processing",
      description: "Lightning-fast transaction processing times",
    },
    {
      icon: <PaymentsIcon className="w-6 h-6 text-white" />,
      title: "Multiple Cards",
      description: "Support for all major credit and debit cards",
    },
  ]

  return (
    <section className="px-4 lg:px-6 py-16  my-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">What do we offer?</h2>
        <div className="grid md:grid-cols-3 gap-8 cursor-pointer">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl flex gap-x-6  backdrop-blur-sm hover:bg-[#27322F]/20 transition-colors ">
              <div className="w-14 h-12 p-2 rounded-2xl bg-[#3D544D] flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <div>
              <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
              <p className="text-white/70 font-light">{feature.description}</p>
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

