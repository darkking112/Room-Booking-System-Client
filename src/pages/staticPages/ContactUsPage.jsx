import React from "react";
import Header from "../../components/Header";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./contactUsPage.css";
function ContactUsPage() {
  return (
    <div className="contact-us-page">
      <Header buuttnText={"Login"} />
      <div className="contact-us-body">
        <h1>Get in Touch</h1>
        <p className="intro">
          We’re here to help you with any inquiries or assistance you may need.
          Reach out to us through one of the following channels:
        </p>

        <div className="contact-channels">
          <div className="channel">
            <FaEnvelope className="icon" />
            <h2>Email Us</h2>
            <p>1211306080@student.mmu.edu.my</p>
          </div>
          <div className="channel">
            <FaPhone className="icon" />
            <h2>Call Us</h2>
            <p>+60 1234 56789</p>
          </div>
          {/* <div className="channel">
            <FaMapMarkerAlt className="icon" />
            <h2>Visit Our Office</h2>
            <p>MMU, Cyberjaya, Selangor, Malaysia</p>
          </div>
          <div className="channel social-media">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="https://facebook.com" className="social-link">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="social-link">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="social-link">
                <FaInstagram />
              </a>
            </div>
          </div> */}
        </div>
      </div>

      <div className="footer">
        <h3>Copyright &#169; 2024</h3>
      </div>
    </div>
  );
}

export default ContactUsPage;
