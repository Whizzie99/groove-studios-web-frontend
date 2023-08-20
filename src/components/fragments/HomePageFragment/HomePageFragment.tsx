"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import LoveStories from "@/components/LoveStories/LoveStories";

const HomePageFragment = () => {
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
      <Hero />
      <About />
      <LoveStories />
    </>
  );
};

export default HomePageFragment;
