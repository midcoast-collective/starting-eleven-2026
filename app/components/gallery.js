/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useCallback } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

export const Gallery = styled.section`
  --swiper-theme-color: var(--color-white);
  --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.1);
  --swiper-scrollbar-drag-bg-color: var(--color-green);
  --swiper-scrollbar-bottom: -1rem;

  position: relative;

  .swiper {
    overflow: visible;
  }

  .swiper-slide {
    background-color: var(--color-gray);
    height: 100%;
  }

  .swiper-slide img {
    user-select: none;
    width: 100%;
    height: ${({ flag }) => (flag === "modal" ? "500px" : "auto")}; /* Conditionally set height */
    object-fit: cover;
  }
`;

const PrevArrow = styled.div`
  padding: 6rem 1.75rem;
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  position: absolute;
  top: calc(50% - 6.5rem);
  left: 0;
  z-index: 2;
  cursor: pointer;

  &::after {
    content: "prev";
    color: var(--color-green);
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
  left: auto;
  right: 0;

  &::after {
    content: "next";
  }
`;

export default function GalleryComponent({ data, flag, handleClick }) {
  const [swiperRef, setSwiperRef] = useState();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <Gallery flag={flag}>
      <PrevArrow onClick={handlePrevious} $visible={!isBeginning} />

      <Swiper
        onSlideChange={() => {
          setIsBeginning(swiperRef.isBeginning);
          setIsEnd(swiperRef.isEnd);
        }}
        onSwiper={setSwiperRef}
        spaceBetween={24}
        slidesPerView={flag == "modal" ? 1 : 1.1}
        modules={[Scrollbar]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          // max-width
          800: {
            slidesPerView: flag == "modal" ? 1 : 1.1,
            spaceBetween: 48,
          },
        }}
      >
        {data.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} alt="" onClick={handleClick} />
          </SwiperSlide>
        ))}
      </Swiper>

      <NextArrow onClick={handleNext} $visible={!isEnd} />
    </Gallery>
  );
}
