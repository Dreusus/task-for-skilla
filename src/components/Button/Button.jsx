import React from "react";

const Button = ({ title, src, spanMargin}) => {
  return (
    <button className="button">
      <span className="button__text" style={spanMargin}>{title}</span>
      <img src={src} className="button__image" alt="Кнопка действия"></img>
    </button>
  )
}

export default Button;