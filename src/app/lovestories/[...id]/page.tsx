import LoveStoryFragment from "@/components/fragments/LoveStoryFragment/LoveStoryFragment";

export default function LoveStory({ params }: { params: { id: string } }) {
  const storyId = Number(params.id[0]);

  return <LoveStoryFragment id={storyId} />;
}
