import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../Header/Header';

export function Profile() {
  
  return(
    <>
    < Header loggedIn="true" />
    <main className="profile">
      <h1 className="profile__title">Привет, Юлия!</h1>
      <form className="profile__form">
        <div className="profile__inputs">
          <p className="profile__name">Имя</p>
          <input className="profile__name-value" value="Юлия"></input>
        </div>
        <hr className="profile__line"></hr>
        <div className="profile__inputs">
          <p className="profile__name">Почта</p>
          <input className="profile__name-value" value="Почта@yandex.ru"></input>
        </div>
        <button className="profile__edit" type="button">Редактировать</button>
        <Link className="profile__out" type="button">Выйти из аккаунта</Link>
      </form>
      
    </main>
  </>   
  )
}