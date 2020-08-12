import React from 'react';

import styled from 'styled-components';

import { TiHeart, TiArrowLoop } from 'react-icons/ti';
import { MdPlayArrow } from 'react-icons/md';
import { IoIosText} from 'react-icons/io';

const Li = styled.li`
  padding: 5px 0;
  display: list-item;
  list-style: none;
  margin: 0;
`;

const SongDiv = styled.div`
  padding: 0;
  left: -6px;
  margin-right: -6px;
  position: relative;
  min-height: 60px;
  border-radius: 4px;
  overflow: hidden;
  `;

const AlbumArtDiv = styled.span`
  height: 50px;
  width: 50px;
  text-align: center;
  position: relative;
  background-repeat: no-repeat;
`;

const AlbumArtSpan = styled.span`

  margin-right: 4px;
  padding: 5px 6px;
  width: 50px;
  height: 50px;
  position: relative;
  float: left;
`;

const MediaInfoDiv = styled.span`
  margin-top: 4px;
  overflow: hidden;
  display: block;
`;

const AlbumImage = styled.img`
  width: 50px;
  height: 50px;
  opacity: 1;
`;

const SongArtist = styled.div`
  margin-top: 0;
  fontSize: 14px;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 400;
  word-wrap: break-word;

  flex: 1;
  min-width: 0;
}
`;

const ArtistDiv = styled.div`
overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: normal;
        font-weight: 100;
    color: #999;
    display: block;
    list-style: none;
line-height: 1;
    margin: 0 0 2px;
`;

const ArtistNameSpan = styled.span`
  font-weight: 100;
  line-height: 1;
  margin-bottom: 2px;
  cursor: pointer;
`;

const SongNameDiv = styled.div`
  height: 1.3em;

  text-decoration: none;
  color: #333;
  display:block;
  max-width: 100%;
  font-weight: 100;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
`;

const SmallUl = styled.ul`

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
    margin: 0px;
    padding: 0px;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;


`;

const SmallLi = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;
`;

const SmallSpan = styled.span`
  margin-right: 9px;
  margin-bottom: 5px;
  color: #999;
  fontSize: 11px;
  line-height: 12px;
  display: inline-block;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;

  display: inline-block;
  content: "";
  vertical-align: top;
  background-repeat: no-repeat;
  background-position: 50%;
`;



const LikedSong = ({song_name, artist_name, plays, likes, reposts, comments, album_art, location, artist_pic, onArtistNameClick, numberConversion}) => (
  <Li className='INDIVIDUALLIKEDSONGS'>
    <SongDiv className='CONTENTSOFLIKEDSONG'>
      <AlbumArtDiv>
        <AlbumArtSpan className='ALBUMART'>
          <AlbumImage src={album_art}></AlbumImage>
        </AlbumArtSpan>
      </AlbumArtDiv>

      <MediaInfoDiv className='MEDIA'>
        <SongArtist className='SONGNAMEARTISTINFO'>
          <ArtistDiv className='ARTISTNAME'>
            <ArtistNameSpan onClick={onArtistNameClick}>{artist_name}</ArtistNameSpan>
          </ArtistDiv>
          <SongNameDiv className='SONGNAME'>
            <span>{song_name}</span>
          </SongNameDiv>

        </SongArtist>

        <SmallUl className='MORESTATS'>
          <SmallLi><SmallSpan><MdPlayArrow />{numberConversion(plays)}</SmallSpan></SmallLi>
          <SmallLi><SmallSpan><TiHeart /> {numberConversion(likes)} </SmallSpan></SmallLi>
          <SmallLi><SmallSpan><TiArrowLoop /> {numberConversion(reposts)} </SmallSpan></SmallLi>
          <SmallLi><SmallSpan><IoIosText/> {numberConversion(comments)} </SmallSpan></SmallLi>
        </SmallUl>
      </MediaInfoDiv>
    </SongDiv>
  </Li>

);

export default LikedSong;