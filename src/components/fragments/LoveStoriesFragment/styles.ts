"use client";
import styled from "styled-components";

export const StyledPageContentDescription = styled.div`
  padding: 5em 0;

  p {
    font-family: var(--font-raleway);
    font-size: 1.1em;
    text-align: center;
    line-height: 2;
    font-weight: 200;
    width: 80%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    p {
      width: 50%;
      font-size: 1.2em;
    }
  }
`;
