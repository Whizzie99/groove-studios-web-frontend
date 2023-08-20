"use client";
import styled from "styled-components";

export const StyledVideo = styled.div`
  margin: 5em auto;
  width: 90%;
  height: 30em;

  > iframe {
    width: 100% !important;
    height: 100% !important;
  }

  > div {
    width: 100% !important;
    height: 100% !important;
  }

  @media screen and (min-width: 992px) {
    width: 60%;
  }
`;
