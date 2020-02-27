import React from 'react';
import ReactDOM from 'react-dom';
import questions from './mocks/questions.js';
import {ERRORS_COUNT} from './mocks/settings.js';
import App from './components/app/app.jsx';


ReactDOM.render(
    <App
      errorsCount={ERRORS_COUNT}
      questions={questions}
    />,
    document.querySelector(`#root`)
);
