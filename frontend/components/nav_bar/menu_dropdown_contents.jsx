import React from 'react';
import { Link } from 'react-router-dom';

const MenuDropdownContents = ({clearDropdowns}) => (
  <div className="dropdown-content" id="myMenuDropdown" onClick={(e) => e.stopPropagation()}>
    <a href='https://selfiegram-app.herokuapp.com/'>Visit Selfiegram</a>
    <a href='https://github.com/dawah-wadah'>Visit My Github</a>
    <a href='//imagest.herukoapp.com'> Visit Yaakov's Site</a>
    <a>test</a>
    <Link to='/login'> Login </Link>
    <Link to='/signup' onClick={() => clearDropdowns()}>Sign Up</Link>

  </div>
);


export default MenuDropdownContents;
