import React from 'react';
// import { Link } from 'react-router-dom';

export function AboutProject() {

  return ( 
    <section className="about-project" id={"about-project"}>
      <h2 class="about-project__title">О проекте</h2>
      <hr class="about-project__line"></hr>
      <div class="about-project__main-text">
        <div class="about-project__text-block">
          <h3 class="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p class="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div class="about-project__text-block">
          <h3 class="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p class="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>    
      </div>
      <div class="about-project__time-line">
        <p class="about-project__time">1 неделя</p>
        <p class="about-project__time about-project__time-grey">4 недели</p>
      </div>
      <div class="about-project__time-line">
        <p class="about-project__time about-project__time-non-background">Back-end</p>
        <p class="about-project__time about-project__time-grey about-project__time-non-background">Front-end</p>
      </div>
    </section>       
  )
}