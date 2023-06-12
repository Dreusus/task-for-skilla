import React, { useState } from 'react';
import search from '../../images/search.svg';
import ArrowIcon from '../ArrowIcon/ArrowIcon';

const OPTIONS = {
  types: ['Все типы', 'Входящие', 'Исходящие'],
  employees: ['Все сотрудники', 'Константин', 'Полина'],
  calls: ['Все клиенты', 'Новые клиенты', 'Все исполнители', 'Через приложение', 'Прочие звонки'],
  errors: ['Все ошибки', 'Приветствие', 'Имя', 'Цена', 'Скидка', 'Предзаказ', 'Благодарность', 'Стоп слова'],
  ratings: ['Все оценки', 'Распознать', 'Скрипт не использован', 'Плохо', 'Хорошо', 'Отлично'],
};

const FilterSearch = () => {
  const [isOpen, setIsOpen] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});

  const makeToggleMenu = (key) => () => {
    setIsOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleOptionSelect = (option, key) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [key]: option,
    }));
    makeToggleMenu(key)();
  };

  const renderDropdownOptions = (key) => {
    return (
      <ul className="panel__dropdown">
        {OPTIONS[key].map((option) => (
          <li
            key={option}
            className="panel__drop-element"
            onClick={() => handleOptionSelect(option, key)}
          >
            {option}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="panel">
      <div className="panel__container-left">
        <button className="panel__button-search">
          <img src={search} alt="Кнопка поиска" />
        </button>
        <p className="panel__text">Поиск по звонкам</p>
      </div>

      <div className="panel__container-right">
        {Object.keys(OPTIONS).map((optionKey) => (
          <button
            key={optionKey}
            className="panel__button"
            onClick={makeToggleMenu(optionKey)}
          >
            <p className="panel__text">
              {selectedOptions[optionKey] || OPTIONS[optionKey][0]}
            </p>
            <ArrowIcon className={isOpen[optionKey] ? 'panel__arrow rotate' : 'panel__arrow'} />
            {isOpen[optionKey] && renderDropdownOptions(optionKey)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterSearch;