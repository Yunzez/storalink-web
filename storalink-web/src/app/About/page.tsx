"use client";
import React from "react";
import styled from "styled-components";
import theme from "../theme";

function About() {
  const Sepeatetor = styled.span`
    display: block;
    min-height: 2px;
    background-color: ${theme.themeYellow};
  `;
  return (
    <div className="flex justify-center" style={{ width: "100%" }}>
      <div className="text-center">
        <p>Mission Statement</p>
        <div className="flex justify-center">
          <Sepeatetor style={{width: "150px"}}/>
        </div>
        <div></div>
        <p className="text-5xl font-bold item-center w-100 p-20">
          Building bridges between the platforms you use
        </p>
        <div className="flex justify-center">
          <p className="md:w-10/12 lg:w-6/12 item-center">
            Storalink is more than a link storage solution; it is a commitment
            to efficiency and collaboration. Our mission is to empower users to
            organize, access, and share media links with unprecedented ease.
            Join us on the journey to redefine how digital content is managed
            and exchanged.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
