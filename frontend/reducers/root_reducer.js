import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import DropdownReducer from './dropdown_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  dropdown: DropdownReducer,
  // modal: ModalReducer
});

export default RootReducer;
