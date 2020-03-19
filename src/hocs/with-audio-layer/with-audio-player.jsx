import React, {PureComponent} from 'react';
import AudioPlayer from '../../components/audio-player/audio-player.jsx';


const withAudioPlayer = (Component) => {
  class WithAudioPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0,
      };

      this._handleToggle = this._handleToggle.bind(this);
    }

    _handleToggle(playerId) {
      this.setState((state) => {
        return {
          activePlayerId: state.activePlayerId === playerId ? -1 : playerId,
        };
      });
    }

    render() {
      const {activePlayerId} = this.state;

      return <Component
        {...this.props}
        renderAudioPlayer={(id, src) => {
          return (
            <AudioPlayer
              playerId={id}
              src={src}
              isPlaying={id === activePlayerId}
              onToggle={this._handleToggle}
            />
          );
        }}
      />;
    }
  }

  WithAudioPlayer.propTypes = {};

  return WithAudioPlayer;
};

export default withAudioPlayer;
