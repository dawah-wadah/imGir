import React from  'react';
import { connect } from 'react-redux';

import PostZoom from './post_zoom';

const ImageShow = (props) => (
    <div className='post-images' key={props.image.id} >
      <img className='post-image' src={props.image.image_url}
        onClick={() => props.displayModal(<PostZoom img={props.image.image_url} />)}/>
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
)(ImageShow);
