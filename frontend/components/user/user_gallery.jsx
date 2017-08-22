import React from 'react';
import PostIndexItem from '../posts/post_index_item';

export default class UserGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    const allPosts = this.props.posts.sort((a, b) => (b.created_at - a.created_at)).map((post) => (
      <PostIndexItem post={post} key={post.id}/>
      ));
    return (
      <div className='post-index-container user'>
        {allPosts}
      </div>
    );
  }
}
