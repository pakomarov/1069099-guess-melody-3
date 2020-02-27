import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import ScreenWelcome from '../screen-welcome/screen-welcome.jsx';
import {GameType} from '../../const.js';
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
            <ScreenQuestionArtist
              question={question}
              onAnswer={this._handleQuestionArtistAnswer}
            />
          );
        case GameType.GENRE:
          return (
            <ScreenQuestionGenre
              question={question}
              onAnswer={this._handleQuestionGenreAnswer}
            />
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
            <ScreenQuestionArtist
              question={questions[1]}
              onAnswer={() => {}}
            />
          </Route>
          <Route exact path='/genre'>
            <ScreenQuestionGenre
              question={questions[0]}
              onAnswer={() => {}}
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
