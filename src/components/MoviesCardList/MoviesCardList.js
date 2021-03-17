/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { MoviesCard } from '../MoviesCard/MoviesCard';

export function MoviesCardList(props) {
  const location = useLocation().pathname;

  React.useEffect(() => {
    getSavedMassive();  
    location === '/saved-movies' && props.setSearchSubmit(false);
    handleCheckBox();
  },[]);

  function handleCheckBox() {
    if (props.checkboxOn === false) {
     getSavedMassive(); 
    }
  }

  // получение массива сохраненных карточек для страницы "Сохраненные фильмы"
  function getSavedMassive() {
    const massive = JSON.parse(localStorage.getItem('saved-movies'));
   // console.log(massive);
    
    if (props.checkboxOn === true) {
      const massiveShort = props.searchShortMovies(massive);
      return massiveShort;
    }
    else if (props.checkboxOn === false) {
      return massive;
     }
  }
  const newMassive = getSavedMassive()
  
  // выбор, что отрисовать на странице saved-movies: сохраненные фильмы или результаты их поиска по сабмиту
  const searchSubmitHandle = () => 
    props.searchSubmit ? filteredLikedMovies : renderLikedMovies;    

   // отрисовка сохраненных карточек
  const renderLikedMovies = (newMassive === undefined || newMassive === null || newMassive.length === 0) ?
  <p className="card-list__text">{}</p>  :
  newMassive.map((movie) => ( <MoviesCard           
      movie={movie}  
      owner={movie.owner}
      key={movie._id}
      handleDeleteMovies={props.handleDeleteMovies}
      handleSetMovies={props.handleSetMovies}   

      />           
  ))

 // отрисовка сохраненных карточек после поиска по ним по слову
  const filteredLikedMovies = (props.movies === undefined || props.movies === null || props.movies.length === 0) ?
  <p className="card-list__text">{}</p>  :
  props.movies.map((movie) => ( <MoviesCard           
      movie={movie}  
      owner={movie.owner}
      key={movie._id}
      handleDeleteMovies={props.handleDeleteMovies}
      handleSetMovies={props.handleSetMovies}   

      />           
  ))

  // отрисовка всех фильмов со стороннего API
  const renderMovies = (props.renderedMovies === undefined || props.renderedMovies.length === 0) ?
  <p className="card-list__text">{props.resultMessage}</p>  :
  props.renderedMovies.map((movie) => ( <MoviesCard                 
      movie={movie}  
      key={movie._id}
      handleSaveMovies={props.handleSaveMovies}
      handleDeleteMovies={props.handleDeleteMovies}
      handleSetMovies={props.handleSetMovies}   

      />           
  ))

  return (
    
      <div className="card-list" id={location === '/movies' ? 'allMovies' : 'likedMovies'}>
        {location === '/movies' ? renderMovies : searchSubmitHandle() }            
      </div>
  )
}