import { StyledVideo } from "./styles";

// YouTube.tsx

interface YouTubeProps {
  videoId?: string;
  // className?: string;
}

const VideoPlayer: React.FC<YouTubeProps> = ({ videoId }) => {
  return (
    <StyledVideo>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        sandbox="allow-scripts allow-same-origin allow-presentation"
        allowFullScreen
      ></iframe>
    </StyledVideo>
  );
};

export default VideoPlayer;
