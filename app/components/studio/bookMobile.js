"use client";

import { Box, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

const MonthYear = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: #6a6e7a;
`;

const CalendarTable = styled.table`
  width: 100%;
  margin-bottom: 10px;
  border-spacing: 0;
`;

const TableHeader = styled.th`
  color: #888;
  font-weight: normal;
  padding: 5px 0;
`;

const TableData = styled.td`
  width: 40px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #d1d3db;
  &:hover {
    border: 1px solid var(--color-black);
  }
  &.selected {
    background-color: #007bff;
    border: 1px solid #007bff;
  }
`;

const CalendarFooter = styled.div`
  font-size: 1rem;
  color: #666;
  padding: 16px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6a6e7a;
  font-weight: bold;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -20px;
  right: -20px;
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;
`;

const CardContainer = styled.div`
  background: transparent;
  border: 1px solid #d1d3db;
 
`;

const TitleBook = styled.p`
  color: var(--color-green);
  margin: unset;
`;

const Hours = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const TimeContainer = styled.div`
  display: flex;
  padding: 0 15px;
  width: 100%;
`;

const TimeInput = styled.select`
  padding: 10px;
  border: 1px solid #d1d3db;
  font-size: 14px;
  width: 50%;
  &:hover {
    color: gray;
  }
`;

const ButtonBook = styled.button`
  width: 100%;
  background-color: var(--color-green);
  color: var(--color-white);
  padding: 7px 15px;
  border: none;
  font-size: 2rem;
  margin: 2rem 0;
`;

const LaBookMobile = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 900) {
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

  return (
    <>
    {isMobileView && (
      <CardContainer>
        <Box
          sx={{
            p: "20px 30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TitleBook>Add details to view total price</TitleBook>
          <Hours>
            <span style={{ fontSize: "1.2rem" }}>⚡</span> $400–$900{" "}
            <span style={{ fontSize: "1.2rem" }}>/hr</span>
          </Hours>
          <span>4 hr minimum</span>
        </Box>
        <Divider sx={{ width: "100%" }} />

        <div style={{ padding: "0 15px" }}>
          <ButtonBook>Book Now</ButtonBook>
          <p>You won’t be charged yet.</p>
          <div>
            <h3>⚡ Instant Book</h3>
            <p style={{ padding: "5px 30px" }}>
              After payment, your booking will be instantly confirmed. Free
              cancellation within 24 hours of confirmation.
            </p>
          </div>
        </div>
      </CardContainer>
       )}
  </>
  );
};

export default LaBookMobile;
