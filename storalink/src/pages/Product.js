import React from "react";
import "../App.css";
import { AppStoreButton } from "react-mobile-app-button";
import CoverImage from "../images/coverImage.png";

const Product = () => {

 const APKUrl = "https://apps.apple.com/us/app/storalink/id6476246923";

 const openWebsite = () => {
  window.open('https://apps.apple.com/us/app/storalink/id6476246923', '_blank');
 };

 return (
   <div>
      <div className="homeCell introduction">
        <div className="titleContainer">
          <h1>Take your <mark>hyperlink-storing</mark> game to the next level with Storalink.</h1>
        </div>
        <div className="coverButtonContainer">
          <AppStoreButton url={APKUrl} theme={"dark"} className={"custom-style"} />
          <button onClick={openWebsite}>Learn More</button>
        </div>
        <img width="80%" src={CoverImage} alt="Cover Image"></img>
      </div>
      {/* <div className="homeCell useCase">
        <h1><mark>Why Use Storalink?</mark></h1>
      </div>
      <div className="homeCell previews">
        <h1><mark>Feature Previews</mark></h1>
      </div>
      <div className="homeCell faqs">
        <h1><mark>FAQs</mark></h1>
      </div>
      <div className="homeCell finalCTA">
        <h1><mark>Download</mark> Storalink Today!</h1>
      </div> */}
   </div>
 );
};

export default Product;