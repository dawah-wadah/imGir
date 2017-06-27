import React from 'react';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    return (

      <div className="comment">
        <div className="author">
          <a className="comment-username">UserName</a>
          <span className="time-since-posted">5 hr</span>
        </div>
        <span>
          <span>Comment goes here</span>
        </span>
        <div className="comment-create-reply">
          <div className="comment-create-reply-wrapper">
            <div className="icon-reply"></div>
            <div>Reply</div>
          </div>
        </div>
        <div className="caption-gradient-wrapper">
          <div className="caption-gradient"></div>
        </div>
        <div className="comment-votes">
          <div className="comment-votes-wrapper">
            <button className="comment-vote icon-upvote-fill"></button>
            <button className="comment-vote icon-downvote-fill"></button>
          </div>
        </div>
        <span className="comment-reply-count">
          4 replies
        </span>
      </div>
    );
  }
}

export default CommentIndexItem;
