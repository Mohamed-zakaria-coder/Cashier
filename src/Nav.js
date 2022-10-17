import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { FcSalesPerformance } from 'react-icons/fc';
import { FcStatistics } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
const Nav = (props) => {
  return (
    <div className="parent">
      <div className="nav-container">
        <FaPizzaSlice className="nav-icon" />
        <NavLink to="/Home" className="link-container">
          <AiOutlineHome className="icon" />
          <div> Menu</div>
        </NavLink>
        <NavLink to="/Sales" className="link-container">
          <FcSalesPerformance className="icon" />
          <div>Sales</div>
        </NavLink>
        <NavLink to="/Stats" className="link-container">
          <FcStatistics className="icon" />
          <div>Statistics</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
