import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ethos Creative",
  description: "Download the Ethos Creative background image",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
