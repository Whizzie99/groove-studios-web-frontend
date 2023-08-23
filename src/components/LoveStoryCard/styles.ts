"use client";
import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  gap: 1.5em;
  background: var(--gray-2);
  cursor: pointer;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledCardImg = styled.div`
  /* flex: 0.3; */
  position: relative;
  height: 15em;
  z-index: 3;

  img {
    z-index: 3;
    /* height: 100%; */
  }

  &:after {
    content: "";
    position: absolute;
    top: 0.5em;
    right: -0.5em;
    height: 100%;
    width: 100%;
    background: var(--pink);
    z-index: 1;
  }

  @media screen and (min-width: 992px) {
    flex: 0.3;
  }
`;

export const StyledCardContent = styled.div`
  /* flex: 0.7; */
  display: flex;
  align-items: center;
  gap: 1em;

  @media screen and (min-width: 992px) {
    flex: 0.7;
  }
`;

export const StyledContentLeft = styled.div`
  /* flex: 0.8; */

  h3 {
    font-family: var(--font-vesta);
    font-size: 2em;
    font-weight: 900;
    color: var(--pink);
    text-transform: capitalize;
  }

  p {
    font-family: var(--font-raleway);
    font-size: 0.9em;
    font-weight: 200;
    line-height: 1.5;
    margin: 0.5em 0;
  }

  a {
    font-family: var(--font-vesta);
    font-size: 1.5em;
    font-weight: 900;
    color: var(--pink);
    text-transform: capitalize;
  }

  @media screen and (min-width: 992px) {
    flex: 0.8;

    h3 {
      font-size: 2.3em;
    }

    p {
      font-size: 1em;
    }
  }
`;

export const StyledContentRight = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    /* width: 50%; */
    text-align: right;
    font-family: var(--font-magic);
    font-size: 1.5em;
    line-height: 1;
    /* font-weight: 00; */
    color: var(--pink);
    text-transform: capitalize;
  }

  @media screen and (min-width: 992px) {
    flex: 0.2;

    p {
      width: 50%;
      font-size: 1.5em;
    }
  }
`;
