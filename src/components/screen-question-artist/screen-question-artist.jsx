import React from 'react';
import PropTypes from 'prop-types';


const ScreenQuestionArtist = ({question, onAnswer, renderAudioPlayer}) => {
  const {song, answers} = question;
  const id = 0;

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          {renderAudioPlayer(id, song.src)}
        </div>
      </div>

      <form className="game__artist">
        {answers.map((answer, i) => (
          <div key={answer.artist} className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer"
              value={`artist-${i}`}
              id={`answer-${i}`}
              onChange={(evt) => {
                evt.preventDefault();
                onAnswer(question, answer);
              }}
            />
            <label className="artist__name"
              htmlFor={`answer-${i}`}
            >
              <img className="artist__picture"
                src={answer.picture}
                alt={answer.artist}
              />
              {answer.artist}
            </label>
          </div>
        ))}
      </form>
    </section>
  );
};


ScreenQuestionArtist.propTypes = {
  question: PropTypes.shape({
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    })).isRequired,
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
  renderAudioPlayer: PropTypes.func.isRequired,
};


export default ScreenQuestionArtist;
