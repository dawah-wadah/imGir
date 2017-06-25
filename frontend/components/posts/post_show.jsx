import React from 'react';
import {Link} from 'react-router-dom';
import PostDetail from './post_detail';


class PostShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePost(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
  if (this.props.match.params.id !== nextProps.match.params.id) {
    this.props.requestSinglePost(this.props.id);
    }
  }

  render(){

    const {post, id} = this.props;
    if (post[id]){
      return (
        <PostDetail post={post[id]}/>
      );
    } else {
      return (<section className='post-show-page'>
        <h1>Nothing to Show</h1>
      </section>);

    }
  }

}

export default PostShow;
