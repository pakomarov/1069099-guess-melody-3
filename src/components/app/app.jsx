import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import ScreenWelcome from '../screen-welcome/screen-welcome.jsx';
import {GameType} from '../../const.js';
import ScreenGame from '../screen-game/screen-game.jsx';
import ScreenQuestionArtist from '../screen-question-artist/screen-question-artist.jsx';
import ScreenQuestionGenre from '../screen-question-genre/screen-question-genre.jsx';


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1
    };

    this._handleWelcomeButtonClick = this._handleWelcomeButtonClick.bind(this);
    this._handleQuestionArtistAnswer = this._handleQuestionArtistAnswer.bind(this);
    this._handleQuestionGenreAnswer = this._handleQuestionGenreAnswer.bind(this);
  }

  _handleWelcomeButtonClick() {
    this.setState({
      step: 0
    });
  }

  _finishStep() {
    this.setState((prevState) => ({
      step: prevState.step + 1
    }));
  }

  _handleQuestionArtistAnswer() {
    this._finishStep();
  }

  _handleQuestionGenreAnswer() {
    this._finishStep();
  }

  _renderGameScreen() {
    const {errorsCount, questions} = this.props;
    const {step} = this.state;

    if (step === -1 || step >= questions.length) {
      return (
        <ScreenWelcome
          errorsCount={errorsCount}
          onWelcomeButtonClick={this._handleWelcomeButtonClick}
        />
      );
    }

    const question = questions[step];

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <ScreenGame
              gameType={question.type}
            >
              <ScreenQuestionArtist
                question={question}
                onAnswer={this._handleQuestionArtistAnswer}
              />
            </ScreenGame>
          );
        case GameType.GENRE:
          return (
            <ScreenGame
              gameType={question.type}
            >
              <ScreenQuestionGenre
                question={question}
                onAnswer={this._handleQuestionGenreAnswer}
              />
            </ScreenGame>
          );
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderGameScreen()}
          </Route>
          <Route exact path='/artist'>
            <ScreenGame
              gameType={questions[1].type}
            >
              <ScreenQuestionArtist
                question={questions[1]}
                onAnswer={() => {}}
              />
            </ScreenGame>
          </Route>
          <Route exact path='/genre'>
            <ScreenGame
              gameType={questions[0].type}
            >
              <ScreenQuestionGenre
                question={questions[0]}
                onAnswer={() => {}}
              />
            </ScreenGame>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
  })).isRequired,
};


export default App;
