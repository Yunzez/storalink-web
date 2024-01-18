"Use Client";

import { Sepeatetor } from "@/app/page";
import theme from "@/app/theme";
import React from "react";
import Image from "next/image";
import roadmap from "../../public/roadmap.png";
const Release = () => {
  return (
    <div className="w-full p-2">
      <div className="flex justify-center">
        <div className="md:w-3/5 w-screen px-5 md:px-0">
          <p className="font-semibold text-center mb-3">Release</p>
          <div className="flex justify-center mb-3">
            <Sepeatetor style={{ width: "150px" }} />
          </div>
          <p className="font-bold text-2xl text-center mb-3">
            Storalink’s next steps
          </p>

          <p className="text-sm text-center" style={{ color: theme.themeGrey }}>
            We are currently beta testing the platform and getting feedback
            before fully launching on the Appstore. Stay tuned!
          </p>
        </div>
        
      </div>
      <div className="flex justify-center p-4">
      <Image
          src={roadmap}
          alt="road map"
          style={{
            objectFit: "scale-down",
            position: "relative",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
};

export default Release;
