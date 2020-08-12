import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StatCounts from './StatCounts.jsx';
import Links from './Links.jsx';
import About from './About.jsx';
import LikedSongs from './LikedSongs.jsx';

import styled from 'styled-components';

///////////////// STYLED COMPONENTS ////
const SidebarContainer = styled.div`
  top: 401px;
  font: 12px/1.4 Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  display: block;
  color: #333;
  position: absolute;
  top: 30px;
  bottom: 0;
  right: 0;
  width: 300px;

`;

const StatTable = styled.table`
  width: 100%;
  margin-bottom: 14px;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
  border-collapse: collapse;
  border-spacing: 0;
  display: table;
  border-color: grey;
`;

const Tbody = styled.tbody`
  display: table-row-group;
  vertical-alight: middle;
  border-color: inherit;
`;

const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

const AboutDiv = styled.div`
  margin-bottom: 20px;
  display: block;
  font: 12px/1.4 Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  color: #333;
`;

const LinksDiv = styled.div`
  fontSize: 12px;
  display: block;
`;

const ArticleLiked = styled.div`
  margin-bottom: 20px;
  transition: all .2s linear;
  display: block;
}
`;

const Invis = styled.div`
  opacity: .0;

`;

const AboutDiv2Big = styled.div`
  margin-bottom: 20px;
  max-height: none;

  position: relative;
  display: block;
`;
//////////////////////////asdfas



class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.outerRef = React.createRef();
    this.state = {
      artistName: '',
      height: 0,
      links: [],
      about: [],
      follower_count: null,
      following_count: null,
      track_count: null,
      liked_songs: null,
      likedSongsList: [],
      overFlow: false
    };

    // this.addFollower = this.addFollower.bind(this);
  }

  // Reformat get data
  formatData(results, that) {
    var artist = results.artist;
    // Change numbers into something easy to read
    var trackCount = that.numberConversion(artist.track_count);
    var followerCount = that.numberConversion(artist.follower_count);
    var followingCount = that.numberConversion(artist.following_count);

    // Run my height counter to run my checkOverflow function
    this.checkOverflow();

    // Set Sidebar state
    that.setState({
      artistName: artist.name,
      track_count: trackCount,
      follower_count: followerCount,
      following_count: followingCount,
      about: artist.about.split('. '),
      links: artist.links.split(' '),
      liked_songs: artist.liked_songs,
      likedSongsList: results.likedSongs
    });
  }

  // Make numbers prettier to read
  numberConversion(number) {
    if (!number) {
      return number;
    }

    if (number > 9999 && number < 1000000) {
      var stringNum = number.toString();
      var firstThree = stringNum.slice(0, -3);
      firstThree += 'K';
      number = firstThree;
    }
    if (number > 999999) {
      var stringNum = number.toString();
      var firstThree = stringNum.slice(0, -6);
      firstThree += 'M';
      number = firstThree;
    }
    return number;
  }

  checkOverflow() {
    // Set timeout so that it checks height after the html has been rendered. Have to do it this way because of styled components being not great.
    setTimeout(() => {
      this.setState({
        height: this.outerRef.current.clientHeight
      });
      if (this.state.height > 100) {
        this.setState({
          overFlow: true
        });
      } else {
        this.setState({
          overFlow: false
        });
      }
    }, 100);
  }



  onArtistNameClick(e) {
    // get req here
    var that = this;
    console.log(`artist click! e.currentTarget: ${this.props.id}... `);
    // axios.get random artist
    axios.get('http://localhost:4444/artist')
    // e.currentTarget = 2;
    // axios.get(`http://localhost:4444/artist/?id=${e.currentTarget}`)
      .then(function (results) {
        that.formatData(results.data, that);
        console.log(`formatted data = ${results.data} and that = ${that}`);
      })
      .catch(function (err) {
        console.log('error in artist name onclick: ', err);
      });
  }


  //send get req before component renders.
  componentDidMount() {
    // get req here
    var that = this;
    // axios.get random artist
    axios.get('http://localhost:4444/artist')
      .then(function(results) {
        that.formatData(results.data, that);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  // On Hover function to be made if there's time.
  // onHover() {




  render() {
    return (
      <SidebarContainer id='sidebar-right'>

        <div ref={this.outerRef} style={{ position: 'absolute', 'zIndex': '-1' }}>
          <Invis id="invisiblediv" >
            <AboutDiv2Big id="notCollapsed">
              <div id="wrapper">
                <div id="truncated-description">
                  {this.state.about.join('\n')}
                </div>
              </div>
            </AboutDiv2Big>
          </Invis>
        </div>

        <article id="stats">
          <StatTable id="links">
            <Tbody>
              <Tr>

                <StatCounts statTitle='followers' statNum={this.state.follower_count} />
                <StatCounts statTitle='following' statNum={this.state.following_count} />
                <StatCounts statTitle='tracks' statNum={this.state.track_count} />
              </Tr>

            </Tbody>
          </StatTable>
        </article>

        <article>
          <AboutDiv id="about">
            <About
              about={this.state.about}
              overFlow={this.state.overFlow}/>
          </AboutDiv>
        </article>
        <article>
          <LinksDiv id="weblinks">
            <Links
              links={this.state.links}
            />
          </LinksDiv>
        </article>
        <ArticleLiked>
          <div id="likedsongs">
            <LikedSongs
              likedSongsList={this.state.likedSongsList}
              count={this.state.liked_songs} onArtistNameClick={this.onArtistNameClick.bind(this)}
              numberConversion={this.numberConversion.bind(this)}
            />
          </div>
        </ArticleLiked>


      </SidebarContainer>
    );
  }
}

export default Sidebar;

