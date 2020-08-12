import React from 'react';
import LikedSong from './LikedSong.jsx';

import styled from 'styled-components';
import { TiHeart } from 'react-icons/ti';

const MoreStyling = styled.div`
  height: 30px;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f2;
`;

const H3 = styled.h3`
  line-height: 24px;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  font-weight: 100;
  color: #999;
`;

const Heart = styled.span`
  width: 21px;
  margin-right: 4px;
  background-size: 20px 20px;
  display: inline-block;
  vertical-align: top;
  background-repeat: no-repeat;

`;

// INSERT heart icon in the background image url above!

const Likes = styled.span`
  line-height: 24px;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
`;

const SongListDiv = styled.span`
  padding-top: 5px;
  min-height: 210.60000000000002px;
  display: block;
`;

const Ul = styled.span`
    list-style: none;
    margin: 0;
    padding: 0;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    display: block;
`;



const LikedSongs = ({likedSongsList, count, onArtistNameClick, numberConversion}) => (

  <div>
    <MoreStyling>
      <H3 className='LIKEDSONGCLASS'>
        <span className='LIKEDSONGSNUMBER'>
          <TiHeart/> {count} likes
        </span>
      </H3>
    </MoreStyling>
    <SongListDiv>

      <Ul>
        {likedSongsList.map((likedSong) =>
          <LikedSong
            key={likedSong.id}
            song_name={likedSong.song_name}
            artist_name={likedSong.artist_name}
            plays={likedSong.plays}
            likes={likedSong.likes}
            reposts={likedSong.reposts}
            comments={likedSong.comments}
            album_art={likedSong.album_art}
            location={likedSong.location}
            artist_pic={likedSong.artist_pic}
            onArtistNameClick={onArtistNameClick}
            numberConversion={numberConversion}
          />

        )}
      </Ul>
    </SongListDiv>
  </div>
);

export default LikedSongs;