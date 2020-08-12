import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import svg from 'react-inlinesvg';

import { IoMdPeople } from 'react-icons/io';
import { MdPersonAdd, MdReportProblem } from 'react-icons/md';
import { GiSoundWaves } from 'react-icons/gi';
import { FaUserCheck } from 'react-icons/fa';


const ArtistPanel = styled.div`
  display: block;
  width: 120;
  height: 250;
  position: absolute;
  top: 0;
  left: 0;
`

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
  background-image: url('https://sdc-comments-pictures.s3.amazonaws.com/comments/image1000.jpg');
  background-position: 50% 50%;
  background-size: cover;
`

const ArtistName = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 100;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  line-height: 1.3;
  margin: 6px 0 0;
  cursor: pointer;
`

const ClickyBar = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 5px;
  padding: 0;
  color: #999;
  font-size: 11px;
`

const Followers = styled.div`
  width: 50%;
`

const Tracks = styled.div`
  width: 50%;
`
const Follow = styled.button`
  min-width: 25px;
  background-color: ${(props) => props.following ? "none" : "#f50" };
  border: ${(props) => props.following ? "1px solid #f50" : "1px solid #e5e5e5" };
  color: ${(props) => props.following ? "#f50" : "#fff" };
  font-size: 11px;
  padding: 2px 9px 2px 8px;
  margin: 0px;
  height: 22px;
  line-height: 16px;
  border-radius: 3px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
  text-align: center;
  vertical-align: center;
  box-sizing: border-box;
`

const Report = styled.div`
  height: 22px;
  text-align: left;
  vertial-align: bottom;
  font-size: 11px;
  font-weight: 100;
  margin-top: 30px;
  padding: 0;
`

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       following: false,
       followText: 'Follow',
       followIcon: <MdPersonAdd />
    }
    this.toggleFollow = this.toggleFollow.bind(this);
  }

  toggleFollow () {
    this.setState({
      following: !this.state.following
    })

    this.setState({
      followText: this.state.following ? 'Follow' : 'Following',
      followIcon: this.state.following ? <MdPersonAdd /> : <FaUserCheck />
    })

  }

  render() {
    return (
      <ArtistPanel>
        <Avatar />
        <ArtistName>{this.props.artist.name}</ArtistName>
        <ClickyBar>
        <Followers><IoMdPeople /> {this.props.artist.followers_count}</Followers>
        <Tracks><GiSoundWaves /> {this.props.artist.tracks_count}</Tracks>
        </ClickyBar>
        <Follow id="follow-button" onClick={ this.toggleFollow } following={ this.state.following }>{ this.state.followIcon }  { this.state.followText }</Follow>
        <Report><MdReportProblem /> Report</Report>
      </ArtistPanel>
    )
  }
};

export default Artist;