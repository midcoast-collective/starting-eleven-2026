"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";

const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

export const ScrollSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
  >
    <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
  </svg>
);

export const Scroll = styled.div`
  position: fixed;

  left: 50%;
  right: auto;
  bottom: 3rem;
  transform: translateX(-50%);
  transition: opacity 1000ms;
  z-index: 1;
  opacity: 0;

  &.visible {
    opacity: 0.8;
  }

  svg {
    fill: var(--color-white);
    width: 4rem;
    height: 4rem;
  }

  @media (max-width: 800px) {
    bottom: 1.5rem;
  }
`;

// Player ratio: 100 / (1280 / 720)
const PlayerWrapper = styled.div`
  background-color: black;
  height: 0;
  opacity: ${({ $ready }) => ($ready ? 1 : 0)};
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  transition: opacity 1000ms linear;
  z-index: 0;

  @media (max-width: 800px) {
    padding-top: 177.75%;
  }
`;

const ResponsivePlayer = ({
  desktop,
  mobile,
  controls = false,
  style = {},
}) => {
  const [source, setSource] = useState();
  const [ready, setReady] = useState(false);

  const scrollRef = useRef();
  const wrapperRef = useRef();

  useEffect(() => {
    const wrapperRect = wrapperRef.current.getBoundingClientRect();

    function addScrollIcon() {
      if (
        !scrollRef.current.classList.contains("visible") &&
        wrapperRect.bottom > window.innerHeight // Height at which arrow is needed
      ) {
        scrollRef.current.classList.add("visible");
      }
    }

    function removeScrollIcon() {
      if (scrollRef.current.classList.contains("visible")) {
        scrollRef.current.classList.remove("visible");
      }
    }

    function listenToScroll() {
      if (window.scrollY > 80) {
        removeScrollIcon();
      } else {
        addScrollIcon();
      }
    }

    if (ready) {
      addScrollIcon();
      window.addEventListener("scroll", listenToScroll);
    }

    return () => window.removeEventListener("scroll", listenToScroll);
  }, [scrollRef, ready, wrapperRef]);

  useEffect(() => {
    function setVideoSource() {
      if (window.innerWidth < 800) {
        setSource(mobile);
      } else {
        setSource(desktop);
      }
    }

    window.addEventListener("resize", setVideoSource);

    setVideoSource();

    return () => window.removeEventListener("resize", setVideoSource);
  }, [desktop, mobile]);

  return (
    <PlayerWrapper $ready={ready} style={style} ref={wrapperRef}>
      <ReactPlayer
        controls={controls}
        height="100%"
        loop
        muted
        onReady={() => setReady(true)}
        playing={true}
        playsinline
        url={source}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        width="100%"
      />

      <Scroll ref={scrollRef}>
        <ScrollSVG />
      </Scroll>
    </PlayerWrapper>
  );
};

export default ResponsivePlayer;
