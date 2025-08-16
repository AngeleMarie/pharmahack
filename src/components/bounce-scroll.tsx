"use client"

import { useState, useEffect } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

export default function BounceScroll() {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setIsAtTop(scrollTop === 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToPosition = (position: "top" | "bottom") => {
    const targetPosition = position === "top" ? 0 : document.documentElement.scrollHeight
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={() => scrollToPosition(isAtTop ? "bottom" : "top")}
        className="bg-[#4880FF] text-white p-3 rounded-full shadow-lg hover:bg-[#4880FF]/90 transition-all duration-300 animate-bounce"
        aria-label={isAtTop ? "Scroll to bottom" : "Scroll to top"}
      >
        {isAtTop ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
      </button>
    </div>
  )
}

