import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player.jsx';


configure({
  adapter: new Adapter()
});


describe(`Behavior of track button toggling`, () => {
  it(`Should call provided onToggle callback on track button click`, () => {
    const onToggle = jest.fn();

    const audioPlayer = shallow(<AudioPlayer
      playerId={0}
      src={``}
      isPlaying={false}
      onToggle={onToggle}
    />);

    const trackButtonElement = audioPlayer.find(`.track__button`);

    trackButtonElement.simulate(`click`);

    expect(onToggle).toHaveBeenCalled();
  });

  it(`Should pass playerId to provided onToggle callback on track button click`, () => {
    const playerId = 13245;
    const onToggle = jest.fn();

    const audioPlayer = shallow(<AudioPlayer
      playerId={playerId}
      src={``}
      isPlaying={false}
      onToggle={onToggle}
    />);

    const trackButtonElement = audioPlayer.find(`.track__button`);

    trackButtonElement.simulate(`click`);

    expect(onToggle).toHaveBeenCalledWith(playerId);
  });
});
