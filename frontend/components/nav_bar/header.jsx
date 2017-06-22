import React from 'react';
import { Router, Route, Link} from 'react-router-dom';
import GreetingContainer from  '../greeting/greeting_container';
import backTo from './back_to';
import NavBar from './nav_bar';

const Header = (props) => {
  const location = window.location.href.split('#/')[1];
  switch (location) {
    case 'login':
      return (
        <div>
          {backTo()}
        </div>
      );
    case 'signup':
    return (<div>
      {backTo()}
    </div>);
    default:
      return(
        <header className='navbar-container'>
          <NavBar/>
        </header>
      );
  }
  };

export default Header;
