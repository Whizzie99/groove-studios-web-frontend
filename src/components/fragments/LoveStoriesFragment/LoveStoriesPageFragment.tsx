"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import LoveStoriesHero from "@/components/LoveStoriesHero/LoveStoriesHero";
import Container from "@/components/shared/Container/Container";
import LoveStoriesList from "@/components/LoveStoriesList/LoveStoriesList";
import { StyledPageContentDescription } from "./styles";

const LoveStoriesFragments = () => {
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
          <p>
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
