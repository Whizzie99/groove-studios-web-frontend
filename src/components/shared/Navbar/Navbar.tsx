"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  StyledWrapper,
  StyledHamburgerMenu,
  StyledLogo,
  StyledMenu,
  StyledMenuItems,
} from "./styles";

import logo from "../../../../public/images/new-logo.png";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleShowMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHideMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <StyledWrapper>
        <StyledLogo onClick={() => router.push("/")}>
          <Image
            src={logo}
            alt="groove logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            style={{ objectFit: "contain" }}
            priority
          />
        </StyledLogo>
        <StyledHamburgerMenu onClick={handleShowMenu} $isOpen={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </StyledHamburgerMenu>
      </StyledWrapper>
      {isOpen && (
        <StyledMenu>
          <StyledMenuItems>
            <li>
              <Link href="/" onClick={handleHideMenu}>
                home
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={handleHideMenu}>
                about us
              </Link>
            </li>
            <li>
              <Link href="/lovestories" onClick={handleHideMenu}>
                love stories
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={handleHideMenu}>
                contact us
              </Link>
            </li>
          </StyledMenuItems>
        </StyledMenu>
      )}
    </>
  );
};

export default Navbar;
