
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://ackststephenkarunga.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "ACK St. Stephen Karunga | Ndumberi, Kiambu",
    template: "%s | ACK St. Stephen Karunga",
  },

  description:
    "Welcome to ACK St. Stephen Karunga, Ndumberi, Kiambu County. Join our Anglican Christian community for worship, fellowship, spiritual growth and service.",

  applicationName: "ACK St. Stephen Karunga",

  keywords: [
    "ACK St Stephen Karunga",
    "ACK St. Stephen Karunga Ndumberi",
    "Anglican Church Ndumberi",
    "Church in Ndumberi",
    "Church in Kiambu",
    "Anglican Church Kiambu",
    "Christian worship Ndumberi",
    "Church services Kiambu County",
    "Anglican Christian community Kenya",
    "ACK Church Kiambu County",
  ],

  authors: [
    {
      name: "ACK St. Stephen Karunga",
    },
  ],

  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "ACK St. Stephen Karunga",
    title: "ACK St. Stephen Karunga | Ndumberi",
    description:
      "A place to worship. A community to belong. Join us in Ndumberi, Kiambu County.",
    url: siteUrl,
    images: [
      {
        url: "/images/logo.jpeg",
        alt: "ACK St. Stephen Karunga Church logo",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "ACK St. Stephen Karunga | Ndumberi",
    description:
      "A place to worship. A community to belong. Join us in Ndumberi, Kiambu County.",
    images: ["/images/logo.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071b3c",
};

// Church structured data (JSON-LD)
const churchStructuredData = {
  "@context": "https://schema.vercel.app",
  "@type": "Church",

  "@id": `${siteUrl}/#church`,

  name: "ACK St. Stephen Karunga",
  alternateName: "ACK St Stephen Karunga Ndumberi",

  url: siteUrl,

  description:
    "An Anglican Christian church serving the community of Ndumberi, Kiambu County, Kenya.",

  logo: `${siteUrl}/images/logo.jpeg`,
  image: `${siteUrl}/images/logo.jpeg`,

  address: {
    "@type": "PostalAddress",
    addressLocality: "Ndumberi",
    addressRegion: "Kiambu County",
    addressCountry: "KE",
  },

  sameAs: [
    "https://www.facebook.com/groups/257444238975435/",
    "https://www.instagram.com/squad.shama/",
    "https://youtube.com/@ackst.stephenskarunga7173",
    "https://www.tiktok.com/@ack.st.stephen.ka",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-KE">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(churchStructuredData).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {children}
      </body>
    </html>
  );
}
