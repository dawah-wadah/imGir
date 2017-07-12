import merge from 'lodash/merge';

import {
  RECEIVE_SEARCH,
} from '../actions/search_actions';


const defaultState = Object.freeze({
  search: {},
});

const SearchReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH:
      return merge({}, state, {
        results: action.results
      });
    default:
      return state;
  }
};

export default SearchReducer;
