import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SessionForm from './session_form/session_form_container';
import PostIndexContainer from './posts/post_index_container';
import Header from './nav_bar/header';
import backTo from './nav_bar/back_to';
import { connect } from 'react-redux';

import { clearDropdowns } from '../actions/dropdown_actions';


const App = (props) => (
  <div id='main-window' onClick={() => props.clearDropdowns()}>
    <Header/>
    <Switch>
      <AuthRoute exact path="/login" component={SessionForm} />
      <AuthRoute exact path="/signup" component={SessionForm} />
      <AuthRoute path='/' component={PostIndexContainer}/>
    </Switch>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearDropdowns: () => dispatch(clearDropdowns())
});


export default connect(null, mapDispatchToProps)(App);
