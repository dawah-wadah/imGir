import React from 'react';
import PostIndexItem from '../posts/post_index_item';

export default class UserGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allPosts = this.props.posts.map((post) => (
      <PostIndexItem post={post} key={post.id}/>
      ));
    return (
      <div className='post-index-container user'>
        {allPosts}
      </div>
    );
  }
}
