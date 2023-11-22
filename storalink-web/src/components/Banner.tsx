import theme from "@/app/theme";
import React from "react";
import styled from "styled-components";
import { ReserveButton } from "./Navbar";
import Storalink_name from "../../public/Demo_large.png";
import Image from "next/image";
const DemoButton = styled.div`
  background-color: ${theme.themeWhite};
  border-radius: ${theme.mediumRadius};
  height: 2.5rem;
  width: 5.5rem;
  border: 2px solid ${theme.themeDarkGrey};
  color: ${theme.themeDarkGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: ${theme.themeDarkGrey}; // Change background color on hover
    color: ${theme.themeWhite}; // Change text color on hover
    transform: scale(1.05); // Slightly enlarge the button on hover
  }
`;

function Banner() {
  return (
    <div className="py-5">
      <p className="font-bold text-4xl px-5 md:px-40 my-5 text-center">
        Store, sort, and share an assortment of links in a smart way!
      </p>
      <p className="text-sm py-5 px-2 md:px-20 text-center" style={{ color: theme.themeGrey }}>
        Storalink facilitates a more connected society by allowing
        internet-savvy people to share linked resources. We can’t wait to see
        what your contributions would be to the internet!
      </p>

      <div className="flex justify-center">
        <DemoButton className="me-5">Demo</DemoButton>
        <ReserveButton>Reserve a spot</ReserveButton>
      </div>
      <div
        className="flex justify-center overflow-hidden relative"
        style={{ height: "500px" }}
      >
        <Image
          src={Storalink_name}
          alt="Storalink_name"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
    </div>
  );
}

export default Banner;
