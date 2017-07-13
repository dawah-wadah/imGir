import React from 'react';
import Moment from 'react-moment';
import ReplyForm from './reply_form';
import {Link} from 'react-router-dom';
import Comment from './comments_index_item_container';

class CommentIndexItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openReply: false,
			showReplies: false
		};
		this.toggleReply = this.toggleReply.bind(this);
		this.replyForm = this.replyForm.bind(this);
	}

	// componentDidMount(){
	// 	this.props.requestOneComment(this.props.comment.id);
	// }

	toggleReply() {
		this.setState({
			openReply: !this.state.openReply
		});
	}

	replyForm() {
		return (<ReplyForm parentId={this.props.comment.id} parentType={'Comment'} />);
	}

	toggleReplies() {
		this.setState({
			showReplies: !this.state.showReplies
		});
	}

	repliesCount() {
		if (this.props.comment.replies) {
			return (this.props.comment.replies.length + ' replies');
		} else {
			return 'Collapse';
		}
	}

	replyButton() {
		let button;
		this.state.openReply
			? button = 'Close Reply'
			: button = 'Reply Button';
		return (
			<div className="comment-reply-icon" onClick={() => this.toggleReply()}>
				<div className='reply-icon'>
					{button}
				</div>
			</div>
		);
	}

	commentInfo() {
		return (
			<div className='comment-info'>
				<div className='author'>
					<div className='comment-user-name cf'>
						<Link
							className="comment-username"
							to={`/users/${this.props.comment.user_id}`}>
							{this.props.comment.author_name}
						</Link>
					</div>
					<div className='time-since-posted spacer'>
						<Moment fromNow>
							{this.props.comment.time_since}
						</Moment>
					</div>
				</div>
				<div className='body'>
					<span className='comment-body'>
						{this.props.comment.body}
					</span>
				</div>
			</div>
		);
	}

	render() {
		let allReplies;
		if (this.props.comment.replies) {

			allReplies = this
				.props
				.comment
				.replies
				.map((reply) => (<Comment key={reply.id} comment={reply}/>));
		}
		return (
			<div className='child' key={this.props.comment.id}>
				<div className='comment'>
					{this.commentInfo()}
					{this.replyButton()}

				</div>
				{this.state.openReply
					? this.replyForm()

					: null}
				<p className='replies-icon' onClick={() => this.toggleReplies()}>
					{this.repliesCount()}
				</p>
				<div className='comment-replies'>
					{this.state.showReplies
						? allReplies
						: null
}
				</div>
			</div>
		);
	}

}

export default CommentIndexItem;
