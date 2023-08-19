"use client";
import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";

import {
  StyledCard,
  StyledCardImg,
  StyledCardContent,
  StyledContentLeft,
  StyledContentRight,
} from "./styles";

interface LoveStoryCardProps {
  id?: string;
  img?: string;
  title?: string;
  description?: string;
  date?: string;
}

const LoveStoryCard: React.FC<LoveStoryCardProps> = ({
  id,
  img,
  title,
  description,
  date,
}) => {
  return (
    <StyledCard>
      <StyledCardImg>
        <Image
          src={img || "/images/sample-1.jpeg"}
          alt={title || "love story image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </StyledCardImg>
      <StyledCardContent>
        <StyledContentLeft>
          <h3>{title || "no title"}</h3>
          <p>{description?.substring(0, 200)}...</p>
          <Link href={`/lovestories/${id}/${title}`}>read more</Link>
        </StyledContentLeft>
        <StyledContentRight>
          <p>
            <Moment format="MMM Do YYYY">{date || "20th aug 2020"}</Moment>
          </p>
        </StyledContentRight>
      </StyledCardContent>
    </StyledCard>
  );
};

export default LoveStoryCard;
