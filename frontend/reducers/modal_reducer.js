import {
  DISPLAY_MODAL,
  CLEAR_MODALS
} from '../actions/modal_actions';

const defaultState = {
  isOpen: false,
  component: null
};
const ModalReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case DISPLAY_MODAL:
    debugger
      return Object.assign({}, {isOpen: true, component: action.component});
    case CLEAR_MODALS:
      return defaultState;
    default:
      return state;
  }
};

export default ModalReducer;
