import React from 'react';
import {Link} from 'react-router-dom';


const backTo = () => (
  <div id='back-zimngir'>
    <img src='assets/gir-back-to-show'/>
    <Link to="/">
      back to imGir
    </Link>
  </div>
);

export default backTo;
