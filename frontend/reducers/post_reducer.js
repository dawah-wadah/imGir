import { merge } from 'lodash';

import {
  RECEIVE_ONE_POST,
  RECEIVE_ALL_POSTS
} from '../actions/post_actions';

import { RECEIVE_SEARCH } from '../actions/search_actions';


const defaultState = () => ({
  entities: {},
  currentPost: null
});

const PostReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, state, {
        entities: action.posts,
       });
    case RECEIVE_ONE_POST:
      const post = action.post;
      return merge({}, state, {
        entities: { [post.id]: post },
        currentPost: post.id
      });
    // case RECEIVE_SEARCH:
    //   return merge({}, {
    //     entities: action.results.results,
    //   });
    default:
      return state;
  }
};

export default PostReducer;
