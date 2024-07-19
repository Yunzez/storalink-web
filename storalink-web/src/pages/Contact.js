import React from "react";
import "../App.css";

const Contact = () => {
 return (
   <div className="contactContainer">
      <h1><mark>Contact</mark></h1>
      <div className="contactCardContainer">

        <a href="https://www.linkedin.com/company/storalink" target="_blank" rel="noreferrer">
          <div className="contactCard">
            <div className="cardContent">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"/><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/></svg>
              <h2>LinkedIn</h2>
              <h3>Follow us to stay connected and updated</h3>
            </div>
          </div>
        </a>

        <a href="mailto:storalink@gmail.com">
          <div className="contactCard">
            <div className="cardContent">
              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 36 36"><path fill="#767676" d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39Z" className="clr-i-solid clr-i-solid-path-1"></path><path fill="#767676" d="m33.81 7.39l-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-.12-.61M5.3 28H3.91v-1.43l7.27-7.21l1.41 1.41Zm26.61 0h-1.4l-7.29-7.23l1.41-1.41l7.27 7.21Z" className="clr-i-solid clr-i-solid-path-2"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
              <h2>Email</h2>
              <h3>Send us a message at storalink@gmail.com</h3>
            </div>
          </div>
        </a>
        
      </div>
   </div>
 );
};

export default Contact;