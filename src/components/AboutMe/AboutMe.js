import React from 'react';
import photo from '../../images/photo.jpeg';

export function AboutMe() {

  return ( 
    <section className="about-me" id={"about-me"}>      
      <h2 className="about-me__title">Студент</h2>
      <hr className="about-me__line"></hr>
      <div className="about-me__student">
        <div className="about-me__text">
          <h3 className="about-me__student-name">Юлия</h3>
          <p className="about-me__student-job">Фронтенд-разработчик, 31 год</p>
          <p className="about-me__student-text-block">Я родилась и живу в Забайкалье, закончила Иркутский государственный университет путей сообщения по специальности "Телекоммуникационные сети". Я люблю слушать музыку. Очень нравится путешествовать. Планирую сменить сферу деятельности. Если компания окажется связана с телекоммуникационным оборудованием или сетями - это будет большим плюсом.</p>
          <div className="about-me__links">
            <a className="about-me__link" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=1753890379">FaceBook</a>
            <a className="about-me__link" target="_blank" rel="noreferrer" href="https://github.com/Yuliya-web">GitHub</a>
          </div>
        </div>        
        <img className="about-me__student-photo" src={photo} alt="Фото"></img>
      </div>
      
      
    </section>        
  )
}