import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = (post) => (
  <div className='post-index-item'>
    <ul>
      <li> post.title </li>
      <li> post.user </li>
      <li> post.id </li>
    </ul>
  </div>
);

export default PostIndexItem;
