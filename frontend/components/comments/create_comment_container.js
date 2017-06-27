import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import NewComment from './create_comment';


const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComment);
