import React from 'react';
import Moment from 'moment';
import styled from 'styled-components';
import svg from 'react-inlinesvg';

import { TiHeart, TiArrowLoop } from 'react-icons/ti';
import { FaShareSquare } from 'react-icons/fa';
import { MdPlaylistPlay, MdPlayArrow, MdMoreHoriz } from 'react-icons/md';

const LikeBarBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 33px;
  width: 845px;
  margin: 0;
  padding: 0;
  font-weight: 100;
  font-size: 14px;
  line-height: 14px;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  align-items: baseline;
  padding-bottom: 5px;
  border-bottom: 1px solid #f2f2f2;
  position: relative;
  top: 40px;
  left: 0;
`

const ButtonsLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  width: 400px;
`
const InfoRight = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  color: #999;
  vertical-align: center;
  line-height: 16px;
  width: 150px;
`

const Info = styled.p`
  font-size: 12px;
`

const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 26px;
  margin: 0 3px;
  padding: 2px 11px 2px 10px;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
  font-size: 17px;
  font-weight: 100;
  line-height: 20px;
  white-space: nowrap;
  text-align: center;
  vertical-align: center;
  box-sizing: border-box;
`

const ShareButton = styled(Button)`
  font-size: 12px;
  color: ${(props) => props.shareClicked ? "#f50" : "#333" };
  border: ${(props) => props.shareClicked ? "1px solid #f50" : "1px solid #e5e5e5" };
  &:hover {
    border: ${(props) => props.shareClicked ? "1px solid #f50" : "1px solid #999" };
  }
`
const HeartButton = styled(Button)`
  color: ${(props) => props.heartClicked ? "#f50" : "#333" };
  border: ${(props) => props.heartClicked ? "1px solid #f50" : "1px solid #e5e5e5" };
  &:hover {
    border: ${(props) => props.heartClicked ? "1px solid #f50" : "1px solid #999" };
  }
`
const RepostButton = styled(Button)`
  color: ${(props) => props.repostClicked ? "#f50" : "#333" };
  border: ${(props) => props.repostClicked ? "1px solid #f50" : "1px solid #e5e5e5" };
  &:hover {
    border: ${(props) => props.repostClicked ? "1px solid #f50" : "1px solid #999" };
  }
`
const NextupButton = styled(Button)`
  color: ${(props) => props.nextupClicked ? "#f50" : "#333" };
  border: ${(props) => props.nextupClicked ? "1px solid #f50" : "1px solid #e5e5e5" };
  &:hover {
    border: ${(props) => props.nextupClicked ? "1px solid #f50" : "1px solid #999" };
  }
`
const MenuButton = styled(Button)`
  color: ${(props) => props.menuClicked ? "#f50" : "#333" };
  border: ${(props) => props.menuClicked ? "1px solid #f50" : "1px solid #e5e5e5" };
  &:hover {
    border: ${(props) => props.menuClicked ? "1px solid #f50" : "1px solid #999" };
  }
`

const ButtonText = styled.span`
  font-size: 13px;
  margin-left: 3px;
`

class LikeBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playCount: 0,
      likes: 0,
      reposts: 0,
      heartClicked: false,
      repostClicked: false,
      shareClicked: false,
      nextupClicked: false,
      menuClicked: false
    }
    this.handleHeartClick = this.handleHeartClick.bind(this);
    this.handleShareClick = this.handleShareClick.bind(this);
    this.handleRepostClick = this.handleRepostClick.bind(this);
    this.handleNextupClick = this.handleNextupClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      playCount: this.props.song.play_count,
      likes: this.props.song.likes_count,
      reposts: this.props.song.repost_count
    })
  }

  handleHeartClick() {
    this.setState({
      heartClicked: !this.state.heartClicked
    })
  }

  handleRepostClick() {
    this.setState({
      repostClicked: !this.state.repostClicked
    })
  }

  handleShareClick() {
    this.setState({
      shareClicked: !this.state.shareClicked
    })
  }

  handleNextupClick() {
    this.setState({
      nextupClicked: !this.state.nextupClicked
    })
  }

  handleMenuClick() {
    this.setState({
      menuClicked: !this.state.menuClicked
    })
  }

  render() {
    return (<LikeBarBlock>
      <ButtonsLeft>
        <HeartButton id="heart" heartClicked={this.state.heartClicked} onClick={this.handleHeartClick}>
          <TiHeart /><ButtonText> Like</ButtonText>
        </HeartButton>
        <RepostButton id="repost" repostClicked={this.state.repostClicked} onClick={this.handleRepostClick}>
          <TiArrowLoop /><ButtonText> Repost</ButtonText>
        </RepostButton>
        <ShareButton id="share" shareClicked={this.state.shareClicked} onClick={this.handleShareClick}>
          <FaShareSquare /><ButtonText> Share</ButtonText>
        </ShareButton>
        <NextupButton id="nextup" nextupClicked={this.state.nextupClicked} onClick={this.handleNextupClick}>
          <MdPlaylistPlay /><ButtonText> Add to Next Up</ButtonText>
        </NextupButton>
        <MenuButton id="menu" menuClicked={this.state.menuClicked} onClick={this.handleMenuClick}>
          <MdMoreHoriz /><ButtonText> More</ButtonText>
        </MenuButton>
      </ButtonsLeft>
      <InfoRight>
        <InfoDiv><MdPlayArrow /> <Info>{ this.props.song.play_count }</Info></InfoDiv>
        <InfoDiv><TiHeart /> <Info>{ this.props.song.likes_count }</Info></InfoDiv>
        <InfoDiv><TiArrowLoop /> <Info>{ this.props.song.repost_count }</Info></InfoDiv>
      </InfoRight>
    </LikeBarBlock>)
  }
}


export default LikeBar;