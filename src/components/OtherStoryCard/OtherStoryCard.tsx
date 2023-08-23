import { useRouter } from "next/navigation";
import Image from "next/image";
import { sanitizeUrl } from "@/utils/helpers";
import { StyledCard, StyledImage, StyledTitle } from "./styles";

interface Props {
  id?: number;
  img: string;
  title: string;
}

const OtherStoryCard: React.FC<Props> = ({ img, title, id }) => {
  const router = useRouter();

  return (
    <StyledCard
      onClick={() => {
        if (title) {
          router.push(`/lovestories/${id}/${sanitizeUrl(title)}`);
        }
      }}
    >
      <StyledImage>
        <Image
          src={img}
          alt="sample"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </StyledImage>
      <StyledTitle>
        <h3>{title}</h3>
      </StyledTitle>
    </StyledCard>
  );
};

export default OtherStoryCard;
