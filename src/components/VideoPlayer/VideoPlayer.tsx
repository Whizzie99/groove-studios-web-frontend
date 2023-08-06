"use client";
import YouTube from "react-youtube";
import { StyledVideo } from "./styles";

interface VideoPlayerProps {
  videoId?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const videoOptions = {
    height: "100%",
    width: "100%",
  };

  return (
    <StyledVideo>
      <YouTube
        videoId="-NqJHv7ewBo"
        opts={videoOptions}
        className="video-player"
      />
    </StyledVideo>
  );
};

export default VideoPlayer;
