import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

export function Techs() {

  return ( 
  <ScrollableAnchor id={"techs"}>  
    <section className="techs">

      <h2 className="techs__title">Технологии</h2>
      <hr className="techs__line"></hr>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__text-block">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="techs__buttons">
        <button className="techs__button">HTML</button>
        <button className="techs__button">CSS</button>
        <button className="techs__button">JS</button>
        <button className="techs__button">React</button>
        <button className="techs__button">Git</button>
        <button className="techs__button">Express.js</button>
        <button className="techs__button">MongoDB</button>
      </div>
      
    </section>  
  </ScrollableAnchor>        
  )
}