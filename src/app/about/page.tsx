import { AboutPage } from "@/components/ChurchPages";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Church",
  description:
    "Discover ACK St. Stephen Karunga, our Anglican faith, history, mission and Christian community in Ndumberi, Kiambu County.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Our Church",
    description:
      "Learn about our church, faith, mission and community in Ndumberi, Kiambu County.",
    url: "/about",
  },
};

export default function Page() {
  return <AboutPage />;
}