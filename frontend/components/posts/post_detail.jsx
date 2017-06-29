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
		this.toggleUpvote = this
			.toggleUpvote
			.bind(this);
		this.toggleDownvote = this
			.toggleDownvote
			.bind(this);
	}

	componentDidMount() {

		this
			.props
			.requestAllComments(this.props.post.id);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.postId !== nextProps.postId) {
			this
				.props
				.requestAllComments(nextProps.postId);
		}
	}

	toggleUpvote() {
		this.props.createVote({
			vote: {
				voteable_type: "Post",
				voteable_id: this.props.post.id,
				vote_type: "Upvote"
			}
		});
		console.log('it upvoted');
	}

	toggleDownvote() {
		console.log('it downvoted');
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
			<div className='show-page'>
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
							<div className="upvote-button" onClick={this.toggleUpvote}>
								<i className="fa fa-arrow-up" aria-hidden="true"></i>
								<p>UPVOTE</p>
							</div>
							<div className="downvote-button spacer" onClick={this.toggleDownvote}>
								<i className="fa fa-arrow-down" aria-hidden="true"></i>
							</div>
						</div>
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
import {requestAllComments} from '../../actions/comment_actions';
import {selectAllComments} from '../../reducers/selectors';
import { createVote } from '../../actions/vote_actions';

const mapStateToProps = (state, ownProps) => {
	return {
		modal: Boolean(state.dropdown.uploadModal),
		comments: selectAllComments(state.comment.entities),
		postId: ownProps.post.id
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		displayModal: (component) => dispatch(displayModal(component)),
		requestAllComments: (id) => dispatch(requestAllComments(id)),
		createVote: (voteData) => dispatch(createVote(voteData))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
