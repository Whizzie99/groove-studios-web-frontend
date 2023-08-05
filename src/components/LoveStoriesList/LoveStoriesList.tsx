import Link from "next/link";
import LoveStoryCard from "../LoveStoryCard/LoveStoryCard";
import { StyledWrapper, StyledStoriesList, StyledCtaBtn } from "./styles";

const LoveStoriesList: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledStoriesList>
        <LoveStoryCard />
        <LoveStoryCard />
        <LoveStoryCard />
      </StyledStoriesList>
      <StyledCtaBtn>
        <Link href="#"></Link>
      </StyledCtaBtn>
    </StyledWrapper>
  );
};

export default LoveStoriesList;
