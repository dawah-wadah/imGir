import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import DropdownReducer from './dropdown_reducer';
import PostReducer from './post_reducer';
import ModalReducer from './modal_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  dropdown: DropdownReducer,
  post: PostReducer,
  modal: ModalReducer,
});

export default RootReducer;
