import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';


class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = createRef();

    this.state = {
      isLoading: true,
    };

    this._handleButtonClick = this._handleButtonClick.bind(this);
    this._handleCanPlayThrough = this._handleCanPlayThrough.bind(this);
  }

  componentDidUpdate() {
    const audio = this._audioRef.current;

    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  _handleButtonClick() {
    const {playerId, onToggle} = this.props;

    onToggle(playerId);
  }

  _handleCanPlayThrough() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    const {src, isPlaying} = this.props;
    const {isLoading} = this.state;

    return (
      <>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={this._handleButtonClick}
        />
        <div className="track__status">
          <audio
            ref={this._audioRef}
            src={src}
            onCanPlayThrough={this._handleCanPlayThrough}
          />
        </div>
      </>
    );
  }
}


AudioPlayer.propTypes = {
  playerId: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};


export default AudioPlayer;
