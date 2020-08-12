import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import MediaPlayer from './MediaPlayer.js';

class MediaFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3305/songs/9999999')
      .then(music => {
        const song = {
          song_name: music.data.title,
          music_genre: music.data.genre,
          band_name: music.data.name,
          album_image: music.data.art,
          song_url: music.data.url,
          release_date: music.data.release
        }
        this.setState({
          currentSong: song
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>
          <MediaPlayer
            currentSong={this.state.currentSong}
          />
        </div>
      </div>
    )
  }
}

export default MediaFeed;