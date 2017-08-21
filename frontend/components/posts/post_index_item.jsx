import React from 'react';
import {Link, Route} from 'react-router-dom';
import PostDetail from './post_hover';

class PostIndexItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibleDetails: false
		};
		this.mouseEnter = this
			.mouseEnter
			.bind(this);
		this.mouseLeave = this
			.mouseLeave
			.bind(this);
		this.style = this.style.bind(this);
	}

	mouseEnter() {
		this.setState({visibleDetails: true});
	}

	mouseLeave() {
		this.setState({visibleDetails: false});
	}

	style(){
		if(this.props.post.vote){

		switch (this.props.post.vote.vote_type) {
			case 'Upvote':
			return ({
				border: '#1BB76E 4px solid'
			});
			case 'Downvote':
			return ({
				border: '#DB3535 4px solid'
			});
			default:
			return ({
				border: '#121211 4px solid'
			});

		}
	} else {
		return ({
			border: '#121211 4px solid'
		});

	}

	}

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
					? <PostDetail post={this.props.post}/>
					: null}
			</div>
		);
	}
}

export default PostIndexItem;
