import LoveStoryFragment from "@/components/fragments/LoveStoryFragment/LoveStoryFragment";

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const id = Number(params.id[0]);

//   const res = await fetch(
//     `https://groove-studios-cms.onrender.com/api/love-stories/${id}?populate=*`,
//   );
//   const loveStory = await res.json();

//   return {
//     title: `Groove Studios | Love Story - ${loveStory.data.attributes.title}`,
//     description: `${loveStory.data.attributes.short_description?.substring(
//       0,
//       100,
//     )}...`,
//     openGraph: {
//       title: `Groove Studios | Love Story - ${loveStory.data.attributes.title}`,
//       description: `${loveStory.data.attributes.short_description?.substring(
//         0,
//         100,
//       )}...`,
//       images: [`${loveStory.data.attributes.main_image.data.attributes.url}`],
//     },
//   };
// }

export default function LoveStory({ params }: { params: { id: string } }) {
  const storyId = Number(params.id[0]);

  return <LoveStoryFragment id={storyId} />;
}
