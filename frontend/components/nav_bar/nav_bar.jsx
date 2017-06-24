import React from 'react';
import UploadButton from './upload_button';
import MenuDrop from './menu_drop_down';
import LeftSide from './left_side';



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
            <LeftSide/>
          </div>
    </div>
  );};


export default NavBar;
