import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItem from './post_index_item_container';


class PostIndex extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		this.props.requestAllPosts();
	}

	componentWillUpdate(nextProps) {
		if (this.props.posts.length != nextProps.posts.length){
			
		}
	}

	render() {
		const allPosts = this.props.posts.map((post) => (
			<PostIndexItem post={post} key={post.id}/>
			));
		return (
			<div className='post-index-container top-90 gallery five-three'>
				{allPosts}
			</div>
		);
	}
}

export default PostIndex;
