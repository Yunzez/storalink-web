"use client";
import React from "react";
import styled from "styled-components";
import theme from "@/app/theme";
import Image from "next/image";
import usecase_forgetting from "../../public/usecase_forgetting.png";
import usecase_losing from "../../public/usecase_losing.png";
import usecase_sharing from "../../public/usecase_sharing.png";
import { Sepeatetor } from "@/app/page";
const UseCaseSection = styled.div`
  flex-direction: row;
  margin-top: 2vh;
  width: 100%;
  position: relative;
  background-color: ${theme.themeWhite};
  @media (max-width: 768px) {
    min-height: 50vh;
  }
`;

const UseCaseDesc = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 768px) {
    min-height: 50vh;
}
`

const UseCase = () => {
  return (
    <div className="w-full mb-10">
      <div className="flex justify-center">
        <div className="md:w-3/5 w-screen px-5 md:px-0">
          <p className="font-semibold text-center">Use Case</p>

          <div className="flex justify-center mb-3">
            <Sepeatetor style={{ width: "150px" }} />
          </div>
          <p className="font-bold text-2xl text-center mb-3">
            Do you fall into the following?
          </p>

          <p className="text-sm text-center" style={{ color: theme.themeGrey }}>
            Let’s do some reflection! Think back to the times where you were
            talking with someone and you were discussing resources.
          </p>
        </div>
      </div>
      <UseCaseSection>
        <div className="md:grid md:grid-cols-2 md:gap-4 md:flex-row  flex flex-col-reverse">
          <div className="col-span-1 relative flex justify-center">
            <Image
              src={usecase_losing}
              alt="Losing link"
              fill={false}
              style={{
                objectFit: "contain",
                position: "relative",
                zIndex: 1,
                borderRadius: theme.mediumRadius,
              }}
            />
          </div>
          <UseCaseDesc>
            <p className="text-3xl place-self-center font-bold">
              Accidentally Losing Your Links?
            </p>
          </UseCaseDesc>
        </div>
      </UseCaseSection>

      <UseCaseSection>
        <div className="md:grid md:grid-cols-2 md:gap-4 md:flex-row  flex flex-col">
        <UseCaseDesc>
            <p className="text-3xl place-self-center font-bold">
              Forgetting Where You Saved Your Links?
            </p>
          </UseCaseDesc>
          <div className="col-span-1 relative flex justify-center">
            <Image
              src={usecase_forgetting}
              alt="Forgetting links"
              fill={false}
              style={{
                objectFit: "contain",
                position: "relative",
                zIndex: 1,
                borderRadius: theme.mediumRadius,
              }}
            />
          </div>
        </div>
      </UseCaseSection>

      <UseCaseSection>
        <div className="md:grid md:grid-cols-2 md:gap-4 md:flex-row  flex flex-col-reverse">
          <div className="col-span-1 relative flex justify-center">
            <Image
              src={usecase_sharing}
              alt="Forgetting links"
              fill={false}
              style={{
                objectFit: "contain",
                position: "relative",
                zIndex: 1,
                borderRadius: theme.mediumRadius,
              }}
            />
          </div>
          <UseCaseDesc>
            <p className="text-3xl place-self-center font-bold">
              Needing To Share Collections Of Links?
            </p>
          </UseCaseDesc>
        </div>
      </UseCaseSection>
    </div>
  );
};

export default UseCase;
