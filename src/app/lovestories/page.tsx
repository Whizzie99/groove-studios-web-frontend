import type { Metadata } from "next";
import LoveStoriesFragments from "@/components/fragments/LoveStoriesFragment/LoveStoriesPageFragment";

export const metadata: Metadata = {
  title: "Groove Studios | Love Stories",
  description: "Hearts entwined: love's enchanting chronicles",
  openGraph: {
    images: ['./groove-og-image.jpg']
  }
};

export default function LoveStories() {
  return <LoveStoriesFragments />;
}
