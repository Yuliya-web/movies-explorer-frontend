/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {Main} from '../Main/Main';
import {Movies} from '../Movies/Movies';
import {SavedMovies} from '../SavedMovies/SavedMovies';
import {Profile} from '../Profile/Profile';
import {NotFound} from '../NotFound/NotFound';
// import {InfoTooltip} from '../InfoTooltip/InfoTooltip'
import {Login} from '../Login/Login';
import {Register} from '../Register/Register';


export default function App() {



  return (         
        
    <div className="app">           

      < Switch >

        < Route exact path="/">
            < Main />
        </Route>
        
        < Route exact path="/movies">
            < Movies />
        </Route>

        < Route exact path="/saved-movies">
            < SavedMovies />
        </Route>

        < Route exact path="/profile">
            < Profile />
        </Route>

        < Route exact path="/signin">
            <Login
               // handleInfoTooltipOpen = {handleInfoTooltipOpen}
            />
        </Route>
        < Route exact path="/signup">
            <Register />
        </Route>

        < Route exact path="/404">
            < NotFound />
        </Route>

      </Switch>

    </div>  
  );
}

// < InfoTooltip loggedIn={loggedIn} isOpen = {isInfoTooltipOpen} onClose = {closeAllPopups} />