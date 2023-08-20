"use client";
import { Suspense, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Container from "../shared/Container/Container";
import LoveStoriesList from "../LoveStoriesList/LoveStoriesList";
import { StyledWrapper, StyledHeading } from "./styles";

gsap.registerPlugin(ScrollTrigger);

const LoveStories: React.FC = () => {
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
      <Container>
        <StyledHeading ref={addElementRef}>love stories</StyledHeading>
        <Suspense fallback={<p>loading...</p>}>
          <LoveStoriesList />
        </Suspense>
      </Container>
    </StyledWrapper>
  );
};

export default LoveStories;
