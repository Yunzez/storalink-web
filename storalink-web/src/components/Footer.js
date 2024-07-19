import React from "react";
import "../App.css";
import logo from "../images/logo.svg";

const Footer = () => {
 return (
   <div className="footerContainer">
        <div>
            <div className="logoGroup footerLogo">
                <img width="20px" height="20px" src={logo} alt="logo"></img>
                Storalink
            </div>
            <div className="socialMediaIcons">
                <a href="https://www.linkedin.com/company/storalink" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="767676" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
                </a>
                <a href="mailto:storalink@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 36 36"><path fill={767676} d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39Z" className="clr-i-solid clr-i-solid-path-1"></path><path fill={767676} d="m33.81 7.39l-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-.12-.61M5.3 28H3.91v-1.43l7.27-7.21l1.41 1.41Zm26.61 0h-1.4l-7.29-7.23l1.41-1.41l7.27 7.21Z" className="clr-i-solid clr-i-solid-path-2"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                </a>
            </div>
        </div>
        <hr/>
        <div>
            <p className="copyright">© 2024 Storalink. All rights reserved.</p>
            <div className="legalSection">
                <a href="./PrivacyPolicyForApp.html" target="_blank" className="footerLink"><p>Privacy</p></a>
                <p className="dot">·</p>
                <a href="/TermsAndConditionsForApp.html" target="_blank" className="footerLink"><p>Terms</p></a>
            </div>
        </div>
   </div>
 );
};

export default Footer;