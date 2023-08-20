"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LinkBtn from "../shared/LinkBtn/LinkBtn";
import {
  StyledWrapper,
  StyledHeroLeft,
  StyledHeroRight,
  StyledHeroLeftContent,
  StyledHeroRightImg,
} from "./styles";

gsap.registerPlugin(ScrollTrigger);

import heroImg from '../../../public/images/sample-1.jpeg';

const Hero: React.FC = () => {
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
      <StyledHeroLeft>
        <StyledHeroLeftContent>
          <h1 ref={addElementRef}>capturing love&apos;s rythm</h1>
          <p ref={addElementRef}>
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
            src={heroImg}
            alt="hero image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            style={{ objectFit: "cover" }}
            placeholder="blur"
            priority
          />
        </StyledHeroRightImg>
      </StyledHeroRight>
    </StyledWrapper>
  );
};

export default Hero;
