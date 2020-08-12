import React, { useState } from 'react';
import moment from 'moment';
import TogglePlay from './TogglePlay.js';
import ProgressBar from './ProgressBar.js';

// styles
import Container from '../styled-components/Container.js';
import Image from '../styled-components/Image.js';
import Date_Genre_Style from '../styled-components/Date-Genre.js';
import Band from '../styled-components/BandName.js';
import SongStyle from '../styled-components/SongName.js';
import NameContainer from '../styled-components/SongBandContainer.js';

const MediaPlayer = ({ currentSong }) => {
  const now = moment();
  let bruh;
  if (currentSong.release_date) {
    bruh = currentSong.release_date.split('-').join(' ');
  }
  const created = moment(bruh);
  const timeElapsed = created.from(now);

  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <Container>
      <Image src={`${currentSong.album_image}.jpg`} />
      <Date_Genre_Style>
        {timeElapsed}<br />
        {currentSong.music_genre}
      </Date_Genre_Style>
      <NameContainer>
        <TogglePlay
          currentSong={currentSong}
          setTime={setTime}
          setDuration={setDuration}
        />
        <Band>{currentSong.band_name}</Band>
        <SongStyle>{currentSong.song_name}</SongStyle>
      </NameContainer>
      <ProgressBar
        currentTime={time}
        duration={duration}
      />
    </Container>
  )
}

export default MediaPlayer;