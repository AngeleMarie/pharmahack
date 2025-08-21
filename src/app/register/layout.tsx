import type React from "react"
import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import "../globals.css"
import "react-phone-input-2/lib/style.css";

export const metadata: Metadata = {
  title: "PharmaHack",
 
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
      <body className={`${poppins.className} bg-[#FFFFFF]`}>
        {children}
      </body>
    </html>
  )
}
