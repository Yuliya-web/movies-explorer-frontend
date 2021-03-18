import React from 'react';
import { Link } from 'react-router-dom';
import { useFormValidator } from '../../utils/utils';

import { Header } from '../Header/Header';

export function Profile({loggedIn, onLogout, handleUpdateUser, handleLogOut, currentUser, setCurrentUser, infoMessage, setInfoMessage}) {
  const { values, errors, isValid, handleChange } = useFormValidator();
  const focus = React.useRef();
  

  function handleSubmit(evt) {
    evt.preventDefault();
    if (values.name || values.email) {
    handleUpdateUser({
      name: values.name || currentUser.name,
      email: values.email || currentUser.email,
    });
    }
    else {
      setInfoMessage('Нет изменений для сохранения');
      setTimeout(function() {setInfoMessage('')}, 2000)  
    } 
    
  }


  return(
    <>
    < Header loggedIn={loggedIn} />
    <main className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}</h1>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__inputs">
          <p className="profile__name">Имя</p>
          <input className="profile__name-value" name="name" minLength='2' maxLength='40' type="text" lang="la" defaultValue={currentUser.name} onChange={handleChange} ref={focus} required></input>
          <span className="login__valid-text login__valid-text_non-valid">{errors.name || ''}</span>
        </div>
        <hr className="profile__line"></hr>
        <div className="profile__inputs">
          <p className="profile__name" >Почта</p>
          <input className="profile__name-value" name="email" type="email" defaultValue={currentUser.email}  onChange={handleChange} ref={focus} required></input>
          <span className="login__valid-text login__valid-text_non-valid">{errors.email || ''}</span>
        </div>
        <span className={infoMessage ? 'profile__edit-text_active' : 'profile__edit-text'}>{infoMessage}</span>
        <button className="profile__edit" type="submit" isValid={isValid}>Редактировать</button>
        <Link className="profile__out" type="button" onClick={handleLogOut}>Выйти из аккаунта</Link>
      </form>
      
    </main>
  </>   
  )
}