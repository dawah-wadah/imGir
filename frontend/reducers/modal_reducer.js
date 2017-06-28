import {
  DISPLAY_MODAL,
  CLEAR_MODALS
} from '../actions/modal_actions';

import { RECEIVE_ONE_POST } from '../actions/post_actions';


const defaultState = {
  isOpen: false,
  component: null
};
const ModalReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case DISPLAY_MODAL:
      return Object.assign({}, {isOpen: true, component: action.component});
    case CLEAR_MODALS:
      return defaultState;
    case RECEIVE_ONE_POST:
      return defaultState;
    default:
      return state;
  }
};

export default ModalReducer;
