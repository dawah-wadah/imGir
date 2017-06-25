import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PostZoom from './post_zoom';

const PostDetail = ({post, displayModal}) => (
  <div className='show-page'>

  <section className='post-container'>
    <div className='post-header'>

    <h1 className='post-title'>{post.title}</h1>
    <span className='post-author-link'>
      by <Link className='post-author-link' to={`/users/${post.author_id}`}>
        {post.author_name}
      </Link>
    </span>
  </div>
    <div className='post-images'>
      <img className='post-image' src={post.image_url}
        onClick={() => displayModal(<PostZoom img={post.image_url} />)}/>
    </div>
    <div className='side-bar'>
      stuff
    </div>

    <div className='post-comments-container'>

    </div>
  </section>
  </div>
);
import { displayModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    modal: Boolean(state.dropdown.uploadModal)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayModal: (component) => dispatch(displayModal(component))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
