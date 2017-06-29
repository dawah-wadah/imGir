import React from 'react';
import Moment from 'react-moment';
import NewComment from './create_comment_container';
import {Link} from 'react-router-dom';

class CommentIndexItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openReply: false,
			showReplies: false
		};
	}

	render() {
		let allReplies;
		if (this.props.comment.replies) {

			allReplies = this
				.props
				.comment
				.replies
				.map((reply) => (<CommentIndexItem key={reply.id} comment={reply}/>));
		}
		return (
			<div className='child'>

				<div className='comment'>
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
					<div className="comment-reply-icon">
						{this.state.openReply
							? <NewComment parentId={this.props.comment.id} parentType={'Comment'}/>

							: <div
								className='reply-icon'
								onClick={() => this.setState({openReply: true})}>Reply Button
							</div>}
					</div>
				</div>
				<p
					className='reply-icon'
					onClick={() => {
						this.setState({
							showReplies: !this.state.showReplies
						});
					}}>
					{this.props.comment.replies
						? this.props.comment.replies.length + ' replies'
						: 'Collapse'}
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
