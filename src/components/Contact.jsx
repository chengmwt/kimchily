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
            {/* <div className="phoneWrapper">
              <a href={`tel:${phoneNumber}`} title="Phone Number">
                <FiPhone size="3em" id="phoneIcon" />
              </a>
              <h4>Phone Number</h4>
              <h5>(647)210-2789</h5>
            </div> */}

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
                <a href="https://www.instagram.com/kimchilykitchen/">
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
            <h4>Mon - Fri: 7:00AM - 4:00PM </h4>
            {/* <h4>Mon: 7:00AM - 4:00PM </h4>
            <h4>Tue: 7:00AM - 4:00PM </h4>
            <h4>Wed: 7:00AM - 4:00PM </h4>
            <h4>Thu: 7:00AM - 4:00PM </h4>
            <h4>Fri: 7:00AM - 4:00PM </h4> */}
            <h4>Sat: 7:00AM - 11:00AM </h4>
            <h4>Sun: Closed</h4>
            <h4>Closed all Holidays</h4>
          </div>

          <div className="map">
            <div className="address">
              <a href="https://www.google.com/maps/search/?api=1&query=KIMCHILY%NEWCASTLE%ONTARIO">
                <p>11 Rogerson St. Newcastle, ON L1B 0W4</p>
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1436.972274279847!2d-78.6017654!3d43.9191221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d5a9f08cbe42ff%3A0xfcc6d8bed568d8cb!2sKIMCHILY!5e0!3m2!1sen!2sca!4v1769881281753!5m2!1sen!2sca"
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
