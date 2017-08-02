import React from 'react';
import {Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionForm from './session_form/session_form_container';
import PostIndex from './posts/post_index_container';
import PostShow from './posts/post_show_container';
import UploadPage from './upload_button/upload_page';
import User from './user/user_container';


const Main = ({clearDropdowns}) => (
  <div id='main-window' onClick={() => clearDropdowns()}>
    <Switch>
      <Route exact path='/' component={PostIndex}/>
      <Route exact path="/posts" component={PostIndex}/>
      <Route exact path="/posts/:id" component={PostShow}/>
      <Route path="/users/:id" component={User}/>
      <AuthRoute path="/login" component={SessionForm} />
      <AuthRoute exact path="/posts/new" component={UploadPage} />
      <AuthRoute path="/signup" component={SessionForm} />
    </Switch>
  </div>
);


export default Main;
