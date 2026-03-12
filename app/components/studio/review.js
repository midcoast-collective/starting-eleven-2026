"use client";

import styled from "styled-components";
import { Box, Typography, Divider, Rating } from "@mui/material";

const ReviewCard = styled(Box)`
  background-color: transparent;
`;

const ReviewTitle = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  margin: unset;
`;

const ReviewDate = styled(Typography)`
  color: #757575;
  margin-top: 4px;
`;

const ReviewContent = styled.p`
  margin-top: 8px;
  color: var(--color-black);
`;
const Container = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Heading = styled.h1`
  font-size: 20px;
  margin-bottom: 8px;
  margin-bottom:15px;
  margin-top:4rem;
`;
export const ReviewImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
`;
const LaReviewComponent = () => {
  return (
    <>
      <Heading>Reviews (1)</Heading>
      <Container>
        <div>
          <ReviewImage
            src="/project/apple-tv-breakaway/episodes/1.png"
            alt=""
          ></ReviewImage>
        </div>
        <ReviewCard>
          <div style={{ display: "flex", alignItems: "baseline", gap: "3px" }}>
            <ReviewTitle>Josh M. </ReviewTitle>
            <span>booked a wine tasting for 20 people</span>
          </div>
          <ReviewTitle>Owner</ReviewTitle>

          <div style={{ display: "flex", gap: "25px", marginTop: "10px" }}>
            <Rating
              sx={{ color: "black", fontSize: "1.4rem" }}
              name="read-only"
              value={4}
              readOnly
            />
            <Typography variant="body1"> ✔ Yes, I would book again.</Typography>
          </div>

          <ReviewContent>
            Wow! We just hosted an incredible event here and from start to
            finish it was smooth and successful. Alejandro was so nice and
            helpful with everything. Devin made the booking super easy. We
            already want to book again! Vin on Rose highly recommends this space
            and love that’s it’s in the neighborhood.
          </ReviewContent>
          <ReviewDate variant="body2">July 21, 2024</ReviewDate>
        </ReviewCard>
      </Container>
    </>
  );
};

export default LaReviewComponent;
