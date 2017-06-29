import { merge } from 'lodash';

import {
  RECEIVE_ONE_POST,
  RECEIVE_ALL_POSTS
} from '../actions/post_actions';

const defaultState = () => ({
  entities: {},
});

const PostReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, state, { entities: action.posts });
    case RECEIVE_ONE_POST:
      const post = action.post;
      return merge({}, state, {
        entities: { [post.id]: post },
      });
    default:
      return state;
  }
};

export default PostReducer;
