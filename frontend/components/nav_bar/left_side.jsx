import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar_container';
import { Router, Route, Link} from 'react-router-dom';


const LeftSide = ({loggedIn, logout, user}) => {
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
        <li className="signin-link hoverable">
          <Link to={`/users/${user.id}`}
            className='navlink-btn'> {user.username} </Link>
        </li>
      </ul>
    );
  }
};

import {logout} from '../../actions/session_actions';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    user: session.currentUser,
    errors: session.errors
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide);
