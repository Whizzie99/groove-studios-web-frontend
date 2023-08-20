"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    height: 100vh;
  }
`;

export const StyledHeroLeft = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 992px) {
    width: 50%;
    height: auto;
  }
`;

export const StyledHeroRight = styled.div`
  display: none;
  width: 100%;
  height: 50em;

  @media screen and (min-width: 992px) {
    display: block;
    width: 50%;
    height: auto;
  }
`;

export const StyledHeroLeftContent = styled.div`
  width: 70%;
  margin-left: 10%;

  h1 {
    font-family: var(--font-solar);
    font-size: 2.5em;
    line-height: 1.2;
    text-transform: capitalize;
    color: var(--pink);
  }

  p {
    font-family: var(--font-raleway);
    font-weight: 200;
    line-height: 1.5;
    margin-top: 0.7em;
    font-size: 1em;

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
    width: 50%;
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

  @media screen and (min-width: 992px) {
    h1{
      font-size: 4em;
    }

    p{
      font-size: 1.1em;
    }

    a{
      width: 30%;
    }
  }
`;

export const StyledHeroRightImg = styled.div`
  position: relative;
  height: 100%;
`;
