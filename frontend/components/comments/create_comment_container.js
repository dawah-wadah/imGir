import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import NewComment from './create_comments';
import {displayModal} from '../../actions/modal_actions';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  displayModal: (component) => dispatch(displayModal(component)),
  ownProps
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComment);
