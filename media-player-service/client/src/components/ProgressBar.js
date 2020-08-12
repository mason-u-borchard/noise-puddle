import React from 'react';
import moment from 'moment';

// styles
import ProgressBarStyles from '../styled-components/ProgressBar.js';
import CurrentTimeStyle from '../styled-components/CurrentTimeStyle.js';
import DurationStyle from '../styled-components/DurationStyle.js';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: []
    }
  }

  componentDidMount() {
    const bars = [];
    for (let i = 0; i < 283; i++) {
      let randomBars = Math.random() * 100
      this.state.height.push(randomBars)
    }
  }

  render() {
    const progressPercent = this.props.currentTime / this.props.duration;
    const containerWidth = 850;
    const progressWidth = containerWidth * progressPercent;

    const currentSongDuration = this.props.duration;
    const songDurationFormatted = moment.utc(currentSongDuration * 1000).format('mm:ss');

    const currentSongTime = this.props.currentTime;
    const currentSongTimeFormatted = moment.utc(currentSongTime * 1000).format('mm:ss');

    const bars = [];
    const progress = [];
    for (let i = 0; i < 283; i++) {
      bars.push(
        <div style={{
          display: 'inline-block',
          width: '2px',
          height: this.state.height[i + 1] + 'px',
          background: 'white',
          marginRight: '1px',
          position: 'relative',
        }}></div>
      )
      progress.push(
        <div style={{
          display: 'inline-block',
          height: this.state.height[i + 1] + 'px',
          width: '2px',
          backgroundImage: 'linear-gradient(-60deg, #ff5858 0%, #f09819 100%)',
          position: 'relative',
          marginRight: '1px',
          marginBottom: '-83.5px',
          zIndex: '1',
        }}></div>
      )
    }

    const difference = 0 + progressWidth
    return (
      <ProgressBarStyles>
        <CurrentTimeStyle>
          {currentSongTimeFormatted}
        </CurrentTimeStyle>
        <div className="progress" style={{
          width: difference + 'px',
          position: 'absolute',
          background: 'none',
          height: '100px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}>
          {progress}
        </div>
        <div style={{
          position: 'absolute',
        }}>
          {bars}
        </div>
        <DurationStyle>
          {songDurationFormatted}
        </DurationStyle>
      </ProgressBarStyles>
    )
  }
}

export default ProgressBar;