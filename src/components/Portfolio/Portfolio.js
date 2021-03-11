import React from 'react';
import arrow from '../../images/arrow.svg';

export function Portfolio() {

  return ( 
    <section className="portfolio">      
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__link">
        <p className="portfolio__link-name">Статичный сайт</p>
        <a href="/"><img className="portfolio__link-arrow" src={arrow} alt="Стрелка перехода"></img></a>
      </div>
      <hr className="portfolio__line"></hr>
      <div className="portfolio__link">
        <p className="portfolio__link-name">Адаптивный сайт</p>
        <a href="/"><img className="portfolio__link-arrow" src={arrow} alt="Стрелка перехода"></img></a>
      </div>
      <hr className="portfolio__line"></hr>      
      <div className="portfolio__link">
        <p className="portfolio__link-name">Одностраничное приложение</p>
        <a href="/"><img className="portfolio__link-arrow" src={arrow} alt="Стрелка перехода"></img></a>
      </div>
      
    </section>         
  )
}