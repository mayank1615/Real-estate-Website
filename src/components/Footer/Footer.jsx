import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings flexCenter f-container">
        {/*Left side*/}
        <div className="flexColStart f-left">
          <img src="./logo211.png" alt="logo" width={120} />
          <span className="secondaryText" >
            Our vision is to make all People <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">242 New-Delhi, India</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
