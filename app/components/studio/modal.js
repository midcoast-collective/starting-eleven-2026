import styled from "styled-components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ModalSlider from "./modalSlider";
import { useState } from "react";

const Modal = ({ images, onClose }) => {
    const [showModalSlider, setShowModalSlider] = useState(false);
    const [initialSlide, setInitialSlide] = useState(0); 

    const handleClick = (index) => {
        setInitialSlide(index);
        setShowModalSlider(true);
    };
  
    const handleCloseModal = () => {
      setShowModalSlider(false);
    };
  return (
    <>
     {showModalSlider ? <ModalSlider images={images} onClose={handleCloseModal} initialSlide={initialSlide} /> :
    <ModalOverlay>

      <ModalContent >
        <ModalHeader>
        <Button BACK onClick={onClose}>
            <ArrowBackIosIcon style={{ fontSize: "12px" }} />
            Back
          </Button>
        <Text>Venice Beach - Cyc-wall, Loft w/ Skylight, Recording Booth, Green Room and more.</Text>
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
        
        <ImageGrid>
          {images.map((image, i) => (
            <ImageItem key={i} src={image} onClick={() => handleClick(i)} />
          ))}
        </ImageGrid>
      </ModalContent>
    </ModalOverlay>
}
    </>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto; 
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2.5rem;
   max-height: 100vh; 
  width: 100%; 
  overflow-y: auto; 
  
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-gap: 2.5em;
  grid-template-columns: repeat(3, 1fr);

   @media (max-width: 1100px) {  
    grid-template-columns: repeat(2, 1fr); 
    grid-gap: 2.5em;
  }

  @media (max-width: 750px){
    grid-template-columns: 1fr;
    grid-gap: 0.5em;
  }
  margin-top: 20px;
`;

const ImageItem = styled.img`
  width: 100%;
  height: 350px;
  cursor: pointer;
  object-fit: fill;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  gap:25px;
 
`;

export const Button = styled.p`
  color: var(--color-black);
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
  @media (max-width: 1108px) {
    margin-left:0.5rem;
    margin-right:0.5rem;
    text-align:center;
  }
  @media (max-width: 768px) {
    display:none;
  }
`;


