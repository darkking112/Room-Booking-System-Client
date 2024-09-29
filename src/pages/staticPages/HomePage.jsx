import React from "react";

import Header from "../../components/Header";
import "./homePage.css";
import hero from "./assets/hero-image.jpg";
import bookingIcon from "./assets/booking.png";
import wifiIcon from "./assets/wifi.png";
import communityIcon from "./assets/communities.png";
import alassafImage from "./assets/alssaf-image.jpg";
import mamoonImage from "./assets/mamoon-iamge.jpg";
import abdalrahman from "./assets/abdalrahman-image.jpg";

function HomePage() {
  return (
    <div className="home-page">
      <Header buuttnText={"Login"} />

      <div className="home-page-body">
        <div className="hero-overlay">
          <div className="hero">
            <div className="image">
              <img src={hero} alt="" />
            </div>
            <div className="slogan">
              <h1>CODE HOUSE</h1>

              <h3>Your Coding Home</h3>
            </div>
          </div>
        </div>

        <div className="our-services">
          <h2>Why CODE HOUSE</h2>
          <div className="service-boxes">
            <div className="service-box">
              <div className="box-header">
                <h3>Full Online Booking</h3>
                <img src={bookingIcon} alt="" />
              </div>
              <hr />
              At CODEHOUSE, you can easily book your stay and workspace online.
              Whether you're here for a coding sprint or a long-term project,
              our streamlined booking system ensures a hassle-free experience
              from anywhere in the world.
            </div>
            <div className="service-box">
              <div className="box-header">
                <h3>Speed & Free Wifi</h3>
                <img src={wifiIcon} alt="" />
              </div>
              <hr />
              Experience lightning-fast internet throughout CODEHOUSE, designed
              to keep you productive and connected. Whether you’re pushing code,
              attending virtual meetings, or collaborating on projects, our
              free, high-speed Wi-Fi won't let you down.
            </div>
            <div className="service-box">
              <div className="box-header">
                <h3>Community Of Programers & Coders</h3>
                <img src={communityIcon} alt="" />
              </div>
              <hr />
              More than just a hotel, CODEHOUSE is a hub for coders. Join a
              vibrant community of developers, designers, and tech enthusiasts.
              Collaborate, network, and code alongside like-minded individuals
              in a space designed for innovation and creativity.
            </div>
          </div>
        </div>

        <div className="developed-by">
          <h2>Developed By</h2>
          <div className="developed-by-cards">
            <div className="develped-by-card">
              <img src={alassafImage} alt="" />
              <h3>Alassaf, Abd Alrahman</h3>
            </div>
            <div className="develped-by-card">
              <img src={mamoonImage} alt="" />
              <h3>Mamoon T. M. Almazloom</h3>
            </div>
            <div className="develped-by-card">
              <img src={abdalrahman} alt="" />
              <h3>Abdelrahman Mohamed Hassan Mohamed</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <h3>Copyright &#169; 2024</h3>
      </div>
    </div>
  );
}

export default HomePage;
