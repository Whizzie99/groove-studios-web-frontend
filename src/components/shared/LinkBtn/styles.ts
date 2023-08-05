"use client";
import styled from "styled-components";

interface StyledLinkProps {
  readonly $width?: string;
  readonly $textColor?: string;
  readonly $bgColor?: string;
}

export const StyledLink = styled.div<StyledLinkProps>`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
    background: ${(props) => (props.$bgColor ? props.$bgColor : "var(--pink)")};
    width: ${(props) => (props.$width ? props.$width : "30%")};
    margin-top: 1em;
    padding: 0.5em;
    text-decoration: none;
    font-size: 1.6em;
    color: ${props => props.$textColor ? props.$textColor : 'var(--white)' };

    span {
      &:first-child {
        font-family: var(--font-allura);
        text-transform: capitalize;
      }

      &:last-child {
        margin-top: 0.25em;
      }
    }
  }
`;
