"use client";
import styled from "styled-components";

export const StyledHero = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;

  h1 {
    position: relative;
    z-index: 2;
    color: var(--pink);
    text-transform: capitalize;
    font-family: var(--font-magic);
    font-size: 2.3em;
    margin-top: 2em;
    width: 40%;
    text-align: center;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
`;
