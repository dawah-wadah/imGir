import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import UploadModalContent from './upload_button';
import { uploadImage } from '../../actions/image_actions';
import { createPost } from '../../actions/post_actions';
import {clearModals} from '../../actions/modal_actions';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadImage: (image) => dispatch(uploadImage(image)),
    createPost: (post, image) => dispatch(createPost(post, image)),
    clearModals: () => dispatch(clearModals())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadModalContent));
