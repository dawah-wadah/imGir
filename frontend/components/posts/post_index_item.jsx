import React from 'react';
import {Link, Route} from 'react-router-dom';

const PostDetail = ({post}) => (
	<div className='post-info'>
		<div className='post-info-votes'>
			<div title="like" className="arrows">
				<i className="fa fa-arrow-up fa-2" aria-hidden="true"></i>
			</div>
			<div title='dislike' className='arrows'>
				<i className="fa fa-arrow-down fa-2" aria-hidden="true"></i>
			</div>
			<p>{post.totalvotes}
				points</p>
		</div>
		<div className='post-info-details'>
			<p>{post.title}</p>
		</div>
		<div className='post-info-tags'>
			<p>Tags</p>
			<p>Views Count</p>
		</div>
	</div>
);

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
