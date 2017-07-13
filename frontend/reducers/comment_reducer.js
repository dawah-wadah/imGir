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
  switch (action.type) {
    case RECEIVE_ONE_POST:

      const comments = action.post.comments;
      return Object.assign({}, state, {
        entities: comments
      });
      case RECEIVE_ALL_COMMENTS:
        return merge({}, {
          entities: action.comments
        });
    case RECEIVE_ONE_COMMENT:
      const comment = action.comment;
      const parent_type = comment.parent_type;
      let newState = merge({}, state, {
        entities: {}
      });
      if (parent_type === 'Comment') {

        newState.entities[comment.parent_id].replies.push(comment.id);
      }
      newState.entities[comment.id] = comment;

      return newState;
    default:
      return state;
  }
};

export default CommentReducer;
