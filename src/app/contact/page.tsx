
import type { Metadata } from "next";
import { ContactPage } from "@/components/ChurchPages";

export const metadata: Metadata = {
  title: "Contact Us | ACK St. Stephen Karunga, Ndumberi",
  description:
    "Get in touch with ACK St. Stephen Karunga Anglican Church in Ndumberi, Kiambu County. Find our church location, contact information, service details and ways to connect with our church community.",
  keywords: [
    "ACK St Stephen Karunga contacts",
    "ACK St Stephen Karunga Ndumberi",
    "Anglican Church contacts in Ndumberi",
    "Church in Ndumberi Kiambu",
    "Anglican Church Kiambu County",
    "ACK church location",
    "Church services Ndumberi",
  ],
  openGraph: {
    title: "Contact ACK St. Stephen Karunga",
    description:
      "Connect with ACK St. Stephen Karunga Anglican Church in Ndumberi, Kiambu County. We would love to hear from you and welcome you to our church community.",
    type: "website",
    locale: "en_KE",
    siteName: "ACK St. Stephen Karunga",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | ACK St. Stephen Karunga",
    description:
      "Find and connect with ACK St. Stephen Karunga Anglican Church in Ndumberi, Kiambu County.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ContactPage />;
}
