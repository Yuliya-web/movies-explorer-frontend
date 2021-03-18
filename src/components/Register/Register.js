import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useFormValidator } from '../../utils/utils';

import logo from '../../images/logo.svg';

export function Register({onRegister, onLogin}) {
  const { values, errors, isValidity, handleChange, resetForm } = useFormValidator();
  const location = useLocation().pathname;
  const focus = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    location === '/signup'
    ? onRegister(
        values.name,
        values.email,
        values.password
      )
    : onLogin(
        values.email,
        values.password
      )
      resetForm();
  }


  return(
    <>
    <main className="register">
      <div className="register__header">
        <Link to="/"><img src={logo} alt="Логотип" className="register__logo"></img></Link>
        <h1 className="register__title">Добро пожаловать!</h1>
      </div>      
      <form className="register__form" name="register-form" id="register-form" onSubmit={handleSubmit} noValidate>        
        <label className="register__name">Имя</label>
        <input className="register__name-value" name="name" minLength='2' maxLength='40' type="text" lang="la" value={values.name || ''} onChange={handleChange} ref={focus} required></input>  
        <span className="register__valid-text register__valid-text_non-valid">{errors.name || ''}</span>     
        <label className="register__name">E-mail</label>
        <input className="register__name-value" name="email" type="email" value={values.email || ''} onChange={handleChange} ref={focus} required></input>
        <span className="register__valid-text register__valid-text_non-valid">{errors.email || ''}</span>
        <label className="register__name">Пароль</label>
        <input className="register__name-value" name="password" type="password" minLength='8' maxLength='10' onChange={handleChange} value={values.password || ''} required></input>
        <span className="register__valid-text register__valid-text_non-valid">{errors.password || ''}</span>
        <button className={`register__on ${!isValidity && 'register__on_disabled'}`} type="submit" isValid={isValidity}>Зарегистрироваться</button>
        <p className="register__question">Уже зарегистрированы?<Link className="register__login" to="/signin">Войти</Link></p>
      </form>
      
      
    </main>
  </>   
  )
}