import ReactMarkdown from "react-markdown";
import htmlReactParser from "html-react-parser";
import Container from "../shared/Container/Container";
import { StyledWrapper, StyledContent } from "./styles";

interface HisStoryProps {
  content: string;
}

const HisStory: React.FC<HisStoryProps> = ({ content }) => {
  return (
    <StyledWrapper>
      <Container width="70%">
        <StyledContent>
          <h2>how i met her</h2>
          <div>
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </StyledContent>
      </Container>
    </StyledWrapper>
  );
};

export default HisStory;
