import React from 'react';

export function NotFound() {
  
  return(
   
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>       
      <button className="not-found__back" type="button">Назад</button>       
    </main>
   
  )
}