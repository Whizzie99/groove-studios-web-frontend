import LoveStoryCard from "../LoveStoryCard/LoveStoryCard";
import { StyledWrapper, StyledStoriesList } from "./styles";

const LoveStoriesList: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledStoriesList>
        <LoveStoryCard/>
        <LoveStoryCard/>
        <LoveStoryCard/>
      </StyledStoriesList>
    </StyledWrapper>
  );
}
 
export default LoveStoriesList;