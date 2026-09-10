import React from "react";
import "./KimchiItems.css";
import fresh_kimchi from "../constants/fresh_kimchi.webp";
import aged_kimchi from "../constants/aged_kimchi.webp";
import spicy_kimchi from "../constants/spicy_kimchi.webp";

const MenuItems = () => {
  return (
    <div className="kimchiMenuGrid">
      {/* Fresh Kimchi ----------------------------------------- */}
      <li>
        <h3>Original Kimchi</h3>
        <h4>(Banchan Kimchi) "반찬김치"</h4>
        <img src={fresh_kimchi} alt="fresh kimchi" />
        <p>
          This traditional style of kimchi is typically used as a side dish
          (banchan) "반찬". Crispy cabbage mixed in a complex combination of
          salty, spicy, and sour flavours all with a natural fizz. Great pairing
          for any dish!
        </p>
        {/* <p>Rich in probiotics, fiber, vitamins, and
          minerals. High in antioxidants, supporting gut health, immunity,
          weight management, and cholesterol.</p> */}
      </li>

      {/* Aged Kimchi ----------------------------------------- */}

      <li>
        <h3>Aged Kimchi</h3>
        <h4>(Mukeunji) "묵은지"</h4>
        <img src={aged_kimchi} alt="aged kimchi" />
        <p>
          This aged kimchi (Mukeunji) "묵은지" is fermented over six months at
          low temperatures. Producing a deep savory flavor, strong sourness, and
          soft texture - commonly used in stews or fried rice. Aged kimchi
          boosts lactic acid bateria to help digestion.
        </p>
        {/* <p>It is rich in
          lactic acid bacteria that support digestion, immunity, and overall
          health.</p> */}
      </li>

      {/* Extra Spicy Kimchi ----------------------------------------- */}

      <li>
        <h3>Extra Spicy Kimchi</h3>
        <h4>(Maeun Kimchi) "매운김치"</h4>
        <img src={spicy_kimchi} alt="extra spicy kimchi" />
        <p>
          Turn up the heat with this extra spicy (Maeun) "매운" kimchi. Made
          with Thai chili - the intense heat boosts metabolism and strengthens
          the immune system.
        </p>
      </li>
    </div>
  );
};

export default MenuItems;
