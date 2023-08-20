"use client";
import styled from "styled-components";

interface StyledContainerProps {
  readonly $width?: string;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  width: 90%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 992px) {
    width: ${(props) => (props.$width ? props.$width : "80%")};
  }
`;
