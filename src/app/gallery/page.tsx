
import type { Metadata } from "next";
import { GalleryPage } from "@/components/ChurchPages";

export const metadata: Metadata = {
  title: "Church Photo Gallery | ACK St. Stephen Karunga, Ndumberi",
  description:
    "Explore the photo gallery of ACK St. Stephen Karunga Anglican Church in Ndumberi, Kiambu County. View memorable moments from worship services, church celebrations, fellowship, ministry activities and community events.",
  keywords: [
    "ACK St Stephen Karunga gallery",
    "ACK St Stephen Karunga photos",
    "Anglican Church Ndumberi photos",
    "Church gallery Kiambu County",
    "Church events photos Ndumberi",
    "Anglican worship services",
    "Church celebrations Kiambu",
    "Christian fellowship Ndumberi",
  ],
  openGraph: {
    title: "Church Photo Gallery | ACK St. Stephen Karunga",
    description:
      "Explore memorable moments from worship services, church celebrations, ministry activities and community gatherings at ACK St. Stephen Karunga in Ndumberi, Kiambu County.",
    type: "website",
    locale: "en_KE",
    siteName: "ACK St. Stephen Karunga",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | ACK St. Stephen Karunga",
    description:
      "Discover photos of worship, fellowship, church celebrations and community activities at ACK St. Stephen Karunga.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <GalleryPage />;
}
