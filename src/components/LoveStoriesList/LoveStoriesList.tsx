// import axios from "@/utils/axios";
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";
import LoveStoryCard from "../LoveStoryCard/LoveStoryCard";
import { StyledWrapper, StyledStoriesList, StyledCtaBtn } from "./styles";

// interface LoveStory {
//   id: string,
//   title: string,
//   img: string,
//   description: string;
// }

async function getLoveStories() {
  const res = await fetch("http://127.0.0.1:1337/api/love-stories?populate=*");

  return res.json();
}

export default async function LoveStoriesList() {
  const loveStories = await getLoveStories();

  // console.log(loveStories);

  // const loveStories = await res.json();

  // console.log(res);

  return (
    <StyledWrapper>
      <StyledStoriesList>
        {loveStories.data.map((loveStory: any) => (
          <LoveStoryCard
            key={loveStory.id}
            id={loveStory.id}
            img={loveStory.attributes.preview_image.data.attributes.url}
            title={loveStory.attributes.title}
            description={loveStory.attributes.short_description}
            date={loveStory.attributes.createdAt}
          />
        ))}
        {/* <LoveStoryCard /> */}
      </StyledStoriesList>
      <StyledCtaBtn>
        <Link href="/lovestories">
          <span>read more</span>
          <span>
            <BsArrowRight />
          </span>
        </Link>
      </StyledCtaBtn>
    </StyledWrapper>
  );
}
