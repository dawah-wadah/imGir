import React from 'react';
import { connect } from 'react-redux';
import PostIndex from './post_index';
import { requestAllPosts, requestOnePost } from '../../actions/post_actions';
import { selectAllPosts } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  let userId = 0;
  if (state.session.currentUser){ userId = state.session.currentUser.id}
  return {
    posts: selectAllPosts(state.post.entities),
    currentUser: userId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestAllPosts: () => dispatch(requestAllPosts()),
    requestOnePost: (id) => dispatch(requestOnePost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
