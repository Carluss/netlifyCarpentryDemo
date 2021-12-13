import React from "react";

import "./contact.css";

const ButtonDirections = () => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="ui large icon button filter-button"
      href="https://www.google.com/maps/place/Manuel+Prates+%26+Filhos+Lda/@38.7053068,-7.8992573,16.21z/data=!4m5!3m4!1s0xd19e7692037cdbb:0x2259f7ee51f1f3ae!8m2!3d38.7071236!4d-7.8981213"
    >
      <i className="google icon"></i>
      <span className="span-align"> Obter direções</span>
    </a>
  );
};

export default ButtonDirections;
