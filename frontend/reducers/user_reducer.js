import merge from 'lodash/merge';

import {
  RECEIVE_ONE_USER,
  RECEIVE_USER_POSTS,
  RECEIVE_USER_COMMENTS
} from '../actions/user_actions';

const nullUser = Object.freeze({
  user: null,
});

const UserReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_USER:
      const user = action.user;
      return merge({}, state, {
        user
      });
    case RECEIVE_USER_POSTS:

    const posts = action.posts;
    let newState = Object.assign({}, state, {
      posts
    });
    return newState;
    case RECEIVE_USER_COMMENTS:
      const comments = action.comments;
      return Object.assign({}, state, {
        comments
      });
    default:
      return state;
  }
};

export default UserReducer;
