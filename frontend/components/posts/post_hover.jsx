import React from 'react';
import { connect } from 'react-redux';
import {createVote} from '../../actions/vote_actions';

const PostDetail = ({post, createVote}) => {

  const _toggleVote = (type) => {
    createVote({
      vote: {
        voteable_type: "Post",
        voteable_id: post.id,
        vote_type: type
      }
    });
    console.log('it ' + type);
  };

  const _toggleDownVote = () => {
    createVote({
      vote: {
        voteable_type: "Post",
        voteable_id: post.id,
        vote_type: "DownVote"
      }
    });
    console.log('it downvoted');
  };

	return (
		<div className='post-info'>
			<div className='post-info-votes'>
				<div title="like" className="arrows" onClick={() => _toggleVote('Upvote')}>
					<i className="fa fa-arrow-up fa-2" aria-hidden="true"></i>
				</div>
				<div title='dislike' className='arrows' onClick={() => _toggleVote('Downvote')}>
					<i className="fa fa-arrow-down fa-2" aria-hidden="true"></i>
				</div>
				<p onMouseOver={console.log(post.totalvotes)}>{post.totalvotes}
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
};



const mapDispatchToProps = dispatch => ({
	createVote: (voteData) => dispatch(createVote(voteData))
});

export default connect(
  null, mapDispatchToProps
)(PostDetail);
