import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImageUrl";
import LoveStoryFragment from "@/components/fragments/LoveStoryFragment/LoveStoryFragment";

export async function generateMetadata({ params }: { params: { id: string } }) {
  // const id = Number(params.id[0]);
  const id = params.id[0];

  const query = `*[_type == "loveStory" && _id == "${id}"][0]`;

  const data = await client.fetch(query, { next: { revalidate: 0 } });

  const loveStory = data;

  // const res = await fetch(
  //   `https://groove-studios-cms.onrender.com/api/love-stories/${id}?populate=*`,
  // );
  // const loveStory = await res.json();

  return {
    title: `Groove Studios | Love Story - ${loveStory.title}`,
    description: `${loveStory.shortDescription?.substring(
      0,
      100,
    )}...`,
    openGraph: {
      title: `Groove Studios | Love Story - ${loveStory.title}`,
      description: `${loveStory.shortDescription?.substring(
        0,
        100,
      )}...`,
      images: [`${urlFor(loveStory.previewImage).url()}`],
    },
  };
}

export default function LoveStory({ params }: { params: { id: string } }) {
  // const storyId = Number(params.id[0]);
  const storyId = params.id[0];

  return <LoveStoryFragment id={storyId} />;
}
