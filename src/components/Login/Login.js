import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useFormValidator } from '../../utils/utils';
import logo from '../../images/logo.svg';

export function Login({onRegister, onLogin, infoMessage}) {
  const { values, errors, isValidity, handleChange } = useFormValidator();
  const location = useLocation().pathname;
  const focus = React.useRef();

  // сабмит для формы с условием наличия всех валидно заполненных полей
  function handleSubmit(evt) {
    evt.preventDefault();
    if (location === '/signup') {
      if(isValidity) {
        onRegister(
        values.name,
        values.email,
        values.password
        )
      } 
    }
    else {
      if (isValidity) {
        onLogin(
        values.email,
        values.password
        )
      } 
    }
  }
  return(
    <>
    <main className="login">

      <div className="login__header">
        <Link to="/"><img src={logo} alt="Логотип" className="login__logo"></img></Link>
        <h1 className="login__title">Рады видеть!</h1>
      </div>      
      <form className="login__form" name="login-form" id="login-form" onSubmit={handleSubmit} noValidate>        
        <p className="login__name">E-mail</p>
        <input className="login__name-value" type="email" name="email" value={values.email || ''} onChange={handleChange} ref={focus} required></input>
        <span className="login__valid-text login__valid-text_non-valid">{errors.email || ''}</span>
        <p className="login__name">Пароль</p>
        <input className="login__name-value" onChange={handleChange} name="password" minLength='8' maxLength='10' value={values.password || ''} type="password" required></input>
        <span className="login__valid-text login__valid-text_non-valid">{errors.password || ''}</span>
        <span className={infoMessage ? 'profile__edit-text_active' : 'profile__edit-text'}>{infoMessage}</span>
        <button className={`login__on ${!isValidity && 'login__on_disabled'}`} type="submit" isValid={isValidity.toString()}>Войти</button>
        <p className="login__question">Ещё не зарегистрированы?<Link className="login__reg" to="/signup">Регистрация</Link></p>      
      </form>
      
    </main>
  </>   
  )
}