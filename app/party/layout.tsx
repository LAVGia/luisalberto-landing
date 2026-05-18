export const metadata = {
  title: "Puti Glow Fest",

  description: "Mayo 23 2026 • Jonacatepec • Glow Party Experience",

  openGraph: {
    title: "Puti Glow Fest",

    description:
      "Mayo 23 2026 • Jonacatepec • Glow Party Experience",

    url: "https://luisalberto.vg/party",

    siteName: "Puti Glow Fest",

    images: [
      {
        url: "https://luisalberto.vg/images/putiglowfestpreview.png",
        width: 1200,
        height: 630,
      },
    ],

    locale: "es_MX",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Puti Glow Fest",

    description:
      "Mayo 23 2026 • Jonacatepec • Glow Party Experience",

    images: [
      "https://luisalberto.vg/images/putiglowfestpreview.png",
    ],
  },
}

export default function PartyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}