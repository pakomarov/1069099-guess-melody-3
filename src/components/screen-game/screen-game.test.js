import React from 'react';
import renderer from 'react-test-renderer';
import ScreenGame from './screen-game.jsx';
import {GameType} from '../../const.js';


const children = <div></div>;


describe(`ScreenGame rendering`, () => {
  it(`Should match snapshot of ScreenGame with type set on GameType.ARTIST`, () => {
    const tree = renderer
      .create(
          <ScreenGame
            gameType={GameType.ARTIST}
          >
            {children}
          </ScreenGame>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should match snapshot of ScreenGame with type set on GameType.GENRE`, () => {
    const tree = renderer
      .create(
          <ScreenGame
            gameType={GameType.GENRE}
          >
            {children}
          </ScreenGame>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

