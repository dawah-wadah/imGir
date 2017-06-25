import React from 'react';
import {Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionForm from './session_form/session_form_container';
import PostIndexContainer from './posts/post_index_container';
import PostShow from './posts/post_show_container';

const Main = ({clearDropdowns}) => (
  <div id='main-window' >
    <Switch>
      <Route exact path='/' component={PostIndexContainer}/>
      <Route exact path="/posts" component={PostIndexContainer}/>
      <Route exact path="/posts/:id" component={PostShow}/>
      <AuthRoute path="/login" component={SessionForm} />
      <AuthRoute path="/signup" component={SessionForm} />
    </Switch>
  </div>
);

// onClick={() => clearDropdowns()}
export default Main;
