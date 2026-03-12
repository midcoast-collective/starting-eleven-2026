/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useCallback, useMemo } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import "swiper/css";
import "swiper/css/scrollbar";
import LaCarouselGallery from "./carouselGallery";

export const Gallery = styled.section`
  --swiper-theme-color: var(--color-white);
  .swiper-slide {
    background-color: #f2f3f6;
    height: 100%;
  }

  .swiper-slide img {
    user-select: none;
    width: 100%;
    height: auto;
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  right: 2.5rem;
  top: calc(
    50% - 10rem
  ); /* Adjust this value to position the arrows vertically */
  display: flex;
  flex-direction: column; /* Default to vertical layout */
  align-items: center;
  z-index: 2;

  @media (min-width: 900px) {
    flex-direction: row;
    top: calc(30% - 1.5rem);
    transform: translateY(-50%);
    right: 5rem;
  }
`;

const PrevArrow = styled.div`
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  cursor: pointer;
  margin-right: 1rem;

  &::after {
    content: "prev";
    color: var(--color-black);
    font-family: swiper-icons;
    font-size: 2rem;
    text-transform: none !important;
    letter-spacing: 0;
    font-feature-settings: ;
    font-variant: initial;
    line-height: 1;
  }
`;

const NextArrow = styled(PrevArrow)`
  &::after {
    content: "next";
  }
`;
const Container = styled.div`
  padding: 3rem;
  width: 100%;
  background: #f2f3f6;
  position: relative;
`;
const Heading = styled.h1`
  padding: 3rem 0;
`;
export default function LaCarousel() {
  const [swiperRef, setSwiperRef] = useState();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  const slides = [
      {
        icon: <FavoriteBorderIcon/>,
        price: "from:$400/hr",
        title: "Lorem Ipsum is simply dummy text of the... ",
        location: "Venice ,Los Angeles, CA",
        people: "100",
        images: [
          "/project/apple-tv-breakaway/gallery/1.jpg",
          "/project/apple-tv-breakaway/gallery/6.jpg",
          "/project/apple-tv-breakaway/gallery/9.jpg",
        ],
      },
      {
        icon: <FavoriteBorderIcon/>,
        price: "from:$e00/hr",
        title: "Lorem Ipsum is simply dummy text of the... ",
        location: "Venice ,Los Angeles, CA",
        people: "100",
        images: [
          "/project/apple-tv-breakaway/gallery/2.jpg",
          "/project/apple-tv-breakaway/gallery/5.jpg",
          "/project/apple-tv-breakaway/gallery/10.jpg",
        ],
      },
      {
        icon: <FavoriteBorderIcon/>,
        price: "from:$400/hr",
        title: "Lorem Ipsum is simply dummy text of the... ",
        location: "Venice ,Los Angeles, CA",
        people: "100",
        images: [
          "/project/apple-tv-breakaway/gallery/4.jpg",
          "/project/apple-tv-breakaway/gallery/8.jpg",
          "/project/apple-tv-breakaway/gallery/12.jpg",
        ],
      },
      {
        icon: <FavoriteBorderIcon/>,
        price: "from:$400/hr",
        title: "Lorem Ipsum is simply dummy text of the... ",
        location: "Venice ,Los Angeles, CA",
        people: "100",
        images: [
          "/project/apple-tv-breakaway/gallery/3.jpg",
          "/project/apple-tv-breakaway/gallery/7.jpg",
          "/project/apple-tv-breakaway/gallery/11.jpg",
        ],
      },
      {
        icon: <FavoriteBorderIcon/>,
        title: "Lorem Ipsum is simply dummy text of the... ",
        price: "from: $400/hr",
        location: "Venice ,Los Angeles, CA",
        people: "100",
        images: [
          "/project/apple-tv-breakaway/gallery/4.jpg",
          "/project/apple-tv-breakaway/gallery/8.jpg",
          "/project/apple-tv-breakaway/gallery/12.jpg",
        ],
      }
    ]
   

  return (
    <Container>
      <Heading>Popular production spaces near Venice</Heading>
      <ArrowContainer>
        <PrevArrow onClick={handlePrevious} $visible={!isBeginning} />
        <NextArrow onClick={handleNext} $visible={!isEnd} />
      </ArrowContainer>
      <Gallery>
        <Swiper
          onSlideChange={() => {
            setIsBeginning(swiperRef.isBeginning);
            setIsEnd(swiperRef.isEnd);
          }}
          onSwiper={setSwiperRef}
          spaceBetween={18}
          slidesPerView={1.3}
          breakpoints={{
            1100: {
              slidesPerView: 3.3,
              spaceBetween: 48,
            },
            600: {
              slidesPerView: 2.3,
              spaceBetween: 48,
            },
          }}
        >
          {slides.map((slideImages, index) => (
            <SwiperSlide key={index}>
              <LaCarouselGallery slide={slideImages} />
             
            </SwiperSlide>
          ))}
        </Swiper>
      </Gallery>
    </Container>
  );
}
