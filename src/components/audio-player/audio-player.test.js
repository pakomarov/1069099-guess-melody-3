import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player.jsx';


describe(`AudioPlayer rendering`, () => {
  it(`Should match snapshot of AudioPlayer when isPlaying is false`, () => {
    const tree = renderer
      .create(<AudioPlayer
        playerId={0}
        src={``}
        isPlaying={false}
        onToggle={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should match snapshot of AudioPlayer when isPlaying is true`, () => {
    const tree = renderer
      .create(<AudioPlayer
        playerId={0}
        src={``}
        isPlaying={true}
        onToggle={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
