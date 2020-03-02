import React from 'react';
import renderer from 'react-test-renderer';
import ScreenWelcome from './screen-welcome.jsx';


it(`Should match snapshot of ScreenWelcome`, () => {
  const tree = renderer
    .create(<ScreenWelcome
      errorsCount={3}
      onWelcomeButtonClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
