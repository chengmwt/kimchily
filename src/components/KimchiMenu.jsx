import React from "react";
import KimchiItems from "./KimchiItems";
import "./KimchiMenu.css";

const Menu = () => {
  return (
    <div className="kimchiMenuContainer" id="kimchiMenu">
      <div className="kimchiMenuHeader">
        <h1>Kimchi Menu</h1>
      </div>

      {/* Menu grid ------------------------------------------------- */}
      <KimchiItems />
    </div>
  );
};

export default Menu;
