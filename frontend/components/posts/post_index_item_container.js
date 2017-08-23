import React from 'react';
import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';
import { deletePost } from '../../actions/post_actions'


const mapStateToProps = ({session}) => {
  let userId = 0;
  if (session.currentUser){ userId = session.currentUser.id}
  return {
    currentUser: userId
  };
};

const mapDispatchToProps = dispatch => ({
  deletePost: (id) => dispatch(deletePost(id))
});


export default connect(
  mapStateToProps,
  null
)(PostIndexItem);
