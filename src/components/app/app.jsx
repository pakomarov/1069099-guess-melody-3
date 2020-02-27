import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import QuestionArtistScreen from '../question-artist-screen/question-artist-screen.jsx';
import QuestionGenreScreen from '../question-genre-screen/question-genre-screen.jsx';


const welcomeButtonClickHandler = () => {};


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {errorsCount, questions} = this.props;

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
            <QuestionArtistScreen
              question={questions[1]}
            />
          </Route>
          <Route exact path='/genre'>
            <QuestionGenreScreen
              question={questions[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};


export default App;
