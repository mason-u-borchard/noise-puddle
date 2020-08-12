import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const CommentFlex = styled.div`
  font-size: 11px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0 0 20px 0;
  width: 100vw;
  max-width: 685px;
  background-color: #ffffff;
  position: relative;
  top: 0;
  left: 0;
`

const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`

const AvatarMini = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
  background-position: 50% 50%;
  background-size: cover;
`
const UserNameText = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  width: 370px;
  margin-left: 10px;
`

const Username = styled.div`
  font-size: 11px;
  color: #999;
`

const Text = styled.div`
  font-size: 11px;
  color: #333;
`

const Ago = styled.div`
  font-size: 11px;
  color: #999;
  text-align: right;
  width: 100px;
`

const WhiteDiv = styled.div`
  position: relative;
  left: 0;
  background-color: #ffffff;
  width: 1240px;
`

const CommentEntry = (props) => {
  const style = {
    backgroundImage: "url(" + props.comment.user_profile_pic + ")"
  }
  return(<CommentFlex>
    <LeftContainer>
      <AvatarMini style={style} />
      <UserNameText>
        <Username>{ props.comment.user_name } at { props.comment.track_location }: </Username>
        <Text>{ props.comment.text }</Text>
      </UserNameText>
    </LeftContainer>
    <Ago>{ moment(props.comment.createdAt).fromNow() }</Ago>
    <WhiteDiv key={props.comment.id} />
  </CommentFlex>
)}

export default CommentEntry;