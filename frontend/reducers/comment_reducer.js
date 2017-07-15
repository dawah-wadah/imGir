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
});

const CommentReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_POST:
      const comments = action.post.comments;
      let newState = merge({}, state, {
        entities: comments
      });
      return newState;
    case RECEIVE_ONE_COMMENT:
      const comment = action.comment;
      const parentType = comment.parent_type;
      newState = merge({}, state, {
        entities: {}
      });
      if (parentType === 'Comment' && !newState.entities[comment.parent_id].comment_ids.includes(comment.id) ) {

        newState.entities[comment.parent_id].comment_ids.push(comment.id);
      }
      newState.entities[comment.id] = comment;

      return newState;
    default:
      return state;
  }
};

export default CommentReducer;
