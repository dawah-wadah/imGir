import React from 'react';
import { connect } from 'react-redux';
import PostIndex from './post_index';
import { requestAllPosts, requestSinglePost } from '../../actions/post_actions';

const mapStateToProps = (state) => {
  return {
    posts: state.post
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestAllPosts: () => dispatch(requestAllPosts),
    requestSinglePost: () => dispatch(requestSinglePost)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
