import React from 'react';
import search from '../../images/search.svg';
import {FilterCheckbox} from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';

export function SearchForm(props) {  

  const [key, changeKey] = React.useState('');
  const location = useLocation().pathname;

  function handleChangeKey(evt) {
    changeKey(evt.target.value);        
  }

  function handleSubmit(evt) {
    evt.preventDefault();    
    saveKeyAndSearch();

    //если страница - saved-moves, то - здесь запускается функция отрисовки {movies} на страницу по итогам поиска
    location === '/saved-movies' && props.setSearchSubmit(true);
  }

  // установка ключевого слова в localStorage и поиск
  function saveKeyAndSearch() {  
    localStorage.setItem('keyword', key);
    props.handleSetMovies();
  }

  return (
      <form className="search-form" name="search" onSubmit={handleSubmit}>
        <div className="search-form__text">
          <img className="search__icon" src={search} alt="Поиск"></img>
          <input className="search__field" placeholder="Фильм" value={key} name="movie-name" id="movie-name" type="text" onChange={handleChangeKey}></input>
          <button className="search__btn" href="/movies" type="submit">Найти</button>  
        </div>
        <FilterCheckbox 
          handleSearchShortMovies={props.handleSearchShortMovies}
          saveKeyAndSearch={saveKeyAndSearch}
          searchShortMovies={props.searchShortMovies}
          setcheckboxOn={props.setcheckboxOn}>
          
        </FilterCheckbox>      
      </form>
      
  )
}