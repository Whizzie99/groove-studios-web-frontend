import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import LoveStoryCard from "../LoveStoryCard/LoveStoryCard";
// import LinkBtn from "../shared/LinkBtn/LinkBtn";
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
        <Link href="#">
          <span>contact us</span>
          <span>
            <BsArrowRight />
          </span>
        </Link>
      </StyledCtaBtn>
    </StyledWrapper>
  );
};

export default LoveStoriesList;
