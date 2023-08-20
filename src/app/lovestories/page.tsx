import type { Metadata } from "next";
import LoveStoriesFragments from "@/components/fragments/LoveStoriesFragment/LoveStoriesPageFragment";

export const metadata: Metadata = {
  title: "Groove Studios | Love Stories",
  description: "Hearts entwined: love's enchanting chronicles",
  openGraph: {
    images: ['https://res.cloudinary.com/dsvkqlylv/image/upload/v1692533092/groove-og-image_neqoqs.jpg']
  }
};

export default function LoveStories() {
  return <LoveStoriesFragments />;
}
