"use client";

import styled from "styled-components";

import Nav from "@/app/components/nav";
import Wrap from "@/app/components/wrap";
import StandardBanner from "@/app/components/standardBanner";

const Footer = styled.div`
  background-color: white;
  display: flex;
  padding: 1.5rem 0;
  justify-content: space-between;

  @media (max-width: 943px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export default function FooterComponent() {
  const date = new Date();

  return (
    <footer>
      <StandardBanner />

      <Wrap>
        <Footer>
          <div>
            <p style={{ marginBottom: 0 }}>
              <small>
                &copy;{date.getFullYear()} Starting Eleven. All rights reserved.
              </small>
            </p>
          </div>
          <div>
            <Nav showSocials />
          </div>
        </Footer>
      </Wrap>
    </footer>
  );
}
