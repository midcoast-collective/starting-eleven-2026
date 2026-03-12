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
  Icon,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Heading = styled.h1`
  font-size: 20px;
  margin-bottom: 2rem;
  text-align:center;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  line-height:2rem;
  overflow-wrap: break-word;
  font-size: 15px;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  margin-bottom: 15px;
`;

const FeatureItem = styled.li`
  &:before {
    content: "-";
    margin-right: 8px;
  }
`;

const Read = styled.p`
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #6a6e7a;
  }
`;

const LaAboutCompany = () => {
  const [showMore, setShowMore] = useState(false);

  const description = `
    Located steps from Venice Beach, our Venice Beach - Cyc-wall, Loft w/ Skylight, Recording Booth, Green Room, and more is the ideal location for your next photoshoot, video shoot, podcast, documentary interviews, wardrobe stylings, e-commerce, fitness, modeling castings, and more.
  `;

  const studioDescription = {
    intro:
      "With designer furnishings from Linge Roset, and soft natural lighting, the studio is sure to impress any client.",
    location:
      "A 10-second walk to the Venice Beach boardwalk, this studio is perfect for anyone looking to capture Venice's iconic outdoor locations but also shoot indoors.",
    staging:
      "The space also can be used as a staging area or green room for bigger productions happening in Venice Beach. The space is perfect to host talent/clients/prop departments/ etc... in between takes.",
    eventSpace:
      "Our Venice Beach - Cyc-wall, Loft w/ Skylight, Recording Booth, Green Room, and more can also operate as an event/activation space.",
  };

  const features = [
    "Cyc-wall",
    "Large sky-light",
    "Soundproof recording booth",
    "Green room/hair & makeup station/clothing racks",
    "Bathroom with a shower",
    "Small Kitchen",
    "2 lounge areas",
    "2 gear closets with rentable production equipment",
    "Color-changing LED lights controlled via app",
  ];
  const additionalInfo = [
    {
      icon: "/parkingLa.svg",
      title: "Parking",
      content: [
        {
          title: "Parking Lot",
          description: "The studio has a parking lot near the beach.",
        },
        {
          title: "Valet",
          description: "Valet parking is available upon request.",
        },
      ],
    },
    {
      icon: "/lightingLa.svg",
      title: "Lightening",
      content: [
        {
          title: "Parking Lot",
          description: "The studio has a parking lot near the beach.",
        },
        {
          title: "Valet",
          description: "Valet parking is available upon request.",
        },
      ],
    },
    {
      icon: "/soundLa.svg",
      title: "Sound",
      content: [
        {
          title: "Parking Lot",
          description: "The studio has a parking lot near the beach.",
        },
        {
          title: "Valet",
          description: "Valet parking is available upon request.",
        },
      ],
    },
    {
      icon: "/accessLa.svg",
      title: "Space access",
      content: [
        {
          title: "Parking Lot",
          description: "The studio has a parking lot near the beach.",
        },
        {
          title: "Valet",
          description: "Valet parking is available upon request.",
        },
      ],
    },
    {
      icon: "/electricalLa.svg",
      title: "Electrical",
      content: [
        {
          title: "Parking Lot",
          description: "The studio has a parking lot near the beach.",
        },
        {
          title: "Valet",
          description: "Valet parking is available upon request.",
        },
      ],
    },
    {
      icon: "/rulesLa.svg",
      title: "Host rules",
      content: [
        {
          title: "Parking Lot",
          description: "The studio has a parking lot near the beach.",
        },
        {
          title: "Valet",
          description: "Valet parking is available upon request.",
        },
      ],
    },
  ];
  return (
    <div style={{ marginTop: "4rem" }}>
      <Heading>About the Space</Heading>

      <Paragraph>{description}</Paragraph>

      {showMore && (
        <>
          {Object.entries(studioDescription).map(([key, value]) => (
            <Paragraph key={key}> {value}</Paragraph>
          ))}
          <p style={{ marginBottom: "unset" }}>The studio features:</p>
          <FeatureList>
            {features.map((feature, index) => (
              <FeatureItem key={index}>{feature}</FeatureItem>
            ))}
          </FeatureList>
        </>
      )}

      <Read onClick={() => setShowMore(!showMore)}>
        {showMore ? "Hide" : "Read More"}
      </Read>
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
            <AccordionDetails>
              {item.content.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  style={{ marginBottom: "10px", paddingLeft: "20px" }}
                >
                  <Typography variant="p" sx={{ fontWeight: "bold" }}>
                    {subItem.title}
                  </Typography>
                  <Typography variant="body2">{subItem.description}</Typography>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
          <Divider sx={{ margin: 0, color: "#e9ebef" }} />
        </>
      ))}
    </div>
  );
};

export default LaAboutCompany;
