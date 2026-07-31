import React from "react";
import "./About.css";
import aboutKimchi from "../constants/about_kimchi.webp";

const About = () => {
  return (
    /* Container for About page -------------------------------------------------------------- */
    <div className="aboutContainer" id="about">
      {/* Image section for About page -----------------------------------------------------*/}
      <div className="aboutImage">
        <img src={aboutKimchi} alt="aboutKimchi" />
      </div>

      {/* Text section for About page ------------------------------------------------------*/}
      <div className="aboutWrapper">
        <div className="aboutHeader">
          <h1>Kimchi "김치"</h1>
        </div>
        <div className="aboutMessage">
          <article>
            <p>
              Our kimchi is made from a family recipe passed down through
              generations of restaruant owners in Mokpo "목포시", a city
              in the Jeolla-do "전라도" province of South Korea.
            </p>
            <p>
              Our mission is to bring that authentic taste and the well-regarded
              health benefits of kimchi to Ontario, handmade here with
              locally sourced ingredients.
            </p>
            <p>
              Kimchi is widely considered a superfood. Packed with probiotics,
              vitamins (A, B, C, and K), minerals, and fiber - all while low in
              caloires. Health benefits include maintaining a healthy gut microbiome, managing
              cholesterol, aiding in weight loss, and strengthening of the immune system.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
