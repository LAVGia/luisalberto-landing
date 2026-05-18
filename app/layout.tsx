import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {

  title: "Isabella & Daniel",

  description:
    "Invitación cinematográfica premium para celebrar nuestra boda.",

  openGraph: {
    title: "Isabella & Daniel",
    description:
      "Nos encantará compartir este momento contigo.",
    url: "https://luisalberto.vg/invitacion",
    siteName: "Isabella & Daniel",
    images: [
      {
        url: "https://luisalberto.vg/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Isabella y Daniel"
      }
    ],
    locale: "es_MX",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Isabella & Daniel",
    description:
      "Nos encantará compartir este momento contigo.",
    images: ["https://luisalberto.vg/og-image.jpg"]
  }

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}