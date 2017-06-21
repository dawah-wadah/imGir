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
import Header from './nav_bar/header';
import backTo from './nav_bar/back_to';




const App = () => (
  <div id='main-window'>
    <Header/>
    <Switch>
      <AuthRoute exact path="/login" component={SessionForm} />
      <AuthRoute exact path="/signup" component={SessionForm} />
    </Switch>
  </div>
);

export default App;

// <GreetingContainer />
// <header>
// <Link to="/" className="header-link">
// <h1>Invader Gir</h1>
// </Link>
// </header>
