"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ReactMarkdown from "react-markdown";
import Container from "../shared/Container/Container";
import { StyledWrapper, StyledContent } from "./styles";

gsap.registerPlugin(ScrollTrigger);

interface HerStoryProps {
  content: string;
}

const HerStory: React.FC<HerStoryProps> = ({ content }) => {
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
    <StyledWrapper>
      <Container width="70%">
        <StyledContent>
          <h2 ref={addElementRef}>how i met him</h2>
          <div ref={addElementRef}>
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </StyledContent>
      </Container>
    </StyledWrapper>
  );
};

export default HerStory;
