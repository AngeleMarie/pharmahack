"use client"

import { useState, useEffect } from "react"

export function useScrollspy(ids: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset

      const position = ids
        .map((id) => {
          const element = document.getElementById(id)

          if (!element) return { id, top: -1, bottom: -1 }

          const rect = element.getBoundingClientRect()
          return {
            id,
            top: rect.top + scroll - offset,
            bottom: rect.bottom + scroll - offset,
          }
        })
        .find(({ top, bottom }) => scroll >= top && scroll <= bottom)

      setActiveId(position?.id || "")
    }

    listener()

    window.addEventListener("resize", listener)
    window.addEventListener("scroll", listener)

    return () => {
      window.removeEventListener("resize", listener)
      window.removeEventListener("scroll", listener)
    }
  }, [ids, offset])

  return activeId
}

