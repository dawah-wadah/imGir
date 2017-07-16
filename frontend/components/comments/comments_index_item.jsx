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
			hideVoteIcon: true

		};
		this.toggle = this.toggle.bind( this );
		this.toggleChild = this.toggleChild.bind( this );
		this.repliesCount = this.repliesCount.bind( this );
		this.toggleVote = this.toggleVote.bind( this );
		this.toggle = this.toggle.bind( this );
		this.toggleChild = this.toggleChild.bind( this );
		this.revealVotes = this.revealVotes.bind( this );
		this.showIcon = this.showIcon.bind( this );
		this.hideIcon = this.hideIcon.bind( this );
	}



	showIcon( e ) {
		e.stopPropagation();
		this.setState( {
			hideReplyIcon: false,
			hideVoteIcon: false


		} );
	}
	hideIcon( e ) {
		e.stopPropagation();
		this.setState( {
			hideReplyIcon: true,
			hideVoteIcon: true
		} );
	}

	toggle(e) {
		e.stopPropagation();
		this.setState( {
			hideReplyForm: !this.state.hideReplyForm
		} );
	}
	toggleChild() {
		this.props.commentIds.forEach( ( id ) => {
			this.props.requestOneComment( id );
		} );
		this.setState( {
			hideReplies: !this.state.hideReplies
		} );
	}
	replyForm() {
		return this.state.hideReplyForm ? null :
			<ReplyForm
        parentId={this.props.comment.id}
				 toggle={this.toggle}
				 toggleChild={this.toggleChild}
				 replies={this.replies}
				 open={this.state.hideReplies}
        parentType='Comment' /> ;
	}


	replies() {

		return (this.state.hideReplies ? <div></div> :
			<CommentsIndexContainer commentIds={this.props.commentIds} />
	);
}
repliesCount() {
	if ( this.props.commentIds.length > 0 ) {
		return (
			<div>

			<div className='comment-gradient-wrapper'>
				<div className='comment-gradient'></div>
			</div>

			<div className='replies-count'>
			{this.state.hideReplies ?
				`+ ${this.props.commentIds.length} replies`  : 'Collapse'}
			</div>

			</div>
		);
	}
}

revealVotes() {
	if ( this.props.comment.vote ) {
		if ( this.props.comment.vote.vote_type === 'Upvote' ) {
			return ([

            <img onClick={ () => this.toggleVote('Upvote') }
							src={window.images.upvote_after}
							className="vote-arrow" ></img>,
            <img onClick={() => this.toggleVote('Downvote')}
							src={window.images.downvote_before}
							className="vote-arrow"></img>
					]
			);
		} else {
			return ([

            <img onClick={ () => this.toggleVote('Upvote') }
							src={window.images.upvote_before}
							className="vote-arrow" ></img>,
            <img onClick={() => this.toggleVote('Downvote')}
							src={window.images.downvote_after}
							className="vote-arrow"></img>
					]
			);
		}
	} else {
		return ( [

          <img onClick={ () => this.toggleVote('Upvote') }
						src={window.images.upvote_before}
						className="vote-arrow" ></img>,
          <img onClick={() => this.toggleVote('Downvote')}
						src={window.images.downvote_before}
						className="vote-arrow"></img>
				]
		);
	}
}


toggleVote(type) {
	if (this.props.comment.vote) {
		if (this.props.comment.vote.vote_type !== type) {

			return (this.props.editVote({
				vote: {
					id: this.props.comment.vote.id,
					voteable_type: 'Comment',
					voteable_id: this.props.comment.id,
					vote_type: type
				}
			}));
		} else {
			return (this.props.deleteVote({id: this.props.comment.vote.id}, "Comment"));
		}
	} else {
		this
			.props
			.createVote({
				vote: {
					voteable_type: "Comment",
					voteable_id: this.props.comment.id,
					vote_type: type
				}
			});
	}
}
render() {
	if ( this.props.comment.id ) {
		return (
			<div className='child' key={this.props.comment.id}
					>
        <div className="comment" onClick={this.toggleChild} onMouseEnter={(e) => this.showIcon(e)}
				onMouseLeave={(e) => this.hideIcon(e)}>
				<div className='comment-votes'>
					{this.state.hideVoteIcon ? null :
						this.revealVotes()

					}
				</div>

          <div className="comment-info">
            <div className="author">
                <div className="comment-username">{this.props.comment.username}</div>
                <div className="comment-username spacer">{this.props.comment.points} pts</div>
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
        <p className='reply-icon' onClick={this.toggleChild}>
          {this.repliesCount()}
        </p>
				{this.replyForm()}
        {this.replies()}
      </div>
		);
	} else {
		return null;
	}
}

}


export default CommentsIndexItem;
