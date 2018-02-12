import React from 'react';
import { connect } from 'react-redux';
import { selectAllPosts } from '../../reducers/selectors';
import SideBarItem from './side_bar_item';
import { Link, withRouter } from 'react-router-dom';



class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this)
  }

  componentDidMount() {
    if (this.props.posts.length < 2) {
      this.props.requestAllPosts().then(() => {
        this.scroll()
      })
    }
  }

  componentDidUpdate(nextProps) {
    this.scroll()
  }

  scroll() {
    let id = this.props.id
    this.refs[id].scrollIntoView({ block: 'start', nearest: "inline", behavior: 'smooth' })

  }

  render() {
    const posts = this.props.posts.map((post) => (
      // <SideBarItem post={post} key={post.id}/>
      <Link key={post.id + 10000} to={`/posts/${post.id}`}>
        <div ref={post.id} className='side-bar-item'>
          <div className='side-bar-item-pic'>
            <img src={post.main_image} />
          </div>
          <div className='side-bar-item-info'>
            <p>{post.title}</p>
          </div>
        </div>
      </Link>
    ));
    return (
      <div className='side-bar-items'>
        {posts}
      </div>
    );
  }
}

import { requestAllPosts } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: selectAllPosts(state.post.entities),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestAllPosts: () => dispatch(requestAllPosts()),
    id: ownProps.match.params.id
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar));
