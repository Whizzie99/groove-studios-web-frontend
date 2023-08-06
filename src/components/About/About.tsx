import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container/Container";
import LinkBtn from "../shared/LinkBtn/LinkBtn";
import { BsArrowRight } from "react-icons/bs";
import {
  StyledWrapper,
  StyledHeadingText,
  StyledFlexSection,
  StyledFlexSectionLeft,
  StyledFlexSectionRight,
  StyledImage,
  StyledContent,
} from "./styles";

const About: React.FC = () => {
  return (
    <StyledWrapper id="about">
      <Container>
        <StyledHeadingText>
          In love&apos;s tender glow, we make memories last, etched forever in
          our hearts. 💕
        </StyledHeadingText>
        <StyledFlexSection>
          <StyledFlexSectionLeft>
            <StyledImage>
              <Image
                src="/images/sample-4.jpg"
                alt="about image"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </StyledImage>
          </StyledFlexSectionLeft>
          <StyledFlexSectionRight>
            <StyledContent>
              <h2>yours truly, groove!</h2>
              <p>
                we dance with your love story,capturing the magic of your
                special day with precision and passion. From the laughter to the
                tears, we ensure that every memory is preserved in perfect
                harmony. Let us be the choreographers of your wedding&apos;s
                visual symphony, crafting timeless keepsakes that will make your
                hearts skip a beat for generations to come.
              </p>
              <LinkBtn text="contact us" />
            </StyledContent>
          </StyledFlexSectionRight>
        </StyledFlexSection>
      </Container>
    </StyledWrapper>
  );
};

export default About;
