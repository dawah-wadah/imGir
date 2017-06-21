import React from 'react';
import { Router, Route, Link} from 'react-router-dom';


  const NavBar = () => (
    <div id='topbar'>

      <nav className='right-side'>
        <a href='/'> <div className='logo-icon'></div> </a>
          <div className='link-menu'>
            <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
          </div>
          <div className='upload-button-container'>
            <div className='upload-button'>
              <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                   Upload
            </div>
          </div>
      </nav>
      <div className='left-side'>
        <ul className='user-nav'>
          <li id='global-search-container'>Search</li>
          <li className="signin-link">
            <Link to='/login' className='navlink-btn'> Login </Link>
          </li>
          <li className='signin-link'>
            <Link to='/signup' className='navlink-btn'> Sign-Up </Link>
          </li>
        </ul>
      </div>
    </div>
  );


export default NavBar;
