"use client";
import Image from "next/image";
import { Test, HeaderText } from "@/utils/components";
import theme from "./theme";
import styled from "styled-components";

const LandingPng = styled.img`
  width: 40vw;
  height: 40vw;
  @media (max-width: 768px) {
    width: 60vw;
    height: 60vw;
  }

  @media (max-width: 568px) {
    width: 70vw;
    height: 70vw;
  }
`;
const DivContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  @media (max-width: 568px) {
    display: flex;
  }
`;
const LandingLogo = styled.img`
  width: 100px;
  height: 100px;
  align-item: center;
  @media (max-width: 568px) {
    width: 50px;
    height: 50px;
  }
`;

const BodyText = styled.p`
color: ${theme.themeDarkGrey};
letter-spacing: 1px;
font-size: 1.5rem; 
max-width: 80%;

@media (max-width: 768px) {
  max-width: 100%; 
  font-size: 1.1rem;
}
`;
export default function Home() {
  return (
    <main className="md:flex min-h-screen md:flex-row-reverse  md:justify-around md:p-14 items-center  p-5 flex flex-col justify-center">
      <div className="flex justify-center  p-5">
        <LandingPng src="storalinkImg.svg" />
      </div>
      <div>
        <DivContainer className="flex md:block">
          <LandingLogo src="logoOrange.svg" />
          <HeaderText>Storalink</HeaderText>
        </DivContainer>

        <BodyText className="mb-10 text-center md:text-left">
          Store, sort, and share an assortment of links in a smart way!
        </BodyText>
        <BodyText
          style={{ color: theme.themeYellow }}
          className=" text-center md:text-left"
        >
          Coming Soon!
        </BodyText>
      </div>
    </main>
  );
}
