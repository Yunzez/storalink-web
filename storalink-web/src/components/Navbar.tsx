"use client";

import React from "react";
import styled from "styled-components";
import theme from "@/app/theme";
import { useRouter } from "next/navigation";
import Storalink_name from "../../public/Storalink_name.svg";
import Image from "next/image";

const NavbarContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 5%;
  align-items: center;
  height: 8vh;
  position: fixed;
  z-index: 100;
  top: 0;
  background-color: ${theme.themeWhite};
  opacity: 0.9;
`;

export const ReserveButton = styled.div`
  opacity: 1;
  background-color: ${theme.themeYellow};
  color: ${theme.themeWhite};
  border-radius: ${theme.mediumRadius};
  height: 2.5rem;
  width: 8.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${theme.themeYellow};
  transition: 0.3s ease-in-out;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: ${theme.themeWhite}; // Change background color on hover
    color: ${theme.themeYellow}; // Change text color on hover
    transform: scale(1.05); // Slightly enlarge the button on hover
  }
`;

const MenuOptions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${theme.themeGrey};
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuOption = styled.div`
  padding: 0.5rem 0.5rem;
  transition: 0.3s ease-in-out;
  font-size: 1.2rem;
  :hover {
    cursor: pointer;
    color: ${theme.themeYellow};
  }
`;

function Navbar() {
  const router = useRouter();

  return (
    <NavbarContainer>
      <MenuOptions>
        <Image src={Storalink_name} alt="Storalink_name" />
        <MenuOption onClick={() => router.push("/About")}>Product</MenuOption>
        <MenuOption onClick={() => router.push("/About")}>About</MenuOption>
        <MenuOption>Release</MenuOption>
        <MenuOption>Pricing</MenuOption>
      </MenuOptions>
      <ReserveButton>
        <p>reserve a spot</p>
      </ReserveButton>
    </NavbarContainer>
  );
}

export default Navbar;
