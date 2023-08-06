"use client";
import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url("images/sample-6.jpeg");
  background-position: center;
  background-size: cover;

  h1 {
    font-family: var(--font-allura);
    text-transform: capitalize;
    width: 35%;
    font-size: 4em;
    color: var(--pink);
    text-align: center;
    line-height: 1;
  }
`;
