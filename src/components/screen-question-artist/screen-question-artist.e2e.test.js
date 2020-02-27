import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ScreenQuestionArtist from './screen-question-artist.jsx';


configure({
  adapter: new Adapter()
});


const mockEvent = {
  preventDefault() {}
};

const question = {
  type: ``,
  song: {
    artist: ``,
    src: ``,
  },
  answers: [{
    picture: `pic-one`,
    artist: `one`,
  }, {
    picture: `pic-two`,
    artist: `two`,
  }, {
    picture: `pic-three`,
    artist: `three`,
  }],
};


describe(`Input behavior`, () => {
  it(`Should call onAnswer on input clicks`, () => {
    const onAnswer = jest.fn();

    const answerCount = question.answers.length;

    const screenQuestionArtist = shallow(<ScreenQuestionArtist
      question={question}
      onAnswer={onAnswer}
    />);

    const inputElements = screenQuestionArtist.find(`input`);

    for (let i = 0; i < answerCount; i++) {
      const inputElement = inputElements.at(i);
      inputElement.simulate(`change`, mockEvent);
      expect(onAnswer).toHaveBeenCalledTimes(i + 1);
    }
  });

  it(`Should pass question and chosen answer to onAnswer on input clicks`, () => {
    const onAnswer = jest.fn();

    const answerCount = question.answers.length;

    const screenQuestionArtist = shallow(<ScreenQuestionArtist
      question={question}
      onAnswer={onAnswer}
    />);

    const inputElements = screenQuestionArtist.find(`input`);

    for (let i = 0; i < answerCount; i++) {
      const inputElement = inputElements.at(i);
      inputElement.simulate(`change`, mockEvent);
      const userAnswer = question.answers[i];
      expect(onAnswer.mock.calls[i][0]).toMatchObject(question);
      expect(onAnswer.mock.calls[i][1]).toMatchObject(userAnswer);
    }
  });
});
