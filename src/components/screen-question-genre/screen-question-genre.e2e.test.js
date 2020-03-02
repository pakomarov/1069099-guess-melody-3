import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ScreenQuestionGenre from './screen-question-genre.jsx';


configure({
  adapter: new Adapter()
});


const question = {
  type: ``,
  genre: ``,
  answers: [{
    src: ``,
    genre: `one`,
  }, {
    src: ``,
    genre: `two`,
  }, {
    src: ``,
    genre: `three`,
  }, {
    src: ``,
    genre: `four`,
  }],
};


it(`Should prevent default behavior of form submition`, () => {
  const onAnswer = jest.fn();

  const screenQuestionGenre = shallow(<ScreenQuestionGenre
    question={question}
    onAnswer={onAnswer}
  />);

  const formElement = screenQuestionGenre.find(`form`);
  const preventDefault = jest.fn();
  const mockEvent = {
    preventDefault
  };

  formElement.simulate(`submit`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(preventDefault).toHaveBeenCalledTimes(1);
});

it(`Should pass selected answers to onAnswer on form submition`, () => {
  const userAnswersMocks = [
    [false, false, false, false],
    [true, true, true, true],
    [true, false, true, false],
  ];

  userAnswersMocks.forEach((userAnswerMock) => {
    const onAnswer = jest.fn((...args) => [...args]);

    const screenQuestionGenre = shallow(<ScreenQuestionGenre
      onAnswer={onAnswer}
      question={question}
    />);

    userAnswerMock.forEach((isChecked, i) => {
      const inputElement = screenQuestionGenre.find(`input`).at(i);
      inputElement.simulate(`change`, {target: {checked: isChecked}});
    });

    const formElement = screenQuestionGenre.find(`form`);
    formElement.simulate(`submit`, {preventDefault() {}});

    expect(onAnswer).toHaveBeenCalled();
    expect(onAnswer).toHaveBeenCalledWith(question, userAnswerMock);
  });
});
