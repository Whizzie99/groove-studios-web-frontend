import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import LinkBtn from "../shared/LinkBtn/LinkBtn";
import {
  StyledWrapper,
  StyledHeroLeft,
  StyledHeroRight,
  StyledHeroLeftContent,
  StyledHeroRightImg,
} from "./styles";

const Hero: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledHeroLeft>
        <StyledHeroLeftContent>
          <h1>capturing love&apos;s rythm</h1>
          <p>
            we&apos;re heartwitnesses, dedicated to preserving every romantic
            note, every cherished glance, and every joyous step of your love
            story.
          </p>
          <LinkBtn text="explore" />
        </StyledHeroLeftContent>
      </StyledHeroLeft>
      <StyledHeroRight>
        <StyledHeroRightImg>
          <Image
            src="/images/sample-1.jpeg"
            alt="hero image"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </StyledHeroRightImg>
      </StyledHeroRight>
    </StyledWrapper>
  );
};

export default Hero;
