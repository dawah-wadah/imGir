import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItem from './post_index_item';


class PostIndex extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		this.props.requestAllPosts();
	}

	render() {
		const allPosts = this.props.posts.map((post) => (
			<PostIndexItem post={post} key={post.id}/>
			));
		return (
			<div className='post-index-container top-90 gallery five-seven'>
				{allPosts}
			</div>
		);
	}
}

export default PostIndex;
