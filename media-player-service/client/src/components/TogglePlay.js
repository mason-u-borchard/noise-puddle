import React from 'react';
import ProgressBar from './ProgressBar.js';

import ButtonStyle from '../styled-components/Play-Pause.js';

class TogglePlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      isLoaded: false
    }
    this.toggle = this.toggle.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  toggle() {
    if (this.state.isLoaded) {
      const myAudio = document.getElementById('myAudio');
      myAudio.volume = 0.05;
      this.setState({ isPlaying: !this.state.isPlaying }, () => {
        this.state.isPlaying ? myAudio.play() : myAudio.pause();
      });
    }
  }

  componentDidMount() {
    const myAudio = document.getElementById('myAudio');
    myAudio.onloadedmetadata = (e) => this.updateTime(e);
    myAudio.ontimeupdate = (e) => this.updateTime(e);
    myAudio.oncanplay = () => this.setState({ isLoaded: true });
  }

  updateTime(e) {
    this.props.setTime(e.target.currentTime);
    this.props.setDuration(e.target.duration);
  }

  renderProgressBar() {
    <ProgressBar
      currentTime={this.state.currentTime}
      duration={this.state.duration} />
  }

  render() {
    const playImg = 'https://sdc-media-player.s3.us-east-2.amazonaws.com/buttons/playButton.png';
    const pauseImg = 'https://sdc-media-player.s3.us-east-2.amazonaws.com/buttons/pauseButton.png';
    return (
      <span>
        <audio
          id="myAudio"
          src={this.props.currentSong.song_url}
          preload="auto">
        </audio>
        <a onClick={this.toggle}>
          {this.state.isPlaying ?
            <ButtonStyle
              src={require = (pauseImg)} /> :
            <ButtonStyle
              src={require = (playImg)} />}
        </a>
        {this.renderProgressBar()}
      </span>
    )
  }
}

export default TogglePlay;