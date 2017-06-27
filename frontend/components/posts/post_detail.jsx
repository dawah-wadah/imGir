import React from 'react';
import {Link} from 'react-router-dom';
import NewComment from '../comments/create_comments';
import {connect} from 'react-redux';
import PostZoom from './post_zoom';
import SideBar from './side_bar';
import ImageShow from './image_show';
import CommentIndexItem from '../comments/comments_index_item';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let allPics = this.props.post.images
    .map((image) => (<ImageShow image={image}/>));
    return (
      <div className='show-page'>
        <section className='post-container'>
          <div className='post-header'>
            <h1 className='post-title'>{this.props.post.title}</h1>
            <span className='post-author-link'>
              by
              <Link className='post-author-link'
                to={`/users/${this.props.post.author_id}`}>
                {this.props.post.author_name}
              </Link>
            </span>
          </div>
          {allPics}
          <div className='post-description'>
            {this.props.post.description}
          </div>
          <div className='post-comments-container'>
            <NewComment/>
            <CommentIndexItem/>
          </div>
        </section>
        <div className='side-bar'>
          <SideBar/>
        </div>
      </div>
    );
  }
}
import {displayModal} from '../../actions/modal_actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
