import React from "react";
import FoodItems from "./FoodItems";
import "./FoodMenu.css";

const Menu = () => {
  return (
    <div className="foodMenuContainer" id="foodMenu">
      <div className="foodMenuHeader">
        <h1>Food Menu</h1>
      </div>

      {/* Menu grid ------------------------------------------------- */}
      <FoodItems />
    </div>
  );
};

export default Menu;
