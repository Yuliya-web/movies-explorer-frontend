import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { SearchForm } from '../SearchForm/SearchForm';
//import { Preloader } from '../Preloader/Preloader';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { ButtonElse } from '../ButtonElse/ButtonElse';


export function Movies() {
  
  return(
    <>
      < Header loggedIn="true" />
      <main className='main main_for-cardlist'>
        <SearchForm></SearchForm>
        
        <MoviesCardList></MoviesCardList>
        <ButtonElse></ButtonElse>
      </main>
      < Footer />
    </>  
  )
}