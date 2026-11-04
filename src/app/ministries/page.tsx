
import type { Metadata } from "next";
import { MinistriesPage } from "@/components/ChurchPages";

export const metadata: Metadata = {
  title: "Church Ministries & Fellowships | ACK St. Stephen Karunga",
  description:
    "Discover the ministries and fellowship groups at ACK St. Stephen Karunga Anglican Church in Ndumberi, Kiambu County. Learn about opportunities for spiritual growth, worship, Christian fellowship, community service and active participation in church life.",
  keywords: [
    "ACK St Stephen Karunga ministries",
    "Anglican Church ministries Ndumberi",
    "Church ministries Kiambu County",
    "Christian fellowship Ndumberi",
    "Anglican youth ministry Kiambu",
    "Church women's fellowship",
    "Church men's fellowship",
    "Sunday school ministry",
    "Christian community Ndumberi",
    "Church volunteer opportunities Kiambu",
  ],
  openGraph: {
    title: "Church Ministries & Fellowships | ACK St. Stephen Karunga",
    description:
      "Find your place to grow, serve and connect through the ministries and fellowship groups at ACK St. Stephen Karunga Anglican Church in Ndumberi, Kiambu County.",
    type: "website",
    locale: "en_KE",
    siteName: "ACK St. Stephen Karunga",
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Ministries | ACK St. Stephen Karunga",
    description:
      "Explore ministries, fellowship groups and opportunities to serve at ACK St. Stephen Karunga, Ndumberi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <MinistriesPage />;
}
