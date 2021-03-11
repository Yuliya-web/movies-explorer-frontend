import React from 'react';
import { Link , useLocation } from 'react-router-dom';
import user from '../../images/user.svg';
import mobmenu from '../../images/mobmenu.svg';


export function Navigation({loggedIn}) {
  const location = useLocation().pathname;

  return (
    <>
      <nav className={loggedIn ? 'navigation navigation_logout' : 'navigation_main'}>
        <Link to="/signup" className="navigation__link navigation__link_reg">Регистрация</Link>
        <button  className="navigation__log-button"><Link to="/signin" className="navigation__link navigation__link_button">Войти</Link></button> 
      </nav>

      <a className={location === '/' ? 'navigation__mobile-menu navigation__mobile-menu_not-visible' : 'navigation__mobile-menu'} href="#nav"><img src={mobmenu} alt="Лого-меню"></img></a>

      <nav className={loggedIn ? 'navigation' : 'navigation navigation_logout'} id={"nav"}>  
        <button  className="navigation__close-button navigation__close-button_invisible" href="/movies"></button> 
        <Link to="/" className="navigation__link navigation__link_main navigation__link_mobile">Главная</Link>      
        <Link to="/movies" className="navigation__link navigation__link_mobile">Фильмы</Link>
        <Link to="/saved-movies" className="navigation__link navigation__link_saved-films navigation__link_mobile">Сохраненные фильмы</Link> 
        <Link to="/profile" className="navigation__link navigation__link_user">Аккаунт<img className='navigation__user-icon' src={user} alt='Аккаунт'/></Link> 
      </nav>
    </>
  )
}