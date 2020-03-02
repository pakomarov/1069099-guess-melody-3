import React from 'react';
import renderer from 'react-test-renderer';
import ScreenQuestionGenre from './screen-question-genre.jsx';


const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }],
};


it(`Should match snapshot of ScreenQuestionGenre`, () => {
  const tree = renderer
    .create(<ScreenQuestionGenre
      question={question}
      onAnswer={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
