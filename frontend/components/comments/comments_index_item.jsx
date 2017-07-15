import React from 'react';
import ReplyForm from './reply_form';
import {
	Link
} from 'react-router-dom';
import CommentsIndexContainer from './comments_index_container';
import Moment from 'react-moment';

class CommentsIndexItem extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			hideReplyForm: true,
			hideReplies: true,
			hideReplyIcon: true,

		};
		this.toggle = this.toggle.bind( this );
		this.toggleChild = this.toggleChild.bind( this );
		this.repliesCount = this.repliesCount.bind( this );
		this.vote = this.vote.bind( this );
		this.handleSubmitUpvote = this.handleSubmitUpvote.bind( this );
		this.handleSubmitDownvote = this.handleSubmitDownvote.bind( this );
		this.toggle = this.toggle.bind( this );
		this.toggleChild = this.toggleChild.bind( this );
		this.revealVotes = this.revealVotes.bind( this );
		this.showIcon = this.showIcon.bind(this);
		this.hideIcon = this.hideIcon.bind(this);
	}

	showIcon(e){
		e.stopPropagation();
		this.setState({
			hideReplyIcon: false
		});
	}
	hideIcon(e){
		e.stopPropagation();
		this.setState({
			hideReplyIcon: true
		});
	}

	toggle() {
		this.setState( {
			hideReplyForm: !this.state.hideReplyForm
		} );
	}
	toggleChild() {
		this.props.commentIds.forEach((id) => {
			this.props.requestOneComment(id);
		});
		this.setState( {
			hideReplies: !this.state.hideReplies
		} );
	}
	replyForm() {
		return this.state.hideReplyForm ? null :
			<ReplyForm
        parentId={this.props.comment.id}
				 toggle={this.toggle} toggleChild={this.toggleChild}t
        parentType='Comment' /> ;
	}


	replies() {

		return (this.state.hideReplies ? <div></div> :
			<CommentsIndexContainer commentIds={this.props.commentIds} />);
	}
	repliesCount() {
		if ( this.props.commentIds.length > 0 ) {
			return (<div className='replies-count'>{this.state.hideReplies ?
				`+ ${this.props.commentIds.length} replies`  : 'Collapse'}</div>);
		}
	}
	revealVotes() {
		if ( this.props.voted ) {
			if ( this.props.vote.vote_type === 'Upvote' ) {
				return (
					<div className="comment-votes">
            <img onClick={ this.handleSubmitUpvote }
							src={window.images.upvote_after}
							className="vote-arrow" ></img>
            <img onClick={this.handleSubmitDownvote}
							src={window.images.downvote_before}
							className="vote-arrow"></img>
              </div>
				);
			} else {
				return (
					<div className="comment-votes">
            <img onClick={ this.handleSubmitUpvote }
							src={window.images.upvote_before}
							className="vote-arrow" ></img>
            <img onClick={this.handleSubmitDownvote}
							src={window.images.downvote_after}
							className="vote-arrow"></img>
              </div>
				);
			}
		} else {
			return (
				<div className="comment-votes">
          <img onClick={ this.handleSubmitUpvote }
						src={window.images.upvote_before}
						className="vote-arrow" ></img>
          <img onClick={this.handleSubmitDownvote}
						src={window.images.downvote_before}
						className="vote-arrow"></img>
            </div>
			);
		}
	}

	vote( upOrDown ) {
		if ( this.props.voted ) {
			return this.props.vote;
		} else {
			const vote = {
				voter_id: this.props.accountId,
				votable_id: this.props.commentId,
				votable_type: 'Comment',
				vote_type: `${upOrDown}`,
			};
			return vote;
		}
	}
	handleSubmitUpvote( e ) {
		e.preventDefault();
		if ( this.props.loggedIn ) {
			this.props.toggleUpvote( this.vote( 'Upvote' ), this.props.voted );
		} else {
			this.props.history.push( '/login' );
		}
	}
	handleSubmitDownvote( e ) {
		e.preventDefault();
		if ( this.props.loggedIn ) {
			this.props.toggleDownvote( this.vote( 'Downvote' ), this.props.voted );
		} else {
			this.props.history.push( '/login' );
		}
	}
	render() {
		if ( this.props.comment.id ) {
			return (
				<div className='child' key={this.props.comment.id}
					>
        <div className="comment" onClick={this.toggleChild} onMouseEnter={(e) => this.showIcon(e)}
				onMouseLeave={(e) => this.hideIcon(e)}>

          <div className="comment-info">
            <div className="author">
							<div className="comment-user-name cf">
                <div className="comment-username">{this.props.comment.username}</div>
                <div className="comment-username spacer">{this.props.comment.points} pts</div>
              </div>
              <div className='time-since-posted spacer'>
                <Moment fromNow>
                  {this.props.comment.created_at}
                </Moment>
              </div>
            </div>
            <div className="body">
              <span className='comment-body'>
                {this.props.comment.body}
              </span>
            </div>
          </div>
            {!this.state.hideReplyIcon ?

							<div className="comment-reply-icon" onClick={this.toggle}>
  						{this.state.hideReplyForm
  							? <div className='reply-icon' >Reply </div>
  							: <div className='reply-icon' >Close Form </div>}
  					</div>
					: null}
        </div>
        {this.replyForm()}
        <p className='reply-icon' onClick={this.toggleChild}>
          {this.repliesCount()}
        </p>
        {this.replies()}
      </div>
			);
		} else {
			return null;
		}
	}

}


export default CommentsIndexItem;
