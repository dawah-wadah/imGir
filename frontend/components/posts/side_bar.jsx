import React from 'react';
import { connect } from 'react-redux';
import { selectAllPosts } from '../../reducers/selectors';
import SideBarItem from './side_bar_item';


class SideBar extends React.Component {
  constructor(props){
    super(props);
  }

componentDidMount() {
  if (!this.props.posts.length > 2) {
    this.props.requestAllPosts();
  }
}


render(){
  const posts = this.props.posts.map( (post) => (
    <SideBarItem post={post} key={post.id}/>
  ) );
  return (
    <div className='side-bar-items'>
      {posts}
    </div>
  );
}
}

import { requestAllPosts } from '../../actions/post_actions';

const mapStateToProps = (state) => {
  return {
    posts: selectAllPosts(state.post.entities)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestAllPosts: () => dispatch(requestAllPosts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
