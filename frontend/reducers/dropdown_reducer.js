import {
  DISPLAY_DROPDOWN,
  CLEAR_DROPDOWNS
} from '../actions/dropdown_actions';

const DropdownReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case DISPLAY_DROPDOWN:
      return Object.assign({}, state, action.menu);
    case CLEAR_DROPDOWNS:
      return {};
    default:
      return state;
  }
};

export default DropdownReducer;
