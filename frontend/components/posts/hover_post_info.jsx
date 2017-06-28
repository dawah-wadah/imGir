import React from 'react';

const PostDetail = ({post}) => (
  <div className='post-info'>
    <div className='post-info-votes'>
      <div title="like" className="arrows">
        <i className="fa fa-arrow-up fa-2" aria-hidden="true"></i>
      </div>
      <div title='dislike' className='arrows'>
        <i className="fa fa-arrow-down fa-2" aria-hidden="true"></i>
      </div>
      <p>{post.totalvotes}
        points</p>
    </div>
    <div className='post-info-details'>
      <p>{post.title}</p>
    </div>
    <div className='post-info-tags'>
      <p>Tags</p>
      <p>Views Count</p>
    </div>
  </div>
);
