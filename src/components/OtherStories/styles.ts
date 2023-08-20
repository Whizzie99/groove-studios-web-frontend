"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  /* margin-left: 10%; */
  margin-bottom: 5em;

  h2 {
    font-size: 1.8em;
    font-family: var(--font-solar);
    text-transform: capitalize;
    color: var(--pink);
    margin-bottom: 0.5em;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 5em;
  }

  @media screen and (min-width: 992px) {
    margin-left: 10%;

    h2{
      font-size: 2.5em;
    }
  }
`;

export const StyledCarousel = styled.div`
  margin-top: 3em;

  .swiper {
    .swiper-wrapper .swiper-slide {
      z-index: 3 !important;
    }
  }
`;
