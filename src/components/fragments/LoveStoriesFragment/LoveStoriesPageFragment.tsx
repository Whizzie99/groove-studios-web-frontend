"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LoveStoriesHero from "@/components/LoveStoriesHero/LoveStoriesHero";
import Container from "@/components/shared/Container/Container";
import LoveStoriesList from "@/components/LoveStoriesList/LoveStoriesList";
import { StyledPageContentDescription } from "./styles";

gsap.registerPlugin(ScrollTrigger);

const LoveStoriesFragments = () => {
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

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <LoveStoriesHero />
      <Container>
        <StyledPageContentDescription>
          <p ref={addElementRef}>
            Here, the air is filled with the sweet fragrance of timeless love
            stories. Unveil the magical tales of soulmates finding each other,
            heartwarming journeys of affection, and the mesmerizing symphony of
            love&apos;s embrace. Let your heart be captivated by these
            enchanting chronicles that remind us that love is the most beautiful
            and wondrous adventure of all.
          </p>
        </StyledPageContentDescription>
        <LoveStoriesList />
      </Container>
    </>
  );
};

export default LoveStoriesFragments;
