import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { ImStatsDots } from "react-icons/im";
import { FcSalesPerformance } from "react-icons/fc";
import { IoIosStats } from "react-icons/io";
import { FcStatistics } from "react-icons/fc";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return ( 
    <div className="parent">
      <div className="nav-container">
        <FaPizzaSlice className="nav-icon" />
        <NavLink to="/Home" className="link-container">
          <AiOutlineHome className="icon home-icon" />
          <div> Menu</div>
        </NavLink>
        <NavLink to="/Sales" className="link-container">
          <IoIosStats className="icon" />
          <div>Sales</div>
        </NavLink>
        <NavLink to="/Stats" className="link-container">
          <ImStatsDots className="icon" />
          <div>Statistics</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
