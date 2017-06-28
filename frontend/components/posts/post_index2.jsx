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
	// <div className='image-index-item' key={post.id}>
	// 	<div className='image-index-title'>{post.title}</div>
	// 	<div className='index-no-overflow'>
	// 		<Link to={`/posts/${post.id}`}>
	// 			<img className='image-list-link' src={post.main_image}></img>
	// 		</Link>
	// 	</div>
	// </div>
	render() {
		const allPosts = this.props.posts.map((post) => (
			<PostIndexItem post={post} key={post.id}/>
			));
		return (
			<div className='post-index-container'>
				{allPosts}
			</div>
		);
	}
}

export default PostIndex;
