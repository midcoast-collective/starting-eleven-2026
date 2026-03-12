/* eslint-disable @next/next/no-img-element */
"use client";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import GroupsIcon from '@mui/icons-material/Groups';

const StyledSwiper = styled(Swiper)`
  position: relative;

  .swiper-button-next,
  .swiper-button-prev {
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2; 
  }

  &:hover .swiper-button-next,
  &:hover .swiper-button-prev {
    opacity: 1;
  }

  .swiper-slide {
    position: relative;
    overflow: hidden;

    &:hover::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.3); 
      z-index: 1;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

    &:after {
      font-size: 16px;
      color: white;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 1);
    }
  }

  .swiper-button-next {
    right: 10px;
  }

  .swiper-button-prev {
    left: 10px;
  }
`;

const SlideContainer = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  padding: 5px;
  height:30px;
  width:30px;
  z-index: 1; 
  align-items:center;
  display:flex;
  justify-content:center;
  color:var(--color-white);
`;

const PriceContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.9);
  padding: 5px 10px;
  z-index: 1; 
  color:var(--color-white);
`;


export default function LaCarouselGallery({slide}) {
  return (
    <>
    <StyledSwiper
      effect={'fade'}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
    >
      {slide?.images.map((imgSrc, index) => (
        <SwiperSlide key={index}>
          <SlideContainer>
              <ImageWrapper>
                <img src={imgSrc} alt={`Slide ${index + 1}`} />
                <IconContainer>{slide.icon}</IconContainer>
                <PriceContainer>{slide.price}</PriceContainer>
              </ImageWrapper>
            </SlideContainer>
        </SwiperSlide>
      ))}
    </StyledSwiper>
        <div style={{marginTop:"15px", display:"flex", flexDirection:"column", gap:"10px"}}>
        <h4 >{slide.title}</h4>
        <p  style={{margin:"unset"}}>{slide.location}</p>
        <div style={{display:"flex", gap:"5px"}}>
        <GroupsIcon style={{ marginRight: "4px", fontSize:"22px" }} /> <p style={{margin:"unset"}}>{slide.people} </p>
        </div>
      </div>
    </>
  );
}
