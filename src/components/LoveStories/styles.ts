"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 5em 0;
`;

export const StyledHeading = styled.h2`
  margin-bottom: 1em;
  font-size: 2em;
  font-family: var(--font-magic);
  color: var(--pink);
  text-transform: capitalize;

  @media screen and (min-width: 992px) {
    font-size: 3em;
  }
`;
