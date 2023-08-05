"use client";
import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5em;
  gap: 1em;
  background: var(--gray-2);
`;

export const StyledCardImg = styled.div`
  flex: 0.3;
  position: relative;
  height: 15em;
`;

export const StyledCardContent = styled.div`
  flex: 0.7;
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const StyledContentLeft = styled.div`
  flex: 0.8;

  h3 {
    font-family: var(--font-allura);
    font-size: 1.9em;
    color: var(--pink);
    text-transform: capitalize;
  }

  p {
    font-family: var(--font-raleway);
    font-size: 1em;
    font-weight: 200;
    line-height: 1.5;
    margin: 0.5em 0;
  }

  a {
    font-family: var(--font-allura);
    font-size: 1.2em;
    color: var(--pink);
    text-transform: capitalize;
  }
`;

export const StyledContentRight = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    width: 50%;
    text-align: center;
    font-family: var(--font-allura);
    font-size: 1.5em;
    color: var(--pink);
    text-transform: capitalize;
  }
`;
