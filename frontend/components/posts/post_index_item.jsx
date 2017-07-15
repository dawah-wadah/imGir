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
	}

	mouseEnter() {
		this.setState({visibleDetails: true});
	}

	mouseLeave() {
		this.setState({visibleDetails: false});
	}

	render() {
		return (

			<div
				className='image-index-item'
				key={this.props.post.id}
				onMouseEnter={() => this.mouseEnter()}
				onMouseLeave={() => this.mouseLeave()}>
				<div className='index-no-overflow'>
					<Link to={`/posts/${this.props.post.id}`}>
						<img className='image-list-link' src={this.props.post.main_image}></img>
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
