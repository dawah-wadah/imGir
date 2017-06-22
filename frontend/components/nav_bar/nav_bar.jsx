import React from 'react';
import { Router, Route, Link} from 'react-router-dom';
import UploadButton from './upload_button';

// <div className='upload-button-container'>
//   <div className='upload-button'>
//     <i className="fa fa-cloud-upload" aria-hidden="true"></i>
//     Upload
//   </div>
// </div>

  const NavBar = () => {
    return (
    <div id='topbar'>
      <nav className='right-side'>
        <a href='/' className='hoverable'> <div className='logo-icon'></div> </a>
          <div className='link-menu'>
            <i className="fa fa-chevron-circle-down hoverable" aria-hidden="true"></i>
          </div>
          <UploadButton/>
        </nav>
          <div className='left-side'>
            <ul className='user-nav'>
              <li id='global-search-container'>
                <i className="fa fa-search" aria-hidden="true"></i>
              </li>
              <li className="signin-link hoverable">
                <Link to='/login' className='navlink-btn'> sign in </Link>
              </li>
              <li className='signin-link hoverable'>
                <Link to='/signup' className='navlink-btn'> sign up </Link>
              </li>
            </ul>
          </div>
    </div>
  );};


export default NavBar;
