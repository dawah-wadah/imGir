import React from 'react';
import { Provider } from 'react-redux';
import {Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionForm from './session_form/session_form_container';
import PostIndexContainer from './posts/post_index_container';
import Header from './nav_bar/header';
import { connect } from 'react-redux';
import Modal from './modal';

import { clearDropdowns } from '../actions/dropdown_actions';


const App = () => (
  <div id='main-window' onClick={() => clearDropdowns()} >
  <Modal/>
  <Header/>
  <Switch>
    <AuthRoute path="/login" component={SessionForm} />
    <AuthRoute path="/signup" component={SessionForm} />
    <Route exact path='/' component={PostIndexContainer}/>
  </Switch>
  </div>
);

export default App;
