import React, { useState, useEffect } from "react";
import Call from '../Call/Call';

const Calls = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    const token = "testtoken";
    const url = "https://api.skilla.ru/mango/getList";

    const requestData = {
      date_start: "2023-06-12",
      date_end: "2023-06-12",
      in_out: "",
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
    {calls.map((call) => (
      <Call key={call.id} data={call}/>
    ))}
        </tr>
      </tbody>
    </table>
  )
}

export default Calls;