import React from "react";
import Hero from "./Hero";
import "./Home.css";
import Button from "./Button";

const Home = () => {
  return (
    <div className="homeContainer" id="home">
      
      {/* Hero image --------------------------------------------*/}
      <Hero /> 

      {/* Buttons ------------------------------------------------- */}
      <div className="buttonWrapper">
        <div className="buttons">
          <Button buttonName="Menu" link="#menu" />
          <Button buttonName="Order" link="#order" />
        </div>
      </div>
    </div>
  );
};

export default Home;
