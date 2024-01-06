"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
// import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Container from "../shared/Container/Container";
import LinkBtn from "../shared/LinkBtn/LinkBtn";
// import { BsArrowRight } from "react-icons/bs";
import {
  StyledWrapper,
  StyledHeadingText,
  StyledFlexSection,
  StyledFlexSectionLeft,
  StyledFlexSectionRight,
  StyledImage,
  StyledContent,
} from "./styles";

gsap.registerPlugin(ScrollTrigger);

import aboutImg from "../../../public/images/new-assets/couple-holding-hands.jpeg";

const About: React.FC = () => {
  const elementsRef = useRef<HTMLElement[]>([]);

  const addElementRef = (element: HTMLElement | null) => {
    if (element) {
      elementsRef.current.push(element);
    }
  };

  useEffect(() => {
    const elements = elementsRef.current;

    elements.forEach((element) => {
      gsap.set(element, { opacity: 0, y: 50 });

      const tl = gsap.timeline({ paused: true });
      tl.to(element, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        onEnter: () => {
          tl.restart();
        },
        onEnterBack: () => {
          tl.restart();
        },
        onLeave: () => {
          tl.progress(0).pause();
        },
        onLeaveBack: () => {
          tl.progress(0).pause();
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <StyledWrapper id="about">
      <Container>
        <StyledHeadingText ref={addElementRef}>
          In love&apos;s tender glow, we make memories last, etched forever in
          our hearts.
        </StyledHeadingText>
        <StyledFlexSection>
          <StyledFlexSectionLeft>
            <StyledImage ref={addElementRef}>
              <Image
                src={aboutImg}
                alt="about image"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                placeholder="blur"
                priority
              />
            </StyledImage>
          </StyledFlexSectionLeft>
          <StyledFlexSectionRight>
            <StyledContent>
              <h2 ref={addElementRef}>yours truly, groove!</h2>
              <p ref={addElementRef}>
                we dance with your love story,capturing the magic of your
                special day with precision and passion. From the laughter to the
                tears, we ensure that every memory is preserved in perfect
                harmony. Let us be the choreographers of your wedding&apos;s
                visual symphony, crafting timeless keepsakes that will make your
                hearts skip a beat for generations to come.
              </p>
              <LinkBtn text="contact us" path="https://wa.link/h6zcpb" />
            </StyledContent>
          </StyledFlexSectionRight>
        </StyledFlexSection>
      </Container>
    </StyledWrapper>
  );
};

export default About;
