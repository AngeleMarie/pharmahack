"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useScrollspy } from "@/components/scrollspy";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const activeId = useScrollspy(
    ["hero", "about", "services", "working-process", "testimonials"],
    100
  );

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#working-process", label: "Workflow" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false); // close after click
  };

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="fixed py-4 left-0 right-0 z-50 px-4 lg:px-16 flex items-center bg-white">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <span className="text-2xl font-bold text-[#4880FF]">
          <img src="/logo.svg" alt="logo" className="h-8 w-auto" />
        </span>
        <p className="text-[#4880FF] font-semibold  ">
          <span className="capitalize">Pharma</span>
          <span className="text-[#202224]">Hack</span>
        </p>
      </Link>

      {/* Desktop Nav */}
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

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <Link
          href="/login"
          className="text-black/90 px-4 py-2 hover:text-[#4880FF] hover:underline transition-colors"
        >
          Sign In
        </Link>

        <Link
          href="/register"
          className="bg-[#4880FF] text-white rounded-xl px-4 py-2 hover:shadow-md hover:font-semibold transition-colors"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-black ml-auto"
      >
        <Menu size={28} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/5 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-bold text-[#4880FF]">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col items-start px-6 py-6 gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`text-lg ${
                activeId === item.href.slice(1)
                  ? "text-[#4880FF] font-semibold"
                  : "text-black/90 hover:text-black"
              } transition-colors`}
            >
              {item.label}
            </a>
          ))}

          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="text-black/90 px-2 py-2 hover:text-[#4880FF] hover:underline transition-colors"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className="bg-[#4880FF] text-white rounded-xl px-4 py-2 hover:shadow-md hover:font-semibold transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
