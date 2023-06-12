import React, { useState } from 'react';
import search from '../../images/search.svg'

import ArrowIcon from '../ArrowIcon/ArrowIcon'

const FilterSearch = () => {

  const [menuStates, setMenuStates] = useState({
    types: false,
    employees: false,
    calls: false,
    ratings: false,
    errors: false,
  });

  const toggleMenu = (key) => {
    setMenuStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="panel">
      <div className="panel__container-left">
        <button className="panel__button-search">
          <img src={search} alt='Кнопка поиска'></img>
        </button>
        <p className="panel__text">Поиск по звонкам</p>
      </div>

      <div className="panel__container-right">
        <button className="panel__button" onClick={() => toggleMenu("types")}>
          <p className="panel__text">Все типы</p>
          <ArrowIcon className={menuStates["types"] ? "panel__arrow rotate" : "panel__arrow"} />
        </button>

        <button className="panel__button" onClick={() => toggleMenu("employees")}>
          <p className="panel__text">Все сотрудники</p>
          <ArrowIcon className={menuStates["employees"] ? "panel__arrow rotate" : "panel__arrow"} />
        </button>

        <button className="panel__button" onClick={() => toggleMenu("calls")}>
          <p className="panel__text">Все звонки</p>
          <ArrowIcon className={menuStates["calls"] ? "panel__arrow rotate" : "panel__arrow"} />
        </button>

        <button className="panel__button" onClick={() => toggleMenu("ratings")}>
          <p className="panel__text">Все оценки</p>
          <ArrowIcon className={menuStates["ratings"] ? "panel__arrow rotate" : "panel__arrow"} />
        </button>

        <button className="panel__button" onClick={() => toggleMenu("errors")}>
          <p className="panel__text">Все ошибки</p>
          <ArrowIcon className={menuStates["errors"] ? "panel__arrow rotate" : "panel__arrow"} />
        </button>

      </div>
    </div >
  )
}

export default FilterSearch;


