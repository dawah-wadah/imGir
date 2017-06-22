import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';
import * as SessionActions from './actions/session_actions';
import * as PostActions from './actions/post_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  window.logout = SessionActions.logout;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.createPost = PostActions.createPost;
  window.requestAllPosts = PostActions.requestAllPosts;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
