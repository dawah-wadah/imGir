import React from 'react';
import { connect } from 'react-redux';
import SessionFormModal from '../session_form/session_form_modal';
import { DeleteButton } from '../delete/delete_button';


const PostDetail = ({post, createVote, editVote, deleteVote, loggedIn, displayModal}) => {
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

  const _actionTodo = (type) => {
    if (loggedIn) {
      _toggleVote(type);
    } else {
      displayModal(<SessionFormModal/>);
    }
  };


	return (
		<div className='post-info'>
			<div className='post-info-votes'>
				<div title="like" className="arrows" onClick={() => _actionTodo('Upvote')}>
					<i className="fa fa-arrow-up fa-2" aria-hidden="true"></i>
				</div>
				<div title='dislike' className='arrows' onClick={() => _actionTodo('Downvote')}>
					<i className="fa fa-arrow-down fa-2" aria-hidden="true"></i>
				</div>
				<p>{post.totalvotes}
					points</p>
			</div>
			<div className='post-info-details'>
				<p>{post.title}</p>
			</div>
			<div className='post-info-tags'>
				<p>Tags: Album</p>
				<p>{post.view_count + ' views'}</p>
			</div>
		</div>
	);
};

import {createVote , editVote, deleteVote} from '../../actions/vote_actions';
import {displayModal} from '../../actions/modal_actions';

const mapStateToProps = ({session}) => {
  let userId = 0;
  if (session.currentUser){ userId = session.currentUser.id}

  return ({
  loggedIn: Boolean(session.currentUser),
  currentUser: userId
})};


const mapDispatchToProps = (dispatch) => {
	return {
		createVote: (voteData) => dispatch(createVote(voteData)),
		editVote: (voteData) => dispatch(editVote(voteData)),
		deleteVote: (id) => dispatch(deleteVote(id)),
    displayModal: (comp) => dispatch(displayModal(comp))
	};
};


export default connect(
  mapStateToProps, mapDispatchToProps
)(PostDetail);
