import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import QuestionArtistScreen from '../question-artist-screen/question-artist-screen.jsx';
import QuestionGenreScreen from '../question-genre-screen/question-genre-screen.jsx';


const welcomeButtonClickHandler = () => {};


const App = ({errorsCount}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <WelcomeScreen
            errorsCount={errorsCount}
            onWelcomeButtonClick={welcomeButtonClickHandler}
          />
        </Route>
        <Route exact path='/artist'>
          <QuestionArtistScreen />
        </Route>
        <Route exact path='/genre'>
          <QuestionGenreScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  errorsCount: PropTypes.number.isRequired
};


export default App;
