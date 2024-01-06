import Image from "next/image";
import { urlFor } from "@/lib/sanityImageUrl";

import { StyledHero } from "./styles";

interface Props {
  title: string;
  img: string;
}

const LoveStoryHero: React.FC<Props> = ({ title, img }) => {
  return (
    <StyledHero>
      <Image
        src={urlFor(img).url()}
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
