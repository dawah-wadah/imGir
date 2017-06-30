import React from 'react';
import { connect } from 'react-redux';

const PostDetail = ({post, createVote, editVote, deleteVote}) => {

  const _voted = (obj) => {
    return Boolean(obj.vote);
  };

  const _toggleVote = (type) => {
    if (_voted(post)) {
      if (post.vote.vote_type !== type) {

        return (editVote({
          vote: {
            id: post.vote.id,
            voteable_type: 'Post',
            voteable_id: post.id,
            vote_type: type
          }
        }));
      } else {
        return (deleteVote({id: post.vote.id}));
      }
    } else {
        createVote({
          vote: {
            voteable_type: "Post",
            voteable_id: post.id,
            vote_type: type
          }
        });
    }
  };




	return (
		<div className='post-info'>
			<div className='post-info-votes'>
				<div title="like" className="arrows" onClick={() => _toggleVote('Upvote')}>
					<i className="fa fa-arrow-up fa-2" aria-hidden="true">UP</i>
				</div>
				<div title='dislike' className='arrows' onClick={() => _toggleVote('Downvote')}>
					<i className="fa fa-arrow-down fa-2" aria-hidden="true">DW</i>
				</div>
				<p onMouseOver={console.log(_voted(post))}>{post.totalvotes}
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

import {createVote , editVote, deleteVote} from '../../actions/vote_actions';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser),
});


const mapDispatchToProps = (dispatch) => {
	return {
		createVote: (voteData) => dispatch(createVote(voteData)),
		editVote: (voteData) => dispatch(editVote(voteData)),
		deleteVote: (id) => dispatch(deleteVote(id))
	};
};



// const mapDispatchToProps = dispatch => ({
// 	createVote: (voteData) => dispatch(createVote(voteData))
// });

export default connect(
  null, mapDispatchToProps
)(PostDetail);
