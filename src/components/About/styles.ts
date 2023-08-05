"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 5em 0;
`;

export const StyledHeadingText = styled.h2`
  width: 45%;
  font-size: 3.2em;
  font-family: var(--font-allura);
  color: var(--pink);
  text-align: center;
  margin: 0 auto;
  margin-bottom: 3em;
`;

export const StyledFlexSection = styled.div`
  display: flex;
`;

export const StyledFlexSectionLeft = styled.div`
  width: 50%;
`;

export const StyledFlexSectionRight = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

export const StyledImage = styled.div`
  width: 90%;
  position: relative;
  height: 40em;
`;

export const StyledContent = styled.div`
  h2 {
    font-family: var(--font-allura);
    font-size: 3em;
    color: var(--pink);
    text-transform: capitalize;
    margin-bottom: 0.2em;
  }

  p {
    font-family: var(--font-raleway);
    font-size: 1.1em;
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
    width: 30%;
    margin-top: 0.5em;
    padding: 0.5em;
    text-decoration: none;
    font-size: 1.6em;
    color: var(--white);

    span {
      &:first-child {
        font-family: var(--font-allura);
        text-transform: capitalize;
      }

      &:last-child {
        margin-top: 0.25em;
      }
    }
  }
`;
