import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
const Logo = ({ className = "justify-center" }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img src={logo} alt="daily news tracker logo" />
    </Link>
  );
};

export default Logo;
