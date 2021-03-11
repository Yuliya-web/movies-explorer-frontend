import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

export function Register() {
  
  return(
    <>
    <main className="register">
      <div className="register__header">
        <Link to="/"><img src={logo} alt="Логотип" className="register__logo"></img></Link>
        <h1 className="register__title">Добро пожаловать!</h1>
      </div>      
      <form className="register__form">        
        <p className="register__name">Имя</p>
        <input className="register__name-value" defaultValue="Виталий" required></input>       
        <p className="register__name">E-mail</p>
        <input className="register__name-value" defaultValue="pochta@yandex.ru" required></input>
        <p className="register__name">Пароль</p>
        <input className="register__name-value register__name-value_non-valid" defaultValue="••••••••••••••" required></input>
        <span className="register__valid-text register__valid-text_non-valid">Что-то пошло не так...</span>
        <button className="register__on" type="submit">Зарегистрироваться</button>
        <p className="register__question">Уже зарегистрированы?<Link className="register__login" to="/signin">Войти</Link></p>
      </form>
      
    </main>
  </>   
  )
}