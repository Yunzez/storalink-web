"use client";
import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

import theme from "../theme";
import Image from "next/image";
import add from "../../../public/add.svg";
import minus from "../../../public/minus.svg";
import blockchain from "../../../public/blockchain.png";
import team from "../../../public/team.png";
const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOutUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

function About() {
  const [showDropDown, setShowDropDown] = useState(0);

  const Sepeatetor = styled.span`
    display: block;
    min-height: 2px;
    background-color: ${theme.themeYellow};
  `;

  const FAQDropdown = styled.div`
    width: 100%;
    min-width: 160px;
    color: ${theme.themeDarkGrey};
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    padding: 1rem;
    p {
      font-size: 1rem;
      font-weight: semi-bold;
    }
  `;

  const FAQSection = styled.div`
    width: 80%;
    border-radius: ${theme.mediumRadius};
    background-color: ${theme.themeLightGrey};
    margin-bottom: 1rem;
    text-align: start;
  `;

  const FAQDropdownContent = styled.div<{ isVisible: boolean }>`
    margin-top: ${({ isVisible }) => (isVisible ? "1rem" : 0)};
    z-index: 1;
    padding: ${({ isVisible }) => (isVisible ? "1rem" : 0)};
    transform: ${({ isVisible }) =>
      isVisible ? "translateY(0)" : "translateY(-20px)"};
    transition: all 0.3s ease, height 0.3s ease;
    height: ${({ isVisible }) => (isVisible ? "auto" : 0)};
    overflow: hidden;
    text-align: start;
    animation: ${({ isVisible }) =>
      isVisible
        ? css`
            ${fadeInDown} 0.5s ease
          `
        : css`
            ${fadeOutUp} 0.5s ease
          `};
  `;

  return (
    <div className="flex justify-center" style={{ width: "100%" }}>
      <div className="text-center">
        <div className="flex justify-center">
          <Image
            src={blockchain}
            alt="blockchain"
            height={500}
            objectFit="cover"
            objectPosition="top"
            className="p-3"
          />
        </div>

        <p className="md: pt-10">Mission Statement</p>
        <div className="flex justify-center">
          <Sepeatetor style={{ width: "150px" }} />
        </div>
        <div></div>
        <p className="text-5xl font-bold item-center w-100 p-20">
          Building bridges between the platforms you use
        </p>
        <div className="flex justify-center">
          <p className="md:w-10/12 p-3 lg:w-6/12 item-center">
            Storalink is more than a link storage solution; it is a commitment
            to efficiency and collaboration. Our mission is to empower users to
            organize, access, and share media links with unprecedented ease.
            Join us on the journey to redefine how digital content is managed
            and exchanged.
          </p>
        </div>
        <div className="pt-10 pb-10" style={{ width: "100vw" }}>
          <div className="flex justify-center">FAQ</div>
          <div className="flex justify-center">
            <Sepeatetor style={{ width: "100px" }} />
          </div>

          <div className="flex justify-center">
            <FAQSection style={{ width: "80%" }}>
              <FAQDropdown>
                <p>Is Storalink free to use</p>

                <Image
                  src={showDropDown === 1 ? minus : add}
                  alt={showDropDown === 1 ? "minus" : "add"}
                  onClick={() => setShowDropDown(showDropDown === 1 ? 0 : 1)}
                  style={{
                    cursor: "pointer",
                    animation: "spin 1s linear",
                    transition: "all 0.3s ease",
                  }}
                />
              </FAQDropdown>

              <div>
                <FAQDropdownContent isVisible={showDropDown == 1}>
                  <p>Yes! Storalink is perfectly usable without purchases.</p>
                </FAQDropdownContent>
              </div>
            </FAQSection>
          </div>

          <div className="flex justify-center">
            <FAQSection style={{ width: "80%" }}>
              <FAQDropdown>
                <p>When will Storalink be fully launched?</p>

                <Image
                  src={showDropDown === 2 ? minus : add}
                  alt={showDropDown === 2 ? "minus" : "add"}
                  onClick={() => setShowDropDown(showDropDown === 2 ? 0 : 2)}
                  style={{
                    cursor: "pointer",
                    animation: "spin 1s linear",
                    transition: "all 0.3s ease",
                  }}
                />
              </FAQDropdown>

              <div>
                <FAQDropdownContent isVisible={showDropDown == 2}>
                  <p>Storalink will be fully launched in May of 2024.</p>
                </FAQDropdownContent>
              </div>
            </FAQSection>
          </div>

          <div className="flex justify-center">
            <FAQSection style={{ width: "80%" }}>
              <FAQDropdown>
                <p>Is Storalink secure for sensitive information?</p>

                <Image
                  src={showDropDown === 3 ? minus : add}
                  alt={showDropDown === 3 ? "minus" : "add"}
                  onClick={() => setShowDropDown(showDropDown === 3 ? 0 : 3)}
                  style={{
                    cursor: "pointer",
                    animation: "spin 1s linear",
                    transition: "all 0.3s ease",
                  }}
                />
              </FAQDropdown>

              <div>
                <FAQDropdownContent isVisible={showDropDown == 3}>
                  <p>
                    The application is secure due to how it was developed.
                    However, we don’t recommend you store anything that has the
                    potential to do harm if leaked in the worst case scenario.
                  </p>
                </FAQDropdownContent>
              </div>
            </FAQSection>
          </div>

          <div className="flex justify-center">
            <FAQSection style={{ width: "80%" }}>
              <FAQDropdown>
                <p>Who do I contact if I have questions or suggestions?</p>

                <Image
                  src={showDropDown === 4 ? minus : add}
                  alt={showDropDown === 4 ? "minus" : "add"}
                  onClick={() => setShowDropDown(showDropDown === 4 ? 0 : 4)}
                  style={{
                    cursor: "pointer",
                    animation: "spin 1s linear",
                    transition: "all 0.3s ease",
                  }}
                />
              </FAQDropdown>

              <div>
                <FAQDropdownContent isVisible={showDropDown == 4}>
                  <p>
                    We are always open to a new idea or suggestion and we are
                    eager to answer any questions you may have! You can either
                    use the contact page on the website, or email us at
                    storalink@gmail.com.
                  </p>
                </FAQDropdownContent>
              </div>
            </FAQSection>
          </div>

          <div className="flex justify-center">
            <FAQSection style={{ width: "80%" }}>
              <FAQDropdown>
                <p>Why is Storalink a mobile application?</p>

                <Image
                  src={showDropDown === 5 ? minus : add}
                  alt={showDropDown === 5 ? "minus" : "add"}
                  onClick={() => setShowDropDown(showDropDown === 5 ? 0 : 5)}
                  style={{
                    cursor: "pointer",
                    animation: "spin 1s linear",
                    transition: "all 0.3s ease",
                  }}
                />
              </FAQDropdown>

              <div>
                <FAQDropdownContent isVisible={showDropDown == 5}>
                  <p>
                    While there are many who use social media on desktop, our
                    research suggests that the vast majority use platforms on
                    their mobile devices. Thus, we prioritized development of
                    the mobile platform before developing the desktop
                    application.
                  </p>
                </FAQDropdownContent>
              </div>
            </FAQSection>
          </div>
        </div>

        <div className="pt-10 pb-10" style={{ width: "100vw" }}>
          <div className="flex justify-center">The Team</div>
          <div className="flex justify-center">
            <Sepeatetor style={{ width: "100px" }} />
          </div>
          <div className="flex justify-center m-5">
            <p className="md:w-10/12 lg:w-6/12 item-center">
              We are a dynamic team of visionary developers, creative designers,
              and bold entrepreneurs, all united by a shared passion for
              revolutionizing information sharing. Exciting opportunities
              await—you could be the next key player in our groundbreaking
              journey!
            </p>
          </div>
          <div className="flex justify-center mb-5">
            <Image
              src={team}
              alt="team"
              height={300}
              objectFit="cover"
              objectPosition="top"
              className="p-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
