import Image from "next/image";
import { StyledCard, StyledImage, StyledTitle, StyledOverlay } from "./styles";

const OtherStoryCard: React.FC = () => {
  return (
    <StyledCard>
      <StyledImage>
        <Image
          src="/images/sample-6.jpeg"
          alt="sample"
          fill
          style={{ objectFit: "cover" }}
        />
      </StyledImage>
      <StyledTitle>
        <h3>a tale of 2 birds</h3>
      </StyledTitle>
    </StyledCard>
  );
};

export default OtherStoryCard;
