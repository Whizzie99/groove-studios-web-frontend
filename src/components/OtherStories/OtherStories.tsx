"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import OtherStoryCard from "../OtherStoryCard/OtherStoryCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import { StyledWrapper, StyledCarousel } from "./styles";

const OtherStories: React.FC = () => {
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
          <SwiperSlide>
            <OtherStoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <OtherStoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <OtherStoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <OtherStoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <OtherStoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <OtherStoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <OtherStoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <OtherStoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <OtherStoryCard />
          </SwiperSlide>
        </Swiper>
      </StyledCarousel>
    </StyledWrapper>
  );
};

export default OtherStories;
