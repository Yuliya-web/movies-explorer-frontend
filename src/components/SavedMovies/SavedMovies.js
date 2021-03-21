import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';

export function SavedMovies(props) {
  const [searchSubmit, setSearchSubmit] = React.useState(false);
  const [checkboxOn, setcheckboxOn] = React.useState(false);


  
  return(
    <>
      < Header loggedIn={props.loggedIn} />
      <main className='main main_for-cardlist'>
        <SearchForm
          handleSetMovies={props.handleSetMovies} 
          handleSearchShortMovies={props.handleSearchShortMovies}
          setSearchSubmit={setSearchSubmit}
          searchShortMovies={props.searchShortMovies}
          setcheckboxOn={setcheckboxOn}>
        </SearchForm>
        
        <MoviesCardList 
          movies={props.movies} 
          searchSubmit={searchSubmit}
          setSearchSubmit={setSearchSubmit}
          handleDeleteMovies={props.handleDeleteMovies}
          handleSetMovies={props.handleSetMovies} 
          searchShortMovies={props.searchShortMovies}
          checkboxOn={checkboxOn}
          getUserAndMovies={props.getUserAndMovies}>
          
        </MoviesCardList>
      </main>
      < Footer />
    </>  
  )
}