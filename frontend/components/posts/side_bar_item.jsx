import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


const SideBarItem = ({post}) => (
<Link to={`/posts/${post.id}`}>
  <div className='side-bar-item'>
    <div className='side-bar-item-pic'>
      <img src={post.main_image}/>
    </div>
    <div className='side-bar-item-info'>
      <p>{post.title}</p>
    </div>
  </div>
</Link>
);

export default SideBarItem;
