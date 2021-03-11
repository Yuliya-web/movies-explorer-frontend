import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

export function Login() {
  
  return(
    <>
    <main className="login">

      <div className="login__header">
        <Link to="/"><img src={logo} alt="Логотип" className="login__logo"></img></Link>
        <h1 className="login__title">Рады видеть!</h1>
      </div>      
      <form className="login__form">        
        <p className="login__name">E-mail</p>
        <input className="login__name-value" defaultValue="pochta@yandex.ru" type="email"></input>
        <p className="login__name">Пароль</p>
        <input className="login__name-value" defaultValue="" type="password"></input>
        <span className="login__valid-text">Что-то пошло не так...</span>
        <button className="login__on" type="submit">Войти</button>
        <p className="login__question">Ещё не зарегистрированы?<Link className="login__reg" to="/signup">Регистрация</Link></p>      
      </form>
      
    </main>
  </>   
  )
}