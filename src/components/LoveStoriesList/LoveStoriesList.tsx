// import axios from "@/utils/axios";
import Link from "next/link";
import {client} from '@/lib/sanity';
import { LoveStory } from "@/lib/interface";
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
  const query = `*[_type == "loveStory"][0...3]`;

  const data = await client.fetch(query, { next: { revalidate: 10 } });
  // const res = await fetch(
  //   "http://127.0.1:1337/api/love-stories?populate=*",
  // );

  
  // return res.json();
  return data;
}

export default async function LoveStoriesList() {
  const loveStories = (await getLoveStories()) as LoveStory[];

  // console.log(loveStories);

  // const loveStories = await res.json();

  // console.log(res);

  return (
    <StyledWrapper>
      <StyledStoriesList>
        {loveStories.map((loveStory) => (
          <LoveStoryCard
            key={loveStory._id}
            id={loveStory._id}
            img={loveStory.previewImage}
            title={loveStory.title}
            description={loveStory.shortDescription}
            slug={loveStory.slug.current}
            date={loveStory._createdAt}
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
