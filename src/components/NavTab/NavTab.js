import React from 'react';

export function NavTab() {

  return (
    <nav className="navtab">
      <button className="navtab__link"><a className="navtab__one-link" href="#about-project">О проекте</a></button>
      <button className="navtab__link"><a className="navtab__one-link" href="#techs">Технологии</a></button>
      <button className="navtab__link"><a className="navtab__one-link" href="#about-me">Студент</a></button>
    </nav>
  )
}