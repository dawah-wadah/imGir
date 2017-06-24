import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar_container';
import { Router, Route, Link} from 'react-router-dom';

import {logout} from '../../actions/session_actions';

const LeftSide = ({loggedIn, logout}) => {
  if (!loggedIn) {
    return (
      <ul className='user-nav'>
        <li id='global-search-container'>
          <SearchBar/>
        </li>
        <li className="signin-link hoverable">
          <Link to='/login' className='navlink-btn'> sign in </Link>
        </li>
        <li className='signin-link hoverable'>
          <Link to='/signup' className='navlink-btn'> sign up </Link>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className='user-nav'>
        <li id='global-search-container'>
          <SearchBar/>
        </li>
        <li className="signin-link hoverable" onClick={ ()=> logout()}>
          <Link to='/' className='navlink-btn'> Logout </Link>
        </li>
      </ul>
    );
  }
};



const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide);
