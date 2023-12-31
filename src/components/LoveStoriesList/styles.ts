"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin-bottom: 2em;
`;

export const StyledStoriesList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 992px) {
    width: 90%;
  }
`;

export const StyledCtaBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
    background: var(--pink);
    width: 50%;
    margin-top: 1em;
    padding: 0.3em;
    text-decoration: none;
    font-size: 1.8em;
    font-weight: 900;
    color: var(--white);
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

    span {
      &:first-child {
        font-family: var(--font-vesta);
        text-transform: capitalize;
      }

      &:last-child {
        margin-top: 0.25em;
      }
    }
  }

  @media screen and (min-width: 992px) {
    a {
      width: 18%;
    }
  }
`;
