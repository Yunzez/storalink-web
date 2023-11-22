"use client";

import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import theme from "@/app/theme";
import { useRouter } from "next/navigation";
import Storalink_name from "../../public/Storalink_name.svg";
import Menu_close from "../../public/menu_close.svg";
import Menu_open from "../../public/menu_open.svg";
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

const DesktopMenu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 100;
    height: 8vh;
    width: 100vw;
    top: 0;
    background-color: ${theme.themeWhite};
    opacity: 0.9;
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
  &:hover {
    cursor: pointer;
    color: ${theme.themeYellow};
  }
`;

function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  console.log(menuOpen, "initial load ");

  const closeMenu = () => {
    setMenuOpen(false);

    console.log("set menu to close");
  };

  const openMenu = () => {
    if (!animate) {
      setAnimate(true);
    }

    setMenuOpen(true);
    console.log("set menu to open");
  };

  const SubMenuAnimationOpen = keyframes`
  1% { height: 0vh; opacity: 0; border-top: 0px solid ${theme.themeGrey}}
  80% { height: 8vh; opacity: 0.9; border-top: 1px solid ${theme.themeGrey}}
    100% { height: 8vh; opacity: 1; border-top: 2px solid ${theme.themeGrey};  border-bottom: 2px solid ${theme.themeGrey}}
    `;

  const SubMenuAnimationClose = keyframes`
    1% {height: 8vh; opacity: 0.9; border-top: 3px solid ${theme.themeGrey}}
    100% {height: 0vh; opacity: 0; border-top: 0px solid ${theme.themeGrey}}
    `;

  const MobileSubMenu = styled.div`
    display: relative;
    height: 0vh;
    opacity: 1;
    top: 8vh;
    @media (max-width: 768px) {
      width: 100vw;
      display: flex;
      justify-content: space-between;
      z-index: 100;
      position: fixed;
      background-color: ${theme.themeWhite};
      border-top: 2px solid ${theme.themeGrey};
      border-bottom: 2px solid ${theme.themeGrey};
      animation-name: ${animate ? SubMenuAnimationClose : ""};
      animation-duration: 0.5s;
      opacity: 0;
    }

    &.subMenu-open {
      position: fixed;
      animation-name: ${SubMenuAnimationOpen};
      background-color: ${theme.themeWhite};
      animation-duration: 0.5s;
      opacity: 1;
      z-index: 100;
      height: 8vh;
      align-items: center;
    }
  `;

  return (
    <>
      <DesktopMenu>
        <NavbarContainer>
          <MenuOptions>
            <Image src={Storalink_name} width={120} alt="Storalink_name" />
            <MenuOption onClick={() => router.push("/")}>Product</MenuOption>
            <MenuOption onClick={() => router.push("/About")}>About</MenuOption>
            <MenuOption>Release</MenuOption>
            <MenuOption>Pricing</MenuOption>
          </MenuOptions>
          <ReserveButton>
            <p>reserve a spot</p>
          </ReserveButton>
        </NavbarContainer>
      </DesktopMenu>
      <MobileMenu>
        <Image
          className="ms-5"
          src={Storalink_name}
          width={150}
          alt="Storalink_name"
        />
        <div
          className="me-5"
          style={{ position: "relative", width: "25px", height: "25px" }}
        >
          {menuOpen ? (
            <div
              style={{ opacity: 1, transition: "opacity 0.3s ease-out" }}
              onClick={closeMenu}
            >
              <Image src={Menu_close} alt="Close menu" width={25} height={25} />
            </div>
          ) : (
            <div
              style={{ opacity: 1, transition: "opacity 0.3s ease-out" }}
              onClick={openMenu}
            >
              <Image src={Menu_open} alt="Open menu" width={25} height={25} />
            </div>
          )}
        </div>

        <div style={{ position: "absolute", zIndex: 100 }}>
          <MobileSubMenu className={`${menuOpen ? "subMenu-open" : ""}`}>
            <MenuOption>Product</MenuOption>
            <MenuOption>About</MenuOption>
            <MenuOption>Releases</MenuOption>
            <MenuOption>Pricing</MenuOption>
          </MobileSubMenu>
        </div>
      </MobileMenu>
    </>
  );
}

export default Navbar;
