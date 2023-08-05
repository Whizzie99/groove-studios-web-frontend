import Link from "next/link";
import { StyledLink } from "./styles";

interface LinkBtnProps {
  width?: string;
  textColor?: string;
  bgColor?: string;
  text?: string;
}

const LinkBtn: React.FC<LinkBtnProps> = ({ width, textColor, bgColor }) => {
  return (
    <StyledLink $width={width} $textColor={textColor} $bgColor={bgColor}>
      <Link href="#"></Link>
    </StyledLink>
  );
};

export default LinkBtn;
