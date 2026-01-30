import React from "react";
import MenuItems from "./MenuItems";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menuContainer" id="menu">
      <div className="menuHeader">
        <h1>Menu</h1>
      </div>

      {/* Menu grid ------------------------------------------------- */}
      <MenuItems />
    </div>
  );
};

export default Menu;
