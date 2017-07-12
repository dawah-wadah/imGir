import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import NewComment from './create_comments';
import CommentIndexItem from '../comments/comments_index_item';
import {displayModal} from '../../actions/modal_actions';
import {requestAllComments, requestOneComment} from '../../actions/comment_actions';
import {selectAllComments} from '../../reducers/selectors';
// import {editVote, createVote, deleteVote } from '../../actions/vote_actions';


const mapStateToProps = (state, { session }) => {
  return {
    // loggedIn: Boolean(session.currentUser),
    comments: selectAllComments(state.comment.entities),

  };
};

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  displayModal: (component) => dispatch(displayModal(component)),
  requestAllComments: (id) => dispatch(requestAllComments(id)),
  requestOneComment: (id) => dispatch(requestOneComment(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndexItem);
