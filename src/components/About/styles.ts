"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 5em 0;
`;

export const StyledHeadingText = styled.h2`
  width: 90%;
  font-size: 2.5em;
  font-weight: 900;
  font-family: var(--font-vesta);
  color: var(--pink);
  text-align: center;
  margin: 0 auto;
  margin-bottom: 3em;
  line-height: 1.2;

  @media screen and (min-width: 992px) {
    width: 60%;
    font-size: 4em;
  }
`;

export const StyledFlexSection = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const StyledFlexSectionLeft = styled.div`
  width: 100%;
  margin-bottom: 3em;
  /* order: 2; */

  @media screen and (min-width: 992px) {
    width: 50%;
    margin-bottom: 0;
    /* order: 1; */
  }
`;

export const StyledFlexSectionRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* order: 1; */

  @media screen and (min-width: 992px) {
    width: 50%;
    /* order: 2; */
  }
`;

export const StyledImage = styled.div`
  width: 100%;
  position: relative;
  height: 40em;

  @media screen and (min-width: 992px) {
    width: 90%;
  }
`;

export const StyledContent = styled.div`
  h2 {
    font-family: var(--font-solar);
    font-size: 2.3em;
    color: var(--pink);
    text-transform: capitalize;
    margin-bottom: 0.2em;
  }

  p {
    font-family: var(--font-raleway);
    font-size: 1em;
    font-weight: 200;
    line-height: 2;

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
    margin-top: 0.5em;
    padding: 0.3em;
    text-decoration: none;
    font-size: 1.8em;
    font-weight: 900;
    color: var(--white);

    span {
      &:first-child {
        font-family: var(--font-vesta);
        text-transform: capitalize;
      }

      &:last-child {
        margin-top: 0.25em;
      }
    }
  }

  @media screen and (min-width: 992px) {
    h2 {
      font-size: 3em;
    }

    p {
      font-size: 1.1em;
    }

    a {
      width: 30%;
    }
  }
`;
