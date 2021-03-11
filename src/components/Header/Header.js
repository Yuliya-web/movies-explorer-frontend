import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { Navigation } from '../Navigation/Navigation';

export function Header({loggedIn}) {


  return (
    <header className='header'>
      <div className='header__container'>
        <Link to="/"><img className='header__logo' src={logo} alt='Лого'/></Link>     
        <Navigation loggedIn={loggedIn}/>
      </div>
    </header>
  )
}
