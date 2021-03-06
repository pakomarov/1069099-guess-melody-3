import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ScreenWelcome from './screen-welcome.jsx';


Enzyme.configure({
  adapter: new Adapter(),
});


it(`Should call onWelcomeButtonClick`, () => {
  const onWelcomeButtonClick = jest.fn();

  const screenWelcome = shallow(
      <ScreenWelcome
        errorsCount={3}
        onWelcomeButtonClick={onWelcomeButtonClick}
      />
  );

  const welcomeButton = screenWelcome.find(`button.welcome__button`);

  welcomeButton.props().onClick();

  expect(onWelcomeButtonClick).toHaveBeenCalledTimes(1);
});
