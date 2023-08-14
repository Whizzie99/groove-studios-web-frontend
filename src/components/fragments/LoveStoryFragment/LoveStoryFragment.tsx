import axios from "@/utils/axios";
import HerStory from "@/components/HerStory/HerStory";
import HisStory from "@/components/HisStory/HisStory";
import LoveStoryHero from "@/components/LoveStoryHero/LoveStoryHero";
import OtherStories from "@/components/OtherStories/OtherStories";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

// interface Props {
//   id: number;
// }

async function getLoveStory(id: number) {
  const res = await axios.get(`api/love-stories/${id}?populate=*`);

  return res.data;
}

export default async function LoveStoryFragments({ id }: { id: number }) {
  const loveStory = await getLoveStory(id);

  console.log(loveStory);

  return (
    <>
      <LoveStoryHero title={loveStory.data.attributes.title} img={loveStory.data.attributes.main_image.data.attributes.url} />
      <HisStory content={loveStory.data.attributes.his_story} />
      <HerStory content={loveStory.data.attributes.her_story} />
      <VideoPlayer videoId={loveStory.data.attributes.youtube_video_id} />
      <OtherStories />
    </>
  );
}
