import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import $ from 'jquery';
import axios from 'axios';


const CommentFormBlock = styled.div`
  width: 100vw;
  max-width: 845px;
  height: 40px;
  font: 12px/1.4 Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  background-color: #f2f2f2;
  border: 1px solid #e5e5e5;
  color: #333;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 5px;
  align-items: stretch;
  position: absolute;
  top: -110px;
  left: -140px;
`

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  background-position: 50% 50%;
  background-size: cover;
  background-image: url("https://sdc-comments-pictures.s3.amazonaws.com/comments/image1000.jpg");
`

const CommentInput = styled.input`
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  font-family: Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  outline: none;
  cursor: pointer;
  border: 1px solid #e5e5e5;
  width: 100%;
  margin: 7px 7px;
  padding-left: 9px;
`

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      commentInput: e.target.value
    })

    if (e.key === 'Enter') {
      this.setState({
        commentInput: ''
      })
      this.handleSubmit(e)
    }
  }

  handleSubmit(e) {
    e.preventDefault();

      let newComment = {
        user_name: 'ZeldaXOXO',
        text: e.target.value
      }
      axios.post(`${this.props.url}comments`, newComment )
        .then((result) => {
          this.props.getComments();
        })
        .catch((err) => {
          console.log('Error: Post comment:', err)
        })
  }

  render() {
    return (
      <CommentFormBlock>
        <UserAvatar /><CommentInput placeholder="Write a comment" value={ this.state.commentInput } onChange={ this.handleInput } onKeyPress={ this.handleInput } />
      </CommentFormBlock>)
  }
}

// ReactDOM.render(<App />, document.getElementById('App')); <--- moved to index.jsx

export default CommentForm;