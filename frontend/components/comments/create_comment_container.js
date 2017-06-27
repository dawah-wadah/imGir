import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import NewComment from './create_comments';


// const mapStateToProps = (stuff) => {
//   
//   return({
//   parentId: stuff.id,
//   commentType: stuff.type
// })};

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(
  null,
  mapDispatchToProps
)(NewComment);
