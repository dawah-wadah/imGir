import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItem from './post_index_item_container';


class PostIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = { page: 0 }

	}

	componentDidMount() {
		const { page } = this.state
		this.props.requestAllPosts(page);
		window.addEventListener("scroll", this.handleScroll.bind(this));
	}

	componentWillUpdate(nextProps) {
		if (this.props.posts.length != nextProps.posts.length) {

		}
	}

	handleScroll(event) {
		const winHeight = window.innerHeight;

		const body = document.body;
		const html = document.documentElement;
		const docHeight = Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight
		);

		const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
		const scrollPercent = scrollTop / (docHeight - winHeight);
		const scrollPercentRounded = Math.round(scrollPercent * 100);
		if (scrollPercentRounded > 90) {
			const page  = this.state.page + 1

			this.setState({ page }, this.getPosts)
		}

	}

	getPosts() {
		const { page } = this.state
		
		this.props.requestAllPosts(page)

	}

	render() {
		const allPosts = this.props.posts.map((post) => (
			<PostIndexItem post={post} key={post.id} />
		));
		return (
			<div className='post-index-container top-90 gallery five-three'>
				{allPosts}
			</div>
		);
	}
}

export default PostIndex;
