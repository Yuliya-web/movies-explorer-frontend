import React from 'react';

export function FilterCheckbox() {

  return (
    <>
      <hr className="check__line"></hr>
      <div className="check__field">
        <input className="check__input" id="short-movies" type="checkbox"></input>
        <label for="short-movies"></label>
        <p className="check__field-text">Короткометражки</p>
      </div>    
    </>
  )
}