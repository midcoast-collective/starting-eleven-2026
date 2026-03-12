"use client";

import styled from "styled-components";

const Heading = styled.h1`
  font-size: 20px;
  margin-bottom: 8px;
`;
const Container = styled.div`
  width: 100%;
  margin-top: 4rem;
`;
const ImageMap = styled.img`
  width: 100%;
`;
export const HR = styled.hr`
  margin: 2.5rem 0; 
  border: none; 
  border-top: 1.5px solid #d1d3db; 
  width: 100%;
`;
export const Timings = styled.div`
  display:flex;
  gap:15rem;
  margin-top:1rem;
`;
function LaLocation() {
  return (
    <Container>
      <Heading>Location</Heading>
      <ImageMap src="/staticmap.png" alt="map" />
      <HR/>
      <div>
      <Heading>Operating Hours</Heading>
      <Timings>
        <p style={{margin:"unset"}}>Monday - Sunday</p>
        <p style={{margin:"unset"}}>
        All day (24 hours)</p>
      </Timings>
      <HR/>
      </div>
    </Container>
  );
}

export default LaLocation;
