
import type { Metadata } from "next";
import { EventsPage } from "@/components/ChurchPages";

export const metadata: Metadata = {
  title: "Church Events & Activities | ACK St. Stephen Karunga",
  description:
    "Discover upcoming events, church activities, worship gatherings and community celebrations at ACK St. Stephen Karunga Anglican Church in Ndumberi, Kiambu County. Stay connected and be part of our church community.",
  keywords: [
    "ACK St Stephen Karunga events",
    "Church events in Ndumberi",
    "Anglican Church events Kiambu",
    "Church activities Ndumberi",
    "Upcoming church events Kiambu County",
    "Anglican worship gatherings",
    "ACK church activities",
    "Christian community events Ndumberi",
  ],
  openGraph: {
    title: "Church Events & Activities | ACK St. Stephen Karunga",
    description:
      "Stay updated on upcoming church events, worship gatherings, celebrations and community activities at ACK St. Stephen Karunga in Ndumberi, Kiambu County.",
    type: "website",
    locale: "en_KE",
    siteName: "ACK St. Stephen Karunga",
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Events | ACK St. Stephen Karunga",
    description:
      "Explore church events, worship gatherings and community activities at ACK St. Stephen Karunga, Ndumberi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <EventsPage />;
}
