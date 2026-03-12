/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from "next/navigation";
import styled from "styled-components";

import Nav from "@/app/components/nav";
import StandardBanner from "@/app/components/standardBanner";

const Header = styled.header`
  border-bottom: 1px solid var(--color-black);
`;

const HeaderWrap = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 1.5rem auto;
  max-width: var(--max-width);
  padding: 0 1.5rem;
  width: 100%;

  @media (max-width: 943px) {
    flex-direction: column;
  }
`;

const LogoWrap = styled.a`
  display: flex;
  height: 46px;
  position: relative;
  width: 100%;
  max-width: 400px;

  img {
    width: 100%;
    height: auto;
  }
`;

export default function HeaderComponent() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <Header>
      <HeaderWrap>
        {isHomePage ? <h1 className="sr-only">Starting Eleven</h1> : null}

        <LogoWrap href="/">
          <img alt="Starting Eleven" src="/logo.png" />
        </LogoWrap>

        <Nav />
      </HeaderWrap>
    </Header>
  );
}
