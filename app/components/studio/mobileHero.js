/* eslint-disable @next/next/no-img-element */
"use client";

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";

export const Gallery = styled.section`
  --swiper-theme-color: var(--color-white);

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
    height: auto;
    width: 100%;
  }
`;

export const SlideCounter = styled.div`
  position: absolute;
  bottom: 25px;
  right: 10px;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  z-index: 999;
`;
export const IconsContainer = styled.div`
  position: absolute;
  top: 10px;
  right: ${(props) => (props.isFavorite ? "50px" : "10px")};
  display: flex;
  gap: 10px;
  background: rgba(255, 255, 255, 1);
  padding: 8px;
  border-radius: 50%;
  z-index: 999;
  margin-right:${(props) => (props.isFavorite ? "10px" : "")};

`;

export default function LaMobileHero({handleClick, images}) {
  const [isMobileView, setIsMobileView] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

  const totalSlides = images.length;

  return (
    <>
      {/* {isMobileView && ( */}
        <Gallery>
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
          >
            {images.map((image, index) => (
              <SwiperSlide key={image.id}>
                <img src={image.src} alt={`Slide ${index + 1}`} onClick={handleClick}/>
              </SwiperSlide>
            ))}
            {/* <IconsContainer isFavorite>
              <FavoriteBorderIcon />
            </IconsContainer>
            <IconsContainer>
              <IosShareIcon />
              </IconsContainer> */}

            <SlideCounter>
              {currentSlide}/{totalSlides}{" "}
            </SlideCounter>
          </Swiper>
        </Gallery>
      {/* )} */}
    </>
  );
}
