import theme from "@/app/theme";
import React from "react";
import styled, { keyframes } from "styled-components";
import link_internal from "../../public/link_internal.png";
import link_internal_header from "../../public/internal_header_icon.svg";
import link_external from "../../public/link_external.png";
import link_external_header from "../../public/external_header_icon.svg";
import link_organize from "../../public/link_organize.png";
import link_organize_header from "../../public/organize_header_icon.svg";
import link_share from "../../public/link_share.png";
import link_share_header from "../../public/share_header_icon.svg";
import Image from "next/image";
import { Sepeatetor } from "@/app/page";

const FeatureDivHeight = 600;
const FeatureSection = styled.div`
  flex-direction: row;
  margin-top: 5vh;
  min-height: 65vh;
  width: 100%;
  position: relative;
  background-color: ${theme.themeWhite};
  @media (max-width: 768px) {
    min-height: 90vh;
  }
`;

const bubble1Animation = keyframes`
  0% { transform: translate(0, 0) scale(1); opacity: 0.7; }
  25% { transform: translate(15px, -15px) scale(1.1); opacity: 0.8; }
  50% { transform: translate(20px, 20px) scale(1.4); opacity: 0.9; }
  75% { transform: translate(-10px, 10px) scale(1.3); opacity: 0.8; }
  100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
`;

const bubble2Animation = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(-20px, 5px) scale(1.3); }
  50% { transform: translate(-20px, -10px) scale(1.4); }
  75% { transform: translate(15px, -15px) scale(1.3); }
  100% { transform: translate(0, 0) scale(1); }
`;

interface BubbleProps {
  top: string;
  left: string;
}

// Adjusted Styled Components
const Bubble1 = styled.div<BubbleProps>`
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: ${theme.themeYellow};
  border-radius: 50%;
  opacity: 0.7;
  animation: ${bubble1Animation} 15s linear infinite;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: 1;
  overflow: hidden;
`;

const Bubble2 = styled.div<BubbleProps>`
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: ${theme.themeYellow};
  border-radius: 50%;
  opacity: 0.7;
  animation: ${bubble2Animation} 15s linear infinite;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: 1;
  overflow: hidden;
`;

function KeyFeatures() {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="md:w-3/5 w-screen px-5 md:px-0">
          <p className="font-semibold text-center mb-3">Key Features</p>
          <div className="flex justify-center mb-3">
            <Sepeatetor style={{width: "150px"}}/>
            </div>
          <p className="font-bold text-2xl text-center mb-3">
            Here is what you can do with your links!
          </p>

          <p className="text-sm text-center" style={{ color: theme.themeGrey }}>
            There are many links on the internet and that causes chaos when you
            want to locate specific items. Don’t let the chaos control you!
            Control the chaos!
          </p>
        </div>
      </div>

      <FeatureSection >
        <div className="md:grid md:grid-cols-2 md:gap-4 md:flex-row  flex flex-col-reverse">
          <div className="col-span-1 flex justify-center place-items-center items-center">
            <div style={{ width: "80%" }}>
              <Image
                src={link_external_header}
                alt="Add Links Externally"
                width={100}
                height={100}
                style={{
                  objectFit: "scale-down",
                  position: "relative",
                  zIndex: 1,
                }}
              />
              <p className="text-xl font-bold">Add Links Externally</p>
              <p className="text-sm" style={{ color: theme.themeGrey }}>
                Storalink provides a quick way for you to upload links to the
                app! When you are on any social media, you can use the
                platform’s share functionality to add the link to Storalink.
              </p>
            </div>
          </div>
          <div className="col-span-1 relative flex justify-center">
            <Bubble1 top="2%" left="5%" />
            <Bubble2 top="60%" left="75%" />
            <Image
              src={link_external}
              width={330}
              height={100}
              alt="Add Links Externally"
              fill={false}
              style={{ objectFit: "contain", position: "relative", zIndex: 1 }}
            />
          </div>
        </div>
      </FeatureSection>

      <FeatureSection >
        <div className="md:grid md:grid-cols-2 md:gap-4 md:flex-row flex flex-col">
          <div className="col-span-1 relative flex justify-center">
            <Bubble2 top="20%" left="75%" />
            <Bubble1 top="60%" left="5%" />

            <Image
              src={link_internal}
              width={330} // Example width
              height={100} // Example height, adjust for your desired aspect ratio
              alt="Add Links Externally"
              fill={false}
              style={{ objectFit: "contain", position: "relative", zIndex: 1 }}
            />
          </div>
          <div className="col-span-1 flex justify-center place-items-center">
            <div className="w-4/5">
              <Image
                src={link_internal_header}
                alt="Add Links Externally"
                width={100}
                fill={false}
                style={{
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 1,
                }}
              />
              <p className="text-xl font-bold">Add Links Internally</p>
              <p className="text-sm" style={{ color: theme.themeGrey }}>
                Storalink provides an internal method of adding a link in case
                the platform you are on has no share functionality or you are
                attempting to save a link to a website.
              </p>
            </div>
          </div>
        </div>
      </FeatureSection>

      <FeatureSection>
        <div className="md:grid md:grid-cols-2 md:gap-4 md:flex-row flex flex-col-reverse">
          <div className="col-span-1 flex justify-center place-items-center">
            <div  className="w-4/5 z-10">
              <Image
                src={link_organize_header}
                alt="Add Links Externally"
                width={100}
                fill={false}
                style={{
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 1,
                }}
              />
              <p className="text-xl font-bold">Organize Links</p>
              <p className="text-sm" style={{ color: theme.themeGrey }}>
                Storalink gives unlimited control when it comes to sorting your
                links. When you have your links, you can put change how they
                appear within the app as well as put them in folders.
              </p>
            </div>
          </div>
          <div className="col-span-1 relative flex justify-center">
            <Bubble1 top="25%" left="3%" />
            <Bubble2 top="65%" left="65%" />
            <Image
              src={link_organize}
              width={330}
              height={100}
              alt="Add Links Externally"
              fill={false}
              style={{ objectFit: "contain", position: "relative", zIndex: 1 }}
            />
          </div>
        </div>
      </FeatureSection>

      <FeatureSection className="pb-11">
        <div className="md:grid md:grid-cols-2 md:gap-4 md:flex-row flex flex-col">
          <div className="col-span-1 relative flex justify-center">
            <Bubble1 top="-10%" left="40%" />
            <Bubble2 top="70%" left="5%" />
            <Image
              src={link_share}
              width={330}
              height={100}
              alt="Add Links Externally"
              fill={false}
              style={{ objectFit: "contain", position: "relative", zIndex: 1 }}
            />
          </div>
          <div className="col-span-1 flex justify-center place-items-center">
            <div style={{ width: "80%" }}>
            <Image
                src={link_share_header}
                alt="Add Links Externally"
                width={100}
                style={{
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 1,
                  imageRendering: "pixelated"
                }}
              />
              <p className="text-xl font-bold">Share Folders</p>
              <p className="text-sm" style={{ color: theme.themeGrey }}>
                Storalink facilitates a more connected and collaborative
                community by allowing you to share your folders with other
                Storalink users. Together, great things will happen!
              </p>
            </div>
          </div>
        </div>
      </FeatureSection>
    </div>
  );
}

export default KeyFeatures;
