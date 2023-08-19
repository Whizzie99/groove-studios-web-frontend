"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const StyledHeroLeft = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const StyledHeroRight = styled.div`
  width: 50%;
`;

export const StyledHeroLeftContent = styled.div`
  width: 70%;
  margin-left: 10%;

  h1 {
    font-family: var(--font-solar);
    font-size: 4em;
    text-transform: capitalize;
    color: var(--pink);
  }

  p {
    font-family: var(--font-raleway);
    font-weight: 200;
    line-height: 1.5;
    margin-top: 0.7em;
    font-size: 1.1em;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
    background: var(--pink);
    width: 30%;
    margin-top: 1em;
    padding: 0.3em;
    text-decoration: none;
    font-size: 1.8em;
    color: var(--white);

    span {
      &:first-child {
        font-family: var(--font-vesta);
        font-weight: 900;
        text-transform: capitalize;
      }

      &:last-child {
        margin-top: 0.25em;
      }
    }
  }
`;

export const StyledHeroRightImg = styled.div`
  position: relative;
  height: 100%;
`;
