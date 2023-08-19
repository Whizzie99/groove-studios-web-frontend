"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin-left: 10%;
  margin-bottom: 5em;

  h2 {
    font-size: 3em;
    font-family: var(--font-allura);
    text-transform: capitalize;
    color: var(--pink);
    margin-bottom: 0.5em;
  }
`;

export const StyledCarousel = styled.div`
  .swiper {
    .swiper-wrapper .swiper-slide {
      z-index: 3 !important;
    }
  }
`;
