import { useRouter } from "next/navigation";
import Image from "next/image";
import { StyledCard, StyledImage, StyledTitle, StyledOverlay } from "./styles";

interface Props {
  id?: number;
  img: string;
  title: string;
}

const OtherStoryCard: React.FC<Props> = ({img, title, id}) => {
  const router = useRouter();

  return (
    <StyledCard onClick={() => router.push(`/lovestories/${id}/${title}`)}>
      <StyledImage>
        <Image
          src={img}
          alt="sample"
          fill
          style={{ objectFit: "cover" }}
        />
      </StyledImage>
      <StyledTitle>
        <h3>{title}</h3>
      </StyledTitle>
    </StyledCard>
  );
};

export default OtherStoryCard;
