"use client";
import Link from "next/link";
import { useScrollspy } from "@/components/scrollspy";
import { ArrowDownToLine } from "lucide-react";

export default function Header() {
  const activeId = useScrollspy(
    [
      "hero",
      "about",
      "services",
      "card-feature",
      "testimonials",
      "faq",
      "app-download",
    ],
    100
  );

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#card-feature", label: "Workflow" },
    { href: "#testimonials", label: "Testimonials" },

  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed py-6 left-0 right-0 z-50 px-4 lg:px-16 flex items-center bg-gradient-to-b from-[#fff]/80 to-transparent backdrop-blur-sm">
      {/* Logo on the left */}
      <Link href="/" className="flex items-center gap-2">
        <span className="text-2xl font-bold text-[#4880FF]">
          <img src="/logo.svg" alt="logo" />
        </span>
        <p className="text-[#4880FF] font-semibold hidden sm:inline-block ">
          <span className="capitalize ">Pharma</span>
          <span className="text-[#202224]">
          Hack

          </span>
        </p>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 flex justify-center">
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`text-sm ${
                activeId === item.href.slice(1)
                  ? "text-[#4880FF] font-semibold"
                  : "text-black/90 hover:text-black"
              } transition-colors`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
        <a
  href="#app-download"
  onClick={(e) => handleClick(e, "#app-download")}
  className=" text-black/90 px-4 py-2 hover:shadow-md hover:text-[#4880FF] hover:underline items-center transition-colors flex"
>
  Sign In

</a>

      <a
  href="#app-download"
  onClick={(e) => handleClick(e, "#app-download")}
  className=" bg-[#4880FF] text-white rounded-xl px-4 py-2 hover:shadow-md hover:font-semibold items-center transition-colors flex"
>
  Get Started
  
</a>

    </header>
  );
}
