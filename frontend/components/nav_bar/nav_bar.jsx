import React from 'react';
import { Router, Route, Link} from 'react-router-dom';
import GreetingContainer from  '../greeting/greeting_container';
import backTo from './back_to';

const Navbar = (props) => {
  const location = window.location.href.split('#/')[1];
  switch (location) {
    case 'login':
      return (
        <div className="navbar-container">
          {backTo()}
        </div>
      );
    case 'signup':
    return (<div className='navbar-container'>
      {backTo()}
    </div>);
    default:
      return(
        <header className='navbar-container'>
          <GreetingContainer/>
        </header>
      );
  }
  };

export default Navbar;
