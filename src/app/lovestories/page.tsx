import type { Metadata } from "next";
import LoveStoriesFragments from "@/components/fragments/LoveStoriesFragment/LoveStoriesPageFragment";

export const metadata: Metadata = {
  title: "Groove Studios | Love Stories",
  description: "Hearts entwined: love's enchanting chronicles",
};

export default function LoveStories() {
  return <LoveStoriesFragments />;
}
