import React from 'react';
import PostShow from './post_show';
import {connect} from 'react-redux';
import { requestSinglePost } from '../../actions/post_actions';

const mapStateToProps = (state, {match}) => {
  return({
  post: state.post.entities,
  id: match.params.id
});};

const mapDispatchToProps = dispatch => ({
  requestSinglePost: (id) => dispatch(requestSinglePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
