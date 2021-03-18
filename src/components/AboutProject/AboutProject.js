import React from 'react';

export function AboutProject() {

  return ( 
    <section className="about-project" id={"about-project"}>
      <h2 className="about-project__title">О проекте</h2>
      <hr className="about-project__line"></hr>
      <div className="about-project__main-text">
        <div className="about-project__text-block">
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__text-block">
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>    
      </div>
      <div className="about-project__time-line">
        <p className="about-project__time">1 неделя</p>
        <p className="about-project__time about-project__time-grey">4 недели</p>
      </div>
      <div className="about-project__time-line">
        <p className="about-project__time about-project__time-non-background">Back-end</p>
        <p className="about-project__time about-project__time-grey about-project__time-non-background">Front-end</p>
      </div>
    </section>       
  )
}