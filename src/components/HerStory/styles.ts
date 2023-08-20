"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin: 5em 0;
`;

export const StyledContent = styled.div`
  h2 {
    font-size: 2.3em;
    font-family: var(--font-vesta);
    font-weight: 900;
    text-transform: capitalize;
    color: var(--pink);
    word-spacing: 2px;
  }

  div {
    font-size: 1em;
    font-family: var(--font-raleway);
    font-weight: 200;
    line-height: 2;
  }

  @media screen and (min-width: 992px) {
    h2{
      font-size: 3em;
    }

    div{
      font-size: 1.1em;
    }
  }
`;
