import React from "react";
import search from '../../images/search.svg'
import arrow from '../../images/arrow.svg'

const FilterSearch = () => {
  return (
    <div className="panel">
      <div className="panel__container-left">
        <button className="panel__button-search">
          <img src={search}></img>
        </button>
        <p className="panel__text">Поиск по звонкам</p>
      </div>
      <div className="panel__container-right">
        <p className="panel__text">Все типы</p>
        <button className="panel__button">
          <img src={arrow} alt='кнопка развернуть' />
        </button>
        <p className="panel__text">Все сотрудники</p>
        <button className="panel__button">
          <img src={arrow} alt='кнопка развернуть' />
        </button>
        <p className="panel__text">Все звонки</p>
        <button className="panel__button">
          <img src={arrow} alt='кнопка развернуть' />
        </button>
        <p className="panel__text">Все оценки</p>
        <button className="panel__button">  <img src={arrow} alt='кнопка развернуть' /></button>
        <p className="panel__text">Все ошибки</p>
        <button className="panel__button">
          <img src={arrow} alt='кнопка развернуть' />
        </button>
      </div>
    </div>
  )
}

export default FilterSearch;