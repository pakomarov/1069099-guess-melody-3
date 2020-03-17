import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


class ScreenQuestionGenre extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userAnswers: this.props.question.answers.slice().fill(false),
    };

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    this.props.onAnswer(this.props.question, this.state.userAnswers);
  }

  render() {
    const {question: {genre, answers}, renderAudioPlayer} = this.props;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={this._handleFormSubmit}
        >
          {answers.map((answer, i) => (
            <div key={`${i}-${answer.src}`} className="track">
              {renderAudioPlayer(i, answer.src)}
              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox" name="answer"
                  value={`answer-${i}`}
                  id={`answer-${i}`}
                  checked={this.state.userAnswers[i]}
                  onChange={(evt) => {
                    const value = evt.target.checked;

                    this.setState((prevState) => {
                      return {userAnswers: [...prevState.userAnswers.slice(0, i), value, ...prevState.userAnswers.slice(i + 1)]};
                    });
                  }}
                />
                <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
              </div>
            </div>
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}


ScreenQuestionGenre.propTypes = {
  question: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired
    })).isRequired,
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
  renderAudioPlayer: PropTypes.func.isRequired,
};


export default ScreenQuestionGenre;
