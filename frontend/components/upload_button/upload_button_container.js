import { connect } from 'react-redux';
import UploadModalContent from './upload_button';
import { uploadImage } from '../../actions/image_actions';

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadImage: (image) => dispatch(uploadImage(image)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadModalContent);
