import React from 'react';
import {Link} from 'react-router-dom';


const backTo = () => (
  <div id='back-zimngir'>
    <img src={window.images.back2show}/>
    <Link to="/">
      back to imGir
    </Link>
  </div>
);

export default backTo;
