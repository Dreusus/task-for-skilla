import React from "react";
import buttonBalance from '../../images/button-balance.svg';
import arrowLeft from '../../images/arrow-left.svg';
import arrowRight from '../../images/arrow-right.svg';
import calendar from '../../images/icon-calendar.svg'
import FilterSearch from "../FilterSearch/FilterSearch";
import Calls from '../Calls/Calls'

const Main = () => {
  return (
    <section className="main">
      <header className="main__header">
        <button className="main__button-balance">
          Баланс:<span className="main__span">272 ₽ </span>
          <img src={buttonBalance} alt="кнопка пополнить баланс"></img>
        </button>
        <nav className="main__calendar">
          <img src={arrowLeft} ></img>
          <img src={calendar} className="main__calendar-icon"></img>
          <p className="main__calendar-text">3 дня</p>
          <img src={arrowRight}></img>
        </nav>
      </header>
      <FilterSearch />
      <Calls/>
    </section>
  )
}

export default Main;