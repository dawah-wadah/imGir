import React from 'react';
import { connect } from  'react-redux';
import { displayDropdown } from '../../actions/dropdown_actions';
import { displayModal } from '../../actions/modal_actions';
import UploadButtonContent from './upload_button_contents';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import UploadModalContent from '../upload_button/upload_button';

class UploadButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {open: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }


  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.displayDropdown();
  }

  handleModal(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.displayModal(UploadModalContent());
  }

  render() {
    return (
  <span className='upload-button-container' onClick={() => this.props.displayModal(<UploadModalContent/>)}>
    <div className='upload-button'>
      <div className='upload-icon'>
        <i className="fa fa-cloud-upload" aria-hidden="true"></i>
      </div>
      <div className='upload-text' onClick={this.handleOpen}>
        New Post
      </div>
    <div className="dropdown">
      <i className="fa fa-chevron-circle-down dropbtn"
         onClick={this.handleClick} aria-hidden="true"></i>
       { this.props.visible ? <UploadButtonContent /> : null }
    </div>
  </div>
  </span>
  );




}

}
const mapStateToProps = (state) => {
  return {
    visible: Boolean(state.dropdown.uploadDropdown),
    modal: Boolean(state.dropdown.uploadModal)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayDropdown: () => dispatch(displayDropdown({ uploadDropdown: true })),
    displayModal: (component) => dispatch(displayModal(component))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadButton);
