import Image from "next/image";
import { StyledHero } from "./styles";

interface Props {
  title: string;
  img: string;
}

const LoveStoryHero: React.FC<Props> = ({ title, img }) => {
  return (
    <StyledHero>
      <Image
        src={img}
        alt="sample image"
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
      />
      <h1>{title}</h1>
    </StyledHero>
  );
};

export default LoveStoryHero;
