"use client";
import styled from "styled-components";

interface StyledHamburgerMenuProps {
  readonly $isOpen?: boolean;
}

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* transform: translateX(-50%); */
  background-image: url("/images/new-nav-bg.png");
  background-size: contain;
  /* background-repeat: no-repeat; */
  /* background-position: center; */
  /* backdrop-filter: brightness(90%) blur(20px);
  -webkit-backdrop-filter: brightness(90%) blur(20px);
  -moz-backdrop-filter: brightness(90%) blur(20px); */
  z-index: 99;
  padding: 3em;
  padding-top: 1em;

  /* border-radius: 1em; */
`;

export const StyledLogo = styled.div`
  position: relative;
  flex: 0.2;
  height: 100px;
  cursor: pointer;
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
    height: 0.2em;
    background-color: var(--gray-3);
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

export const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: var(--gray-3);
  z-index: 98;
`;

export const StyledMenuItems = styled.ul`
  list-style: none;

  li {
    margin: 2em 0;

    a {
      text-transform: capitalize;
      font-family: var(--font-vesta);
      font-size: 3em;
      font-weight: 900;
      text-decoration: none;
      color: var(--pink);
      font-weight: 900;
    }
  }
`;

export const StyledBgImg = styled.div``;
