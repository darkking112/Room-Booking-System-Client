import React from "react";
import Header from "../../components/Header";
import "./aboutUsPage.css";
function AboutUs() {
  return (
    <div className="about-us">
      <Header buuttnText={"Login"} />
      <div className="about-us-body">
        <h1>About CODEHOUSE</h1>
        <p className="intro">
          Welcome to CODEHOUSE, the first-ever hotel designed specifically for
          coders, developers, and tech enthusiasts. Our mission is to create a
          space where innovation and creativity thrive, providing a comfortable
          and inspiring environment for you to code, collaborate, and connect
          with fellow programmers.
        </p>
        <h2>Our Vision</h2>
        <p>
          At CODEHOUSE, we believe coding is more than just a job; it's a
          passion. That’s why we’ve built a unique experience tailored to your
          needs. Whether you're working on a solo project, attending a
          hackathon, or looking to unwind after a day of intense coding, we’ve
          got you covered.
        </p>
        <h2>What We Offer</h2>
        <ul className="offer-list">
          <li>Fully-equipped workspaces designed for coders</li>
          <li>High-speed internet throughout the hotel</li>
          <li>Private rooms and shared spaces to foster collaboration</li>
          <li>Regular events, workshops, and coding sessions</li>
          <li>A community of like-minded programmers and developers</li>
        </ul>
        <h2>Why CODEHOUSE?</h2>
        <p>
          We understand what coders need: uninterrupted time, a quiet and
          focused environment, and the right tech resources at your fingertips.
          Our hotel is designed to enhance productivity while also offering a
          space to relax and recharge.
        </p>
        <p>
          Whether you're visiting for a day or staying for a long-term project,
          CODEHOUSE is the perfect place to be. Join us and become part of a
          thriving tech community!
        </p>
      </div>
      <div className="footer">
        <h3>Copyright &#169; 2024</h3>
      </div>
    </div>
  );
}

export default AboutUs;
