// import axios from "@/utils/axios";
import {client} from '@/lib/sanity';
import { LoveStory } from "@/lib/interface";
import HerStory from "@/components/HerStory/HerStory";
import HisStory from "@/components/HisStory/HisStory";
import LoveStoryHero from "@/components/LoveStoryHero/LoveStoryHero";
import OtherStories from "@/components/OtherStories/OtherStories";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

// interface Props {
//   id: number;
// }

async function getLoveStory(id: string) {
  const query = `*[_type == "loveStory" && _id == "${id}"][0]`;

  const data = await client.fetch(query, { next: { revalidate: 0 } });

  return data;
}

export default async function LoveStoryFragments({ id }: { id: string }) {
  const loveStory = (await getLoveStory(id)) as LoveStory;

  // console.log(loveStory);

  return (
    <>
      <LoveStoryHero
        title={loveStory.title}
        img={loveStory.mainImage}
      />
      <HisStory content={loveStory.hisStory} />
      <HerStory content={loveStory.herStory} />
      <VideoPlayer videoId={loveStory.youtubeVideoId} />
      {/* <OtherStories /> */}
    </>
  );
}
