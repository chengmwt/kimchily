import React from "react";
import "./Contact.css";
import facebookIcon from "../constants/facebook_96.png";
import instagramIcon from "../constants/instagram_96.png";
import youtubeIcon from "../constants/youtube_96.png";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

const Contact = () => {
  const phoneNumber = "6472102789";
  const email = "kimchilykitchen@gmail.com";

  return (
    /* Container for contact page */
    <div className="contactContainer" id="contact">
      {/* Wrapper for contact info and hours of operation */}
      <div className="contactWrapper">
        {/* Wrapper for contact info only */}
        <div className="contact">
          <div className="contactHeader">
            <h1>Contact us</h1>
          </div>

          {/* Old style phone and email ------------------------------------------------------------- */}
          {/* <div className="phoneAndEmail">
            <div className="phone">
              <h4>Phone </h4>
              <a href={`tel:${phoneNumber}`} title="Phone Number">
                
                <PiPhoneDuotone size="1.5em" id="phoneIcon"/>(647)210-2789
              </a>
            </div>
            <div className="email">
              <h4 className="email">Email </h4>
              <a href={`mailto:${email}`}>kimchilykitchen@gmail.com</a>
            </div>
          </div> */}

          {/* New style phone and email ---------------------------------------------------------------- */}

          <div className="phoneEmailWrapper">
            <div className="phoneWrapper">
              <a href={`tel:${phoneNumber}`} title="Phone Number">
                <FiPhone size="3em" id="phoneIcon" />
              </a>
              <h4>Phone Number</h4>
              <h5>(647)210-2789</h5>
            </div>

            <div className="emailWrapper">
              <a href={`mailto:${email}`}>
                <MdMailOutline size="3em" id="phoneIcon" />
              </a>
              <h4>Email Us</h4>
              <h5>kimchilykitchen@gmail.com</h5>
            </div>
          </div>

          {/* Social media -------------------------------------------------------------------------- */}
          <div className="social">
            <div className="findUsOn">
              <p>or find us on</p>
            </div>
            <div className="socialIcons">
              <div className="instagram">
                <a href="https://www.instagram.com/kimchily_kitchen/">
                  <img src={instagramIcon} alt="instagramIcon" />
                </a>
              </div>
              <div className="facebook">
                <a href="https://www.facebook.com/profile.php?id=61586999866782">
                  <img src={facebookIcon} alt="facebookIcon" />
                </a>
              </div>
              <div className="youtube">
                <a href="https://www.youtube.com/channel/UCnU4_qkfyjHbBduzf-RP-Gg">
                  <img src={youtubeIcon} alt="youtubeIcon" />
                </a>
              </div>
            </div>
          </div>

          {/* Google Map ------------------------------------------------------------------------------- */}
        </div>

        {/* Hours of operation */}
        <div className="hoursAndLocation">
          <div className="hours" id="hours">
            <h4>Mon - Fri: 10:00AM - 2:00PM </h4>
            <h4>Sat - Sun: 10:00AM - 4:00PM </h4>
            <h4>Closed all holidays</h4>
          </div>

          <div className="map">
            <div className="address">
              <a href="https://maps.app.goo.gl/k52oA5pGkpmgHQUQ9">
                <p>11 Rogerson St. Newcastle, ON L1B 0W4</p>
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.9422797562697!2d-78.60450462307185!3d43.919169071090835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d5a9723b58176b%3A0xaacf6b77d5f8a0aa!2s11%20Rogerson%20St%2C%20Newcastle%2C%20ON%20L1B%200W4!5e0!3m2!1sen!2sca!4v1769616216624!5m2!1sen!2sca"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="bottomLine"></div>
    </div>
  );
};

export default Contact;
