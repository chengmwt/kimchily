import React from "react";
import "./FoodItems.css";
import fried_rice from "../constants/fried_rice.webp";
import stew from "../constants/stew.webp";

const MenuItems = () => {
  return (
    <div className="foodMenuGrid">
      {/* Kimchi Fried Rice ----------------------------------------- */}
      <li>
        <h3>Kimchi Fried Rice</h3>
        <h4>(Kimchi-bokkeumbap) "김치볶음밥"</h4>
        <img src={fried_rice} alt="kimchi fried rice" />
        <p>
          Kimchi Fried Rice is a traditional Korean comfort food. A common
          staple in a home-cooked meal and popular amongst students. Our Kimchi
          Fried Rice is made with our Aged Kimchi with splash of our homemade
          sauce, and topped with a fried egg. Can be paired with our soy garlic
          marinated drumstick.
        </p>
        {/* <p>Rich in probiotics, fiber, vitamins, and
          minerals. High in antioxidants, supporting gut health, immunity,
          weight management, and cholesterol.</p> */}
      </li>

      {/* Kimchi Stew ----------------------------------------- */}

      {/* <li>
        <h3>Spicy Kimchi Chicken Stew</h3>
        <h4>(Kimchi-dak-bokkeumtang) "김치닭볶음탕"</h4>
        <img src={stew} alt="kimchi stew" />
        <p>
          This traditional Korean soul food is well-loved by most Korean people
          and many of them grow up eating. Made with our Aged Kimchi, we pair it
          with potato, green onion, and chicken - simmered and reduced down to
          give it that hearty, spicy and savoury taste. Best paired with steamed
          rice.
        </p>
      </li> */}
      
    </div>
  );
};

export default MenuItems;
