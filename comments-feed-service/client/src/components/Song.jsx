import React from 'react';
import styled from 'styled-components';

const SongDescription = styled.div`
  height: 120px;
  font-size: 14px;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-weight: lighter;
  line-height: 1.3em;
`

const Bold = styled.span`
  font-weight: 600;
`

const Song = (props) => (
  <SongDescription>
    The 1975's new album Notes on a Conditional Form is out now!<br />
    <br />
    <Bold>Release date: </Bold><br />
    © {props.song.release_date}<br />
    <br />
    <Bold>C-line: </Bold><br />
    © {props.song.c_line}
  </SongDescription>
)

export default Song;