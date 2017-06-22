import React from 'react';

const MenuDropdownContents = () => (
  <div className="dropdown-content" id="myMenuDropdown" onClick={(e) => e.stopPropagation}>
    <a href='https://selfiegram-app.herokuapp.com/'>Visit Selfiegram</a>
    <a href='https://github.com/dawah-wadah'>Visit My Github</a>
    <a href='//imagest.herukoapp.com'> Visit Yaakov's Site</a>
    <a>test</a>
  </div>
);


export default MenuDropdownContents;
