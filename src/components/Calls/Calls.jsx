import React, { useState, useEffect } from "react";
import Call from '../Call/Call';
import FilterSearch from '../FilterSearch/FilterSearch';

const Calls = () => {
  const [calls, setCalls] = useState([]);
  const [filters, setFilters] = useState({
    types: 'Все типы',
    employees: 'Все сотрудники',
    calls: 'Все звонки',
    ratings: 'Все оценки',
    errors: 'Все ошибки',
  });

  useEffect(() => {
    const token = "testtoken";
    const url = "https://api.skilla.ru/mango/getList";

    const requestData = {
      date_start: "2023-01-12",
      date_end: "2023-06-12",
      limit: 50,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestData),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setCalls(data.results);
      })
      .catch((error) => {
        console.error("Ошибка при выполнении запроса:", error);
      });
  }, []);

  return (
    <>
      <FilterSearch filters={filters} setFilters={setFilters} />
      <table className="calls">
        <thead className="calls__heading">
          <tr className="call_heading-items">
            <th className="calls__heading-item">Тип</th>
            <th className="calls__heading-item">Время</th>
            <th className="calls__heading-item">Сотрудник</th>
            <th className="calls__heading-item">Звонок</th>
            <th className="calls__heading-item">Источник</th>
            <th className="calls__heading-item">Оценка</th>
            <th className="calls__heading-item">Длительность</th>
          </tr>
        </thead>

        <tbody className="calls__body">
          <tr className="calls">
            {calls
              .filter(call => {
                if (filters.types === 'Входящие') {
                  return call.in_out === 1;
                } else if (filters.types === 'Исходящие') {
                  return call.in_out === 0;
                } else {
                  return true;
                }
              })
              .map((call) => (
                <Call key={call.id} data={call} />
              ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Calls;