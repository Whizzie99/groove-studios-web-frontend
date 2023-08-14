"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import OtherStoryCard from "../OtherStoryCard/OtherStoryCard";
import { getLoveStories } from "@/utils/api";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import { StyledWrapper, StyledCarousel } from "./styles";

const OtherStories: React.FC = () => {

  const [loveStories, setLoveStories] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  let mounted = useRef<boolean>(false);  

  useEffect(() => {
    mounted.current = true;

    const fetchData = async () => {
      const response = await getLoveStories();

      if(mounted.current && response.data){
        setLoveStories(response.data)
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      mounted.current = false
    };

  }, [])

  if (loading) return <p>loading...</p>

  return (
    <StyledWrapper>
      <h2>other stories</h2>
      <StyledCarousel>
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
          {
            loveStories.map((loveStory: any) => (
              <SwiperSlide key={loveStory.id}>
                <OtherStoryCard id={loveStory.id} img={loveStory.attributes.preview_image.data.attributes.url} title={loveStory.attributes.title} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </StyledCarousel>
    </StyledWrapper>
  );
};

export default OtherStories;
