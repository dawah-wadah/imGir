import merge from 'lodash/merge';

import {
  RECEIVE_SEARCH,
} from '../actions/search_actions';

import {
  DISPLAY_DROPDOWN,
  CLEAR_DROPDOWNS
} from '../actions/dropdown_actions';


const defaultState = Object.freeze({
  search: {},
});

const SearchReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH:
    return Object.assign({}, state, {
        results: action.results
      });
    case DISPLAY_DROPDOWN:
    return Object.assign({}, state, {
        results: {}
      });
    default:
      return state;
  }
};

export default SearchReducer;
