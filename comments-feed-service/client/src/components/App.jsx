import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import $ from 'jquery';
import axios from 'axios';

import Artist from './Artist.jsx';
import Song from './Song.jsx';
import Comments from './Comments.jsx';
import LikeBar from './LikeBar.jsx';
import CommentForm from './CommentForm.jsx';

const AppBody = styled.div`
  max-width: 845px;
  min-width: 640px;
  color: #000;
  margin: 0;
  padding: 20px;
  display: block;
  border-right: 1px solid #f2f2f2;
  height: 100vh;
  z-index: -1;
  background-color: #ffffff;
`

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  background-position: 50% 50%;
  background-size: cover;
  background-image: url("https://sdc-comments-pictures.s3.amazonaws.com/comments/image1000.jpg");
`

const Left = styled.div`
  font: 12px/1.4 Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  margin-top: 60px;
  padding: 0 20px;
  display: block;
  position: relative;
  top: 0;
  left: 0;
`

const Right = styled.div`
  font: 12px/1.3em Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  margin-top: 60px;
  padding: 0 20px 20px 20px;
  display: block;
  position: relative;
  top: 0;
  left: 140px;
  right: 0;
  width: 100vw;
  max-width: 685px;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: {},
      song: {},
      comments: [],
      commentInput: '',
      url: 'http://34.203.236.60:3005/'
    }
    this.getSong = this.getSong.bind(this);
    this.getArtist = this.getArtist.bind(this);
    this.getComments = this.getComments.bind(this);
    this.choosePort = this.choosePort.bind(this);
  }

  componentDidMount() {
    this.choosePort();
    this.getSong();
    this.getArtist();
  }

  choosePort() {
    let local = true; // choose localhost or EC2

    if (!local) {
      this.setState({
        url: 'http://3.14.6.132:3005/'
      })
    } else {
      this.setState({
        url: 'http://localhost:3005/'
      })
    }
  }

  getSong() {
    // console.log(this.state.url + 'song')
    axios.get(this.state.url + 'songs/1999899')
    .then((result) => {
      console.log(result)
      this.setState({
        song: result.data
      })
    })
  }

  getArtist() {
    // console.log(this.state.url + 'artist')
    axios.get(this.state.url + 'artists')
    .then((result) => {
      // console.log(result)
      let obj = result.data;
      // console.log(obj.followers_count)
      obj.followers_count = obj.followers_count.toString().slice(0, -3).concat('K')
      this.setState({
        artist: obj
      })
    })
  }

  getComments() {
    // console.log(this.state.url + 'comments')
    axios.get(this.state.url + 'comments')
    .then((result) => {
      // console.log(result)
      this.setState({
        comments: result.data
      })
    })
  }

  render() {
    return (<AppBody>
      <LikeBar song={this.state.song} />
      <Left>
        <Artist artist={this.state.artist} />
      </Left>
      <Right>
        <Song song={this.state.song} />
        <Comments url={this.state.url} getComments={this.getComments} />
      </Right>
    </AppBody>)
  }
}

export default App;