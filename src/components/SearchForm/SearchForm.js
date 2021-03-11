import React from 'react';
import search from '../../images/search.svg';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';

export function SearchForm() {

  return (
    <>
      <form className="search-form">
        <div className="search-form__text">
          <img className="search__icon" src={search} alt="Поиск"></img>
          <input className="search__field" placeholder="Фильм"></input>
          <button className="search__btn" href="/movies" type="submit">Найти</button>  
        </div>
        <FilterCheckbox></FilterCheckbox>      
      </form>
      
    </>
  )
}