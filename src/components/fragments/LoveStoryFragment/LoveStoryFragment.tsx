import HerStory from "@/components/HerStory/HerStory";
import HisStory from "@/components/HisStory/HisStory";
import LoveStoryHero from "@/components/LoveStoryHero/LoveStoryHero";
import OtherStories from "@/components/OtherStories/OtherStories";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

const LoveStroryFragment: React.FC = () => {
  return (
    <>
      <LoveStoryHero />
      <HisStory />
      <HerStory />
      <VideoPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      <OtherStories />
    </>
  );
};

export default LoveStroryFragment;
