import ReactMarkdown from "react-markdown";
import Container from "../shared/Container/Container";
import { StyledWrapper, StyledContent } from "./styles";

interface HerStoryProps {
  content: string;
}

const HerStory: React.FC<HerStoryProps> = ({ content }) => {
  return (
    <StyledWrapper>
      <Container width="70%">
        <StyledContent>
          <h2>how i met him</h2>
          <div>
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </StyledContent>
      </Container>
    </StyledWrapper>
  );
};

export default HerStory;
