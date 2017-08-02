import { combineReducers } from 'redux';
import session from './session_reducer';
import dropdown from './dropdown_reducer';
import post from './post_reducer';
import modal from './modal_reducer';
import image from './image_reducer';
import comment from './comment_reducer';
import search from './search_reducer';
import user from './user_reducer';

const RootReducer = combineReducers({
  session,
  dropdown,
  post,
  modal,
  image,
  comment,
  search,
  user,
});

export default RootReducer;
