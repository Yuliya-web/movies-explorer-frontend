/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { NotFound } from '../NotFound/NotFound';
import {InfoTooltip} from '../InfoTooltip/InfoTooltip'
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { searchMovies , searchShortMovies , errorResultMessage, errors } from '../../utils/utils';
import * as apiAllMovies from '../../utils/MoviesApi';
import * as apiMain from '../../utils/MainApi';
import * as auth from '../../utils/auth';

export default function App() {

  const [loggedIn, setIsLoggedIn] = React.useState(false); // установка авторизации
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false); // информационный попап
  const [token, setToken] = React.useState(''); // установка токена
  const [resultMessage, setResultMessage] = React.useState(''); // сообщения при поиске фильмов
  const [infoMessage, setInfoMessage] = React.useState(''); // сообщения при регистрации и авторизации
  const [currentUser, setCurrentUser] = React.useState({name: '' , email: ''}); // данные юзера
  const [isLoading, setIsLoading] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const history = useHistory();
  const imageUrl = 'https://api.nomoreparties.co'

  // Вход 
  const handleLogin = () => {
    setIsLoggedIn(true);
  }

   // Авторизация
  function handleLoggedIn(email, password) {
    auth.authorize(email, password)
      .then(data => {
        localStorage.setItem('jwt', data.token);
        setToken(data.token);
        handleLogin();
        history.push('/movies');
      })
      .catch((err) => {
        
        if (err.status === 400) {
          console.log('Не передано одно из полей');
        } else if (err.status === 401) {
          console.log('Пользователь не найден, либо неверно указаны данные.');
        } else {
          console.log(`Ошибка: ${err.status}`);
        }
        setInfoMessage(errors(err));
      })
  }

  // регистрация пользователя
  function handleRegister(name, email, password) {
    auth.register(name, email, password)
    .then((res) => {
      if (res) {
        setIsLoggedIn(true)
        handleInfoTooltipOpen()
        handleLoggedIn(email, password);       
      }
    })
    .catch(() => {
      handleInfoTooltipOpen()
    })
  }

  // Выход
  function handleLogOut() {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push('/');
  }  

  // установка и проверка токена
  function tokenChecking() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setToken(jwt)
      auth.tokenCheck(jwt)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          history.push('/');
        } else {
          localStorage.removeItem("jwt");
        }
      });
    }
  }

  // функция открытия попапа при регистрации
  function handleInfoTooltipOpen() {
    setIsInfoTooltipOpen(true)
  }
  // закрытие попапа
  function closeAllPopups() {
    setIsInfoTooltipOpen(false)
  }

  React.useEffect(() => {
    tokenChecking()  
    getUserAndMovies()
  }, [loggedIn])

  function getUserAndMovies() {
    if (loggedIn) {
      const promises = [apiMain.getUserInfo(token), apiMain.getAllMovies(token)]
      setIsLoading(true);
      Promise.all(promises)
        .then((res) => {
          const [userInfo, moviesList] = res;
          setCurrentUser(userInfo);
          localStorage.setItem('saved-movies',JSON.stringify(moviesList));

          if (localStorage.getItem('movies') === null) {
            localStorage.setItem('movies', JSON.stringify(moviesList));
          } 
        })
        .catch((err) => {
          setInfoMessage(errors(err));
         // setIsInfoTooltipPopupOpen(true);
        })
        .finally(() => setIsLoading(false))
    }
  }

  // обновление информации о юзере
  function handleUpdateUser({name, email}) {
    apiMain.editProf({name, email}, token)
    .then((userData) => {  
      setCurrentUser({
        name: userData.name,
        email: userData.email
      }); 
      setInfoMessage('Данные профиля успешно изменены!');
      setTimeout(function() {setInfoMessage('')}, 2000) 
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // получение данных о всех фильмах внешнего сервиса и сохранение массива в localStorage
  function getMovies() {
    setIsLoading(true)    
    apiAllMovies.getAllMovies()      
      .then((movies) => {
        localStorage.setItem('movies', JSON.stringify(movies));
      })
      .catch(() => {
        localStorage.removeItem('movies');
        setResultMessage(errorResultMessage)
      })        
      .finally(() => setIsLoading(false))      
  }  

  // получение ключ-слова для поиска, введенного пользователеми и вывод массива фильмов с помощью функциЙ, описанных в utils
  function handleSetMovies() {
    if (localStorage.getItem('keyword') === null)  {
      localStorage.setItem('keyword', '');     
    } 
    if (localStorage.getItem('keyword').length > 0) {       
      getMovies();
      const moviesData = searchMovies(localStorage.getItem('keyword'));
      setMovies(moviesData);

      const shortMovies = searchShortMovies(moviesData);        
      if (shortMovies){
        setMovies(shortMovies);
        console.log('ok, set all');
        if (shortMovies.length === 0){
          setResultMessage('Ничего не найдено')
        }
      }
    }        
    else {
      setMovies([]);  
      if (movies === undefined) {
        setResultMessage(errorResultMessage)
      }
         
    }
    localStorage.removeItem('keyword');
  }

  React.useEffect(() => {
   // handleSearchShortMovies();
  },[]);

     // срабатывает чекбокс по короткометражкам и отрисовка полученного массива
  function handleSearchShortMovies() {
    console.log('')
    handleSetMovies();
    if (movies !== []) {
      const shortMovies = searchShortMovies(movies);        
      if (shortMovies){
        setMovies(shortMovies);
        console.log('ok, set');
      }  
    }    
  }
  // функция сохранения фильмов в SavedMovies
  function handleSaveMovies(movieCard) {
    apiMain.addNewCard({    
      country: movieCard.country,
      director: movieCard.director,
      duration: movieCard.duration.toString(),
      year: movieCard.year,
      description: movieCard.description,
      image: `${imageUrl}${movieCard.image.url}`,
      trailer: movieCard.trailerLink,
      nameRU: movieCard.nameRU,
      nameEN: movieCard.nameEN,
      thumbnail: `${imageUrl}${movieCard.image.formats.thumbnail.url}`,
      movieId: movieCard.id, 
    }, token)      
        .then((movieInfo) => {
          apiMain.getAllMovies(token)
            .then((moviesList) => {
              localStorage.setItem('saved-movies',JSON.stringify(moviesList))
            })
            .catch ((err) => {
              setInfoMessage(errors(err))
            })         
          //console.log(movieInfo);
        })
        .catch ((err) => {
          setInfoMessage(errors(err));
        })  
  }      
   // функция удаления фильмов из SavedMovies
  function handleDeleteMovies(movieCard) {
    apiMain.delMyCard(movieCard._id, token)      
        .then(() => {
          apiMain.getAllMovies(token)
            .then((moviesList) => {
              localStorage.setItem('saved-movies',JSON.stringify(moviesList))
              console.log('удалено');

            })
            .catch ((err) => {
              setInfoMessage(errors(err))
            })         
        })
        .catch ((err) => {
          setInfoMessage(errors(err));
        }) 
  }

  return (         
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app" >           

        < Switch >
          < Route exact path="/">
            < Main loggedIn={loggedIn}/>
          </Route>
          < ProtectedRoute exact path="/movies" 
            loggedIn={loggedIn} 
            component={Movies} 
            movies={movies} 
            handleSetMovies={handleSetMovies}              
            handleSearchShortMovies={handleSearchShortMovies}
            resultMessage={resultMessage}
            isLoading={isLoading}
            handleSaveMovies={handleSaveMovies}
            handleDeleteMovies={handleDeleteMovies}
          />
          < ProtectedRoute exact path="/saved-movies" 
            loggedIn={loggedIn} 
            component={SavedMovies} 
            movies={movies} 
            handleSetMovies={handleSetMovies}              
            resultMessage={resultMessage}
            isLoading={isLoading}
            handleSearchShortMovies={handleSearchShortMovies}
            handleDeleteMovies={handleDeleteMovies}
            searchShortMovies={searchShortMovies}
          />
          < ProtectedRoute exact path="/profile" 
            loggedIn={loggedIn} 
            component={Profile} 
            handleLogOut = {handleLogOut}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            handleUpdateUser={handleUpdateUser}
            infoMessage={infoMessage}
            setInfoMessage={setInfoMessage}
          />
                  

          < Route exact path="/signin">
              <Login 
                onLogin={handleLoggedIn}
                infoMessage = {infoMessage}
              />
          </Route>
          < Route exact path="/signup">
              <Register onRegister={handleRegister}/>
          </Route>

          < Route exact path="/*">
              < NotFound />
          </Route>

        </Switch>
        < InfoTooltip loggedIn={loggedIn} isOpen = {isInfoTooltipOpen} onClose = {closeAllPopups} />
      </div> 
    </CurrentUserContext.Provider> 
  );
}