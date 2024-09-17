import React from "react";
import icon1 from "../../assets/images/icon/logowhite.png";
import facebook from "../../assets/images/icon/facebook.png";
import instagram from "../../assets/images/icon/insta.png";
import linkedin from "../../assets/images/icon/linkedin.png";
import youtube from "../../assets/images/icon/ytube.png";
import twitter from "../../assets/images/icon/tt.png";
import mail from "../../assets/images/icon/mail.png";
import location from "../../assets/images/icon/location.png";
import phone from "../../assets/images/icon/phone.png";
import "../../style/style.css";
const MainFooter = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="left-col">
          <img src={icon1} alt="Logo" style={{ width: "200px" }} />
          <div className="logo"></div>
          <div className="social-media">
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#">
              <img src={youtube} alt="YouTube" />
            </a>
            <a href="#">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
          <br />
          <br />
          <p className="rights-text">
            Copyright © 2023 Created By Team CodeArena
          </p>
          <br />
          <p>
            <img src={location} alt="Location" /> United International
            University
            <br />
            Dhaka, Bangladesh
          </p>
          <br />
          <p>
            <img src={phone} alt="Phone" /> +88012345667
            <br />
            <img src={mail} alt="Email" /> CodeArena@gmail.com
          </p>
        </div>
        <div className="right-col">
          <h1 style={{ color: "#fff" }}>Our Newsletter</h1>
          <div className="border"></div>
          <br />
          <p>Enter Your Email to get our News and updates.</p>
          <form className="newsletter-form">
            <input
              className="txtb"
              type="email"
              placeholder="Enter Your Email"
            />
            <input className="btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
