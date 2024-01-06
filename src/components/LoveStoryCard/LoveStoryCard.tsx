"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";
import { urlFor } from "@/lib/sanityImageUrl";
import { sanitizeUrl } from "@/utils/helpers";

import {
  StyledCard,
  StyledCardImg,
  StyledCardContent,
  StyledContentLeft,
  StyledContentRight,
} from "./styles";

gsap.registerPlugin(ScrollTrigger);

interface LoveStoryCardProps {
  id?: string;
  img?: string;
  title?: string;
  description?: string;
  date?: Date;
  slug?: string;
}

const LoveStoryCard: React.FC<LoveStoryCardProps> = ({
  id,
  img,
  title,
  description,
  date,
  slug
}) => {
  const elementsRef = useRef<HTMLElement[]>([]);
  const router = useRouter();

  const addElementRef = (element: HTMLElement | null) => {
    if (element) {
      elementsRef.current.push(element);
    }
  };

  // const redirectUrl = (url: string) => {
  //   if (url) {
  //       router.push(`/lovestories/${id}/${sanitizeUrl(url)}`)
  //     }
  // }

  useEffect(() => {
    const elements = elementsRef.current;

    elements.forEach((element) => {
      gsap.set(element, { opacity: 0, y: 50 });

      const tl = gsap.timeline({ paused: true });
      tl.to(element, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        onEnter: () => {
          tl.restart();
        },
        onEnterBack: () => {
          tl.restart();
        },
        onLeave: () => {
          tl.progress(0).pause();
        },
        onLeaveBack: () => {
          tl.progress(0).pause();
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <StyledCard
      ref={addElementRef}
      onClick={() => {
        if (title) {
          // router.push(`/lovestories/${id}/${sanitizeUrl(title)}`);
          router.push(`/lovestories/${id}/${slug}`);
        }
      }}
    >
      <StyledCardImg>
        <Image
          // src={img || "/images/sample-1.jpeg"}
          src={urlFor(img).url()}
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
          <Link href={`/lovestories/${id}/${slug}`}>read more</Link>
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
