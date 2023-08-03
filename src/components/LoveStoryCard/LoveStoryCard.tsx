import Image from "next/image";
import Link from "next/link";
import { StyledCard, StyledCardImg, StyledCardContent, StyledContentLeft, StyledContentRight } from "./styles";

const LoveStoryCard: React.FC = () => {
  return (
    <StyledCard>
      <StyledCardImg>
        <Image src="/images/sample-1.jpeg" alt="love story image" fill style={{objectFit:"cover"}} priority />
      </StyledCardImg>
      <StyledCardContent>
        <StyledContentLeft>
          <h3>a tale of two love birds</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Leo egestas tristique diam amet. Ipsum tortor porttitor ornare odio enim curabitur. Eu turpis sed pretium ultricies libero arcu et blandit a.
          </p>
          <Link href='#'>read more</Link>
        </StyledContentLeft>
        <StyledContentRight>
          <p>20th aug 2020</p>
        </StyledContentRight>
      </StyledCardContent>
    </StyledCard>
  );
}
 
export default LoveStoryCard;