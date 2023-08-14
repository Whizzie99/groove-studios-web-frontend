import { Suspense } from "react";
import Container from "../shared/Container/Container";
import LoveStoriesList from "../LoveStoriesList/LoveStoriesList";
import { StyledWrapper, StyledHeading } from "./styles";

const LoveStories: React.FC = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledHeading>love stories</StyledHeading>
        <Suspense fallback={<p>loading...</p>}>
          <LoveStoriesList />
        </Suspense>
      </Container>
    </StyledWrapper>
  );
};

export default LoveStories;
