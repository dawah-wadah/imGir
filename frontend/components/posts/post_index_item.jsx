import React from 'react';
import {
	Link,
	Route
} from 'react-router-dom';
import {
	DeleteButton
} from '../delete/delete_button';

import PostDetail from './post_hover';

class PostIndexItem extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			visibleDetails: false
		};
		this.mouseEnter = this
			.mouseEnter
			.bind( this );
		this.mouseLeave = this
			.mouseLeave
			.bind( this );
		this.style = this.style.bind( this );
		this.hoverRenders = this.hoverRenders.bind(this);
	}

	mouseEnter() {
		this.setState( {
			visibleDetails: true
		} );
	}

	mouseLeave() {
		this.setState( {
			visibleDetails: false
		} );
	}

	style() {
		if ( this.props.post.vote ) {

			switch ( this.props.post.vote.vote_type ) {
			case 'Upvote':
				return ( {
					border: '#1BB76E 4px solid'
				} );
			case 'Downvote':
				return ( {
					border: '#DB3535 4px solid'
				} );
			default:
				return ( {
					border: '#121211 4px solid'
				} );

			}
		} else {
			return ( {
				border: '#121211 4px solid'
			} );

		}

	}

	hoverRenders( post ) {
		// <PostDetail post={post}/>
		return (
			<div>
			{post.user_id === this.props.currentUser ?
				<DeleteButton deleteFunction={() => this.props.deletePost(post.id)}
					object={post}/> : console.log('not mine')}
		</div>
		)
		// {post.user_id === this.props.user ? <DeleteButton /> : console.log('not mine')}
	}
	// ? <PostDetail post={this.props.post}/>

	render() {
		return (

			<div
				className='image-index-item gallery'
				key={this.props.post.id}
				onMouseEnter={() => this.mouseEnter()}
				onMouseLeave={() => this.mouseLeave()}>
				<div className='index-no-overflow gallery'>
					<Link to={`/posts/${this.props.post.id}`}>
						<img className='image-list-link gallery' style={this.style()}
src={this.props.post.main_image}></img>
					</Link>
				</div>
				{this.state.visibleDetails
					? this.hoverRenders(this.props.post)
					: null}
			</div>
		);
	}
}

export default PostIndexItem;
