import Image from "next/image";
import { StyledHero } from "./styles";

const LoveStoryHero: React.FC = () => {
  return (
    <StyledHero>
      <Image
        src="/images/sample-6.jpeg"
        alt="sample image"
        fill
        style={{ objectFit: "cover" }}
      />
      <h1>a tale of 2 love birds</h1>
    </StyledHero>
  );
};

export default LoveStoryHero;
