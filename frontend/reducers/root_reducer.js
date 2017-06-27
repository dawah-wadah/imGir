import { combineReducers } from 'redux';
import session from './session_reducer';
import dropdown from './dropdown_reducer';
import post from './post_reducer';
import modal from './modal_reducer';
import image from './image_reducer';
import comment from './comment_reducer';

const RootReducer = combineReducers({
  session,
  dropdown,
  post,
  modal,
  image,
  comment,
});

export default RootReducer;
