import React from "react";
import './Button.css'

const Button = ({ buttonName, link }) => {
  return (
    <a href={link}><button className="button">{buttonName}</button></a>
  );
};

export default Button;
