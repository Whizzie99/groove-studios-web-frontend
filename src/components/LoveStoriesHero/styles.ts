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
    font-family: var(--font-solar);
    text-transform: capitalize;
    width: 90%;
    font-size: 2em;
    color: var(--pink);
    text-align: center;
    line-height: 1.2;
    margin-top: 3em;
  }

  @media screen and (max-width: 800px) {
    h1 {
      text-align: center;
    }
  }

  @media screen and (min-width: 992px) {
    h1 {
      width: 35%;
      font-size: 2.5em;
    }
  }
`;
