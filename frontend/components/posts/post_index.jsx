import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPosts();
  }

  render(){
    const allPosts = this.props.posts.map((post) => (
      <PostIndexItem post={post} key={post.id}/>
    ));
    debugger
    return(
      <div className='post-index-container'>
        {allPosts}
      </div>
    );
  }
}

export default PostIndex;
