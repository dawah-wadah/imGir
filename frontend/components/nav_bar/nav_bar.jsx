import React from 'react';
import { Router, Route, Link} from 'react-router-dom';
import UploadButton from './upload_button';
import MenuDrop from './menu_drop_down';
import SearchBar from './search_bar_dropdown';



  const NavBar = () => {
    return (
    <div id='topbar'>
      <nav className='right-side'>
        <div className='logo-menu-combo'>
          <a href='/' className='hoverable'> <div className='logo-icon'></div> </a>
          <MenuDrop className='hoverable'/>
        </div>
          <UploadButton/>
        </nav>
          <div className='left-side'>
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
          </div>
    </div>
  );};


export default NavBar;
