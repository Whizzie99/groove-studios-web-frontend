'use client';
import styled from 'styled-components';

interface StyledHamburgerMenuProps {
  readonly $isOpen?: boolean;
}

export const StyledWrapper = styled.div`
  position: fixed;
  top: 1em;
  left: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  transform: translateX(-50%);
  /* backdrop-filter: brightness(90%) blur(20px); */
  /* -webkit-backdrop-filter: brightness(90%) blur(20px); */
  /* -moz-backdrop-filter: brightness(90%) blur(20px); */
  z-index: 99;
  /* padding: 1em 2em; */
  border-radius: 1em;
`;

export const StyledLogo = styled.div`
  position: relative;
  flex: 0.2;
  height: 100px;
`;

export const StyledHamburgerMenu = styled.div<StyledHamburgerMenuProps>`
  /* flex: 0.1; */
  display: block;
  width: 30px;
  height: 25px;
  position: relative;
  cursor: pointer;

  & span {
    display: block;
    width: 100%;
    height: 0.15em;
    background-color: var(--pink);
    position: absolute;
    border-radius: 0.5em;
    transition: transform 0.3s ease;
  }

  & span:nth-child(1) {
    top: 0;
    transform: ${(props) =>
      props.$isOpen ? "translateY(11px) rotate(45deg)" : "none"};
  }

  & span:nth-child(2) {
    top: 11px;
    transform: ${(props) => (props.$isOpen ? "scale(0)" : "none")};
  }

  & span:nth-child(3) {
    top: 22px;
    transform: ${(props) =>
      props.$isOpen ? "translateY(-11px) rotate(-45deg)" : "none"};
  }
`;

