import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { StyledLink } from "./styles";

interface LinkBtnProps {
  width?: string;
  textColor?: string;
  bgColor?: string;
  text?: string;
  path?: string;
}

const LinkBtn: React.FC<LinkBtnProps> = ({
  width,
  textColor,
  bgColor,
  text,
  path,
}) => {
  return (
    <StyledLink $width={width} $textColor={textColor} $bgColor={bgColor}>
      <Link href={path || "#"}>
        <span>{text}</span>
        <span>
          <BsArrowRight />
        </span>
      </Link>
    </StyledLink>
  );
};

export default LinkBtn;
