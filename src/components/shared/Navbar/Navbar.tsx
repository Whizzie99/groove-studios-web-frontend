'use client';
import { useState } from "react";
import Image from "next/image";
import { StyledWrapper, StyledHamburgerMenu, StyledLogo } from "./styles";

const Navbar: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleShowMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <StyledWrapper>
      <StyledLogo>
          <Image src='/images/groove-logo.png' alt="groove logo" fill style={{objectFit:"contain"}} priority />
        </StyledLogo>
      <StyledHamburgerMenu onClick={handleShowMenu} $isOpen={isOpen}>
          <span></span>
          <span></span>
          <span></span>
      </StyledHamburgerMenu>
    </StyledWrapper>
  );
}
 
export default Navbar;