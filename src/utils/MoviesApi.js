const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

function getResponseData (res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
}

export const getAllMovies = () => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(getResponseData);
}
