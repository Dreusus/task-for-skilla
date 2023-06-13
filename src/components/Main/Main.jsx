import React from 'react';
import Calls from '../Calls/Calls';
import arrowLeft from '../../images/arrow-left.svg';
import arrowRight from '../../images/arrow-right.svg';
import buttonBalance from '../../images/button-balance.svg';
import calendar from '../../images/icon-calendar.svg';

const Main = () => {
  return (
    <section className="main">
      <header className="main__header">
        <button className="main__button-balance">
          Баланс:<span className="main__span">272 ₽ </span>
          <img src={buttonBalance} alt="кнопка пополнить баланс"></img>
        </button>
        <nav className="main__calendar">
          <img src={arrowLeft} alt="стрелка влево"></img>
          <img src={calendar} className="main__calendar-icon" alt="календарь"></img>
          <p className="main__calendar-text">3 дня</p>
          <img src={arrowRight} alt="стрелка вправо"></img>
        </nav>
      </header>
      <Calls/>
    </section>
  )
}

export default Main;