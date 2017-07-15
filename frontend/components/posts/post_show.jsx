import React from 'react';
import {Link} from 'react-router-dom';
import PostDetail from './post_detail';


class PostShow extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount(){
    this.props.requestOnePost(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
  if (this.props.match.params.id !== nextProps.match.params.id) {
    this.props.requestOnePost(nextProps.match.params.id);
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
        <img src={window.images.loading}/>
      </section>);

    }
  }

}

export default PostShow;
