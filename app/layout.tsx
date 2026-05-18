import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "LuisAlbertoVG",
  description: "Narrativa visual cinematográfica premium.",

  openGraph: {
    title: "LuisAlbertoVG",
    description: "Narrativa visual cinematográfica premium.",
    url: "https://luisalberto.vg",
    siteName: "LuisAlbertoVG",
    images: [
      {
        url: "https://luisalberto.vg/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LuisAlbertoVG",
      },
    ],
    locale: "es_MX",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LuisAlbertoVG",
    description: "Narrativa visual cinematográfica premium.",
    images: ["https://luisalberto.vg/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}