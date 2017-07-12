import React from 'react';
import {Link} from 'react-router-dom';
import NewComment from '../comments/create_comment_container';
import {connect} from 'react-redux';
import PostZoom from './post_zoom';
import SideBar from './side_bar';
import ImageShow from './image_show';
import CommentIndex from '../comments/comments_index';

class PostDetail extends React.Component {
	constructor(props) {
		super(props);
		this.toggleVote = this
			.toggleVote
			.bind(this);
		this.nextPost = this
			.nextPost
			.bind(this);
		this.prevPost = this
			.prevPost
			.bind(this);
		this.upvote = this.upvote.bind(this);
		this.downvote = this.downvote.bind(this);
	}

	componentDidMount() {
		this
			.props
			.requestOnePost(this.props.post.id);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.postId !== nextProps.postId) {
			this
				.props
				.requestAllComments(nextProps.postId);
		}
	}

	prevPost() {
		const id = this.props.match.params.postId - 1;
		this
			.props
			.history
			.push(`/posts/${id}`);
	}
	nextPost() {
		const id = parseInt(this.props.match.params.postId) + 1;
		this
			.props
			.history
			.push(`/posts/${id}`);
	}

	toggleVote(type) {
		if (this.props.voted) {
			if (this.props.post.vote.vote_type !== type) {

				return (this.props.editVote({
					vote: {
						id: this.props.post.vote.id,
						voteable_type: 'Post',
						voteable_id: this.props.post.id,
						vote_type: type
					}
				}));
			} else {
				return (this.props.deleteVote({id: this.props.post.vote.id}));
			}
		} else {
			this
				.props
				.createVote({
					vote: {
						voteable_type: "Post",
						voteable_id: this.props.post.id,
						vote_type: type
					}
				});
		}
	}

upvote() {
	if (this.props.voted) {
		if (this.props.post.vote.vote_type === 'Upvote') {
			return (
				<img src={window.images.upvote_after} className="post-actions-action"></img>
			);
		} else {
			return (
				<img
					src={window.images.upvote_before}
					className="post-actions-action"></img>
			);
		}
	} else {
		return (
			<img
				src={window.images.upvote_before}
				className="post-actions-action"></img>
		);
	}
}
downvote() {
	if (this.props.voted) {
		if (this.props.post.vote.vote_type === 'Downvote') {
			return (
				<img src={window.images.downvote_after} className="post-actions-action"></img>
			);
		} else {
			return (
				<img
					src={window.images.downvote_before}
					className="post-actions-action"></img>
			);
		}
	} else {
		return (
			<img
				src={window.images.downvote_before}
				className="post-actions-action"></img>
		);
	}
}

	render() {

		let allPics;
		if (this.props.post.images) {
			allPics = this
				.props
				.post
				.images
				.map((image) => (<ImageShow key={image.id} image={image}/>));
		} else {
			allPics = null;
		}
		return (
			<div className='show-page' onKeyDown={this.handleKeyPress}>
				<section className='post-container'>
					<div className='post-header'>
						<h1 className='post-title'>{this.props.post.title}</h1>
						<span className='post-author-link'>
							by
							<Link
								className='post-author-link sm-spacer'
								to={`/users/${this.props.post.author_id}`}>
								{this.props.post.author_name}
							</Link>
						</span>
					</div>
					{allPics}
					<div className='post-description'>
						<div className='post-description-words'>
							{this.props.post.description}
						</div>
						<div className="post-footer">
							<div
								className="upvote-button"
								onClick={() => this.toggleVote('Upvote')}>
								{this.upvote()}
								<p>UPVOTE</p>
							</div>
							<div
								className="downvote-button spacer"
								onClick={() => this.toggleVote('Downvote')}>
								{this.downvote()}
								<p>DOWNVOTE</p>
							</div>
						</div>
						<div>{this.props.post.totalvotes}
							points</div>
					</div>
					<div className='post-comments-container'>
						<NewComment parentId={this.props.post.id} parentType={'Post'}/> {this.props.comments
							? <CommentIndex comments={this.props.comments}/>
							: null
}
					</div>
				</section>
				<div className='side-bar'>
					<SideBar/>
					<div className='bottom-fade'></div>

				</div>
			</div>
		);
	}
}
import {displayModal} from '../../actions/modal_actions';
import {requestOnePost} from '../../actions/post_actions';
import {selectAllComments} from '../../reducers/selectors';
import {editVote, createVote, deleteVote } from '../../actions/vote_actions';

const mapStateToProps = (state, ownProps) => {
	return {
		voted: Boolean(ownProps.post.vote),
		modal: Boolean(state.dropdown.uploadModal),
		comments: selectAllComments(state.comment.entities),
		postId: ownProps.post.id
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		displayModal: (component) => dispatch(displayModal(component)),
		requestOnePost: (id) => dispatch(requestOnePost(id)),
		createVote: (voteData) => dispatch(createVote(voteData)),
		editVote: (voteData) => dispatch(editVote(voteData)),
		deleteVote: (id) => dispatch(deleteVote(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
