import React from 'react';
import PostShow from './post_show';
import {connect} from 'react-redux';
import { requestOnePost } from '../../actions/post_actions';

const mapStateToProps = (state, {match}) => {
  return({
  post: state.post.entities,
  id: match.params.id
});};

const mapDispatchToProps = dispatch => ({
  requestOnePost: (id) => dispatch(requestOnePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
