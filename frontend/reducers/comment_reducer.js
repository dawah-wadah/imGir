import merge from 'lodash/merge';

import {
  RECEIVE_ONE_COMMENT,
  RECEIVE_ALL_COMMENTS,
} from '../actions/comment_actions';

import {
  RECEIVE_ONE_POST
} from '../actions/post_actions';

const defaultState = Object.freeze({
  entities: {},
  currentComment: null
});

const CommentReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ONE_POST:
    return merge({}, {
      entities: action.post.comments
    });
    case RECEIVE_ALL_COMMENTS:
    
      return merge({}, {
        entities: action.comments
      });
    case RECEIVE_ONE_COMMENT:
      const comment = action.comment;
      return merge({}, state, {
        entities: { [comment.id]: comment },
        currentComment: comment.id
      });
    default:
      return state;
  }
};

export default CommentReducer;
