import React, { useState } from "react";
import incoming from '../../images/incoming.svg'
import outcoming from '../../images/outcoming.svg'
import select from '../../images/select.svg'
import formatPhoneNumber from '../../utils/formatPhoneNumber';
import formatTimeDuration from '../../utils/formatTimeDuration';
import formatTimeDate from '../../utils/formatTimeDate'

const Call = ({ data }) => {

  const [recordingUrl, setRecordingUrl] = useState(null);

  function fetchRecording() {
    const token = 'testtoken';
    const url = `https://api.skilla.ru/mango/getRecord?record=${data.record}&partnership_id=${data.partnership_id}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        setRecordingUrl(url);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    fetchRecording();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRecordingUrl(null);
  };

  return (
    <td className="call" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isHovered && (
        <button className="call__select-button" style={{ backgroundImage: `url(${select})` }} />
      )}

      {data.in_out === 1 ? (
        <img src={incoming} className="call__type" alt='Иконка типа звонка' />
      ) : (
        <img src={outcoming} className="call__type" alt='Иконка типа звонка' />
      )}

      <p className="call__time">{formatTimeDate(data.time)}</p>
      <img src={data.person_avatar} alt="Аватар сотрудника" className="call__employee" />
      <p className="call__number">{formatPhoneNumber(data.partner_data.phone)}</p>
      <p className="call__source">{data.source}</p>
      <button className="call__estimation">Распознать</button>
      {recordingUrl ? <audio controls src={recordingUrl} className="audio-player" /> : <p className="call__duration">{formatTimeDuration(data.time)}</p>}
    </td>
  )
}

export default Call;
