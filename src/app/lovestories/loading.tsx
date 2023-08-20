"use client";
import styled from "styled-components";
import { loveQuotes } from "../../../db/loveQuotes";
import { getRandomWord } from "@/utils/helpers";

export const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledHeart = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  transform: rotate(-45deg);
  background: #d8a3a3;
  animation: beat 1s infinite;

  &:before,
  &:after {
    content: "";
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #d8a3a3;
    position: absolute;
  }

  &:before {
    top: -25px;
    left: 0;
  }

  &:after {
    left: 25px;
    top: 0;
  }

  @media screen and (min-width: 992px) {
    width: 80px;
    height: 80px;

    &:before,
    &:after {
      width: 80px;
      height: 80px;
    }

    &:before {
      top: -40px;
    }

    &:after {
      left: 40px;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.8) rotate(-45deg);
    }
  }
`;

export const StyledLoveQuote = styled.p`
  font-size: 2em;
  font-weight: 900;
  text-align: center;
  font-family: var(--font-vesta);
  color: #d8a3a3;

  @media screen and (min-width: 992px) {
    font-size: 3em;
  }
`;

export default function loading() {
  return (
    <StyledWrapper>
      <div>
        <StyledHeart />
        <StyledLoveQuote>{getRandomWord(loveQuotes)}</StyledLoveQuote>
      </div>
    </StyledWrapper>
  );
}
