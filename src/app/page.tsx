import type { Metadata } from "next";
import ChurchHome from "@/components/ChurchHome";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <ChurchHome />;
}