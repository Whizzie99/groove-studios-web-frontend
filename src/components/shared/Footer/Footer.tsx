import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import Container from "../Container/Container";
import { StyledWrapper, StyledFooterTop, StyledFooterBottom, StyledCopyright, StyledSocialMediaIcons, StyledSocialMediaIcon } from "./styles";

const Footer: React.FC = () => {

  const currentYear: number = new Date().getFullYear();

  return (
    <StyledWrapper>
      <Container>
        <StyledFooterTop>
          <h2>we&apos;re one shot away!{" "}📸</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Leo egestas tristique diam amet. Ipsum tortor porttitor ornare odio enim curabitur. Eu turpis sed pretium ultricies libero arcu et blandit a.
          </p>
          <Link href='#'>
            <span>contact us</span>
            <span>
              <BsArrowRight/>
            </span>
          </Link>
        </StyledFooterTop>
        <StyledFooterBottom>
          <StyledCopyright>&copy;copyright{currentYear}. Groove Studios.</StyledCopyright>
          <StyledSocialMediaIcons>
            <StyledSocialMediaIcon>
              <Link href='#' target="_blank">
                <FaFacebookSquare/>
              </Link>
            </StyledSocialMediaIcon>
            <StyledSocialMediaIcon>
              <Link href='#' target="_blank">
                <FaInstagram/>
              </Link>
            </StyledSocialMediaIcon>
          </StyledSocialMediaIcons>
        </StyledFooterBottom>
      </Container>
    </StyledWrapper>
  );
}
 
export default Footer;