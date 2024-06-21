import React from "react";
import links from "../utils/links";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-evenly items-center border-y py-1 mt-2">
        {links.map((item) => (
          <Link to={item.path} key={item.text}>
            {item.text}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
