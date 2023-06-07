import React from "react";
import Navigation from "../Navigation/Navigation";
import logo from '../../images/logo.svg'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src={logo}
        alt="Логотип Skilla"
      ></img>
      <Navigation />
    </div>
  )
}

export default Sidebar;