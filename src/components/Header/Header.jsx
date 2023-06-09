import React from "react";
import formatDate from "../../utils/formatDate";

const Header = () => {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate)

  return (
    <header className="header">
      <div className="header__date">{formattedDate}</div>
    </header>
  )
}

export default Header;