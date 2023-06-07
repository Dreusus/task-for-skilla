import React from "react";

import result from '../../images/icon_result.svg'
import order from '../../images/icon_order.svg'
import message from '../../images/icon_message.svg'
import phone from '../../images/icon_phone.svg'
import people from '../../images/icon_people.svg'
import document from '../../images/icon_document.svg'
import person from '../../images/icon_person.svg'
import bag from '../../images/icon_bag.svg'
import book from '../../images/icon_book.svg'
import gear from '../../images/icon_gear.svg'

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__items">
        <li className="navigation__item">
          <img src={result} className="navigation__icon" />
          <a href="#" className="navigation__link">Итоги</a>
        </li>

        <li className="navigation__item">
          <img src={order} className="navigation__icon" />
          <a href="#" className="navigation__link">Заказы</a>
        </li>

        <li className="navigation__item">
          <img src={message} className="navigation__icon" />
          <a href="#" className="navigation__link">Сообщения</a>
        </li>

        <li className="navigation__item">
          <img src={phone} className="navigation__icon" />
          <a href="#" className="navigation__link">Звонки</a>
        </li>

        <li className="navigation__item">
          <img src={people} className="navigation__icon" />
          <a href="#" className="navigation__link">Контрагенты</a>
        </li>

        <li className="navigation__item">
          <img src={document} className="navigation__icon" />
          <a href="#" className="navigation__link">Документы</a>
        </li>

        <li className="navigation__item">
          <img src={person} className="navigation__icon" />
          <a href="#" className="navigation__link">Исполнители</a>
        </li>

        <li className="navigation__item">
          <img src={bag} className="navigation__icon" />
          <a href="#" className="navigation__link">Отчеты</a>
        </li>

        <li className="navigation__item">
          <img src={book} className="navigation__icon" />
          <a href="#" className="navigation__link">База знаний</a>
        </li>

        <li className="navigation__item">
          <img src={gear} className="navigation__icon" />
          <a href="#" className="navigation__link">Настройки</a>
        </li>

      </ul>
    </nav >
  )
}

export default Navigation;