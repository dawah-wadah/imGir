import React from 'react';
import { Link } from 'react-router-dom';

const MenuDropdownContents = ({clearDropdowns}) => (
  <div className="dropdown-content" id="myMenuDropdown" onClick={(e) => e.stopPropagation()}>
    <a href='https://www.linkedin.com/in/wadahadlan/' target="_blank">Visit My LinkedIn</a>
    <a href='https://github.com/dawah-wadah' target="_blank">Visit My Github</a>
    <a href='http://www.wadah.us' target="_blank"> Visit My Portfolio</a>
    <Link to='/login'> Login </Link>
    <Link to='/signup' onClick={() => clearDropdowns()}>Sign Up</Link>

  </div>
);


export default MenuDropdownContents;
