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


const App = () => (
  <div>
  <div className="full-width"></div>
    <Switch>
      <AuthRoute exact path="/" component={GreetingContainer}/>
      <AuthRoute path="/login" component={SessionForm} />
      <AuthRoute path="/signup" component={SessionForm} />
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
