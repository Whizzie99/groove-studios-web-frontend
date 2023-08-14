"use client";
import styled from "styled-components";

export const StyledCard = styled.div`
  /* position: relative !important; */
  background: var(--gray-2);
  padding: 1em;
  z-index: 99 !important;
  cursor: pointer;

  /* &::after{
    content: '';
    position: absolute;
    top: 1em;
    right: -1em;
    height: 100%;
    width: 100%;
    background: var(--pink);
    z-index: 1;
  } */
`;

export const StyledImage = styled.div`
  position: relative;
  height: 15em;
`;

export const StyledTitle = styled.div`
  margin-top: 1em;
  position: relative;
  z-index: 99;

  h3 {
    text-align: center;
    font-family: var(--font-allura);
    text-transform: capitalize;
    font-size: 1.5em;
    color: var(--pink);
  }
`;

export const StyledOverlay = styled.div`
  position: absolute;
  top: 10px;
  right: -10px;
  height: 100%;
  width: 100%;
  background: var(--pink);
  z-index: 1;
`;
