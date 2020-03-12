import React from 'react';
import PropTypes from 'prop-types';
import {GameType} from '../../const.js';


const ScreenGame = ({gameType, children}) => {
  return (
    <section className={`game game--${gameType}`}>
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}
          />
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      {children}
    </section>
  );
};


ScreenGame.propTypes = {
  gameType: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE])
    .isRequired,
  children: PropTypes.PropTypes.node.isRequired,
};


export default ScreenGame;
