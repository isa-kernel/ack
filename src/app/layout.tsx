
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ACK St. Stephen Karunga | Ndumberi",
    template: "%s | ACK St. Stephen Karunga",
  },
  description:
    "Welcome to ACK St. Stephen Karunga, Ndumberi, Kiambu County. Discover our church, worship, fellowship and community.",
  applicationName: "ACK St. Stephen Karunga",
  keywords: [
    "ACK St Stephen Karunga",
    "Anglican Church",
    "Church in Ndumberi",
    "Church in Kiambu",
    "Worship",
    "Fellowship",
  ],
  openGraph: {
    title: "ACK St. Stephen Karunga",
    description:
      "A place to worship. A community to belong. Join us in Ndumberi, Kiambu County.",
    type: "website",
    locale: "en_KE",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071b3c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
