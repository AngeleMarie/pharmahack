import type React from "react"
import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import "./globals.css"

export const metadata: Metadata = {
  title: "Paypress - The Ultimate Transaction Solution",
  description: "Discover a smarter way to manage your transactions with Paypress",
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600'], // Choose the weights you need
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#0A1F0A]`}>
        {children}
      </body>
    </html>
  )
}
