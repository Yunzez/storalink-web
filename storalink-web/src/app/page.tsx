"use client";
import Image from "next/image";
import { Test, HeaderText } from "@/utils/components";
import theme from "./theme";
import styled from "styled-components";
import Footer from "@/components/Footer";
import { GlobalContext } from "@/context/GlobalProvider";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import KeyFeatures from "@/components/KeyFeatures";
// import { MainContentWrapper } from "./layout";

export const MainContentWrapper = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 8vh;
  @media (max-width: 768px) {
    padding-left: 2%;
    padding-right: 2%;
  }
`;

export default function Home() {
  return (
    <div style={{overflowX: "hidden"}}>
      <Banner />
      <KeyFeatures />
    </div>
  );
}
