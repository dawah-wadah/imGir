import React from 'react';
import Moment from 'react-moment';
import NewComment from './create_comment_container';


class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {openReply : false};
  }

  render() {
    
    return (
      <div className='comment'>
<div className='author'>

      <div className="caption">
        <div className="usertext cf">
          <a className="comment-username">{this.props.comment.author_name} </a>
          <span className="time-since-posted">
            <Moment fromNow>
              {this.props.comment.time_since}
            </Moment>
          </span>
        </div>
      </div>
    </div>
        <span>
          <span className='comment-body'>{this.props.comment.body}</span>
        </span>
            <div className="icon-reply"></div>
            {this.state.openReply ?
              <NewComment
                parentId={this.props.comment.id}
                 parentType={'Comment'}/>
               : <div className='right btn btn-main' onClick={() => this.setState({
                 openReply: true
               })}>Reply Button</div>
            }
        <div className="caption-gradient-wrapper">
          <div className="caption-gradient"></div>
        </div>
        <div className="comment-votes">
          <div className="comment-votes-wrapper">
            <button className="comment-vote icon-upvote-fill"></button>
            <button className="comment-vote icon-downvote-fill"></button>
          </div>
        </div>
    </div>

    );
  }
}

// <span className="comment-reply-count">
//   {this.props.comment.replies.length} replies
// </span>
// <div className="comment-create-reply">
//
//   <div className="comment-create-reply-wrapper">
//
//   </div>
//
// </div>

export default CommentIndexItem;
