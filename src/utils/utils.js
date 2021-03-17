import React from 'react';

// фильтрация фильмов по названию по нажатию на кнопку
export function searchMovies ( key ) {
  if (document.getElementById("allMovies")) {
    const movies = JSON.parse(localStorage.getItem('movies'));
    if (movies) {
      const findMovies = movies.filter(item => item.nameRU.toLowerCase().includes(key.toLowerCase())); 
      return findMovies;
    }  
  }
  else {
    const savedMovies = JSON.parse(localStorage.getItem('saved-movies'));
    if (savedMovies) {
      const findMovies = savedMovies.filter(item => item.nameRU.toLowerCase().includes(key.toLowerCase())); 
      return findMovies;
    }
  }
}

// фильтрация коротрометражек чекбоксом
export function searchShortMovies(massive) {
  if(massive) {
    if(localStorage.getItem('check') === "on" && massive.length > 0){
    const findMoviesShort = massive.filter(item => item.duration <= 41);
    console.log('отфильтровано по времени');
    return( findMoviesShort );
  }
  if (massive.length === 0) {
    console.log('на вход подан пустой массив');
    return massive;    
  }
  }
  
}

//  валидация для форм
export function useFormValidator() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValidity, setisValidity] = React.useState(false);

  function handleChange(evt) {
    setValues({ ...values, [evt.target.name]: evt.target.value });
    setErrors({ ...errors, [evt.target.name]: evt.target.validationMessage });
    setisValidity(evt.target.closest("form").checkValidity());
  }

  function resetForm() {
    setValues({});
    setErrors({});
    setisValidity(false);
  }
  return {
    values, errors, isValidity, handleChange, resetForm,
  };
}

export const errorResultMessage = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"

// тексты ошибок
export function errors(err) {
  if (err.status === 400) {
    return `Ошибка ${err.status}. Не верно заполнено одно из полей.`;
  } else if (err.code === 401) {
    return `Ошибка ${err.status}. Вы ввели неправильный логин или пароль.`;
  } else if (err.status === 403) {
    return `Ошибка ${err.status}. Токен не передан или передан не в том формате.`;
  } else if (err.status === 404) {
    return `Ошибка ${err.status}. Данные не найдены.`;
  } else if (err.status === 409) {
    return `Ошибка ${err.status}. Пользователь с таким email уже существует.`;
  } else if (err.status === 429) {
    return `Ошибка ${err.status}. Слишком много запросов. Попробуйте позже.`;
  } else if (err.status === 500) {
    return `Ошибка ${err.status}. На сервере произошла ошибка.`;
  } else {
    return `Ошибка данных`;
  }
}
