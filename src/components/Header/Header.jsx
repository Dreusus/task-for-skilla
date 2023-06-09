import React from "react";
import formatDate from "../../utils/formatDate";
import search from '../../images/search.svg'
import arrow from '../../images/arrow.svg'
import avatar from '../../images/avatar.jpg'

const Header = () => {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate)

  return (
    <header className="header">
     {/*  <div className="header__date">{formattedDate}</div> */}
      <div className="header__date">Среда, 13 окт</div>

      <ul className="header__analytics">
        <li className="header__item">
          <p className="header__item-text">Новые звонки <span className="header__item-text_green">20 из 30 шт</span></p>
          <div className="header__item-progress" data-progress="42"></div>
        </li>
        <li className="header__item">
          <p className="header__item-text">Качество разговоров <span className="header__item-text_yellow">40%</span></p>
          <div className="header__item-progress" data-progress="43"></div>
        </li>
        <li className="header__item">
          <p className="header__item-text">Конверсия в заказ <span className="header__item-text_red">67%</span></p>
          <div className="header__item-progress" data-progress="50"></div>
        </li>
      </ul>

      <img src={search} alt="Кнопка поиска" className="header__search"></img>

      <div className="header__user">
        <p className="header__user-text">ИП Сидорова Александра Михайловна</p>
        <img src={arrow} alt="Кнопка развернуть информацию" className="header__user-button" />
      </div>

      <div className="header__avatar-container">
        <img src={avatar} alt="Фото пользователя" className="header__avatar" />
        <img src={arrow} alt="Кнопка развернуть информацию" className="header__user-button" />
      </div>
    </header>
  )
}

export default Header;