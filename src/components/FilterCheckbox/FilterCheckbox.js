/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useLocation } from 'react-router-dom';

export function FilterCheckbox(props) {  
  const location = useLocation().pathname;

  // работа чекбокса короткометражек
  React.useEffect(() => {
    handleSetCheck();    
  },[]);

  // свитч по кнопке чек-бокса
  function handleSetCheck() {
    const checkbox = document.getElementById("short")
    if(checkbox.checked) {
      localStorage.setItem('check', 'on');
      props.handleSearchShortMovies();
      if (location === '/saved-movies') {
        props.setcheckboxOn(true);
      }
    }
    else {
      localStorage.removeItem('check'); 
      props.saveKeyAndSearch();
    }
    
  }
  return (
    <>
      <hr className="check__line"></hr>
      <div className="check__field">
        <input className="check__input" id="short" type="checkbox" onClick={handleSetCheck}></input>
        <label htmlFor="short"></label>
        <p className="check__field-text">Короткометражки</p>
      </div>    
    </>
  )
}