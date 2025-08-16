import Link from "next/link"

export default function Footer() {
  const footerLinks = {
    Product: ["Features", "Security", "Business", "Enterprise"],
    Company: ["About", "Careers", "Press", "Blog"],
    Resources: ["Documentation", "Help Center", "Contact", "Cookie Settings"],
    Legal: ["Privacy Policy", "Terms of Service", "Acceptable Use", "Code of Conduct"],
  }

  return (
    <footer className="bg-black/20 backdrop-blur-sm px-4">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="">
          <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">
                <img src="/logo.svg" alt="logo" />
              </span>
              <p className="text-white font-light">
                <span className="capitalize font-semibold">pay</span>
                press.</p>
            </Link>
            <p className="text-[#ADB2B1]  font-light py-8 text-sm">Discover a smarter way to manage your transactions. </p>
          </div>
       
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-white/70 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className=" text-center ">
          
            <p className="text-white/70 text-sm">© Copyright  {new Date().getFullYear()} PayPress . All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

