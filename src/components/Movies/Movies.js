/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useLocation } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { ButtonElse } from '../ButtonElse/ButtonElse';
import { Preloader } from '../Preloader/Preloader';

export function Movies(props) {
  const [isButtonActive, setIsButtonActive] = React.useState(false);
  const [renderedMovies, setRenderedMovies] = React.useState([]);  
  const [renderedMoviesCount, setRenderedMoviesCount] = React.useState(12);
  const [addedMoviesCount, setAddedMoviesCount] = React.useState(0);
  const windowWidth = window.innerWidth;

  const location = useLocation().pathname;

  function moviesCount() {
    if (windowWidth >= 1280) {
      setRenderedMoviesCount(12);
      setAddedMoviesCount(3);
    } else if (windowWidth < 1279 && windowWidth > 766) {
      setRenderedMoviesCount(8);
      setAddedMoviesCount(2);
    } else {
      setRenderedMoviesCount(5);
      setAddedMoviesCount(2);
    }
  }

  React.useEffect(() => {
    moviesCount();
  }, [windowWidth]);
  
  function handleBtnElse() {
    setRenderedMovies(props.movies.slice(0, renderedMovies.length + addedMoviesCount));
    console.log(renderedMovies);
    if (renderedMovies.length >= props.movies.length - addedMoviesCount) {
      setIsButtonActive(false);
    }
  }

  React.useEffect(() => {
    if (location === '/movies') {
      setRenderedMovies(props.movies.slice(0, renderedMoviesCount));
      if (props.movies.length <= renderedMoviesCount) {
        setIsButtonActive(false);
      } else {
        setIsButtonActive(true);
      }
    } else {
      setRenderedMovies(props.movies);
      setIsButtonActive(false);
    }
  }, [props.movies]);

  
  

  return(
    <>
      < Header loggedIn={props.loggedIn}
      />
      <main className='main main_for-cardlist'>
        <SearchForm 
          handleSetMovies={props.handleSetMovies} 
          handleSearchShortMovies={props.handleSearchShortMovies}>
        </SearchForm>
        {props.isLoading ? 
        < Preloader /> : 
        < MoviesCardList 
            handleDeleteMovies={props.handleDeleteMovies}
            handleSaveMovies={props.handleSaveMovies}
            handleSetMovies={props.handleSetMovies}   
            renderedMovies={renderedMovies}
            resultMessage={props.resultMessage}
            movies={props.movies} >
        </ MoviesCardList >}
             

        <ButtonElse 
          isButtonActive={isButtonActive} 
          handleBtnElse={handleBtnElse}>
        </ButtonElse>
      </main>
      < Footer />
    </>  
  )
}