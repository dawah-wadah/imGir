import React from 'react';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.requestAllPosts = this.props.requestAllPosts.bind(this);
  }

  componentDidMount(){
    this.requestAllPosts();
  }

  render(){
    if (this.props.posts.entities){
      return(<h1 className='test-stuff'>Youve got posts</h1>);
    } else {
    return(
      <h1 className='test-stuff'>hello</h1>
    );
  }
  }
}

export default PostIndex;
