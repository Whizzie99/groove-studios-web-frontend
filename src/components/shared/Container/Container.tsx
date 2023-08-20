import { StyledContainer } from "./styles";

interface ContainerProps {
  width?: string;
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ width, children }) => {
  return <StyledContainer $width={width}>{children}</StyledContainer>;
};

export default Container;
