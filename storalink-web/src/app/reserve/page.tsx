"use client";
import React from "react";
import theme from "../theme";
import { styled } from "styled-components";
import Image from "next/image";
import reserve_1 from "../../../public/reserve_1.png";
import reserve_2 from "../../../public/reserve_2.png";
const UserInputBox = styled.input`
  border: 2px solid ${theme.themeDarkGrey};
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  border-radius: ${theme.mediumRadius};
  width: 100%;
`;

const UserInputArea = styled.textarea`
  border: 2px solid ${theme.themeDarkGrey};
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  border-radius: ${theme.mediumRadius};
  width: 100%;
`;
function About() {
  return (
    <div className="flex justify-between">
      <div className="md:w-2/5 min-h-screen">
        <div className="text-sm">BE A BETA TESTER</div>
        <div
          className="text-4xl font-bold mt-5 mb-10"
          style={{ color: theme.themeYellow }}
        >
          Reserve a Spot
        </div>
        <div className="mb-5 text-sm">
          Do you want to be an early supporter and get access to the testing
          version of Storalink? Well, you’ve come to the right place!
        </div>
        <div className="mb-5 text-sm">
          Leave your information below and you will be added to a list. Once the
          beta version of the mobile app is ready, you will receive an email
          with more information!
        </div>
        <div>
          <div className="text-sm">Name*</div>
          <UserInputBox type="text" className="mb-4" />
          <div className="text-sm">Email*</div>
          <UserInputBox type="text" className="mb-4" />

          <div className="text-sm">How did you hear about us</div>
          <UserInputArea />

          <div className="flex items-center">
            <input type="checkbox" style={{border: `2px solid ${theme.themeYellow}; margin-end: 5px;`}}/>
            <p className="ms-2">I have access to Apple store </p>
          </div>

          <div>
            <button
              className="px-5 py-2 mt-5 rounded-md w-80"
              style={{ color: theme.themeWhite, backgroundColor: theme.themeYellow }}
            >
              Get on the list 
            </button>
          </div>
        </div>
      </div>

      <div className="md:w-3/5  md:absolute right-0 top-0">
        <Image
          src={reserve_1}
          width={700}
          height={300}
          alt="reserve image one, a phone view"
          fill={false}
          className="absolute right-0 top-[70px] right-[190px]"
          style={{
            objectFit: "contain",
            transform: "translateX(0%) translateY(0%)",
            zIndex: 1,
          }}
        />

        <Image
          src={reserve_2}
          width={500}
          height={150}
          alt="reserve image two"
          fill={false}
          className="absolute right-0 top-[430px]"
          style={{
            objectFit: "contain",
            transform: "translateX(0%) translateY(0%)",
          }}
        />
      </div>
    </div>
  );
}

export default About;