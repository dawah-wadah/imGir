import React from 'react';
import {Link} from 'react-router';

class PostIndex extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		this
			.props
			.requestAllPosts();
	}

	render() {
		const allPosts = this
			.props
			.posts
			.map((post) => (
				<div className='post-index-item' key={post.id}>
					<div className='post-index-title'>{post.title}</div>
					<div className='index-no-overflow'>
						<Link to={`/posts/${post.id}`}>
							<img src={post.main_image}></img>
						</Link>
					</div>
				</div>
			));
		return (
			<div className='post-index group'>
				{allPosts}
			</div>
		);
	}
}

export default PostIndex;
