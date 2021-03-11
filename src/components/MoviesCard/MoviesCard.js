import React from 'react';
import { useLocation } from 'react-router-dom';

const cardPic = require('../../images/card-pic.jpg'); 

export function MoviesCard() {
  const location = useLocation().pathname;
  
  return (
    <div className="mov-card">
      <div className="mov-card__text-and-icon">
        <div className="mov-card__text">
          <p className="mov-card__text-name">33 слова о дизайне</p>
          <p className="mov-card__text-time">1ч 47м</p>
        </div>
        <button alt="Закладка" id="icon-card" className={location === '/movies' ? "mov-card__save-icon" : "mov-card__close-icon"} type="button"></button>
      </div>
      <img alt="Фильм" className="mov-card__image" src={cardPic.default}></img>           
    </div>
  )
}