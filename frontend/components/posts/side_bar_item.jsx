import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


const SideBarItem = ({post}) => (
  <div className='side-bar-item'>
    <span>
      <Link to={`/posts/${post.id}`}>
        <img src={post.image_url}/>
        <p>post.title</p>
      </Link>
    </span>
  </div>
);

export default SideBarItem;
