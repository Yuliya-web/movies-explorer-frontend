/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useLocation } from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';

export function MoviesCard(props) {
  const [like, setLike] = React.useState(false);

  const currentUser = React.useContext(CurrentUserContext);
  const location = useLocation().pathname;
  const mins = `${props.movie.duration}`;  
  const urlForMoviesImage = props.movie.image !== null ?
   `https://api.nomoreparties.co${props.movie.image.url}` :
   'https://image.freepik.com/free-psd/movie-time-mock-up-in-frame-and-props_23-2148470105.jpg'
  
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.movie.owner === currentUser._id;

  // достанем массив сохраненных фильмов
  const savedList = JSON.parse(localStorage.getItem('saved-movies'));

  // Определяем, есть ли у карточки лайк, поставленный пользователем
  const isLiked =  savedList && savedList.some((item) => item.nameRU.includes(props.movie.nameRU));

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = like ? "mov-card__save-icon mov-card__save-icon_active": "mov-card__save-icon"

  React.useEffect(() => 
    (like || isLiked) ? setLike(true): setLike(false)
  ,[]);

  // перевод времени в часы
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    if (String(minutes).length === 1){
      return hours + ':0' + minutes;
    }
    else {
      return hours + ':' + minutes;
    }
  };

  // сохранение и удаление из "Сохраненные фильмы" по нажатию кнопки "Лайка"
  function saveOrDeleteMovies() {
    if (isLiked || like) {
      // Определяем карточку с лайком (из сохраненных), которую будем удалять
      const savedList = JSON.parse(localStorage.getItem('saved-movies'));
      const cardLiked =  savedList.find((item) => item.nameRU === props.movie.nameRU);

      props.handleDeleteMovies(cardLiked);
      setLike(false);

    }
    else {
      props.handleSaveMovies(props.movie);
      setLike(true);      
    }    
  }
  // удаление из "Сохраненные фильмы" по нажатию на крестик
  function deleteOnClose(evt) {
    
   props.handleDeleteMovies(props.movie);
   evt.target.closest('.mov-card').remove();
  }


  return ( 
  <>
    {location === '/movies'
      && <div className="mov-card">
          <div className="mov-card__text-and-icon">
            <div className="mov-card__text">
              <p className="mov-card__text-name">{props.movie.nameRU}</p>
              <p className="mov-card__text-time">{getTimeFromMins(mins)}</p>
            </div>
            <button alt="Закладка" id="icon-card" className={cardLikeButtonClassName} type="button" onClick={saveOrDeleteMovies}></button>
          </div>
          <a className="mov-card__image" href={props.movie.trailerLink} target="_blank" rel="noreferrer"><img alt="Фильм" className="mov-card__image" src={location === '/movies' ? urlForMoviesImage : props.movie.image}></img></a>        
        </div>     
      }
      {isOwn && location === '/saved-movies'
      &&<div className="mov-card">
          <div className="mov-card__text-and-icon">
            <div className="mov-card__text">
              <p className="mov-card__text-name">{props.movie.nameRU}</p>
              <p className="mov-card__text-time">{getTimeFromMins(mins)}</p>
            </div>
            <button alt="Закладка" id="icon-card" className={"mov-card__close-icon"} onClick={deleteOnClose} type="button" ></button>
          </div>
          <a className="mov-card__image" href={props.movie.trailer} target="_blank" rel="noreferrer"><img alt="Фильм" className="mov-card__image" src={location === '/movies' ? urlForMoviesImage : props.movie.image}></img></a>        
        </div>    
     }

     
      
  </>
  )
}