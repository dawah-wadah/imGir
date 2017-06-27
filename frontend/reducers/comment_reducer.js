import merge from 'lodash/merge';

import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
} from '../actions/comment_actions';

const defaultState = Object.freeze({
  entities: {},
  currentComment: null
});

const CommentReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, state, {
        entities: action.comments
      });
    case RECEIVE_COMMENT:
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
