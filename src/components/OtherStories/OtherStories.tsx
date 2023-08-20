"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Autoplay } from "swiper/modules";
import OtherStoryCard from "../OtherStoryCard/OtherStoryCard";
import { getLoveStories } from "@/utils/api";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import { StyledWrapper, StyledCarousel } from "./styles";

gsap.registerPlugin(ScrollTrigger);

const OtherStories: React.FC = () => {
  const [loveStories, setLoveStories] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  let mounted = useRef<boolean>(false);

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
    mounted.current = true;

    const fetchData = async () => {
      const response = await getLoveStories();

      if (mounted.current && response.data) {
        setLoveStories(response.data);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      mounted.current = false;
    };
  }, []);

  if (loading) return <p>loading...</p>;

  return (
    <StyledWrapper>
      <h2 ref={addElementRef}>other stories</h2>
      <StyledCarousel ref={addElementRef}>
        <Swiper
          slidesPerView={3.5}
          spaceBetween={10}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 3.5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          loop={true}
          // speed={3000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {loveStories.map((loveStory: any) => (
            <SwiperSlide key={loveStory.id}>
              <OtherStoryCard
                id={loveStory.id}
                img={loveStory.attributes.preview_image.data.attributes.url}
                title={loveStory.attributes.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledCarousel>
    </StyledWrapper>
  );
};

export default OtherStories;
