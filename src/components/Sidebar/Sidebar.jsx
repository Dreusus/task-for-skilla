import React from "react";
import Navigation from "../Navigation/Navigation";
import Button from '../Button/Button'
import logo from '../../images/logo.svg'
import plus from '../../images/button_plus.svg'
import exclamation from '../../images/button_exclamation.svg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src={logo}
        alt="Логотип Skilla"
      ></img>
      <Navigation />
      <Button title="Добавить заказ" src={plus} spanMargin={{ marginLeft: '24px' }} />
      <Button title="Оплата" src={exclamation} spanMargin={{ marginLeft: '65px' }} />
    </div>
  )
}

export default Sidebar;