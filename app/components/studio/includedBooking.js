/* eslint-disable @next/next/no-img-element */

"use client";

import styled from "styled-components";

const Heading = styled.h1`
  font-size: 20px;
  margin-bottom: 2rem;
  text-align: center;
`;

const Container = styled.div`
  transition: max-height 0.3s ease;
  position: relative;
  background: white;
  margin-top: 4rem;

`;

const ItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0;
  list-style-type: none;
  margin: 0;
  margin-top: 1rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Item = styled.li`
  flex: 0 0 48%;
  margin-bottom: 8px;
  display: flex;
  gap: 15px;
  align-items:center;
  @media (max-width: 500px) {
    flex: 0 0 100%;
  }
`;

const ShowAllButton = styled.button`
  margin-top: 2px;
  background: transparent;
  border: none;
  color: var(--color-black);
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: #6a6e7a;
  }
`;
const IconImg = styled.img`
  height: 16px;
  align-self:center;
`;
const LaIncludedBooking = () => {
  // const [showAll, setShowAll] = useState(false);
  // const [maxHeight, setMaxHeight] = useState("0px");
  // const containerRef = useRef(null);

  const bookingDetails = {
    Amenities: [
      { icon: "/amenities/lightbulb_icon.svg", title: "Lighting Equipment" },
      { icon: "/amenities/chalkboard.svg", title: "White Backdrop" },
      { icon: "/amenities/table.svg", title: "Tables" },
      { icon: "/amenities/wardroberack.svg", title: "Wardrobe Rack" },
      { icon: "/amenities/wifi.svg", title: "WiFi" },
      { icon: "/amenities/sink.svg", title: "Sink" },
      { icon: "/amenities/blinds.svg", title: "Blackout blinds" },
      { icon: "/amenities/sandbag.svg", title: "Sandbags" },
      { icon: "/amenities/chair.svg", title: "Chairs" },
      { icon: "/amenities/video.svg", title: "Video Equipment" },
      { icon: "/amenities/steamer.svg", title: "Steamer" },
    ],
    Features: [
      { icon: "/features/skylight.svg",title:"Natural Light"},
      { icon: "/features/toilet.svg",title:"Restrooms"},
      { icon: "/features/kitchen.svg",title:"Kitchen"},
      { icon: "/features/breakout_room.svg",title:"Dressing Room"},
      { icon: "/features/street_access.svg",title:"Street level access"},
      { icon: "/features/handicap_access.svg",title:"Wheelchair Accessible"},
      { icon: "/features/soundproof.svg",title:"Soundproof"},
      { icon: "/features/skylight.svg",title:"Skylights"},
      { icon: "/features/elevator.svg",title:"Freight Elevators"},
    ],
  };

  // useEffect(() => {
  //   if (containerRef.current) {
  //     const totalHeight = containerRef.current.scrollHeight;
  //     const heightToShow = showAll ? totalHeight : totalHeight * 0.24;
  //     setMaxHeight(`${heightToShow}px`);
  //   }
  // }, [showAll]);

  // const handleToggle = () => {
  //   setShowAll(!showAll);
  // };

  return (
    <>
      <Container
        // style={{ maxHeight: maxHeight }}
        // ref={containerRef}
        // showAll={showAll}
      >
        <Heading>Included in your booking</Heading>
        {Object.entries(bookingDetails).map(([title, items]) => (
          <div style={{ marginTop: "1rem" }} key={title}>
            <h4 style={{ marginTop: "1rem" }}>{title}</h4>
            <ItemsList>
              {items.map((item, index) => (
                <Item key={index}>
                  <IconImg src={item.icon} alt={item.title} />
                  <span>{item.title}</span>
                </Item>
              ))}
            </ItemsList>
          </div>
        ))}
      </Container>
      {/* <ShowAllButton onClick={handleToggle}>
        {showAll ? "Show less" : "Show all"}
      </ShowAllButton> */}
    </>
  );
};

export default LaIncludedBooking;
