import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import {GameType} from '../../const.js';
import QuestionArtistScreen from '../question-artist-screen/question-artist-screen.jsx';
import QuestionGenreScreen from '../question-genre-screen/question-genre-screen.jsx';


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
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorsCount={errorsCount}
          onWelcomeButtonClick={this._handleWelcomeButtonClick}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <QuestionArtistScreen
              question={question}
              onAnswer={this._handleQuestionArtistAnswer}
            />
          );
        case GameType.GENRE:
          return (
            <QuestionGenreScreen
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
            <QuestionArtistScreen
              question={questions[1]}
              onAnswer={() => {}}
            />
          </Route>
          <Route exact path='/genre'>
            <QuestionGenreScreen
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
