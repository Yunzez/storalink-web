"use client";

import React from "react";
import styled from "styled-components";
import theme from "@/app/theme";
import Storalink_name from "../../public/Storalink_name.svg";
import Image from "next/image";
import linkedin from "../../public/linkedin.svg";
import { useRouter } from "next/navigation";
const FooterContainer = styled.div`
  width: 100%;
  height: 25vh;
  bottom: 0;
`;

const TopSection = styled.div`
  width: 100%;
`;

const BottomSection = styled.div`
  color: ${theme.themeBlack};
  display: flex;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  width: 100%;
`;

const BottomHeader = styled.p`
  color: ${theme.themeGrey};
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const BottomLink = styled.p`
  color: ${theme.themeDarkGrey};
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  cursor: pointer;
  :hover {
    cursor: pointer !important;
    color: ${theme.themeYellow};
  }
`;
function Footer() {
  const router = useRouter();
  return (
    <FooterContainer>
      {/* // ! Desktop version */}
      <TopSection className="md:block hidden">
        <div className="grid grid-cols-6 gap-4 px-10">
          <div className="col-span-2 place-content-center px-5">
            <Image src={Storalink_name} alt="Storalink_name" />
            <small style={{ color: theme.themeGrey }}>
              Store, sort, and share an assortment of links in a smart way!
            </small>
          </div>
          <div>
            <BottomHeader>Product</BottomHeader>
            <BottomLink>Key Features</BottomLink>
            <BottomLink>Pricing</BottomLink>
            <BottomLink>Release</BottomLink>
          </div>
          <div>
            <BottomHeader>Company</BottomHeader>
            <BottomLink>About</BottomLink>
            <BottomLink>Job</BottomLink>
            <BottomLink>Contact</BottomLink>
          </div>
          <div>
            <BottomHeader>Resources</BottomHeader>
            <BottomLink>FAQ</BottomLink>
            <BottomLink>Tutorials</BottomLink>
            <BottomLink>Feedback</BottomLink>
          </div>
          <div>
            <BottomHeader>Legal</BottomHeader>
            <BottomLink>Terms</BottomLink>
            <BottomLink onClick={() => {
                router.push("/Privacy");
              }}>Privacy</BottomLink>
            <BottomLink>Cookies</BottomLink>
          </div>
        </div>
      </TopSection>


      {/* // ! Mobile version */}
      <TopSection className="md:hidden p-5">
        <div className="flex justify-start">
          <Image src={Storalink_name} alt="Storalink_name" />
        </div>
        <small style={{ color: theme.themeGrey}}>
        Taking your hyperlink-sharing game to the next level.
        </small>

        <div className="grid grid-rows-2 grid-flow-col gap-4 mt-5">
          <div>
          <BottomHeader>Product</BottomHeader>
        <BottomLink>Key Features</BottomLink>
            <BottomLink>Pricing</BottomLink>
            <BottomLink>Release</BottomLink>
          </div>
       
          <div>
            <BottomHeader>Company</BottomHeader>
            <BottomLink>About</BottomLink>
            <BottomLink>Job</BottomLink>
            <BottomLink>Contact</BottomLink>
          </div>

          <div>
            <BottomHeader>Legal</BottomHeader>
            <BottomLink>Terms</BottomLink>
            <BottomLink onClick={() => {
                router.push("/Privacy");
              }}>Privacy</BottomLink>
            <BottomLink>Cookies</BottomLink>
          </div>
        </div>
      </TopSection>


      <BottomSection>
        <small>© 2023 Storalink. All rights reserved.</small>
        <Image
          src={linkedin}
          alt="linkedin"
          width={25}
          height={25}
          onClick={() =>
            window.open("https://www.linkedin.com/company/storalink/", "_blank")
          }
          className="cursor-pointer mb-3"
        />
      </BottomSection>
    </FooterContainer>
  );
}

export default Footer;
