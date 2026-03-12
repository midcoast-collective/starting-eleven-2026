/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useState } from "react";
import styled from "styled-components";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Heading = styled.h1`
  font-size: 20px;
  margin-bottom: 8px;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  overflow-wrap: break-word;
  font-size: 15px;
`;

const Cancelation = styled.div`
  margin-top: 4rem;
`;
const LaHealth = () => {
  const additionalInfo = [
    {
      icon: "/cleaning-solution.svg",
      title: "Cleaning Protocol",
      content: [
        {
          title: "Enhanced cleaning measures:",
          description: [
            "The space is cleaned and disinfected in accordance with guidelines from local health authorities",
            "High touch surfaces and shared amenities have been disinfected",
          ],
        },
        {
          title:
            "All hosts are required to do the following prior to each booking:",
          description: [
            "Sweep, mop, vacuum and clean the space.",
            "Supply a hand washing station with soap, warm water, and paper towels or hand sanitizer with at least 60% alcohol.",
          ],
        },
      ],
    },
    {
      icon: "/mask.svg",
      title: "Lightening",
      content: [
        {
          title: "Enhanced cleaning measures:",
          description: [
            "The space is cleaned and disinfected in accordance with guidelines from local health authorities",
            "High touch surfaces and shared amenities have been disinfected",
          ],
        },
        {
          title:
            "All hosts are required to do the following prior to each booking:",
          description: [
            "Sweep, mop, vacuum and clean the space.",
            "Supply a hand washing station with soap, warm water, and paper towels or hand sanitizer with at least 60% alcohol.",
          ],
        },
      ],
    },
    {
      icon: "/physical-distance.svg",
      title: "Sound",
      content: [
        {
          title: "Enhanced cleaning measures:",
          description: [
            "The space is cleaned and disinfected in accordance with guidelines from local health authorities",
            "High touch surfaces and shared amenities have been disinfected",
          ],
        },
        {
          title:
            "All hosts are required to do the following prior to each booking:",
          description: [
            "Sweep, mop, vacuum and clean the space.",
            "Supply a hand washing station with soap, warm water, and paper towels or hand sanitizer with at least 60% alcohol.",
          ],
        },
      ],
    },
    {
      icon: "/signage.svg",
      title: "Space access",
      content: [
        {
          title: "Enhanced cleaning measures:",
          description: [
            "The space is cleaned and disinfected in accordance with guidelines from local health authorities",
            "High touch surfaces and shared amenities have been disinfected",
          ],
        },
        {
          title:
            "All hosts are required to do the following prior to each booking:",
          description: [
            "Sweep, mop, vacuum and clean the space.",
            "Supply a hand washing station with soap, warm water, and paper towels or hand sanitizer with at least 60% alcohol.",
          ],
        },
      ],
    },
  ];

  return (
    <div style={{ margin: "4rem 0" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "15px" }}>
        <img src="/health.svg" alt="" style={{ height: "35px" }} />
        <Heading>Enhanced Health and Safety Measures</Heading>
      </div>
      <Paragraph>
        Bookings are spaced apart to allow for enhanced cleaning
      </Paragraph>

      {additionalInfo.map((item, index) => (
        <>
          <Accordion
            key={index}
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              margin: 0,
              "&::before": {
                display: "none", 
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "transparent",
                "&:hover": {
                  opacity: 0.5,
                },
                padding: "unset",
                py: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  width: "100%",
                }}
              >
                <img src={item.icon} alt={item.title} />
                <Typography
                  className="hover-text"
                  variant="h6"
                  sx={{
                    color: "#0a0a0a",
                    fontSize: "1.1em",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "unset" }}>
              {item.content.map((subItem, subIndex) => (
                <div key={subIndex} style={{ marginBottom: "3rem" }}>
                  <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                    {subItem.title}
                  </p>
                  <ul style={{ paddingLeft: "4rem" }}>
                    {subItem.description.map((desc, descIndex) => (
                      <li
                        key={descIndex}
                        style={{ color: "#8d9099", marginBottom: "1rem" }}
                      >
                        <Typography variant="body2">{desc}</Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
          <Divider sx={{ margin: 0, color: "#e9ebef" }} />
        </>
      ))}
      <Cancelation>
        <Heading>Cancellation Policy</Heading>
        <Heading style={{ paddingTop: "12px" }}>Very Flexible</Heading>
        <Paragraph>
          Guests may cancel their Booking until 24 hours before the event start
          time and will receive a full refund (including all Fees) of their
          Booking Price. Bookings cancellations submitted less than 24 hours
          before the Event start time are not refundable. Learn more
        </Paragraph>
      </Cancelation>
    </div>
  );
};

export default LaHealth;
