/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useCallback } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export const Episodes = styled.section`
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

export const Episode = styled.a`
  background-color: var(--color-gray);
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  img {
    border-radius: 8px 8px 0 0;
    display: block;
    width: 100%;
    max-height: 20rem;
    object-fit: cover;
    object-position:  50% 15%;
  }

  h3 {
    font-size: var(--font-size-heading-subtitle);
    font-weight: 400;
    padding: 0.75rem 0.75rem 0;
    text-transform: uppercase;
  }

  h4 {
    font-size: 1rem;
    padding: 0 0.75rem 0.75rem;
  }
`;

export default function EpisodesComponent({ data }) {
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
    <Episodes>
      <PrevArrow onClick={handlePrevious} $visible={!isBeginning} />

      <Swiper
        onSlideChange={() => {
          setIsBeginning(swiperRef.isBeginning);
          setIsEnd(swiperRef.isEnd);
        }}
        onSwiper={setSwiperRef}
        spaceBetween={24}
        slidesPerView={1.1}
      >
        {!!data?.length && data.map((episode) => (
          <SwiperSlide key={episode?.image}>
            <Episode href={episode?.link} target="_blank">
              <img src={episode?.image} alt="" />
              <h3>{episode?.subtitle}</h3>
              <h4>{episode?.title}</h4>
            </Episode>
          </SwiperSlide>
        ))}
      </Swiper>

      <NextArrow onClick={handleNext} $visible={!isEnd} />
    </Episodes>
  );
}
