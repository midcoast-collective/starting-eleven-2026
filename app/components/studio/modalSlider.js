import styled from "styled-components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useState } from "react";

const ModalSlider = ({ images, onClose, initialSlide }) => {
    const [currentSlide, setCurrentSlide] = useState(initialSlide);
    const totalSlides = images.length;
  return (
    <ModalOverlay>

      <ModalContent >
        <ModalHeader>
        <Button BACK onClick={onClose}>
            <ArrowBackIosIcon style={{ fontSize: "12px" }} />
            Back
          </Button>
          <SlideCounter>
              {currentSlide + 1}/{totalSlides}{" "}
            </SlideCounter>
        <ButtonsContainer>
        <Button>
            <VerticalAlignBottomIcon style={{ fontSize: "18px" }} /> Download
          </Button>
          <Button>
            <IosShareIcon style={{ fontSize: "18px" }} /> Share
          </Button>
          <Button>
            <FavoriteBorderIcon style={{ fontSize: "18px" }} />
            Save
          </Button>
        </ButtonsContainer>
        </ModalHeader>
        
        <Swiper modules={[Navigation]} className="mySwiper" navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          style={{marginTop:"20px"}}
          initialSlide={initialSlide}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <ImageContainer>
                <ImageItem src={image} alt={`Image ${i + 1}`} />
              </ImageContainer>
            </SwiperSlide>
          ))}
          <StyledNavigationButton className="swiper-button-prev" />
          <StyledNavigationButton className="swiper-button-next" />
        </Swiper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalSlider;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  overflow-y: auto; 
`;

const ModalContent = styled.div`
  background-color: black;
  padding:  2.5rem;
   max-height: 100vh; 
  width: 100%; 
  overflow-y: auto; 
  
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;    
  height: 70vh;        
`;

const ImageItem = styled.img`
  width: 100%;
  max-height: 100%; 
  object-fit: contain;
`;


export const ButtonsContainer = styled.div`
  display: flex;
  gap:25px;
    align-items:center;
    justify-content:space-between;
`;

export const Button = styled.p`
  color: var(--color-white);
  cursor: pointer;
  display:flex;
  align-items:center;
  gap:${(props) => (props.BACK ? "unset" : "5px")};
  font-weight: 600;
  &:hover {
    color: #6a6e7a;
  }
`;
export const Text = styled.p`
  margin-left:9rem;
  @media (max-width: 108px) {
    margin-left:0.5rem;
    margin-right:0.5rem;
    text-align:center;
  }
  @media (max-width: 768px) {
    display:none;
  }
`;

const StyledNavigationButton = styled.div`
  color: white; 
  position: absolute;
  top: 50%; 
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center; 
  justify-content: center; 
  z-index: 1; 

  &.swiper-button-prev {
    left: 4%; 
  }

  &.swiper-button-next {
    right: 4%; 
  }
     
`;

export const SlideCounter = styled.div`
  background: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  margin-left:14rem;
  @media (max-width: 1108px) {
    margin-left:0.5rem;
    margin-right:0.5rem;
    text-align:center;
  }
`;