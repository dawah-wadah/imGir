import merge from 'lodash/merge';

import {
  RECEIVE_ONE_USER,
  RECEIVE_USER_POSTS,
  RECEIVE_USER_COMMENTS
} from '../actions/user_actions';

import {
  DESTROY_POST
} from '../actions/post_actions';

const nullUser = Object.freeze({
  user: null,
});

const UserReducer = (state = nullUser, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ONE_USER:
      const user = action.user;
      return merge({}, state, {
        user
      });
    case DESTROY_POST:
      if (newState.posts && newState.posts[action.post.id]){
        delete newState.posts[action.post.id]
      }
      return newState
    case RECEIVE_USER_POSTS:
    const posts = action.posts;
    return Object.assign({}, newState, { posts });
    case RECEIVE_USER_COMMENTS:
      const comments = action.comments;
      return Object.assign({}, newState, { comments });
    default:
      return state;
  }
};

export default UserReducer;
