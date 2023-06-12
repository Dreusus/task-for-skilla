import React, { useState } from "react";
import incoming from '../../images/incoming.svg'
import outcoming from '../../images/outcoming.svg'
import select from '../../images/select.svg'
import formatPhoneNumber from '../../utils/formatPhoneNumber';
import formatTimeDuration from '../../utils/formatTimeDuration';
import formatTimeDate from '../../utils/formatTimeDate'

const Call = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
      <p className="call__duration">{formatTimeDuration(data.time)}</p>
    </td>
  )
}

export default Call;