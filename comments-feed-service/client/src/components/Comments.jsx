import React from 'react';
import Moment from 'moment';
import styled from 'styled-components';
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";

import { FaCommentAlt } from 'react-icons/fa';

import CommentEntry from './CommentEntry.jsx';
import CommentForm from './CommentForm.jsx';


const CommentTop = styled.div`
  margin-top: 20px;
  font-weight: 100;
  font-size: 14px;
  line-height: 1.3;
  color: #999;
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 5px;
  margin-bottom: 18px;
  width: 100vw;
  max-width: 685px;
`

const CommentFeed = styled.li`
  display: list-item;
  list-style: none;
  border-bottom: 1px solid #f2f2f2;
`

const End = styled.div`
  margin: 0;
  padding: 0;
  height: 20px;
  width: inherit;
`

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      shownComments: [],
      hasMore: true
    }
    this.getComments = this.getComments.bind(this);
    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  componentDidMount() {
    this.getComments();
  }

  getComments() {
    console.log(this.props.url + 'comments')
    axios.get(this.props.url + 'comments/1999699')
    .then((result) => {
      // console.log(result)
      this.setState({
        comments: result.data,
        shownComments: result.data.slice(0, 20)
      })
    })
    .catch((err) => {
      console.log('Error: getComments', err)
    })
  }

  fetchMoreData() {
    // console.log('fetching')
    if (this.state.shownComments.length >= this.state.comments.length) {
      this.setState({ hasMore: false });
      return;
    }

    let startIndex = this.state.shownComments.length + 1;
    let shownLength = this.state.shownComments.length;
    if (this.state.comments.length - shownLength < 20) {
      this.setState({ shownComments: this.state.comments })
      return;
    }
    let commentsExtend  = this.state.shownComments.concat(this.state.comments.slice(shownLength + 1, shownLength + 21));
    this.setState({ shownComments: commentsExtend });
  };

  render() {
    return (
      <div>
        <CommentForm url={this.props.url} getComments={this.getComments} />
        <CommentTop><FaCommentAlt /> {this.state.comments.length} comments</CommentTop>
        <CommentFeed>
          <InfiniteScroll
            dataLength={this.state.shownComments.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>

              </p>
            }
          >
            {this.state.shownComments.map((comment) => (
                <CommentEntry key={comment.id} comment={comment} />
            ))}
          </InfiniteScroll>
        </CommentFeed>
        <End />
      </div>
    )
  }
}


export default Comments;