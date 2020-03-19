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
  it(`Should call onAnswer on all input clicks`, () => {
    const answerCount = question.answers.length;

    for (let i = 0; i < answerCount; i++) {
      const onAnswer = jest.fn();

      const screenQuestionArtist = shallow(<ScreenQuestionArtist
        question={question}
        onAnswer={onAnswer}
        renderAudioPlayer={() => {}}
      />);

      const inputElements = screenQuestionArtist.find(`input`);

      const inputElement = inputElements.at(i);
      inputElement.simulate(`change`, mockEvent);
      expect(onAnswer).toHaveBeenCalled();
    }
  });

  it(`Should pass question and user answer to onAnswer on all input clicks`, () => {
    const answerCount = question.answers.length;

    for (let i = 0; i < answerCount; i++) {
      const userAnswer = question.answers[i];

      const onAnswer = jest.fn();

      const screenQuestionArtist = shallow(<ScreenQuestionArtist
        question={question}
        onAnswer={onAnswer}
        renderAudioPlayer={() => {}}
      />);

      const inputElements = screenQuestionArtist.find(`input`);
      const inputElement = inputElements.at(i);
      inputElement.simulate(`change`, mockEvent);

      expect(onAnswer).toHaveBeenCalledWith(question, userAnswer);
    }
  });
});
