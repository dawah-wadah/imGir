import { connect } from 'react-redux';
import UploadModalContent from './upload_button';
import { uploadImage } from '../../actions/image_actions';
import { createPost } from '../../actions/post_actions';

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadImage: (image) => dispatch(uploadImage(image)),
    createPost: (post) => dispatch(createPost(post)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadModalContent);
