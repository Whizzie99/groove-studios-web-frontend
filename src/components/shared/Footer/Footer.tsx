"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import Container from "../Container/Container";
import {
  StyledWrapper,
  StyledFooterTop,
  StyledFooterBottom,
  StyledCopyright,
  StyledSocialMediaIcons,
  StyledSocialMediaIcon,
} from "./styles";

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

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
    <StyledWrapper id="contact">
      <Container>
        <StyledFooterTop>
          <h2 ref={addElementRef}>we&apos;re one shot away!</h2>
          <p ref={addElementRef}>
            Lorem ipsum dolor sit amet consectetur. Leo egestas tristique diam
            amet. Ipsum tortor porttitor ornare odio enim curabitur. Eu turpis
            sed pretium ultricies libero arcu et blandit a.
          </p>
          <Link href="https://wa.link/h6zcpb" target="_blank" rel="noreferrer">
            <span>contact us</span>
            <span>
              <BsArrowRight />
            </span>
          </Link>
        </StyledFooterTop>
        <StyledFooterBottom>
          <StyledCopyright>
            &copy;copyright{currentYear}. Groove Studios.
          </StyledCopyright>
          <StyledSocialMediaIcons>
            <StyledSocialMediaIcon>
              <Link href="#" target="_blank">
                <FaFacebookSquare />
              </Link>
            </StyledSocialMediaIcon>
            <StyledSocialMediaIcon>
              <Link href="#" target="_blank">
                <FaInstagram />
              </Link>
            </StyledSocialMediaIcon>
          </StyledSocialMediaIcons>
        </StyledFooterBottom>
      </Container>
    </StyledWrapper>
  );
};

export default Footer;
