import React, { useState } from 'react';
import search from '../../images/search.svg';
import ArrowIcon from '../ArrowIcon/ArrowIcon';

const OPTIONS = {
  types: ['Все типы', 'Входящие', 'Исходящие'],
  employees: ['Все сотрудники', 'Константин К.', 'Полина Ю.'],
  calls: ['Все звонки', 'Новые клиенты', 'Все исполнители', 'Через приложение', 'Прочие звонки'],
  ratings: ['Все оценки', 'Распознать', 'Скрипт не использован', 'Плохо', 'Хорошо', 'Отлично'],
  errors: ['Все ошибки', 'Приветствие', 'Имя', 'Цена', 'Скидка', 'Предзаказ', 'Благодарность', 'Стоп слова'],
};

const FilterSearch = ({ setFilters }) => {
  const [isOpen, setIsOpen] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({
    types: 'Все типы',
    employees: 'Все сотрудники',
    calls: 'Все звонки',
    ratings: 'Все оценки',
    errors: 'Все ошибки',
  });
  const [selectedOption, setSelectedOption] = useState({});

  const makeToggleMenu = (key) => () => {
    setIsOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleOptionSelect = (option, key) => {
    setSelectedOption((prevSelectedOption) => ({
      ...prevSelectedOption,
      [key]: option,
    }));

    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [key]: option,
    }));

    setFilters(prevOptions => ({
      ...prevOptions,
      [key]: option,
    }));

    const updatedOptions = [option, ...OPTIONS[key].filter((item) => item !== option)];
    OPTIONS[key] = updatedOptions;
    makeToggleMenu(key)();
  };

  const resetFilters = () => {
    setSelectedOptions({
      types: 'Все типы',
      employees: 'Все сотрудники',
      calls: 'Все звонки',
      ratings: 'Все оценки',
      errors: 'Все ошибки',
    });
    setSelectedOption({});
    setFilters({
      types: 'Все типы',
      employees: 'Все сотрудники',
      calls: 'Все звонки',
      ratings: 'Все оценки',
      errors: 'Все ошибки',
    });
  };

  const renderDropdownOptions = (key) => (
    <ul className="panel__dropdown">
      {OPTIONS[key].map((option) => (
        <li
          key={option}
          className={`panel__drop-element ${selectedOption[key] === option ? 'selected' : ''}`}
          onClick={() => {
            handleOptionSelect(option, key);
            makeToggleMenu(key)();
          }}
        >
          {option}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="panel">
      <div className="panel__container-left">
        <button className="panel__button-search">
          <img src={search} alt="Кнопка поиска" />
        </button>
        <p className="panel__text">Поиск по звонкам</p>
      </div>

      <div className="panel__container-right">
        {Object.keys(selectedOption).length > 0 && (
          <button className="panel__button reset-button" onClick={resetFilters}>
            <span className="panel__text">Сбросить фильтры</span>
            <svg width="9" height="9" viewBox="0 0 9 9" fill="#ADBFDF" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.75 0.88125L7.86875 0L4.375 3.49375L0.88125 0L0 0.88125L3.49375 4.375L0 7.86875L0.88125 8.75L4.375 5.25625L7.86875 8.75L8.75 7.86875L5.25625 4.375L8.75 0.88125Z" />
            </svg>
          </button>
        )}

        {Object.keys(selectedOptions).map((optionKey) => (
          <button
            className={`panel__button ${selectedOption[optionKey] ? 'selected' : ''}`}
            key={optionKey}
            onClick={makeToggleMenu(optionKey)}
          >
            <span className={`panel__text ${selectedOption[optionKey] ? 'selected' : ''}`}>
              {selectedOptions[optionKey]}
            </span>
            <ArrowIcon className={isOpen[optionKey] ? 'panel__arrow rotate' : 'panel__arrow'} />
            {isOpen[optionKey] && renderDropdownOptions(optionKey)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterSearch;
